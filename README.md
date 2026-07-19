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

Visitors receive stable origin and experiment assignment cookies for 30 days.
Search engines, sitemaps, robots files and existing location SEO pages remain
on Variant A, except that public construction knowledge pages use Variant B.

Construction, Farm and Business each run as a separate 50/50 experiment. The
public entry routes are `/construction`, `/farm` and `/business`. The legacy
aliases `/agriculture` and `/commercial` redirect to their canonical experiment
entry routes. Each experiment uses its own stable 30-day assignment cookie.

Both variants use one confirmed-submission measurement path. The router injects
the shared Google measurement script and safe Formspree handler into Variant A.
It waits for Formspree before showing success or firing the lead conversion. A
public experiment cookie exposes only the `A` or `B` assignment to analytics,
while the routing cookie remains HTTP-only.

Review confirmed and qualified leads by experiment variant. When a winner has
enough evidence, set the matching Vercel variable to `A` or `B`:
`UCD_CONSTRUCTION_WINNER`, `UCD_FARM_WINNER` or `UCD_BUSINESS_WINNER`. The
router then stops that split, overrides prior assignments, and reports the
experiment as stopped at `/__router/status`. Leave the variable unset while the
experiment is running.

For internal QA, append `?__ucd_variant=A` or `?__ucd_variant=B` to force and
save a variant assignment.
