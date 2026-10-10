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
  { from: "Noida", to: "Delhi", distance: 25, duration: "45 min", highway: "DND Flyway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Gurgaon", distance: 55, duration: "1 hr 30 min", highway: "Outer Ring Road / NH48", defaultVehicle: "taxi" },
  { from: "Noida", to: "Agra", distance: 180, duration: "2 hr 45 min", highway: "Yamuna Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Jaipur", distance: 290, duration: "4 hr 45 min", highway: "Delhi-Mumbai Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Haridwar", distance: 215, duration: "3 hr 45 min", highway: "Delhi-Meerut Expressway", defaultVehicle: "tempo-traveller" },
  { from: "Noida", to: "Rishikesh", distance: 240, duration: "4 hr 15 min", highway: "NH334", defaultVehicle: "tempo-traveller" },
  { from: "Noida", to: "Mathura", distance: 140, duration: "2 hr 15 min", highway: "Yamuna Expressway", defaultVehicle: "taxi" },
  { from: "Noida", to: "Dehradun", distance: 255, duration: "4 hr 30 min", highway: "Delhi-Dehradun Expressway", defaultVehicle: "tempo-traveller" },

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
];

export const masterRoutesRegistry = masterRoutes;
export default masterRoutes;
