# UCD lead measurement handoff

Every successful redesign form now sends a unique `lead_id` and `order_id`, the original and latest landing pages, first-touch and last-touch UTM values, GCLID, GBRAID, WBRAID, DCLID, Google Ads source fields, the vertical, size, ZIP, email, phone and submission time to Formspree.

## Required CRM stages

- `UCD Qualified Lead`: a salesperson confirmed the buyer, use case, delivery ZIP and realistic purchasing intent.
- `UCD Quote Issued`: a written delivered-price quote was sent.
- `UCD Sold Container`: payment or the defined sale milestone was completed.

Use the original `lead_id` as the Order ID for every later stage. Import the actual stage time, not the form-submission time. Use gross revenue for the sold conversion and the agreed estimated values for earlier stages. Do not upload the example rows in `google-ads-lead-stage-import.csv`.

The automated import cannot be connected until the CRM or lead-management system is identified and access is available. Google Ads Data Manager should receive the stage records from that system. Keep each stage as its own conversion action so bidding can target one stage without mixing the funnel.
