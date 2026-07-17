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
  benefitsLead?: string;
  benefits: { title: string; text: string }[];
  applications: string[];
  visualTags?: { icon: string; label: string }[];
  testimonials: { quote: string; person: string }[];
  faq: { q: string; a: string }[];
  seoTitle?: string;
  seoDescription?: string;
  specialtyType?: "reefer" | "rollup" | "tunnel" | "export" | "insulated" | "office" | "hazmat";
  navGroup?: "use" | "specialty";
  useCaseMosaic?: {
    eyebrow: string;
    title: string;
    lead: string;
    image: string;
    columns: 3 | 4;
    items: string[];
    note?: string;
  };
  heroChecks?: string[];
  quoteOptions?: string[];
  quoteCopy?: { eyebrow: string; heading: string; intro: string; buttonText: string; note: string };
  inventoryOptions?: { name: string; price: string; detail: string; badge?: string }[];
  inventoryHeading?: string;
  inventoryLead?: string;
  inventoryStockLabel?: string;
  galleryTitle?: string;
  galleryLead?: string;
  featureEyebrow?: string;
  featureTitle?: string;
  featureLead?: string;
  technicalNotes?: { title: string; text: string }[];
  ownershipEyebrow?: string;
  ownershipTitle?: string;
  ownershipLead?: string;
  ownershipReasons?: { title: string; text: string }[];
  finalEyebrow?: string;
  finalTitle?: string;
  finalCta?: string;
  proofItem?: { value: string; label: string };
  processTitle?: string;
  processLead?: string;
  processSteps?: { title: string; text: string }[];
  scrollQuote?: { eyebrow: string; strong: string; text: string; button: string };
};

const construction: Vertical = {
  key: "construction", nav: "Construction", eyebrow: "Job site storage that works", title: "Protect your tools.", emphasis: "Keep your crew moving.",
  lead: "Secure, weatherproof containers delivered directly to your job site in 5 to 10 days. From $1,950 delivered.", hero: "/hero-construction.jpg", featureImage: "/storage-tools.jpg", context: "Construction site storage",
  inventoryImages: ["/container-20ft.jpg", "/inventory-v3/construction-40.jpg", "/container-40ft-hc.jpg", "/container-custom.jpg"],
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
  inventoryImages: ["/inventory-v4/farm-20-v2.png", "/inventory-v3/farm-40.jpg", "/inventory-v2/farm-3.jpg", "/inventory-v3/farm-custom.jpg"],
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
  key: "business", nav: "Business Overflow", eyebrow: "Overflow storage on your own lot", title: "Own your storage.", emphasis: "Stop renting units.",
  lead: "Secure inventory, equipment and seasonal stock beside your premises. Delivered in 5 to 10 days. From $1,950 delivered.", hero: "/business-overflow.png", featureImage: "/business-warehouse-overflow-v2.png", context: "Business overflow storage",
  inventoryImages: ["/inventory-v4/business-20-v3.png", "/inventory-v2/business-2.jpg", "/inventory-v2/business-3.jpg", "/inventory-v2/business-4.jpg"],
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
  useCaseMosaic: {
    eyebrow: "Eight businesses. One familiar problem.",
    title: "See your overflow before it takes over the operation.",
    lead: "A container belongs beside the premises, close to the people who use the inventory, equipment or records every day.",
    image: "/specialty/business-overflow-mosaic-v1.webp",
    columns: 4,
    items: ["Retail stores", "Restaurants", "Manufacturers", "Warehouses", "Distributors", "Service businesses", "Offices", "Auto dealerships"],
  },
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
  key: "moving", nav: "Moving & Relocation", eyebrow: "For sale. Own it for the entire move.", title: "Buy it once.", emphasis: "Pack without a deadline.",
  lead: "This is a container purchase, not a rental or lease. Keep it beside your current home while you pack, arrange qualified transport when you are ready, then leave it beside the new property or continue storing for as long as you need.", hero: "/moving-hero.png", featureImage: "/moving-feature.png", context: "Residential moving and relocation container purchase",
  seoTitle: "Moving Containers for Sale | Buy, Pack and Keep",
  seoDescription: "Buy a shipping container for moving and relocation. Pack beside your home without a rental deadline, move it with a qualified carrier, and keep it for storage afterward.",
  heroChecks: ["For sale only, not rented or leased", "No monthly container-rental clock", "Keep it at the new property after the move"],
  quoteOptions: ["Buy a 20FT moving container", "Buy a 40FT moving container", "Buy a 40FT High Cube", "Buy a custom moving setup", "Not sure yet"],
  quoteCopy: {
    eyebrow: "Purchase price, delivered",
    heading: "Get your purchase quote",
    intro: "This container is for sale, not rental or lease. Tell us your ZIP and preferred size.",
    buttonText: "Get my purchase price",
    note: "You own the container after purchase. No monthly container rent.",
  },
  inventoryHeading: "Choose the container you want to own.",
  inventoryLead: "Every option below is sold, not rented. We confirm size, condition, nearby inventory and one delivered purchase price for your ZIP.",
  inventoryImages: ["/inventory-v2/home-1.jpg", "/inventory-v2/home-2.jpg", "/inventory-v2/home-3.jpg", "/inventory-v3/home-custom.jpg"],
  gallery: [
    { image: "/moving-hero.png", alt: "Twenty foot shipping container holding household furniture and boxes beside a suburban home", caption: "Pack beside the house on your schedule" },
    { image: "/gallery-v3/moving-people.jpg", alt: "Two homeowners unloading furniture and boxes through both short-end cargo doors of a twenty foot container", caption: "Unload at the new home without the rush" },
    { image: "/moving-gallery-2.png", alt: "Boxes furniture and moving blankets secured inside a standard shipping container", caption: "Keep one organized load between closings" },
  ],
  benefitsTitle: "Buy once. Keep control before, during and after the move.",
  benefits: [
    { title: "Pack without a rental clock", text: "Stage boxes and furniture over weeks or months without racing a return date or adding another month of container rent." },
    { title: "Bridge an uncertain timeline", text: "Keep the same container through delayed closings, a long-distance relocation, temporary housing or a slow unpacking schedule." },
    { title: "Keep useful storage afterward", text: "Leave the container at the new property for garage overflow, seasonal belongings, tools or the next renovation, subject to local placement rules." },
  ],
  ownershipEyebrow: "Purchase-only moving storage",
  ownershipTitle: "When buying makes more sense than renting.",
  ownershipLead: "Buying is designed for people who value time, long-term control and useful storage after the move. Compare the delivered purchase price with the complete rental cost for your actual timeline.",
  ownershipReasons: [
    { title: "Your move may take months", text: "A delayed closing, renovation or long relocation can turn a short rental into repeated monthly charges. Ownership removes the container return deadline." },
    { title: "You want to pack gradually", text: "Keep the container beside the house and load room by room without compressing the move into a weekend or a fixed pickup window." },
    { title: "You need storage at the destination", text: "After transport, keep the container beside the new property while you unpack or use it as ongoing storage, where local rules permit." },
    { title: "You expect another project", text: "Reuse the owned container for another relocation, renovation, property cleanup, tools or household overflow instead of starting another rental agreement." },
  ],
  galleryTitle: "One owned container can cover every stage of the move.",
  galleryLead: "Pack beside the current home, arrange transport with a qualified container carrier, then keep the container at the destination without a rental return date.",
  featureEyebrow: "Keep it after the move",
  featureTitle: "Your storage does not expire when the boxes are unpacked.",
  featureLead: "Use the same owned container through packing, the timing gap, transport and long-term storage at the new property, subject to carrier approval and local placement rules.",
  applications: ["Household furniture", "Moving boxes and books", "Garage tools", "Bicycles and outdoor gear", "Seasonal belongings", "Appliances and fixtures"],
  testimonials: [
    { quote: "We packed room by room instead of doing everything in one weekend.", person: "Laura M., Homeowner" },
    { quote: "The furniture stayed together while our closing date moved.", person: "Kevin D., Home Buyer" },
    { quote: "One container gave us breathing room between both houses.", person: "Erin S., Relocating Family" },
  ],
  faq: [
    { q: "Do you rent or lease moving containers?", a: "No. United Container Depot sells containers for moving and relocation. You purchase the container and own it outright instead of paying ongoing container rent or working toward a rental pickup date." },
    { q: "Why buy instead of renting for a move?", a: "Buying can make sense when the schedule is uncertain, packing will take weeks or months, there is a gap between properties, or you want storage at the destination afterward. Compare the complete delivered purchase price with rental delivery, monthly charges, relocation fees, pickup charges and the likely duration of your move before deciding." },
    { q: "How long can I keep the container?", a: "Because you buy it, there is no rental return date. You may keep using it as long as you own it, but zoning, permits, homeowners-association rules, setbacks and property restrictions still control where it may remain." },
    { q: "Can it be placed in my driveway?", a: "Often, yes. The driveway must be firm, level and accessible to a tilt-bed delivery truck. We review clearance, slope and turning room before scheduling." },
    { q: "Will you move the loaded container to my new home?", a: "We sell and deliver the container. Transporting it after loading requires a qualified container carrier and suitable access at both properties. Ask your specialist about the options available in your area before purchase." },
    { q: "Which size works for a household move?", a: "A 20FT unit is easier to place and suits many smaller homes. A 40FT unit provides more capacity for larger households, furniture and garage contents." },
  ],
  finalEyebrow: "Buy once. Move on your schedule.",
  finalTitle: "Own the container before, during and after the move.",
  finalCta: "Get my purchase quote",
};

const renovation: Vertical = {
  key: "renovation", nav: "Renovation", eyebrow: "Clear the rooms without losing the space", title: "Move it out.", emphasis: "Keep the project moving.",
  lead: "Protect furniture, fixtures and household contents from dust, traffic and accidental damage while renovation or restoration work happens inside your home.", hero: "/renovation-hero.png", featureImage: "/renovation-feature.png", context: "Home renovation and restoration storage",
  inventoryImages: ["/inventory-v2/home-1.jpg", "/inventory-v2/home-2.jpg", "/inventory-v2/home-3.jpg", "/inventory-v3/home-custom.jpg"],
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
  inventoryImages: ["/gallery-v4/vehicle-car-v2.png", "/inventory-v2/vehicles-40ft-recreation.jpg", "/inventory-v2/vehicles-3.jpg", "/inventory-v3/vehicle-custom-v2.png"],
  gallery: [
    { image: "/gallery-v4/vehicle-car-v2.png", alt: "Classic American pony coupe stored through both short-end doors of a twenty foot container beside a workshop", caption: "A 20FT unit can protect one compact classic" },
    { image: "/gallery-v3/vehicle-motorcycles.jpg", alt: "Motorcycles ATV helmets and riding gear stored through both short-end doors of a twenty foot container", caption: "Lock up motorcycles, ATVs and riding gear" },
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
  inventoryImages: ["/inventory-v3/events-20.jpg", "/inventory-v3/events-40.jpg", "/inventory-v2/events-3.jpg", "/inventory-v2/events-4.jpg"],
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
  key: "institutions", nav: "Government, Schools & Institutions", eyebrow: "Flexible capacity for public operations", title: "Space on site.", emphasis: "Programs stay moving.",
  lead: "Add secure storage for furniture, athletics, events, facilities and emergency supplies at schools, universities, municipalities and public organizations.", hero: "/institutions-hero.png", featureImage: "/institutions-feature.png", context: "Institutional and public sector storage",
  inventoryImages: ["/inventory-v3/schools-20.jpg", "/inventory-v2/institutions-2.jpg", "/inventory-v2/institutions-3.jpg", "/inventory-v3/schools-custom.jpg"],
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

const refrigerated: Vertical = {
  key: "refrigerated-containers",
  nav: "Refrigerated / Reefer",
  eyebrow: "Every reefer is tested before release",
  title: "Ten days of testing.",
  emphasis: "Report before delivery.",
  lead: "Every refrigerated-container purchase includes a 10-day depot electrical testing period before release. This standard testing extends delivery beyond normal dry-container timelines, and you receive a detailed electrical report to support the warranty.",
  hero: "/specialty/reefer-hero.webp",
  featureImage: "/specialty/reefer-interior.webp",
  inventoryImages: ["/specialty/reefer-restaurant.webp", "/specialty/reefer-farm.webp", "/specialty/reefer-hero.webp", "/specialty/reefer-interior.webp"],
  context: "Refrigerated and reefer container",
  seoTitle: "Refrigerated Containers and Reefers for Sale",
  seoDescription: "Buy a refrigerated shipping container, also called a reefer, with a standard 10-day depot electrical testing period and detailed warranty-supporting electrical report before delivery.",
  specialtyType: "reefer",
  navGroup: "specialty",
  heroChecks: ["10-day depot electrical testing with every purchase", "Detailed electrical report provided for warranty support", "Delivery scheduled only after testing is complete"],
  quoteOptions: ["20FT Refrigerated / Reefer", "40FT Refrigerated / Reefer", "40FT High Cube Reefer", "Need help matching power and setpoint", "Not sure yet"],
  quoteCopy: {
    eyebrow: "Tested reefer purchase",
    heading: "Get your tested-reefer quote",
    intro: "Every purchase includes 10 days of depot electrical testing and a detailed report before delivery.",
    buttonText: "Get my reefer purchase price",
    note: "Testing is standard and cannot be skipped. Delivery follows the completed test period.",
  },
  proofItem: { value: "10 days", label: "depot electrical testing" },
  inventoryOptions: [
    { name: "20FT Reefer", price: "Request local price", detail: "Compact powered cold storage for restaurants, caterers, florists and sites where space is limited.", badge: "20FT cold storage" },
    { name: "40FT Reefer", price: "Request local price", detail: "Higher-volume refrigerated capacity for farms, food distributors, beverage operations and warehouse overflow.", badge: "40FT capacity" },
    { name: "40FT High Cube Reefer", price: "Request local price", detail: "Additional interior height for palletized or bulky temperature-controlled inventory, subject to local availability.", badge: "High cube" },
    { name: "Power-Matched Package", price: "Built to site", detail: "Confirm voltage, phase, amperage, plug, setpoint and placement before the reefer is scheduled for delivery.", badge: "Power verified" },
  ],
  inventoryHeading: "Choose the reefer. Then allow ten days for testing.",
  inventoryLead: "Every available reefer completes the same 10-day depot electrical testing period before delivery. Tell us the product, required temperature, ZIP and site power so we can match the unit and document the electrical test.",
  inventoryStockLabel: "10-day test before delivery",
  benefitsTitle: "Testing comes before delivery.",
  benefits: [
    { title: "Ten days at the depot", text: "Every reefer remains at the depot for a full 10-day electrical testing period before it is released for delivery." },
    { title: "Electrical report included", text: "You receive the detailed depot electrical report as documentation supporting the warranty for the purchased unit." },
    { title: "Delivery follows testing", text: "The delivery schedule begins after the test period is complete, the report is ready and the reefer has been cleared for release." },
  ],
  scrollQuote: {
    eyebrow: "Plan for the 10-day depot test",
    strong: "Testing is standard with every reefer purchase.",
    text: "Delivery is scheduled only after the electrical test and detailed report are complete.",
    button: "Get my tested-reefer quote",
  },
  galleryTitle: "See reefers supporting real operations.",
  galleryLead: "After the standard 10-day depot electrical test and report, refrigerated containers support food, farm, event and warehouse operations when site power and airflow are planned correctly.",
  gallery: [
    { image: "/specialty/reefer-restaurant.webp", alt: "Twenty foot refrigerated reefer container powered beside a restaurant service area", caption: "Restaurant and catering cold-storage overflow" },
    { image: "/specialty/reefer-farm.webp", alt: "Forty foot refrigerated reefer container powered beside a produce packing shed", caption: "Produce cooling beside the packing operation" },
    { image: "/specialty/reefer-hero.webp", alt: "Forty foot refrigerated reefer container with machinery at the short end beside a warehouse", caption: "Warehouse and food-distribution cold capacity" },
  ],
  featureEyebrow: "Load for airflow",
  featureTitle: "Cold air only works when it can move.",
  featureLead: "Keep the T-floor channels and overhead return-air path open, respect the unit's load line and load product at the correct starting temperature.",
  applications: ["Produce and dairy", "Seafood and proteins", "Beverages", "Catering and event food", "Flowers and floral stock", "Cold-chain overflow"],
  useCaseMosaic: {
    eyebrow: "What operations keep cold",
    title: "Nine common reefer loads. Nine different control plans.",
    lead: "Reefers support many cold-storage workflows, but the product owner must define the required setpoint, monitoring, packaging, sanitation and handling procedure for the exact load.",
    image: "/specialty/reefer-use-mosaic-v1.webp",
    columns: 3,
    items: ["Fresh produce", "Dairy products", "Meat and poultry", "Seafood", "Frozen prepared food", "Beverages and kegs", "Flowers and floral stock", "Prepared catering food", "Life-science products"],
    note: "Food, floral and life-science products do not share one universal setting. Vaccines, biologics and regulated products require validated equipment, continuous monitoring and the applicable manufacturer and regulatory procedures.",
  },
  technicalNotes: [
    { title: "Complete the 10-day depot test", text: "Testing is standard with every reefer purchase and takes place before the unit is released for delivery." },
    { title: "Keep the electrical report", text: "The detailed depot electrical report is provided with the purchase as documentation supporting the unit's warranty." },
    { title: "Confirm site power", text: "Reefer electrical requirements vary. Verify the exact unit's voltage, phase, amperage, plug and disconnect with a qualified electrician." },
    { title: "Protect airflow", text: "Do not block the T-floor or load above the marked load line. Cold supply air and warm return air both need a clear path." },
  ],
  processTitle: "From purchase quote to tested reefer.",
  processLead: "The 10-day depot test is required with every reefer purchase, and delivery follows the completed test and report.",
  processSteps: [
    { title: "Confirm the reefer requirement", text: "Send the ZIP, product, target setpoint and available site power so we can match the right unit." },
    { title: "Approve the purchase quote", text: "Review the reefer, delivered price and expected schedule before testing begins." },
    { title: "Allow ten days for depot testing", text: "The reefer completes the standard 10-day electrical testing period at the depot before release." },
    { title: "Receive the report, then schedule delivery", text: "We provide the detailed electrical report for warranty support and arrange delivery after the unit clears testing." },
  ],
  testimonials: [],
  faq: [
    { q: "What is the 10-day reefer testing period?", a: "Every refrigerated-container purchase includes a 10-day electrical testing period at the depot before release. This is standard with all reefer purchases and is not an optional service." },
    { q: "Does a reefer deliver in the standard 5 to 10 days?", a: "No. The standard dry-container delivery window does not apply to reefers. Allow the full 10-day depot electrical testing period first, followed by delivery scheduling and transit. Your specialist will confirm the expected schedule for the selected unit and ZIP." },
    { q: "What electrical report will I receive?", a: "You receive the detailed report from the depot electrical testing completed on the purchased reefer. Keep it with the unit records because it is provided as documentation supporting the warranty." },
    { q: "Can the testing period be skipped to receive the reefer faster?", a: "No. Depot electrical testing is standard with every reefer purchase and must be completed before the unit is cleared for delivery." },
    { q: "What power does a refrigerated container need?", a: "It depends on the specific refrigeration unit. Many marine reefers use high-voltage three-phase power, while some installations use compatible transformers or converter packages. A qualified electrician should confirm voltage, phase, amperage, plug, disconnect and cable routing for the exact unit before delivery." },
    { q: "Can the same reefer work as a cooler or freezer?", a: "Some units can operate across chilled and frozen setpoints, but range and performance vary by model, refrigerant, condition and ambient temperature. Tell us the product and required setpoint so the available unit can be checked before purchase." },
    { q: "How should product be loaded?", a: "Load product at the correct starting temperature, keep the T-floor airflow channels open, leave the overhead return-air path clear and never stack above the unit's load line. Your food-safety or cold-chain plan remains the governing procedure." },
    { q: "Can a reefer sit beside a restaurant, farm or warehouse?", a: "Often, yes, when the site has approved placement, firm level support, delivery access, ventilation around the machinery end and a safe electrical connection. Confirm zoning, fire access, food-safety and electrical requirements before delivery." },
  ],
  finalEyebrow: "Testing protects the purchase.",
  finalTitle: "Get a tested reefer with the electrical report to support its warranty.",
  finalCta: "Get my tested-reefer quote",
};

const openSide: Vertical = {
  key: "open-side-containers",
  nav: "Open Side / Roll-Up",
  eyebrow: "Two access bays on 20FT. Four on 40FT.",
  title: "Open the right bay.",
  emphasis: "Reach what you need.",
  lead: "Multi-door open-side containers add two roll-up doors along the long side of a 20FT unit or four along a 40FT unit. Crews can reach the right section without unloading a long center aisle, while framed steel posts reinforce every opening.",
  hero: "/specialty/open-side-hero.webp",
  featureImage: "/specialty/open-side-interior.webp",
  inventoryImages: ["/specialty/open-side-landscape.webp", "/specialty/open-side-hero.webp", "/specialty/open-side-school.webp", "/specialty/open-side-interior.webp"],
  context: "Open-side roll-up door container",
  seoTitle: "Open-Side Containers with Roll-Up Doors for Sale",
  seoDescription: "Buy modified open-side shipping containers with two roll-up doors on a 20FT unit or four roll-up doors on a 40FT unit for fast compartment access.",
  specialtyType: "rollup",
  navGroup: "specialty",
  heroChecks: ["Two long-side roll-up doors on 20FT units", "Four long-side roll-up doors on 40FT units", "Framed and reinforced openings built to plan"],
  quoteOptions: ["20FT with 2 roll-up doors", "40FT with 4 roll-up doors", "Partitioned multi-bay container", "Custom roll-up door layout", "Not sure yet"],
  inventoryOptions: [
    { name: "20FT / 2 Roll-Ups", price: "Built to spec", detail: "Two long-side access bays for landscaping gear, shop inventory, athletics or compact multi-user storage.", badge: "2 access bays" },
    { name: "40FT / 4 Roll-Ups", price: "Built to spec", detail: "Four long-side access bays create fast reach across a full 40FT container without a long unload sequence.", badge: "4 access bays" },
    { name: "Partitioned Multi-Bay", price: "Built to spec", detail: "Add internal partitions so departments, crews, tenants or inventory categories can use separate lockable bays.", badge: "Separate zones" },
    { name: "Custom Door Layout", price: "Built to spec", detail: "Door width, clear opening, reinforcement, locks, shelving and electrical packages are finalized in the fabrication drawing.", badge: "Drawing approved" },
  ],
  inventoryHeading: "Choose the length. Confirm every access bay.",
  inventoryLead: "The long-side openings are a structural modification. We confirm door count, clear opening, reinforcement, partitions, locks and internal layout before fabrication.",
  inventoryStockLabel: "Fabricated to order",
  benefitsTitle: "Stop walking past everything to reach one item.",
  benefits: [
    { title: "Reach the right section", text: "Open one bay beside the item instead of unloading inventory from a single short-end doorway." },
    { title: "Organize by crew or category", text: "Use shelving and optional partitions to create dedicated zones for tools, supplies, sports gear or rental equipment." },
    { title: "Keep normal end access", text: "Standard paired cargo doors remain on the short end while roll-up doors add access along the long side." },
  ],
  galleryTitle: "Put access beside the work.",
  galleryLead: "Multi-door side access is most valuable where people retrieve different categories throughout the day and need to see the right bay quickly.",
  gallery: [
    { image: "/specialty/open-side-landscape.webp", alt: "Twenty foot green container with exactly two roll-up doors beside landscaping equipment", caption: "Two bays for grounds and landscaping equipment" },
    { image: "/specialty/open-side-school.webp", alt: "Forty foot container with exactly four blue roll-up doors beside a school athletics building", caption: "Four bays for athletics and facilities inventory" },
    { image: "/specialty/open-side-hero.webp", alt: "Forty foot navy container with exactly four long-side roll-up doors at an equipment yard", caption: "Fast access across an equipment-rental inventory" },
  ],
  featureEyebrow: "Four clear zones",
  featureTitle: "Turn one 40FT container into four reachable bays.",
  featureLead: "Align racks, partitions and labels with the door openings so each bay supports a specific crew, inventory category or retrieval sequence.",
  applications: ["Tool and equipment cribs", "Equipment rental inventory", "Grounds and landscaping gear", "School and sports equipment", "Event production cases", "Multi-user storage bays"],
  technicalNotes: [
    { title: "Confirm the exact door count", text: "The target layouts are two long-side roll-up doors on 20FT units and four on 40FT units. Final clear openings are shown on the approved drawing." },
    { title: "Engineer every opening", text: "Cutting a corrugated long wall changes the structure. Framed posts and headers must be designed and fabricated for the final layout." },
    { title: "Plan drainage and security", text: "Specify weather seals, thresholds, locks, site slope and door operation so each opening remains practical in daily use." },
  ],
  testimonials: [],
  faq: [
    { q: "How many roll-up doors are included?", a: "The featured configuration uses two roll-up doors along the long side of a 20FT container and four along the long side of a 40FT container. Door width and clear opening are confirmed on the fabrication drawing." },
    { q: "Are these factory open-side containers?", a: "These are modified multi-door side-access containers with roll-up doors, not factory full-side bi-fold open-side containers. The standard short-end cargo doors remain, and every new long-side opening is framed and reinforced." },
    { q: "Can the bays be separated?", a: "Yes. Internal partitions, separate locks, shelving, lighting and electrical packages can create dedicated crew, department or inventory zones. Egress and electrical requirements must be reviewed for the intended use." },
    { q: "Are roll-up doors weatherproof and secure?", a: "Commercial roll-up assemblies can be fitted with seals and locks, but performance depends on the selected door, threshold, installation and maintenance. Confirm the required weather resistance and security level before fabrication." },
  ],
};

const doubleDoor: Vertical = {
  key: "double-door-containers",
  nav: "Double Door / Tunnel",
  eyebrow: "Full cargo-door access at both short ends",
  title: "Load from either end.",
  emphasis: "Nothing gets buried.",
  lead: "Double-door shipping containers, also called tunnel containers, have paired ISO cargo doors at both short ends. The straight through-route makes first-in-first-out inventory, long materials, two-way staging and faster retrieval easier to manage.",
  hero: "/specialty/tunnel-hero.webp",
  featureImage: "/specialty/tunnel-interior.webp",
  inventoryImages: ["/specialty/tunnel-construction.webp", "/specialty/tunnel-warehouse.webp", "/specialty/tunnel-hero.webp", "/specialty/tunnel-interior.webp"],
  context: "Double-door tunnel container",
  seoTitle: "Double-Door and Tunnel Containers for Sale",
  seoDescription: "Buy double-door shipping containers, also called tunnel containers, with paired cargo doors at both short ends for two-way loading and access.",
  specialtyType: "tunnel",
  navGroup: "specialty",
  heroChecks: ["Paired cargo doors at both short ends", "Solid corrugated walls along both long sides", "20FT, 40FT and High Cube options"],
  quoteOptions: ["20FT Double-Door / Tunnel", "40FT Double-Door / Tunnel", "40FT High Cube Tunnel", "Divided-access tunnel container", "Not sure yet"],
  inventoryOptions: [
    { name: "20FT Tunnel", price: "Request local price", detail: "Compact two-end access for tight sites, long materials, equipment staging and smaller first-in-first-out inventory.", badge: "Doors both ends" },
    { name: "40FT Tunnel", price: "Request local price", detail: "A full 40FT through-route for palletized stock, construction materials and operations that load from either direction.", badge: "40FT through-route" },
    { name: "40FT High Cube Tunnel", price: "Request local price", detail: "Two-end access plus additional height for bulky or stacked inventory, subject to nearby availability.", badge: "High cube" },
    { name: "Divided-Access Tunnel", price: "Built to spec", detail: "Optional internal separation can create two independently accessed zones while keeping cargo doors at both short ends.", badge: "Two zones" },
  ],
  inventoryHeading: "Choose the length. Keep both ends working.",
  inventoryLead: "We confirm size, condition, end-door operation, lock boxes, interior layout and the truck approach needed to keep both short ends useful after delivery.",
  inventoryStockLabel: "Confirm local inventory",
  benefitsTitle: "Two ends turn one container into a better workflow.",
  benefits: [
    { title: "Load from either direction", text: "Approach the nearest end instead of reversing the entire load through one doorway." },
    { title: "Support first-in-first-out flow", text: "Receive at one end and retrieve at the other so older inventory is easier to rotate and reach." },
    { title: "Handle long materials", text: "Open both ends for straight-through staging of pipe, lumber, conduit, equipment and long packaged goods." },
  ],
  galleryTitle: "See two-way access in real workflows.",
  galleryLead: "Tunnel containers are most useful when both short ends stay accessible and the internal aisle, staging zones and inventory sequence are planned together.",
  gallery: [
    { image: "/specialty/tunnel-construction.webp", alt: "Twenty foot double-door tunnel container with paired cargo doors open at both short ends in a construction material yard", caption: "Straight-through access for pipe and long materials" },
    { image: "/specialty/tunnel-warehouse.webp", alt: "Forty foot green tunnel container with paired cargo doors at both short ends beside a distribution warehouse", caption: "First-in-first-out inventory beside the warehouse" },
    { image: "/specialty/tunnel-hero.webp", alt: "Forty foot blue double-door tunnel container with daylight visible through both short-end cargo door sets", caption: "Load and retrieve from the closest end" },
  ],
  featureEyebrow: "A clear through-route",
  featureTitle: "Keep the center aisle open and both ends useful.",
  featureLead: "Stage shelves and pallets along the solid long walls, preserve a safe center route and leave room outside for both pairs of cargo doors to swing fully.",
  applications: ["Construction materials", "Warehouse FIFO inventory", "Pipe and lumber", "Equipment rental staging", "Retail and event stock", "Two-zone storage"],
  technicalNotes: [
    { title: "Doors stay on the short ends", text: "A tunnel container has one pair of standard cargo doors at each 8FT short end. The two long corrugated walls remain solid." },
    { title: "Protect both approaches", text: "Leave firm ground, vehicle access, door-swing clearance and safe working space at both ends if both entrances will be used." },
    { title: "Plan locks and internal flow", text: "Confirm door condition, lock boxes, shelving, partitions and the clear aisle before assigning receiving and retrieval directions." },
  ],
  testimonials: [],
  faq: [
    { q: "What is a double-door or tunnel container?", a: "It is a shipping container with one pair of standard cargo doors at each short end. Both long corrugated sides remain solid. Opening both end sets creates a straight sightline and loading route through the container." },
    { q: "How is it different from a standard container?", a: "A standard container normally has cargo doors at one short end. A tunnel container adds a second pair at the opposite short end, which supports two-way loading, first-in-first-out rotation and access to long materials." },
    { q: "Can I divide it into two storage zones?", a: "Yes, an internal partition can create two independently accessed zones, one from each end. The final layout should preserve safe access and account for ventilation, lighting, electrical work and the items being stored." },
    { q: "What site clearance is needed?", a: "Plan delivery access plus firm, level placement and enough working room for the paired cargo doors to swing at both short ends. If only one end will remain accessible, tell the specialist before placement." },
  ],
};

const insulated: Vertical = {
  key: "insulated-containers",
  nav: "Insulated Containers",
  eyebrow: "Lined dry storage for changing conditions",
  title: "Slow the temperature swing.",
  emphasis: "Protect sensitive dry goods.",
  lead: "An insulated container reduces heat transfer through the steel shell and can help manage condensation risk. It is not a reefer and does not create or guarantee a fixed temperature.",
  hero: "/specialty/insulated-container-hero-v1.webp",
  featureImage: "/specialty/insulated-container-hero-v1.webp",
  inventoryImages: ["/specialty/insulated-container-hero-v1.webp", "/inventory-v3/generic-40.jpg", "/inventory-v2/generic-3.jpg", "/specialty/insulated-container-hero-v1.webp"],
  context: "Insulated dry-storage container",
  seoTitle: "Insulated Shipping Containers for Sale",
  seoDescription: "Buy an insulated shipping container for sensitive dry storage with liner, vapor-control, ventilation and monitoring options matched to the contents and site.",
  specialtyType: "insulated",
  navGroup: "specialty",
  heroChecks: ["Insulated wall and ceiling package", "Ventilation and vapor-control plan", "Not sold as active refrigeration"],
  quoteOptions: ["20FT Insulated Container", "40FT Insulated Container", "40FT High Cube Insulated", "Insulated with humidity monitoring", "Not sure yet"],
  proofItem: { value: "Dry", label: "storage plan confirmed" },
  inventoryOptions: [
    { name: "20FT Insulated", price: "Request local price", detail: "Compact lined dry storage for records, instruments, electronics, furniture and packaged goods where placement is limited.", badge: "Compact insulated" },
    { name: "40FT Insulated", price: "Request local price", detail: "More protected dry capacity for manufacturing supplies, commercial records, packaged inventory and project materials.", badge: "40FT capacity" },
    { name: "40FT High Cube Insulated", price: "Request local price", detail: "Additional interior height for stacked or bulky dry goods, subject to the liner thickness and local availability.", badge: "Extra height" },
    { name: "Monitored Insulated Setup", price: "Built to spec", detail: "Add ventilation, humidity monitoring, lighting and shelving around the contents and local climate.", badge: "Configured to use" },
  ],
  inventoryHeading: "Choose the size. Then design the envelope around the contents.",
  inventoryLead: "We confirm insulation, interior liner, floor, ventilation, vapor-control, monitoring and access requirements before the configuration is approved.",
  inventoryStockLabel: "Configuration confirmed",
  benefitsTitle: "More protection than bare steel, without pretending it is a reefer.",
  benefits: [
    { title: "Reduce heat transfer", text: "Insulation slows heat moving through the roof and walls, which can moderate rapid interior temperature swings." },
    { title: "Plan for moisture", text: "A coordinated liner, vapor-control and ventilation approach helps reduce condensation risk for sensitive dry contents." },
    { title: "Protect the interior", text: "A durable liner and organized shelving keep cartons, records and equipment away from bare corrugated steel." },
  ],
  galleryTitle: "Use insulation where dry goods need another layer of protection.",
  galleryLead: "The correct assembly depends on climate, storage duration, contents, access frequency and whether active conditioning is also required.",
  gallery: [
    { image: "/specialty/insulated-container-hero-v1.webp", alt: "Twenty foot blue insulated shipping container with lined interior and sensitive dry goods beside a light industrial building", caption: "Protect records, instruments and packaged dry goods" },
    { image: "/inventory-v3/generic-40.jpg", alt: "Forty foot shipping container on a firm commercial service pad", caption: "Add lined capacity for larger commercial loads" },
    { image: "/inventory-v2/generic-3.jpg", alt: "Standard and high cube shipping containers in a depot comparison", caption: "Confirm height after the interior liner is specified" },
  ],
  featureEyebrow: "Insulation is not refrigeration",
  featureTitle: "Slow heat flow. Do not promise a setpoint.",
  featureLead: "Use monitoring data to verify the actual interior conditions. Contents that require a fixed temperature, active cooling or regulated cold-chain controls need a different solution.",
  applications: ["Records and archives", "Electronics and instruments", "Furniture and fixtures", "Packaged dry inventory", "Manufacturing supplies", "Project materials"],
  technicalNotes: [
    { title: "Define the contents first", text: "Share the material, acceptable temperature and humidity range, storage duration and access frequency before choosing the assembly." },
    { title: "Coordinate the full envelope", text: "Insulation, vapor retarder, liner, floor transitions, penetrations and ventilation must work together. Gaps can reduce performance and increase condensation risk." },
    { title: "Monitor real conditions", text: "Use suitable temperature and humidity monitoring when the contents are sensitive. Insulation alone does not control or certify the interior environment." },
  ],
  testimonials: [],
  faq: [
    { q: "Is an insulated container the same as a reefer?", a: "No. Insulation slows heat transfer, but it does not actively cool the space or guarantee a temperature. A reefer uses refrigeration machinery, site power, airflow and monitoring to maintain an approved operating range." },
    { q: "Will insulation stop condensation?", a: "It can reduce surface-temperature differences, but it cannot guarantee a condensation-free interior. Climate, wet cargo, air leakage, ventilation, vapor control and door opening all matter. The final assembly must be matched to the contents and site." },
    { q: "What should not be stored without further review?", a: "Do not assume an insulated container is suitable for food, medicines, vaccines, chemicals or any item requiring a validated temperature or humidity range. Those uses require the applicable product, regulatory and monitoring plan." },
    { q: "Can lighting and shelving be added?", a: "Yes. Shelving, lighting, electrical service, monitoring and access options can be coordinated with the insulation package. Penetrations should be sealed as part of the approved assembly." },
  ],
  finalEyebrow: "Match the envelope to the contents.",
  finalTitle: "Get an insulated container configured for the dry goods you need to protect.",
  finalCta: "Get my insulated-container quote",
};

const officeContainers: Vertical = {
  key: "office-containers",
  nav: "Office Containers",
  eyebrow: "Purpose-built workspace where the work happens",
  title: "Put the office on site.",
  emphasis: "Keep decisions close.",
  lead: "Buy a modified container office with personnel access, windows, power, lighting and HVAC planned around the people, site and local approval requirements.",
  hero: "/specialty/office-container-hero-v1.webp",
  featureImage: "/specialty/office-container-hero-v1.webp",
  inventoryImages: ["/specialty/office-container-hero-v1.webp", "/specialty/office-container-hero-v1.webp", "/inventory-v3/schools-custom.jpg", "/container-custom.jpg"],
  context: "Modified office container",
  seoTitle: "Office Containers and Modified Site Offices for Sale",
  seoDescription: "Buy an office container configured with personnel door, windows, electrical service, lighting and HVAC for jobsites, facilities and field operations.",
  specialtyType: "office",
  navGroup: "specialty",
  heroChecks: ["Personnel door and framed windows", "Electrical, lighting and HVAC options", "Site, occupancy and egress reviewed"],
  quoteOptions: ["20FT Office Container", "40FT Office Container", "Office plus storage combo", "Security or gate office", "Not sure yet"],
  proofItem: { value: "Site", label: "occupancy requirements reviewed" },
  inventoryOptions: [
    { name: "20FT Office", price: "Built to spec", detail: "Compact field office for one or a small team with personnel access, windows, power, lighting and HVAC.", badge: "Compact workspace" },
    { name: "40FT Office", price: "Built to spec", detail: "More room for multiple desks, meetings, storage and a site-specific internal layout.", badge: "Team workspace" },
    { name: "Office + Storage Combo", price: "Built to spec", detail: "Separate occupied workspace from lockable tool, record or supply storage within one approved container layout.", badge: "Two functions" },
    { name: "Specialty Field Office", price: "Built to spec", detail: "Configure a security post, event office, farm administration room, campus support office or emergency command workspace.", badge: "Use-specific" },
  ],
  inventoryHeading: "Start with the people, workflow and site.",
  inventoryLead: "We scope length, occupancy, personnel doors, windows, HVAC, power, data, finishes, accessibility, egress and delivery before fabrication.",
  inventoryStockLabel: "Built to approved scope",
  benefitsTitle: "A real workspace, not just a steel box with a desk.",
  benefits: [
    { title: "Separate people from cargo access", text: "A framed personnel door creates daily entry without relying on heavy cargo doors as the workplace entrance." },
    { title: "Plan comfort and power", text: "Coordinate HVAC, ventilation, lighting, outlets and data with the team size, climate and equipment load." },
    { title: "Keep the office accountable", text: "Define desks, storage, meeting space, equipment and the clear exit route before the interior is built." },
  ],
  galleryTitle: "Put a practical office beside the operation it supports.",
  galleryLead: "Common roles include jobsite management, security, facilities coordination, farm administration, event operations and emergency command.",
  gallery: [
    { image: "/specialty/office-container-hero-v1.webp", alt: "Twenty foot office container with personnel door windows HVAC and desks at a commercial jobsite", caption: "Jobsite project office beside the work" },
    { image: "/inventory-v3/schools-custom.jpg", alt: "Modified container workspace beside a school facilities area", caption: "Campus and facilities coordination" },
    { image: "/container-custom.jpg", alt: "Modified shipping container with lighting shelving and work area", caption: "Field office and secure equipment support" },
  ],
  featureEyebrow: "Occupied space needs a complete plan",
  featureTitle: "Design around safe access, comfort and daily work.",
  featureLead: "Local building, zoning, fire, electrical, accessibility and workplace requirements determine the final office. The site authority must approve placement and occupancy before use.",
  applications: ["Jobsite management", "Security and gate office", "Farm administration", "Campus facilities", "Event operations", "Emergency command"],
  technicalNotes: [
    { title: "Confirm occupancy and egress", text: "Plan the number of occupants, clear exit route, door hardware, steps or ramp, landing and emergency access with the applicable authorities." },
    { title: "Engineer every opening", text: "Personnel doors, windows, HVAC and service penetrations need correctly framed openings and a coordinated weatherproofing plan." },
    { title: "Use qualified trades", text: "Electrical, HVAC, fire and accessibility work must follow the approved scope and the requirements that apply at the placement site." },
  ],
  testimonials: [],
  faq: [
    { q: "Does an office container arrive ready to occupy?", a: "Only after the approved configuration, site utilities, access, permits and inspections are complete. The exact requirements vary by jurisdiction, occupancy and duration of use." },
    { q: "Why add a personnel door?", a: "It is designed for routine entry and can be coordinated with egress hardware, steps or a ramp and the interior layout. Standard cargo doors are not a substitute for an approved occupied-space entrance." },
    { q: "Can you add HVAC, lights and outlets?", a: "Yes. The package should be sized around climate, occupancy and equipment, then installed and connected by qualified trades under the applicable local requirements." },
    { q: "Can it combine office and storage?", a: "Yes. A partitioned office and storage layout can work well when separation, egress, ventilation, electrical service and access to both zones are planned before fabrication." },
  ],
  finalEyebrow: "Build around the people using it.",
  finalTitle: "Get an office container scoped for your team, site and workflow.",
  finalCta: "Get my office-container quote",
};

const hazardousMaterial: Vertical = {
  key: "hazardous-material-storage",
  nav: "Hazardous Material Storage",
  eyebrow: "The material defines the container",
  title: "Design to the hazard.",
  emphasis: "Verify before storage.",
  lead: "An ordinary shipping container is not automatically suitable or compliant for hazardous materials. The exact substance, quantity, containers, incompatibilities, site and governing authority determine the required engineered configuration.",
  hero: "/specialty/hazmat-container-hero-v1.webp",
  featureImage: "/specialty/hazmat-container-hero-v1.webp",
  inventoryImages: ["/specialty/hazmat-container-hero-v1.webp", "/specialty/hazmat-container-hero-v1.webp", "/specialty/hazmat-container-hero-v1.webp", "/specialty/hazmat-container-hero-v1.webp"],
  context: "Purpose-built hazardous-material storage container",
  seoTitle: "Hazardous Material Storage Containers Built to Spec",
  seoDescription: "Scope a purpose-built hazardous-material storage container around the exact material, quantity, compatibility, containment, ventilation and site requirements.",
  specialtyType: "hazmat",
  navGroup: "specialty",
  heroChecks: ["Material and quantity reviewed first", "Containment, ventilation and separation scoped", "Local fire and environmental approval required"],
  quoteOptions: ["Flammable-liquid storage", "Corrosive-material storage", "Paint, aerosol or maintenance chemicals", "Battery or specialty material storage", "Need a hazard review"],
  quoteCopy: {
    eyebrow: "Start with the material",
    heading: "Request a hazard-specific review",
    intro: "Tell us the material, quantity, package type, ZIP and intended site. We will identify what must be engineered and approved before a quote is finalized.",
    buttonText: "Request configuration review",
    note: "No standard container is represented as universally compliant. Final suitability depends on the exact use and governing requirements.",
  },
  proofItem: { value: "AHJ", label: "review required before use" },
  inventoryOptions: [
    { name: "Flammable-Liquid Storage", price: "Engineered quote", detail: "Scope ventilation, containment, separation, electrical classification, grounding and fire-code requirements around the exact liquids and quantities.", badge: "Hazard-specific" },
    { name: "Corrosive-Material Storage", price: "Engineered quote", detail: "Match compatible surfaces, shelving, containment, ventilation and segregation to the actual acids, bases or corrosive products.", badge: "Compatibility first" },
    { name: "Maintenance Chemical Storage", price: "Engineered quote", detail: "Organize approved paints, aerosols, lubricants and shop chemicals with quantity limits, separation and spill-control measures.", badge: "Controlled access" },
    { name: "Specialty Hazard Storage", price: "Engineered quote", detail: "Battery, oxidizer, reactive or other special hazards require a separate material-specific engineering and authority review.", badge: "Separate assessment" },
  ],
  inventoryHeading: "There is no universal hazardous-material container.",
  inventoryLead: "Provide current safety data sheets, container sizes, maximum quantities, storage duration, dispensing activity and site information so the correct requirements can be identified.",
  inventoryStockLabel: "Engineering review required",
  benefitsTitle: "Start with facts, not a generic modification package.",
  benefitsLead: "The goal is a documented configuration that addresses the actual hazard and local rules. No website image or checklist replaces professional engineering or authority approval.",
  benefits: [
    { title: "Identify the material and incompatibilities", text: "Current safety data sheets and inventory quantities establish what may need separation, ventilation, temperature control or special construction." },
    { title: "Plan for a release", text: "Secondary containment, compatible surfaces and inspection access are evaluated around the package type and applicable spill-control requirements." },
    { title: "Coordinate site approval", text: "Fire, environmental, zoning, building and workplace authorities may each apply different requirements before placement or use." },
  ],
  galleryTitle: "Purpose-built means visible controls and a documented scope.",
  galleryLead: "Containment, ventilation, compatible storage, controlled access and electrical design are selected for the actual material, not copied from a generic container photo.",
  gallery: [
    { image: "/specialty/hazmat-container-hero-v1.webp", alt: "Purpose-built hazardous-material storage container with sealed drums on spill-containment sumps in a controlled industrial area", caption: "Containment and ventilation designed into the enclosure" },
    { image: "/specialty/hazmat-container-hero-v1.webp", alt: "Compatible sealed chemical containers separated on galvanized containment platforms", caption: "Separate incompatible materials and preserve inspection access" },
    { image: "/specialty/hazmat-container-hero-v1.webp", alt: "Grounded modified storage container with ventilation and controlled industrial placement", caption: "Coordinate electrical, grounding and site controls" },
  ],
  featureEyebrow: "Before a container is selected",
  featureTitle: "Send the SDS, quantity and operating plan.",
  featureLead: "Storage only, dispensing, charging, waste accumulation and occupied work are different activities. Each can change the required ventilation, fire protection, containment, electrical and permitting approach.",
  applications: ["Flammable liquids", "Corrosive products", "Paints and aerosols", "Maintenance chemicals", "Battery-related materials", "Hazardous-waste containers"],
  technicalNotes: [
    { title: "Classify the exact hazard", text: "Use current safety data sheets, package types, maximum quantities and incompatibilities. Product names alone are not enough." },
    { title: "Engineer the controls", text: "Evaluate secondary containment, compatible construction, low and high ventilation, electrical classification, grounding, spill response, security and inspection access." },
    { title: "Obtain governing approval", text: "The applicable fire code official, environmental authority, building department, insurer and workplace-safety requirements must be addressed before use." },
  ],
  testimonials: [],
  faq: [
    { q: "Can I store hazardous materials in a standard shipping container?", a: "Do not assume so. A standard container may lack the required ventilation, containment, electrical design, separation, fire protection and approval. Suitability depends on the exact material, quantity, activity and local requirements." },
    { q: "What information is needed before quoting?", a: "Provide current safety data sheets, package type and size, maximum quantity, storage duration, whether materials will be transferred or dispensed, required temperature range, site plan and delivery ZIP." },
    { q: "Is secondary containment always required?", a: "Requirements depend on the material, quantity, activity and governing regulation. Some regulated liquid storage and hazardous-waste applications require secondary containment. The design must be confirmed for the exact use rather than assumed from a general rule." },
    { q: "Does adding vents make a container compliant?", a: "No. Ventilation is only one possible control. Airflow rate and location, vapor density, ignition sources, electrical classification, containment, incompatibilities, fire protection, egress and site separation may also apply." },
    { q: "Who approves the final installation?", a: "The applicable authority or authorities depend on the site and material. They may include the fire code official, environmental regulator, building department, workplace-safety authority and insurer. Approval must be confirmed before use." },
  ],
  finalEyebrow: "No shortcuts on hazardous storage.",
  finalTitle: "Start the review with the material, quantity and site.",
  finalCta: "Request my hazard review",
};

const disasterRelief: Vertical = {
  key: "disaster-relief-containers",
  nav: "Disaster Relief & Emergency Response",
  eyebrow: "Pre-position supplies before the call comes",
  title: "Stage it securely.",
  emphasis: "Deploy when every hour matters.",
  lead: "Buy secure container capacity for emergency supply caches, response equipment, recovery tools and field operations. Match the container and interior plan to the agency, nonprofit or facility responsible for the inventory.",
  hero: "/specialty/disaster-relief-hero-v1.webp",
  featureImage: "/specialty/disaster-relief-hero-v1.webp",
  inventoryImages: ["/inventory-v3/generic-20.jpg", "/inventory-v3/generic-40.jpg", "/inventory-v2/generic-3.jpg", "/specialty/office-container-hero-v1.webp"],
  context: "Disaster relief and emergency response storage",
  seoTitle: "Disaster Relief and Emergency Response Storage Containers",
  seoDescription: "Buy secure storage containers for emergency supply caches, recovery tools, response equipment, field logistics and mobile command support.",
  navGroup: "use",
  heroChecks: ["Secure pre-positioned supply storage", "Dry, office and reefer options", "One delivered purchase price"],
  quoteOptions: ["20FT Emergency Supply Cache", "40FT Response Equipment Storage", "40FT High Cube Relief Inventory", "Mobile command or office container", "Reefer for validated cold storage", "Not sure yet"],
  proofItem: { value: "Ready", label: "supply cache on your site" },
  benefitsTitle: "Prepared capacity for response and recovery.",
  benefits: [
    { title: "Keep supplies accountable", text: "Shelving, zones and inventory controls make water, blankets, tarps, PPE and recovery tools easier to count and retrieve." },
    { title: "Place capacity near the mission", text: "Pre-position storage at an emergency operations facility, public works yard, nonprofit hub or approved staging location." },
    { title: "Match the configuration to the load", text: "Use dry storage for suitable supplies, an approved office conversion for command work or a tested reefer only when the cold-chain plan requires it." },
  ],
  galleryTitle: "Support the logistics behind the response.",
  galleryLead: "Containers can support receiving, warehousing, distribution and field coordination when access, inventory rotation and responsible ownership are clear.",
  gallery: [
    { image: "/specialty/disaster-relief-hero-v1.webp", alt: "Twenty foot orange container holding water blankets tarps PPE work lights and recovery tools at an emergency operations yard", caption: "Pre-position a secure emergency supply cache" },
    { image: "/institutions-gallery-2.png", alt: "Emergency barriers pumps and maintenance equipment organized beside a municipal operations building", caption: "Keep response and recovery equipment ready" },
    { image: "/specialty/office-container-hero-v1.webp", alt: "Modified office container with personnel door windows HVAC and planning space", caption: "Configure approved field coordination workspace" },
  ],
  featureEyebrow: "Stock what the plan calls for",
  featureTitle: "Organize for receiving, rotation and rapid issue.",
  featureLead: "The responsible organization must define shelf life, storage conditions, inspection frequency, inventory rotation and who may access the cache. Manufacturer requirements still govern PPE, medical and temperature-sensitive products.",
  applications: ["Bottled water and distribution supplies", "Tarps, blankets and cots", "PPE and response consumables", "Generators and work lights", "Recovery tools and pumps", "Field records and communications"],
  processTitle: "From preparedness plan to placed container.",
  processLead: "Choose the mission, inventory and responsible site before selecting the size and interior configuration.",
  processSteps: [
    { title: "Define the cache or field function", text: "List the supplies, equipment, expected users, storage duration and environmental requirements." },
    { title: "Match size and configuration", text: "Confirm dry, insulated, reefer, office or combined requirements plus shelving, power, lighting and access." },
    { title: "Approve placement and delivery", text: "Preserve emergency lanes, firm truck access, drainage, door clearance, security and responsible site ownership." },
    { title: "Load, label and inspect", text: "Use the organization’s inventory, shelf-life, inspection and replenishment procedure after delivery." },
  ],
  testimonials: [],
  faq: [
    { q: "What emergency supplies can go in a dry container?", a: "Suitable examples may include tarps, blankets, cots, bottled-water cases, sealed shelf-stable distribution supplies, recovery tools, work lights and approved PPE. The responsible organization must follow manufacturer storage conditions, shelf life and inspection requirements." },
    { q: "Can medical supplies or vaccines be stored inside?", a: "Only under the validated storage and monitoring procedure for the exact product. A dry or insulated container is not a medical cold-chain unit. Vaccines and biologics require their manufacturer instructions and applicable public-health requirements." },
    { q: "Can a container become a mobile command office?", a: "A purpose-built office conversion can support field coordination when occupancy, personnel access, egress, HVAC, electrical service, communications, accessibility and local approvals are addressed." },
    { q: "Where should an emergency container be placed?", a: "Use an approved firm, level location that preserves fire and emergency lanes, drainage, security, delivery access and enough door clearance for safe receiving and distribution." },
    { q: "Do you provide disaster-response services?", a: "No. United Container Depot sells and delivers container capacity. The purchasing agency, facility or nonprofit owns the preparedness plan, inventory, staffing, distribution and operational response." },
  ],
  finalEyebrow: "Preparedness needs owned capacity.",
  finalTitle: "Put the right container behind your emergency logistics plan.",
  finalCta: "Get my response-storage quote",
};

const internationalShipping: Vertical = {
  key: "international-shipping-containers",
  nav: "International Shipping",
  eyebrow: "Buy here. Pack at your pace. Ship with your forwarder.",
  title: "Pack without the rush.",
  emphasis: "Ship when you are ready.",
  lead: "Buy your container, have its export-readiness and CSC status checked, then fill it on your schedule. United Container Depot sells the container and arranges the depot inspection. We are not a freight forwarder and do not book ocean freight, customs clearance or international transport.",
  hero: "/specialty/export-retirement-relocation-v1.webp",
  featureImage: "/specialty/export-humanitarian-v1.webp",
  inventoryImages: ["/inventory-v3/generic-20.jpg", "/inventory-v3/generic-40.jpg", "/inventory-v2/generic-3.jpg", "/specialty/reefer-hero.webp"],
  context: "International shipping and export-ready container purchase",
  seoTitle: "Shipping Containers for International Moves and Export",
  seoDescription: "Buy a shipping container, arrange CSC export-readiness inspection, pack without a rental deadline, and have your freight forwarder handle ocean transport and customs.",
  specialtyType: "export",
  navGroup: "use",
  heroChecks: ["Purchase the container with no rental packing deadline", "Depot export-readiness inspection and CSC status arranged", "Your freight forwarder handles booking, customs and international transport"],
  quoteOptions: ["20FT Dry Container for Export", "40FT Dry Container for Export", "40FT High Cube for Export", "Reefer Container for Export", "Not sure yet"],
  quoteCopy: {
    eyebrow: "Container plus export-readiness",
    heading: "Get your export-container quote",
    intro: "Tell us the size, delivery ZIP and intended destination. We quote the container, domestic delivery and applicable depot inspection, not ocean freight.",
    buttonText: "Get my container purchase price",
    note: "Container sale and inspection only. Freight forwarding, customs and international transport are separate.",
  },
  proofItem: { value: "CSC", label: "status checked before release" },
  inventoryOptions: [
    { name: "20FT Export-Ready Dry", price: "Request local price", detail: "A compact purchase for household moves, personal effects, program supplies and destinations where placement or cargo volume is limited.", badge: "Inspection arranged" },
    { name: "40FT Export-Ready Dry", price: "Request local price", detail: "Full-size capacity for larger household relocations, nonprofit programs, commercial equipment and consolidated overseas loads.", badge: "40FT capacity" },
    { name: "40FT High Cube Export", price: "Request local price", detail: "Additional interior height for bulky household goods, project equipment and high-volume loads, subject to carrier and destination limits.", badge: "Extra height" },
    { name: "Export Reefer", price: "Request local price", detail: "A tested refrigerated container for approved cold-chain or international project use. Every UCD reefer purchase includes the separate 10-day depot electrical test and report.", badge: "CSC plus reefer test" },
  ],
  inventoryHeading: "Choose the container. Confirm export readiness before you load.",
  inventoryLead: "We match the size and condition, arrange the applicable depot inspection and document the unit's CSC status. Your freight forwarder must confirm its own carrier, cargo, weight, customs and destination requirements before transport.",
  inventoryStockLabel: "Inspection scope confirmed",
  benefitsTitle: "Own the box. Keep the shipping roles clear.",
  benefitsLead: "UCD handles the container purchase and applicable depot inspection. The buyer and licensed freight forwarder remain responsible for the cargo, carrier booking, customs and international movement.",
  benefits: [
    { title: "Pack without a rental clock", text: "Keep the purchased container beside your property while you sort, wrap and load over the timeline that works for you, subject to local placement rules." },
    { title: "Prepare the container for export", text: "We arrange depot inspection of the container and confirmation of valid CSC safety status or required recertification before release." },
    { title: "Let a freight forwarder move it", text: "A licensed freight forwarder handles ocean booking, carrier acceptance, export documents, customs coordination, port movement and destination logistics." },
  ],
  scrollQuote: {
    eyebrow: "Start with the container",
    strong: "Buy and inspect the box before the international move begins.",
    text: "Your freight forwarder can then confirm the route, cargo and carrier requirements for the inspected unit.",
    button: "Price my export container",
  },
  galleryTitle: "One purchase. Very different journeys.",
  galleryLead: "International buyers include retirees, younger movers, nonprofits and project operators. The common sequence is to buy the container, confirm its export readiness, pack carefully and hand the transport to a qualified freight forwarder.",
  gallery: [
    { image: "/specialty/export-retirement-relocation-v1.webp", alt: "Retired couple gradually loading household furniture into the short-end cargo doors of a standard forty foot container beside their home", caption: "Retire overseas and pack the household without a rental deadline" },
    { image: "/specialty/export-young-relocation-v1.webp", alt: "Young adults loading a bicycle books and household belongings through both short-end doors of a twenty foot container beside a townhouse", caption: "Start a new chapter abroad with one owned load" },
    { image: "/specialty/export-humanitarian-v1.webp", alt: "Nonprofit volunteers loading medical supplies clothing and sports equipment through the short-end doors of a forty foot container", caption: "Consolidate approved aid and program supplies for overseas work" },
  ],
  featureEyebrow: "Relocation, aid and project cargo",
  featureTitle: "Load deliberately. Document every shipment.",
  featureLead: "Household goods, medical supplies, donated clothing, sports equipment and project materials can all face different packing, customs and destination rules. Your freight forwarder must confirm what may be shipped and how it must be declared before pickup.",
  applications: ["Retirement relocation", "Personal overseas moves", "Medical and clinic supplies", "Clothing and sports donations", "Education and nonprofit programs", "Reefer and agriculture projects"],
  technicalNotes: [
    { title: "Confirm CSC safety status", text: "Internationally transported containers generally require a valid CSC Safety Approval Plate and current examination status. We arrange the applicable depot inspection or recertification for the selected unit." },
    { title: "Understand what CSC does not cover", text: "CSC status concerns the container's structural safety. It does not approve the cargo, clear customs, certify packing, guarantee carrier acceptance or authorize entry at the destination." },
    { title: "Choose a licensed freight forwarder", text: "United Container Depot is not a freight forwarder. Your forwarder books the international movement and coordinates carrier forms, port delivery, customs documents and destination handling." },
    { title: "Get carrier approval before pickup", text: "Shipper-owned-container requirements vary. The carrier may request its own application, unit photos, CSC plate photo, survey report, tare weight and additional documentation." },
  ],
  ownershipEyebrow: "Why buyers own before they ship",
  ownershipTitle: "Take time pressure out of a complicated move.",
  ownershipLead: "International timing can change while you sell a home, wait for visas, sort donations or coordinate a project. Buying keeps the container available while the rest of the shipment comes together.",
  ownershipReasons: [
    { title: "Pack over weeks or months", text: "A retired couple relocating to Thailand, for example, can sort the household gradually while their forwarder confirms Thai import and carrier requirements." },
    { title: "Bridge uncertain dates", text: "Keep one secured load together through changing departure dates, property handovers, visa timing or a delayed destination site." },
    { title: "Consolidate program supplies", text: "Nonprofits can collect approved medical, clothing, education and sports supplies before the forwarder schedules the international movement." },
    { title: "Own the project asset", text: "An export-ready dry container or tested reefer may continue serving the overseas property or program after arrival, subject to local import and placement rules." },
  ],
  processTitle: "From UCD purchase to freight-forwarder handoff.",
  processLead: "We handle the container sale and arrange depot export-readiness work. Your licensed freight forwarder handles the international shipment.",
  processSteps: [
    { title: "Tell us the load and destination", text: "Share the delivery ZIP, intended destination, cargo category and preferred size so we can identify the right container and inspection path." },
    { title: "Inspect and document the container", text: "We arrange the applicable depot inspection, confirm CSC status and provide the available unit documentation before release." },
    { title: "Take delivery and pack at your pace", text: "You own the container, so you can organize and secure the load without a container-rental return deadline, subject to site rules." },
    { title: "Your forwarder books and ships it", text: "The forwarder confirms carrier acceptance, packing and weight rules, customs paperwork, port handoff and destination delivery." },
  ],
  testimonials: [],
  faq: [
    { q: "What does export-ready or export certified mean?", a: "For the container itself, it means the unit is inspected for international transport and has valid CSC safety status or the required recertification and documentation for the selected unit. It is not a blanket approval of the cargo, customs entry, destination import or ocean booking." },
    { q: "Is United Container Depot a freight forwarding company?", a: "No. We sell the container and arrange applicable depot export-readiness inspection. A licensed freight forwarder must arrange ocean or international transport, carrier booking, export documentation, customs coordination, port movement and destination handling." },
    { q: "Does CSC status guarantee that a shipping line will accept my container?", a: "No. CSC status addresses container structural safety, but each carrier applies its own shipper-owned-container acceptance process. Your carrier or forwarder may also require an application, photos, CSC plate details, a survey or seaworthy report, tare weight and other records." },
    { q: "Can I buy the container and pack it slowly?", a: "Yes. This is a container purchase, not a rental. You may load it over the time you need, subject to local zoning, property and safe-placement rules. Coordinate the inspection status, loaded pickup, weight and carrier cutoff with your freight forwarder before the final shipping date." },
    { q: "Can I use one for an international household move?", a: "Yes, when the container, cargo and route meet the carrier and destination requirements. Retirees, families and younger movers often value the ability to pack gradually. Your freight forwarder should confirm prohibited items, inventory requirements, customs forms, packing rules, weight limits and final delivery before you load." },
    { q: "Can a nonprofit ship medical supplies, clothing or sports gear?", a: "Potentially, but donated and medical goods can have strict origin, condition, labeling, licensing, customs and recipient requirements. The nonprofit and its freight forwarder must verify every item with the carrier and destination authorities before loading. United Container Depot does not approve cargo or imply affiliation with any charity." },
    { q: "Can a reefer container be prepared for export?", a: "Yes, subject to unit, carrier and route requirements. In addition to CSC export-readiness, every UCD reefer purchase includes a separate 10-day depot electrical test and detailed report supporting the warranty. That electrical report does not replace any carrier-required pre-trip inspection or shipping documentation." },
    { q: "Who decides how much I can load?", a: "The CSC plate, container payload, cargo distribution, road limits, verified gross mass rules, carrier limits and route requirements all matter. Your freight forwarder and carrier must confirm the allowable load and documentation for the exact container and movement." },
  ],
  finalEyebrow: "Buy the container. Use a forwarder to ship it.",
  finalTitle: "Start with an inspected container you can pack on your schedule.",
  finalCta: "Get my export-container quote",
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
  "disaster-relief-containers": disasterRelief,
  "emergency-response-containers": disasterRelief,
  "refrigerated-containers": refrigerated,
  "open-side-containers": openSide,
  "double-door-containers": doubleDoor,
  "insulated-containers": insulated,
  "office-containers": officeContainers,
  "hazardous-material-storage": hazardousMaterial,
  "hazmat-containers": hazardousMaterial,
  "international-shipping-containers": internationalShipping,
  "export-containers": internationalShipping,
};
