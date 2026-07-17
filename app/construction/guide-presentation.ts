export type GuidePresentation = {
  label: string;
  image: string;
  imageAlt: string;
  stats: [string, string][];
  visualTitle: string;
  visualNote: string;
  download: { label: string; href: string };
};

const presentations: Record<string, GuidePresentation> = {
  security: {
    label: "Security field system",
    image: "/lock-theft.jpg",
    imageAlt: "Close view of a construction storage container lock and door hardware",
    stats: [["Layer 1", "Placement"], ["Layer 2", "Hardware"], ["Layer 3", "Closeout"]],
    visualTitle: "Layer the site so one failed control does not expose the tools.",
    visualNote: "A strong lock matters. A visible location, controlled keys, lighting and a named nightly closer matter just as much.",
    download: { label: "Security field checklist", href: "/downloads/ucd-construction-security-checklist.pdf" },
  },
  buying: {
    label: "Buying decision map",
    image: "/container-20ft.jpg",
    imageAlt: "Twenty foot construction storage container ready for delivery",
    stats: [["20FT", "Tight sites"], ["40FT", "Best capacity"], ["High Cube", "+12 in height"]],
    visualTitle: "Compare the full delivered scope, not just the depot price.",
    visualNote: "Size, condition, modifications, access and freight determine the useful value of the unit that reaches the project.",
    download: { label: "Buyer handbook", href: "/downloads/ucd-construction-container-buyers-handbook.pdf" },
  },
  planning: {
    label: "Delivery planning map",
    image: "/hero-construction.jpg",
    imageAlt: "Construction container positioned beside an active jobsite work zone",
    stats: [["01", "Approach"], ["02", "Bearing"], ["03", "Door swing"]],
    visualTitle: "Plan the truck route and final operating space as one system.",
    visualNote: "The container footprint is only the final rectangle. Delivery needs a clear approach, stable ground and room to unload safely.",
    download: { label: "Delivery field manual", href: "/downloads/ucd-jobsite-delivery-placement-field-manual.pdf" },
  },
  specifications: {
    label: "Dimensions at a glance",
    image: "/container-40ft-hc.jpg",
    imageAlt: "Standard and high cube construction containers shown for height comparison",
    stats: [["20FT", "160 sq ft"], ["40FT", "320 sq ft"], ["High Cube", "9 ft 6 in"]],
    visualTitle: "Use nominal size for planning, then verify the exact unit before loading.",
    visualNote: "Interior dimensions, door openings, tare weight and payload vary by manufacturer and condition. Measure critical equipment.",
    download: { label: "20FT vs 40FT report", href: "/downloads/ucd-20ft-vs-40ft-construction-report.pdf" },
  },
  operations: {
    label: "Daily operating layout",
    image: "/storage-tools2.jpg",
    imageAlt: "Construction tools organized on shelving inside a jobsite container",
    stats: [["Front", "Fast retrieval"], ["Center", "Clear aisle"], ["Rear", "Reserve stock"]],
    visualTitle: "Design the interior around retrieval frequency and safe movement.",
    visualNote: "Keep the aisle clear, heavy items low and frequently used equipment near the doors. Inspect after moves and severe weather.",
    download: { label: "Weekly inspection pack", href: "/downloads/ucd-construction-weekly-inspection-checklist.pdf" },
  },
  regulations: {
    label: "Approval path",
    image: "/hero-construction.jpg",
    imageAlt: "Construction storage container located within an active controlled jobsite",
    stats: [["Site", "Owner rules"], ["Local", "AHJ review"], ["Project", "Safety plan"]],
    visualTitle: "Confirm who controls the rule before treating a general answer as approval.",
    visualNote: "Property requirements, fire access, permits, insurance and project safety rules can all affect placement and use.",
    download: { label: "Site preparation checklist", href: "/downloads/ucd-construction-site-preparation-checklist.pdf" },
  },
  "use-cases": {
    label: "Work-zone planning",
    image: "/storage-tools.jpg",
    imageAlt: "Construction storage container organized for trade tools and materials",
    stats: [["Zone A", "Daily tools"], ["Zone B", "Materials"], ["Zone C", "High value"]],
    visualTitle: "Match the storage zones to the crew, phase and retrieval pattern.",
    visualNote: "A residential builder, specialty contractor and infrastructure crew use the same steel box in very different ways.",
    download: { label: "Buyer handbook", href: "/downloads/ucd-construction-container-buyers-handbook.pdf" },
  },
  costs: {
    label: "Ownership cost model",
    image: "/inventory-v3/construction-40.jpg",
    imageAlt: "Forty foot container available for construction storage",
    stats: [["Acquire", "Delivered total"], ["Operate", "Moves and upkeep"], ["Exit", "Resale value"]],
    visualTitle: "Compare cash across the full project life, not one monthly number.",
    visualNote: "Purchase, delivery, modifications, future moves, maintenance and resale belong in the same comparison with rental charges.",
    download: { label: "Cost comparison report", href: "/downloads/ucd-20ft-vs-40ft-construction-report.pdf" },
  },
  faq: {
    label: "Contractor question library",
    image: "/container-20ft.jpg",
    imageAlt: "Construction storage container ready for a contractor delivery decision",
    stats: [["100", "Questions"], ["10", "Topics"], ["1", "Field library"]],
    visualTitle: "Start with the exact question, then follow the linked field guide.",
    visualNote: "The library gives a direct answer first and points to deeper planning, comparison and checklist resources when needed.",
    download: { label: "100-question handbook", href: "/downloads/ucd-100-construction-container-questions.pdf" },
  },
  "field-scenarios": {
    label: "Worked field plan",
    image: "/hero-construction.jpg",
    imageAlt: "Construction crew using a storage container beside the active work area",
    stats: [["People", "Named owner"], ["Place", "Working zone"], ["Routine", "Repeatable closeout"]],
    visualTitle: "Turn general advice into a layout, owner and operating routine.",
    visualNote: "Worked scenarios show how the same decisions change with project size, trade mix, duration and site access.",
    download: { label: "Delivery field manual", href: "/downloads/ucd-jobsite-delivery-placement-field-manual.pdf" },
  },
};

export function presentationFor(category: string): GuidePresentation {
  return presentations[category] ?? presentations.planning;
}
