import { masterRoutes, MasterRouteItem } from "./masterRoutes";
import { vehicleRules, normalizeVehicleKey, calculateStartingFare } from "./popularRoutesData";

export interface CityCabRouteItem {
  name: string;
  from: string;
  to: string;
  href: string;
  distance: string;
  duration: string;
  highway?: string;
  isPopular?: boolean;
  startingFare?: string;
  rawFare?: number;
}

export interface CityCabRouteGroup {
  region: string;
  tagline: string;
  badge: string;
  description: string;
  cities: string[];
  items: CityCabRouteItem[];
}

// -------------------------------------------------------------
// 1. Regional City Master Sets
// -------------------------------------------------------------
export const PUNJAB_CITIES: string[] = [
  "Ajnala", "Amritsar-1", "Amritsar-2", "Amritsar", "Baba Bakala", "Majitha", "Lopoke",
  "Barnala", "Mehal Kalan", "Tapa",
  "Bathinda", "Rampura Phul", "Talwandi Sabo", "Maur",
  "Faridkot", "Jaito", "Kot Kapura",
  "Amloh", "Bassi Pathana", "Fatehgarh Sahib", "Khamanon",
  "Abohar", "Fazilka", "Jalalabad",
  "Firozpur", "Guru Harsahai", "Zira",
  "Batala", "Dera Baba Nanak", "Dina Nagar", "Fatehgarh Churian", "Gurdaspur", "Kalanaur",
  "Dasua", "Garhshankar", "Hoshiarpur", "Mukerian", "Tanda",
  "Adampur", "Jalandhar-1", "Jalandhar-2", "Jalandhar", "Nakodar", "Phillaur", "Shahkot",
  "Bhulath", "Kapurthala", "Phagwara", "Sultanpur Lodhi",
  "Jagraon", "Khanna", "Ludhiana East", "Ludhiana West", "Ludhiana", "Payal", "Raikot", "Samrala",
  "Amargarh", "Ahmedgarh", "Malerkotla",
  "Budhlada", "Mansa", "Sardulgarh",
  "Bagha Purana", "Dharamkot", "Moga", "Nihal Singh Wala",
  "Dhar Kalan", "Pathankot",
  "Dudhan Sadhan", "Nabha", "Patiala", "Patran", "Rajpura", "Samana",
  "Anandpur Sahib", "Chamkaur Sahib", "Morinda", "Nangal", "Rup Nagar", "Ropar",
  "Mohali", "Dera Bassi", "Kharar", "Banur",
  "Bhawanigarh", "Dirba", "Dhuri", "Lehra", "Moonak", "Sangrur", "Sunam",
  "Balachaur", "Banga", "Nawan Shahr", "Nawanshahr",
  "Gidderbaha", "Malout", "Shri Muktsar Sahib", "Muktsar",
  "Bhikhiwind", "Khadur Sahib", "Patti", "Tarn Taran",
];

export const HARYANA_CITIES: string[] = [
  "Ambala", "Ambala Cantt", "Barara", "Naraingarh", "Shahzadpur",
  "Bhiwani", "Loharu", "Siwani", "Tosham", "Bawani Khera", "Charkhi Dadri", "Badhra",
  "Faridabad", "Ballabgarh", "Badkhal",
  "Fatehabad", "Tohana", "Ratia",
  "Gurugram", "Gurgaon", "Sohna", "Pataudi", "Manesar", "Farrukhnagar",
  "Hisar", "Hansi", "Barwala", "Narnaund", "Adampur (Haryana)", "Uklana",
  "Jhajjar", "Bahadurgarh", "Beri", "Matanhail",
  "Jind", "Narwana", "Uchana", "Safidon", "Julana",
  "Kaithal", "Pundri", "Guhla", "Kalayat",
  "Karnal", "Indri", "Gharaunda", "Assandh", "Nilokheri",
  "Kurukshetra", "Thanesar", "Pehowa", "Shahbad", "Ladwa",
  "Narnaul", "Mahendragarh", "Kanina", "Ateli", "Nangal Choudhary",
  "Nuh", "Taoru", "Ferozepur Jhirka", "Punhana",
  "Palwal", "Hodal", "Hathin",
  "Panchkula", "Kalka", "Pinjore", "Raipur Rani",
  "Panipat", "Samalkha", "Israna", "Bapoli", "Madlauda",
  "Rewari", "Bawal", "Dharuhera", "Kosli",
  "Rohtak", "Meham", "Sampla", "Kalanaur (Haryana)",
  "Sirsa", "Dabwali", "Ellenabad", "Rania", "Kalanwali",
  "Sonipat", "Gohana", "Ganaur", "Kharkhoda",
  "Yamunanagar", "Jagadhri", "Bilaspur (Haryana)", "Chhachhrauli", "Radaur",
];

export const UTTARAKHAND_CITIES: string[] = [
  "Almora", "Bagwali Pokhar", "Bhanoli", "Bhikiyasain", "Chaukhutia", "Dwarahat",
  "Jainti", "Jalali", "Lamgara", "Machhor", "Ranikhet", "Salt", "Someshwar", "Syalde",
  "Bageshwar", "Dug Nakuri", "Garur", "Kanda", "Kaphaligair", "Kapkot", "Shama",
  "Adi Badri", "Chamoli", "Gairsain", "Ghat", "Jilasu", "Joshimath", "Karnaprayag",
  "Nandaprayag", "Narayanbagar", "Pokhari", "Tharali",
  "Barakot", "Champawat", "Lohaghat", "Pati", "Purnagiri",
  "Chakrata", "Dehradun", "Doiwala", "Kalsi", "Mussoorie", "Rishikesh", "Tyuni", "Vikasnagar",
  "Bhagwanpur", "Haridwar", "Laksar", "Narsan", "Roorkee",
  "Dhari", "Haldwani", "Kaladhungi", "Kashipur", "Khatima", "Kichha", "Kotdwar", "Lalkuan", "Mukteshwar", "Nainital", "Ramnagar",
  "Chamba", "Dhanaulti", "Devprayag", "Gaja", "Ghansali", "Jakhnidhar", "Kandisaur", "Kirtinagar", "Lambgaon", "Nainbagh", "New Tehri", "Pratapnagar", "Tehri", "Thatyur",
  "Bajpur", "Gadarpur", "Jaspur", "Mahua Kheraganj", "Nanakmatta", "Rudrapur", "Sitarganj", "Sultanpur Patti",
  "Barkot", "Bhatwari", "Chinyalisaur", "Dhauntari", "Dunda", "Joshiyara", "Mori", "Purola", "Uttarkashi",
  "Badrinath", "Kedarnath", "Gangotri", "Yamunotri", "Pauri", "Srinagar (Garhwal)", "Lansdowne", "Rudraprayag", "Augustmuni", "Ukhimath", "Guptkashi", "Sonprayag", "Gaurikund",
];

export const UTTAR_PRADESH_CITIES: string[] = [
  "Agra", "Mathura", "Vrindavan", "Lucknow", "Ayodhya", "Prayagraj", "Varanasi",
  "Kanpur", "Gorakhpur", "Bareilly", "Aligarh", "Meerut", "Ghaziabad", "Moradabad",
  "Jhansi", "Muzaffarnagar", "Saharanpur", "Noida", "Greater Noida",
];

export const RAJASTHAN_CITIES: string[] = [
  "Jaipur", "Ajmer", "Pushkar", "Udaipur", "Jodhpur", "Bikaner", "Jaisalmer",
  "Alwar", "Bharatpur", "Kota", "Sawai Madhopur", "Khatu Shyam", "Salasar Balaji",
];

export const REGIONAL_METADATA: Record<string, { tagline: string; badge: string; description: string }> = {
  Punjab: {
    tagline: "Explore Punjab's Historic Cities, Gurudwaras & Vibrant Corridors",
    badge: "Punjab Highway Corridor • 98 Direct Routes",
    description: "Reliable outstation cabs, Sedans, SUVs, and luxury Tempo Travellers connecting Noida to all 23 districts in Punjab.",
  },
  Haryana: {
    tagline: "Explore Haryana's Cities & Fast Highway Corridors",
    badge: "Haryana Express Corridor • 95 Direct Routes",
    description: "Seamless outstation taxi service from Noida to all Haryana industrial hubs, commercial clusters, and heritage towns.",
  },
  Uttarakhand: {
    tagline: "Explore Uttarakhand's Hills & Sacred Circuits",
    badge: "Uttarakhand Hill & Chardham Corridor • 117 Direct Routes",
    description: "Experienced mountain chauffeurs and sanitized cabs from Noida to Dehradun, Haridwar, Rishikesh, Nainital, and Himalayan shrines.",
  },
  "Uttar Pradesh": {
    tagline: "Heritage Cities, Pilgrimages & Express Corridors",
    badge: "Uttar Pradesh Corridor • Heritage & Shrines",
    description: "Premium doorstep cabs from Noida to Agra, Mathura, Lucknow, Ayodhya, Varanasi, and Prayagraj via Yamuna & Agra Expressways.",
  },
  Rajasthan: {
    tagline: "Royal Heritage Gateways & Desert Expressways",
    badge: "Rajasthan Express Corridor",
    description: "Comfortable interstate taxi service from Noida to Jaipur, Ajmer, Pushkar, and Udaipur via Delhi-Mumbai Expressway.",
  },
};

// -------------------------------------------------------------
// 2. Helper to slugify city names
// -------------------------------------------------------------
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Normalize city strings for robust detection
function cleanCity(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// -------------------------------------------------------------
// 3. Resolve Region from City or URL
// -------------------------------------------------------------
export function getRegionByCityName(cityNameOrUrl?: string): string {
  if (!cityNameOrUrl) return "Punjab";

  const raw = cityNameOrUrl.toLowerCase().trim();
  const cleaned = cleanCity(raw);

  // Direct Keyword checks
  if (raw.includes("punjab")) return "Punjab";
  if (raw.includes("haryana")) return "Haryana";
  if (raw.includes("uttarakh") || raw.includes("uttrakh")) return "Uttarakhand";
  if (raw.includes("rajasthan")) return "Rajasthan";
  if (raw.includes("lucknow") || raw.includes("agra") || raw.includes("mathura") || raw.includes("varanasi") || raw.includes("ayodhya") || raw.includes("prayagraj")) {
    return "Uttar Pradesh";
  }

  // Punjab match
  for (const c of PUNJAB_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || cleaned.includes(cClean) || cClean.includes(cleaned)) {
      return "Punjab";
    }
  }

  // Haryana match
  for (const c of HARYANA_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || cleaned.includes(cClean) || cClean.includes(cleaned)) {
      return "Haryana";
    }
  }

  // Uttarakhand match
  for (const c of UTTARAKHAND_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || cleaned.includes(cClean) || cClean.includes(cleaned)) {
      return "Uttarakhand";
    }
  }

  // Uttar Pradesh match
  for (const c of UTTAR_PRADESH_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || cleaned.includes(cClean) || cClean.includes(cleaned)) {
      return "Uttar Pradesh";
    }
  }

  // Rajasthan match
  for (const c of RAJASTHAN_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || cleaned.includes(cClean) || cClean.includes(cleaned)) {
      return "Rajasthan";
    }
  }

  // Fallback default
  return "Punjab";
}

// -------------------------------------------------------------
// 4. Fetch Routes from masterRoutes for a Region & Vehicle
// -------------------------------------------------------------
export function getRegionalRoutesFromMaster(
  regionName: string,
  vehicleSlug: string = "taxi"
): CityCabRouteItem[] {
  let targetCities: string[] = [];

  if (regionName === "Punjab") targetCities = PUNJAB_CITIES;
  else if (regionName === "Haryana") targetCities = HARYANA_CITIES;
  else if (regionName === "Uttarakhand") targetCities = UTTARAKHAND_CITIES;
  else if (regionName === "Uttar Pradesh") targetCities = UTTAR_PRADESH_CITIES;
  else if (regionName === "Rajasthan") targetCities = RAJASTHAN_CITIES;
  else {
    targetCities = [...PUNJAB_CITIES, ...HARYANA_CITIES, ...UTTARAKHAND_CITIES];
  }

  const targetCleanSet = new Set(targetCities.map((c) => cleanCity(c)));

  // Filter from masterRoutes
  const filtered = masterRoutes.filter((r) => {
    const toClean = cleanCity(r.to);
    return targetCleanSet.has(toClean);
  });

  const vNorm = normalizeVehicleKey(vehicleSlug);

  return filtered.map((r) => {
    const numDist = typeof r.distance === "number" ? r.distance : parseInt(String(r.distance).replace(/[^0-9]/g, "")) || 200;
    const fare = calculateStartingFare(numDist, vNorm);
    const toSlug = slugify(r.to);
    const fromSlug = slugify(r.from);

    // Build specific vehicle URL
    const targetUrl =
      vehicleSlug === "taxi" || vehicleSlug === "taxi-service"
        ? `/route/${fromSlug}-to-${toSlug}-taxi`
        : `/route/${fromSlug}-to-${toSlug}-${vehicleSlug}`;

    return {
      name: `${r.from} to ${r.to} cab`,
      from: r.from,
      to: r.to,
      href: targetUrl,
      distance: typeof r.distance === "number" ? `${r.distance} km` : String(r.distance),
      duration: r.duration,
      highway: r.highway || "National Highway Expressway",
      isPopular: r.isPopular,
      startingFare: `₹${fare.toLocaleString("en-IN")}`,
      rawFare: fare,
    };
  });
}

// -------------------------------------------------------------
// 5. Pre-Built cityCabRoutesData Catalog
// -------------------------------------------------------------
export const cityCabRoutesData: CityCabRouteGroup[] = [
  {
    region: "Punjab",
    tagline: REGIONAL_METADATA["Punjab"].tagline,
    badge: REGIONAL_METADATA["Punjab"].badge,
    description: REGIONAL_METADATA["Punjab"].description,
    cities: PUNJAB_CITIES,
    items: getRegionalRoutesFromMaster("Punjab", "taxi"),
  },
  {
    region: "Haryana",
    tagline: REGIONAL_METADATA["Haryana"].tagline,
    badge: REGIONAL_METADATA["Haryana"].badge,
    description: REGIONAL_METADATA["Haryana"].description,
    cities: HARYANA_CITIES,
    items: getRegionalRoutesFromMaster("Haryana", "taxi"),
  },
  {
    region: "Uttarakhand",
    tagline: REGIONAL_METADATA["Uttarakhand"].tagline,
    badge: REGIONAL_METADATA["Uttarakhand"].badge,
    description: REGIONAL_METADATA["Uttarakhand"].description,
    cities: UTTARAKHAND_CITIES,
    items: getRegionalRoutesFromMaster("Uttarakhand", "taxi"),
  },
  {
    region: "Uttar Pradesh",
    tagline: REGIONAL_METADATA["Uttar Pradesh"].tagline,
    badge: REGIONAL_METADATA["Uttar Pradesh"].badge,
    description: REGIONAL_METADATA["Uttar Pradesh"].description,
    cities: UTTAR_PRADESH_CITIES,
    items: getRegionalRoutesFromMaster("Uttar Pradesh", "taxi"),
  },
  {
    region: "Rajasthan",
    tagline: REGIONAL_METADATA["Rajasthan"].tagline,
    badge: REGIONAL_METADATA["Rajasthan"].badge,
    description: REGIONAL_METADATA["Rajasthan"].description,
    cities: RAJASTHAN_CITIES,
    items: getRegionalRoutesFromMaster("Rajasthan", "taxi"),
  },
];
