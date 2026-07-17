# United Container Depot A/B Router

This project routes the public United Container Depot website between:

- Variant A: the current production website
- Variant B: the UCD redesign

Construction traffic is split between the current page and the redesign. The
default is 50% redesign traffic. Set `UCD_CONSTRUCTION_B_PERCENT` in Vercel to
change the construction split without changing application code.

The other nine use-case pages and all six specialty-container pages always use
the redesign. Construction knowledge pages, PDFs and social graphics also use
the redesign and remain publicly indexable.

Visitors receive stable origin and construction assignment cookies for 30 days.
Search engines, sitemaps, robots files and existing location SEO pages remain
on Variant A, except that public construction knowledge pages use Variant B.

For internal QA, append `?__ucd_variant=A` or `?__ucd_variant=B` to force and
save a variant assignment.
