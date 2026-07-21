import test from "node:test";
import fs from "node:fs";
import assert from "node:assert/strict";
import {
  chooseVariant,
  destinationPath,
  experimentKey,
  isBusinessExperimentPath,
  isConstructionKnowledgePath,
  isFarmExperimentPath,
  isOldOnlyPath,
  isSeoControlPath,
  parseConstructionBPercent,
} from "../experiment.mjs";

test("splits construction, farm and business traffic 50/50 by default", () => {
  assert.equal(parseConstructionBPercent(undefined), 50);
  assert.equal(
    chooseVariant({ pathname: "/construction", randomValue: 0.49 }),
    "B",
  );
  assert.equal(
    chooseVariant({ pathname: "/construction", randomValue: 0.5 }),
    "A",
  );
  assert.equal(chooseVariant({ pathname: "/", randomValue: 0.01 }), "B");
  for (const pathname of ["/farm", "/agriculture", "/business", "/commercial"]) {
    assert.equal(chooseVariant({ pathname, randomValue: 0.49 }), "B", pathname);
    assert.equal(chooseVariant({ pathname, randomValue: 0.5 }), "A", pathname);
  }
});

test("keeps a construction visitor on their construction assignment", () => {
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      constructionCookieVariant: "B",
    }),
    "B",
  );
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      constructionCookieVariant: "A",
    }),
    "A",
  );
});

test("keeps farm and business visitors on their own assignments", () => {
  assert.equal(chooseVariant({ pathname: "/farm", farmCookieVariant: "A" }), "A");
  assert.equal(chooseVariant({ pathname: "/farm", farmCookieVariant: "B" }), "B");
  assert.equal(chooseVariant({ pathname: "/business", businessCookieVariant: "A" }), "A");
  assert.equal(chooseVariant({ pathname: "/business", businessCookieVariant: "B" }), "B");
  assert.equal(isFarmExperimentPath("/agriculture"), true);
  assert.equal(isBusinessExperimentPath("/commercial"), true);
  assert.equal(experimentKey("/farm"), "farm");
  assert.equal(experimentKey("/business"), "business");
});

test("stops the experiment cleanly when a winner is configured", () => {
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      constructionCookieVariant: "A",
      winnerVariant: "B",
    }),
    "B",
  );
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      constructionCookieVariant: "B",
      winnerVariant: "A",
    }),
    "A",
  );
});

test("routes every construction knowledge page to the redesign", () => {
  for (const pathname of [
    "/construction/resources",
    "/construction/resources/construction-container-statistics",
    "/construction/questions",
    "/construction/calculators/container-size",
    "/construction/guides/container-site-preparation",
  ]) {
    assert.equal(isConstructionKnowledgePath(pathname), true);
    assert.equal(
      chooseVariant({
        pathname,
        constructionCookieVariant: "A",
        originVariant: "A",
        forcedVariant: "A",
        userAgent: "Googlebot",
      }),
      "B",
    );
  }
  assert.equal(isConstructionKnowledgePath("/construction"), false);
});

test("all non-experiment use cases and specialty pages use the redesign", () => {
  for (const pathname of [
    "/moving",
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
  ]) {
    assert.equal(
      chooseVariant({
        pathname,
        constructionCookieVariant: "A",
        originVariant: "A",
      }),
      "B",
    );
  }
});

test("serves redesign assets to crawlers without relying on cookies", () => {
  for (const pathname of [
    "/assets/index.css",
    "/downloads/ucd-construction-container-data-brief.pdf",
    "/social/construction-container-footprint.png",
    "/authentic/farm-hero-v2.webp",
    "/specialty/reefer-hero.webp",
    "/inventory-v2/generic-3.jpg",
    "/inventory-v4/farm-20-v2.png",
    "/gallery-v4/vehicle-car-v2.png",
    "/gallery-v5/vehicle-car-v3.webp",
    "/inventory-v5/moving-tunnel-v1.webp",
    "/responsive/farm-hero-640.avif",
    "/inventory-v3/construction-40.jpg",
    "/hero-construction.jpg",
    "/marketing-tracking.js",
    "/quote-form.js",
    "/farm-storage-real.png",
    "/moving-hero.png",
  ]) {
    assert.equal(
      chooseVariant({ pathname, userAgent: "Googlebot" }),
      "B",
      pathname,
    );
  }
});

test("the homepage always uses the redesigned general landing page", () => {
  assert.equal(chooseVariant({ pathname: "/" }), "B");
  assert.equal(chooseVariant({ pathname: "/", originVariant: "A" }), "B");
  assert.equal(chooseVariant({ pathname: "/", originVariant: "B" }), "B");
  assert.equal(chooseVariant({ pathname: "/", forcedVariant: "A" }), "B");
});

test("privacy, terms, delivery coverage and decision tools use the redesign", () => {
  for (const pathname of ["/privacy", "/terms", "/delivery-locations", "/tools", "/tools/delivery-clearance"]) {
    assert.equal(chooseVariant({ pathname, originVariant: "A" }), "B", pathname);
  }
});

test("visiting a redesign-only page does not change construction assignment", () => {
  assert.equal(
    chooseVariant({
      pathname: "/moving",
      constructionCookieVariant: "A",
      originVariant: "A",
    }),
    "B",
  );
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      constructionCookieVariant: "A",
      originVariant: "B",
    }),
    "A",
  );
});

test("does not show search crawlers a special construction variant", () => {
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      userAgent: "Googlebot",
      forcedVariant: "B",
    }),
    "B",
  );
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      userAgent: "Googlebot",
      randomValue: 0.49,
    }),
    "B",
  );
  assert.equal(isOldOnlyPath("/shipping-containers-Texas"), true);
  assert.equal(
    chooseVariant({
      pathname: "/shipping-containers-Texas",
      originVariant: "B",
    }),
    "A",
  );
});

test("serves crawler-control files from the router itself", () => {
  for (const pathname of [
    "/robots.txt",
    "/sitemap.xml",
    "/sitemap-index.xml",
    "/sitemaps/core.xml",
    "/7f64c2d894f9469eaf4d12761a4bcb90.txt",
  ]) {
    assert.equal(isSeoControlPath(pathname), true, pathname);
    assert.equal(isOldOnlyPath(pathname), false, pathname);
  }
});

test("forced variants remain available for human QA", () => {
  assert.equal(
    chooseVariant({ pathname: "/construction", forcedVariant: "B" }),
    "B",
  );
  assert.equal(chooseVariant({ pathname: "/farm", forcedVariant: "A" }), "A");
});

test("normalizes page slashes for each origin without changing assets", () => {
  assert.equal(destinationPath("B", "/"), "/");
  assert.equal(
    destinationPath("B", "/construction"),
    "/construction/",
  );
  assert.equal(destinationPath("A", "/construction/"), "/construction");
  assert.equal(destinationPath("B", "/assets/site.css"), "/assets/site.css");
  assert.equal(destinationPath("A", "/favicon.ico"), "/favicon.ico");
  assert.equal(destinationPath("A", "/farm"), "/agriculture");
  assert.equal(destinationPath("B", "/agriculture"), "/farm/");
  assert.equal(destinationPath("A", "/business"), "/commercial");
  assert.equal(destinationPath("B", "/commercial"), "/business/");
});

test("routes unclassified assets with the current page origin", () => {
  assert.equal(
    chooseVariant({ pathname: "/hero.png", originVariant: "B" }),
    "B",
  );
  assert.equal(
    chooseVariant({ pathname: "/favicon.svg", originVariant: "A" }),
    "A",
  );
  assert.equal(chooseVariant({ pathname: "/unknown.css" }), "A");
});

test("rewrites redesign pages and updates every legacy response", () => {
  const proxySource = fs.readFileSync(new URL("../proxy.js", import.meta.url), "utf8");
  assert.match(
    proxySource,
    /variant === "A"[\s\S]{0,160}: NextResponse\.rewrite\(destination\);/,
  );
  assert.match(proxySource, /async function serveRepairedLegacyLanding/);
  assert.match(proxySource, /replaceLegacyPhone/);
  assert.match(proxySource, /\(800\) 818-9941/);
  assert.match(proxySource, /18008189941/);
  assert.match(proxySource, /legacy-form-fix\.js/);
  assert.match(proxySource, /legacy-form-repair/);
  assert.match(proxySource, /handleConfirmedUcdQuote/);
  assert.match(proxySource, /deprecatedHandleLP/);
  assert.match(proxySource, /mvzepnvd/);
  assert.doesNotMatch(proxySource, /fetchRedesignPage/);
  assert.match(proxySource, /x-ucd-router-mode", "rewrite"/);
  assert.match(proxySource, /cleanPath === "\/agriculture" \|\| cleanPath === "\/commercial"/);
  assert.match(proxySource, /UCD_FARM_B_PERCENT/);
  assert.match(proxySource, /UCD_BUSINESS_B_PERCENT/);
});

test("repairs cached redesign flag optimizer requests before variant routing", () => {
  const proxySource = fs.readFileSync(new URL("../proxy.js", import.meta.url), "utf8");
  assert.match(proxySource, /LEGACY_FLAG_PNG_PREFIX/);
  assert.match(proxySource, /requestUrl\.pathname === "\/_vinext\/image"/);
  assert.match(proxySource, /new URL\("\/us-flag\.png", NEW_ORIGIN\)/);
  assert.match(proxySource, /flag-asset-repair/);
});
