import { NextResponse } from "next/server";
import {
  CONSTRUCTION_VARIANT_COOKIE,
  DEFAULT_CONSTRUCTION_B_PERCENT,
  NEW_ORIGIN,
  OLD_ORIGIN,
  ORIGIN_VARIANT_COOKIE,
  chooseVariant,
  destinationPath,
  isConstructionKnowledgePath,
  isConstructionPath,
  isSeoControlPath,
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

export async function proxy(request) {
  const requestUrl = request.nextUrl.clone();

  if (isSeoControlPath(requestUrl.pathname)) {
    return NextResponse.next();
  }

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
      redesignOnly: {
        useCases: [
          "/farm",
          "/business",
          "/moving",
          "/renovation",
          "/vehicles",
          "/events",
          "/institutions",
          "/international-shipping-containers",
          "/disaster-relief-containers",
        ],
        specialtyContainers: [
          "/refrigerated-containers",
          "/open-side-containers",
          "/double-door-containers",
          "/insulated-containers",
          "/office-containers",
          "/hazardous-material-storage",
        ],
      },
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

  const response = NextResponse.rewrite(destination);
  response.headers.set("x-ucd-router-mode", "rewrite");

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
