export interface VehicleSeoProfile {
  key: string;
  vehicleName: string;
  tagline: string;
  category: "Sedan" | "SUV / MUV" | "Tempo Traveller" | "Luxury Van";
  seatingCapacity: string;
  seatingLayout: string;
  bootSpaceLitres: string;
  luggageCapability: string;
  engineSpecs: string;
  acSystem: string;
  highwayCharacteristics: string;
  idealFor: string[];
  versusComparison: {
    heading1: string;
    text1: string;
    heading2: string;
    text2: string;
  };
  packingTips: string;
  highwayAdvice: string;
}

export const vehicleSeoProfiles: Record<string, VehicleSeoProfile> = {
  dzire: {
    key: "dzire",
    vehicleName: "Maruti Suzuki Dzire",
    tagline: "India's #1 Outstation Sedan for Fuel Efficiency, High Reliability & Executive Commuting",
    category: "Sedan",
    seatingCapacity: "4 Passengers + 1 Chauffeur",
    seatingLayout: "2 Front Ergonomic Bucket Seats + Rear Contoured Bench with Central Foldable Armrest",
    bootSpaceLitres: "378 Litres Enclosed Trunk",
    luggageCapability: "Accommodates 2 medium 24-inch trolley suitcases plus 2 soft duffles/backpacks comfortably",
    engineSpecs: "1.2L K-Series DualJet Dual VVT Engine tuned for smooth, silent highway performance",
    acSystem: "High-capacity air conditioner with dedicated rear AC console blowers for rapid cabin cooling",
    highwayCharacteristics: "Excellent 22-25 km/l highway mileage, compact footprint for easy city maneuvering, smooth high-speed damping",
    idealFor: [
      "Solo business executives & corporate day-commutes",
      "Couples & nuclear families with 1-2 young children",
      "Direct airport drop & pickup transfers with timed flight connections",
      "Economical weekend outstation getaways within 400 km radius",
    ],
    versusComparison: {
      heading1: "Why choose Dzire over a Hatchback (WagonR / Swift)?",
      text1:
        "The Dzire provides a completely separate, lockable 378L rear boot. Your luggage stays secure and out of the cabin, leaving passengers with uncompromised knee and leg clearance on long highway stretches.",
      heading2: "Why choose Dzire over a compact SUV?",
      text2:
        "Dzire delivers 30% to 40% lower overall travel expense compared to SUVs, with zero compromise on air-conditioned ride comfort, suspension stability, and expressway cruising speed.",
    },
    packingTips:
      "For a party of 4 in a Dzire, prefer medium trolley suitcases (up to 24 inches) paired with flexible duffle bags. Soft luggage stacks neatly around the wheel arches inside the 378L boot.",
    highwayAdvice:
      "Plan early morning departures (around 5:30 AM to 6:30 AM) to clear city bypasses before commercial freight traffic builds up. The Dzire cruises effortlessly at 90-100 km/h on expressways.",
  },

  amaze: {
    key: "amaze",
    vehicleName: "Honda Amaze",
    tagline: "Japanese Cabin Refinement, Class-Leading Rear Legroom & Deep 420-Litre Boot Space",
    category: "Sedan",
    seatingCapacity: "4 Passengers + 1 Chauffeur",
    seatingLayout: "Dual-tone executive fabric seats with extended under-thigh support and generous rear knee clearance",
    bootSpaceLitres: "420 Litres Deep Trunk",
    luggageCapability: "Fits 2 large 26-inch trolley bags + 2 medium cabin bags + laptop backpacks with ease",
    engineSpecs: "1.2L i-VTEC 4-Cylinder Petrol Engine with linear acceleration and whisper-quiet idling",
    acSystem: "Automatic climate control unit with rapid cabin pull-down and integrated micro-particle filter",
    highwayCharacteristics: "Rigid chassis construction providing solid high-speed stability, compliant suspension over expansion joints",
    idealFor: [
      "Corporate business transfers requiring a quiet cabin for work & calls",
      "Family road trips with elders who need easy seat ingress and plush thigh support",
      "Wedding guest transfers and intercity family visits",
      "Doorstep outstation trips where boot luggage space is a prime priority",
    ],
    versusComparison: {
      heading1: "Why choose Honda Amaze over other compact sedans?",
      text1:
        "The Amaze boasts a significantly larger 420-litre boot aperture with a low loading lip, making it much easier to load heavy luggage. Rear passenger knee-room is also notably superior for tall riders.",
      heading2: "Why choose Honda Amaze for corporate highway travel?",
      text2:
        "Honda's i-VTEC engine dampens vibration and tire hum, creating an ultra-quiet cabin environment so passengers can attend conference calls or work on laptops without fatigue.",
    },
    packingTips:
      "The deep 420L boot accepts two full-size suitcases laid flat, leaving ample room on top for laptop bags, snack cartons, and shopping bags.",
    highwayAdvice:
      "On high-speed expressways, the Amaze's wide track width ensures zero body twitch when overtaking heavy transport vehicles, ensuring a calm, fatigue-free passenger journey.",
  },

  etios: {
    key: "etios",
    vehicleName: "Toyota Etios",
    tagline: "The Uncontested Highway Legend: Colossal 592-Litre Trunk & True 3-Adult Rear Seat Width",
    category: "Sedan",
    seatingCapacity: "4-5 Passengers + 1 Chauffeur",
    seatingLayout: "Wide, flat rear passenger bench designed with zero center hump, seating 3 adults abreast comfortably",
    bootSpaceLitres: "592 Litres Massive Boot (Largest in its Segment)",
    luggageCapability: "Easily swallows 3 large 28-inch international suitcases plus multiple cabin bags and cartons",
    engineSpecs: "Time-tested 1.5L Petrol / 1.4L D-4D Diesel engine built for extreme mileage durability",
    acSystem: "Extra-cooling compressor unit developed specifically to tackle peak 46°C North Indian summers",
    highwayCharacteristics: "174mm high ground clearance, heavy-duty suspension that absorbs potholes without jarring occupants",
    idealFor: [
      "International airport transfers with oversized heavy suitcases",
      "Long-distance family tours with 3 adults seated comfortably in the rear row",
      "Routes with mixed expressway and rural state highway road conditions",
      "Multi-day touring where luggage volume is substantial and non-negotiable",
    ],
    versusComparison: {
      heading1: "Why choose Toyota Etios for heavy-luggage travel?",
      text1:
        "At 592 litres, the Etios trunk is nearly 60% larger than other sub-compact sedans. It rivals large luxury SUVs in boot storage, allowing international-size bags to fit completely out of sight.",
      heading2: "Why choose Etios for 3 rear passengers?",
      text2:
        "Unlike modern coupe-style sedans that pinch shoulder room, the Etios features a wide rectangular cabin with a flat floorboard so three adults can travel hundreds of kilometers without cramping.",
    },
    packingTips:
      "Stack heavy international trolley cases vertically or side-by-side in the deep boot well. Even after packing 3 large bags, the Etios still has room for cartons and gifts.",
    highwayAdvice:
      "The Etios's high ground clearance means you never have to worry about scrapes on uneven rural diversions or poorly designed speed bumps outside expressway toll gates.",
  },

  "sedan-taxi": {
    key: "sedan-taxi",
    vehicleName: "Prime Sedan Taxi",
    tagline: "Executive Air-Conditioned Comfort with Guaranteed Commercial Chauffeur at Lowest Outstation Rates",
    category: "Sedan",
    seatingCapacity: "4 Passengers + 1 Chauffeur",
    seatingLayout: "Commercial tourist-class 4-door sedan with clean upholstery, seat belts for all, and rear headrests",
    bootSpaceLitres: "400+ Litres Enclosed Rear Trunk",
    luggageCapability: "Accommodates 2 large suitcases plus 2-3 soft backpacks in the dedicated locked boot",
    engineSpecs: "BS6 compliant, commercially licensed engine with GPS monitoring and speed governance",
    acSystem: "100% chilled air conditioning active for the entirety of the trip with zero AC surcharge",
    highwayCharacteristics: "Fast-tag enabled for seamless toll plaza crossings; driven by experienced expressway chauffeurs",
    idealFor: [
      "Intercity outstation drop and round trips at the most economical per-km tariff",
      "Emergency outstation travel where prompt doorstep vehicle arrival is critical",
      "Doctor visits, corporate client meetings, and hospital transfers",
      "Families seeking a private, sanitized cabin alternative to crowded public transport",
    ],
    versusComparison: {
      heading1: "Why choose Prime Sedan over public buses or trains?",
      text1:
        "Prime Sedan offers direct doorstep pickup from your residential sector and drops you right at your destination door. No lugging bags across railway bridges or waiting on crowded platforms.",
      heading2: "Why choose NoidaCab Prime Sedan over ride-hailing apps?",
      text2:
        "No peak surge pricing, guaranteed driver allocation with verified commercial permits, and an all-inclusive transparent fare quote with zero return travel penalties.",
    },
    packingTips:
      "Keep daily medicines, water bottles, and electronics in the cabin with you, while placing all heavy suitcases in the secure rear boot.",
    highwayAdvice:
      "Our chauffeurs know all the reputable food courts and fuel stations along major national expressways, guaranteeing hygienic family rest stops.",
  },

  ertiga: {
    key: "ertiga",
    vehicleName: "Maruti Suzuki Ertiga",
    tagline: "India's Best-Selling 6-7 Seater Family MPV: Smart Hybrid Efficiency & Flexible Cabin Space",
    category: "SUV / MUV",
    seatingCapacity: "6-7 Passengers + 1 Chauffeur",
    seatingLayout: "3-Row Modular Layout: 2 Front Seats, Sliding 2nd-Row Bench, and 50:50 Split Reclining 3rd-Row",
    bootSpaceLitres: "209 Litres (Expandable to 550+ Litres with 3rd row folded)",
    luggageCapability: "Carries 2-3 medium bags with all seats up, or 5-6 large suitcases with 3rd-row partially folded",
    engineSpecs: "1.5L K15C Smart Hybrid Petrol Engine delivering smooth torque and refined highway cruising",
    acSystem: "Dual air conditioning system with dedicated roof-mounted blowers and independent 4-speed regulator",
    highwayCharacteristics: "Car-like monocoque handling, tall roofline with excellent headroom, low step-in height for seniors",
    idealFor: [
      "Family road trips with 4 to 6 members including kids and grandparents",
      "Small pilgrimage yatras (Ayodhya, Mathura, Vrindavan, Haridwar) with extended family",
      "Airport transfers for families returning from vacations with substantial baggage",
      "Wedding party transportation keeping the entire group together in one vehicle",
    ],
    versusComparison: {
      heading1: "Why choose Ertiga over hiring two small sedans?",
      text1:
        "Booking a single Ertiga is 35% to 45% cheaper than booking two separate sedans. More importantly, the whole family travels together, enjoying snacks, music, and conversation without split logistics.",
      heading2: "Why choose Ertiga over an Innova Crysta?",
      text2:
        "Ertiga provides 6-seater capability at a 25% lower per-kilometer tariff, making it the most cost-effective choice for budget-conscious family outings.",
    },
    packingTips:
      "When traveling with 5 passengers, fold down one half of the 50:50 third row to create a cavernous luggage bay while retaining comfortable seating for everyone.",
    highwayAdvice:
      "The Ertiga's dual roof AC blowers ensure that passengers in the third row stay just as chilled as those in the front, even during scorching midday highway drives.",
  },

  "innova-crysta": {
    key: "innova-crysta",
    vehicleName: "Toyota Innova Crysta",
    tagline: "The Undisputed King of Long-Distance Highways: Supreme Captain Seats, Heavy-Duty Chassis & Power",
    category: "SUV / MUV",
    seatingCapacity: "6-7 Passengers + 1 Chauffeur",
    seatingLayout: "VIP 7-Seater Layout featuring 2 Luxurious Middle Captain Recliners with Armrests & Sliding Rails",
    bootSpaceLitres: "300 Litres behind 3rd row (Expandable to 750+ Litres; Roof Luggage Carrier available)",
    luggageCapability: "Swallows 3-4 trolley bags in the rear hold; rooftop waterproof carrier accommodates 5+ large bags",
    engineSpecs: "Legendary 2.4L GD Diesel Engine producing 343 Nm torque with effortless expressway overtaking power",
    acSystem: "Triple-zone automatic digital climate control with individual roof AC louvers for each passenger seat",
    highwayCharacteristics: "Heavy-duty ladder-frame chassis with coil spring rear suspension that glides over potholes and bridge gaps",
    idealFor: [
      "VIP corporate delegacies, high-level business executives, and visiting clients",
      "Luxury long-distance tours (Jaipur, Agra, Dehradun, Lucknow, Chandigarh)",
      "Elderly passengers who require captain-seat posture support and vibration-free travel",
      "High-mileage road journeys exceeding 300 km where passenger fatigue must be zero",
    ],
    versusComparison: {
      heading1: "Why choose Innova Crysta over other 7-seaters?",
      text1:
        "The Innova Crysta is in a league of its own for high-speed stability, heavy cabin soundproofing, and ride plushness. Its 2.4L diesel powertrain ensures no strain even when climbing flyovers fully loaded with AC running on max.",
      heading2: "Why is Innova Crysta preferred for VIP and family road trips?",
      text2:
        "The individual captain seats in the second row allow occupants to recline back with dedicated armrests, reading lights, and smartphone chargers, delivering business-class flight comfort on the highway.",
    },
    packingTips:
      "With 5-6 passengers, standard luggage fits in the deep rear floor cavity. For wedding groups with bulky trunks, request our optional waterproof roof luggage carrier during booking.",
    highwayAdvice:
      "The Innova Crysta's superior road dampening eliminates highway fatigue, allowing you to reach your destination completely refreshed and ready for meetings or sightseeing.",
  },

  "suv-taxi": {
    key: "suv-taxi",
    vehicleName: "Prime SUV Taxi (Ertiga & Innova Crysta)",
    tagline: "Spacious 6-7 Seater Outstation SUV Cabs for Families, Airport Transfers & Long Highway Corridors",
    category: "SUV / MUV",
    seatingCapacity: "6-7 Passengers + 1 Chauffeur",
    seatingLayout: "Flexible 3-Row Seating (Maruti Ertiga 6-Seater & Toyota Innova Crysta 7-Seater Captain Seat Options)",
    bootSpaceLitres: "300 - 550 Litres (Expandable with 3rd Row Fold; Roof Luggage Carrier available)",
    luggageCapability: "Accommodates 4-5 large trolley suitcases plus duffle bags; rooftop waterproof luggage carrier on request",
    engineSpecs: "High-torque Petrol Smart Hybrid & Diesel powertrains delivering stable 100 km/h expressway cruising",
    acSystem: "Dual-zone & triple-zone high-output air conditioning with dedicated roof-mounted blower vents for 2nd & 3rd rows",
    highwayCharacteristics: "Superior ground clearance, heavy-duty suspension soaking up expressway expansion joints and rural bumps",
    idealFor: [
      "Family vacations & joint family outstation road trips (4 to 7 passengers)",
      "Direct airport drop & pickup transfers with multiple large trolley bags",
      "Executive group travel, site visits & corporate intercity commuting",
      "Hill station & pilgrimage tours across Uttarakhand, Haryana, Punjab & Rajasthan",
    ],
    versusComparison: {
      heading1: "Why book an SUV taxi instead of two separate sedans?",
      text1:
        "Booking a single 6 or 7 seater SUV taxi saves up to 40% on fuel, toll taxes, and driver allowance compared to hiring two separate sedans. Your entire family or travel group stays together in one car.",
      heading2: "What is the difference between Ertiga and Innova Crysta SUV taxis?",
      text2:
        "The Maruti Ertiga (starting @ ₹13/km) is the most economical 6-seater SUV option for family budget travel. The Toyota Innova Crysta (starting @ ₹18/km) offers premium captain seat luxury, heavy sound isolation, and maximum long-distance ride plushness.",
    },
    packingTips:
      "When traveling with 5-6 passengers, you can fold one or two seats in the 3rd row to expand trunk volume. If you have full 7 passengers with heavy luggage, ask for an SUV with a rooftop luggage carrier during booking.",
    highwayAdvice:
      "SUV cabs offer higher driving visibility and higher road clearance, making them the safest and most comfortable choice for long expressway journeys and interstate highway trips.",
  },

  "12-seater-tempo-traveller": {
    key: "12-seater-tempo-traveller",
    vehicleName: "12 Seater Tempo Traveller",
    tagline: "Spacious 2x1 Pushback Luxury Seating for Extended Family Tours & Corporate Group Offsites",
    category: "Tempo Traveller",
    seatingCapacity: "12 Passengers + 1 Commercial Chauffeur",
    seatingLayout: "Comfortable 1x2 or 2x1 Pushback Bucket Seats with ample legroom, central aisle, and footrests",
    bootSpaceLitres: "Dedicated Large Rear Luggage Compartment + Overhead Parcel Racks",
    luggageCapability: "Accommodates 10-12 medium trolley bags in the rear compartment plus personal bags overhead",
    engineSpecs: "Mercedes-derived 2.6L FM CRDI Turbo Diesel Engine engineered for reliable long-haul highway pull",
    acSystem: "High-tonnage dual-compressor roof AC unit ensuring uniform 20°C chill throughout the 12-seat cabin",
    highwayCharacteristics: "Wide track stability, panoramic oversized side windows, high seating elevation for scenic highway views",
    idealFor: [
      "Joint family holiday tours to Agra, Jaipur, Rishikesh, Mathura, and Nainital",
      "Corporate project teams traveling together for workshops or site inspections",
      "Marriage party guest shuttles between hotels and banquet venues",
      "Group airport transfers with synchronized flight schedules",
    ],
    versusComparison: {
      heading1: "Why hire one 12-seater Tempo Traveller instead of 3 sedans?",
      text1:
        "A 12-seater Tempo cuts your total toll, parking, and driver expenses by nearly half compared to three separate cars. Everyone stays together, sings, chats, and shares the journey without fragmented convoy delays.",
      heading2: "Why choose a 12-seater Tempo over a regular bus?",
      text2:
        "Tempo Travellers enjoy passenger car speed clearances on expressways and can navigate narrow city lanes, hotel driveways, and temple gates where large 40-seater buses cannot enter.",
    },
    packingTips:
      "Stack all large trolley bags and hard suitcases inside the dedicated rear cargo door. Keep jackets, dry snacks, and laptop bags in the overhead cabin racks.",
    highwayAdvice:
      "Our Tempo Traveller drivers carry national all-India commercial permits and FASTag, guaranteeing swift interstate border and toll gate clearances.",
  },

  "16-seater-tempo-traveller": {
    key: "16-seater-tempo-traveller",
    vehicleName: "16 Seater Tempo Traveller",
    tagline: "High-Capacity Group Touring Workhorse for Wedding Baraats, Pilgrimage Yatras & Delegations",
    category: "Tempo Traveller",
    seatingCapacity: "16 Passengers + 1 Chauffeur",
    seatingLayout: "Spacious 2x1 Aisle Configuration with Reclining Seats, Armrests, and 6.2 ft Interior Standing Height",
    bootSpaceLitres: "Heavy-Duty Rear Luggage Bay + Sturdy Rooftop Carrier with Waterproof Tarpaulin",
    luggageCapability: "Accommodates 14-16 suitcases in the rear hold and exterior roof carrier",
    engineSpecs: "2.6L Turbocharged Intercooled Diesel Engine built to haul full passenger loads effortlessly",
    acSystem: "Industrial-grade dual cooling blowers with individual directional vents and individual reading lamps",
    highwayCharacteristics: "Heavy-duty parabolic suspension tuned to smooth out highway irregularities under full payload",
    idealFor: [
      "Wedding baraat and guest conveyance between cities and marriage resorts",
      "Large family pilgrimage yatras (Kashi Vishwanath, Ayodhya Dham, Chardham Yatra)",
      "College reunions and alumni group excursions to hill stations",
      "Factory visits and corporate delegation transfers across industrial corridors",
    ],
    versusComparison: {
      heading1: "Why choose a 16-seater Tempo Traveller over 4 cars?",
      text1:
        "Booking 4 cabs creates severe convoy coordination chaos—different cars get separated at toll gates or traffic signals. A 16-seater keeps your entire delegation united on a synchronized schedule.",
      heading2: "Why choose NoidaCab for your 16-seater rental?",
      text2:
        "All our 16-seater vehicles undergo comprehensive mechanical checks prior to dispatch, with fully functioning AC, spotless seat covers, and certified interstate chauffeurs.",
    },
    packingTips:
      "Heavier suitcases and wedding apparel trunks are securely loaded onto the rooftop carrier and lashed down with waterproof covers, keeping the rear boot free for daily access items.",
    highwayAdvice:
      "Enjoy full schedule flexibility: stop at your choice of highway food plazas for meals, morning tea, or photo opportunities without rushing.",
  },

  "20-seater-tempo-traveller": {
    key: "20-seater-tempo-traveller",
    vehicleName: "20 Seater Tempo Traveller",
    tagline: "Seamless Group Mobility for 20 Travelers: Mini-Coach Comfort with Private Charter Flexibility",
    category: "Tempo Traveller",
    seatingCapacity: "20 Passengers + 1 Commercial Chauffeur + 1 Co-Driver",
    seatingLayout: "Generous 2x2 Seating Layout with Wide Central Walking Aisle and High-Density Cushioned Seats",
    bootSpaceLitres: "Extended Deep Rear Luggage Cavity + Full-Length Rooftop Luggage Rack",
    luggageCapability: "Easily carries 18-20 travel bags, luggage trunks, and group equipment",
    engineSpecs: "High-torque commercial diesel engine with power steering, ABS, and speed limiter compliance",
    acSystem: "High-capacity roof-ducted air conditioning system maintaining consistent temperature front-to-back",
    highwayCharacteristics: "Heavy-duty commercial chassis with stabilized anti-roll bars for secure expressway cruising",
    idealFor: [
      "Large extended family tours, religious sanghas, and temple yatras",
      "School and college educational excursions, sports teams, and tournament tours",
      "Corporate annual general offsites and conference venue shuttling",
      "Destination wedding guest transit across North Indian tourist circuits",
    ],
    versusComparison: {
      heading1: "Why choose a 20-seater Tempo over a 35-seater bus?",
      text1:
        "A 20-seater Tempo Traveller charter is far more economical and fuel-efficient for medium groups, while also being capable of dropping passengers directly at boutique hotels where full-size buses are banned.",
      heading2: "What is the per-person cost advantage of a 20-seater?",
      text2:
        "When divided among 20 travelers, the per-person travel fare often works out cheaper than ordinary train tickets, while delivering the luxury of 100% private door-to-door transit.",
    },
    packingTips:
      "Appoint a luggage coordinator within your group. Tag bags with names for fast loading into the rear boot and rooftop carrier before departure.",
    highwayAdvice:
      "All vehicles are equipped with emergency medical first-aid boxes, commercial fire extinguishers, and verified drivers experienced in night highway navigation.",
  },

  "24-seater-tempo-traveller": {
    key: "24-seater-tempo-traveller",
    vehicleName: "24 Seater Tempo Traveller",
    tagline: "Maximum Group Capacity at Unbeatable Per-Head Economics: The Ultimate Mini-Bus Charter",
    category: "Tempo Traveller",
    seatingCapacity: "24 Passengers + 1 Chauffeur + 1 Helper",
    seatingLayout: "2x2 High-Back Ergonomic Coach Seating with Headrests and Wide Window Vista",
    bootSpaceLitres: "Jumbo Rear Cargo Bay with Double Swing Doors + Full Rooftop Luggage Carrier",
    luggageCapability: "Accommodates 24 medium bags, event props, wedding gifts, and personal backpacks",
    engineSpecs: "Heavy-duty commercial turbo-diesel engine engineered for sustained highway long-distance hauling",
    acSystem: "Industrial-grade cabin cooling unit engineered to keep the large 24-seat interior chilled even in peak summer",
    highwayCharacteristics: "Commercial long-wheelbase chassis with air-assisted brakes and speed governor set to safety standards",
    idealFor: [
      "Large marriage processions and wedding guest shuttles",
      "Corporate factory staff tours and institutional conferences",
      "Long-distance pilgrimage groups traveling across multiple holy shrines",
      "Sports teams, youth camps, and educational delegations",
    ],
    versusComparison: {
      heading1: "Why hire a 24-seater Tempo instead of 6 sedans?",
      text1:
        "Managing 6 cars means coordinating 6 different drivers, paying 6 separate toll bills, and risking lost passengers. A 24-seater ensures total unity and slashes per-head cost to the absolute minimum.",
      heading2: "How does the comfort compare to regular state transport buses?",
      text2:
        "Unlike state buses, our 24-seater features plush pushback bucket seats, clean sanitized interiors, ice-cold air conditioning, and stops only when and where your group requests.",
    },
    packingTips:
      "Load the largest suitcases into the dedicated rear luggage doors first, and utilize the full-size rooftop carrier for lightweight cartons and duffles.",
    highwayAdvice:
      "Book early during peak wedding seasons (November–February) and major festival holidays (Navratri, Diwali) to secure your preferred travel dates.",
  },

  "luxury-tempo-traveller": {
    key: "luxury-tempo-traveller",
    vehicleName: "Luxury Maharaja Tempo Traveller",
    tagline: "VIP 1x1 Ultra-Wide Maharaja Recliners, Ambient Mood Lighting & First-Class Cabin Amenities",
    category: "Tempo Traveller",
    seatingCapacity: "9-12 VIP Passengers + 1 Chauffeur",
    seatingLayout: "1x1 Ultra-Plush Maharaja Captain Recliners with Adjustable Calf Support, Side Armrests & Deep Recline",
    bootSpaceLitres: "Carpeted Rear Luggage Chamber + Concealed Overhead Compartments",
    luggageCapability: "Safely stores 10-12 large suitcases in a clean, dust-free interior cargo bay",
    engineSpecs: "Advanced vibration-damped turbo-diesel powertrain with enhanced sound insulation",
    acSystem: "Whisper-quiet dual AC system with ambient air purification and personalized reading lamps",
    highwayCharacteristics: "Air-suspension assisted ride quality, wood-finish interior trims, USB charging port at every seat, LED TV screen",
    idealFor: [
      "VIP corporate delegations, CEO board tours, and high-profile client transfers",
      "Luxury destination weddings (Jaipur, Udaipur, Agra, Jim Corbett)",
      "Foreign tourists and NRI families touring the Golden Triangle circuit",
      "High-end family vacations where comfort takes top priority over price",
    ],
    versusComparison: {
      heading1: "What sets the Maharaja Luxury Tempo apart from standard tempos?",
      text1:
        "The Maharaja edition features custom 1x1 individual recliner armchairs instead of standard benches. The cabin is lined with soft acoustic leatherette, ambient LED starlight ceiling lighting, and USB charging points at every seat.",
      heading2: "Why choose Maharaja Tempo over multiple luxury SUVs?",
      text2:
        "While luxury SUVs split your executive team across multiple cars, the Maharaja Tempo creates a shared executive lounge where executives can conduct discussions or relax together in supreme luxury.",
    },
    packingTips:
      "Our chauffeur assists with careful luggage handling. All premium suitcases stay completely protected in the sealed carpeted luggage boot.",
    highwayAdvice:
      "Uniformed, verified highway chauffeurs with extensive training in executive hospitality, safe defensive driving, and route navigation.",
  },

  "tempo-traveller": {
    key: "tempo-traveller",
    vehicleName: "Tempo Traveller Rental",
    tagline: "Complete Tempo Traveller Booking Service: Flexible 9 to 26 Seater Fleet for Any Group Size",
    category: "Tempo Traveller",
    seatingCapacity: "Available from 9, 12, 16, 20 to 26 Seater Configurations",
    seatingLayout: "Modular 1x2 and 2x2 Pushback Seating Layouts with Center Aisle and Ample Headroom",
    bootSpaceLitres: "Dedicated Rear Boot + Heavy-Duty Rooftop Carrier Racks",
    luggageCapability: "Engineered to fit 1 suitcase + 1 cabin bag per passenger across all seat configurations",
    engineSpecs: "Commercial tourist fleet certified under national transport standards with GPS speed tracking",
    acSystem: "Dual-compressor air conditioning with individual roof vents across all rows",
    highwayCharacteristics: "Proven North Indian highway capability with verified tourist permits and FASTag",
    idealFor: [
      "Any group road trip requiring synchronized departure and arrival",
      "Multi-city pilgrimage tours (Mathura, Vrindavan, Agra, Ayodhya, Haridwar)",
      "Corporate team outings, offsite workshops, and company picnics",
      "Airport group transfers for domestic and international tour groups",
    ],
    versusComparison: {
      heading1: "How do I choose the right Tempo Traveller size?",
      text1:
        "For 8-10 passengers, choose a 12-seater to have extra space. For 12-14 passengers, a 16-seater is ideal. For 18+ passengers, book a 20 or 24-seater so everyone enjoys plenty of legroom and luggage space.",
      heading2: "Are tolls, driver allowance, and state taxes included?",
      text2:
        "We offer both all-inclusive packages (tolls, state permits, parking bundled) and base per-km billing options so you can choose the billing model that best fits your group budget.",
    },
    packingTips:
      "Inform our team during booking if your group is carrying special equipment, wedding gift boxes, musical instruments, or sports gear.",
    highwayAdvice:
      "Our chauffeurs know the cleanest family dhabas with hygienic washrooms and quality food plazas along every major highway route.",
  },

  urbania: {
    key: "urbania",
    vehicleName: "Force Urbania Luxury Van",
    tagline: "Next-Gen European Monocoque Van: Mercedes-Derived Chassis, Whisper-Quiet NVH & Aircraft-Style Luxury",
    category: "Luxury Van",
    seatingCapacity: "10-17 VIP Passengers + 1 Chauffeur",
    seatingLayout: "Individual Aircraft-Style Luxury Recliners with 3-Point Seatbelts, Armrests & Dedicated USB Ports",
    bootSpaceLitres: "Massive Low-Lip Rear Luggage Bay + Aircraft-Style Overhead Closed Bins",
    luggageCapability: "Swallows 12-15 full-size international trolley bags with ease in the low-slung rear cargo hold",
    engineSpecs: "Mercedes-Derived FM 2.6L CR ED Common Rail Engine delivering smooth power and Euro-standard refinement",
    acSystem: "Individual aircraft-style louvers with independent airflow controllers and sealed climate isolation",
    highwayCharacteristics: "Monocoque chassis with independent front suspension, ESP, ABS, rollover mitigation, and zero body rattles",
    idealFor: [
      "International delegations, foreign tourists, and high-level corporate retreats",
      "Luxury multi-day tours across Rajasthan, Uttarakhand, and Himachal Pradesh",
      "High-end family vacations seeking the absolute pinnacle of passenger comfort",
      "Destination wedding transportation for discerning VIP family members",
    ],
    versusComparison: {
      heading1: "Why choose Force Urbania over a standard Tempo Traveller?",
      text1:
        "Traditional tempos use a truck-style ladder chassis that transmits road vibrations. The Urbania is built on a modern European monocoque passenger car chassis, delivering car-like suspension smoothness, whisper-quiet cabin acoustics, and zero body squeaks.",
      heading2: "What safety features does the Force Urbania offer?",
      text2:
        "The Urbania is India's safest passenger van, equipped with dual front airbags, 4-wheel disc brakes, Electronic Stability Program (ESP), ABS with EBD, rollover mitigation, and 3-point seatbelts on all passenger seats.",
    },
    packingTips:
      "The Urbania's low loading floor makes it effortless to slide heavy international suitcases into the rear bay without strenuous lifting.",
    highwayAdvice:
      "With large panoramic UV-cut glass windows and superior highway sound insulation, passengers enjoy scenic mountain and expressway vistas in complete, serene tranquility.",
  },
};

/**
 * Returns the matching VehicleSeoProfile or a sensible default based on key/category.
 */
export function getVehicleSeoProfile(vehicleSlug?: string): VehicleSeoProfile {
  if (!vehicleSlug) return vehicleSeoProfiles["sedan-taxi"];

  const clean = vehicleSlug.toLowerCase().trim();

  if (clean.includes("urbania")) return vehicleSeoProfiles["urbania"];
  if (clean.includes("luxury-tempo") || (clean.includes("luxury") && clean.includes("tempo")))
    return vehicleSeoProfiles["luxury-tempo-traveller"];
  if (clean.includes("12-seater")) return vehicleSeoProfiles["12-seater-tempo-traveller"];
  if (clean.includes("16-seater")) return vehicleSeoProfiles["16-seater-tempo-traveller"];
  if (clean.includes("20-seater")) return vehicleSeoProfiles["20-seater-tempo-traveller"];
  if (clean.includes("24-seater")) return vehicleSeoProfiles["24-seater-tempo-traveller"];
  if (clean.includes("tempo")) return vehicleSeoProfiles["tempo-traveller"];
  if (clean.includes("innova")) return vehicleSeoProfiles["innova-crysta"];
  if (clean.includes("ertiga")) return vehicleSeoProfiles["ertiga"];
  if (clean.includes("suv")) return vehicleSeoProfiles["suv-taxi"];
  if (clean.includes("dzire")) return vehicleSeoProfiles["dzire"];
  if (clean.includes("amaze")) return vehicleSeoProfiles["amaze"];
  if (clean.includes("etios")) return vehicleSeoProfiles["etios"];
  if (clean.includes("sedan")) return vehicleSeoProfiles["sedan-taxi"];

  return vehicleSeoProfiles["sedan-taxi"];
}
