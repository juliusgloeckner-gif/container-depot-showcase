# United Container Depot A/B Router

This project routes the public United Container Depot website between:

- Variant A: the current production website
- Variant B: the UCD redesign

The default rollout is 90% Variant A and 10% Variant B. Set `UCD_B_PERCENT`
in Vercel to change the redesign percentage without changing application code.

Visitors receive a stable `ucd_ab_variant` cookie for 30 days. Search engines,
sitemaps, robots files and existing location SEO pages always use Variant A.

For internal QA, append `?__ucd_variant=A` or `?__ucd_variant=B` to force and
save a variant assignment.
