"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzepnvd";

type QuoteFormProps = {
  compact?: boolean;
  context?: string;
  containerOptions?: string[];
};

const defaultContainerOptions = ["20FT Standard", "40FT Standard", "40FT High Cube", "Custom Modified", "Not sure yet"];

export function QuoteForm({ compact = false, context = "General container", containerOptions = defaultContainerOptions }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    const data = new FormData(event.currentTarget);
    const search = new URLSearchParams(window.location.search);
    const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"];

    data.set("landing_page", window.location.href);
    data.set("_subject", `New UCD redesign lead | ${context} | ZIP ${data.get("zip")}`);
    trackingKeys.forEach((key) => {
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
      setStatus("success");
      window.dispatchEvent(new CustomEvent("ucd:quote-submitted", { detail: { context, variant: "new_site" } }));
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
        <span className="eyebrow dark">Fast delivered price</span>
        <h2>Get your free quote</h2>
        <p>Takes under a minute. We respond the same business day.</p>
      </div>
      <div className="form-grid">
        <label>
          Name
          <input name="name" placeholder="John Smith" autoComplete="name" required />
        </label>
        <label>
          Phone
          <input name="phone" placeholder="(555) 123-4567" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Delivery ZIP
          <input name="zip" placeholder="75201" inputMode="numeric" pattern="[0-9]{5}" required />
        </label>
        <label>
          Email
          <input name="email" placeholder="you@company.com" type="email" autoComplete="email" required />
        </label>
        <label className="span-2">
          Container size
          <select name="size" defaultValue="Not sure yet">
            {containerOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <button className="button primary form-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending request..." : "Get my delivered price"}
      </button>
      {status === "error" && <p className="form-error" role="alert">We could not send your request. Please try again or call (855) 525-0902.</p>}
      <p className="form-note">No spam. No pressure. Prefer to talk? <a href="tel:18555250902">Call (855) 525-0902</a></p>
    </form>
  );
}
