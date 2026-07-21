import { NextResponse } from "next/server";
import {
  BUSINESS_VARIANT_COOKIE,
  CONSTRUCTION_VARIANT_COOKIE,
  DEFAULT_CONSTRUCTION_B_PERCENT,
  FARM_VARIANT_COOKIE,
  NEW_ORIGIN,
  OLD_ORIGIN,
  ORIGIN_VARIANT_COOKIE,
  PUBLIC_BUSINESS_VARIANT_COOKIE,
  PUBLIC_CONSTRUCTION_VARIANT_COOKIE,
  PUBLIC_FARM_VARIANT_COOKIE,
  chooseVariant,
  destinationPath,
  experimentKey,
  isConstructionKnowledgePath,
  isConstructionPath,
  isSeoControlPath,
  normalizeVariant,
  parseConstructionBPercent,
} from "./experiment.mjs";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
const LEGACY_FLAG_PNG_PREFIX = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAq";
const OLD_PHONE_REPLACEMENTS = [
  ["(855) 525-0902", "(800) 818-9941"],
  ["+1-855-525-0902", "+1-800-818-9941"],
  ["855-525-0902", "800-818-9941"],
  ["18555250902", "18008189941"],
  ["8555250902", "8008189941"],
];

function replaceLegacyPhone(value) {
  return OLD_PHONE_REPLACEMENTS.reduce(
    (updated, [oldPhone, newPhone]) => updated.replaceAll(oldPhone, newPhone),
    value,
  );
}

function setVariantCookie(response, name, variant, { httpOnly = true } = {}) {
  response.cookies.set(name, variant, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    secure: true,
    httpOnly,
  });
}

async function serveRepairedLegacyLanding(destination, request) {
  const upstream = await fetch(destination, {
    headers: {
      accept: request.headers.get("accept") || "text/html",
      "user-agent": request.headers.get("user-agent") || "UCD A/B Router",
    },
    cache: "no-store",
  });
  const contentType = upstream.headers.get("content-type") || "";
  const isTextResponse = contentType.includes("text/") ||
    contentType.includes("javascript") ||
    contentType.includes("json") ||
    contentType.includes("xml");
  if (!isTextResponse) {
    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers: { "content-type": contentType || "application/octet-stream" },
    });
  }

  const originalText = await upstream.text();
  const phoneUpdatedText = replaceLegacyPhone(originalText);
  if (!contentType.includes("text/html")) {
    return new NextResponse(phoneUpdatedText, {
      status: upstream.status,
      headers: {
        "content-type": contentType,
        "cache-control": "private, no-store, max-age=0",
        "x-ucd-router-mode": "legacy-phone-update",
      },
    });
  }

  const repairedHtml = phoneUpdatedText
    .replaceAll("https://formspree.io/f/xlgvkwoe", "https://formspree.io/f/mvzepnvd")
    .replace('onsubmit="handleLP(event)"', 'onsubmit="return window.handleConfirmedUcdQuote ? window.handleConfirmedUcdQuote(event) : false"')
    .replace("function handleLP(e){", "function deprecatedHandleLP(e){");
  const trackingScripts = [
    '<script defer src="/marketing-tracking.js"></script>',
    '<script defer src="/legacy-form-fix.js"></script>',
  ].join("");
  const html = repairedHtml.includes("/legacy-form-fix.js")
    ? repairedHtml
    : repairedHtml.replace("</body>", `${trackingScripts}</body>`);
  const response = new NextResponse(html, {
    status: upstream.status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "private, no-store, max-age=0",
    },
  });
  response.headers.set("x-ucd-router-mode", "legacy-form-repair");
  return response;
}

function applyExperimentHeaders(response, {
  variant,
  pathname,
  forcedVariant,
  constructionCookieVariant,
  farmCookieVariant,
  businessCookieVariant,
  winnerVariant,
  farmWinnerVariant,
  businessWinnerVariant,
  originVariant,
}) {
  response.headers.set("x-ucd-variant", variant);
  response.headers.set("vary", "Cookie");

  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  if (cleanPath === "/construction") {
    response.headers.set("Link", '<https://unitedcontainerdepot.com/construction>; rel="canonical"');
  } else if (cleanPath === "/farm" || cleanPath === "/agriculture") {
    response.headers.set("Link", '<https://unitedcontainerdepot.com/farm>; rel="canonical"');
  } else if (cleanPath === "/business" || cleanPath === "/commercial") {
    response.headers.set("Link", '<https://unitedcontainerdepot.com/business>; rel="canonical"');
  } else if (cleanPath.startsWith("/shipping-containers-")) {
    response.headers.set("Link", '<https://unitedcontainerdepot.com/delivery-locations>; rel="canonical"');
  }

  if (normalizeVariant(originVariant) !== variant) {
    setVariantCookie(response, ORIGIN_VARIANT_COOKIE, variant);
  }

  if (
    isConstructionPath(pathname) &&
    !isConstructionKnowledgePath(pathname) &&
    (forcedVariant || normalizeVariant(winnerVariant) || !normalizeVariant(constructionCookieVariant))
  ) {
    setVariantCookie(response, CONSTRUCTION_VARIANT_COOKIE, variant);
  }
  if (isConstructionPath(pathname) && !isConstructionKnowledgePath(pathname)) {
    setVariantCookie(response, PUBLIC_CONSTRUCTION_VARIANT_COOKIE, variant, { httpOnly: false });
  }
  if (experimentKey(pathname) === "farm") {
    if (forcedVariant || normalizeVariant(farmWinnerVariant) || !normalizeVariant(farmCookieVariant)) {
      setVariantCookie(response, FARM_VARIANT_COOKIE, variant);
    }
    setVariantCookie(response, PUBLIC_FARM_VARIANT_COOKIE, variant, { httpOnly: false });
  }
  if (experimentKey(pathname) === "business") {
    if (forcedVariant || normalizeVariant(businessWinnerVariant) || !normalizeVariant(businessCookieVariant)) {
      setVariantCookie(response, BUSINESS_VARIANT_COOKIE, variant);
    }
    setVariantCookie(response, PUBLIC_BUSINESS_VARIANT_COOKIE, variant, { httpOnly: false });
  }

  return response;
}

export async function proxy(request) {
  const requestUrl = request.nextUrl.clone();

  // Older redesign documents used the image optimizer for the embedded 80x42
  // flag. Those cached documents can outlive a deployment, while the optimizer
  // request itself has no page path from which to recover the B-site variant.
  // Serve the stable public asset directly so both cached and current headers
  // remain valid across every route and experiment assignment.
  if (
    requestUrl.pathname === "/_vinext/image" &&
    requestUrl.searchParams.get("url")?.startsWith(LEGACY_FLAG_PNG_PREFIX)
  ) {
    const flagAsset = new URL("/us-flag.png", NEW_ORIGIN);
    const response = NextResponse.rewrite(flagAsset);
    response.headers.set("cache-control", "public, max-age=31536000, immutable");
    response.headers.set("x-ucd-router-mode", "flag-asset-repair");
    return response;
  }

  if (isSeoControlPath(requestUrl.pathname)) {
    return NextResponse.next();
  }

  if (requestUrl.pathname === "/__router/status") {
    const constructionPercent = parseConstructionBPercent(
      process.env.UCD_CONSTRUCTION_B_PERCENT,
    );
    const farmPercent = parseConstructionBPercent(process.env.UCD_FARM_B_PERCENT);
    const businessPercent = parseConstructionBPercent(process.env.UCD_BUSINESS_B_PERCENT);
    const constructionWinner = normalizeVariant(process.env.UCD_CONSTRUCTION_WINNER);
    const farmWinner = normalizeVariant(process.env.UCD_FARM_WINNER);
    const businessWinner = normalizeVariant(process.env.UCD_BUSINESS_WINNER);
    return NextResponse.json({
      status: "ok",
      experiments: {
        construction: { status: constructionWinner ? "stopped" : "running", winner: constructionWinner, currentSite: 100 - constructionPercent, redesign: constructionPercent },
        farm: { status: farmWinner ? "stopped" : "running", winner: farmWinner, agriculture: 100 - farmPercent, farm: farmPercent },
        business: { status: businessWinner ? "stopped" : "running", winner: businessWinner, commercial: 100 - businessPercent, business: businessPercent },
      },
      redesignOnly: {
        generalLandingPage: "/",
        useCases: [
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
      legacyTraffic: "location pages only",
    });
  }

  const cleanPath = requestUrl.pathname.replace(/\/+$/, "") || "/";
  if (cleanPath === "/agriculture" || cleanPath === "/commercial") {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.pathname = cleanPath === "/agriculture" ? "/farm" : "/business";
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const forcedVariant = normalizeVariant(
    requestUrl.searchParams.get("__ucd_variant"),
  );
  const constructionCookieVariant = request.cookies.get(
    CONSTRUCTION_VARIANT_COOKIE,
  )?.value;
  const farmCookieVariant = request.cookies.get(FARM_VARIANT_COOKIE)?.value;
  const businessCookieVariant = request.cookies.get(BUSINESS_VARIANT_COOKIE)?.value;
  const originVariant = request.cookies.get(ORIGIN_VARIANT_COOKIE)?.value;
  const winnerVariant = normalizeVariant(process.env.UCD_CONSTRUCTION_WINNER);
  const farmWinnerVariant = normalizeVariant(process.env.UCD_FARM_WINNER);
  const businessWinnerVariant = normalizeVariant(process.env.UCD_BUSINESS_WINNER);
  const variant = chooseVariant({
    forcedVariant,
    constructionCookieVariant,
    farmCookieVariant,
    businessCookieVariant,
    winnerVariant,
    farmWinnerVariant,
    businessWinnerVariant,
    originVariant,
    pathname: requestUrl.pathname,
    userAgent: request.headers.get("user-agent") || "",
    constructionBPercent:
      process.env.UCD_CONSTRUCTION_B_PERCENT ||
      DEFAULT_CONSTRUCTION_B_PERCENT,
    farmBPercent: process.env.UCD_FARM_B_PERCENT || DEFAULT_CONSTRUCTION_B_PERCENT,
    businessBPercent: process.env.UCD_BUSINESS_B_PERCENT || DEFAULT_CONSTRUCTION_B_PERCENT,
  });

  const destination = new URL(
    destinationPath(variant, requestUrl.pathname),
    variant === "B" ? NEW_ORIGIN : OLD_ORIGIN,
  );

  for (const [key, value] of requestUrl.searchParams.entries()) {
    if (key !== "__ucd_variant") destination.searchParams.append(key, value);
  }

  const response = variant === "A"
    ? await serveRepairedLegacyLanding(destination, request)
    : NextResponse.rewrite(destination);
  if (!response.headers.has("x-ucd-router-mode")) {
    response.headers.set("x-ucd-router-mode", "rewrite");
  }

  return applyExperimentHeaders(response, {
    variant,
    pathname: requestUrl.pathname,
    forcedVariant,
    constructionCookieVariant,
    farmCookieVariant,
    businessCookieVariant,
    winnerVariant,
    farmWinnerVariant,
    businessWinnerVariant,
    originVariant,
  });
}

export const config = {
  matcher: "/:path*",
};
