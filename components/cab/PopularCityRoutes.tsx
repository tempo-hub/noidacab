"use client";

import Link from "next/link";
import { masterRoutes } from "@/data/masterRoutes";
import {
  PopularRouteCardItem,
  vehicleRules,
  normalizeVehicleKey,
  calculateStartingFare,
  getCityPairInfo,
} from "@/data/popularRoutesData";

interface Props {
  cityName?: string;
  vehicleSlug?: string;
  vehicleName?: string;
  customRoutes?: PopularRouteCardItem[];
  limit?: number;
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

// Normalize city names for exact & partial matching (e.g. "taxi-service-in-noida", "Noida" -> "noida")
function normalizeCity(c?: string): string {
  if (!c) return "";
  let clean = c.toLowerCase().trim();
  clean = clean.replace(/^(taxi-service-in-|airport-service-in-|local-sightseeing-in-|taxi-fare-in-)/, "");
  clean = clean.replace(/-(taxi-fare|taxi-service|tempo-traveller|sightseeing|airport)$/, "");
  if (clean.includes("-in-")) {
    const parts = clean.split("-in-");
    clean = parts[parts.length - 1];
  }
  return clean.replace(/[^a-z0-9]/g, "");
}

function slugify(val: string): string {
  return val
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Dynamically fetches all connected routes from masterRoutes in data/masterRoutes.ts.
 * Supports both forward (from -> to) and reverse (to -> from) locations.
 * Automatically adds any newly created route to the UI with zero manual wiring.
 */
export function getRoutesFromMasterRoutes(
  cityName?: string,
  vehicleSlug?: string,
  limit?: number
): PopularRouteCardItem[] {
  const targetCityNorm = normalizeCity(cityName);
  const isAllCities = !targetCityNorm || targetCityNorm === "all";

  const vKey = normalizeVehicleKey(vehicleSlug);
  const defaultRule = vehicleRules[vKey] || vehicleRules["tempo-traveller"];

  const cards: PopularRouteCardItem[] = [];
  const seenDrops = new Set<string>();

  for (const item of masterRoutes) {
    const fClean = item.from.trim();
    const tClean = item.to.trim();
    const fNorm = normalizeCity(fClean);
    const tNorm = normalizeCity(tClean);

    let pickup = "";
    let drop = "";

    if (isAllCities) {
      pickup = fClean;
      drop = tClean;
    } else if (fNorm === targetCityNorm) {
      // Direct route from this city
      pickup = cityName ? cityName.trim() : fClean;
      drop = tClean;
    } else if (tNorm === targetCityNorm) {
      // Reverse connection (e.g. item is Lucknow -> Manali; on Manali page, route is Manali -> Lucknow)
      pickup = cityName ? cityName.trim() : tClean;
      drop = fClean;
    } else {
      continue;
    }

    if (normalizeCity(pickup) === normalizeCity(drop)) continue;

    // Deduplicate so each destination city appears only once per pickup city
    const dropKey = drop.toLowerCase().trim();
    if (seenDrops.has(dropKey)) continue;
    seenDrops.add(dropKey);

    // Determine vehicle for this route
    const currentVKey = vehicleSlug ? vKey : normalizeVehicleKey(item.defaultVehicle || "tempo-traveller");
    const vRule = vehicleRules[currentVKey] || defaultRule;

    // Distance & fare calculation directly from masterRoutes entry
    const distKm =
      typeof item.distance === "number"
        ? item.distance
        : typeof item.distanceKm === "number"
        ? item.distanceKm
        : parseFloat(String(item.distance || "").replace(/[^0-9.]/g, "")) || 180;

    const rate = vRule.perKm || 10;
    const rawFare = Math.round(distKm * 1.5 * rate + 500);
    const fromSlug = slugify(pickup);
    const toSlug = slugify(drop);
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
  if (cards.length === 0 && !isAllCities) {
    const fallbackList = [
      "Ayodhya",
      "Varanasi",
      "Prayagraj",
      "Kanpur",
      "Agra",
      "Delhi",
      "Noida",
      "Haridwar",
    ];

    const currentCity = cityName ? cityName.trim() : "Noida";

    for (const dest of fallbackList) {
      if (normalizeCity(dest) === normalizeCity(currentCity)) continue;
      const pairInfo = getCityPairInfo(currentCity, dest);
      const rawFare = calculateStartingFare(pairInfo.distanceKm, vKey);
      const fromSlug = slugify(currentCity);
      const toSlug = slugify(dest);
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

export default function PopularCityRoutes({
  cityName = "Lucknow",
  vehicleSlug,
  vehicleName,
  customRoutes,
  limit,
  title,
  subtitle,
  badgeText,
}: Props) {
  const routes = customRoutes || getRoutesFromMasterRoutes(cityName, vehicleSlug, limit);

  const displayVehicle =
    vehicleName ||
    (vehicleSlug ? vehicleRules[normalizeVehicleKey(vehicleSlug)]?.name : "");

  return (
    <section className="bg-white/95 py-14 sm:py-20 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Exact matching reference image */}
        <div>
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-600">
            {badgeText || `${displayVehicle ? `${displayVehicle.toUpperCase()} ` : ""}POPULAR ROUTES`}
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {title || `Popular ${cityName} ${displayVehicle ? `${displayVehicle} ` : ""}Routes`}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed">
            {subtitle || `Fixed fares for the most booked ${displayVehicle ? `${displayVehicle} ` : ""}routes. Actual time may vary with traffic conditions.`}
          </p>
        </div>

        {/* 3-Column Card Grid - Exact matching reference image */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl md:rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Pickup Row */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        PICKUP
                      </span>
                    </div>
                    <p className="mt-1 pl-4.5 text-lg sm:text-xl font-bold text-gray-900">
                      {item.from}
                    </p>
                  </div>

                  {/* Popular Badge & Vehicle Badge */}
                  <div className="flex flex-col items-end gap-1">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700 border border-amber-200/50">
                      POPULAR
                    </span>
                    {item.vehicle && (
                      <span className="text-[11px] font-semibold text-gray-500">
                        {item.vehicle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Connector Line */}
                <div className="my-1.5 ml-1 h-5 w-0.5 border-l-2 border-dotted border-gray-300" />

                {/* Drop Row */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full border-2 border-gray-400 bg-white shrink-0" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      DROP
                    </span>
                  </div>
                  <p className="mt-1 pl-4.5 text-lg sm:text-xl font-bold text-gray-900">
                    {item.to}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Starting Fare & BOOK Button */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500">Starting fare</p>
                  <p className="text-xl sm:text-2xl font-black text-gray-900">
                    {item.startingFare}
                  </p>
                </div>

                <Link
                  href={`/route/${item.slug}`}
                  className="rounded-full border-2 border-amber-500 bg-white px-6 py-1.5 text-xs font-extrabold text-amber-600 transition hover:bg-amber-500 hover:text-white shadow-xs cursor-pointer tracking-wider uppercase"
                >
                  BOOK
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
