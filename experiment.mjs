export const VARIANT_COOKIE = "ucd_ab_variant";
export const OLD_ORIGIN = "https://garaged-landing.vercel.app";
export const NEW_ORIGIN = "https://ucd-redesign-b.vercel.app";
export const DEFAULT_B_PERCENT = 10;

const SEARCH_ENGINE_PATTERN =
  /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|linkedinbot|twitterbot|whatsapp|google-inspectiontool|lighthouse/i;

const SHARED_EXPERIMENT_PATHS = new Set([
  "/",
  "/construction",
  "/agriculture",
  "/commercial",
  "/farm",
  "/business",
  "/privacy",
  "/terms",
]);

const REDESIGN_ONLY_PREFIXES = [
  "/moving",
  "/renovation",
  "/vehicles",
  "/events",
  "/institutions",
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

export function parseBPercent(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return DEFAULT_B_PERCENT;
  return Math.min(100, Math.max(0, Math.round(parsed)));
}

export function isSearchEngine(userAgent) {
  return SEARCH_ENGINE_PATTERN.test(userAgent || "");
}

export function isRedesignOnlyPath(pathname) {
  const clean = cleanPathname(pathname);
  return REDESIGN_ONLY_PREFIXES.some(
    (prefix) => clean === prefix || clean.startsWith(`${prefix}/`),
  );
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
  cookieVariant,
  pathname,
  userAgent,
  bPercent = DEFAULT_B_PERCENT,
  randomValue = Math.random(),
}) {
  if (isSearchEngine(userAgent) || isOldOnlyPath(pathname)) return "A";

  const forced = normalizeVariant(forcedVariant);
  if (forced) return forced;

  if (isRedesignOnlyPath(pathname)) return "B";

  const existing = normalizeVariant(cookieVariant);
  if (existing) return existing;

  if (!SHARED_EXPERIMENT_PATHS.has(cleanPathname(pathname))) return "A";

  return randomValue * 100 < parseBPercent(bPercent) ? "B" : "A";
}

export function destinationPath(variant, pathname) {
  const clean = cleanPathname(pathname);
  let mapped = clean;

  if (variant === "B") {
    if (clean === "/agriculture") mapped = "/farm";
    if (clean === "/commercial") mapped = "/business";
  }

  if (variant === "A") {
    if (clean === "/farm") mapped = "/agriculture";
    if (clean === "/business") mapped = "/commercial";
  }

  if (variant === "B" && mapped === "/") return "/index.html";
  if (mapped === "/") return mapped;

  const finalSegment = mapped.split("/").pop() || "";
  const looksLikeFile = finalSegment.includes(".");
  if (variant === "B" && !looksLikeFile) return `${mapped}/index.html`;
  return mapped;
}
