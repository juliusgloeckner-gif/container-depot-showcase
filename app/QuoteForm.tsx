"use client";

import { FormEvent } from "react";

type QuoteFormProps = {
  compact?: boolean;
  context?: string;
};

export function QuoteForm({ compact = false, context = "General container" }: QuoteFormProps) {
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Container quote request: ${data.get("zip")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Email: ${data.get("email")}`,
        `Delivery ZIP: ${data.get("zip")}`,
        `Container: ${data.get("size")}`,
        `Use: ${context}`,
      ].join("\n"),
    );
    window.location.href = `mailto:info@unitedcontainerdepot.com?subject=${subject}&body=${body}`;
  }

  return (
    <form id="quote-form" className={`quote-form ${compact ? "quote-form-compact" : ""}`} onSubmit={submitQuote}>
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
            <option>20FT Standard</option>
            <option>40FT Standard</option>
            <option>40FT High Cube</option>
            <option>Custom Modified</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <button className="button primary form-button" type="submit">Get my delivered price</button>
      <p className="form-note">No spam. No pressure. Prefer to talk? <a href="tel:18555250902">Call (855) 525-0902</a></p>
    </form>
  );
}
