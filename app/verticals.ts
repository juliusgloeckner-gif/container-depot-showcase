export type Vertical = {
  key: string;
  nav: string;
  eyebrow: string;
  title: string;
  emphasis: string;
  lead: string;
  hero: string;
  featureImage: string;
  inventoryImages: [string, string, string, string];
  gallery: { image: string; alt: string; caption: string }[];
  context: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  applications: string[];
  visualTags?: { icon: string; label: string }[];
  testimonials: { quote: string; person: string }[];
  faq: { q: string; a: string }[];
};

const construction: Vertical = {
  key: "construction", nav: "Construction", eyebrow: "Job site storage that works", title: "Protect your tools.", emphasis: "Keep your crew moving.",
  lead: "Secure, weatherproof containers delivered directly to your job site in 5 to 10 days. From $1,950 delivered.", hero: "/hero-construction.jpg", featureImage: "/storage-tools.jpg", context: "Construction site storage",
  inventoryImages: ["/container-20ft.jpg", "/hero-construction.jpg", "/container-40ft-hc.jpg", "/container-custom.jpg"],
  gallery: [
    { image: "/lock-theft.jpg", alt: "Locked shipping container protecting construction equipment", caption: "Lock tools down after the crew leaves" },
    { image: "/weather-rain.jpg", alt: "Weatherproof construction storage container in rain", caption: "Keep materials protected from weather" },
    { image: "/storage-tools2.jpg", alt: "Organized contractor tools inside a shipping container", caption: "Organize equipment where it is used" },
  ],
  benefitsTitle: "Put theft, weather and wasted trips behind you.",
  benefits: [
    { title: "Stop tools walking off", text: "Steel lockbox doors protect power tools, fittings and equipment after the crew leaves." },
    { title: "Keep materials dry", text: "Wind and watertight steel keeps rain, dust and heat away from valuable stock." },
    { title: "Store it where you use it", text: "Place the container near the active work zone and cut repeat trips to off-site storage." },
  ],
  applications: ["Power tools", "Copper and fittings", "Safety equipment", "Small machinery", "Plans and site supplies", "Finish materials"],
  testimonials: [
    { quote: "On site within a week and placed exactly where we marked.", person: "Mike R., General Contractor" },
    { quote: "The crew's tools stay locked on site overnight.", person: "Darren P., Site Superintendent" },
    { quote: "One delivered price. No surprise fees.", person: "Chris T., Project Manager" },
  ],
  faq: [
    { q: "How quickly can it reach the job site?", a: "Most deliveries are scheduled within 5 to 10 days after availability and access are confirmed." },
    { q: "Can the driver place it inside our site?", a: "Yes, when the surface is firm, level and accessible to a tilt-bed delivery truck. We review access before delivery." },
    { q: "What size is best for a construction crew?", a: "A 20FT unit suits tight sites and one crew. A 40FT unit gives the best value for larger projects and shared equipment." },
  ],
};

const farm: Vertical = {
  key: "farm", nav: "Farm", eyebrow: "Storage built for working land", title: "Protect your equipment.", emphasis: "Secure your feed.",
  lead: "Rodent-resistant, weatherproof storage delivered to your farm or ranch in 5 to 10 days. From $1,950 delivered.", hero: "/farm-storage-real.png", featureImage: "/farm-feature-storage-v2.png", context: "Farm and ranch storage",
  inventoryImages: ["/inventory-v2/farm-1.jpg", "/inventory-v2/farm-2.jpg", "/inventory-v2/farm-3.jpg", "/inventory-v2/farm-4.jpg"],
  gallery: [
    { image: "/ag-gallery1.jpg", alt: "Shipping container placed beside a barn and cattle pasture", caption: "Placed beside the barn, not in the way" },
    { image: "/farm-feed-storage-v2.png", alt: "Feed seed and fencing stored inside a standard 20 foot container beside a barn", caption: "Feed, seed and fencing stay organized" },
    { image: "/farm-seasonal-equipment-v2.png", alt: "Seasonal farm equipment stored through the short-end cargo doors of a container beside an equipment shed", caption: "Seasonal equipment stays secure and dry" },
  ],
  benefitsTitle: "Dry, lockable storage where the work happens.",
  benefits: [
    { title: "Keep pests out", text: "Solid steel walls and sealed cargo doors protect feed, seed and supplies from rodents." },
    { title: "Beat the weather", text: "Wind and watertight construction keeps equipment and bagged goods dry year-round." },
    { title: "Reach remote acreage", text: "Place storage near the barn, equipment yard or field where you need it most." },
  ],
  applications: ["Feed and seed", "Tractor attachments", "Fencing supplies", "Animal health products", "Hand tools", "Seasonal equipment"],
  testimonials: [
    { quote: "Feed stays dry and everything is beside the barn.", person: "Wade H., Cattle Rancher" },
    { quote: "Fencing supplies are organized and close to the field.", person: "Alan B., Farm Owner" },
    { quote: "Placed beside the equipment shed on our gravel pad.", person: "Jake M., Livestock Farmer" },
  ],
  faq: [
    { q: "Can you deliver beyond the main barn?", a: "Often, yes. The route needs firm ground, enough turning room and a clear straight approach. We confirm access first." },
    { q: "Will a container keep rodents out?", a: "An intact wind and watertight unit provides solid steel storage with gasketed cargo doors. Keep the doors closed and the base area clear." },
    { q: "Which size works for farm equipment?", a: "A 40FT or 40FT High Cube gives the most useful capacity for implements, bulky supplies and palletized feed." },
  ],
};

const business: Vertical = {
  key: "business", nav: "Business", eyebrow: "Overflow storage on your own lot", title: "Own your storage.", emphasis: "Stop renting units.",
  lead: "Secure inventory, equipment and seasonal stock beside your premises. Delivered in 5 to 10 days. From $1,950 delivered.", hero: "/business-overflow.png", featureImage: "/business-warehouse-overflow-v2.png", context: "Business overflow storage",
  inventoryImages: ["/inventory-v2/business-1.jpg", "/inventory-v2/business-2.jpg", "/inventory-v2/business-3.jpg", "/inventory-v2/business-4.jpg"],
  gallery: [
    { image: "/business-overflow.png", alt: "Shipping container storing restaurant supplies beside a business", caption: "Overflow stock stays beside your premises" },
    { image: "/business-warehouse-overflow-v2.png", alt: "Packaging supplies and warehouse overflow stored in a 40 foot container beside the loading area", caption: "Warehouse overflow stays organized on site" },
    { image: "/business-retail-overflow-v2.png", alt: "Restaurant furniture and seasonal retail stock stored in a 20 foot container beside the business", caption: "Seasonal stock stays beside the business" },
  ],
  benefitsTitle: "More room without another lease.",
  benefits: [
    { title: "Keep inventory close", text: "Access overflow stock, furniture and equipment without a trip across town." },
    { title: "Buy once, own it", text: "Replace recurring storage bills with a durable asset on your own property." },
    { title: "Scale around busy seasons", text: "Create flexible capacity for holiday stock, events, renovations or growth." },
  ],
  applications: ["Restaurant furniture", "Retail inventory", "Packaging supplies", "Maintenance equipment", "Records and fixtures", "Seasonal stock"],
  visualTags: [
    { icon: "RF", label: "Restaurant furniture" },
    { icon: "RI", label: "Retail inventory" },
    { icon: "PK", label: "Packaging supplies" },
    { icon: "ME", label: "Maintenance equipment" },
    { icon: "RC", label: "Records and fixtures" },
    { icon: "SS", label: "Seasonal stock" },
  ],
  testimonials: [
    { quote: "Seasonal stock is behind the shop, not across town.", person: "Rachel M., Retail Owner" },
    { quote: "We stopped paying monthly storage fees.", person: "Carlos D., Restaurant Operator" },
    { quote: "Clean, dry and placed exactly where we needed it.", person: "Nina S., Operations Manager" },
  ],
  faq: [
    { q: "Can a container sit behind my business?", a: "Usually, subject to local zoning, fire access and property rules. Confirm permits and clearance with your local authority or landlord." },
    { q: "How much can a 40FT container hold?", a: "A standard 40FT unit provides about 320 square feet of floor space and roughly 2,350 cubic feet of capacity." },
    { q: "Can you add shelving or lighting?", a: "Yes. Ask about shelving, electrical packages, insulation, personnel doors and other modifications." },
  ],
};

const moving: Vertical = {
  key: "moving", nav: "Moving & Relocation", eyebrow: "Storage that moves at your pace", title: "Pack once.", emphasis: "Move without the rush.",
  lead: "Own secure space for the weeks between packing, closing and settling in. Load household belongings on your schedule and keep them close until the next step is ready.", hero: "/moving-hero.png", featureImage: "/moving-feature.png", context: "Residential moving and relocation storage",
  inventoryImages: ["/inventory-v2/home-1.jpg", "/inventory-v2/home-2.jpg", "/inventory-v2/home-3.jpg", "/inventory-v2/home-4.jpg"],
  gallery: [
    { image: "/moving-hero.png", alt: "Twenty foot shipping container holding household furniture and boxes beside a suburban home", caption: "Pack beside the house on your schedule" },
    { image: "/moving-gallery-1.png", alt: "Household belongings being unloaded through the short-end doors of a shipping container", caption: "Unload at the new home without the rush" },
    { image: "/moving-gallery-2.png", alt: "Boxes furniture and moving blankets secured inside a standard shipping container", caption: "Keep one organized load between closings" },
  ],
  benefitsTitle: "More control between one front door and the next.",
  benefits: [
    { title: "Pack at your pace", text: "Stage boxes and furniture over days instead of forcing the whole move into one exhausting weekend." },
    { title: "Cut double handling", text: "Keep belongings in one secure steel space instead of moving everything through an off-site storage unit." },
    { title: "Bridge the timing gap", text: "Create useful capacity when the old home, new home and closing dates do not line up cleanly." },
  ],
  applications: ["Household furniture", "Moving boxes and books", "Garage tools", "Bicycles and outdoor gear", "Seasonal belongings", "Appliances and fixtures"],
  testimonials: [
    { quote: "We packed room by room instead of doing everything in one weekend.", person: "Laura M., Homeowner" },
    { quote: "The furniture stayed together while our closing date moved.", person: "Kevin D., Home Buyer" },
    { quote: "One container gave us breathing room between both houses.", person: "Erin S., Relocating Family" },
  ],
  faq: [
    { q: "Can it be placed in my driveway?", a: "Often, yes. The driveway must be firm, level and accessible to a tilt-bed delivery truck. We review clearance, slope and turning room before scheduling." },
    { q: "Will you move the loaded container to my new home?", a: "We sell and deliver the container. Transporting it after loading requires a qualified container carrier and suitable access at both properties. Ask your specialist about the options available in your area before purchase." },
    { q: "Which size works for a household move?", a: "A 20FT unit is easier to place and suits many smaller homes. A 40FT unit provides more capacity for larger households, furniture and garage contents." },
  ],
};

const renovation: Vertical = {
  key: "renovation", nav: "Renovation", eyebrow: "Clear the rooms without losing the space", title: "Move it out.", emphasis: "Keep the project moving.",
  lead: "Protect furniture, fixtures and household contents from dust, traffic and accidental damage while renovation or restoration work happens inside your home.", hero: "/renovation-hero.png", featureImage: "/renovation-feature.png", context: "Home renovation and restoration storage",
  inventoryImages: ["/inventory-v2/home-1.jpg", "/inventory-v2/home-2.jpg", "/inventory-v2/home-3.jpg", "/inventory-v2/home-4.jpg"],
  gallery: [
    { image: "/renovation-hero.png", alt: "Standard shipping container beside a home renovation with wrapped household furniture nearby", caption: "Create working room before the crew starts" },
    { image: "/renovation-gallery-1.png", alt: "Wrapped furniture cabinets rugs and boxes stored inside a container beside a renovated home", caption: "Keep household contents away from dust" },
    { image: "/renovation-gallery-2.png", alt: "Dry protected furniture and artwork stored during home restoration", caption: "Protect what matters while the home recovers" },
  ],
  benefitsTitle: "Give the work room without sending your belongings away.",
  benefits: [
    { title: "Clear the work zone", text: "Move furniture and boxed contents out of active rooms so trades can work safely and efficiently." },
    { title: "Keep belongings close", text: "Access fixtures, appliances and household items on your property instead of driving to storage." },
    { title: "Protect from job-site traffic", text: "Lockable steel separates your belongings from dust, foot traffic and the daily movement of materials." },
  ],
  applications: ["Furniture and rugs", "Cabinets and fixtures", "Boxed household contents", "Appliances", "Artwork and mirrors", "Restoration salvage"],
  testimonials: [
    { quote: "The first floor was empty before demolition started.", person: "Mark T., Homeowner" },
    { quote: "Everything stayed on the property and out of the dust.", person: "Dana P., Renovation Client" },
    { quote: "We could retrieve fixtures whenever the contractor needed them.", person: "Helen W., Property Owner" },
  ],
  faq: [
    { q: "How quickly can storage arrive for an urgent restoration?", a: "Most deliveries are scheduled within 5 to 10 days after inventory and access are confirmed. Tell us if the project is urgent so we can check the closest available unit." },
    { q: "Can it sit beside the house during construction?", a: "Often, yes, when the surface is firm and level and the truck has a clear approach. Confirm local permit, neighborhood and property rules before delivery." },
    { q: "How should furniture be stored?", a: "Keep items dry before loading, use breathable furniture covers, raise sensitive contents off the floor and leave airflow around the load. Ask about vents when storage will span changing seasons." },
  ],
};

const vehicles: Vertical = {
  key: "vehicles", nav: "Vehicles & Recreation", eyebrow: "Secure space for the machines you keep", title: "Free your garage.", emphasis: "Protect the good stuff.",
  lead: "Create lockable storage for classic cars, motorcycles, ATVs and recreational equipment beside your home, workshop or acreage.", hero: "/vehicles-hero.png", featureImage: "/vehicles-feature.png", context: "Vehicle and recreational equipment storage",
  inventoryImages: ["/inventory-v2/vehicles-1.jpg", "/inventory-v2/vehicles-40ft-recreation.jpg", "/inventory-v2/vehicles-3.jpg", "/inventory-v2/vehicles-4.jpg"],
  gallery: [
    { image: "/inventory-v2/vehicles-1.jpg", alt: "Classic car stored through the short-end doors of a twenty foot container beside a workshop", caption: "A 20FT unit can protect one compact classic" },
    { image: "/vehicles-gallery-1.png", alt: "Motorcycles ATV helmets and riding gear inside a twenty foot shipping container", caption: "Lock up motorcycles, ATVs and riding gear" },
    { image: "/inventory-v2/vehicles-40ft-recreation.jpg", alt: "Kayaks bicycles an ATV and camping gear organized through the short-end doors of a forty foot container beside a workshop", caption: "Use 40FT for four seasons of recreation" },
  ],
  benefitsTitle: "A steel garage for the equipment you would rather keep.",
  benefits: [
    { title: "Put a lock around it", text: "Steel cargo doors and a lockbox help protect vehicles, trailers and high-value gear after use." },
    { title: "Take back the garage", text: "Move seasonal machines and bulky recreation equipment out of everyday household space." },
    { title: "Keep gear together", text: "Store helmets, covers, parts, tools and accessories beside the vehicle they belong to." },
  ],
  applications: ["Classic cars", "Motorcycles", "ATVs and dirt bikes", "Kayaks and paddleboards", "Bicycles", "Camping and snow gear"],
  testimonials: [
    { quote: "The classic car and parts finally have one secure place.", person: "Rick A., Collector" },
    { quote: "Motorcycles, helmets and stands are together and locked up.", person: "Jordan C., Rider" },
    { quote: "We got the garage back without selling the toys.", person: "Ben L., Homeowner" },
  ],
  faq: [
    { q: "Will my car fit through the cargo doors?", a: "Many cars fit inside a standard container, but width, height, mirrors and safe driver exit must be checked first. Send us the vehicle dimensions before choosing a unit." },
    { q: "What should I plan for vehicle storage?", a: "Use a suitable loading ramp, tire stops and tie-down points. Plan for ventilation and moisture control, and follow local fire rules for fuel, batteries and motorized equipment." },
    { q: "Is 20FT or 40FT better?", a: "A 20FT unit can suit one compact vehicle or several motorcycles. A 40FT unit gives more working room for a car, accessories and recreational equipment." },
  ],
};

const events: Vertical = {
  key: "events", nav: "Events & Production", eyebrow: "Storage ready for the next load-in", title: "Store the show.", emphasis: "Be ready to roll.",
  lead: "Keep road cases, staging, tents, barriers and production equipment organized beside the venue, studio or temporary project site.", hero: "/events-hero.png", featureImage: "/events-feature.png", context: "Event media and temporary project storage",
  inventoryImages: ["/inventory-v2/events-1.jpg", "/inventory-v2/events-2.jpg", "/inventory-v2/events-3.jpg", "/inventory-v2/events-4.jpg"],
  gallery: [
    { image: "/events-hero.png", alt: "Road cases lighting stands and barriers stored in a twenty foot container behind a concert venue", caption: "Keep production gear behind the venue" },
    { image: "/events-gallery-1.png", alt: "Camera cases lighting stands and production equipment inside a container on a film studio backlot", caption: "Stage media equipment near the next call" },
    { image: "/events-gallery-2.png", alt: "Tents chairs barriers and portable flooring organized in a container at a community festival", caption: "Turn event inventory into a repeatable system" },
  ],
  benefitsTitle: "Load in faster. Lock down cleaner. Reset for the next date.",
  benefits: [
    { title: "Keep the kit together", text: "Organize cases, cable, staging and temporary infrastructure by production instead of by warehouse shelf." },
    { title: "Secure the dark hours", text: "Lock valuable equipment beside the venue or project site when the crew is off the clock." },
    { title: "Scale around the calendar", text: "Add owned capacity for festival season, touring inventory, film work or recurring public events." },
  ],
  applications: ["Road cases", "Audio and lighting", "Tents and staging", "Barriers and flooring", "Props and backdrops", "Temporary project supplies"],
  testimonials: [
    { quote: "Cases and cable stay sorted between load-ins.", person: "Alex N., Production Manager" },
    { quote: "The festival kit is ready in one place every season.", person: "Morgan J., Event Director" },
    { quote: "We stopped rebuilding the same temporary storage every shoot.", person: "Sam R., Location Producer" },
  ],
  faq: [
    { q: "Can it be placed behind a venue or studio?", a: "Often, yes, when the service area has a firm level surface, clear fire access and enough room for the delivery truck. The venue or site manager should approve placement first." },
    { q: "Can you add shelving, lighting or power?", a: "Yes. Ask about shelving, electrical packages, lighting, vents, personnel doors and other modifications for production inventory." },
    { q: "Do you rent for one event?", a: "We focus on direct sales. Buying is designed for organizations with recurring events, seasonal programs or ongoing temporary projects that need dependable capacity." },
  ],
};

const institutions: Vertical = {
  key: "institutions", nav: "Schools & Institutions", eyebrow: "Flexible capacity for public operations", title: "Space on site.", emphasis: "Programs stay moving.",
  lead: "Add secure storage for furniture, athletics, events, facilities and emergency supplies at schools, universities, municipalities and public organizations.", hero: "/institutions-hero.png", featureImage: "/institutions-feature.png", context: "Institutional and public sector storage",
  inventoryImages: ["/inventory-v2/institutions-1.jpg", "/inventory-v2/institutions-2.jpg", "/inventory-v2/institutions-3.jpg", "/inventory-v2/institutions-4.jpg"],
  gallery: [
    { image: "/institutions-hero.png", alt: "Athletic equipment tables and event supplies inside a forty foot container beside a school facilities building", caption: "Place capacity beside campus operations" },
    { image: "/institutions-gallery-1.png", alt: "Dorm furniture and move bins stored in a forty foot container at a university residence hall", caption: "Handle turnover without crowding buildings" },
    { image: "/institutions-gallery-2.png", alt: "Emergency supplies barriers pumps and maintenance equipment stored beside a municipal operations building", caption: "Keep public works equipment ready" },
  ],
  benefitsTitle: "Useful capacity without another permanent building.",
  benefits: [
    { title: "Support changing programs", text: "Create room for summer turnover, athletics, events, renovations and seasonal facilities work." },
    { title: "Keep assets accountable", text: "Centralize furniture, supplies and equipment in a lockable location managed by the responsible department." },
    { title: "Plan around real budgets", text: "Buy a durable asset with a clear delivered price instead of adding another recurring storage bill." },
  ],
  applications: ["Campus furniture", "Athletic equipment", "Event supplies", "Facilities equipment", "Records and surplus", "Emergency supplies"],
  testimonials: [
    { quote: "Summer turnover equipment is organized beside the residence hall.", person: "Pat G., Campus Facilities" },
    { quote: "Tables, barriers and event supplies finally have one owner and one location.", person: "Mia K., School Operations" },
    { quote: "The written quote made the scope and delivery cost easy to review.", person: "James E., Public Works Buyer" },
  ],
  faq: [
    { q: "Can you provide a written quote for procurement?", a: "Yes. We can prepare a written quote that identifies container size, condition, available inventory and delivery. Tell us about any vendor registration or purchase-order requirements at the start." },
    { q: "Where should a campus container be placed?", a: "Use a firm level service area with controlled access that preserves fire lanes, pedestrian routes and emergency access. Facilities and local authorities should approve the location." },
    { q: "Can the interior be configured by department?", a: "Yes. Shelving, lighting, vents, electrical packages and access options can support facilities, athletics, events, records or emergency inventory." },
  ],
};

export const verticals: Record<string, Vertical> = {
  construction,
  farm,
  agriculture: farm,
  business,
  commercial: business,
  moving,
  relocation: moving,
  renovation,
  restoration: renovation,
  vehicles,
  recreation: vehicles,
  events,
  production: events,
  institutions,
  schools: institutions,
};
