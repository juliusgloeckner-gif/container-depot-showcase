import { NextResponse } from "next/server";
import {
  DEFAULT_B_PERCENT,
  NEW_ORIGIN,
  OLD_ORIGIN,
  VARIANT_COOKIE,
  chooseVariant,
  destinationPath,
  normalizeVariant,
  parseBPercent,
} from "./experiment.mjs";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function applyExperimentHeaders(
  response,
  variant,
  forcedVariant,
  cookieVariant,
) {
  response.headers.set("x-ucd-variant", variant);
  response.headers.set("vary", "Cookie");

  if (forcedVariant || !normalizeVariant(cookieVariant)) {
    response.cookies.set(VARIANT_COOKIE, variant, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      secure: true,
      httpOnly: true,
    });
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
    return NextResponse.json({
      status: "ok",
      experiment: "ucd-redesign-2026",
      defaultSplit: {
        currentSite: 100 - parseBPercent(process.env.UCD_B_PERCENT),
        redesign: parseBPercent(process.env.UCD_B_PERCENT),
      },
    });
  }

  const forcedVariant = normalizeVariant(
    requestUrl.searchParams.get("__ucd_variant"),
  );
  const cookieVariant = request.cookies.get(VARIANT_COOKIE)?.value;
  const variant = chooseVariant({
    forcedVariant,
    cookieVariant,
    pathname: requestUrl.pathname,
    userAgent: request.headers.get("user-agent") || "",
    bPercent: process.env.UCD_B_PERCENT || DEFAULT_B_PERCENT,
  });

  const destination = new URL(
    destinationPath(variant, requestUrl.pathname),
    variant === "B" ? NEW_ORIGIN : OLD_ORIGIN,
  );

  for (const [key, value] of requestUrl.searchParams.entries()) {
    if (key !== "__ucd_variant") destination.searchParams.append(key, value);
  }

  let response;
  if (variant === "B" && destination.pathname.endsWith("/index.html")) {
    response = await fetchRedesignPage(destination, request);
    response.headers.set("x-ucd-router-mode", "fetch");
  } else {
    response = NextResponse.rewrite(destination);
    response.headers.set("x-ucd-router-mode", "rewrite");
  }

  return applyExperimentHeaders(
    response,
    variant,
    forcedVariant,
    cookieVariant,
  );
}

export const config = {
  matcher: "/:path*",
};
