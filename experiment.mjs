export const CONSTRUCTION_VARIANT_COOKIE = "ucd_construction_variant";
export const ORIGIN_VARIANT_COOKIE = "ucd_origin_variant";
export const OLD_ORIGIN = "https://garaged-landing.vercel.app";
export const NEW_ORIGIN = "https://ucd-redesign-b.vercel.app";
export const DEFAULT_CONSTRUCTION_B_PERCENT = 50;

const SEARCH_ENGINE_PATTERN =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|linkedinbot|twitterbot|whatsapp|google-inspectiontool|lighthouse/i;

const LEGACY_PATHS = new Set([
  "/",
  "/agriculture",
  "/commercial",
  "/privacy",
  "/terms",
]);

const REDESIGN_ONLY_PREFIXES = [
  "/farm",
  "/moving",
  "/business",
  "/renovation",
  "/vehicles",
  "/events",
  "/institutions",
];

const CONSTRUCTION_KNOWLEDGE_PREFIXES = [
  "/construction/resources",
  "/construction/guides",
  "/construction/questions",
  "/construction/calculators",
];

const OLD_ONLY_EXACT_PATHS = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-index.xml",
]);

export function cleanPathname(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function normalizeVariant(value) {
  const variant = String(value || "").toUpperCase();
  return variant === "A" || variant === "B" ? variant : null;
}

export function parseConstructionBPercent(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return DEFAULT_CONSTRUCTION_B_PERCENT;
  return Math.min(100, Math.max(0, Math.round(parsed)));
}

export function isSearchEngine(userAgent) {
  return SEARCH_ENGINE_PATTERN.test(userAgent || "");
}

export function isConstructionPath(pathname) {
  const clean = cleanPathname(pathname);
  return clean === "/construction" || clean.startsWith("/construction/");
}

export function isConstructionKnowledgePath(pathname) {
  const clean = cleanPathname(pathname);
  return CONSTRUCTION_KNOWLEDGE_PREFIXES.some(
    (prefix) => clean === prefix || clean.startsWith(`${prefix}/`),
  );
}

export function isRedesignOnlyPath(pathname) {
  const clean = cleanPathname(pathname);
  return REDESIGN_ONLY_PREFIXES.some(
    (prefix) => clean === prefix || clean.startsWith(`${prefix}/`),
  );
}

export function isLegacyPath(pathname) {
  return LEGACY_PATHS.has(cleanPathname(pathname));
}

export function isOldOnlyPath(pathname) {
  const clean = cleanPathname(pathname);
  if (OLD_ONLY_EXACT_PATHS.has(clean)) return true;
  if (clean.startsWith("/.well-known/")) return true;
  if (clean.startsWith("/shipping-containers-")) return true;
  return false;
}

export function chooseVariant({
  forcedVariant,
  constructionCookieVariant,
  originVariant,
  pathname,
  userAgent,
  constructionBPercent = DEFAULT_CONSTRUCTION_B_PERCENT,
  randomValue = Math.random(),
}) {
  if (isOldOnlyPath(pathname)) return "A";
  if (isConstructionKnowledgePath(pathname)) return "B";
  if (isSearchEngine(userAgent)) return "A";

  const forced = normalizeVariant(forcedVariant);
  if (forced) return forced;

  if (isConstructionPath(pathname)) {
    const existing = normalizeVariant(constructionCookieVariant);
    if (existing) return existing;
    return randomValue * 100 < parseConstructionBPercent(constructionBPercent)
      ? "B"
      : "A";
  }

  if (isRedesignOnlyPath(pathname)) return "B";
  if (isLegacyPath(pathname)) return "A";

  return normalizeVariant(originVariant) || "A";
}

export function destinationPath(variant, pathname) {
  const clean = cleanPathname(pathname);
  if (variant === "B" && clean === "/") return "/index.html";
  if (clean === "/") return clean;

  const finalSegment = clean.split("/").pop() || "";
  const looksLikeFile = finalSegment.includes(".");
  if (variant === "B" && !looksLikeFile) return `${clean}/index.html`;
  return clean;
}
