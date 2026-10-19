/**
 * =========================================================================================
 * 🚗 MASTER ROUTE REGISTRY
 * 
 * This is the dedicated single file for all MasterRouteItems.
 * ONLY routes are stored here.
 * 
 * Whenever you want to add ANY new route, just add ONE object to the masterRoutes array below!
 * 
 * Example:
 *   {
 *     from: "Agra",
 *     to: "Gwalior",
 *     distance: 120,
 *     duration: "2 hr 15 min",
 *     highway: "NH 44",
 *     defaultVehicle: "taxi",
 *   }
 * =========================================================================================
 */

export interface MasterRouteItem {
  from: string;
  to: string;
  distance: number | string; // e.g. 120 or 850 or "120 km"
  distanceKm?: number;
  duration: string;          // e.g. "2 hr 15 min"
  highway?: string;          // e.g. "NH 44"
  defaultVehicle?: string;   // e.g. "taxi" | "tempo-traveller" | "innova-crysta"
  isPopular?: boolean;
}

export type PopularRouteDefinition = MasterRouteItem;

export const masterRoutes: MasterRouteItem[] = [
  // --- Featured / Custom Added Routes ---
  {
    from: "Lucknow",
    to: "Manali",
    distance: 850,
    duration: "16 hr 30 min",
    highway: "NH 44 & NH 3 (Chandigarh-Manali Expressway)",
    defaultVehicle: "tempo-traveller",
  },
  {
    from: "Agra",
    to: "Gwalior",
    distance: 120,
    duration: "2 hr 15 min",
    highway: "NH 44",
    defaultVehicle: "taxi",
  },

  // --- Lucknow Corridors ---
  { from: "Lucknow", to: "Ayodhya", distance: 135, duration: "2 hr 30 min", highway: "NH27 / Purvanchal Expressway", defaultVehicle: "tempo-traveller" },
  { from: "Lucknow", to: "Varanasi", distance: 285, duration: "5 hr 15 min", highway: "NH31 & Purvanchal Expressway", defaultVehicle: "tempo-traveller" },
  { from: "Lucknow", to: "Kanpur", distance: 85, duration: "1 hr 45 min", highway: "NH27 Kanpur-Lucknow Highway", defaultVehicle: "taxi" },
  { from: "Lucknow", to: "Prayagraj", distance: 200, duration: "3 hr 45 min", highway: "NH30", defaultVehicle: "tempo-traveller" },
  { from: "Lucknow", to: "Agra", distance: 335, duration: "4 hr 30 min", highway: "Agra-Lucknow Expressway", defaultVehicle: "taxi" },
  { from: "Lucknow", to: "Delhi", distance: 510, duration: "6 hr 30 min", highway: "Agra-Lucknow & Yamuna Expressway", defaultVehicle: "tempo-traveller" },
  { from: "Lucknow", to: "Gorakhpur", distance: 270, duration: "4 hr 45 min", highway: "NH27", defaultVehicle: "taxi" },

  // --- Varanasi Corridors ---
  { from: "Varanasi", to: "Ayodhya", distance: 215, duration: "4 hr 00 min", highway: "NH330", defaultVehicle: "tempo-traveller" },
  { from: "Varanasi", to: "Prayagraj", distance: 125, duration: "2 hr 30 min", highway: "NH19 Grand Trunk Road", defaultVehicle: "taxi" },
  { from: "Varanasi", to: "Bodh Gaya", distance: 250, duration: "5 hr 00 min", highway: "NH19", defaultVehicle: "taxi" },
  { from: "Varanasi", to: "Gorakhpur", distance: 200, duration: "4 hr 30 min", highway: "NH29", defaultVehicle: "tempo-traveller" },
  { from: "Varanasi", to: "Delhi", distance: 810, duration: "11 hr 00 min", highway: "Purvanchal & Agra Expressways", defaultVehicle: "tempo-traveller" },
  {
  from: "Varanasi",
  to: "Haridwar",
  distance: 800,
  duration: "12 hr 00 min",
  highway: "NH 19 & Delhi-Meerut Expressway",
  defaultVehicle: "tempo-traveller",
},

  // --- Ayodhya Corridors ---
  { from: "Ayodhya", to: "Prayagraj", distance: 165, duration: "3 hr 30 min", highway: "NH330", defaultVehicle: "taxi" },
  { from: "Ayodhya", to: "Gorakhpur", distance: 135, duration: "2 hr 45 min", highway: "NH27", defaultVehicle: "tempo-traveller" },
  { from: "Ayodhya", to: "Delhi", distance: 645, duration: "8 hr 30 min", highway: "NH27 & Expressways", defaultVehicle: "tempo-traveller" },
  { from: "Ayodhya", to: "Kanpur", distance: 220, duration: "4 hr 15 min", highway: "NH27", defaultVehicle: "taxi" },

  // --- Prayagraj Corridors ---
  { from: "Prayagraj", to: "Chitrakoot", distance: 130, duration: "3 hr 00 min", highway: "NH35", defaultVehicle: "taxi" },
  { from: "Prayagraj", to: "Kanpur", distance: 205, duration: "3 hr 30 min", highway: "NH19", defaultVehicle: "taxi" },
  { from: "Prayagraj", to: "Delhi", distance: 680, duration: "9 hr 30 min", highway: "NH19 & Expressways", defaultVehicle: "tempo-traveller" },

  // --- Noida / NCR Corridors ---
  { from: "Noida", to: "Varanasi", distance: 800, duration: "10 hr 30 min", highway: "Yamuna & Agra-Lucknow Expressways", defaultVehicle: "taxi" },
  { from: "Noida", to: "Delhi", distance: 25, duration: "45 min", highway: "DND Flyway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Greater Noida", distance: 25, duration: "40 min", highway: "Noida-Greater Noida Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ghaziabad", distance: 20, duration: "35 min", highway: "NH 9 & Hindon Elevated Road", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Gurgaon", distance: 55, duration: "1 hr 30 min", highway: "Outer Ring Road / NH48", defaultVehicle: "taxi" },
  { from: "Noida", to: "Meerut", distance: 70, duration: "1 hr 15 min", highway: "Delhi-Meerut Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Hapur", distance: 60, duration: "1 hr 10 min", highway: "NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bulandshahr", distance: 75, duration: "1 hr 30 min", highway: "NH 34", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Agra", distance: 180, duration: "2 hr 45 min", highway: "Yamuna Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jaipur", distance: 290, duration: "4 hr 45 min", highway: "Delhi-Mumbai Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Haridwar", distance: 215, duration: "3 hr 45 min", highway: "Delhi-Meerut Expressway", defaultVehicle: "tempo-traveller" },
  { from: "Noida", to: "Rishikesh", distance: 240, duration: "4 hr 15 min", highway: "NH334", defaultVehicle: "tempo-traveller" },
  { from: "Noida", to: "Mathura", distance: 140, duration: "2 hr 15 min", highway: "Yamuna Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Vrindavan", distance: 145, duration: "2 hr 10 min", highway: "Yamuna Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dehradun", distance: 255, duration: "4 hr 30 min", highway: "Delhi-Dehradun Expressway", defaultVehicle: "tempo-traveller" },
  { from: "Noida", to: "Chandigarh", distance: 260, duration: "4 hr 30 min", highway: "NH 44", defaultVehicle: "taxi", isPopular: true },
  { from: "Uttarakhand", to: "Rohtak", distance: 240, duration: "4 hr 30 min", highway: "NH 334 & Eastern Peripheral Expressway", defaultVehicle: "suv-taxi", isPopular: true },

  // --- Haryana Corridors (from Noida) ---
  // Ambala District
  { from: "Noida", to: "Ambala", distance: 235, duration: "4 hr 15 min", highway: "NH 44", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ambala Cantt", distance: 230, duration: "4 hr 10 min", highway: "NH 44", defaultVehicle: "taxi" },
  { from: "Noida", to: "Barara", distance: 240, duration: "4 hr 30 min", highway: "NH 44 & SH 4", defaultVehicle: "taxi" },
  { from: "Noida", to: "Naraingarh", distance: 260, duration: "4 hr 45 min", highway: "NH 44 & NH 344", defaultVehicle: "taxi" },
  { from: "Noida", to: "Shahzadpur", distance: 250, duration: "4 hr 35 min", highway: "NH 44 & NH 344", defaultVehicle: "taxi" },

  // Bhiwani District
  { from: "Noida", to: "Bhiwani", distance: 165, duration: "3 hr 30 min", highway: "NH 9 & NH 709", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Loharu", distance: 210, duration: "4 hr 15 min", highway: "NH 9 & SH 17", defaultVehicle: "taxi" },
  { from: "Noida", to: "Siwani", distance: 225, duration: "4 hr 30 min", highway: "NH 9 & NH 52", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tosham", distance: 185, duration: "3 hr 45 min", highway: "NH 9 & MDR 108", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bawani Khera", distance: 175, duration: "3 hr 40 min", highway: "NH 9 & NH 709", defaultVehicle: "taxi" },

  // Charkhi Dadri District
  { from: "Noida", to: "Charkhi Dadri", distance: 145, duration: "3 hr 15 min", highway: "NH 334B & KMP Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Badhra", distance: 170, duration: "3 hr 45 min", highway: "NH 334B & SH 19", defaultVehicle: "taxi" },

  // Faridabad District
  { from: "Noida", to: "Faridabad", distance: 30, duration: "50 min", highway: "Faridabad Bypass & Kalindi Kunj", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ballabgarh", distance: 40, duration: "1 hr 00 min", highway: "NH 19 & Faridabad Bypass", defaultVehicle: "taxi" },
  { from: "Noida", to: "Badkhal", distance: 32, duration: "55 min", highway: "Surajkund Road & Faridabad Bypass", defaultVehicle: "taxi" },

  // Fatehabad District
  { from: "Noida", to: "Fatehabad", distance: 255, duration: "4 hr 45 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tohana", distance: 235, duration: "4 hr 30 min", highway: "NH 9 & NH 148B", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ratia", distance: 270, duration: "5 hr 00 min", highway: "NH 9 & SH 21", defaultVehicle: "taxi" },

  // Gurugram District
  { from: "Noida", to: "Gurugram", distance: 55, duration: "1 hr 30 min", highway: "Outer Ring Road / NH 48", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sohna", distance: 65, duration: "1 hr 30 min", highway: "Delhi-Mumbai Expressway & NH 248A", defaultVehicle: "taxi" },
  { from: "Noida", to: "Pataudi", distance: 85, duration: "2 hr 00 min", highway: "NH 48 & KMP Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Manesar", distance: 70, duration: "1 hr 45 min", highway: "NH 48 (Delhi-Jaipur Expressway)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Farrukhnagar", distance: 75, duration: "1 hr 50 min", highway: "KMP Expressway & SH 15A", defaultVehicle: "taxi" },

  // Hisar District
  { from: "Noida", to: "Hisar", distance: 205, duration: "4 hr 00 min", highway: "NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Hansi", distance: 180, duration: "3 hr 30 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Barwala", distance: 200, duration: "3 hr 55 min", highway: "NH 9 & NH 52", defaultVehicle: "taxi" },
  { from: "Noida", to: "Narnaund", distance: 170, duration: "3 hr 25 min", highway: "NH 9 & SH 12", defaultVehicle: "taxi" },
  { from: "Noida", to: "Adampur", distance: 245, duration: "4 hr 30 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Uklana", distance: 210, duration: "4 hr 05 min", highway: "NH 9 & SH 2", defaultVehicle: "taxi" },

  // Jhajjar District
  { from: "Noida", to: "Jhajjar", distance: 95, duration: "2 hr 10 min", highway: "NH 334B & KMP Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bahadurgarh", distance: 65, duration: "1 hr 40 min", highway: "NH 9 & Rohtak Road", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Beri", distance: 110, duration: "2 hr 25 min", highway: "NH 334B & SH 122", defaultVehicle: "taxi" },
  { from: "Noida", to: "Matanhail", distance: 120, duration: "2 hr 40 min", highway: "NH 334B & MDR 130", defaultVehicle: "taxi" },

  // Jind District
  { from: "Noida", to: "Jind", distance: 165, duration: "3 hr 15 min", highway: "NH 352 & NH 709A", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Narwana", distance: 200, duration: "3 hr 45 min", highway: "NH 152 & NH 352", defaultVehicle: "taxi" },
  { from: "Noida", to: "Uchana", distance: 180, duration: "3 hr 30 min", highway: "NH 52 & NH 352", defaultVehicle: "taxi" },
  { from: "Noida", to: "Safidon", distance: 135, duration: "2 hr 45 min", highway: "NH 44 & Panipat-Safidon Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Julana", distance: 140, duration: "2 hr 50 min", highway: "NH 352", defaultVehicle: "taxi" },

  // Kaithal District
  { from: "Noida", to: "Kaithal", distance: 195, duration: "3 hr 45 min", highway: "NH 44 & NH 152", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Pundri", distance: 180, duration: "3 hr 30 min", highway: "NH 44 & SH 8", defaultVehicle: "taxi" },
  { from: "Noida", to: "Guhla", distance: 225, duration: "4 hr 15 min", highway: "NH 152 & SH 11", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kalayat", distance: 190, duration: "3 hr 40 min", highway: "NH 152", defaultVehicle: "taxi" },

  // Karnal District
  { from: "Noida", to: "Karnal", distance: 160, duration: "2 hr 50 min", highway: "NH 44 (GT Road)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Indri", distance: 185, duration: "3 hr 20 min", highway: "NH 44 & SH 7", defaultVehicle: "taxi" },
  { from: "Noida", to: "Assandh", distance: 170, duration: "3 hr 15 min", highway: "NH 44 & SH 11", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nilokheri", distance: 175, duration: "3 hr 05 min", highway: "NH 44", defaultVehicle: "taxi" },
  { from: "Noida", to: "Gharaunda", distance: 145, duration: "2 hr 35 min", highway: "NH 44", defaultVehicle: "taxi" },

  // Kurukshetra District
  { from: "Noida", to: "Thanesar", distance: 195, duration: "3 hr 30 min", highway: "NH 44", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Shahbad", distance: 215, duration: "3 hr 50 min", highway: "NH 44", defaultVehicle: "taxi" },
  { from: "Noida", to: "Pehowa", distance: 220, duration: "4 hr 00 min", highway: "NH 44 & SH 6", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ladwa", distance: 200, duration: "3 hr 40 min", highway: "NH 44 & SH 7", defaultVehicle: "taxi" },

  // Mahendragarh District
  { from: "Noida", to: "Narnaul", distance: 165, duration: "3 hr 30 min", highway: "NH 11 & NH 48", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mahendragarh", distance: 160, duration: "3 hr 25 min", highway: "NH 11 & SH 24", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kanina", distance: 140, duration: "3 hr 00 min", highway: "NH 48 & SH 24", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ateli", distance: 150, duration: "3 hr 15 min", highway: "NH 11", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nangal Chaudhary", distance: 185, duration: "3 hr 50 min", highway: "NH 11 & NH 148B", defaultVehicle: "taxi" },

  // Nuh District
  { from: "Noida", to: "Nuh", distance: 75, duration: "1 hr 45 min", highway: "NH 248A & Delhi-Mumbai Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ferozepur Jhirka", distance: 120, duration: "2 hr 30 min", highway: "NH 248A", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tauru", distance: 70, duration: "1 hr 35 min", highway: "KMP Expressway & NH 248A", defaultVehicle: "taxi" },
  { from: "Noida", to: "Punhana", distance: 115, duration: "2 hr 25 min", highway: "Delhi-Mumbai Expressway & SH 22", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nagina", distance: 95, duration: "2 hr 10 min", highway: "NH 248A", defaultVehicle: "taxi" },

  // Palwal District
  { from: "Noida", to: "Palwal", distance: 65, duration: "1 hr 20 min", highway: "NH 19 & KMP Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Hodal", distance: 95, duration: "1 hr 50 min", highway: "NH 19", defaultVehicle: "taxi" },
  { from: "Noida", to: "Hathin", distance: 80, duration: "1 hr 40 min", highway: "NH 19 & SH 135", defaultVehicle: "taxi" },
  { from: "Noida", to: "Hassanpur", distance: 105, duration: "2 hr 10 min", highway: "NH 19 & MDR 131", defaultVehicle: "taxi" },

  // Panchkula District
  { from: "Noida", to: "Panchkula", distance: 260, duration: "4 hr 30 min", highway: "NH 44 & Himalayan Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kalka", distance: 280, duration: "5 hr 00 min", highway: "NH 44 & NH 5", defaultVehicle: "taxi" },
  { from: "Noida", to: "Raipur Rani", distance: 265, duration: "4 hr 45 min", highway: "NH 44 & NH 344", defaultVehicle: "taxi" },

  // Panipat District
  { from: "Noida", to: "Panipat", distance: 125, duration: "2 hr 15 min", highway: "NH 44 (GT Road)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Samalkha", distance: 105, duration: "2 hr 00 min", highway: "NH 44", defaultVehicle: "taxi" },
  { from: "Noida", to: "Israna", distance: 120, duration: "2 hr 15 min", highway: "NH 44 & NH 709", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bapouli", distance: 115, duration: "2 hr 10 min", highway: "NH 44 & Sanoli Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Madlauda", distance: 135, duration: "2 hr 30 min", highway: "NH 44 & SH 14", defaultVehicle: "taxi" },

  // Rewari District
  { from: "Noida", to: "Rewari", distance: 110, duration: "2 hr 20 min", highway: "NH 48 & NH 352", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bawal", distance: 125, duration: "2 hr 35 min", highway: "NH 48", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kosli", distance: 130, duration: "2 hr 45 min", highway: "NH 48 & SH 22", defaultVehicle: "taxi" },

  // Rohtak District
  { from: "Noida", to: "Rohtak", distance: 110, duration: "2 hr 15 min", highway: "NH 9 & KMP Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Meham", distance: 140, duration: "2 hr 45 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sampla", distance: 85, duration: "1 hr 55 min", highway: "NH 9 & KMP Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kalanaur", distance: 130, duration: "2 hr 35 min", highway: "NH 709", defaultVehicle: "taxi" },

  // Sirsa District
  { from: "Noida", to: "Sirsa", distance: 295, duration: "5 hr 30 min", highway: "NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dabwali", distance: 355, duration: "6 hr 30 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ellenabad", distance: 330, duration: "6 hr 10 min", highway: "NH 9 & SH 23", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rania", distance: 320, duration: "5 hr 55 min", highway: "NH 9 & SH 23", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nathusari Chopta", distance: 305, duration: "5 hr 40 min", highway: "NH 9 & MDR 102", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kalanwali", distance: 335, duration: "6 hr 15 min", highway: "NH 9 & MDR 103", defaultVehicle: "taxi" },

  // Sonipat District
  { from: "Noida", to: "Sonipat", distance: 75, duration: "1 hr 35 min", highway: "Eastern Peripheral Expressway & NH 44", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Gohana", distance: 110, duration: "2 hr 10 min", highway: "NH 352A & NH 709", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kharkhoda", distance: 80, duration: "1 hr 45 min", highway: "KMP Expressway & SH 18", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ganaur", distance: 90, duration: "1 hr 45 min", highway: "NH 44", defaultVehicle: "taxi" },

  // Yamunanagar District
  { from: "Noida", to: "Yamunanagar", distance: 210, duration: "4 hr 00 min", highway: "NH 44 & NH 344", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Jagadhri", distance: 215, duration: "4 hr 05 min", highway: "NH 44 & NH 344", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chhachhrauli", distance: 230, duration: "4 hr 30 min", highway: "NH 344 & SH 1", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bilaspur", distance: 235, duration: "4 hr 35 min", highway: "NH 344 & Bilaspur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Radaur", distance: 195, duration: "3 hr 45 min", highway: "NH 44 & SH 7", defaultVehicle: "taxi" },
  { from: "Noida", to: "Saraswati Nagar", distance: 220, duration: "4 hr 15 min", highway: "NH 344", defaultVehicle: "taxi" },

  // --- Uttarakhand Corridors (from Noida) ---
  // Almora District
  { from: "Noida", to: "Almora", distance: 365, duration: "8 hr 30 min", highway: "NH 9 & NH 109", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bagwali Pokhar", distance: 395, duration: "9 hr 30 min", highway: "NH 109 & Ranikhet Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bhanoli", distance: 385, duration: "9 hr 15 min", highway: "NH 9 & Almora-Bhanoli Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bhikiyasain", distance: 340, duration: "8 hr 00 min", highway: "NH 9 & Ramnagar-Bhikiyasain Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chaukhutia", distance: 380, duration: "9 hr 00 min", highway: "NH 109", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dwarahat", distance: 360, duration: "8 hr 30 min", highway: "NH 109", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jainti", distance: 370, duration: "9 hr 00 min", highway: "NH 9 & Almora-Jainti Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jalali", distance: 365, duration: "8 hr 45 min", highway: "NH 109", defaultVehicle: "taxi" },
  { from: "Noida", to: "Lamgara", distance: 355, duration: "8 hr 30 min", highway: "NH 9 & Almora Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Machhor", distance: 375, duration: "9 hr 00 min", highway: "NH 109", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ranikhet", distance: 345, duration: "8 hr 00 min", highway: "NH 9 & NH 109", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Salt", distance: 310, duration: "7 hr 30 min", highway: "Ramnagar-Salt Rd & NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Someshwar", distance: 380, duration: "9 hr 00 min", highway: "NH 109", defaultVehicle: "taxi" },
  { from: "Noida", to: "Syalde", distance: 360, duration: "8 hr 45 min", highway: "NH 109 & Syalde Rd", defaultVehicle: "taxi" },

  // Bageshwar District
  { from: "Noida", to: "Bageshwar", distance: 430, duration: "10 hr 30 min", highway: "NH 9 & NH 109", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dug Nakuri", distance: 445, duration: "11 hr 00 min", highway: "NH 109 & Nakuri Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Garur", distance: 410, duration: "10 hr 00 min", highway: "NH 109 & Baijnath Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kanda", distance: 440, duration: "10 hr 45 min", highway: "NH 109 & Kanda Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kaphaligair", distance: 425, duration: "10 hr 30 min", highway: "NH 109", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kapkot", distance: 455, duration: "11 hr 15 min", highway: "NH 109 & Pindar Valley Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Shama", distance: 470, duration: "11 hr 45 min", highway: "Bageshwar-Shama Rd", defaultVehicle: "taxi" },

  // Chamoli District
  { from: "Noida", to: "Adi Badri", distance: 420, duration: "10 hr 30 min", highway: "NH 7 & Karnaprayag-Gairsain Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chamoli", distance: 440, duration: "11 hr 00 min", highway: "NH 7 (Badrinath Highway)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Gairsain", distance: 390, duration: "9 hr 30 min", highway: "NH 109", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ghat", distance: 450, duration: "11 hr 30 min", highway: "NH 7 & Nandaprayag-Ghat Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jilasu", distance: 425, duration: "10 hr 45 min", highway: "NH 7", defaultVehicle: "taxi" },
  { from: "Noida", to: "Joshimath", distance: 485, duration: "12 hr 30 min", highway: "NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Karnaprayag", distance: 415, duration: "10 hr 15 min", highway: "NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Nandaprayag", distance: 435, duration: "10 hr 45 min", highway: "NH 7", defaultVehicle: "taxi" },
  { from: "Noida", to: "Narayanbagar", distance: 410, duration: "10 hr 00 min", highway: "Karnaprayag-Gwaldam Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Pokhari", distance: 445, duration: "11 hr 15 min", highway: "Rudraprayag-Pokhari Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tharali", distance: 425, duration: "10 hr 30 min", highway: "NH 109", defaultVehicle: "taxi" },

  // Champawat District
  { from: "Noida", to: "Barakot", distance: 435, duration: "10 hr 30 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Champawat", distance: 415, duration: "10 hr 00 min", highway: "NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Lohaghat", distance: 425, duration: "10 hr 15 min", highway: "NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Pati", distance: 405, duration: "9 hr 45 min", highway: "NH 9 & Pati Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Purnagiri", distance: 380, duration: "8 hr 45 min", highway: "NH 9 & Tanakpur-Purnagiri Rd", defaultVehicle: "taxi", isPopular: true },

  // Dehradun District
  { from: "Noida", to: "Chakrata", distance: 325, duration: "7 hr 00 min", highway: "NH 7 & Vikasnagar-Chakrata Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dehradun", distance: 255, duration: "4 hr 30 min", highway: "Delhi-Dehradun Expressway / NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Doiwala", distance: 240, duration: "4 hr 15 min", highway: "Delhi-Dehradun Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kalsi", distance: 295, duration: "6 hr 15 min", highway: "NH 7 & Kalsi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rishikesh", distance: 240, duration: "4 hr 15 min", highway: "Delhi-Meerut Expressway & NH 334", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Tyuni", distance: 380, duration: "9 hr 00 min", highway: "NH 707", defaultVehicle: "taxi" },
  { from: "Noida", to: "Vikasnagar", distance: 280, duration: "5 hr 30 min", highway: "NH 7", defaultVehicle: "taxi" },

  // Haridwar District
  { from: "Noida", to: "Bhagwanpur", distance: 190, duration: "3 hr 30 min", highway: "Delhi-Meerut Expressway & NH 344", defaultVehicle: "taxi" },
  { from: "Noida", to: "Haridwar", distance: 215, duration: "3 hr 45 min", highway: "Delhi-Meerut Expressway & NH 334", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Laksar", distance: 200, duration: "3 hr 45 min", highway: "NH 334 & Laksar Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Roorkee", distance: 180, duration: "3 hr 15 min", highway: "Delhi-Meerut Expressway & NH 334", defaultVehicle: "taxi", isPopular: true },

  // Nainital District
  { from: "Noida", to: "Betalghat", distance: 345, duration: "8 hr 00 min", highway: "NH 9 & Ramnagar-Betalghat Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dhari", distance: 340, duration: "8 hr 00 min", highway: "NH 9 & Mukteshwar Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Haldwani", distance: 275, duration: "5 hr 30 min", highway: "NH 9 (Delhi-Nainital Highway)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kainchi Dham", distance: 315, duration: "7 hr 00 min", highway: "NH 109", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kaladhungi", distance: 260, duration: "5 hr 15 min", highway: "NH 9 & Corbett Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khansyun", distance: 335, duration: "8 hr 00 min", highway: "NH 9 & Okhalkanda Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Lalkuan", distance: 265, duration: "5 hr 15 min", highway: "NH 9 & Bareilly Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nainital", distance: 305, duration: "6 hr 30 min", highway: "NH 9 & NH 109", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ramnagar", distance: 245, duration: "4 hr 45 min", highway: "NH 9 & Kashipur-Ramnagar Rd", defaultVehicle: "taxi", isPopular: true },

  // Pauri Garhwal District
  { from: "Noida", to: "Bironkhal", distance: 340, duration: "8 hr 30 min", highway: "NH 534", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chakisain", distance: 330, duration: "8 hr 15 min", highway: "NH 534", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chaubattakhal", distance: 310, duration: "7 hr 45 min", highway: "NH 534", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dhumakot", distance: 290, duration: "7 hr 00 min", highway: "Kotdwar-Dhumakot Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jakhanikhal", distance: 265, duration: "6 hr 15 min", highway: "Kotdwar Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kotdwar", distance: 220, duration: "4 hr 30 min", highway: "NH 534 (Meerut-Pauri Highway)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Lansdowne", distance: 255, duration: "5 hr 45 min", highway: "NH 534 & Kotdwar-Lansdowne Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Pauri", distance: 340, duration: "8 hr 15 min", highway: "NH 534", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Rikhanikhal", distance: 275, duration: "6 hr 45 min", highway: "Kotdwar-Rikhanikhal Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Satpuli", distance: 270, duration: "6 hr 15 min", highway: "NH 534", defaultVehicle: "taxi" },
  { from: "Noida", to: "Srinagar", distance: 335, duration: "7 hr 30 min", highway: "NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Thalisain", distance: 365, duration: "9 hr 00 min", highway: "NH 534", defaultVehicle: "taxi" },
  { from: "Noida", to: "Yamkeshwar", distance: 255, duration: "5 hr 45 min", highway: "Rishikesh-Neelkanth Rd", defaultVehicle: "taxi" },

  // Pithoragarh District
  { from: "Noida", to: "Bangapani", distance: 540, duration: "14 hr 00 min", highway: "NH 9 & Jauljibi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Berinag", distance: 470, duration: "11 hr 45 min", highway: "NH 9 & NH 309A", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Devalthal", distance: 500, duration: "12 hr 45 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dharchula", distance: 570, duration: "15 hr 00 min", highway: "NH 9 (Kailash Mansarovar Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Didihat", distance: 510, duration: "13 hr 00 min", highway: "NH 9 & Thal Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ganai", distance: 455, duration: "11 hr 15 min", highway: "NH 309A", defaultVehicle: "taxi" },
  { from: "Noida", to: "Gangolihat", distance: 450, duration: "11 hr 00 min", highway: "NH 309A & Mahakali Marg", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kanalichhina", distance: 505, duration: "12 hr 45 min", highway: "NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Munsiari", distance: 555, duration: "14 hr 30 min", highway: "NH 9 & Thal-Munsiari Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Pithoragarh", distance: 485, duration: "12 hr 00 min", highway: "NH 9 (All Weather Road)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Tejam", distance: 515, duration: "13 hr 30 min", highway: "Thal-Munsiari Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Thal", distance: 485, duration: "12 hr 15 min", highway: "NH 309A & Thal Rd", defaultVehicle: "taxi" },

  // Rudraprayag District
  { from: "Noida", to: "Basukedar", distance: 405, duration: "10 hr 00 min", highway: "Rudraprayag-Guptkashi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jakholi", distance: 395, duration: "9 hr 45 min", highway: "Tilwara-Mayali Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rudraprayag", distance: 375, duration: "8 hr 45 min", highway: "NH 7 & NH 107", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ukhimath", distance: 420, duration: "10 hr 30 min", highway: "NH 107 (Kedarnath Route)", defaultVehicle: "taxi", isPopular: true },

  // Tehri Garhwal District
  { from: "Noida", to: "Balganga", distance: 385, duration: "9 hr 30 min", highway: "Tehri-Ghansali Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Devprayag", distance: 305, duration: "6 hr 45 min", highway: "NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dhanaulti", distance: 300, duration: "6 hr 45 min", highway: "Mussoorie-Chamba Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Gaja", distance: 290, duration: "6 hr 30 min", highway: "Rishikesh-Chamba Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ghansali", distance: 375, duration: "9 hr 15 min", highway: "Chamba-Ghansali Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jakhanidhar", distance: 345, duration: "8 hr 15 min", highway: "New Tehri Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kandisaur", distance: 360, duration: "8 hr 45 min", highway: "Chamba-Uttarkashi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kirtinagar", distance: 330, duration: "7 hr 20 min", highway: "NH 7", defaultVehicle: "taxi" },
  { from: "Noida", to: "Madannegi", distance: 355, duration: "8 hr 30 min", highway: "New Tehri Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nainbagh", distance: 320, duration: "7 hr 15 min", highway: "Yamunotri Highway NH 507", defaultVehicle: "taxi" },
  { from: "Noida", to: "Narendranagar", distance: 255, duration: "5 hr 00 min", highway: "NH 7 & Chamba Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Paoki Devi", distance: 365, duration: "8 hr 45 min", highway: "Pratapnagar Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Pratapnagar", distance: 380, duration: "9 hr 30 min", highway: "Dobra Chanti Bridge Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tehri", distance: 325, duration: "7 hr 30 min", highway: "Chamba-New Tehri Rd", defaultVehicle: "taxi", isPopular: true },

  // Udham Singh Nagar District
  { from: "Noida", to: "Bajpur", distance: 225, duration: "4 hr 30 min", highway: "NH 9 & Moradabad-Bazpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Gadarpur", distance: 240, duration: "4 hr 45 min", highway: "NH 9 & Rampur-Rudrapur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jaspur", distance: 205, duration: "4 hr 00 min", highway: "NH 9 & Kashipur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kashipur", distance: 215, duration: "4 hr 15 min", highway: "NH 309 & Moradabad-Kashipur Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Khatima", distance: 335, duration: "6 hr 45 min", highway: "NH 9 & Tanakpur Highway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kichha", distance: 280, duration: "5 hr 30 min", highway: "NH 9 & Bareilly Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nanakmatta", distance: 310, duration: "6 hr 15 min", highway: "NH 9 & Sitarganj Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Rudrapur", distance: 255, duration: "5 hr 00 min", highway: "NH 9 (Delhi-Nainital Highway)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sitarganj", distance: 295, duration: "5 hr 45 min", highway: "NH 9", defaultVehicle: "taxi" },

  // Uttarkashi District
  { from: "Noida", to: "Barkot", distance: 385, duration: "9 hr 30 min", highway: "NH 507 & NH 134 (Yamunotri Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bhatwari", distance: 440, duration: "11 hr 00 min", highway: "NH 34 (Gangotri Route)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chinyalisaur", distance: 360, duration: "8 hr 30 min", highway: "NH 34", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dhauntari", distance: 385, duration: "9 hr 15 min", highway: "Uttarkashi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dunda", distance: 375, duration: "9 hr 00 min", highway: "NH 34", defaultVehicle: "taxi" },
  { from: "Noida", to: "Joshiyara", distance: 395, duration: "9 hr 30 min", highway: "NH 34", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mori", distance: 415, duration: "10 hr 15 min", highway: "Tons Valley & Purola Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Purola", distance: 395, duration: "9 hr 45 min", highway: "NH 507 & Purola Rd", defaultVehicle: "taxi", isPopular: true },

  // ==========================================
  // --- Punjab Corridors (from Noida) ---
  // ==========================================

  // Amritsar District
  { from: "Noida", to: "Ajnala", distance: 515, duration: "9 hr 15 min", highway: "NH 44 & Amritsar-Ajnala Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Amritsar-1", distance: 495, duration: "8 hr 45 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Amritsar-2", distance: 498, duration: "8 hr 50 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Baba Bakala", distance: 460, duration: "8 hr 15 min", highway: "NH 44 & Rayya-Baba Bakala Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Majitha", distance: 505, duration: "9 hr 00 min", highway: "NH 44 & Majitha Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Lopoke", distance: 520, duration: "9 hr 30 min", highway: "NH 44 & Chogawan-Lopoke Rd", defaultVehicle: "taxi" },

  // Barnala District
  { from: "Noida", to: "Barnala", distance: 355, duration: "6 hr 30 min", highway: "NH 703 & NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Mehal Kalan", distance: 345, duration: "6 hr 15 min", highway: "Ludhiana-Barnala Rd & NH 703", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tapa", distance: 375, duration: "6 hr 45 min", highway: "NH 7 (Bathinda-Chandigarh Hwy)", defaultVehicle: "taxi" },

  // Bathinda District
  { from: "Noida", to: "Bathinda", distance: 395, duration: "7 hr 00 min", highway: "NH 7 & NH 54", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Rampura Phul", distance: 380, duration: "6 hr 45 min", highway: "NH 7", defaultVehicle: "taxi" },
  { from: "Noida", to: "Talwandi Sabo", distance: 385, duration: "6 hr 50 min", highway: "NH 54 & Talwandi Sabo Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Maur", distance: 375, duration: "6 hr 40 min", highway: "NH 7 & Maur Mandi Rd", defaultVehicle: "taxi" },

  // Faridkot District
  { from: "Noida", to: "Faridkot", distance: 430, duration: "7 hr 45 min", highway: "NH 54", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Jaito", distance: 410, duration: "7 hr 20 min", highway: "NH 54 & Kotkapura-Bathinda Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kot Kapura", distance: 420, duration: "7 hr 30 min", highway: "NH 54", defaultVehicle: "taxi", isPopular: true },

  // Fatehgarh Sahib District
  { from: "Noida", to: "Amloh", distance: 295, duration: "5 hr 15 min", highway: "NH 44 & Gobindgarh-Amloh Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bassi Pathana", distance: 285, duration: "5 hr 10 min", highway: "NH 44 & Sirhind-Morinda Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Fatehgarh Sahib", distance: 280, duration: "5 hr 00 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Khamanon", distance: 305, duration: "5 hr 30 min", highway: "NH 5 & Ludhiana-Chandigarh Rd", defaultVehicle: "taxi" },

  // Fazilka District
  { from: "Noida", to: "Abohar", distance: 440, duration: "7 hr 45 min", highway: "NH 7 & NH 62", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Fazilka", distance: 475, duration: "8 hr 30 min", highway: "NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Jalalabad", distance: 465, duration: "8 hr 15 min", highway: "NH 54 & Fazilka-Firozpur Rd", defaultVehicle: "taxi" },

  // Firozpur District
  { from: "Noida", to: "Firozpur", distance: 440, duration: "8 hr 00 min", highway: "NH 5 & NH 54", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Guru Harsahai", distance: 460, duration: "8 hr 15 min", highway: "NH 54", defaultVehicle: "taxi" },
  { from: "Noida", to: "Zira", distance: 415, duration: "7 hr 30 min", highway: "NH 54 & Moga-Zira Rd", defaultVehicle: "taxi" },

  // Gurdaspur District
  { from: "Noida", to: "Batala", distance: 485, duration: "8 hr 30 min", highway: "NH 54 & Amritsar Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dera Baba Nanak", distance: 525, duration: "9 hr 15 min", highway: "NH 354 (Kartarpur Corridor Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dina Nagar", distance: 505, duration: "8 hr 45 min", highway: "NH 54", defaultVehicle: "taxi" },
  { from: "Noida", to: "Fatehgarh Churian", distance: 500, duration: "8 hr 50 min", highway: "NH 354", defaultVehicle: "taxi" },
  { from: "Noida", to: "Gurdaspur", distance: 495, duration: "8 hr 40 min", highway: "NH 54", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kalanaur", distance: 510, duration: "9 hr 00 min", highway: "NH 354 & SH 25", defaultVehicle: "taxi" },

  // Hoshiarpur District
  { from: "Noida", to: "Dasua", distance: 450, duration: "7 hr 45 min", highway: "NH 44 (Jalandhar-Pathankot Hwy)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Garhshankar", distance: 370, duration: "6 hr 30 min", highway: "NH 344A & Anandpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Hoshiarpur", distance: 405, duration: "7 hr 00 min", highway: "NH 344A & NH 503A", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Mukerian", distance: 470, duration: "8 hr 15 min", highway: "NH 44", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tanda", distance: 435, duration: "7 hr 30 min", highway: "NH 44 & Jalandhar-Pathankot Hwy", defaultVehicle: "taxi" },

  // Jalandhar District
  { from: "Noida", to: "Adampur", distance: 410, duration: "7 hr 00 min", highway: "NH 344A & Hoshiarpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jalandhar-1", distance: 400, duration: "6 hr 45 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Jalandhar-2", distance: 405, duration: "6 hr 50 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nakodar", distance: 395, duration: "6 hr 45 min", highway: "NH 703 & Ludhiana-Nakodar Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Phillaur", distance: 365, duration: "6 hr 15 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Shahkot", distance: 415, duration: "7 hr 00 min", highway: "NH 703 & Moga Rd", defaultVehicle: "taxi" },

  // Kapurthala District
  { from: "Noida", to: "Bhulath", distance: 435, duration: "7 hr 30 min", highway: "NH 44 & Kartarpur-Bhulath Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kapurthala", distance: 420, duration: "7 hr 15 min", highway: "NH 703A (Heritage City Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Phagwara", distance: 380, duration: "6 hr 30 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sultanpur Lodhi", distance: 425, duration: "7 hr 20 min", highway: "NH 703AA (Guru Nanak Dev Ji Marg)", defaultVehicle: "taxi", isPopular: true },

  // Ludhiana District
  { from: "Noida", to: "Jagraon", distance: 380, duration: "6 hr 30 min", highway: "NH 5 (Ludhiana-Firozpur Hwy)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khanna", distance: 310, duration: "5 hr 15 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ludhiana East", distance: 335, duration: "5 hr 40 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ludhiana West", distance: 345, duration: "5 hr 50 min", highway: "NH 44 & Ferozepur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Payal", distance: 320, duration: "5 hr 30 min", highway: "NH 44 & Doraha-Payal Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Raikot", distance: 370, duration: "6 hr 20 min", highway: "Ludhiana-Raikot Rd & SH 13", defaultVehicle: "taxi" },
  { from: "Noida", to: "Samrala", distance: 315, duration: "5 hr 25 min", highway: "NH 5 & Chandigarh-Ludhiana Hwy", defaultVehicle: "taxi" },

  // Malerkotla District
  { from: "Noida", to: "Amargarh", distance: 315, duration: "5 hr 30 min", highway: "Khanna-Malerkotla Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ahmedgarh", distance: 335, duration: "5 hr 50 min", highway: "Ludhiana-Malerkotla Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Malerkotla", distance: 325, duration: "5 hr 45 min", highway: "SH 11 & Ludhiana-Sangrur Rd", defaultVehicle: "taxi", isPopular: true },

  // Mansa District
  { from: "Noida", to: "Budhlada", distance: 320, duration: "5 hr 50 min", highway: "NH 148B & Ratia-Budhlada Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mansa", distance: 340, duration: "6 hr 15 min", highway: "NH 148B & Barnala-Mansa Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sardulgarh", distance: 345, duration: "6 hr 20 min", highway: "NH 148B & Sirsa Rd", defaultVehicle: "taxi" },

  // Moga District
  { from: "Noida", to: "Bagha Purana", distance: 405, duration: "7 hr 00 min", highway: "NH 254 & Moga-Kotkapura Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dharamkot", distance: 400, duration: "6 hr 55 min", highway: "Jalandhar-Moga Rd & NH 703", defaultVehicle: "taxi" },
  { from: "Noida", to: "Moga", distance: 390, duration: "6 hr 45 min", highway: "NH 5 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Nihal Singh Wala", distance: 385, duration: "6 hr 40 min", highway: "Barnala-Moga Rd", defaultVehicle: "taxi" },

  // Pathankot District
  { from: "Noida", to: "Dhar Kalan", distance: 545, duration: "9 hr 45 min", highway: "NH 154A (Dalhousie Rd)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Pathankot", distance: 515, duration: "9 hr 00 min", highway: "NH 44 & NH 154", defaultVehicle: "taxi", isPopular: true },

  // Patiala District
  { from: "Noida", to: "Dudhan Sadhan", distance: 260, duration: "4 hr 30 min", highway: "NH 44 & Pehowa-Patiala Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nabha", distance: 295, duration: "5 hr 15 min", highway: "NH 7 & Patiala-Nabha Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Patiala", distance: 270, duration: "4 hr 45 min", highway: "NH 44 & NH 7 (Rajpura-Patiala Hwy)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Patran", distance: 290, duration: "5 hr 10 min", highway: "NH 52 & Narwana-Patran Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rajpura", distance: 245, duration: "4 hr 15 min", highway: "NH 44 (Grand Trunk Rd)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Samana", distance: 285, duration: "5 hr 00 min", highway: "SH 8 & Patiala-Samana Rd", defaultVehicle: "taxi" },

  // Rupnagar / Ropar District
  { from: "Noida", to: "Anandpur Sahib", distance: 340, duration: "5 hr 45 min", highway: "NH 205 & Anandpur Sahib Hwy", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Chamkaur Sahib", distance: 300, duration: "5 hr 15 min", highway: "NH 205 & Morinda-Chamkaur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Morinda", distance: 285, duration: "4 hr 55 min", highway: "NH 205 (Chandigarh-Morinda Hwy)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nangal", distance: 360, duration: "6 hr 15 min", highway: "NH 503 (Bhakra Dam Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Rup Nagar", distance: 295, duration: "5 hr 10 min", highway: "NH 205 (Ropar)", defaultVehicle: "taxi", isPopular: true },

  // SAS Nagar / Mohali District
  { from: "Noida", to: "Mohali", distance: 255, duration: "4 hr 20 min", highway: "NH 44 & Airport Rd (PR-7)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dera Bassi", distance: 235, duration: "3 hr 55 min", highway: "NH 44 (Delhi-Chandigarh Expressway)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kharar", distance: 265, duration: "4 hr 30 min", highway: "NH 205 & Chandigarh-Kharar Flyover", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Banur", distance: 245, duration: "4 hr 10 min", highway: "NH 7 & Zirakpur-Patiala Hwy", defaultVehicle: "taxi" },

  // Sangrur District
  { from: "Noida", to: "Bhawanigarh", distance: 295, duration: "5 hr 15 min", highway: "NH 7 (Patiala-Bathinda Hwy)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dirba", distance: 285, duration: "5 hr 05 min", highway: "NH 52 (Hisar-Sangrur Hwy)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dhuri", distance: 320, duration: "5 hr 40 min", highway: "Sangrur-Ludhiana Hwy & NH 11", defaultVehicle: "taxi" },
  { from: "Noida", to: "Lehra", distance: 280, duration: "5 hr 00 min", highway: "Moonak-Lehra Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Moonak", distance: 270, duration: "4 hr 50 min", highway: "Jakhal-Moonak Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sangrur", distance: 310, duration: "5 hr 30 min", highway: "NH 52 & NH 7", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sunam", distance: 300, duration: "5 hr 20 min", highway: "NH 52 (Sunam Udham Singh Wala)", defaultVehicle: "taxi", isPopular: true },

  // SBS Nagar / Nawanshahr District
  { from: "Noida", to: "Balachaur", distance: 330, duration: "5 hr 40 min", highway: "NH 344A (Ropar-Phagwara Hwy)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Banga", distance: 365, duration: "6 hr 15 min", highway: "NH 344A (Phagwara-Nawanshahr Rd)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nawan Shahr", distance: 350, duration: "6 hr 00 min", highway: "NH 344A (Shaheed Bhagat Singh Nagar)", defaultVehicle: "taxi", isPopular: true },

  // Sri Muktsar Sahib District
  { from: "Noida", to: "Gidderbaha", distance: 415, duration: "7 hr 15 min", highway: "NH 7 (Malout-Bathinda Hwy)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Malout", distance: 430, duration: "7 hr 30 min", highway: "NH 7 & NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Shri Muktsar Sahib", distance: 435, duration: "7 hr 40 min", highway: "NH 354 (Historical Gurdwara Circuit)", defaultVehicle: "taxi", isPopular: true },

  // Tarn Taran District
  { from: "Noida", to: "Bhikhiwind", distance: 505, duration: "8 hr 50 min", highway: "NH 354 & Khemkaran Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khadur Sahib", distance: 460, duration: "8 hr 00 min", highway: "Goindwal Sahib-Khadur Sahib Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Patti", distance: 490, duration: "8 hr 30 min", highway: "NH 354 & Harike Pattan Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tarn Taran", distance: 475, duration: "8 hr 15 min", highway: "NH 54 (Takht Sri Tarn Taran Sahib)", defaultVehicle: "taxi", isPopular: true },

  // ==========================================
  // --- Uttar Pradesh Corridors (from Noida) ---
  // ==========================================

  // Agra District
  { from: "Noida", to: "Agra", distance: 180, duration: "2 hr 45 min", highway: "Yamuna Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kiraoli", distance: 195, duration: "3 hr 00 min", highway: "Yamuna Expressway & NH 21", defaultVehicle: "taxi" },
  { from: "Noida", to: "Fatehabad", distance: 215, duration: "3 hr 15 min", highway: "Yamuna Expressway & Agra Inner Ring Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bah", distance: 250, duration: "4 hr 00 min", highway: "Yamuna Expressway & SH 62", defaultVehicle: "taxi" },
  { from: "Noida", to: "Etmadpur", distance: 190, duration: "2 hr 55 min", highway: "Yamuna Expressway & NH 19", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khandauli", distance: 175, duration: "2 hr 40 min", highway: "Yamuna Expressway & Sadabad-Agra Rd", defaultVehicle: "taxi" },

  // Aligarh District
  { from: "Noida", to: "Aligarh", distance: 130, duration: "2 hr 30 min", highway: "Yamuna Expressway & Aligarh Link Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Khair", distance: 105, duration: "2 hr 00 min", highway: "Yamuna Expressway & Tappal-Khair Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Atrauli", distance: 155, duration: "3 hr 00 min", highway: "NH 34 & Aligarh-Atrauli Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Iglas", distance: 140, duration: "2 hr 40 min", highway: "Yamuna Expressway & Raya-Iglas Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Gabhana", distance: 115, duration: "2 hr 10 min", highway: "GT Road (NH 34)", defaultVehicle: "taxi" },

  // Prayagraj District
  { from: "Noida", to: "Prayagraj", distance: 630, duration: "8 hr 30 min", highway: "Agra-Lucknow & Purvanchal / NH 19", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Soraon", distance: 615, duration: "8 hr 15 min", highway: "Agra-Lucknow Expressway & NH 30", defaultVehicle: "taxi" },
  { from: "Noida", to: "Karchana", distance: 645, duration: "8 hr 50 min", highway: "NH 19 & SH 98", defaultVehicle: "taxi" },
  { from: "Noida", to: "Meja", distance: 670, duration: "9 hr 15 min", highway: "NH 19 & Mirzapur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Phulpur", distance: 640, duration: "8 hr 40 min", highway: "Agra-Lucknow Expressway & Prayagraj-Gorakhpur Hwy", defaultVehicle: "taxi" },
  { from: "Noida", to: "Koraon", distance: 685, duration: "9 hr 30 min", highway: "NH 19 & MP Border Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Handia", distance: 655, duration: "9 hr 00 min", highway: "NH 19 (GT Road)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bara", distance: 640, duration: "8 hr 45 min", highway: "NH 30 & Rewa Road", defaultVehicle: "taxi" },

  // Ambedkar Nagar District
  { from: "Noida", to: "Akbarpur", distance: 620, duration: "8 hr 30 min", highway: "Purvanchal Expressway & SH 5", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Tanda", distance: 640, duration: "8 hr 50 min", highway: "Purvanchal Expressway & Tanda Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jalalpur", distance: 635, duration: "8 hr 45 min", highway: "Purvanchal Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bhiti", distance: 605, duration: "8 hr 15 min", highway: "Purvanchal Expressway & Akbarpur-Bhiti Rd", defaultVehicle: "taxi" },

  // Amethi District
  { from: "Noida", to: "Amethi", distance: 560, duration: "7 hr 45 min", highway: "Purvanchal Expressway & SH 34", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Gauriganj", distance: 545, duration: "7 hr 30 min", highway: "Purvanchal Expressway & Rae Bareli-Amethi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jagdishpur", distance: 530, duration: "7 hr 15 min", highway: "Purvanchal Expressway & Lucknow-Varanasi Hwy", defaultVehicle: "taxi" },
  { from: "Noida", to: "Musafirkhana", distance: 540, duration: "7 hr 25 min", highway: "Purvanchal Expressway & NH 731", defaultVehicle: "taxi" },

  // Amroha District
  { from: "Noida", to: "Amroha", distance: 130, duration: "2 hr 30 min", highway: "Delhi-Meerut Expressway & NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Hasanpur", distance: 120, duration: "2 hr 20 min", highway: "NH 9 & Gajraula-Hasanpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dhanaura", distance: 135, duration: "2 hr 35 min", highway: "Delhi-Meerut Expressway & NH 9", defaultVehicle: "taxi" },
  { from: "Noida", to: "Naugawan Sadat", distance: 145, duration: "2 hr 50 min", highway: "NH 9 & Amroha-Bijnor Rd", defaultVehicle: "taxi" },

  // Auraiya District
  { from: "Noida", to: "Auraiya", distance: 340, duration: "5 hr 00 min", highway: "Yamuna & Agra-Lucknow Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bidhuna", distance: 330, duration: "4 hr 50 min", highway: "Agra-Lucknow Expressway & SH 21", defaultVehicle: "taxi" },

  // Azamgarh District
  { from: "Noida", to: "Azamgarh", distance: 690, duration: "9 hr 30 min", highway: "Purvanchal Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sagri", distance: 705, duration: "9 hr 45 min", highway: "Purvanchal Expressway & Gorakhpur-Azamgarh Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mehnagar", distance: 700, duration: "9 hr 40 min", highway: "Purvanchal Expressway & SH 67", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nizamabad", distance: 685, duration: "9 hr 25 min", highway: "Purvanchal Expressway (Black Clay Pottery Circuit)", defaultVehicle: "taxi" },

  // Baghpat District
  { from: "Noida", to: "Baghpat", distance: 55, duration: "1 hr 15 min", highway: "Eastern Peripheral Expressway & Delhi-Saharanpur Hwy", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Baraut", distance: 75, duration: "1 hr 35 min", highway: "Delhi-Dehradun Expressway & SH 57", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Khekada", distance: 45, duration: "1 hr 00 min", highway: "Eastern Peripheral Expressway", defaultVehicle: "taxi" },

  // Bahraich District
  { from: "Noida", to: "Bahraich", distance: 570, duration: "8 hr 00 min", highway: "Agra-Lucknow Expressway & NH 927", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Nanpara", distance: 605, duration: "8 hr 40 min", highway: "Agra-Lucknow Expressway & Nepal Border Hwy", defaultVehicle: "taxi" },
  { from: "Noida", to: "Payagpur", distance: 590, duration: "8 hr 20 min", highway: "NH 927 & Gonda-Bahraich Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mahasi", distance: 580, duration: "8 hr 10 min", highway: "Bahraich-Sitapur Highway", defaultVehicle: "taxi" },

  // Ballia District
  { from: "Noida", to: "Ballia", distance: 830, duration: "11 hr 30 min", highway: "Purvanchal Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bansdih", distance: 845, duration: "11 hr 50 min", highway: "Purvanchal Expressway & SH 1", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rasra", distance: 795, duration: "11 hr 00 min", highway: "Purvanchal Expressway & NH 31", defaultVehicle: "taxi" },
  { from: "Noida", to: "Belthara Road", distance: 810, duration: "11 hr 15 min", highway: "Purvanchal Expressway & SH 1A", defaultVehicle: "taxi" },

  // Balrampur District
  { from: "Noida", to: "Balrampur", distance: 620, duration: "8 hr 45 min", highway: "Agra-Lucknow Expressway & NH 730", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Tulsipur", distance: 650, duration: "9 hr 15 min", highway: "NH 730 (Devipatan Shaktipeeth Circuit)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Utraula", distance: 635, duration: "9 hr 00 min", highway: "NH 730 & Gonda-Utraula Rd", defaultVehicle: "taxi" },

  // Banda District
  { from: "Noida", to: "Banda", distance: 510, duration: "7 hr 30 min", highway: "Yamuna & Bundelkhand Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Naraini", distance: 540, duration: "8 hr 00 min", highway: "Bundelkhand Expressway & Kalinjar Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Atarra", distance: 530, duration: "7 hr 50 min", highway: "Bundelkhand Expressway & SH 92", defaultVehicle: "taxi" },
  { from: "Noida", to: "Baberu", distance: 520, duration: "7 hr 40 min", highway: "Bundelkhand Expressway & Kamasin Rd", defaultVehicle: "taxi" },

  // Barabanki District
  { from: "Noida", to: "Barabanki", distance: 535, duration: "7 hr 00 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Fatehpur", distance: 550, duration: "7 hr 20 min", highway: "NH 27 & Mahmudabad-Fatehpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Haidergarh", distance: 540, duration: "7 hr 15 min", highway: "Purvanchal Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ramnagar", distance: 555, duration: "7 hr 30 min", highway: "NH 27 & Bahraich Highway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nawabganj", distance: 530, duration: "6 hr 55 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi" },

  // Bareilly District
  { from: "Noida", to: "Bareilly", distance: 245, duration: "4 hr 30 min", highway: "Delhi-Meerut Expressway & NH 9 / NH 530", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Baheri", distance: 275, duration: "5 hr 00 min", highway: "NH 9 & Bareilly-Nainital Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Aonla", distance: 235, duration: "4 hr 20 min", highway: "NH 9 & Badaun-Bareilly Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Meerganj", distance: 230, duration: "4 hr 15 min", highway: "NH 9 (Delhi-Bareilly Highway)", defaultVehicle: "taxi" },

  // Basti District
  { from: "Noida", to: "Basti", distance: 640, duration: "8 hr 30 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Harraiya", distance: 615, duration: "8 hr 10 min", highway: "NH 27 (Gorakhpur-Lucknow Highway)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rudhauli", distance: 655, duration: "8 hr 50 min", highway: "NH 27 & Siddharthnagar Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bhanpur", distance: 650, duration: "8 hr 45 min", highway: "NH 27 & Basti-Bhanpur Rd", defaultVehicle: "taxi" },

  // Bijnor District
  { from: "Noida", to: "Bijnor", distance: 150, duration: "3 hr 00 min", highway: "Delhi-Meerut Expressway & NH 34", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Najibabad", distance: 185, duration: "3 hr 30 min", highway: "Delhi-Meerut Expressway & NH 34", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nagina", distance: 180, duration: "3 hr 25 min", highway: "NH 734", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dhampur", distance: 170, duration: "3 hr 15 min", highway: "Delhi-Meerut Expressway & NH 734", defaultVehicle: "taxi" },

  // Bulandshahr District
  { from: "Noida", to: "Bulandshahr", distance: 75, duration: "1 hr 30 min", highway: "NH 34", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Anupshahr", distance: 115, duration: "2 hr 15 min", highway: "NH 34 & Aligarh-Anupshahr Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Syana", distance: 90, duration: "1 hr 50 min", highway: "NH 34 & Garh-Syana Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khurja", distance: 85, duration: "1 hr 40 min", highway: "NH 34 (Ceramic City Corridor)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Shikarpur", distance: 95, duration: "2 hr 00 min", highway: "NH 34 & Bulandshahr-Shikarpur Rd", defaultVehicle: "taxi" },

  // Chandauli District
  { from: "Noida", to: "Chandauli", distance: 805, duration: "11 hr 00 min", highway: "Agra-Lucknow Expressway & NH 19", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sakaldiha", distance: 815, duration: "11 hr 15 min", highway: "NH 19 & Chandauli-Sakaldiha Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chakia", distance: 830, duration: "11 hr 30 min", highway: "NH 19 & Naugarh-Chakia Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Naugarh", distance: 855, duration: "12 hr 00 min", highway: "NH 19 & Vindhyachal Range Rd", defaultVehicle: "taxi" },

  // Chitrakoot District
  { from: "Noida", to: "Chitrakoot", distance: 570, duration: "8 hr 15 min", highway: "Yamuna & Bundelkhand Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Karwi", distance: 565, duration: "8 hr 10 min", highway: "Bundelkhand Expressway & NH 35", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mau", distance: 595, duration: "8 hr 45 min", highway: "NH 35 & Shankargarh Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rajapur", distance: 580, duration: "8 hr 30 min", highway: "Bundelkhand Expressway & Yamuna Bank Hwy", defaultVehicle: "taxi" },

  // Deoria District
  { from: "Noida", to: "Deoria", distance: 780, duration: "10 hr 45 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Rudrapur", distance: 765, duration: "10 hr 30 min", highway: "NH 27 & Deoria-Rudrapur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Barhaj", distance: 795, duration: "11 hr 00 min", highway: "NH 27 & Saryu River Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Salempur", distance: 800, duration: "11 hr 10 min", highway: "NH 27 & Bhatni Rd", defaultVehicle: "taxi" },

  // Etah District
  { from: "Noida", to: "Etah", distance: 205, duration: "3 hr 30 min", highway: "Yamuna Expressway & NH 34", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Aliganj", distance: 245, duration: "4 hr 15 min", highway: "NH 34 & Etah-Farrukhabad Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jalesar", distance: 175, duration: "3 hr 00 min", highway: "Yamuna Expressway & Hathras-Jalesar Rd", defaultVehicle: "taxi" },

  // Etawah District
  { from: "Noida", to: "Etawah", distance: 285, duration: "4 hr 00 min", highway: "Agra-Lucknow Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Jaswantnagar", distance: 270, duration: "3 hr 45 min", highway: "Agra-Lucknow Expressway & NH 19", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bharthana", distance: 295, duration: "4 hr 15 min", highway: "Agra-Lucknow Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Saifai", distance: 280, duration: "3 hr 55 min", highway: "Agra-Lucknow Expressway (Saifai Exit)", defaultVehicle: "taxi", isPopular: true },

  // Farrukhabad District
  { from: "Noida", to: "Farrukhabad", distance: 310, duration: "4 hr 45 min", highway: "Agra-Lucknow Expressway & SH 29", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kaimganj", distance: 280, duration: "4 hr 15 min", highway: "Aligarh-Etah-Kaimganj Highway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Amritpur", distance: 320, duration: "5 hr 00 min", highway: "Agra-Lucknow Expressway & Farrukhabad-Shahjahanpur Rd", defaultVehicle: "taxi" },

  // Fatehpur District
  { from: "Noida", to: "Fatehpur", distance: 490, duration: "7 hr 00 min", highway: "Yamuna Expressway & NH 19", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bindki", distance: 465, duration: "6 hr 35 min", highway: "Yamuna Expressway & NH 19", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khaga", distance: 520, duration: "7 hr 25 min", highway: "NH 19 (GT Road)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Husainganj", distance: 495, duration: "7 hr 10 min", highway: "NH 19 & Fatehpur-Rae Bareli Rd", defaultVehicle: "taxi" },

  // Firozabad District
  { from: "Noida", to: "Firozabad", distance: 220, duration: "3 hr 15 min", highway: "Yamuna & Agra-Lucknow Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Jasrana", distance: 215, duration: "3 hr 10 min", highway: "Yamuna Expressway & Shikohabad Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Shikohabad", distance: 235, duration: "3 hr 25 min", highway: "Agra-Lucknow Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tundla", distance: 200, duration: "2 hr 55 min", highway: "Yamuna Expressway & NH 19", defaultVehicle: "taxi" },

  // Gautam Buddha Nagar District
  { from: "Noida", to: "Noida", distance: 20, duration: "35 min", highway: "Noida City Expressway & Master Plan Roads", defaultVehicle: "taxi" },
  { from: "Noida", to: "Greater Noida", distance: 25, duration: "40 min", highway: "Noida-Greater Noida Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dadri", distance: 35, duration: "50 min", highway: "NH 34 (GT Road)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jewar", distance: 55, duration: "55 min", highway: "Yamuna Expressway (Noida International Airport Hub)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bisrakh", distance: 18, duration: "30 min", highway: "Noida Extension / Greater Noida West Link", defaultVehicle: "taxi" },

  // Ghaziabad District
  { from: "Noida", to: "Ghaziabad", distance: 20, duration: "35 min", highway: "NH 9 & Hindon Elevated Road", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Loni", distance: 30, duration: "45 min", highway: "Eastern Peripheral Expressway & Delhi-Saharanpur Hwy", defaultVehicle: "taxi" },
  { from: "Noida", to: "Modinagar", distance: 45, duration: "55 min", highway: "Delhi-Meerut Expressway & Meerut Road", defaultVehicle: "taxi" },
  { from: "Noida", to: "Muradnagar", distance: 35, duration: "45 min", highway: "Delhi-Meerut Expressway (Gangnahar Canal Route)", defaultVehicle: "taxi" },

  // Ghazipur District
  { from: "Noida", to: "Ghazipur", distance: 810, duration: "11 hr 15 min", highway: "Purvanchal Expressway (Ghazipur Terminal)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Zamania", distance: 835, duration: "11 hr 45 min", highway: "Purvanchal Expressway & Ganga Bridge Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Saidpur", distance: 785, duration: "10 hr 50 min", highway: "Purvanchal Expressway & Varanasi-Ghazipur Hwy", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mohammadabad", distance: 830, duration: "11 hr 35 min", highway: "Purvanchal Expressway & NH 31", defaultVehicle: "taxi" },

  // Gonda District
  { from: "Noida", to: "Gonda", distance: 590, duration: "8 hr 15 min", highway: "Agra-Lucknow Expressway & NH 334", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Colonelganj", distance: 565, duration: "7 hr 50 min", highway: "Agra-Lucknow Expressway & Jarwal Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tarabganj", distance: 605, duration: "8 hr 30 min", highway: "Agra-Lucknow Expressway & Ayodhya Link Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mankapur", distance: 615, duration: "8 hr 45 min", highway: "Agra-Lucknow Expressway & Gonda-Basti Hwy", defaultVehicle: "taxi" },

  // Gorakhpur District
  { from: "Noida", to: "Gorakhpur", distance: 710, duration: "9 hr 45 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Campierganj", distance: 725, duration: "10 hr 00 min", highway: "NH 27 & Gorakhpur-Sonauli Hwy", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bansgaon", distance: 730, duration: "10 hr 15 min", highway: "Agra-Lucknow Expressway & Purvanchal Link", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sahjanwa", distance: 690, duration: "9 hr 25 min", highway: "NH 27 (Gorakhpur Industrial Corridor)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khajni", distance: 705, duration: "9 hr 40 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi" },

  // Hamirpur District
  { from: "Noida", to: "Hamirpur", distance: 440, duration: "6 hr 30 min", highway: "Yamuna & Bundelkhand Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Rath", distance: 460, duration: "6 hr 50 min", highway: "Bundelkhand Expressway & Hamirpur-Jhansi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Maudaha", distance: 470, duration: "7 hr 00 min", highway: "Bundelkhand Expressway & NH 34", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sarila", distance: 435, duration: "6 hr 25 min", highway: "Bundelkhand Expressway", defaultVehicle: "taxi" },

  // Hapur District
  { from: "Noida", to: "Hapur", distance: 60, duration: "1 hr 10 min", highway: "NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Garhmukteshwar", distance: 85, duration: "1 hr 35 min", highway: "NH 9 (Brijghat Ganga Holy Pilgrimage)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dhaulana", distance: 45, duration: "55 min", highway: "Eastern Peripheral Expressway & UPSIDC Industrial Rd", defaultVehicle: "taxi" },

  // Hardoi District
  { from: "Noida", to: "Hardoi", distance: 410, duration: "6 hr 00 min", highway: "Agra-Lucknow Expressway & SH 25", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Shahabad", distance: 380, duration: "5 hr 30 min", highway: "NH 9 & Bareilly-Hardoi Highway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sandila", distance: 445, duration: "6 hr 30 min", highway: "Agra-Lucknow Expressway (Sandila Industrial Exit)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bilgram", distance: 395, duration: "5 hr 45 min", highway: "Agra-Lucknow Expressway & Kannauj-Bilgram Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sawayajpur", distance: 370, duration: "5 hr 25 min", highway: "Farrukhabad-Shahjahanpur Rd", defaultVehicle: "taxi" },

  // Hathras District
  { from: "Noida", to: "Hathras", distance: 145, duration: "2 hr 25 min", highway: "Yamuna Expressway & Mathura-Hathras Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sadabad", distance: 160, duration: "2 hr 40 min", highway: "Yamuna Expressway & Agra-Sadabad Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sikandra Rao", distance: 175, duration: "2 hr 55 min", highway: "NH 34 (GT Road)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sasni", distance: 135, duration: "2 hr 15 min", highway: "NH 34 & Aligarh-Hathras Rd", defaultVehicle: "taxi" },

  // Jalaun District
  { from: "Noida", to: "Jalaun", distance: 390, duration: "5 hr 45 min", highway: "Bundelkhand Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Orai", distance: 410, duration: "6 hr 00 min", highway: "Bundelkhand Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kalpi", distance: 430, duration: "6 hr 15 min", highway: "Bundelkhand Expressway & Yamuna River Bridge", defaultVehicle: "taxi" },
  { from: "Noida", to: "Madhogarh", distance: 375, duration: "5 hr 30 min", highway: "Bundelkhand Expressway & Auraiya Rd", defaultVehicle: "taxi" },

  // Jaunpur District
  { from: "Noida", to: "Jaunpur", distance: 720, duration: "9 hr 45 min", highway: "Purvanchal Expressway & Varanasi Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Shahganj", distance: 695, duration: "9 hr 20 min", highway: "Purvanchal Expressway & Shahganj-Ayodhya Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Machhlishahr", distance: 710, duration: "9 hr 35 min", highway: "Purvanchal Expressway & NH 31", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kerakat", distance: 745, duration: "10 hr 10 min", highway: "Purvanchal Expressway & Jaunpur-Varanasi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Badlapur", distance: 685, duration: "9 hr 10 min", highway: "Purvanchal Expressway & Lucknow-Varanasi Hwy", defaultVehicle: "taxi" },

  // Jhansi District
  { from: "Noida", to: "Jhansi", distance: 440, duration: "6 hr 30 min", highway: "Yamuna Expressway & NH 44 (Gwalior-Jhansi Hwy)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Mauranipur", distance: 485, duration: "7 hr 15 min", highway: "NH 39 (Jhansi-Khajuraho Highway)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Garautha", distance: 460, duration: "6 hr 50 min", highway: "Bundelkhand Expressway & Erach Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Moth", distance: 420, duration: "6 hr 10 min", highway: "NH 27 (Kanpur-Jhansi Highway)", defaultVehicle: "taxi" },

  // Kannauj District
  { from: "Noida", to: "Kannauj", distance: 325, duration: "4 hr 30 min", highway: "Agra-Lucknow Expressway (Kannauj Perfume Capital Exit)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Tirwa", distance: 335, duration: "4 hr 40 min", highway: "Agra-Lucknow Expressway (Tirwa Exit)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chhibramau", distance: 300, duration: "4 hr 10 min", highway: "Agra-Lucknow Expressway & GT Road", defaultVehicle: "taxi" },

  // Kanpur Dehat District
  { from: "Noida", to: "Akbarpur", distance: 390, duration: "5 hr 35 min", highway: "Agra-Lucknow Expressway & NH 19", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bhognipur", distance: 410, duration: "5 hr 55 min", highway: "Yamuna Expressway & NH 19", defaultVehicle: "taxi" },
  { from: "Noida", to: "Derapur", distance: 375, duration: "5 hr 20 min", highway: "Agra-Lucknow Expressway & Rura Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rasoolabad", distance: 360, duration: "5 hr 10 min", highway: "Agra-Lucknow Expressway & Asalatganj Rd", defaultVehicle: "taxi" },

  // Kanpur Nagar District
  { from: "Noida", to: "Kanpur", distance: 430, duration: "6 hr 00 min", highway: "Agra-Lucknow Expressway & Kanpur-Lucknow Hwy / NH 19", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kalyanpur", distance: 415, duration: "5 hr 45 min", highway: "Agra-Lucknow Expressway & GT Road / IIT Kanpur Corridor", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bilhaur", distance: 360, duration: "5 hr 10 min", highway: "Agra-Lucknow Expressway & GT Road", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ghatampur", distance: 460, duration: "6 hr 30 min", highway: "NH 19 & Hamirpur Highway", defaultVehicle: "taxi" },

  // Kasganj District
  { from: "Noida", to: "Kasganj", distance: 185, duration: "3 hr 15 min", highway: "Yamuna Expressway & Mathura-Bareilly Highway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Patiali", distance: 220, duration: "3 hr 50 min", highway: "NH 34 & Aliganj Rd", defaultVehicle: "taxi" },

  // Kaushambi District
  { from: "Noida", to: "Manjhanpur", distance: 575, duration: "7 hr 50 min", highway: "Yamuna Expressway & NH 19", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sirathu", distance: 560, duration: "7 hr 35 min", highway: "NH 19 (GT Road)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Chail", distance: 590, duration: "8 hr 05 min", highway: "NH 19 & Prayagraj Airport Bypass", defaultVehicle: "taxi" },

  // Kushinagar District
  { from: "Noida", to: "Padrauna", distance: 760, duration: "10 hr 30 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Khadda", distance: 780, duration: "10 hr 50 min", highway: "NH 27 & Nepal-Bihar Border Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kaptanganj", distance: 740, duration: "10 hr 15 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi" },
  { from: "Noida", to: "Hata", distance: 745, duration: "10 hr 20 min", highway: "NH 27 (Gorakhpur-Kushinagar Highway)", defaultVehicle: "taxi" },

  // Lakhimpur Kheri District
  { from: "Noida", to: "Lakhimpur", distance: 435, duration: "6 hr 30 min", highway: "Delhi-Bareilly NH 9 & Shahjahanpur Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Palia", distance: 460, duration: "7 hr 00 min", highway: "NH 730 (Dudhwa National Park Wildlife Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dhaurahra", distance: 470, duration: "7 hr 15 min", highway: "NH 730 & Ghaghara River Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mohammadi", distance: 395, duration: "5 hr 50 min", highway: "NH 9 & Shahjahanpur-Mohammadi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nighasan", distance: 480, duration: "7 hr 30 min", highway: "NH 730 & Tikunia Indo-Nepal Border Rd", defaultVehicle: "taxi" },

  // Lalitpur District
  { from: "Noida", to: "Lalitpur", distance: 520, duration: "7 hr 45 min", highway: "NH 44 (North-South Corridor)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Talbehat", distance: 480, duration: "7 hr 10 min", highway: "NH 44 & Talbehat Fort Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mahroni", distance: 540, duration: "8 hr 05 min", highway: "NH 44 & Tikamgarh Rd", defaultVehicle: "taxi" },

  // Lucknow District
  { from: "Noida", to: "Lucknow", distance: 510, duration: "6 hr 30 min", highway: "Agra-Lucknow Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Malihabad", distance: 485, duration: "6 hr 15 min", highway: "Agra-Lucknow Expressway (Mango Belt Exit)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Mohanlalganj", distance: 535, duration: "6 hr 50 min", highway: "Purvanchal Expressway & Raebareli Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bakshi Ka Talab", distance: 495, duration: "6 hr 20 min", highway: "Agra-Lucknow Expressway & Sitapur Hwy", defaultVehicle: "taxi" },

  // Maharajganj District
  { from: "Noida", to: "Maharajganj", distance: 740, duration: "10 hr 15 min", highway: "Agra-Lucknow Expressway & NH 27 / NH 730", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Paniyara", distance: 725, duration: "10 hr 00 min", highway: "Gorakhpur-Maharajganj Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Pharenda", distance: 715, duration: "9 hr 50 min", highway: "NH 27 & Anandnagar Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Nautanwa", distance: 765, duration: "10 hr 45 min", highway: "NH 24 (Sonauli Nepal Border Gateway)", defaultVehicle: "taxi", isPopular: true },

  // Mahoba District
  { from: "Noida", to: "Mahoba", distance: 540, duration: "7 hr 45 min", highway: "Yamuna & Bundelkhand Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Charkhari", distance: 525, duration: "7 hr 30 min", highway: "Bundelkhand Expressway & Lake City Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kulpahar", distance: 520, duration: "7 hr 25 min", highway: "Bundelkhand Expressway & NH 39", defaultVehicle: "taxi" },

  // Mainpuri District
  { from: "Noida", to: "Mainpuri", distance: 250, duration: "3 hr 45 min", highway: "Agra-Lucknow Expressway (Mainpuri Exit)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bhongaon", distance: 265, duration: "4 hr 00 min", highway: "GT Road (NH 34) & Agra-Lucknow Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Karhal", distance: 240, duration: "3 hr 30 min", highway: "Agra-Lucknow Expressway (Karhal Interchange)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ghiror", distance: 235, duration: "3 hr 25 min", highway: "Yamuna Expressway & Shikohabad Rd", defaultVehicle: "taxi" },

  // Mathura District
  { from: "Noida", to: "Mathura", distance: 140, duration: "2 hr 15 min", highway: "Yamuna Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Vrindavan", distance: 145, duration: "2 hr 10 min", highway: "Yamuna Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Chhata", distance: 110, duration: "1 hr 45 min", highway: "Yamuna Expressway & NH 19", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mahavan", distance: 145, duration: "2 hr 20 min", highway: "Yamuna Expressway & Gokul Dham Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Govardhan", distance: 150, duration: "2 hr 25 min", highway: "Yamuna Expressway & Govardhan Parikrama Marg", defaultVehicle: "taxi", isPopular: true },

  // Mau District
  { from: "Noida", to: "Mau", distance: 760, duration: "10 hr 30 min", highway: "Purvanchal Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Maunath Bhanjan", distance: 765, duration: "10 hr 35 min", highway: "Purvanchal Expressway (Textile City Hub)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ghosi", distance: 745, duration: "10 hr 15 min", highway: "Purvanchal Expressway & Gorakhpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Muhammadabad", distance: 755, duration: "10 hr 25 min", highway: "Purvanchal Expressway & Azamgarh-Mau Hwy", defaultVehicle: "taxi" },

  // Meerut District
  { from: "Noida", to: "Meerut", distance: 70, duration: "1 hr 15 min", highway: "Delhi-Meerut Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Sardhana", distance: 85, duration: "1 hr 35 min", highway: "Delhi-Meerut Expressway & Sardhana Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Mawana", distance: 90, duration: "1 hr 40 min", highway: "Delhi-Meerut Expressway & Bijnor Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Daurala", distance: 80, duration: "1 hr 25 min", highway: "Delhi-Meerut Expressway & NH 58", defaultVehicle: "taxi" },

  // Mirzapur District
  { from: "Noida", to: "Mirzapur", distance: 750, duration: "10 hr 15 min", highway: "Agra-Lucknow Expressway & NH 19 / Purvanchal", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Chunar", distance: 780, duration: "10 hr 45 min", highway: "NH 19 & Chunar Fort Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Lalganj", distance: 720, duration: "9 hr 45 min", highway: "NH 35 & Rewa-Mirzapur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Marihan", distance: 765, duration: "10 hr 30 min", highway: "SH 5A & Robertsganj Highway", defaultVehicle: "taxi" },

  // Moradabad District
  { from: "Noida", to: "Moradabad", distance: 165, duration: "2 hr 45 min", highway: "Delhi-Meerut Expressway & NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Thakurdwara", distance: 195, duration: "3 hr 30 min", highway: "NH 9 & Kashipur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bilari", distance: 180, duration: "3 hr 10 min", highway: "NH 9 & Moradabad-Chandausi Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kanth", distance: 160, duration: "2 hr 40 min", highway: "Delhi-Meerut Expressway & Haridwar Hwy", defaultVehicle: "taxi" },

  // Muzaffarnagar District
  { from: "Noida", to: "Muzaffarnagar", distance: 115, duration: "1 hr 55 min", highway: "Delhi-Meerut Expressway & NH 58", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Jansath", distance: 120, duration: "2 hr 05 min", highway: "Delhi-Meerut Expressway & Meerut-Pauri Hwy", defaultVehicle: "taxi" },
  { from: "Noida", to: "Khatauli", distance: 95, duration: "1 hr 35 min", highway: "Delhi-Meerut Expressway & NH 58", defaultVehicle: "taxi" },
  { from: "Noida", to: "Budhana", distance: 105, duration: "1 hr 45 min", highway: "Eastern Peripheral Expressway & Kandhla Rd", defaultVehicle: "taxi" },

  // Pilibhit District
  { from: "Noida", to: "Pilibhit", distance: 295, duration: "5 hr 15 min", highway: "Delhi-Meerut Expressway & NH 9 / Pilibhit Tiger Reserve", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bisalpur", distance: 290, duration: "5 hr 10 min", highway: "NH 9 & Bareilly-Bisalpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Puranpur", distance: 335, duration: "6 hr 00 min", highway: "NH 730", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kalinagar", distance: 345, duration: "6 hr 15 min", highway: "NH 730 & Sharda Sagar Dam Route", defaultVehicle: "taxi" },

  // Pratapgarh District
  { from: "Noida", to: "Pratapgarh", distance: 610, duration: "8 hr 15 min", highway: "Agra-Lucknow Expressway & Purvanchal / NH 330", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kunda", distance: 565, duration: "7 hr 40 min", highway: "Yamuna Expressway & Lucknow-Prayagraj Hwy (NH 30)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Raniganj", distance: 630, duration: "8 hr 35 min", highway: "Purvanchal Expressway & Varanasi-Pratapgarh Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Patti", distance: 645, duration: "8 hr 50 min", highway: "Purvanchal Expressway & Sultanpur-Patti Rd", defaultVehicle: "taxi" },

  // Rae Bareli District
  { from: "Noida", to: "Rae Bareli", distance: 535, duration: "7 hr 15 min", highway: "Agra-Lucknow Expressway & NH 30", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Salon", distance: 560, duration: "7 hr 40 min", highway: "Purvanchal Expressway & Salon-Pratapgarh Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Unchahar", distance: 550, duration: "7 hr 30 min", highway: "NH 30 & NTPC Power Plant Corridor", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dalmau", distance: 525, duration: "7 hr 05 min", highway: "Agra-Lucknow Expressway & Ganga Ghat Route", defaultVehicle: "taxi" },

  // Rampur District
  { from: "Noida", to: "Rampur", distance: 190, duration: "3 hr 15 min", highway: "Delhi-Meerut Expressway & NH 9", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Bilaspur", distance: 220, duration: "3 hr 45 min", highway: "NH 9 & Nainital Highway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Suar", distance: 205, duration: "3 hr 30 min", highway: "NH 9 & Bazpur Rd", defaultVehicle: "taxi" },

  // Saharanpur District
  { from: "Noida", to: "Saharanpur", distance: 175, duration: "3 hr 00 min", highway: "Delhi-Meerut Expressway & NH 334 / Delhi-Dehradun Hwy", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Deoband", distance: 140, duration: "2 hr 20 min", highway: "Delhi-Meerut Expressway & NH 58", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Nakur", distance: 170, duration: "2 hr 55 min", highway: "Eastern Peripheral Expressway & SH 57", defaultVehicle: "taxi" },
  { from: "Noida", to: "Gangoh", distance: 155, duration: "2 hr 40 min", highway: "Eastern Peripheral Expressway & Gangoh-Karnal Rd", defaultVehicle: "taxi" },

  // Sambhal District
  { from: "Noida", to: "Sambhal", distance: 145, duration: "2 hr 45 min", highway: "Delhi-Meerut Expressway & NH 9 / Aligarh-Moradabad Hwy", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Chandausi", distance: 175, duration: "3 hr 15 min", highway: "NH 9 & Moradabad-Chandausi Rd", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Gunnaur", distance: 150, duration: "2 hr 50 min", highway: "Yamuna Expressway & Babrala Rd", defaultVehicle: "taxi" },

  // Sant Kabir Nagar District
  { from: "Noida", to: "Khalilabad", distance: 675, duration: "9 hr 15 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Mehdawal", distance: 690, duration: "9 hr 35 min", highway: "NH 27 & Bakhira Bird Sanctuary Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Hariharpur", distance: 685, duration: "9 hr 30 min", highway: "NH 27 & Dhanghata Rd", defaultVehicle: "taxi" },

  // Shahjahanpur District
  { from: "Noida", to: "Shahjahanpur", distance: 325, duration: "5 hr 15 min", highway: "Delhi-Meerut Expressway & NH 9 / NH 30", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Powayan", distance: 355, duration: "5 hr 45 min", highway: "NH 730", defaultVehicle: "taxi" },
  { from: "Noida", to: "Tilhar", distance: 305, duration: "4 hr 55 min", highway: "NH 30 (Delhi-Lucknow Highway)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jalalabad", distance: 315, duration: "5 hr 05 min", highway: "Bareilly-Etawah Highway (SH 29)", defaultVehicle: "taxi" },

  // Shamli District
  { from: "Noida", to: "Shamli", distance: 100, duration: "1 hr 45 min", highway: "Delhi-Saharanpur Highway & Eastern Peripheral", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Thana Bhawan", distance: 120, duration: "2 hr 10 min", highway: "Delhi-Saharanpur Highway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Kairana", distance: 95, duration: "1 hr 40 min", highway: "Panipat-Khatima Highway (NH 709AD)", defaultVehicle: "taxi" },

  // Shravasti District
  { from: "Noida", to: "Bhinga", distance: 605, duration: "8 hr 30 min", highway: "Agra-Lucknow Expressway & NH 730", defaultVehicle: "taxi" },
  { from: "Noida", to: "Shravasti", distance: 595, duration: "8 hr 20 min", highway: "Buddhist Circuit Highway (Jetavana Monastery Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Ikauna", distance: 585, duration: "8 hr 10 min", highway: "NH 730 & Bahraich-Balrampur Rd", defaultVehicle: "taxi" },

  // Siddharthnagar District
  { from: "Noida", to: "Naugarh", distance: 680, duration: "9 hr 30 min", highway: "Agra-Lucknow Expressway & NH 730 (Kapilvastu Heritage Route)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Itwa", distance: 660, duration: "9 hr 10 min", highway: "NH 730 & Domariyaganj Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Bansi", distance: 670, duration: "9 hr 20 min", highway: "NH 28 & Rapti River Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Shohratgarh", distance: 695, duration: "9 hr 45 min", highway: "NH 730 & Indo-Nepal Border Rd", defaultVehicle: "taxi" },

  // Sitapur District
  { from: "Noida", to: "Sitapur", distance: 435, duration: "6 hr 15 min", highway: "Delhi-Bareilly NH 9 & NH 30", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Misrikh", distance: 420, duration: "6 hr 00 min", highway: "Agra-Lucknow Expressway & Naimisharanya Pilgrimage Route", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Mahmudabad", distance: 475, duration: "6 hr 45 min", highway: "Agra-Lucknow Expressway & Sitapur-Barabanki Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Laharpur", distance: 450, duration: "6 hr 30 min", highway: "NH 30 & Lakhimpur Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Biswan", distance: 460, duration: "6 hr 40 min", highway: "Sitapur-Gonda Rd", defaultVehicle: "taxi" },

  // Sonbhadra District
  { from: "Noida", to: "Robertsganj", distance: 835, duration: "11 hr 45 min", highway: "Agra-Lucknow Expressway & NH 19 / SH 5A", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Dudhi", distance: 920, duration: "13 hr 00 min", highway: "Varanasi-Shaktinagar Energy Highway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Obra", distance: 875, duration: "12 hr 15 min", highway: "SH 5A (Thermal Power Hub)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Ghorawal", distance: 810, duration: "11 hr 20 min", highway: "Mirzapur-Sonbhadra Route", defaultVehicle: "taxi" },

  // Sultanpur District
  { from: "Noida", to: "Sultanpur", distance: 600, duration: "8 hr 15 min", highway: "Purvanchal Expressway & NH 731", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Kadipur", distance: 635, duration: "8 hr 45 min", highway: "Purvanchal Expressway & Gomti River Valley", defaultVehicle: "taxi" },
  { from: "Noida", to: "Lambhua", distance: 620, duration: "8 hr 30 min", highway: "Purvanchal Expressway & Varanasi Rd", defaultVehicle: "taxi" },

  // Unnao District
  { from: "Noida", to: "Unnao", distance: 460, duration: "6 hr 15 min", highway: "Agra-Lucknow Expressway (Unnao Exit)", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Safipur", distance: 435, duration: "5 hr 50 min", highway: "Agra-Lucknow Expressway & Bangarmau Route", defaultVehicle: "taxi" },
  { from: "Noida", to: "Purwa", distance: 480, duration: "6 hr 35 min", highway: "Agra-Lucknow Expressway & Maurawan Rd", defaultVehicle: "taxi" },
  { from: "Noida", to: "Hasanganj", distance: 450, duration: "6 hr 05 min", highway: "Agra-Lucknow Expressway (Mohan-Hasanganj Interchange)", defaultVehicle: "taxi" },

  // Varanasi District
  { from: "Noida", to: "Pindra", distance: 785, duration: "10 hr 15 min", highway: "NH 31 & Babatpur Airport Corridor", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rajatalab", distance: 795, duration: "10 hr 25 min", highway: "NH 19 (GT Road)", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sewarai", distance: 825, duration: "11 hr 00 min", highway: "Purvanchal Expressway & Ghazipur Border", defaultVehicle: "taxi" },

  // Ayodhya District
  { from: "Noida", to: "Ayodhya", distance: 610, duration: "8 hr 00 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Faizabad", distance: 600, duration: "7 hr 50 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi", isPopular: true },
  { from: "Noida", to: "Milkipur", distance: 580, duration: "7 hr 35 min", highway: "NH 27 & Jagdishpur Link", defaultVehicle: "taxi" },
  { from: "Noida", to: "Rudauli", distance: 565, duration: "7 hr 20 min", highway: "NH 27 & Saryu River Basin", defaultVehicle: "taxi" },
  { from: "Noida", to: "Sohawal", distance: 590, duration: "7 hr 40 min", highway: "Agra-Lucknow Expressway & NH 27", defaultVehicle: "taxi" },

  // --- Delhi Corridors ---
  { from: "Delhi", to: "Agra", distance: 210, duration: "3 hr 15 min", highway: "Yamuna Expressway", defaultVehicle: "taxi" },
  { from: "Delhi", to: "Jaipur", distance: 280, duration: "4 hr 30 min", highway: "Delhi-Mumbai Expressway", defaultVehicle: "taxi" },
  { from: "Delhi", to: "Haridwar", distance: 220, duration: "3 hr 50 min", highway: "Delhi-Meerut Expressway", defaultVehicle: "tempo-traveller" },
  { from: "Delhi", to: "Vrindavan", distance: 160, duration: "2 hr 45 min", highway: "Yamuna Expressway", defaultVehicle: "taxi" },
  { from: "Delhi", to: "Chandigarh", distance: 250, duration: "4 hr 15 min", highway: "NH44", defaultVehicle: "taxi" },

  // --- Haridwar / Uttarakhand Corridors ---
  { from: "Haridwar", to: "Rishikesh", distance: 25, duration: "45 min", highway: "Badrinath Road", defaultVehicle: "taxi" },
  { from: "Haridwar", to: "Dehradun", distance: 55, duration: "1 hr 15 min", highway: "NH7", defaultVehicle: "taxi" },
  { from: "Haridwar", to: "Mussoorie", distance: 85, duration: "2 hr 30 min", highway: "NH7 & Mussoorie Rd", defaultVehicle: "tempo-traveller" },
  { from: "Haridwar", to: "Chandigarh", distance: 200, duration: "4 hr 00 min", highway: "NH7", defaultVehicle: "taxi" },

  // --- Agra Corridors ---
  { from: "Agra", to: "Mathura", distance: 55, duration: "1 hr 00 min", highway: "NH19", defaultVehicle: "taxi" },
  { from: "Agra", to: "Jaipur", distance: 240, duration: "4 hr 15 min", highway: "NH21", defaultVehicle: "taxi" },

  // --- Mathura Corridors ---
  { from: "Mathura", to: "Vrindavan", distance: 15, duration: "30 min", highway: "Vrindavan Road", defaultVehicle: "taxi" },
  { from: "Mathura", to: "Jaipur", distance: 225, duration: "4 hr 00 min", highway: "NH21", defaultVehicle: "taxi" },
  { from: "Mathura", to: "Haridwar", distance: 310, duration: "5 hr 30 min", highway: "Expressways", defaultVehicle: "tempo-traveller" },

  // --- Haryana Corridors ---
  { from: "Haryana", to: "Delhi", distance: 60, duration: "1 hr 30 min", highway: "NH 44 & Delhi-Gurgaon Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Noida", distance: 75, duration: "1 hr 45 min", highway: "KMP Expressway & DND Flyway", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Chandigarh", distance: 210, duration: "3 hr 30 min", highway: "NH 44 (Delhi-Chandigarh Hwy)", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Jaipur", distance: 240, duration: "4 hr 00 min", highway: "NH 48 (Delhi-Jaipur Hwy)", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Agra", distance: 195, duration: "3 hr 15 min", highway: "Yamuna Expressway & KMP", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Haridwar", distance: 230, duration: "4 hr 15 min", highway: "NH 334 & Delhi-Meerut Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Dehradun", distance: 260, duration: "4 hr 45 min", highway: "NH 307 & Mohand Pass Hwy", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Amritsar", distance: 410, duration: "6 hr 45 min", highway: "NH 44 & Grand Trunk Road", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Shimla", distance: 320, duration: "6 hr 30 min", highway: "NH 5 & Himalayan Expressway", defaultVehicle: "taxi", isPopular: true },
  { from: "Haryana", to: "Manali", distance: 510, duration: "10 hr 30 min", highway: "NH 3 & Kiratpur-Nerchowk Expressway", defaultVehicle: "taxi", isPopular: true },
];

export const masterRoutesRegistry = masterRoutes;
export default masterRoutes;
