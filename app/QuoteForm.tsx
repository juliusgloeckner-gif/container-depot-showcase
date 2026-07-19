"use client";

import { FormEvent, useEffect, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzepnvd";

type UcdMarketingApi = {
  appendAttribution: (data: FormData) => unknown;
  experimentVariant: () => string;
  newLeadId: () => string;
  trackLead: (details: { leadId: string; email: string; phone: string; vertical: string; size: string; variant?: string }) => void;
};

declare global {
  interface Window {
    UCDMarketing?: UcdMarketingApi;
  }
}

type QuoteFormProps = {
  compact?: boolean;
  context?: string;
  containerOptions?: string[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
  buttonText?: string;
  note?: string;
};

const defaultContainerOptions = ["20FT Standard", "40FT Standard", "40FT High Cube", "Custom Modified", "Not sure yet"];

export function QuoteForm({
  compact = false,
  context = "General container",
  containerOptions = defaultContainerOptions,
  eyebrow = "Fast delivered price",
  heading = "Get your free quote",
  intro = "Takes under a minute. We respond the same business day.",
  buttonText = "Get my delivered price",
  note,
}: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const fallbackSize = containerOptions.includes("Not sure yet") ? "Not sure yet" : containerOptions[0];
  const [selectedSize, setSelectedSize] = useState(fallbackSize);

  useEffect(() => {
    const requestedSize = new URLSearchParams(window.location.search).get("size");
    if (!requestedSize) return;
    const match = containerOptions.find((option) => option.toLowerCase() === requestedSize.toLowerCase());
    if (!match) return;
    const frame = window.requestAnimationFrame(() => setSelectedSize(match));
    return () => window.cancelAnimationFrame(frame);
  }, [containerOptions]);

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    const data = new FormData(event.currentTarget);
    const search = new URLSearchParams(window.location.search);
    const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term", "gclid", "gbraid", "wbraid", "dclid", "gclsrc", "gad_source", "gad_campaignid"];
    const leadId = window.UCDMarketing?.newLeadId() ?? `ucd_lead_${Date.now()}`;

    data.set("landing_page", window.location.href);
    data.set("lead_id", leadId);
    data.set("order_id", leadId);
    data.set("lead_stage", "Submitted lead");
    data.set("conversion_time", new Date().toISOString());
    data.set("_subject", `New UCD redesign lead | ${context} | ZIP ${data.get("zip")}`);
    if (window.UCDMarketing) window.UCDMarketing.appendAttribution(data);
    else trackingKeys.forEach((key) => {
        const value = search.get(key);
        if (value) data.set(key, value);
      });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) throw new Error("Formspree rejected the submission");
      const experimentVariant = window.UCDMarketing?.experimentVariant() ?? "B";
      window.UCDMarketing?.trackLead({
        leadId,
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        vertical: context,
        size: String(data.get("size") || ""),
        variant: experimentVariant,
      });
      setStatus("success");
      window.dispatchEvent(new CustomEvent("ucd:quote-submitted", { detail: { context, variant: experimentVariant, leadId } }));
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div id="quote-form" className={`quote-form quote-success ${compact ? "quote-form-compact" : ""}`} role="status">
        <span className="success-mark" aria-hidden="true">✓</span>
        <span className="eyebrow dark">Request received</span>
        <h2>We have your quote request.</h2>
        <p>A container specialist will contact you shortly with pricing and availability for your ZIP.</p>
        <p className="form-note">Need a faster answer? <a href="tel:18555250902">Call (855) 525-0902</a></p>
      </div>
    );
  }

  return (
    <form
      id="quote-form"
      className={`quote-form ${compact ? "quote-form-compact" : ""}`}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      data-formspree-quote
      onSubmit={submitQuote}
    >
      <input type="hidden" name="form_name" value="UCD Redesign Quote Form" />
      <input type="hidden" name="experiment" value="website_redesign_2026" />
      <input type="hidden" name="variant" value="new_site" />
      <input type="hidden" name="vertical" value={context} />
      <input type="hidden" name="source" value="ucd_redesign" />
      <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="form-heading">
        <span className="eyebrow dark">{eyebrow}</span>
        <h2>{heading}</h2>
        <p>{intro}</p>
      </div>
      <div className="form-grid">
        <label>
          Name
          <input id="ucd-name" name="name" placeholder="John Smith" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input id="ucd-phone" name="phone" placeholder="(555) 123-4567" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Delivery ZIP
          <input id="ucd-zip" name="zip" placeholder="75201" inputMode="numeric" pattern="[0-9]{5}" autoComplete="postal-code" required />
        </label>
        <label>
          Email
          <input id="ucd-email" name="email" placeholder="you@company.com" type="email" autoComplete="email" required />
        </label>
        <label className="span-2">
          Container size
          <select name="size" value={selectedSize} onChange={(event) => setSelectedSize(event.target.value)}>
            {containerOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <button className="button primary form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending request..." : buttonText}
      </button>
      {status === "error" && <p className="form-error" role="alert">We could not send your request. Please try again or call (855) 525-0902.</p>}
      <p className="form-note">{note ?? "No payment. No obligation. No spam."} Prefer to talk? <a href="tel:18555250902">Call (855) 525-0902</a></p>
    </form>
  );
}
