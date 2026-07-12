import test from "node:test";
import assert from "node:assert/strict";
import {
  chooseVariant,
  destinationPath,
  isOldOnlyPath,
  parseConstructionBPercent,
} from "../experiment.mjs";

test("splits only construction traffic 50/50 by default", () => {
  assert.equal(parseConstructionBPercent(undefined), 50);
  assert.equal(
    chooseVariant({ pathname: "/construction", randomValue: 0.49 }),
    "B",
  );
  assert.equal(
    chooseVariant({ pathname: "/construction", randomValue: 0.5 }),
    "A",
  );
  assert.equal(chooseVariant({ pathname: "/", randomValue: 0.01 }), "A");
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

test("new keyword verticals always use the redesign", () => {
  for (const pathname of ["/moving", "/institutions", "/farm"]) {
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

test("legacy campaign and homepage routes always use the current site", () => {
  for (const pathname of ["/", "/agriculture", "/commercial"]) {
    assert.equal(
      chooseVariant({
        pathname,
        constructionCookieVariant: "B",
        originVariant: "B",
      }),
      "A",
    );
  }
});

test("visiting a redesign-only page does not change construction assignment", () => {
  assert.equal(
    chooseVariant({
      pathname: "/farm",
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

test("pins search engines and SEO pages to the current site", () => {
  assert.equal(
    chooseVariant({
      pathname: "/construction",
      userAgent: "Googlebot",
      forcedVariant: "B",
    }),
    "A",
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

test("forced variants remain available for human QA", () => {
  assert.equal(
    chooseVariant({ pathname: "/construction", forcedVariant: "B" }),
    "B",
  );
  assert.equal(chooseVariant({ pathname: "/farm", forcedVariant: "A" }), "A");
});

test("normalizes page slashes for each origin without changing assets", () => {
  assert.equal(destinationPath("B", "/"), "/index.html");
  assert.equal(
    destinationPath("B", "/construction"),
    "/construction/index.html",
  );
  assert.equal(destinationPath("A", "/construction/"), "/construction");
  assert.equal(destinationPath("B", "/assets/site.css"), "/assets/site.css");
  assert.equal(destinationPath("A", "/favicon.ico"), "/favicon.ico");
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
