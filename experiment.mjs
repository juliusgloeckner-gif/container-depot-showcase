export const CONSTRUCTION_VARIANT_COOKIE = "ucd_construction_variant";
export const ORIGIN_VARIANT_COOKIE = "ucd_origin_variant";
export const OLD_ORIGIN = "https://garaged-landing.vercel.app";
export const NEW_ORIGIN = "https://ucd-redesign-b.vercel.app";
export const DEFAULT_CONSTRUCTION_B_PERCENT = 50;

const LEGACY_PATHS = new Set([
  "/",
  "/agriculture",
  "/commercial",
]);

const REDESIGN_ONLY_PREFIXES = [
  "/privacy",
  "/terms",
  "/tools",
  "/delivery-locations",
  "/farm",
  "/moving",
  "/business",
  "/renovation",
  "/vehicles",
  "/events",
  "/institutions",
  "/international-shipping-containers",
  "/disaster-relief-containers",
  "/refrigerated-containers",
  "/open-side-containers",
  "/double-door-containers",
  "/insulated-containers",
  "/office-containers",
  "/hazardous-material-storage",
];

const CONSTRUCTION_KNOWLEDGE_PREFIXES = [
  "/construction/resources",
  "/construction/guides",
  "/construction/questions",
  "/construction/calculators",
];

const REDESIGN_ASSET_PREFIXES = [
  "/assets",
  "/authentic",
  "/downloads",
  "/gallery-v3",
  "/gallery-v4",
  "/inventory-v2",
  "/social",
  "/inventory-v3",
  "/inventory-v4",
  "/gallery-v5",
  "/inventory-v5",
  "/responsive",
  "/specialty",
];

const REDESIGN_ASSET_PATHS = new Set([
  "/container-20ft.jpg",
  "/container-40ft-hc.jpg",
  "/container-custom.jpg",
  "/hero-construction.jpg",
  "/lock-theft.jpg",
  "/marketing-tracking.js",
  "/quote-form.js",
  "/static-navigation.js",
  "/storage-tools.jpg",
  "/storage-tools2.jpg",
  "/us-flag.png",
  "/weather-rain.jpg",
  "/business-overflow.png",
  "/business-retail-overflow-v2.png",
  "/business-warehouse-overflow-v2.png",
  "/events-feature.png",
  "/events-gallery-1.png",
  "/events-gallery-2.png",
  "/events-hero.png",
  "/farm-feature-storage-v2.png",
  "/farm-feed-storage-v2.png",
  "/farm-seasonal-equipment-v2.png",
  "/farm-storage-real.png",
  "/institutions-feature.png",
  "/institutions-gallery-1.png",
  "/institutions-gallery-2.png",
  "/institutions-hero.png",
  "/moving-feature.png",
  "/moving-gallery-1.png",
  "/moving-gallery-2.png",
  "/moving-hero.png",
  "/renovation-feature.png",
  "/renovation-gallery-1.png",
  "/renovation-gallery-2.png",
  "/renovation-hero.png",
  "/vehicles-feature.png",
  "/vehicles-gallery-1.png",
  "/vehicles-gallery-2.png",
  "/vehicles-hero.png",
]);

const SEO_CONTROL_EXACT_PATHS = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/7f64c2d894f9469eaf4d12761a4bcb90.txt",
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

export function isConstructionKnowledgeAssetPath(pathname) {
  const clean = cleanPathname(pathname);
  return clean === "/downloads" || clean.startsWith("/downloads/") ||
    clean === "/social" || clean.startsWith("/social/");
}

export function isRedesignOnlyPath(pathname) {
  const clean = cleanPathname(pathname);
  return REDESIGN_ASSET_PATHS.has(clean) ||
    [...REDESIGN_ONLY_PREFIXES, ...REDESIGN_ASSET_PREFIXES].some(
    (prefix) => clean === prefix || clean.startsWith(`${prefix}/`),
  );
}

export function isLegacyPath(pathname) {
  return LEGACY_PATHS.has(cleanPathname(pathname));
}

export function isOldOnlyPath(pathname) {
  const clean = cleanPathname(pathname);
  if (clean.startsWith("/.well-known/")) return true;
  if (clean.startsWith("/shipping-containers-")) return true;
  return false;
}

export function isSeoControlPath(pathname) {
  const clean = cleanPathname(pathname);
  return SEO_CONTROL_EXACT_PATHS.has(clean) || clean.startsWith("/sitemaps/");
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

    const forced = normalizeVariant(forcedVariant);
    if (forced) return forced;

    if (isRedesignOnlyPath(pathname)) return "B";

  if (isConstructionPath(pathname)) {
    const existing = normalizeVariant(constructionCookieVariant);
    if (existing) return existing;
    return randomValue * 100 < parseConstructionBPercent(constructionBPercent)
      ? "B"
      : "A";
  }

  if (isLegacyPath(pathname)) return "A";

  return normalizeVariant(originVariant) || "A";
}

export function destinationPath(variant, pathname) {
  const clean = cleanPathname(pathname);
  if (variant === "B" && clean === "/") return "/";
  if (clean === "/") return clean;

  const finalSegment = clean.split("/").pop() || "";
  const looksLikeFile = finalSegment.includes(".");
  if (variant === "B" && !looksLikeFile) return `${clean}/`;
  return clean;
}
