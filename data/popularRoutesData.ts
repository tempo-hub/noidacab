import { getCityDetails } from "@/lib/cityData";

export interface PopularRouteCardItem {
  id: string;
  from: string;
  to: string;
  vehicle: string;
  vehicleSlug: string;
  distance: string;
  duration: string;
  startingFare: string;
  rawFare: number;
  slug: string; // e.g. "lucknow-to-ayodhya-tempo-traveller"
  highway?: string;
  isPopular?: boolean;
}

export interface CityPairDistanceInfo {
  distanceKm: number;
  duration: string;
  highway: string;
}

import {
  MasterRouteItem,
  PopularRouteDefinition,
  masterRoutes,
  masterRoutesRegistry,
} from "./masterRoutes";

export type { MasterRouteItem, PopularRouteDefinition };
export { masterRoutes, masterRoutesRegistry };
export const definedPopularRoutes = masterRoutes;

/**
 * Helper to safely extract numeric distance in kilometers.
 */
export function parseDistanceKm(dist: number | string | undefined, fallback: number = 180): number {
  if (typeof dist === "number") return dist;
  if (!dist) return fallback;
  const num = parseFloat(String(dist).replace(/[^0-9.]/g, ""));
  return isNaN(num) || num <= 0 ? fallback : Math.round(num);
}

// Vehicle calculation logic
export interface VehiclePricingRule {
  name: string;
  slug: string;
  perKm: number;
  fixedBase?: number;
}

export const vehicleRules: Record<string, VehiclePricingRule> = {
  "tempo-traveller": { name: "Tempo Traveller", slug: "tempo-traveller", perKm: 19.7, fixedBase: 0 },
  "12-seater-tempo-traveller": { name: "12-Seater Tempo Traveller", slug: "12-seater-tempo-traveller", perKm: 20, fixedBase: 0 },
  "16-seater-tempo-traveller": { name: "16-Seater Tempo Traveller", slug: "16-seater-tempo-traveller", perKm: 25, fixedBase: 0 },
  "20-seater-tempo-traveller": { name: "20-Seater Tempo Traveller", slug: "20-seater-tempo-traveller", perKm: 27, fixedBase: 0 },
  "24-seater-tempo-traveller": { name: "24-Seater Tempo Traveller", slug: "24-seater-tempo-traveller", perKm: 29, fixedBase: 0 },
  "luxury-tempo-traveller": { name: "Luxury Tempo Traveller", slug: "luxury-tempo-traveller", perKm: 25, fixedBase: 0 },
  "taxi-fare": { name: "Taxi Fare", slug: "taxi-fare", perKm: 10, fixedBase: 0 },
  "fare-taxi": { name: "Taxi Fare", slug: "fare-taxi", perKm: 10, fixedBase: 0 },
  "one-way-taxi": { name: "One Way Taxi", slug: "one-way-taxi", perKm: 10, fixedBase: 0 },
  "oneway-taxi": { name: "One Way Taxi", slug: "one-way-taxi", perKm: 10, fixedBase: 0 },
  "one-way": { name: "One Way Taxi", slug: "one-way-taxi", perKm: 10, fixedBase: 0 },
  "taxi": { name: "Sedan Taxi", slug: "taxi", perKm: 10, fixedBase: 0 },
  "sedan": { name: "Sedan Taxi", slug: "sedan-taxi", perKm: 10, fixedBase: 0 },
  "sedan-taxi": { name: "Sedan Taxi", slug: "sedan-taxi", perKm: 10, fixedBase: 0 },
  "dzire": { name: "Dzire Taxi", slug: "dzire-taxi", perKm: 10, fixedBase: 0 },
  "dzire-taxi": { name: "Dzire Taxi", slug: "dzire-taxi", perKm: 10, fixedBase: 0 },
  "etios": { name: "Etios Taxi", slug: "etios-taxi", perKm: 10, fixedBase: 0 },
  "etios-taxi": { name: "Etios Taxi", slug: "etios-taxi", perKm: 10, fixedBase: 0 },
  "amaze": { name: "Amaze Taxi", slug: "amaze-taxi", perKm: 10, fixedBase: 0 },
  "amaze-taxi": { name: "Amaze Taxi", slug: "amaze-taxi", perKm: 10, fixedBase: 0 },
  "wagonr": { name: "WagonR Taxi", slug: "wagonr-taxi", perKm: 10, fixedBase: 0 },
  "wagonr-taxi": { name: "WagonR Taxi", slug: "wagonr-taxi", perKm: 10, fixedBase: 0 },
  "hatchback": { name: "Hatchback Taxi", slug: "hatchback-taxi", perKm: 10, fixedBase: 0 },
  "hatchback-taxi": { name: "Hatchback Taxi", slug: "hatchback-taxi", perKm: 10, fixedBase: 0 },
  "swift": { name: "Swift Taxi", slug: "swift-taxi", perKm: 10, fixedBase: 0 },
  "swift-taxi": { name: "Swift Taxi", slug: "swift-taxi", perKm: 10, fixedBase: 0 },
  "suv": { name: "SUV Taxi", slug: "suv-taxi", perKm: 13, fixedBase: 0 },
  "suv-taxi": { name: "SUV Taxi", slug: "suv-taxi", perKm: 13, fixedBase: 0 },
  "ertiga": { name: "Ertiga Taxi", slug: "ertiga-taxi", perKm: 13, fixedBase: 0 },
  "ertiga-taxi": { name: "Ertiga Taxi", slug: "ertiga-taxi", perKm: 13, fixedBase: 0 },
  "innova-crysta": { name: "Innova Crysta Taxi", slug: "innova-crysta-taxi", perKm: 16, fixedBase: 0 },
  "innova-crysta-taxi": { name: "Innova Crysta Taxi", slug: "innova-crysta-taxi", perKm: 16, fixedBase: 0 },
  "innova": { name: "Innova Crysta Taxi", slug: "innova-crysta-taxi", perKm: 16, fixedBase: 0 },
  "innova-taxi": { name: "Innova Crysta Taxi", slug: "innova-crysta-taxi", perKm: 16, fixedBase: 0 },
  "urbania": { name: "Force Urbania", slug: "urbania", perKm: 20, fixedBase: 0 },
  "urbania-rental": { name: "Force Urbania", slug: "urbania", perKm: 25, fixedBase: 0 },
};

export function normalizeVehicleKey(vehicleSlug?: string): string {
  if (!vehicleSlug) return "tempo-traveller";
  const clean = vehicleSlug.toLowerCase().trim();

  if (clean.includes("one-way") || clean.includes("oneway")) return "one-way-taxi";
  if (clean.includes("innova")) return "innova-crysta";
  if (clean.includes("urbania")) return "urbania";
  if (clean.includes("luxury-tempo") || clean.includes("luxury")) return "luxury-tempo-traveller";
  if (clean.includes("12-seater")) return "12-seater-tempo-traveller";
  if (clean.includes("16-seater")) return "16-seater-tempo-traveller";
  if (clean.includes("20-seater")) return "20-seater-tempo-traveller";
  if (clean.includes("24-seater")) return "24-seater-tempo-traveller";
  if (clean.includes("tempo")) return "tempo-traveller";
  if (clean.includes("dzire")) return "dzire";
  if (clean.includes("etios")) return "etios";
  if (clean.includes("amaze")) return "amaze";
  if (clean.includes("ertiga")) return "ertiga";
  if (clean.includes("wagonr")) return "wagonr";
  if (clean.includes("swift")) return "swift";
  if (clean.includes("hatchback")) return "hatchback";
  if (clean.includes("suv")) return "suv";
  if (clean.includes("sedan")) return "sedan";
  if (clean.includes("taxi-fare") || clean.includes("fare-taxi")) return "taxi-fare";
  if (clean.includes("taxi")) return "taxi";

  return clean;
}

export function calculateStartingFare(distanceKm: number, vehicleType: string = "tempo-traveller"): number {
  const vKey = normalizeVehicleKey(vehicleType);
  const rule = vehicleRules[vKey] || vehicleRules[vehicleType] || vehicleRules["tempo-traveller"];
  const cabPrice = rule.perKm;

  // Formula: Math.round((distance * 1.5 * cabprice) + 500)
  return Math.round((distanceKm * 1.5 * cabPrice) + 500);
}

// Builds a full route card item
export function buildPopularRouteItem(
  from: string,
  to: string,
  vehicleKey: string = "tempo-traveller"
): PopularRouteCardItem {
  const pairInfo = getCityPairInfo(from, to);
  const fare = calculateStartingFare(pairInfo.distanceKm, vehicleKey);
  const vRule = vehicleRules[vehicleKey] || vehicleRules[normalizeVehicleKey(vehicleKey)] || vehicleRules["tempo-traveller"];

  const fromSlug = from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const toSlug = to.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const slug = `${fromSlug}-to-${toSlug}-${vRule.slug}`;

  return {
    id: slug,
    from,
    to,
    vehicle: vRule.name,
    vehicleSlug: vRule.slug,
    distance: `${pairInfo.distanceKm} km`,
    duration: pairInfo.duration,
    startingFare: `₹${fare.toLocaleString("en-IN")}`,
    rawFare: fare,
    slug,
    highway: pairInfo.highway,
    isPopular: true,
  };
}

// =========================================================================================
// 🔄 AUTOMATIC DERIVATION FROM MASTER REGISTRY
// Everything below is automatically built from masterRoutesRegistry.
// Zero manual synchronization needed!
// =========================================================================================

// 1. Dynamic cityDistanceMap derived from masterRoutesRegistry (both directions)
export const cityDistanceMap: Record<string, CityPairDistanceInfo> = {};

// 2. Dynamic cityDestinations derived from masterRoutesRegistry (both pickup & drop)
export const cityDestinations: Record<string, string[]> = {};

// 3. Dynamic popularRoutesByCityCatalog derived from masterRoutesRegistry
export const popularRoutesByCityCatalog: Record<string, PopularRouteCardItem[]> = {};

export function syncDerivedDataFromRegistry() {
  // Clear existing
  for (const k of Object.keys(cityDistanceMap)) delete cityDistanceMap[k];
  for (const k of Object.keys(cityDestinations)) delete cityDestinations[k];
  for (const k of Object.keys(popularRoutesByCityCatalog)) delete popularRoutesByCityCatalog[k];

  for (const r of masterRoutesRegistry) {
    const fClean = r.from.trim();
    const tClean = r.to.trim();
    const fSlug = fClean.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const tSlug = tClean.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const distKm = parseDistanceKm(r.distance ?? r.distanceKm);
    const highway = r.highway || "National Highway Expressway";
    const defaultV = r.defaultVehicle || "tempo-traveller";

    // A. Distance Map (both forward & reverse)
    const pairInfo: CityPairDistanceInfo = {
      distanceKm: distKm,
      duration: r.duration,
      highway,
    };
    cityDistanceMap[`${fSlug}-${tSlug}`] = pairInfo;
    cityDistanceMap[`${tSlug}-${fSlug}`] = pairInfo;

    // B. City Destinations (both pickup & drop)
    if (!cityDestinations[fSlug]) cityDestinations[fSlug] = [];
    if (!cityDestinations[fSlug].some((d) => d.toLowerCase() === tClean.toLowerCase())) {
      cityDestinations[fSlug].push(tClean);
    }

    if (!cityDestinations[tSlug]) cityDestinations[tSlug] = [];
    if (!cityDestinations[tSlug].some((d) => d.toLowerCase() === fClean.toLowerCase())) {
      cityDestinations[tSlug].push(fClean);
    }

    // C. Popular Routes Catalog (both cities)
    const itemForward = buildPopularRouteItem(fClean, tClean, defaultV);
    const itemReverse = buildPopularRouteItem(tClean, fClean, defaultV);

    if (!popularRoutesByCityCatalog[fSlug]) popularRoutesByCityCatalog[fSlug] = [];
    if (!popularRoutesByCityCatalog[fSlug].some((item) => item.to.toLowerCase() === tClean.toLowerCase())) {
      popularRoutesByCityCatalog[fSlug].push(itemForward);
    }

    if (!popularRoutesByCityCatalog[tSlug]) popularRoutesByCityCatalog[tSlug] = [];
    if (!popularRoutesByCityCatalog[tSlug].some((item) => item.to.toLowerCase() === fClean.toLowerCase())) {
      popularRoutesByCityCatalog[tSlug].push(itemReverse);
    }
  }
}

// Initial derivation on load
syncDerivedDataFromRegistry();

/**
 * Returns pair distance, duration & highway info.
 * Directly queries masterRoutesRegistry first (both directions), then cityDistanceMap.
 */
export function getCityPairInfo(from: string, to: string): CityPairDistanceInfo {
  const f = from.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
  const t = to.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

  // Direct lookup in master registry (both directions)
  const found = masterRoutesRegistry.find((r) => {
    const rf = r.from.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
    const rt = r.to.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
    return (rf === f && rt === t) || (rf === t && rt === f);
  });

  if (found) {
    return {
      distanceKm: parseDistanceKm(found.distance ?? found.distanceKm),
      duration: found.duration,
      highway: found.highway || "Expressway / National Highway",
    };
  }

  const key1 = `${f}-${t}`;
  const key2 = `${t}-${f}`;
  if (cityDistanceMap[key1]) return cityDistanceMap[key1];
  if (cityDistanceMap[key2]) return cityDistanceMap[key2];

  return {
    distanceKm: 180,
    duration: "3 hr 30 min",
    highway: "National Highway Expressway",
  };
}

/**
 * Programmatic helper to add a new route object at runtime.
 */
export function addPopularRoute(route: MasterRouteItem) {
  masterRoutesRegistry.unshift(route);
  syncDerivedDataFromRegistry();
}

/**
 * Fetches popular route cards for any city.
 * Automatically dynamically scoped to vehicle and city from masterRoutesRegistry!
 */
export function getPopularRoutesForCity(
  citySlugOrName?: string,
  vehicleSlug?: string,
  limit?: number
): PopularRouteCardItem[] {
  let cleanCity = (citySlugOrName || "")
    .toLowerCase()
    .trim()
    .replace(/^(taxi-service-in-|airport-service-in-|local-sightseeing-in-|taxi-fare-in-)/, "")
    .replace(/-(taxi-fare|taxi-service|tempo-traveller|sightseeing|airport)$/, "");

  if (cleanCity.includes("-in-")) {
    const parts = cleanCity.split("-in-");
    cleanCity = parts[parts.length - 1];
  }

  const cleanTarget = cleanCity.replace(/[^a-z0-9]/g, "");
  const isAll = !cleanTarget || cleanTarget === "all";

  const vKey = normalizeVehicleKey(vehicleSlug);
  const defaultRule = vehicleRules[vKey] || vehicleRules["tempo-traveller"];

  const cards: PopularRouteCardItem[] = [];
  const seenDrops = new Set<string>();

  for (const item of masterRoutesRegistry) {
    const fClean = item.from.trim();
    const tClean = item.to.trim();
    const fNorm = fClean.toLowerCase().replace(/[^a-z0-9]/g, "");
    const tNorm = tClean.toLowerCase().replace(/[^a-z0-9]/g, "");

    let pickup = "";
    let drop = "";

    if (isAll) {
      pickup = fClean;
      drop = tClean;
    } else if (fNorm === cleanTarget) {
      pickup = citySlugOrName ? citySlugOrName.trim() : fClean;
      drop = tClean;
    } else if (tNorm === cleanTarget) {
      pickup = citySlugOrName ? citySlugOrName.trim() : tClean;
      drop = fClean;
    } else {
      continue;
    }

    if (pickup.toLowerCase().trim() === drop.toLowerCase().trim()) continue;

    const dropKey = drop.toLowerCase().trim();
    if (seenDrops.has(dropKey)) continue;
    seenDrops.add(dropKey);

    const currentVKey = vehicleSlug ? vKey : normalizeVehicleKey(item.defaultVehicle || "tempo-traveller");
    const vRule = vehicleRules[currentVKey] || defaultRule;

    const distKm =
      typeof item.distance === "number"
        ? item.distance
        : typeof item.distanceKm === "number"
          ? item.distanceKm
          : parseFloat(String(item.distance || "").replace(/[^0-9.]/g, "")) || 180;

    const rate = vRule.perKm || 10;
    const rawFare = Math.round(distKm * 1.5 * rate + 500);

    const fromSlug = pickup.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const toSlug = drop.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const slug = `${fromSlug}-to-${toSlug}-${vRule.slug}`;

    cards.push({
      id: slug,
      from: pickup,
      to: drop,
      vehicle: vRule.name,
      vehicleSlug: vRule.slug,
      distance: `${distKm} km`,
      duration: item.duration,
      startingFare: `₹${rawFare.toLocaleString("en-IN")}`,
      rawFare,
      slug,
      highway: item.highway,
      isPopular: true,
    });
  }

  // Graceful fallback if city has no routes yet in masterRoutes
  if (cards.length === 0 && !isAll) {
    const originCity = getCityDetails(cleanCity);
    const fallbackList = [
      ...(originCity.popularOutstation || []),
      "Ayodhya",
      "Varanasi",
      "Prayagraj",
      "Kanpur",
      "Agra",
      "Delhi",
      "Noida",
    ];

    const currentCity = citySlugOrName ? citySlugOrName.trim() : (originCity.name || "Noida");

    for (const dest of fallbackList) {
      if (dest.toLowerCase().trim() === currentCity.toLowerCase().trim()) continue;
      const pairInfo = getCityPairInfo(currentCity, dest);
      const rawFare = calculateStartingFare(pairInfo.distanceKm, vKey);
      const fromSlug = currentCity.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const toSlug = dest.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const slug = `${fromSlug}-to-${toSlug}-${defaultRule.slug}`;

      cards.push({
        id: slug,
        from: currentCity,
        to: dest,
        vehicle: defaultRule.name,
        vehicleSlug: defaultRule.slug,
        distance: `${pairInfo.distanceKm} km`,
        duration: pairInfo.duration,
        startingFare: `₹${rawFare.toLocaleString("en-IN")}`,
        rawFare,
        slug,
        highway: pairInfo.highway,
        isPopular: true,
      });

      if (limit && cards.length >= limit) break;
    }
  }

  return limit ? cards.slice(0, limit) : cards;
}

// =========================================================================================
// 🚀 DYNAMIC ROUTE PAGE DETAIL PARSER (/route/[slug])
// Parses ANY route slug like:
// - "lucknow-to-manali-tempo-traveller"
// - "agra-to-gwalior-taxi"
// - "agra-to-gwalior-innova-crysta"
// - "gwalior-to-agra-taxi"
// =========================================================================================
export interface ParsedRouteDetail {
  slug: string;
  canonicalSlug: string;
  rawSlug?: string;
  from: string;
  to: string;
  vehicle: string;
  vehicleSlug: string;
  distance: string;
  duration: string;
  fare: string;
  highway: string;
  title: string;
  description: string;
  pickupPoints: string[];
  dropPoints: string[];
  vehicleOptions: {
    name: string;
    type: string;
    seats: string;
    luggage: string;
    price: string;
    slug: string;
  }[];
}

export function parseDynamicRouteSlug(slug: string): ParsedRouteDetail {
  const clean = slug.toLowerCase().trim();

  let from = "Lucknow";
  let to = "Ayodhya";
  let vehicleKey = "tempo-traveller";

  // 1. Direct match against masterRoutesRegistry (both directions)
  let matchedRegistry = false;
  for (const r of masterRoutesRegistry) {
    const fSlug = r.from.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
    const tSlug = r.to.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

    // Forward: from-to-to...
    const forwardPrefix = `${fSlug}-to-${tSlug}`;
    if (clean === forwardPrefix || clean.startsWith(`${forwardPrefix}-`)) {
      from = r.from;
      to = r.to;
      const vPart = clean.slice(forwardPrefix.length).replace(/^-/, "");
      vehicleKey = vPart ? normalizeVehicleKey(vPart) : (r.defaultVehicle || "tempo-traveller");
      matchedRegistry = true;
      break;
    }

    // Reverse: to-to-from... (bidirectional pickup & drop)
    const reversePrefix = `${tSlug}-to-${fSlug}`;
    if (clean === reversePrefix || clean.startsWith(`${reversePrefix}-`)) {
      from = r.to;
      to = r.from;
      const vPart = clean.slice(reversePrefix.length).replace(/^-/, "");
      vehicleKey = vPart ? normalizeVehicleKey(vPart) : (r.defaultVehicle || "tempo-traveller");
      matchedRegistry = true;
      break;
    }
  }

  // 2. Generic fallback parser if not explicitly in master registry
  if (!matchedRegistry && clean.includes("-to-")) {
    const parts = clean.split("-to-");
    from = parts[0].replace(/-/g, " ");

    const rest = parts[1];
    if (rest.endsWith("-luxury-tempo-traveller")) {
      to = rest.replace("-luxury-tempo-traveller", "").replace(/-/g, " ");
      vehicleKey = "luxury-tempo-traveller";
    } else if (rest.endsWith("-12-seater-tempo-traveller")) {
      to = rest.replace("-12-seater-tempo-traveller", "").replace(/-/g, " ");
      vehicleKey = "12-seater-tempo-traveller";
    } else if (rest.endsWith("-16-seater-tempo-traveller")) {
      to = rest.replace("-16-seater-tempo-traveller", "").replace(/-/g, " ");
      vehicleKey = "16-seater-tempo-traveller";
    } else if (rest.endsWith("-20-seater-tempo-traveller")) {
      to = rest.replace("-20-seater-tempo-traveller", "").replace(/-/g, " ");
      vehicleKey = "20-seater-tempo-traveller";
    } else if (rest.endsWith("-24-seater-tempo-traveller")) {
      to = rest.replace("-24-seater-tempo-traveller", "").replace(/-/g, " ");
      vehicleKey = "24-seater-tempo-traveller";
    } else if (rest.endsWith("-tempo-traveller")) {
      to = rest.replace("-tempo-traveller", "").replace(/-/g, " ");
      vehicleKey = "tempo-traveller";
    } else if (
      rest.endsWith("-innova-crysta-taxi") ||
      rest.endsWith("-innova-crysta") ||
      rest.endsWith("-innova-taxi") ||
      rest.endsWith("-innova")
    ) {
      to = rest.replace(/-innova(-crysta)?(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "innova-crysta";
    } else if (rest.endsWith("-dzire-taxi") || rest.endsWith("-dzire")) {
      to = rest.replace(/-dzire(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "dzire";
    } else if (rest.endsWith("-etios-taxi") || rest.endsWith("-etios")) {
      to = rest.replace(/-etios(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "etios";
    } else if (rest.endsWith("-amaze-taxi") || rest.endsWith("-amaze")) {
      to = rest.replace(/-amaze(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "amaze";
    } else if (rest.endsWith("-ertiga-taxi") || rest.endsWith("-ertiga")) {
      to = rest.replace(/-ertiga(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "ertiga";
    } else if (rest.endsWith("-wagonr-taxi") || rest.endsWith("-wagonr")) {
      to = rest.replace(/-wagonr(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "wagonr";
    } else if (rest.endsWith("-swift-taxi") || rest.endsWith("-swift")) {
      to = rest.replace(/-swift(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "swift";
    } else if (rest.endsWith("-hatchback-taxi") || rest.endsWith("-hatchback")) {
      to = rest.replace(/-hatchback(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "hatchback";
    } else if (rest.endsWith("-sedan-taxi") || rest.endsWith("-sedan")) {
      to = rest.replace(/-sedan(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "sedan";
    } else if (rest.endsWith("-suv-taxi") || rest.endsWith("-suv")) {
      to = rest.replace(/-suv(-taxi)?$/, "").replace(/-/g, " ");
      vehicleKey = "suv";
    } else if (rest.endsWith("-urbania") || rest.endsWith("-urbania-rental")) {
      to = rest.replace(/-urbania(-rental)?$/, "").replace(/-/g, " ");
      vehicleKey = "urbania";
    } else if (rest.endsWith("-one-way-taxi") || rest.endsWith("-oneway-taxi") || rest.endsWith("-one-way-cab")) {
      to = rest.replace(/-(one-way-taxi|oneway-taxi|one-way-cab)$/, "").replace(/-/g, " ");
      vehicleKey = "one-way-taxi";
    } else if (rest.endsWith("-fare-taxi")) {
      to = rest.replace("-fare-taxi", "").replace(/-/g, " ");
      vehicleKey = "fare-taxi";
    } else if (rest.endsWith("-taxi-fare")) {
      to = rest.replace("-taxi-fare", "").replace(/-/g, " ");
      vehicleKey = "taxi-fare";
    } else if (rest.endsWith("-taxi")) {
      to = rest.replace("-taxi", "").replace(/-/g, " ");
      vehicleKey = "taxi";
    } else {
      to = rest.replace(/-/g, " ");
      vehicleKey = "tempo-traveller";
    }
  }

  // Capitalize
  const cap = (s: string) => s.split(" ").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const fromCap = cap(from);
  const toCap = cap(to);
  const fromSlug = fromCap.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const toSlug = toCap.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const pairInfo = getCityPairInfo(fromCap, toCap);
  const vRule = vehicleRules[vehicleKey] || vehicleRules[normalizeVehicleKey(vehicleKey)] || vehicleRules["tempo-traveller"];
  const fare = calculateStartingFare(pairInfo.distanceKm, vehicleKey);
  const baseKm = pairInfo.distanceKm;
  const canonicalSlug = `${fromSlug}-to-${toSlug}-${vRule.slug}`;

  return {
    slug: canonicalSlug,
    canonicalSlug,
    rawSlug: clean,
    from: fromCap,
    to: toCap,
    vehicle: vRule.name,
    vehicleSlug: vRule.slug,
    distance: `${pairInfo.distanceKm} km`,
    duration: pairInfo.duration,
    fare: `₹${fare.toLocaleString("en-IN")}`,
    highway: pairInfo.highway,
    title: `${fromCap} to ${toCap} ${vRule.name} & Cab Booking`,
    description: `Book a comfortable and verified ${vRule.name} from ${fromCap} to ${toCap}. Distance: ${pairInfo.distanceKm} km (${pairInfo.duration}). Zero surge pricing, professional drivers, and door-to-door pickup.`,
    pickupPoints: [
      `${fromCap} Railway Station`,
      `${fromCap} Airport / City Center`,
      "Doorstep Home / Hotel Pickup",
      "Expressway Entry Toll Point",
    ],
    dropPoints: [
      `${toCap} City Center`,
      `${toCap} Railway Station`,
      `${toCap} Temple / Tourist Hub`,
      "Direct Hotel / Residence Drop",
    ],
    vehicleOptions: [
      {
        name: "Maruti Dzire / Etios",
        type: "Sedan",
        seats: "4 Passengers",
        luggage: "2 Bags",
        price: `₹${calculateStartingFare(baseKm, "dzire").toLocaleString("en-IN")}`,
        slug: "dzire-taxi",
      },
      {
        name: "Maruti Ertiga",
        type: "SUV",
        seats: "6 Passengers",
        luggage: "3 Bags",
        price: `₹${calculateStartingFare(baseKm, "ertiga").toLocaleString("en-IN")}`,
        slug: "ertiga-taxi",
      },
      {
        name: "Toyota Innova Crysta",
        type: "Premium SUV",
        seats: "7 Passengers",
        luggage: "4 Bags",
        price: `₹${calculateStartingFare(baseKm, "innova-crysta").toLocaleString("en-IN")}`,
        slug: "innova-crysta-taxi",
      },
      {
        name: "12-Seater Luxury Tempo",
        type: "Tempo Traveller",
        seats: "12 Passengers",
        luggage: "10 Bags",
        price: `₹${calculateStartingFare(baseKm, "12-seater-tempo-traveller").toLocaleString("en-IN")}`,
        slug: "12-seater-tempo-traveller",
      },
      {
        name: "16-Seater Tempo Traveller",
        type: "Tempo Traveller",
        seats: "16 Passengers",
        luggage: "14 Bags",
        price: `₹${calculateStartingFare(baseKm, "16-seater-tempo-traveller").toLocaleString("en-IN")}`,
        slug: "16-seater-tempo-traveller",
      },
      {
        name: "Force Urbania Luxury Van",
        type: "Luxury Van",
        seats: "12 Passengers",
        luggage: "12 Bags",
        price: `₹${calculateStartingFare(baseKm, "urbania").toLocaleString("en-IN")}`,
        slug: "urbania",
      },
    ],
  };
}
