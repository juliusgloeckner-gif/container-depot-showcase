(function () {
  "use strict";

  var ADS_ID = "AW-18200648447";
  var FORM_CONVERSION_LABEL = "iL6RCIruqL4cEP-13-ZD";
  var WEBSITE_CALL_CONVERSION_LABEL = "wVZtCLfD9dIcEP-13-ZD";
  var GA4_ID = "G-LZDDGY8RJR";
  var BUSINESS_PHONE = "8555250902";
  var CONSTRUCTION_VARIANT_COOKIE = "ucd_construction_variant_public";
  var FARM_VARIANT_COOKIE = "ucd_farm_variant_public";
  var BUSINESS_VARIANT_COOKIE = "ucd_business_variant_public";
  var STORAGE_KEY = "ucd_marketing_attribution_v1";
  var STORAGE_TTL_MS = 90 * 24 * 60 * 60 * 1000;
  var TRACKING_KEYS = [
    "utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term",
    "gclid", "gbraid", "wbraid", "dclid", "gclsrc", "gad_source", "gad_campaignid"
  ];

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    var googleTag = document.createElement("script");
    googleTag.async = true;
    googleTag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA4_ID);
    document.head.appendChild(googleTag);
  }

  window.gtag("js", new Date());
  window.gtag("config", GA4_ID);
  window.gtag("config", ADS_ID, { allow_enhanced_conversions: true });
  window.gtag("config", ADS_ID + "/" + WEBSITE_CALL_CONVERSION_LABEL, {
    phone_conversion_number: "(855) 525-0902",
  });

  function safeParse(value) {
    try { return value ? JSON.parse(value) : null; } catch { return null; }
  }

  function randomId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return prefix + "_" + window.crypto.randomUUID();
    }
    return prefix + "_" + Date.now() + "_" + Math.random().toString(36).slice(2, 12);
  }

  function currentTouch() {
    var search = new URLSearchParams(window.location.search);
    var touch = {};
    TRACKING_KEYS.forEach(function (key) {
      var value = search.get(key);
      if (value) touch[key] = value;
    });
    return touch;
  }

  function cookieValue(name) {
    var prefix = name + "=";
    var parts = String(document.cookie || "").split(";");
    for (var index = 0; index < parts.length; index += 1) {
      var part = parts[index].trim();
      if (part.indexOf(prefix) === 0) return decodeURIComponent(part.slice(prefix.length));
    }
    return "";
  }

  function experimentContext() {
    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/construction") {
      return { id: "ucd-construction-redesign-2026", cookie: CONSTRUCTION_VARIANT_COOKIE, fallback: "B" };
    }
    if (path === "/farm" || path === "/agriculture") {
      return { id: "ucd-farm-redesign-2026", cookie: FARM_VARIANT_COOKIE, fallback: "B" };
    }
    if (path === "/business" || path === "/commercial") {
      return { id: "ucd-business-redesign-2026", cookie: BUSINESS_VARIANT_COOKIE, fallback: "B" };
    }
    return { id: "ucd-redesign-2026", cookie: "", fallback: "redesign" };
  }

  function experimentVariant() {
    var context = experimentContext();
    var cookieVariant = context.cookie ? String(cookieValue(context.cookie) || "").toUpperCase() : "";
    if (cookieVariant === "A" || cookieVariant === "B") return cookieVariant;
    var hiddenVariant = document.querySelector('input[name="variant"]');
    var hiddenValue = hiddenVariant ? String(hiddenVariant.value || "").toLowerCase() : "";
    if (hiddenValue === "a" || hiddenValue === "current_site") return "A";
    if (hiddenValue === "b" || hiddenValue === "new_site") return "B";
    return context.fallback;
  }

  function captureAttribution() {
    var now = Date.now();
    var existing = safeParse(window.localStorage.getItem(STORAGE_KEY));
    if (!existing || !existing.expiresAt || existing.expiresAt < now) existing = null;

    var touch = currentTouch();
    var hasTouch = Object.keys(touch).length > 0;
    var record = existing || {
      visitorId: randomId("visitor"),
      firstTouch: touch,
      firstLandingPage: window.location.href,
      firstReferrer: document.referrer || "direct",
      firstSeenAt: new Date(now).toISOString()
    };

    if (hasTouch) record.lastTouch = touch;
    else if (!record.lastTouch) record.lastTouch = record.firstTouch || {};
    record.lastLandingPage = window.location.href;
    record.lastReferrer = document.referrer || record.lastReferrer || "direct";
    record.lastSeenAt = new Date(now).toISOString();
    record.expiresAt = now + STORAGE_TTL_MS;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    return record;
  }

  function appendAttribution(data) {
    var record = captureAttribution();
    var firstTouch = record.firstTouch || {};
    var lastTouch = record.lastTouch || {};
    TRACKING_KEYS.forEach(function (key) {
      if (lastTouch[key]) data.set(key, lastTouch[key]);
      if (firstTouch[key]) data.set("first_" + key, firstTouch[key]);
    });
    data.set("visitor_id", record.visitorId || "");
    data.set("first_landing_page", record.firstLandingPage || "");
    data.set("first_referrer", record.firstReferrer || "direct");
    data.set("first_seen_at", record.firstSeenAt || "");
    data.set("last_landing_page", window.location.href);
    data.set("last_referrer", document.referrer || "direct");
    data.set("page_path", window.location.pathname);
    data.set("experiment_id", experimentContext().id);
    data.set("experiment_variant", experimentVariant());
    data.set("variant", experimentVariant());
    return record;
  }

  function trackLead(details) {
    var email = String(details.email || "").trim().toLowerCase();
    var phone = String(details.phone || "").replace(/[^0-9+]/g, "");
    if (email || phone) {
      var userData = {};
      if (email) userData.email = email;
      if (phone) userData.phone_number = phone;
      window.gtag("set", "user_data", userData);
    }
    window.gtag("event", "conversion", {
      send_to: ADS_ID + "/" + FORM_CONVERSION_LABEL,
      value: 1,
      currency: "USD",
      transaction_id: details.leadId
    });
    var variant = details.variant || experimentVariant();
    var eventParameters = {
      lead_id: details.leadId,
      vertical: details.vertical,
      container_size: details.size,
      experiment: experimentContext().id,
      experiment_variant: variant,
      variant: variant,
      value: 1,
      currency: "USD"
    };
    window.gtag("event", "form_submit", eventParameters);
    window.gtag("event", "generate_lead", eventParameters);
  }

  function formContext(form) {
    var vertical = form.querySelector('[name="vertical"]');
    return {
      form_id: form.id || "quote-form",
      form_name: "UCD Quote Form",
      vertical: vertical ? String(vertical.value || "General container") : "Construction site storage",
      experiment: experimentContext().id,
      experiment_variant: experimentVariant(),
      page_path: window.location.pathname
    };
  }

  function trackFormStart(form) {
    if (!form || form.dataset.ucdFormStarted === "true") return;
    form.dataset.ucdFormStarted = "true";
    window.gtag("event", "form_start", formContext(form));
  }

  function quoteFormFromTarget(target) {
    if (!target || !target.closest) return null;
    return target.closest("form[data-formspree-quote], #lp-form");
  }

  document.addEventListener("focusin", function (event) {
    trackFormStart(quoteFormFromTarget(event.target));
  }, true);
  document.addEventListener("change", function (event) {
    trackFormStart(quoteFormFromTarget(event.target));
  }, true);

  function linkLabel(link) {
    return String(link.getAttribute("aria-label") || link.textContent || "").trim().slice(0, 100);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (href.toLowerCase().startsWith("tel:")) {
      window.gtag("event", "phone_click", {
        phone_number: BUSINESS_PHONE,
        link_text: linkLabel(link),
        page_path: window.location.pathname
      });
      window.dispatchEvent(new CustomEvent("ucd:phone-click", { detail: { page: window.location.pathname } }));
      return;
    }
    if (href.includes("quote-form") || link.closest("[data-quote-cta]")) {
      window.gtag("event", "quote_cta_click", {
        link_text: linkLabel(link),
        link_url: link.href,
        page_path: window.location.pathname
      });
    }
  }, true);

  window.UCDMarketing = {
    appendAttribution: appendAttribution,
    captureAttribution: captureAttribution,
    experimentVariant: experimentVariant,
    newLeadId: function () { return randomId("ucd_lead"); },
    trackLead: trackLead
  };

  captureAttribution();
})();
