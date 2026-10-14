import type { MetadataRoute } from "next";
import urlRoutes from "@/data/urlroute.json";
import { masterRoutesRegistry } from "@/data/masterRoutes";
import { cityCabServicesData } from "@/data/cityCabServices";
import { citiesData } from "@/lib/cityData";

const BASE_URL = "https://www.noidacab.com";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Escapes special characters for XML compliance
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();
  const now = new Date();

  function addUrl(
    path: string,
    priority: number = 0.7,
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" = "weekly"
  ) {
    if (!path || typeof path !== "string") return;

    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const fullUrl = `${BASE_URL}${cleanPath}`;

    if (seenUrls.has(fullUrl)) return;
    seenUrls.add(fullUrl);

    entries.push({
      url: escapeXml(fullUrl),
      lastModified: now,
      changeFrequency,
      priority,
    });
  }

  // =========================================================================
  // 1. Core Hub & Static Directory Pages
  // =========================================================================
  addUrl("/", 1.0, "daily");
  addUrl("/cab", 0.9, "daily");
  addUrl("/booking", 0.85, "daily");

  // Route directories
  addUrl("/routes", 0.95, "daily");
  addUrl("/taxi-routes", 0.9, "weekly");
  addUrl("/taxi-service-routes", 0.9, "weekly");
  addUrl("/airport-service-routes", 0.85, "weekly");
  addUrl("/local-sightseeing-routes", 0.85, "weekly");
  addUrl("/taxi", 0.85, "weekly");
  addUrl("/distance", 0.85, "weekly");
  addUrl("/local-cab", 0.85, "weekly");
  addUrl("/airport-transfer", 0.85, "weekly");
  addUrl("/outstation-cab", 0.9, "weekly");
  addUrl("/corporate-cab", 0.8, "weekly");
  addUrl("/hourly-rental", 0.8, "weekly");
  addUrl("/chauffeur-service", 0.8, "weekly");
  addUrl("/blog", 0.7, "weekly");

  // Noida dedicated hub pages
  addUrl("/noida-taxi-fare", 0.9, "weekly");
  addUrl("/one-way-taxi-in-noida", 0.9, "weekly");
  addUrl("/taxi-service-in-noida", 0.9, "weekly");
  addUrl("/sedan-taxi-in-noida", 0.8, "weekly");
  addUrl("/suv-taxi-in-noida", 0.8, "weekly");
  addUrl("/tempo-traveller-in-noida", 0.8, "weekly");
  addUrl("/noida-to-delhi-sedan-taxi", 0.8, "weekly");
  addUrl("/noida-taxi-contact-number", 0.95, "daily");

  // Airport transfer landing hubs
  addUrl("/noida-to-delhi-airport", 0.9, "weekly");
  addUrl("/delhi-airport-to-noida", 0.9, "weekly");
  addUrl("/airport-to-noida", 0.85, "weekly");
  addUrl("/airport-drop-taxi", 0.85, "weekly");
  addUrl("/airport-taxi-noida", 0.85, "weekly");

  // Company info
  addUrl("/about-us", 0.6, "monthly");
  addUrl("/contact", 0.6, "monthly");
  addUrl("/privacy-policy", 0.3, "monthly");
  addUrl("/terms-and-conditions", 0.3, "monthly");

  // =========================================================================
  // 2. City Route Directories
  // =========================================================================
  for (const city of Object.values(citiesData)) {
    addUrl(`/taxi-service-routes/${city.slug}`, 0.85, "weekly");
    addUrl(`/airport-service-routes/${city.slug}`, 0.85, "weekly");
    addUrl(`/local-sightseeing-routes/${city.slug}`, 0.85, "weekly");
  }

  // =========================================================================
  // 3. Cab Services from cityCabServicesData
  // =========================================================================
  for (const group of cityCabServicesData) {
    for (const item of group.items) {
      if (!item.isPhone && item.href && item.href.startsWith("/")) {
        const priority =
          item.href.includes("taxi-service") ||
          item.href.includes("one-way-taxi") ||
          item.href.includes("taxi-fare")
            ? 0.9
            : 0.8;
        addUrl(item.href, priority, "weekly");
      }
    }
  }

  // =========================================================================
  // 4. Dynamic City Cab Landing Pages
  // =========================================================================
  const cityVehicleVariants = [
    "taxi-service-in",
    "one-way-taxi-in",
    "taxi-fare-in",
    "sedan-taxi-in",
    "dzire-taxi-in",
    "etios-taxi-in",
    "amaze-taxi-in",
    "suv-taxi-in",
    "ertiga-taxi-in",
    "innova-crysta-in",
    "tempo-traveller-in",
    "12-seater-tempo-traveller-in",
    "16-seater-tempo-traveller-in",
    "20-seater-tempo-traveller-in",
    "24-seater-tempo-traveller-in",
    "luxury-tempo-traveller-in",
    "urbania-rental-in",
    "airport-service-in",
    "local-sightseeing-in",
  ];

  for (const city of Object.values(citiesData)) {
    for (const prefix of cityVehicleVariants) {
      if (city.slug === "noida" && prefix === "taxi-fare-in") {
        addUrl("/noida-taxi-fare", 0.9, "weekly");
        continue;
      }
      if (city.slug === "noida" && prefix === "one-way-taxi-in") {
        addUrl("/one-way-taxi-in-noida", 0.9, "weekly");
        continue;
      }
      const priority =
        prefix.includes("taxi-service") || prefix.includes("one-way") || prefix.includes("fare")
          ? 0.9
          : 0.8;
      addUrl(`/${prefix}-${city.slug}`, priority, "weekly");
    }
  }

  // =========================================================================
  // 5. Intercity Master Routes (Haryana, Punjab, Uttarakhand, UP, Rajasthan)
  // =========================================================================
  const routeVehicleSlugs = [
    // Standard vehicle types
    "one-way-taxi",
    "taxi-fare",
    "cab-fare",
    "fare",
    "taxi",
    "outstation-taxi",
    "sedan-taxi",
    "dzire-taxi",
    "etios-taxi",
    "amaze-taxi",
    "suv-taxi",
    "ertiga-taxi",
    "innova-crysta-taxi",
    "tempo-traveller",
    "12-seater-tempo-traveller",
    "16-seater-tempo-traveller",
    "20-seater-tempo-traveller",
    "24-seater-tempo-traveller",
    "luxury-tempo-traveller",
    "urbania-rental",
    "urbania",
    "distance-travel-time",
  ];

  for (const route of masterRoutesRegistry) {
    const fSlug = slugify(route.from);
    const tSlug = slugify(route.to);

    // Forward and Reverse corridors (e.g., Noida-to-Chandigarh & Chandigarh-to-Noida)
    const pairs = [
      { from: fSlug, to: tSlug },
      { from: tSlug, to: fSlug },
    ];

    for (const pair of pairs) {
      const baseCorridor = `${pair.from}-to-${pair.to}`;

      // 1. Root level fare/taxi URLs (e.g., /noida-to-chandigarh-taxi-fare, /noida-to-haridwar-taxi)
      addUrl(`/${baseCorridor}-taxi`, 0.9, "weekly");
      addUrl(`/${baseCorridor}-taxi-fare`, 0.9, "weekly");
      addUrl(`/${baseCorridor}-cab-fare`, 0.85, "weekly");
      addUrl(`/${baseCorridor}-one-way-taxi`, 0.9, "weekly");
      addUrl(`/${baseCorridor}-tempo-traveller`, 0.85, "weekly");
      addUrl(`/${baseCorridor}-distance-travel-time`, 0.8, "weekly");

      // 2. /route/ prefixed URLs for all vehicle variants
      for (const vSlug of routeVehicleSlugs) {
        const routeSlug = `/route/${baseCorridor}-${vSlug}`;

        const priority =
          vSlug === "one-way-taxi" || vSlug === "taxi-fare" || vSlug === "taxi"
            ? 0.9
            : vSlug === "ertiga-taxi" || vSlug === "sedan-taxi" || vSlug === "innova-crysta-taxi"
              ? 0.85
              : 0.8;

        addUrl(routeSlug, priority, "weekly");
      }
    }
  }

  // =========================================================================
  // 6. Local Sectors, Highways & Static JSON Paths (urlroute.json)
  // =========================================================================
  for (const r of urlRoutes) {
    if (r && typeof r.url === "string") {
      const trimmed = r.url.trim();
      if (trimmed && trimmed !== "/") {
        addUrl(trimmed, trimmed.includes("-to-") ? 0.85 : 0.75, "weekly");
      }
    }
  }

  return entries;
}