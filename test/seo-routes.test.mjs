import test from "node:test";
import assert from "node:assert/strict";
import {
  INDEXNOW_KEY,
  renderSitemapIndex,
  renderUrlset,
  sitemapSectionNames,
  sitemapSections,
} from "../seo-routes.mjs";

test("publishes every required sitemap section", () => {
  assert.deepEqual(sitemapSectionNames, [
    "core",
    "use-cases",
    "specialty-containers",
    "decision-tools",
    "construction-knowledge",
    "vertical-knowledge",
    "location-pages",
    "downloads",
  ]);
  assert.equal(sitemapSections["use-cases"].length, 10);
  assert.equal(sitemapSections["specialty-containers"].length, 6);
  assert.equal(sitemapSections["decision-tools"].length, 7);
  assert.equal(sitemapSections["construction-knowledge"].length, 37);
  assert.equal(sitemapSections["vertical-knowledge"].length, 108);
});

test("sitemap index and URL sets use only the public canonical domain", () => {
  const index = renderSitemapIndex();
  assert.match(index, /<sitemapindex/);
  assert.match(index, /https:\/\/unitedcontainerdepot\.com\/sitemaps\/construction-knowledge\.xml/);

  const urls = renderUrlset(sitemapSections["construction-knowledge"]);
  assert.match(urls, /<urlset/);
  assert.match(urls, /https:\/\/unitedcontainerdepot\.com\/construction\/guides\/construction-container-faq/);
  assert.doesNotMatch(urls, /vercel\.app|chatgpt\.site/);
});

test("IndexNow key is a valid public verification key", () => {
  assert.match(INDEXNOW_KEY, /^[a-z0-9-]{8,128}$/);
});
