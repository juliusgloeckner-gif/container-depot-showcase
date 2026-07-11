export type Vertical = {
  key: string;
  nav: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  lead: string;
  hero: string;
  context: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  applications: string[];
  testimonials: { quote: string; person: string }[];
  faq: { q: string; a: string }[];
};

const construction: Vertical = {
  key: "construction", nav: "Construction", eyebrow: "Job site storage that works", title: "Protect your tools.", emphasis: "Keep your crew moving.",
  lead: "Secure, weatherproof containers delivered directly to your job site in 5 to 10 days. From $1,950 delivered.", hero: "/hero-construction.jpg", context: "Construction site storage",
  benefitsTitle: "Put theft, weather and wasted trips behind you.",
  benefits: [
    { title: "Stop tools walking off", text: "Steel lockbox doors protect power tools, fittings and equipment after the crew leaves." },
    { title: "Keep materials dry", text: "Wind and watertight steel keeps rain, dust and heat away from valuable stock." },
    { title: "Store it where you use it", text: "Place the container near the active work zone and cut repeat trips to off-site storage." },
  ],
  applications: ["Power tools", "Copper and fittings", "Safety equipment", "Small machinery", "Plans and site supplies", "Finish materials"],
  testimonials: [
    { quote: "Secure tool storage was on site within a week. The driver placed it exactly where we marked.", person: "Mike R., General Contractor" },
    { quote: "The 40-footer holds the crew's tools and materials. Nothing leaves the site overnight.", person: "Darren P., Site Superintendent" },
    { quote: "One delivered price and no surprise fees. Straightforward from quote to placement.", person: "Chris T., Project Manager" },
  ],
  faq: [
    { q: "How quickly can it reach the job site?", a: "Most deliveries are scheduled within 5 to 10 days after availability and access are confirmed." },
    { q: "Can the driver place it inside our site?", a: "Yes, when the surface is firm, level and accessible to a tilt-bed delivery truck. We review access before delivery." },
    { q: "What size is best for a construction crew?", a: "A 20FT unit suits tight sites and one crew. A 40FT unit gives the best value for larger projects and shared equipment." },
  ],
};

const farm: Vertical = {
  key: "farm", nav: "Farm", eyebrow: "Storage built for working land", title: "Protect your equipment.", emphasis: "Secure your feed.",
  lead: "Rodent-resistant, weatherproof storage delivered to your farm or ranch in 5 to 10 days. From $1,950 delivered.", hero: "/farm-storage-real.png", context: "Farm and ranch storage",
  benefitsTitle: "Dry, lockable storage where the work happens.",
  benefits: [
    { title: "Keep pests out", text: "Solid steel walls and sealed cargo doors protect feed, seed and supplies from rodents." },
    { title: "Beat the weather", text: "Wind and watertight construction keeps equipment and bagged goods dry year-round." },
    { title: "Reach remote acreage", text: "Place storage near the barn, equipment yard or field where you need it most." },
  ],
  applications: ["Feed and seed", "Tractor attachments", "Fencing supplies", "Animal health products", "Hand tools", "Seasonal equipment"],
  testimonials: [
    { quote: "Feed stays dry, mice stay out, and everything is right beside the barn.", person: "Wade H., Cattle Rancher" },
    { quote: "Our fencing supplies and irrigation gear are finally organized and close to the field.", person: "Alan B., Farm Owner" },
    { quote: "The driver placed it beside the equipment shed on our prepared gravel pad.", person: "Jake M., Livestock Farmer" },
  ],
  faq: [
    { q: "Can you deliver beyond the main barn?", a: "Often, yes. The route needs firm ground, enough turning room and a clear straight approach. We confirm access first." },
    { q: "Will a container keep rodents out?", a: "An intact wind and watertight unit provides solid steel storage with gasketed cargo doors. Keep the doors closed and the base area clear." },
    { q: "Which size works for farm equipment?", a: "A 40FT or 40FT High Cube gives the most useful capacity for implements, bulky supplies and palletized feed." },
  ],
};

const business: Vertical = {
  key: "business", nav: "Business", eyebrow: "Overflow storage on your own lot", title: "Own your storage.", emphasis: "Stop renting units.",
  lead: "Secure inventory, equipment and seasonal stock beside your premises. Delivered in 5 to 10 days. From $1,950 delivered.", hero: "/business-overflow.png", context: "Business overflow storage",
  benefitsTitle: "More room without another lease.",
  benefits: [
    { title: "Keep inventory close", text: "Access overflow stock, furniture and equipment without a trip across town." },
    { title: "Buy once, own it", text: "Replace recurring storage bills with a durable asset on your own property." },
    { title: "Scale around busy seasons", text: "Create flexible capacity for holiday stock, events, renovations or growth." },
  ],
  applications: ["Restaurant furniture", "Retail inventory", "Packaging supplies", "Maintenance equipment", "Records and fixtures", "Seasonal stock"],
  testimonials: [
    { quote: "Seasonal stock now sits behind the shop instead of across town.", person: "Rachel M., Retail Owner" },
    { quote: "We stopped paying monthly storage and gained faster access to inventory.", person: "Carlos D., Restaurant Operator" },
    { quote: "The container arrived clean, dry, and exactly where our team needed it.", person: "Nina S., Operations Manager" },
  ],
  faq: [
    { q: "Can a container sit behind my business?", a: "Usually, subject to local zoning, fire access and property rules. Confirm permits and clearance with your local authority or landlord." },
    { q: "How much can a 40FT container hold?", a: "A standard 40FT unit provides about 320 square feet of floor space and roughly 2,350 cubic feet of capacity." },
    { q: "Can you add shelving or lighting?", a: "Yes. Ask about shelving, electrical packages, insulation, personnel doors and other modifications." },
  ],
};

export const verticals: Record<string, Vertical> = { construction, farm, agriculture: farm, business, commercial: business };
