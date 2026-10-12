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

// The sitemap protocol requires these 5 characters to be escaped as XML
// entities inside <loc>. Next.js does NOT do this for you — if any raw
// "&", "<", ">", "'" or '"' reaches the output, the XML becomes invalid
// from that point on and every entry after it silently disappears.
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

    // Dedup on the canonical (unescaped) URL so escaped/unescaped
    // variants of the same URL are never treated as different entries.
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

  // Routes directory pages
  addUrl("/routes", 0.95, "daily");
  addUrl("/taxi-routes", 0.9, "weekly");
  addUrl("/taxi-service-routes", 0.9, "weekly");
  addUrl("/airport-service-routes", 0.85, "weekly");
  addUrl("/local-sightseeing-routes", 0.85, "weekly");
  addUrl("/taxi", 0.85, "weekly");
  addUrl("/distance", 0.85, "weekly");
  addUrl("/local-cab", 0.85, "weekly");
  addUrl("/airport-transfer", 0.85, "weekly");
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

  // Company info
  addUrl("/about-us", 0.6, "monthly");
  addUrl("/contact", 0.6, "monthly");
  addUrl("/privacy-policy", 0.3, "monthly");
  addUrl("/terms-and-conditions", 0.3, "monthly");

  // =========================================================================
  // 2. City Route Directories (/taxi-service-routes/[city], etc.)
  // =========================================================================
  for (const city of Object.values(citiesData)) {
    addUrl(`/taxi-service-routes/${city.slug}`, 0.85, "weekly");
    addUrl(`/airport-service-routes/${city.slug}`, 0.85, "weekly");
    addUrl(`/local-sightseeing-routes/${city.slug}`, 0.85, "weekly");
  }

  // =========================================================================
  // 3. Cab Services from cityCabServicesData (Configured City Hubs)
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
  // 4. Dynamic City Cab Landing Pages for all supported cities in citiesData
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
  // 5. Intercity Master Routes from masterRoutesRegistry (/route/[slug] & /routes/[slug])
  // =========================================================================
  const routeVehicleSlugs = [
    "one-way-taxi",
    "taxi-fare",
    "taxi",
    "sedan-taxi",
    "etios-taxi",
    "amaze-taxi",
    "ertiga-taxi",
    "innova-crysta-taxi",
    "dzire-taxi",
    "suv-taxi",
    "tempo-traveller",
    "12-seater-tempo-traveller",
    "16-seater-tempo-traveller",
    "20-seater-tempo-traveller",
    "24-seater-tempo-traveller",
    "luxury-tempo-traveller",
    "urbania-rental",
    "urbania",
    "distance-travel-time",
    "contact-number",
  ];

  for (const route of masterRoutesRegistry) {
    const fSlug = slugify(route.from);
    const tSlug = slugify(route.to);

    // Both forward and reverse corridors
    const pairs = [
      { from: fSlug, to: tSlug },
      { from: tSlug, to: fSlug },
    ];

    for (const pair of pairs) {
      for (const vSlug of routeVehicleSlugs) {
        const routeSlug = `/route/${pair.from}-to-${pair.to}-${vSlug}`;

        const priority =
          vSlug === "one-way-taxi" || vSlug === "taxi-fare"
            ? 0.9
            : vSlug === "taxi" || vSlug === "ertiga-taxi" || vSlug === "sedan-taxi"
              ? 0.85
              : 0.8;

        addUrl(routeSlug, priority, "weekly");
      }
    }
  }

  // =========================================================================
  // 6. Local Sector and Highway URLs from urlroute.json (urlRoutes)
  // =========================================================================
  // NOTE: these come straight from JSON data, not through slugify(), so
  // they are the most likely source of a raw "&" or other unsafe character
  // breaking the XML. escapeXml() inside addUrl() now guards against that,
  // but it's worth auditing urlroute.json itself for entries with "&",
  // spaces, or other non-slug characters and cleaning them at the source.
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