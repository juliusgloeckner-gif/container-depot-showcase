export const SITE_ORIGIN = "https://unitedcontainerdepot.com";
export const INDEXNOW_KEY = "7f64c2d894f9469eaf4d12761a4bcb90";
export const REDESIGN_LASTMOD = "2026-07-18";

const constructionGuides = [
  "construction-site-theft-prevention",
  "shipping-container-locks-lockboxes",
  "jobsite-cameras-lighting-gps",
  "overnight-tool-security-checklist",
  "construction-container-buying-guide",
  "rent-vs-buy-construction-container",
  "one-trip-vs-used-container",
  "20ft-vs-40ft-construction",
  "container-site-preparation",
  "container-delivery-clearance",
  "container-foundations-gravel-concrete",
  "jobsite-container-layout",
  "container-dimensions-specifications",
  "container-payload-floor-loading",
  "high-cube-construction-guide",
  "container-tool-organization-shelving",
  "container-electrical-lighting",
  "container-ventilation-moisture-control",
  "container-inspection-maintenance",
  "construction-container-permits",
  "osha-fire-insurance-container-storage",
  "commercial-residential-builder-storage",
  "specialty-trade-container-storage",
  "infrastructure-project-container-storage",
  "construction-container-delivered-cost",
  "construction-container-total-cost-ownership",
  "construction-container-faq",
  "small-builder-20ft-container-field-plan",
  "commercial-multitrade-container-field-plan",
  "infrastructure-mobile-depot-field-plan",
  "long-term-multiproject-ownership-field-plan",
  "temporary-project-rent-buy-field-plan",
];

const verticalGuides = {
  farm: [
    "farm-container-buying-guide", "20ft-vs-40ft-farm-storage", "new-vs-used-farm-containers", "farm-container-delivered-price",
    "farm-container-site-selection", "farm-container-ground-preparation", "rural-container-delivery-access", "farm-drainage-door-orientation",
    "farm-tool-storage-layout", "tractor-attachment-container-fit", "fencing-supplies-container-storage", "seasonal-farm-equipment-rotation",
    "feed-seed-storage-screening", "bagged-farm-inputs-moisture", "rodent-resistant-farm-storage", "farm-container-ventilation",
    "pesticide-storage-container-boundaries", "fertilizer-container-separation", "fuel-battery-container-exclusions", "livestock-supplies-container-storage",
    "farm-container-locks-lockboxes", "rural-container-lighting-cameras", "farm-container-key-control", "farm-container-storm-preparation",
    "farm-container-permits-setbacks", "farm-container-fire-access", "farm-storage-insurance-inventory", "modified-farm-container-safety",
    "farm-container-daily-zones", "farm-container-weekly-inspection", "multi-container-farm-yard-layout", "farm-container-move-resale-repurpose",
  ],
  business: [
    "business-container-buying-guide", "20ft-vs-40ft-business-storage", "new-vs-used-business-containers", "business-container-delivered-cost",
    "business-container-rear-lot-placement", "commercial-container-delivery-route", "landlord-zoning-container-approval", "business-container-fire-lane-clearance",
    "pallet-carton-container-layout", "retail-seasonal-overflow-storage", "restaurant-overflow-container-storage", "warehouse-distributor-overflow",
    "container-receiving-workflow", "fast-slow-mover-zones", "business-container-shelving-aisles", "container-cycle-counts-labeling",
    "business-container-condensation", "electronics-container-storage", "records-archive-container-storage", "textiles-furniture-container-storage",
    "business-container-locks", "business-container-key-control", "commercial-container-cameras", "business-container-nightly-close",
    "container-fire-load-business", "food-chemical-separation-overflow", "business-container-egress-occupancy", "business-container-electrical-modifications",
    "own-vs-offsite-business-storage", "multi-location-container-standard", "business-surge-capacity-plan", "business-container-resale-repurpose",
  ],
  vehicles: [
    "vehicle-container-storage-guide", "20ft-container-car-fit", "40ft-container-multiple-vehicles", "vehicle-container-door-clearance",
    "vehicle-container-site-access", "vehicle-container-level-support", "vehicle-container-ramp-planning", "vehicle-container-door-orientation",
    "vehicle-container-condensation-control", "vehicle-container-heat-ventilation", "vehicle-battery-storage-container", "vehicle-fuel-fire-safety-container",
    "vehicle-container-locks", "vehicle-storage-cameras-lighting", "vehicle-container-key-inventory", "discreet-vehicle-container-placement",
    "motorcycle-atv-container-storage", "bike-kayak-container-storage", "trailer-camping-gear-container", "seasonal-recreation-rotation",
    "side-opening-vehicle-container", "vehicle-container-lighting-power", "vehicle-container-tire-parts-racks", "insulated-conditioned-vehicle-container",
    "load-vehicle-into-container", "wheel-stops-stationary-storage", "vehicle-container-inspection", "vehicle-container-storm-plan",
    "buy-vs-rent-vehicle-storage-container", "vehicle-container-property-rules", "vehicle-container-insurance-records", "vehicle-container-resale-repurpose",
  ],
};

const useCases = [
  "/construction", "/farm", "/business", "/moving", "/renovation", "/vehicles", "/events", "/institutions",
  "/international-shipping-containers", "/disaster-relief-containers",
];

const specialtyContainers = [
  "/refrigerated-containers", "/open-side-containers", "/double-door-containers", "/insulated-containers",
  "/office-containers", "/hazardous-material-storage",
];

const stateSlugs = [
  "alabama", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "idaho",
  "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan",
  "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey", "new-mexico", "new-york",
  "north-carolina", "north-dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode-island", "south-carolina", "south-dakota", "tennessee",
  "texas", "utah", "vermont", "virginia", "washington", "west-virginia", "wisconsin", "wyoming",
];

const downloads = [
  "ucd-100-business-container-questions.pdf", "ucd-100-construction-container-questions.pdf", "ucd-100-farm-container-questions.pdf",
  "ucd-100-vehicles-container-questions.pdf", "ucd-20ft-vs-40ft-construction-report.pdf", "ucd-business-container-buyer-handbook.pdf",
  "ucd-business-delivery-site-checklist.pdf", "ucd-business-operations-inspection-pack.pdf", "ucd-construction-buying-checklist.pdf",
  "ucd-construction-container-buyers-handbook.pdf", "ucd-construction-container-data-brief.pdf", "ucd-construction-delivery-checklist.pdf",
  "ucd-construction-security-checklist.pdf", "ucd-construction-site-preparation-checklist.pdf", "ucd-construction-weekly-inspection-checklist.pdf",
  "ucd-farm-container-buyer-handbook.pdf", "ucd-farm-delivery-site-checklist.pdf", "ucd-farm-operations-inspection-pack.pdf",
  "ucd-jobsite-container-security-playbook.pdf", "ucd-jobsite-delivery-placement-field-manual.pdf", "ucd-vehicles-container-buyer-handbook.pdf",
  "ucd-vehicles-delivery-site-checklist.pdf", "ucd-vehicles-operations-inspection-pack.pdf",
];

const withLastmod = (paths) => paths.map((path) => ({ path, lastmod: REDESIGN_LASTMOD }));

export const sitemapSections = {
  core: [
    { path: "/" }, { path: "/agriculture" }, { path: "/commercial" }, { path: "/privacy" }, { path: "/terms" },
  ],
  "use-cases": withLastmod(useCases),
  "specialty-containers": withLastmod(specialtyContainers),
  "construction-knowledge": withLastmod([
    "/construction/resources", "/construction/questions", "/construction/calculators/container-size",
    "/construction/calculators/ownership", "/construction/resources/construction-container-statistics",
    ...constructionGuides.map((slug) => `/construction/guides/${slug}`),
  ]),
  "vertical-knowledge": withLastmod(Object.entries(verticalGuides).flatMap(([vertical, guides]) => [
    `/${vertical}/resources`, `/${vertical}/questions`, `/${vertical}/planner`, `/${vertical}/resources/planning-brief`,
    ...guides.map((slug) => `/${vertical}/guides/${slug}`),
  ])),
  "location-pages": [
    "/shipping-containers-dallas", "/shipping-containers-houston", "/shipping-containers-atlanta",
    ...stateSlugs.map((slug) => `/shipping-containers-${slug}`),
  ].map((path) => ({ path })),
  downloads: withLastmod(downloads.map((name) => `/downloads/${name}`)),
};

export const sitemapSectionNames = Object.keys(sitemapSections);

export function absoluteUrl(path) {
  return new URL(path, SITE_ORIGIN).toString();
}

export function escapeXml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export function renderSitemapIndex() {
  const body = sitemapSectionNames.map((section) => `<sitemap><loc>${escapeXml(absoluteUrl(`/sitemaps/${section}.xml`))}</loc></sitemap>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</sitemapindex>`;
}

export function renderUrlset(entries) {
  const body = entries.map(({ path, lastmod }) => `<url><loc>${escapeXml(absoluteUrl(path))}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`).join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;
}
