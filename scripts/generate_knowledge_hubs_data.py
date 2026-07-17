from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "app" / "knowledge" / "knowledge-data.json"


SOURCES = {
    "container_specs": {
        "label": "Hapag-Lloyd container specification",
        "href": "https://static-cf.hapag-lloyd.com/content/dam/website/downloads/press_and_media/publications/15211_Container_Specification_engl_Gesamt_web.pdf",
    },
    "osha_storage": {
        "label": "OSHA 1910.176 material handling and storage",
        "href": "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.176",
    },
    "epa_pesticides": {
        "label": "EPA storing pesticides safely",
        "href": "https://www.epa.gov/safepestcontrol/storing-pesticides-safely",
    },
    "epa_containers": {
        "label": "EPA pesticide containers, containment, storage and disposal",
        "href": "https://www.epa.gov/pesticide-worker-safety/containers-containment-storage-and-disposal-pesticides",
    },
    "nhtsa_loads": {
        "label": "NHTSA secure your load guidance",
        "href": "https://www.nhtsa.gov/drive-safe-secure-your-load",
    },
}


def seed(slug, title, nav, category, description, answer, note):
    return {
        "slug": slug,
        "title": title,
        "navTitle": nav,
        "category": category,
        "description": description,
        "quickAnswer": answer,
        "specificNote": note,
    }


FARM = [
    seed("farm-container-buying-guide", "The complete farm container buying guide", "Farm buying guide", "buying", "Choose a container around the work, delivery route and contents instead of starting with color or depot price.", "Start with the largest item, retrieval pattern and exact delivery position. Then compare the complete delivered scope for the exact unit.", "Write down what must fit, how often it moves and who needs access before requesting inventory."),
    seed("20ft-vs-40ft-farm-storage", "20FT vs 40FT containers for farms and ranches", "20FT vs 40FT", "buying", "Compare nominal footprint, access and usable workflow for tools, bagged inputs and seasonal equipment.", "A 20FT unit is easier to place on constrained ground. A 40FT unit doubles nominal floor area, but only helps when the route and daily retrieval plan support it.", "Measure the equipment and the short-end door opening on the exact unit. Nominal length alone does not prove fit."),
    seed("new-vs-used-farm-containers", "New vs used farm storage containers", "New vs used", "buying", "Match condition to moisture sensitivity, expected service life, appearance and budget.", "Use condition criteria tied to the contents. Inspect doors, seals, roof, floor, corrosion and prior use rather than relying on a broad grade name.", "Ask for current photos or inspection details for the exact unit when condition matters."),
    seed("farm-container-delivered-price", "What belongs in a delivered farm container price", "Delivered price scope", "buying", "Understand which costs and site assumptions must be in writing before a container leaves the depot.", "Confirm the exact unit or grade, freight, unload method, delivery ZIP, access assumptions and any modification work in one written scope.", "A low depot number can become expensive when freight, redelivery or site work is omitted."),
    seed("farm-container-site-selection", "Choose the right farm container location", "Site selection", "placement", "Place storage close enough to use while protecting drainage, access, fire routes and farm traffic.", "Shortlist level, well-drained positions beside the work zone, then let the carrier and property decision-maker verify the final approach and unload area.", "Do not trade a convenient location for blocked equipment movement, buried utilities or chronic runoff."),
    seed("farm-container-ground-preparation", "Prepare ground for a farm storage container", "Ground preparation", "placement", "Plan stable bearing, drainage and support before delivery to reduce door binding and settlement problems.", "The correct support depends on soil, load, drainage and local requirements. Keep the unit level at the structural bearing points and verify the plan for the actual site.", "Never copy a generic block layout without considering loaded weight, frost, runoff and the exact container."),
    seed("rural-container-delivery-access", "Plan container delivery on rural property", "Rural delivery access", "placement", "Screen gates, turns, slopes, soft shoulders, overhead lines and seasonal ground conditions before dispatch.", "Send the carrier clear photos, measurements and the preferred final orientation. The carrier must approve the route, unload method and safe work zone.", "Walk the full truck path, not only the final container footprint."),
    seed("farm-drainage-door-orientation", "Drainage and door orientation for farm containers", "Drainage and doors", "placement", "Keep runoff away from the threshold and position cargo doors for safe daily access.", "Orient the doors around traffic, prevailing runoff and retrieval needs while keeping the base level enough for the door gear to operate correctly.", "A small site slope may become a water or door problem after heavy rain or settlement."),
    seed("farm-tool-storage-layout", "Lay out a container for farm tools", "Tool storage layout", "equipment", "Create clear zones for long-handled tools, repair kits, consumables and daily pickup.", "Keep a clear center aisle, heavy items low, frequently used tools near the doors and long items restrained on purpose-built racks.", "Design around gloved retrieval and muddy return, not a showroom photograph."),
    seed("tractor-attachment-container-fit", "Will tractor attachments fit in a shipping container?", "Attachment fit check", "equipment", "Measure implements, lift points, turning path and floor loading before assuming a container is suitable.", "Verify the exact attachment dimensions, container door opening, interior, ramp or lifting method, point loads and safe access with qualified parties.", "A nominal capacity statement does not prove an implement can enter, turn or sit safely."),
    seed("fencing-supplies-container-storage", "Store fencing supplies in a farm container", "Fencing supplies", "equipment", "Organize posts, rolls, tools and hardware without creating falling loads or blocked aisles.", "Separate long stock from small hardware, restrain rolls, keep heavy materials low and preserve a clear retrieval lane.", "Do not lean unstable posts or heavy coils where opening the doors can release them."),
    seed("seasonal-farm-equipment-rotation", "Rotate seasonal farm equipment through container storage", "Seasonal rotation", "equipment", "Plan spring, summer, harvest and winter zones so the next equipment set is reachable.", "Map the retrieval calendar before loading. Put the next-season group near access and record what moved to the rear.", "A packed container can hide the exact equipment needed during a narrow weather window."),
    seed("feed-seed-storage-screening", "Screen a container for feed and seed storage", "Feed and seed screening", "inputs", "Evaluate packaging, moisture, pests, temperature sensitivity and local requirements before using steel storage.", "A plain container is not automatically suitable for feed or seed. Confirm product instructions, packaging, humidity and pest controls, and keep incompatible products separate.", "Never store pesticides or other chemicals with food, feed, seed or medical supplies."),
    seed("bagged-farm-inputs-moisture", "Protect bagged farm inputs from moisture", "Bagged inputs", "inputs", "Reduce contact with wet floors, condensation paths and damaged packaging.", "Use intact packaging, dunnage or approved racking, airflow appropriate to the product and routine inspection. Correct the water source instead of only adding absorbent material.", "Moisture performance depends on climate, loading pattern and the exact contents."),
    seed("rodent-resistant-farm-storage", "Build a rodent-resistant farm storage routine", "Rodent control", "inputs", "Combine container condition, packaging, housekeeping and inspection rather than relying on steel walls alone.", "Inspect door seals and penetrations, clean spills promptly, use pest-resistant packaging where appropriate and follow the farm pest-control plan.", "A container is not rodent-proof when doors, vents, floor damage or open packaging create access."),
    seed("farm-container-ventilation", "Ventilation and condensation control on farms", "Ventilation and moisture", "inputs", "Manage moisture around the actual climate, product and loading pattern.", "Start by controlling leaks, ground moisture and wet contents. Then select ventilation, dehumidification or conditioning based on measured conditions and product requirements.", "More ventilation is not always better in hot, humid air. Measure before modifying."),
    seed("pesticide-storage-container-boundaries", "Pesticide storage boundaries for shipping containers", "Pesticide boundaries", "safety", "Use EPA label directions and local requirements before considering any pesticide storage setup.", "Keep pesticides in original labeled containers, follow each label, separate them from food, feed and medical supplies, and use a locked, ventilated, flood-protected area approved for the products.", "This guide is only a screening gate. The label and current federal, state and local rules control."),
    seed("fertilizer-container-separation", "Plan fertilizer separation in farm storage", "Fertilizer separation", "safety", "Screen product compatibility, moisture sensitivity, fire load and spill controls before placement.", "Use the product label and safety data sheet, keep incompatible materials separate and obtain qualified review for ventilation, containment and fire protection.", "Do not treat all fertilizers as one storage category or mix them with pesticides, fuels or feed."),
    seed("fuel-battery-container-exclusions", "Fuel and battery safety around farm containers", "Fuel and battery safety", "safety", "Identify ignition, vapor, charging and spill hazards before using enclosed steel storage.", "Do not assume a standard container is approved for fuels, charging or hazardous materials. Follow the SDS, manufacturer instructions and applicable fire, electrical and environmental rules.", "Never run engines inside the container or improvise electrical charging in an unapproved space."),
    seed("livestock-supplies-container-storage", "Organize livestock supplies in a container", "Livestock supplies", "safety", "Separate clean supplies, animal health products, chemicals and dirty return items.", "Zone supplies by hygiene and compatibility, follow label temperature requirements and keep medicines, pesticides and feed separated as required.", "The most convenient shelf is not always the safe or compliant shelf."),
    seed("farm-container-locks-lockboxes", "Choose locks and lockboxes for rural containers", "Locks and lockboxes", "security", "Build security around the door hardware, exposure and key routine.", "Use compatible commercial-grade hardware protected by a lockbox when appropriate, then add placement, lighting and access control.", "A strong padlock cannot compensate for weak hasps, exposed hinges or uncontrolled keys."),
    seed("rural-container-lighting-cameras", "Lighting and cameras for rural container storage", "Lighting and cameras", "security", "Position deterrence and evidence tools around the actual approach and night conditions.", "Light the doors without blinding the camera, test coverage after dark and preserve a clear view of people and vehicles approaching the unit.", "A camera pointed at glare, vegetation or an unlit face does not provide useful evidence."),
    seed("farm-container-key-control", "Key control and nightly closeout for farm storage", "Key control", "security", "Assign access, document exceptions and name the person who closes the unit.", "Limit keys or codes to defined users, record changes and use a repeatable end-of-day check for doors, inventory and unusual conditions.", "Shared keys without ownership make losses and missed locks difficult to investigate."),
    seed("farm-container-storm-preparation", "Prepare a farm container for severe weather", "Storm preparation", "security", "Review site exposure, doors, loose outdoor items, drainage and local emergency guidance before a storm.", "Secure the site according to qualified local guidance, close and lock the unit, clear drainage and move loose exterior items without entering unsafe conditions.", "A shipping container is not automatically a storm shelter or engineered safe room."),
    seed("farm-container-permits-setbacks", "Farm container permits and setbacks", "Permits and setbacks", "compliance", "Identify zoning, property, fire and environmental rules before treating agricultural land as exempt.", "Ask the local authority and property decision-maker about duration, setbacks, screening, foundation, utilities and intended contents before delivery.", "Agricultural use does not create a universal permit exemption."),
    seed("farm-container-fire-access", "Keep fire access around farm containers", "Fire access", "compliance", "Protect emergency routes, hydrants, buildings and combustible exposures when choosing placement.", "Confirm clearances and fire access with the authority having jurisdiction, especially when contents or nearby structures increase fire load.", "Do not place a unit where open doors, parked equipment or deliveries narrow an emergency route."),
    seed("farm-storage-insurance-inventory", "Document farm container inventory for insurance", "Insurance and inventory", "compliance", "Create useful records of the unit, locks, contents and changes before a loss occurs.", "Ask the insurer how the container and contents are covered, photograph serials and high-value items, and keep the inventory record somewhere else.", "Ownership of the container does not guarantee coverage for every stored item or cause of loss."),
    seed("modified-farm-container-safety", "Plan safe farm container modifications", "Modification safety", "compliance", "Treat structural cuts, electrical work, insulation and occupancy as designed work.", "Use qualified professionals, verify permits and preserve structural, fire, ventilation and egress requirements for the intended use.", "Do not cut sidewalls, add wiring or create occupied space from an online sketch."),
    seed("farm-container-daily-zones", "Create daily retrieval zones in farm storage", "Daily retrieval zones", "operations", "Reduce wasted steps by arranging supplies around frequency and season.", "Put daily items nearest safe access, reserve the rear for controlled or infrequent stock and keep a marked clear aisle.", "Review the layout when the work phase changes instead of letting old zones become permanent clutter."),
    seed("farm-container-weekly-inspection", "Run a weekly farm container inspection", "Weekly inspection", "operations", "Catch water, door, support, pest and security problems while they are small.", "Use a named owner and a short repeatable checklist for roof, seals, floor, supports, drainage, locks, contents and housekeeping.", "Record exceptions and the correction date so inspection becomes action."),
    seed("multi-container-farm-yard-layout", "Plan a multi-container farm storage yard", "Multi-container layout", "operations", "Coordinate truck access, door swing, fire access and the movement of farm equipment between units.", "Lay out the full yard with measured routes, working aisles and future deliveries, then confirm it with the carrier and local decision-makers.", "Two individually sensible placements can create a bad yard when their doors and traffic conflict."),
    seed("farm-container-move-resale-repurpose", "Move, resell or repurpose a farm container", "Move and resale", "operations", "Protect future value by documenting condition and planning loaded or empty moves correctly.", "Use a qualified carrier, disclose modifications and contents, and never assume a unit can be moved loaded without a specific transport plan.", "Loaded moves change weight, securement, lifting and legal requirements."),
]


BUSINESS = [
    seed("business-container-buying-guide", "The complete business overflow container buying guide", "Business buying guide", "buying", "Choose on-site capacity around inventory, turnover, access and compliance instead of buying an empty box.", "Map what is overflowing, how often staff retrieve it and where a truck can place the unit. Then compare exact condition and delivered scope.", "Start with the operating bottleneck, not the container color."),
    seed("20ft-vs-40ft-business-storage", "20FT vs 40FT containers for business overflow", "20FT vs 40FT", "buying", "Compare footprint, capacity, retrieval distance and delivery constraints for commercial sites.", "A 20FT unit can suit tighter lots and smaller overflow. A 40FT unit doubles nominal floor area but requires a route and layout that make the added depth useful.", "Measure door openings, pallets and handling equipment against the exact unit."),
    seed("new-vs-used-business-containers", "New vs used containers for business storage", "New vs used", "buying", "Match condition and appearance to customers, contents, service life and budget.", "Inspect the exact unit for doors, roof, floor, seals, corrosion and prior use. Use stricter condition criteria for sensitive inventory or customer-facing placement.", "A broad grade name is not a substitute for the actual unit condition."),
    seed("business-container-delivered-cost", "Calculate the complete delivered business container cost", "Delivered cost", "buying", "Compare purchase, delivery, site work, modifications, operations and future exit value.", "Request one written delivered scope, then model the site and operating costs separately. Do not compare a depot-only number with a fully delivered alternative.", "Include redelivery risk when site access has not been verified."),
    seed("business-container-rear-lot-placement", "Place a container behind a business", "Rear-lot placement", "placement", "Balance convenient access with fire lanes, parking, neighbors, drainage and security.", "Confirm property permission, zoning, fire access and carrier approach before treating an open patch of asphalt as approved space.", "Doors, stairs and loading activity can expand the operating footprint beyond the steel box."),
    seed("commercial-container-delivery-route", "Plan a container delivery route at a commercial site", "Commercial delivery route", "placement", "Screen gates, docks, employee traffic, parked vehicles, turns and overhead conflicts.", "Schedule a controlled delivery window and have the carrier approve the full route, unload method and final orientation from current photos and measurements.", "A route that works after hours may not work during normal receiving traffic."),
    seed("landlord-zoning-container-approval", "Landlord and zoning approval for business containers", "Landlord and zoning", "placement", "Get written property and local approval before purchase when the site is leased or regulated.", "Confirm duration, screening, setbacks, signs, foundations, utilities and contents with the landlord and authority having jurisdiction.", "Verbal permission from a site contact may not bind the property owner or local authority."),
    seed("business-container-fire-lane-clearance", "Protect fire lanes and emergency access", "Fire lane clearance", "placement", "Keep emergency routes, exits, hydrants and fire department access clear.", "Have the authority having jurisdiction confirm placement and clearances, especially when the contents add combustible load.", "Door swing, carts and staged goods must not creep into an emergency route."),
    seed("pallet-carton-container-layout", "Lay out pallets and cartons in a container", "Pallet and carton layout", "inventory", "Create a usable aisle, stable stacks and retrieval sequence before loading.", "Use actual pallet and carton dimensions, keep aisles clear, stack securely and place heavy or slow stock where it will not block fast movers.", "Maximum fill is not maximum usable capacity when staff cannot reach the product safely."),
    seed("retail-seasonal-overflow-storage", "Container storage for retail seasonal inventory", "Retail seasonal stock", "inventory", "Stage displays, decorations and peak inventory close to the store without losing control.", "Separate saleable stock from fixtures and returns, label zones by season and protect items according to their temperature and humidity needs.", "A plain steel container may not suit temperature-sensitive products."),
    seed("restaurant-overflow-container-storage", "Container storage for restaurant overflow", "Restaurant overflow", "inventory", "Screen furniture, disposables, packaging and maintenance supplies for on-site storage.", "Use containers for suitable non-food overflow only after confirming sanitation, chemical separation, fire and property rules. Food requires an appropriate approved environment.", "Never assume a standard container is food-grade or climate-controlled."),
    seed("warehouse-distributor-overflow", "Warehouse and distributor overflow container plan", "Warehouse overflow", "inventory", "Extend reserve capacity without creating an uncontrolled mini-warehouse.", "Assign locations, receiving ownership, cycle counts and replenishment rules before the first pallet enters the unit.", "Overflow without a system quickly becomes lost inventory."),
    seed("container-receiving-workflow", "Connect a container to the receiving workflow", "Receiving workflow", "operations", "Control who receives, inspects, labels and moves goods into overflow.", "Create one handoff from receiving to the container record, including quantity, location, condition and the person responsible.", "Do not let deliveries bypass the inventory system because the container is outside."),
    seed("fast-slow-mover-zones", "Zone fast and slow movers in overflow storage", "Fast and slow movers", "operations", "Reduce unnecessary handling by placing inventory around retrieval frequency.", "Keep fast movers closest to safe access, reserve deeper zones for slower stock and revisit the plan as demand changes.", "A layout based on arrival order creates repeat handling and blocked aisles."),
    seed("business-container-shelving-aisles", "Shelving and aisle planning for business containers", "Shelving and aisles", "operations", "Preserve clear movement and stable storage inside a narrow steel space.", "Use appropriately rated shelving, stable loads and clear aisles. Follow OSHA material storage and handling requirements for the workplace.", "Improvised shelving and overhanging stock can turn routine retrieval into a falling-object hazard."),
    seed("container-cycle-counts-labeling", "Cycle counts and labeling in container storage", "Counts and labeling", "operations", "Keep overflow visible to the same inventory process as the main building.", "Use fixed locations, durable labels and a count cadence tied to value and movement. Reconcile exceptions before replenishment.", "An accurate spreadsheet is not useful if the physical location labels are missing."),
    seed("business-container-condensation", "Control condensation in business containers", "Condensation control", "climate", "Protect cartons, furniture and equipment by managing water sources and measured conditions.", "Stop leaks and ground moisture first, avoid loading wet goods, then choose ventilation or conditioning based on climate and product requirements.", "A vent count alone does not predict humidity performance."),
    seed("electronics-container-storage", "Can electronics be stored in a shipping container?", "Electronics storage", "climate", "Screen temperature, humidity, dust, static and security requirements before using steel storage.", "Sensitive electronics often need controlled conditions beyond a plain container. Follow manufacturer limits and use measured climate control when required.", "Do not rely on insulation alone to control heat or humidity."),
    seed("records-archive-container-storage", "Records and archive storage in containers", "Records and archives", "climate", "Evaluate retention, humidity, pests, fire, privacy and retrieval before storing business records.", "Use a records plan that meets legal and insurer requirements. Sensitive paper may need conditioned, fire-protected storage rather than a standard unit.", "Do not put irreplaceable records into an unmonitored environment."),
    seed("textiles-furniture-container-storage", "Store textiles and furniture in business containers", "Textiles and furniture", "climate", "Reduce moisture, abrasion, odor and stacking damage for soft goods and fixtures.", "Load dry, clean items with protective spacing and packaging, keep them off damp surfaces and inspect the environment through the storage period.", "Plastic wrapping can trap moisture when items enter damp."),
    seed("business-container-locks", "Lock and lockbox strategy for business containers", "Locks and lockboxes", "security", "Protect the actual door hardware and access routine instead of buying a lock in isolation.", "Use compatible commercial hardware and a lockbox where appropriate, then combine it with placement, lighting and controlled keys.", "Security must cover the full door system and the people who access it."),
    seed("business-container-key-control", "Business container key and access control", "Key control", "security", "Define who may enter overflow storage and how access changes are recorded.", "Limit credentials to named roles, remove access promptly and use an entry or issue record for high-value stock.", "Uncontrolled duplicate keys undermine inventory accountability."),
    seed("commercial-container-cameras", "Cameras and lighting around commercial containers", "Cameras and lighting", "security", "Capture useful views without glare, blind spots or blocked sight lines.", "Test identification views at night, cover the approach and doors, and align retention with the business security policy.", "A camera is not a replacement for locks, lighting and closeout."),
    seed("business-container-nightly-close", "Create a nightly closeout for overflow storage", "Nightly closeout", "security", "Assign a short routine for inventory exceptions, doors, locks and the surrounding area.", "Name the closer, record unusual activity and confirm the unit is secured after the last retrieval.", "Shared responsibility often means no final check occurs."),
    seed("container-fire-load-business", "Screen fire load in business container storage", "Fire load screening", "compliance", "Review contents, separation, access and fire protection before loading commercial overflow.", "Have the authority having jurisdiction and insurer review relevant contents and placement. Keep exits and fire access clear.", "A steel exterior does not eliminate the fire load inside."),
    seed("food-chemical-separation-overflow", "Separate food, chemicals and maintenance supplies", "Food and chemical separation", "compliance", "Prevent cross-contamination and incompatible storage in restaurant, retail and service operations.", "Follow product labels, food-safety rules and safety data sheets. Use separate approved areas and never improvise mixed storage.", "Convenient overflow is not a reason to combine incompatible products."),
    seed("business-container-egress-occupancy", "Egress and occupancy limits for modified containers", "Egress and occupancy", "compliance", "Treat any workspace, office or public access use as a designed occupancy question.", "Obtain qualified design and local approval for doors, exits, electrical, ventilation, fire protection and accessibility before occupancy.", "A storage container is not an office simply because a desk fits inside."),
    seed("business-container-electrical-modifications", "Electrical and lighting modifications for business containers", "Electrical modifications", "compliance", "Plan power, lighting and penetrations as permitted professional work.", "Use qualified electrical and structural professionals, listed equipment and required permits. Protect the container weather envelope and grounding strategy.", "Extension cords and DIY cutouts are not a permanent electrical system."),
    seed("own-vs-offsite-business-storage", "Own a container vs rent off-site storage", "Own vs off-site", "economics", "Compare access time, repeated handling, monthly expense, delivery and future value.", "Model the complete workflow and cost over the expected period. On-site ownership can be attractive when access is frequent and the property supports long-term placement.", "Do not ignore permitting, site work, insurance or the value of staff time."),
    seed("multi-location-container-standard", "Standardize container storage across multiple locations", "Multi-location standard", "economics", "Create repeatable size, labeling, security and inspection rules across branches.", "Define a common operating standard, then allow site-specific exceptions for access, climate and local approval.", "A single physical layout will not fit every lot or delivery route."),
    seed("business-surge-capacity-plan", "Use containers for business surge capacity", "Surge capacity", "economics", "Prepare for seasonal demand, remodels, acquisitions or delayed warehouse expansion.", "Set a start trigger, approved contents, responsible owner and exit date before surge stock arrives.", "Temporary overflow tends to become permanent when no exit rule exists."),
    seed("business-container-resale-repurpose", "Resell or repurpose a business container", "Resale and repurpose", "economics", "Preserve options by documenting condition, modifications and movement requirements.", "Use qualified carriers, disclose alterations and check approvals before changing the use or location.", "A modified storage unit may need new review before it becomes an office, retail space or another occupied use."),
]


VEHICLES = [
    seed("vehicle-container-storage-guide", "The complete vehicle container storage guide", "Vehicle storage guide", "fit-access", "Screen fit, door clearance, site access, moisture, security and preservation before buying.", "Measure the exact vehicle and exact container, including door opening and human exit space. Then plan the site and preservation routine around the vehicle manufacturer guidance.", "A car fitting through the opening does not prove the driver can exit or the vehicle can be serviced."),
    seed("20ft-container-car-fit", "Will a car fit in a 20FT shipping container?", "20FT car fit", "fit-access", "Check the narrowest width, mirrors, height, approach, driver exit and door hardware.", "Some compact vehicles fit dimensionally, but usable clearance can be tight. Verify the exact unit, vehicle and loading method before purchase.", "Use measured clearances, not vehicle class names or nominal container dimensions."),
    seed("40ft-container-multiple-vehicles", "Plan a 40FT container for vehicles and recreation", "40FT vehicle layout", "fit-access", "Evaluate whether added length improves access, separation and seasonal gear storage.", "A 40FT unit adds nominal floor area, but a single short-end door can still limit independent access. Design the retrieval sequence before loading.", "Longer does not solve narrow access or blocked vehicles."),
    seed("vehicle-container-door-clearance", "Door clearance and driver exit inside containers", "Door and exit clearance", "fit-access", "Plan mirrors, cargo doors, ramps and the person getting out of the vehicle.", "Measure the exact door opening, vehicle width and the side space required to exit safely. Consider qualified access modifications when standard doors are impractical.", "Never rely on a photo that hides the clearance beside the vehicle."),
    seed("vehicle-container-site-access", "Plan site access for a vehicle storage container", "Site access", "placement", "Screen delivery route, vehicle approach, turning space and daily traffic before placement.", "Plan both the delivery truck path and the vehicle loading path. Have the carrier approve the unload area and keep the finished approach stable and clear.", "A site can accept the container but still provide a poor vehicle entry angle."),
    seed("vehicle-container-level-support", "Level support for vehicle storage containers", "Level support", "placement", "Protect door operation, floor loading and vehicle movement with a site-specific support plan.", "Use stable, level support at the structural bearing points based on soil, container, vehicle and local requirements.", "Do not assume a driveway or a few blocks are adequate for every loaded condition."),
    seed("vehicle-container-ramp-planning", "Plan a safe ramp for container vehicle access", "Ramp planning", "placement", "Match slope, width, traction and load rating to the vehicle and threshold.", "Use a properly rated ramp with secure placement and adequate approach clearance. Verify low ground clearance and tire path before loading.", "Improvised boards or unrestrained ramps can shift under load."),
    seed("vehicle-container-door-orientation", "Orient container doors for vehicle loading", "Door orientation", "placement", "Position the unit around the approach, weather, workspace and future retrieval.", "Align the doors with a straight, stable loading path and preserve room for both cargo doors to open and be secured.", "A visually convenient orientation can create a difficult reverse path or blocked door swing."),
    seed("vehicle-container-condensation-control", "Control condensation around stored vehicles", "Condensation control", "preservation", "Manage wet vehicles, ground moisture, air exchange and measured humidity.", "Store the vehicle clean and dry, stop water entry, separate it from ground moisture and use ventilation or dehumidification based on measured conditions.", "A steel container can experience condensation. Desiccant alone is not a universal long-term plan."),
    seed("vehicle-container-heat-ventilation", "Heat and ventilation in vehicle containers", "Heat and ventilation", "preservation", "Screen temperature-sensitive materials, batteries, tires and finishes for the local climate.", "Follow vehicle and product manufacturer limits. Use measured temperature and humidity to decide whether insulation, ventilation or active conditioning is needed.", "A vented container is not automatically temperature-controlled."),
    seed("vehicle-battery-storage-container", "Vehicle battery care in container storage", "Battery care", "preservation", "Plan charging, disconnection and monitoring around the battery type and manufacturer guidance.", "Follow the vehicle and battery manufacturer instructions. Use qualified electrical work and do not improvise charging in an unapproved enclosed space.", "Battery chemistry, ventilation and charging equipment change the risk."),
    seed("vehicle-fuel-fire-safety-container", "Fuel and fire safety for stored vehicles", "Fuel and fire safety", "preservation", "Treat fuel, vapors, ignition sources and local fire rules as a specific approval question.", "Follow the owner manual and applicable fire and environmental rules. Never run an engine inside the container and keep ignition sources controlled.", "A steel shell does not make fuel or vapor hazards disappear."),
    seed("vehicle-container-locks", "Locks and lockboxes for vehicle containers", "Locks and lockboxes", "security", "Protect the door hardware and reduce visible attack points.", "Use compatible commercial-grade locks and a lockbox when appropriate, then add controlled keys, lighting and site visibility.", "A high-value vehicle needs layered security, not only a padlock."),
    seed("vehicle-storage-cameras-lighting", "Cameras and lighting for stored vehicles", "Cameras and lighting", "security", "Capture identification-quality coverage of the approach and container doors.", "Test the view after dark, control glare and preserve recordings according to the property security plan.", "A camera hidden by open cargo doors can miss the loading event."),
    seed("vehicle-container-key-inventory", "Key and inventory control for vehicle storage", "Key and inventory control", "security", "Track vehicle keys, parts, accessories and access to the container.", "Store keys separately when appropriate, limit access and photograph the vehicle, serials and stored accessories before closing.", "Do not leave a complete theft package, vehicle and keys, in one uncontrolled place."),
    seed("discreet-vehicle-container-placement", "Discreet placement for vehicle containers", "Discreet placement", "security", "Balance privacy with lighting, surveillance, emergency access and property approval.", "Choose a legal, observable position that does not advertise contents while keeping doors and approaches visible to authorized users.", "Hidden from everyone can also mean hidden from useful oversight."),
    seed("motorcycle-atv-container-storage", "Store motorcycles and ATVs in containers", "Motorcycles and ATVs", "recreation", "Plan floor space, stabilization, fuel, battery and gear zones for smaller vehicles.", "Measure machines and service clearances, follow manufacturer storage guidance and keep riding gear on rated shelving away from vehicle movement.", "Do not use transport tie-down assumptions as a substitute for stationary storage planning."),
    seed("bike-kayak-container-storage", "Store bicycles and kayaks in a container", "Bikes and kayaks", "recreation", "Use vertical and overhead space without creating unstable hanging loads.", "Use rated racks anchored through an approved design, keep heavy items low and protect clear access to release points.", "Do not suspend equipment from unverified thin wall panels or improvised hooks."),
    seed("trailer-camping-gear-container", "Container storage for trailers and camping gear", "Trailers and camping gear", "recreation", "Separate bulky seasonal equipment, fabrics, batteries and fuel-powered items.", "Plan each item around its manufacturer storage requirements and keep a clear retrieval order for the next trip.", "Wet tents, fuel containers and charging batteries need different controls."),
    seed("seasonal-recreation-rotation", "Rotate seasonal recreation equipment", "Seasonal rotation", "recreation", "Move summer and winter gear without burying the next season behind vehicles.", "Create front, side-rack and reserve zones tied to the calendar, then update the inventory after each rotation.", "A good fall layout may be a bad spring retrieval plan."),
    seed("side-opening-vehicle-container", "Side-opening modifications for vehicle storage", "Side-opening access", "modifications", "Evaluate whether wider access solves driver exit and independent retrieval problems.", "Use a professionally engineered and fabricated side-opening design with local approval, weather sealing and suitable door hardware.", "Cutting a long sidewall changes structure and must not be improvised."),
    seed("vehicle-container-lighting-power", "Lighting and power in vehicle containers", "Lighting and power", "modifications", "Plan safe inspection lighting and any conditioning or charging loads.", "Use qualified electrical design, permits and listed equipment. Keep cords, fixtures and panels clear of vehicle movement and moisture.", "Temporary cords are not a permanent power system."),
    seed("vehicle-container-tire-parts-racks", "Racks for tires, parts and detailing supplies", "Tire and parts racks", "modifications", "Organize dense items without overloading shelves or blocking the vehicle.", "Use appropriately rated racks, secure round items and keep chemicals in approved compatible storage outside the vehicle path.", "Heavy tires high on improvised shelves create a falling-object hazard."),
    seed("insulated-conditioned-vehicle-container", "Insulated or conditioned vehicle containers", "Insulated and conditioned", "modifications", "Decide whether the vehicle and climate justify insulation and active control.", "Start with target temperature and humidity ranges from manufacturer or preservation guidance, then have qualified professionals design the envelope and equipment.", "Insulation without moisture design can hide condensation rather than solve it."),
    seed("load-vehicle-into-container", "Load a vehicle into a shipping container", "Vehicle loading", "operations", "Create a controlled sequence for inspection, ramp, spotter, alignment and shutdown.", "Use a clear loading zone, rated equipment and a competent spotter. Follow the vehicle manual and never run the engine inside longer than required for safe positioning.", "Keep all people out of pinch points between the vehicle, doors and container walls."),
    seed("wheel-stops-stationary-storage", "Wheel stops and stabilization in stationary storage", "Stabilization", "operations", "Prevent unintended movement without confusing storage controls with transport securement.", "Follow the vehicle manual for parking and stabilization. Use appropriate wheel controls on a level surface and obtain separate professional advice for any transported load.", "Stationary storage and highway cargo securement are different tasks."),
    seed("vehicle-container-inspection", "Monthly vehicle container inspection", "Monthly inspection", "operations", "Check the unit, environment, security and vehicle condition on a repeatable schedule.", "Inspect roof, seals, supports, drainage, locks, temperature or humidity records, pests, tires and visible leaks. Correct exceptions promptly.", "A locked container should not become an unobserved container."),
    seed("vehicle-container-storm-plan", "Storm planning for vehicle containers", "Storm planning", "operations", "Review flooding, trees, windborne debris, drainage and local emergency instructions.", "Follow qualified local guidance, close and secure doors, clear drainage and move loose exterior items before conditions become unsafe.", "A container is not automatically a storm shelter or a guarantee against flood damage."),
    seed("buy-vs-rent-vehicle-storage-container", "Buy vs rent a container for vehicle storage", "Buy vs rent", "ownership", "Compare storage duration, modifications, access, site approvals and future resale.", "Buying can suit long-term on-site use and custom access when the property supports it. Compare the complete ownership scenario with rental restrictions and return costs.", "Include site work, maintenance, insurance and exit value in the model."),
    seed("vehicle-container-property-rules", "Property rules for vehicle storage containers", "Property rules", "ownership", "Confirm zoning, association, landlord, setback and fire requirements before delivery.", "Get written approval for the location, duration, appearance, access and intended contents from the relevant decision-makers.", "Owning the property does not remove every local rule."),
    seed("vehicle-container-insurance-records", "Insurance and documentation for stored vehicles", "Insurance and records", "ownership", "Confirm how the vehicle, container and stored parts are covered.", "Ask the insurer about location, storage conditions, modifications and security. Keep current photos, serials and inventories outside the unit.", "Container ownership does not automatically extend vehicle or property coverage."),
    seed("vehicle-container-resale-repurpose", "Resell or repurpose a vehicle storage container", "Resale and repurpose", "ownership", "Preserve flexibility by documenting condition, modifications and movement requirements.", "Use a qualified carrier, disclose alterations and seek new approval before changing to an occupied or materially different use.", "A side-opening or conditioned unit may have a different market and transport plan than a standard unit."),
]


CONFIG = {
    "farm": {
        "name": "Farm & Ranch",
        "shortName": "Farm",
        "context": "farm and ranch storage",
        "hubTitle": "Farm container answers built around real work, real ground and real contents.",
        "hubLead": "Plan the unit, delivery, storage routine and product boundaries before the truck enters the property.",
        "heroImage": "/authentic/farm-hero-v2.webp",
        "heroAlt": "Used 20 foot shipping container beside a working barn with farm tools, bagged supplies and a tractor",
        "featureImages": ["/authentic/farm-hero-v2.webp", "/farm-feed-storage-v2.png", "/farm-seasonal-equipment-v2.png"],
        "featureAlts": ["Farm container beside a barn", "Farm supplies organized in a container beside a barn", "Tools and seasonal farm equipment stored through standard cargo doors"],
        "categories": [("buying", "Buying"), ("placement", "Site & Delivery"), ("equipment", "Equipment"), ("inputs", "Feed & Supplies"), ("safety", "Product Boundaries"), ("security", "Security"), ("compliance", "Approvals"), ("operations", "Operations")],
        "sources": [SOURCES["container_specs"], SOURCES["osha_storage"], SOURCES["epa_pesticides"], SOURCES["epa_containers"]],
        "guides": FARM,
        "safetyGates": [
            ["Product label", "Controls pesticide, fertilizer, medicine and other labeled-product storage."],
            ["Site and carrier", "Confirm ground, access, unload method, utilities and final orientation."],
            ["Local authority", "Confirms permits, setbacks, fire access and environmental rules."],
            ["Qualified design", "Controls structural cuts, foundations, electrical work and occupied use."],
            ["Measured conditions", "Drive moisture and temperature decisions for sensitive contents."],
        ],
    },
    "business": {
        "name": "Business Overflow",
        "shortName": "Business",
        "context": "business overflow storage",
        "hubTitle": "Turn overflow space into controlled business capacity.",
        "hubLead": "Choose, place and operate a container so inventory stays visible, reachable and accountable.",
        "heroImage": "/authentic/business-hero-v2.webp",
        "heroAlt": "Real restaurant employee moving supplies into a used shipping container beside the business",
        "featureImages": ["/authentic/business-hero-v2.webp", "/business-warehouse-overflow-v2.png", "/business-retail-overflow-v2.png"],
        "featureAlts": ["Restaurant overflow container in daily use", "Warehouse overflow in a container beside receiving", "Retail and restaurant seasonal stock organized in a container"],
        "categories": [("buying", "Buying"), ("placement", "Site & Delivery"), ("inventory", "Inventory"), ("operations", "Operations"), ("climate", "Content Protection"), ("security", "Security"), ("compliance", "Compliance"), ("economics", "Ownership")],
        "sources": [SOURCES["container_specs"], SOURCES["osha_storage"]],
        "guides": BUSINESS,
        "safetyGates": [
            ["Property approval", "Confirms landlord, zoning, fire-lane and site requirements."],
            ["Workplace rules", "Control aisles, stacking, handling, access and employee safety."],
            ["Content requirements", "Control food, records, electronics, chemicals and sensitive inventory."],
            ["Qualified design", "Controls structural cuts, electrical work, occupancy and egress."],
            ["Inventory ownership", "Keeps overflow inside the receiving, count and replenishment system."],
        ],
    },
    "vehicles": {
        "name": "Vehicles & Recreation",
        "shortName": "Vehicles",
        "context": "vehicle and recreation storage",
        "hubTitle": "Measure the fit. Protect the vehicle. Keep access usable.",
        "hubLead": "Plan dimensions, loading, moisture, security and long-term ownership before storing a vehicle in steel.",
        "heroImage": "/authentic/vehicles-hero-v2.webp",
        "heroAlt": "Compact roadster stored inside a used 20 foot shipping container beside a rural workshop",
        "featureImages": ["/authentic/vehicles-hero-v2.webp", "/vehicles-feature.png", "/inventory-v2/vehicles-40ft-recreation.jpg"],
        "featureAlts": ["Compact car in a 20 foot container", "Classic car and motorcycle organized inside a container", "ATV bicycles and kayaks organized in a 40 foot container"],
        "categories": [("fit-access", "Fit & Access"), ("placement", "Site & Delivery"), ("preservation", "Preservation"), ("security", "Security"), ("recreation", "Recreation Gear"), ("modifications", "Modifications"), ("operations", "Operations"), ("ownership", "Ownership")],
        "sources": [SOURCES["container_specs"], SOURCES["nhtsa_loads"], SOURCES["osha_storage"]],
        "guides": VEHICLES,
        "safetyGates": [
            ["Exact dimensions", "Control vehicle fit, door opening, mirror clearance and driver exit."],
            ["Manufacturer guidance", "Controls battery, fuel, tire and long-term preservation decisions."],
            ["Site and carrier", "Confirm supports, delivery route, ramp and loading approach."],
            ["Qualified design", "Controls side openings, electrical work, conditioning and rated racks."],
            ["Separate transport plan", "Loaded movement and highway securement are not stationary storage."],
        ],
    },
}


CATEGORY_DEFAULTS = {
    "buying": ("Define the intended use and delivery site before comparing inventory.", "Buying on depot price alone and discovering that delivery or condition does not fit."),
    "placement": ("Verify the full route, final position and working clearances with the carrier.", "Planning only the steel footprint and missing the truck, doors or daily approach."),
    "equipment": ("Measure the exact equipment, opening and retrieval path before loading.", "Assuming nominal square footage proves physical fit or safe handling."),
    "inputs": ("Follow product packaging and environmental requirements, then monitor conditions.", "Treating a plain steel container as automatic climate or pest control."),
    "safety": ("Follow labels, safety data sheets and current rules for each product.", "Mixing incompatible materials or using general advice as approval."),
    "security": ("Layer placement, hardware, access control, lighting and closeout.", "Relying on one lock without checking the rest of the door and access system."),
    "compliance": ("Identify the authority and obtain required approval before delivery or modification.", "Assuming temporary, agricultural or owned-property use is automatically exempt."),
    "operations": ("Assign an owner, a repeatable routine and a recorded correction process.", "Letting overflow or seasonal storage operate without inspection and accountability."),
    "inventory": ("Keep clear aisles, stable stacks, fixed locations and accurate counts.", "Filling every cubic foot until inventory cannot be safely reached."),
    "climate": ("Match temperature and humidity control to measured conditions and content limits.", "Using insulation, vents or desiccant as an unmeasured universal fix."),
    "economics": ("Compare the complete ownership workflow, costs and exit options.", "Ignoring site work, staff time, insurance, maintenance or resale."),
    "fit-access": ("Measure the exact vehicle, exact opening and usable human clearance.", "Checking only vehicle length and overlooking width, mirrors, ramp and driver exit."),
    "preservation": ("Follow vehicle and component manufacturer guidance and monitor the environment.", "Assuming a locked steel box automatically preserves a vehicle."),
    "recreation": ("Zone each item by weight, frequency and manufacturer storage guidance.", "Mixing wet gear, fuel-powered equipment and sensitive items without controls."),
    "modifications": ("Use qualified design, fabrication and permitting for structural or electrical work.", "Cutting sidewalls or adding permanent power without professional review."),
    "ownership": ("Confirm property, insurance, maintenance and future move requirements.", "Buying before the site, coverage and exit path are known."),
}


def expand_guide(vertical_key, config, item):
    practice, mistake = CATEGORY_DEFAULTS[item["category"]]
    source_list = config["sources"]
    checklist = [
        "Write the intended contents and retrieval frequency.",
        "Measure the exact unit, contents and access route.",
        "Confirm property, carrier and local requirements.",
        "Record the responsible owner and inspection routine.",
        "Keep incompatible or unapproved contents out.",
        "Get the delivered scope and exceptions in writing.",
    ]
    questions = [
        {
            "q": f"What is the first decision in {item['navTitle'].lower()}?",
            "a": item["quickAnswer"],
        },
        {
            "q": f"What should be verified before acting on {item['navTitle'].lower()}?",
            "a": f"Verify the exact container, contents, site and intended workflow. {practice}",
        },
        {
            "q": f"When should a qualified specialist review {item['navTitle'].lower()}?",
            "a": "Use qualified review whenever the decision affects structure, electrical work, fire safety, hazardous or sensitive contents, foundations, transport, occupancy or a rule controlled by a local authority.",
        },
    ]
    return {
        **{key: value for key, value in item.items() if key != "specificNote"},
        "fieldNotes": [item["specificNote"], practice, "Confirm the exact unit and current site conditions before committing.", "Photograph measurements, access and exceptions so the quote and delivery team see the same plan."],
        "checklist": checklist,
        "mistakes": [mistake, "Using a generic online answer as approval for the exact site or contents.", "Failing to assign an owner for inspection, access and corrections after delivery."],
        "table": {
            "headers": ["Decision", "Verify", "Why it matters"],
            "rows": [
                ["Contents", "Dimensions, weight, sensitivity and compatibility", "Controls size, layout and environmental needs"],
                ["Site", "Route, ground, drainage and working clearance", "Controls delivery and daily usability"],
                ["Operation", "Access, retrieval, inspection and security", "Controls whether storage saves time"],
            ],
        },
        "faq": questions,
        "sources": source_list,
    }


def make_questions(config, guides):
    questions = []
    category_names = dict(config["categories"])
    counter = 1
    for guide in guides:
        for faq in guide["faq"]:
            questions.append({
                "id": counter,
                "category": category_names[guide["category"]],
                "question": faq["q"],
                "answer": faq["a"],
                "guideSlug": guide["slug"],
                "guideTitle": guide["navTitle"],
            })
            counter += 1
    overview = [
        ("Buying", f"How do I get a delivered price for {config['context']}?", "Send the delivery ZIP, intended use, likely size and site notes. The written quote should state the unit or grade, delivery scope and key access assumptions."),
        ("Site & Delivery", "Can a photo replace a carrier site review?", "No. Photos and measurements help screen the route, but the carrier controls the delivery equipment, unload method and safe work zone."),
        ("Approvals", "Does this question library approve my exact site or use?", "No. It is a planning resource. The property decision-maker, carrier, authority having jurisdiction and qualified professionals control the exact site and work."),
        ("Operations", "What should happen after the container is delivered?", "Record condition, confirm doors and locks, load according to the plan, assign an inspection owner and correct water, support, security or access issues promptly."),
    ]
    for category, question, answer in overview:
        questions.append({"id": counter, "category": category, "question": question, "answer": answer, "guideSlug": guides[0]["slug"], "guideTitle": guides[0]["navTitle"]})
        counter += 1
    assert len(questions) == 100
    return questions


def build():
    data = {"verticals": {}}
    for key, config in CONFIG.items():
        guides = [expand_guide(key, config, item) for item in config["guides"]]
        assert len(guides) == 32
        categories = [{"key": key_, "name": name} for key_, name in config["categories"]]
        downloads = [
            {"label": f"{config['shortName']} container buyer handbook", "href": f"/downloads/ucd-{key}-container-buyer-handbook.pdf", "description": "Buying framework, size screen, delivered-scope questions and approval gates."},
            {"label": f"{config['shortName']} delivery and site checklist", "href": f"/downloads/ucd-{key}-delivery-site-checklist.pdf", "description": "Printable route, ground, clearance and placement review."},
            {"label": f"{config['shortName']} operations inspection pack", "href": f"/downloads/ucd-{key}-operations-inspection-pack.pdf", "description": "Repeatable opening, loading, inspection and closeout checks."},
            {"label": f"100 {config['shortName'].lower()} container questions", "href": f"/downloads/ucd-100-{key}-container-questions.pdf", "description": "The complete direct-answer library in a shareable handbook."},
        ]
        final_config = {key_: value for key_, value in config.items() if key_ not in {"guides", "categories"}}
        final_config.update({"key": key, "categories": categories, "guides": guides, "questions": make_questions(config, guides), "downloads": downloads})
        data["verticals"][key] = final_config
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
