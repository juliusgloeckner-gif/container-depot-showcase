import test from "node:test";
import assert from "node:assert/strict";
import {
  chooseVariant,
  destinationPath,
  isOldOnlyPath,
  parseBPercent,
} from "../experiment.mjs";

test("defaults to a 90/10 split", () => {
  assert.equal(parseBPercent(undefined), 10);
  assert.equal(
    chooseVariant({ pathname: "/", randomValue: 0.05, bPercent: 10 }),
    "B",
  );
  assert.equal(
    chooseVariant({ pathname: "/", randomValue: 0.5, bPercent: 10 }),
    "A",
  );
});

test("keeps a visitor on their cookie variant", () => {
  assert.equal(
    chooseVariant({ pathname: "/construction", cookieVariant: "B" }),
    "B",
  );
  assert.equal(
    chooseVariant({ pathname: "/construction", cookieVariant: "A" }),
    "A",
  );
});

test("pins search engines and SEO pages to the current site", () => {
  assert.equal(
    chooseVariant({ pathname: "/", userAgent: "Googlebot", forcedVariant: "B" }),
    "A",
  );
  assert.equal(isOldOnlyPath("/shipping-containers-Texas"), true);
  assert.equal(
    chooseVariant({
      pathname: "/shipping-containers-Texas",
      cookieVariant: "B",
    }),
    "A",
  );
});

test("maps equivalent vertical URLs between variants", () => {
  assert.equal(destinationPath("B", "/agriculture"), "/farm/index.html");
  assert.equal(destinationPath("B", "/commercial"), "/business/index.html");
  assert.equal(destinationPath("A", "/farm"), "/agriculture");
  assert.equal(destinationPath("A", "/business"), "/commercial");
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

test("serves redesign-only verticals from the redesign", () => {
  assert.equal(
    chooseVariant({ pathname: "/vehicles", cookieVariant: "A" }),
    "B",
  );
});

test("routes variant-specific root assets with the visitor cookie", () => {
  assert.equal(
    chooseVariant({ pathname: "/hero-depot-inventory.png", cookieVariant: "B" }),
    "B",
  );
  assert.equal(
    chooseVariant({ pathname: "/favicon.svg", cookieVariant: "A" }),
    "A",
  );
});
