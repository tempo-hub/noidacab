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
  "Agra", "Kiraoli", "Fatehabad", "Bah", "Etmadpur", "Khandauli",
  "Aligarh", "Khair", "Atrauli", "Iglas", "Gabhana",
  "Prayagraj", "Soraon", "Karchana", "Meja", "Phulpur", "Koraon", "Handia", "Bara",
  "Akbarpur", "Tanda", "Jalalpur", "Bhiti",
  "Amethi", "Gauriganj", "Jagdishpur", "Musafirkhana",
  "Amroha", "Hasanpur", "Dhanaura", "Naugawan Sadat",
  "Auraiya", "Bidhuna",
  "Azamgarh", "Sagri", "Mehnagar", "Nizamabad",
  "Baghpat", "Baraut", "Khekada",
  "Bahraich", "Nanpara", "Payagpur", "Mahasi",
  "Ballia", "Bansdih", "Rasra", "Belthara Road",
  "Balrampur", "Tulsipur", "Utraula",
  "Banda", "Naraini", "Atarra", "Baberu",
  "Barabanki", "Fatehpur", "Haidergarh", "Ramnagar", "Nawabganj",
  "Bareilly", "Baheri", "Aonla", "Meerganj",
  "Basti", "Harraiya", "Rudhauli", "Bhanpur",
  "Bijnor", "Najibabad", "Nagina", "Dhampur",
  "Bulandshahr", "Anupshahr", "Syana", "Khurja", "Shikarpur",
  "Chandauli", "Sakaldiha", "Chakia", "Naugarh",
  "Chitrakoot", "Karwi", "Mau", "Rajapur",
  "Deoria", "Rudrapur", "Barhaj", "Salempur",
  "Etah", "Aliganj", "Jalesar",
  "Etawah", "Jaswantnagar", "Bharthana", "Saifai",
  "Farrukhabad", "Kaimganj", "Amritpur",
  "Bindki", "Khaga", "Husainganj",
  "Firozabad", "Jasrana", "Shikohabad", "Tundla",
  "Noida", "Greater Noida", "Dadri", "Jewar", "Bisrakh",
  "Ghaziabad", "Loni", "Modinagar", "Muradnagar",
  "Ghazipur", "Zamania", "Saidpur", "Mohammadabad",
  "Gonda", "Colonelganj", "Tarabganj", "Mankapur",
  "Gorakhpur", "Campierganj", "Bansgaon", "Sahjanwa", "Khajni",
  "Hamirpur", "Rath", "Maudaha", "Sarila",
  "Hapur", "Garhmukteshwar", "Dhaulana",
  "Hardoi", "Shahabad", "Sandila", "Bilgram", "Sawayajpur",
  "Hathras", "Sadabad", "Sikandra Rao", "Sasni",
  "Jalaun", "Orai", "Kalpi", "Madhogarh",
  "Jaunpur", "Shahganj", "Machhlishahr", "Kerakat", "Badlapur",
  "Jhansi", "Mauranipur", "Garautha", "Moth",
  "Kannauj", "Tirwa", "Chhibramau",
  "Bhognipur", "Derapur", "Rasoolabad",
  "Kanpur", "Kalyanpur", "Bilhaur", "Ghatampur",
  "Kasganj", "Patiali",
  "Manjhanpur", "Sirathu", "Chail",
  "Padrauna", "Khadda", "Kaptanganj", "Hata",
  "Lakhimpur", "Palia", "Dhaurahra", "Mohammadi", "Nighasan",
  "Lalitpur", "Talbehat", "Mahroni",
  "Lucknow", "Malihabad", "Mohanlalganj", "Bakshi Ka Talab",
  "Maharajganj", "Paniyara", "Pharenda", "Nautanwa",
  "Mahoba", "Charkhari", "Kulpahar",
  "Mainpuri", "Bhongaon", "Karhal", "Ghiror",
  "Mathura", "Vrindavan", "Chhata", "Mahavan", "Govardhan",
  "Maunath Bhanjan", "Ghosi", "Muhammadabad",
  "Meerut", "Sardhana", "Mawana", "Daurala",
  "Mirzapur", "Chunar", "Lalganj", "Marihan",
  "Moradabad", "Thakurdwara", "Bilari", "Kanth",
  "Muzaffarnagar", "Jansath", "Khatauli", "Budhana",
  "Pilibhit", "Bisalpur", "Puranpur", "Kalinagar",
  "Pratapgarh", "Kunda", "Raniganj", "Patti",
  "Rae Bareli", "Salon", "Unchahar", "Dalmau",
  "Rampur", "Bilaspur", "Suar",
  "Saharanpur", "Deoband", "Nakur", "Gangoh",
  "Sambhal", "Chandausi", "Gunnaur",
  "Khalilabad", "Mehdawal", "Hariharpur",
  "Shahjahanpur", "Powayan", "Tilhar", "Jalalabad",
  "Shamli", "Thana Bhawan", "Kairana",
  "Bhinga", "Shravasti", "Ikauna",
  "Itwa", "Bansi", "Shohratgarh",
  "Sitapur", "Misrikh", "Mahmudabad", "Laharpur", "Biswan",
  "Robertsganj", "Dudhi", "Obra", "Ghorawal",
  "Sultanpur", "Kadipur", "Lambhua",
  "Unnao", "Safipur", "Purwa", "Hasanganj",
  "Varanasi", "Pindra", "Rajatalab", "Sewarai",
  "Ayodhya", "Faizabad", "Milkipur", "Rudauli", "Sohawal",
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
    badge: "Uttar Pradesh Corridor • 220+ Direct Routes",
    description: "Premium doorstep cabs from Noida to all Uttar Pradesh district headquarters and major tehsils via Yamuna, Agra-Lucknow & Purvanchal Expressways.",
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
    .replace(/^route[-_ ]+/, "")
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
  if (!cityNameOrUrl || !cityNameOrUrl.trim()) return "Uttar Pradesh";

  const raw = cityNameOrUrl.toLowerCase().trim();

  // 1. Explicit State Keyword checks
  if (
    raw.includes("uttar-pradesh") ||
    raw.includes("uttar pradesh") ||
    raw.includes("uttarpradesh") ||
    raw.includes("uttar") ||
    raw.includes("pradesh") ||
    raw === "up"
  ) {
    return "Uttar Pradesh";
  }
  if (raw.includes("punjab")) return "Punjab";
  if (raw.includes("haryana")) return "Haryana";
  if (raw.includes("uttarakh") || raw.includes("uttrakh")) return "Uttarakhand";
  if (raw.includes("rajasthan")) return "Rajasthan";

  // 2. Extract city slug from full URL or route slug if present
  let cleanSlug = raw
    .replace(/^https?:\/\/[^/]+/, "")
    .replace(/^\/route\//, "")
    .replace(/^\//, "")
    .replace(/^(taxi-service-in-|airport-service-in-|local-sightseeing-in-|taxi-fare-in-|one-way-taxi-in-|one-way-cab-in-|distance-travel-time-in-)/, "");

  if (cleanSlug.includes("-to-")) {
    const parts = cleanSlug.split("-to-");
    cleanSlug = parts[parts.length - 1];
  }

  // Strip vehicle & service suffixes from slug
  cleanSlug = cleanSlug.replace(
    /-(taxi-service|taxi-fare|distance-travel-time|one-way-taxi|contact-number|tempo-traveller|urbania-rental|luxury-tempo-traveller|urbania|innova-crysta|innova|ertiga|amaze|etios|dzire|sedan|suv|taxi|cab)$/,
    ""
  );

  const cleaned = cleanCity(cleanSlug);
  const rawCleaned = cleanCity(raw);

  // 3. Priority Exact Match against state city sets (Check UP first)
  for (const c of UTTAR_PRADESH_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || rawCleaned === cClean) {
      return "Uttar Pradesh";
    }
  }

  for (const c of PUNJAB_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || rawCleaned === cClean) {
      return "Punjab";
    }
  }

  for (const c of HARYANA_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || rawCleaned === cClean) {
      return "Haryana";
    }
  }

  for (const c of UTTARAKHAND_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || rawCleaned === cClean) {
      return "Uttarakhand";
    }
  }

  for (const c of RAJASTHAN_CITIES) {
    const cClean = cleanCity(c);
    if (cleaned === cClean || rawCleaned === cClean) {
      return "Rajasthan";
    }
  }

  // 4. Substring Match with safe boundary length (>= 4 chars to prevent false positives like 'bah', 'mau')
  if (cleaned.length >= 4) {
    for (const c of UTTAR_PRADESH_CITIES) {
      const cClean = cleanCity(c);
      if (cleaned.includes(cClean) || cClean.includes(cleaned)) {
        return "Uttar Pradesh";
      }
    }
    for (const c of PUNJAB_CITIES) {
      const cClean = cleanCity(c);
      if (cleaned.includes(cClean) || cClean.includes(cleaned)) {
        return "Punjab";
      }
    }
    for (const c of HARYANA_CITIES) {
      const cClean = cleanCity(c);
      if (cleaned.includes(cClean) || cClean.includes(cleaned)) {
        return "Haryana";
      }
    }
    for (const c of UTTARAKHAND_CITIES) {
      const cClean = cleanCity(c);
      if (cleaned.includes(cClean) || cClean.includes(cleaned)) {
        return "Uttarakhand";
      }
    }
    for (const c of RAJASTHAN_CITIES) {
      const cClean = cleanCity(c);
      if (cleaned.includes(cClean) || cClean.includes(cleaned)) {
        return "Rajasthan";
      }
    }
  }

  // Fallback default is Uttar Pradesh
  return "Uttar Pradesh";
}

// -------------------------------------------------------------
// 4. Fetch Routes from masterRoutes for a Region & Vehicle
// -------------------------------------------------------------
export function getRegionalRoutesFromMaster(
  regionName: string,
  vehicleSlug: string = "taxi"
): CityCabRouteItem[] {
  let targetCities: string[] = [];
  const norm = (regionName || "").toLowerCase().replace(/[^a-z]/g, "");

  if (norm.includes("uttar") || norm.includes("pradesh") || norm === "up") {
    targetCities = UTTAR_PRADESH_CITIES;
  } else if (norm.includes("punjab")) {
    targetCities = PUNJAB_CITIES;
  } else if (norm.includes("haryana")) {
    targetCities = HARYANA_CITIES;
  } else if (norm.includes("uttarakh") || norm.includes("uttrakh")) {
    targetCities = UTTARAKHAND_CITIES;
  } else if (norm.includes("rajasthan")) {
    targetCities = RAJASTHAN_CITIES;
  } else {
    // "All" or fallback -> include all regions with Uttar Pradesh first
    targetCities = [
      ...UTTAR_PRADESH_CITIES,
      ...PUNJAB_CITIES,
      ...HARYANA_CITIES,
      ...UTTARAKHAND_CITIES,
      ...RAJASTHAN_CITIES,
    ];
  }

  const targetCleanSet = new Set(targetCities.map((c) => cleanCity(c)));

  // Filter from masterRoutes and deduplicate
  const seenPairs = new Set<string>();
  const uniqueMasterRoutes: typeof masterRoutes = [];

  // Prioritize "Noida" origin routes first
  const noidaRoutes = masterRoutes.filter(
    (r) => cleanCity(r.from) === "noida" && targetCleanSet.has(cleanCity(r.to))
  );
  const otherRoutes = masterRoutes.filter(
    (r) => cleanCity(r.from) !== "noida" && targetCleanSet.has(cleanCity(r.to))
  );

  for (const r of [...noidaRoutes, ...otherRoutes]) {
    // Skip self-routes
    if (cleanCity(r.from) === cleanCity(r.to)) continue;
    const pairKey = `${cleanCity(r.from)}->${cleanCity(r.to)}`;
    if (seenPairs.has(pairKey)) continue;
    seenPairs.add(pairKey);
    uniqueMasterRoutes.push(r);
  }

  const vNorm = normalizeVehicleKey(vehicleSlug);

  return uniqueMasterRoutes.map((r) => {
    const numDist =
      typeof r.distance === "number"
        ? r.distance
        : parseInt(String(r.distance).replace(/[^0-9]/g, "")) || 200;
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
    region: "Uttar Pradesh",
    tagline: REGIONAL_METADATA["Uttar Pradesh"].tagline,
    badge: REGIONAL_METADATA["Uttar Pradesh"].badge,
    description: REGIONAL_METADATA["Uttar Pradesh"].description,
    cities: UTTAR_PRADESH_CITIES,
    items: getRegionalRoutesFromMaster("Uttar Pradesh", "taxi"),
  },
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
    region: "Rajasthan",
    tagline: REGIONAL_METADATA["Rajasthan"].tagline,
    badge: REGIONAL_METADATA["Rajasthan"].badge,
    description: REGIONAL_METADATA["Rajasthan"].description,
    cities: RAJASTHAN_CITIES,
    items: getRegionalRoutesFromMaster("Rajasthan", "taxi"),
  },
];
