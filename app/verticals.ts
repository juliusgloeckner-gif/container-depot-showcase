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
  seoTitle?: string;
  seoDescription?: string;
  specialtyType?: "reefer" | "rollup" | "tunnel";
  heroChecks?: string[];
  quoteOptions?: string[];
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
  key: "business", nav: "Business", eyebrow: "Overflow storage on your own lot", title: "Own your storage.", emphasis: "Stop renting units.",
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
  inventoryImages: ["/inventory-v2/home-1.jpg", "/inventory-v2/home-2.jpg", "/inventory-v2/home-3.jpg", "/inventory-v3/home-custom.jpg"],
  gallery: [
    { image: "/moving-hero.png", alt: "Twenty foot shipping container holding household furniture and boxes beside a suburban home", caption: "Pack beside the house on your schedule" },
    { image: "/gallery-v3/moving-people.jpg", alt: "Two homeowners unloading furniture and boxes through both short-end cargo doors of a twenty foot container", caption: "Unload at the new home without the rush" },
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
  key: "institutions", nav: "Schools & Institutions", eyebrow: "Flexible capacity for public operations", title: "Space on site.", emphasis: "Programs stay moving.",
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
  eyebrow: "Powered cold storage delivered to your site",
  title: "Keep it cold.",
  emphasis: "Keep orders moving.",
  lead: "Refrigerated shipping containers, commonly called reefers, add powered temperature-controlled capacity beside your restaurant, warehouse, farm or event site. We match the unit, required setpoint, site power and delivery plan before you buy.",
  hero: "/specialty/reefer-hero.webp",
  featureImage: "/specialty/reefer-interior.webp",
  inventoryImages: ["/specialty/reefer-restaurant.webp", "/specialty/reefer-farm.webp", "/specialty/reefer-hero.webp", "/specialty/reefer-interior.webp"],
  context: "Refrigerated and reefer container",
  seoTitle: "Refrigerated Containers and Reefers for Sale",
  seoDescription: "Buy refrigerated shipping containers, also called reefers, for on-site cold storage. Match size, setpoint, site power and delivery before purchase.",
  specialtyType: "reefer",
  heroChecks: ["20FT and 40FT refrigerated container options", "Cooling range and controller matched to the product", "Site power verified before delivery"],
  quoteOptions: ["20FT Refrigerated / Reefer", "40FT Refrigerated / Reefer", "40FT High Cube Reefer", "Need help matching power and setpoint", "Not sure yet"],
  inventoryOptions: [
    { name: "20FT Reefer", price: "Request local price", detail: "Compact powered cold storage for restaurants, caterers, florists and sites where space is limited.", badge: "20FT cold storage" },
    { name: "40FT Reefer", price: "Request local price", detail: "Higher-volume refrigerated capacity for farms, food distributors, beverage operations and warehouse overflow.", badge: "40FT capacity" },
    { name: "40FT High Cube Reefer", price: "Request local price", detail: "Additional interior height for palletized or bulky temperature-controlled inventory, subject to local availability.", badge: "High cube" },
    { name: "Power-Matched Package", price: "Built to site", detail: "Confirm voltage, phase, amperage, plug, setpoint and placement before the reefer is scheduled for delivery.", badge: "Power verified" },
  ],
  inventoryHeading: "Choose the reefer. Confirm the power. Protect the product.",
  inventoryLead: "Tell us what you are storing, the required temperature, your ZIP and the power available at the site. We match the complete setup, not only the steel box.",
  inventoryStockLabel: "Confirm local inventory",
  benefitsTitle: "Cold capacity without building another walk-in.",
  benefits: [
    { title: "Add cold capacity on site", text: "Create refrigerated overflow beside the operation, close to receiving, prep, packing or service." },
    { title: "Match the unit to the product", text: "Required setpoint, ventilation, humidity needs and loading pattern determine the right reefer configuration." },
    { title: "Plan power before delivery", text: "Voltage, phase, amperage, plug type and disconnect requirements are confirmed with your electrician before placement." },
  ],
  galleryTitle: "See reefers supporting real operations.",
  galleryLead: "Refrigerated containers work best when the unit, product, loading pattern, site power and daily workflow are planned together.",
  gallery: [
    { image: "/specialty/reefer-restaurant.webp", alt: "Twenty foot refrigerated reefer container powered beside a restaurant service area", caption: "Restaurant and catering cold-storage overflow" },
    { image: "/specialty/reefer-farm.webp", alt: "Forty foot refrigerated reefer container powered beside a produce packing shed", caption: "Produce cooling beside the packing operation" },
    { image: "/specialty/reefer-hero.webp", alt: "Forty foot refrigerated reefer container with machinery at the short end beside a warehouse", caption: "Warehouse and food-distribution cold capacity" },
  ],
  featureEyebrow: "Load for airflow",
  featureTitle: "Cold air only works when it can move.",
  featureLead: "Keep the T-floor channels and overhead return-air path open, respect the unit's load line and load product at the correct starting temperature.",
  applications: ["Produce and dairy", "Seafood and proteins", "Beverages", "Catering and event food", "Flowers and floral stock", "Cold-chain overflow"],
  technicalNotes: [
    { title: "Confirm site power", text: "Reefer electrical requirements vary. Verify the exact unit's voltage, phase, amperage, plug and disconnect with a qualified electrician." },
    { title: "Protect airflow", text: "Do not block the T-floor or load above the marked load line. Cold supply air and warm return air both need a clear path." },
    { title: "Define the product requirement", text: "State the product, target setpoint, expected ambient conditions and loading pattern. Cooling and freezing capability varies by unit." },
  ],
  testimonials: [],
  faq: [
    { q: "What power does a refrigerated container need?", a: "It depends on the specific refrigeration unit. Many marine reefers use high-voltage three-phase power, while some installations use compatible transformers or converter packages. A qualified electrician should confirm voltage, phase, amperage, plug, disconnect and cable routing for the exact unit before delivery." },
    { q: "Can the same reefer work as a cooler or freezer?", a: "Some units can operate across chilled and frozen setpoints, but range and performance vary by model, refrigerant, condition and ambient temperature. Tell us the product and required setpoint so the available unit can be checked before purchase." },
    { q: "How should product be loaded?", a: "Load product at the correct starting temperature, keep the T-floor airflow channels open, leave the overhead return-air path clear and never stack above the unit's load line. Your food-safety or cold-chain plan remains the governing procedure." },
    { q: "Can a reefer sit beside a restaurant, farm or warehouse?", a: "Often, yes, when the site has approved placement, firm level support, delivery access, ventilation around the machinery end and a safe electrical connection. Confirm zoning, fire access, food-safety and electrical requirements before delivery." },
  ],
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
  "refrigerated-containers": refrigerated,
  "open-side-containers": openSide,
  "double-door-containers": doubleDoor,
};
