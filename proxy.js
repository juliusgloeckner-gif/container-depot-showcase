import { NextResponse } from "next/server";
import {
  CONSTRUCTION_VARIANT_COOKIE,
  DEFAULT_CONSTRUCTION_B_PERCENT,
  NEW_ORIGIN,
  OLD_ORIGIN,
  ORIGIN_VARIANT_COOKIE,
  chooseVariant,
  destinationPath,
  isConstructionKnowledgeAssetPath,
  isConstructionKnowledgePath,
  isConstructionPath,
  normalizeVariant,
  parseConstructionBPercent,
} from "./experiment.mjs";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function setVariantCookie(response, name, variant) {
  response.cookies.set(name, variant, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    secure: true,
    httpOnly: true,
  });
}

function applyExperimentHeaders(response, {
  variant,
  pathname,
  forcedVariant,
  constructionCookieVariant,
  originVariant,
}) {
  response.headers.set("x-ucd-variant", variant);
  response.headers.set("vary", "Cookie");

  if (normalizeVariant(originVariant) !== variant) {
    setVariantCookie(response, ORIGIN_VARIANT_COOKIE, variant);
  }

  if (
    isConstructionPath(pathname) &&
    !isConstructionKnowledgePath(pathname) &&
    (forcedVariant || !normalizeVariant(constructionCookieVariant))
  ) {
    setVariantCookie(response, CONSTRUCTION_VARIANT_COOKIE, variant);
  }

  return response;
}

async function fetchRedesignPage(destination, request) {
  const upstreamHeaders = new Headers();
  for (const headerName of [
    "accept",
    "accept-language",
    "cookie",
    "referer",
    "user-agent",
  ]) {
    const value = request.headers.get(headerName);
    if (value) upstreamHeaders.set(headerName, value);
  }

  const upstream = await fetch(destination, {
    method: request.method,
    headers: upstreamHeaders,
    redirect: "manual",
    signal: AbortSignal.timeout(15000),
  });

  const responseHeaders = new Headers(upstream.headers);
  responseHeaders.delete("content-length");
  responseHeaders.delete("content-encoding");

  return new NextResponse(request.method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export async function proxy(request) {
  const requestUrl = request.nextUrl.clone();

  if (requestUrl.pathname === "/__router/status") {
    const redesignPercent = parseConstructionBPercent(
      process.env.UCD_CONSTRUCTION_B_PERCENT,
    );
    return NextResponse.json({
      status: "ok",
      experiment: "ucd-construction-redesign-2026",
      constructionSplit: {
        currentSite: 100 - redesignPercent,
        redesign: redesignPercent,
      },
      redesignOnly: ["/moving", "/institutions", "/farm"],
      constructionKnowledge: "redesign-only and indexable",
      legacyTraffic: "current-site",
    });
  }

  const forcedVariant = normalizeVariant(
    requestUrl.searchParams.get("__ucd_variant"),
  );
  const constructionCookieVariant = request.cookies.get(
    CONSTRUCTION_VARIANT_COOKIE,
  )?.value;
  const originVariant = request.cookies.get(ORIGIN_VARIANT_COOKIE)?.value;
  const variant = chooseVariant({
    forcedVariant,
    constructionCookieVariant,
    originVariant,
    pathname: requestUrl.pathname,
    userAgent: request.headers.get("user-agent") || "",
    constructionBPercent:
      process.env.UCD_CONSTRUCTION_B_PERCENT ||
      DEFAULT_CONSTRUCTION_B_PERCENT,
  });

  const destination = new URL(
    destinationPath(variant, requestUrl.pathname),
    variant === "B" ? NEW_ORIGIN : OLD_ORIGIN,
  );

  for (const [key, value] of requestUrl.searchParams.entries()) {
    if (key !== "__ucd_variant") destination.searchParams.append(key, value);
  }

  let response;
  if (
    variant === "B" &&
    (
      destination.pathname.endsWith("/index.html") ||
      isConstructionKnowledgeAssetPath(requestUrl.pathname)
    )
  ) {
    response = await fetchRedesignPage(destination, request);
    if (
      isConstructionKnowledgePath(requestUrl.pathname) ||
      isConstructionKnowledgeAssetPath(requestUrl.pathname)
    ) {
      response.headers.delete("x-robots-tag");
    }
    response.headers.set("x-ucd-router-mode", "fetch");
  } else {
    response = NextResponse.rewrite(destination);
    response.headers.set("x-ucd-router-mode", "rewrite");
  }

  return applyExperimentHeaders(response, {
    variant,
    pathname: requestUrl.pathname,
    forcedVariant,
    constructionCookieVariant,
    originVariant,
  });
}

export const config = {
  matcher: "/:path*",
};
