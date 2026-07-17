const iconBySlug = {
  "construction-site-theft-prevention": "shield",
  "shipping-container-locks-lockboxes": "lock",
  "jobsite-cameras-lighting-gps": "camera",
  "overnight-tool-security-checklist": "checklist",
  "construction-container-buying-guide": "buying",
  "rent-vs-buy-construction-container": "balance",
  "one-trip-vs-used-container": "compare",
  "20ft-vs-40ft-construction": "sizes",
  "container-site-preparation": "site",
  "container-delivery-clearance": "truck",
  "container-foundations-gravel-concrete": "foundation",
  "jobsite-container-layout": "layout",
  "container-dimensions-specifications": "ruler",
  "container-payload-floor-loading": "load",
  "high-cube-construction-guide": "height",
  "container-tool-organization-shelving": "shelves",
  "container-electrical-lighting": "electric",
  "container-ventilation-moisture-control": "airflow",
  "container-inspection-maintenance": "inspection",
  "construction-container-permits": "permit",
  "osha-fire-insurance-container-storage": "compliance",
  "commercial-residential-builder-storage": "builder",
  "specialty-trade-container-storage": "tools",
  "infrastructure-project-container-storage": "infrastructure",
  "construction-container-delivered-cost": "delivered-cost",
  "construction-container-total-cost-ownership": "ownership",
  "construction-container-faq": "faq",
  "small-builder-20ft-container-field-plan": "small-builder",
  "commercial-multitrade-container-field-plan": "trades",
  "infrastructure-mobile-depot-field-plan": "mobile-depot",
  "long-term-multiproject-ownership-field-plan": "portfolio",
  "temporary-project-rent-buy-field-plan": "temporary",
} as const;

type IconName = (typeof iconBySlug)[keyof typeof iconBySlug];

function IconDrawing({ name }: { name: IconName }) {
  switch (name) {
    case "shield":
      return <><path d="M48 10 75 20v23c0 19-11 32-27 41C32 75 21 62 21 43V20Z" /><path d="m34 47 9 9 19-21" /></>;
    case "lock":
      return <><rect x="21" y="42" width="54" height="39" rx="4" /><path d="M33 42V29a15 15 0 0 1 30 0v13M48 58v10" /></>;
    case "camera":
      return <><rect x="17" y="29" width="54" height="38" rx="5" /><circle cx="44" cy="48" r="12" /><path d="m71 40 14-8v32l-14-8M25 29l6-10h18l6 10" /></>;
    case "checklist":
      return <><rect x="22" y="13" width="52" height="70" rx="4" /><path d="M36 13v-3h24v12H36Zm2 29 5 5 10-12M38 62h22M38 72h22" /></>;
    case "buying":
      return <><path d="M18 24h10l8 39h38l8-27H33" /><circle cx="43" cy="75" r="5" /><circle cx="70" cy="75" r="5" /><path d="m47 46 7 7 14-16" /></>;
    case "balance":
      return <><path d="M48 16v66M25 27h46M16 75h64M27 27 15 54h24Zm42 0L57 54h24Z" /><path d="M15 54c2 8 22 8 24 0m18 0c2 8 22 8 24 0" /></>;
    case "compare":
      return <><path d="M18 29h54l-9-9m9 9-9 9M78 67H24l9-9m-9 9 9 9" /><rect x="23" y="41" width="21" height="14" /><rect x="55" y="41" width="18" height="14" /></>;
    case "sizes":
      return <><rect x="11" y="39" width="29" height="27" /><rect x="48" y="27" width="37" height="39" /><path d="M11 75h74M11 71v8M40 71v8M48 71v8M85 71v8" /></>;
    case "site":
      return <><path d="M11 72h74M17 62h62M22 51h52M28 40h40" /><path d="m19 29 8-12m50 12-8-12M36 66v6m24-6v6" /></>;
    case "truck":
      return <><path d="M10 24h49v42H10Zm49 17h14l13 13v12H59Z" /><circle cx="27" cy="70" r="7" /><circle cx="72" cy="70" r="7" /><path d="M68 45h8l7 9H68Z" /></>;
    case "foundation":
      return <><rect x="17" y="17" width="62" height="35" /><path d="M24 52v15h15V52m18 0v15h15V52M12 76h72M18 67h60" /></>;
    case "layout":
      return <><rect x="14" y="14" width="68" height="68" /><path d="M14 39h68M41 14v68M59 39v43M41 59h41" /><circle cx="28" cy="27" r="5" /></>;
    case "ruler":
      return <><path d="m15 65 50-50 16 16-50 50Z" /><path d="m55 25 8 8m-18 2 8 8m-18 2 8 8m-18 2 8 8" /></>;
    case "load":
      return <><rect x="12" y="58" width="72" height="16" /><path d="M23 58V31h50v27M31 31l8-15h18l8 15M48 16v42" /><path d="m42 48 6 8 6-8" /></>;
    case "height":
      return <><rect x="27" y="17" width="43" height="64" /><path d="M15 17v64m-6-58 6-6 6 6M9 75l6 6 6-6M35 27h27M35 70h27" /></>;
    case "shelves":
      return <><rect x="14" y="15" width="68" height="66" /><path d="M14 37h68M14 59h68M25 27h15m9 0h20M21 49h22m11 0h17M25 71h17m10 0h22" /></>;
    case "electric":
      return <><path d="m54 9-25 40h18l-5 38 27-46H51Z" /><path d="M16 75h15m34 0h15" /></>;
    case "airflow":
      return <><path d="M12 29h50c12 0 12-17 1-17-7 0-9 5-9 9M12 48h68c11 0 11-16 1-16-6 0-8 4-8 8M12 67h43c12 0 12 17 1 17-7 0-9-5-9-9" /></>;
    case "inspection":
      return <><circle cx="40" cy="39" r="25" /><path d="m58 58 23 23M28 39l8 8 17-19" /></>;
    case "permit":
      return <><path d="M22 12h41l13 13v59H22Z" /><path d="M63 12v15h13M33 41h31M33 53h31M33 65h17" /><circle cx="62" cy="67" r="9" /></>;
    case "compliance":
      return <><path d="M48 10 74 20v22c0 18-10 31-26 40-16-9-26-22-26-40V20Z" /><path d="M48 29c8 10 10 15 10 22a10 10 0 0 1-20 0c0-6 3-11 10-22Z" /></>;
    case "builder":
      return <><path d="M11 80V43l25-19 25 19v37M61 80V26h24v54M21 80V52h30v28" /><path d="M28 61h8m7 0h8M69 39h8m-8 13h8m-8 13h8" /></>;
    case "tools":
      return <><path d="m17 77 33-33M42 31l8 13 13 8 21-21-9-9-10 10-8-8 10-10-9-9-21 21Z" /><path d="m19 63 14 14-8 8-14-14Z" /></>;
    case "infrastructure":
      return <><path d="M10 76h76M17 76V50h62v26M25 50l9-24h28l9 24M34 26V15h28v11" /><path d="M27 76V61m14 15V61m14 15V61m14 15V61" /></>;
    case "delivered-cost":
      return <><path d="M8 29h45v34H8Zm45 12h16l14 13v9H53Z" /><circle cx="24" cy="68" r="6" /><circle cx="69" cy="68" r="6" /><path d="M36 18v18m7-14c-6-6-16-2-14 4 2 5 13 2 14 8 1 7-10 10-16 4" /></>;
    case "ownership":
      return <><rect x="17" y="16" width="62" height="66" rx="5" /><path d="M29 29h38M29 42h11m8 0h7m8 0h4M29 55h11m8 0h7m8 0h4M29 68h11m8 0h19" /></>;
    case "faq":
      return <><path d="M14 17h68v51H48L30 82V68H14Z" /><path d="M37 37c1-11 22-12 23 0 1 8-11 8-11 16m0 8h.1" /></>;
    case "small-builder":
      return <><path d="M11 78V45l23-18 23 18v33M19 78V51h30v27" /><rect x="58" y="48" width="27" height="30" /><path d="M64 57h15M64 65h15" /></>;
    case "trades":
      return <><circle cx="29" cy="29" r="10" /><circle cx="67" cy="29" r="10" /><path d="M10 72c2-17 10-26 19-26s17 9 19 26m0 0c2-17 10-26 19-26s17 9 19 26" /><path d="M41 19h14M48 12v14" /></>;
    case "mobile-depot":
      return <><rect x="9" y="30" width="47" height="35" /><path d="M56 43h16l14 13v9H56Z" /><circle cx="25" cy="70" r="6" /><circle cx="72" cy="70" r="6" /><path d="M17 41h31M17 51h31" /></>;
    case "portfolio":
      return <><rect x="15" y="20" width="32" height="25" /><rect x="49" y="51" width="32" height="25" /><path d="M47 32h18v12m0-12-7-7m7 7 7-7M49 64H31V52m0 12 7 7m-7-7-7 7" /></>;
    case "temporary":
      return <><circle cx="48" cy="49" r="33" /><path d="M48 29v22l16 10M26 16l-11 2 2 11M70 82l11-2-2-11" /></>;
  }
}

export function GuideCardIcon({ slug }: { slug: string }) {
  const name = iconBySlug[slug as keyof typeof iconBySlug] ?? "faq";
  return (
    <svg className="resource-guide-icon" data-guide-icon={name} viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <IconDrawing name={name} />
    </svg>
  );
}
