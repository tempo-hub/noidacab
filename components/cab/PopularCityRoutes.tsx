"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
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
  buttonText?: string;
}

// Normalize city names for exact & partial matching (e.g. "taxi-service-in-noida", "Noida" -> "noida")
function normalizeCity(c?: string): string {
  if (!c) return "";
  let clean = c.toLowerCase().trim();
  clean = clean.replace(/^(taxi-service-in-|airport-service-in-|local-sightseeing-in-|taxi-fare-in-|one-way-taxi-in-|one-way-cab-in-)/, "");
  clean = clean.replace(/-(taxi-fare|taxi-service|tempo-traveller|sightseeing|airport|taxi|cab)$/, "");
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
  limit?: number,
  vehicleName?: string
): PopularRouteCardItem[] {
  const targetCityNorm = normalizeCity(cityName);
  const isAllCities =
    !targetCityNorm ||
    targetCityNorm === "all" ||
    targetCityNorm === "allroutes" ||
    targetCityNorm === "allcities";

  const vKey = normalizeVehicleKey(vehicleSlug);
  const defaultRule = vehicleRules[vKey] || vehicleRules["tempo-traveller"];

  const cards: PopularRouteCardItem[] = [];
  const seenPairs = new Set<string>();

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

    // Deduplicate per pickup-drop pair
    const pairKey = isAllCities
      ? `${pickup.toLowerCase().trim()}->${drop.toLowerCase().trim()}`
      : drop.toLowerCase().trim();
    if (seenPairs.has(pairKey)) continue;
    seenPairs.add(pairKey);

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
      vehicle: vehicleName || vRule.name,
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
      "Delhi",
      "Gurugram",
      "Agra",
      "Jaipur",
      "Haridwar",
      "Mathura",
      "Dehradun",
      "Ambala",
      "Panipat",
      "Karnal",
      "Rohtak",
      "Hisar",
      "Chandigarh",
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
        vehicle: vehicleName || defaultRule.name,
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
  cityName = "Noida",
  vehicleSlug,
  vehicleName,
  customRoutes,
  limit,
  title,
  subtitle,
  badgeText,
  buttonText,
}: Props) {
  const routes = customRoutes || getRoutesFromMasterRoutes(cityName, vehicleSlug, limit, vehicleName);

  const isContactMode =
    vehicleSlug === "contact-number" ||
    (vehicleSlug ? normalizeVehicleKey(vehicleSlug) === "contact-number" : false);

  const displayVehicle =
    vehicleName ||
    (vehicleSlug ? vehicleRules[normalizeVehicleKey(vehicleSlug)]?.name : "");

  const PAGE_SIZE = 40;
  const [currentPage, setCurrentPage] = useState(1);
  const [isViewAll, setIsViewAll] = useState(false);
  const [search, setSearch] = useState("");

  const filteredRoutes = routes.filter((item) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase().trim();
    return (
      item.from.toLowerCase().includes(q) ||
      item.to.toLowerCase().includes(q) ||
      (item.highway && item.highway.toLowerCase().includes(q))
    );
  });

  const totalPages = Math.ceil(filteredRoutes.length / PAGE_SIZE) || 1;
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const startIndex = (safePage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, filteredRoutes.length);

  const displayedRoutes = isViewAll
    ? filteredRoutes
    : filteredRoutes.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (typeof window !== "undefined") {
      const el = document.getElementById("popular-city-routes");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [1];
    if (safePage > 3) pages.push("...");
    const start = Math.max(2, safePage - 1);
    const end = Math.min(totalPages - 1, safePage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (safePage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <section id="popular-city-routes" className="bg-white/95 py-14 sm:py-20 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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

          {/* Quick Search for routes if many routes exist */}
          {routes.length > 6 && (
            <div className="w-full md:w-72 shrink-0 text-slate-700">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destination city..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                />
              </div>
              <p className="mt-1.5 text-xs text-gray-500 text-right">
                {isViewAll || filteredRoutes.length <= PAGE_SIZE
                  ? `Showing all ${filteredRoutes.length} routes`
                  : `Showing ${startIndex + 1}–${endIndex} of ${filteredRoutes.length} routes`}
              </p>
            </div>
          )}
        </div>

        {/* 3-Column Card Grid */}
        {filteredRoutes.length === 0 ? (
          <div className="mt-10 p-8 rounded-2xl border border-gray-200 bg-gray-50 text-center text-gray-800">
            No routes found matching &quot;{search}&quot;. Try searching for another city name.
          </div>
        ) : (
          <>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedRoutes.map((item) => {
                const isContactCard =
                  isContactMode ||
                  item.vehicleSlug === "contact-number" ||
                  item.slug.includes("-contact-number");
                const actionText = buttonText || (isContactCard ? "CONTACT" : "BOOK");

                return (
                  <div
                    key={item.id}
                    className="group rounded-2xl md:rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <Link href={`/route/${item.slug}`} className="block group/cardhead transition">
                      {/* Pickup Row */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                              PICKUP
                            </span>
                          </div>
                          <p className="mt-1 pl-4.5 text-lg sm:text-xl font-bold text-gray-900 group-hover/cardhead:text-amber-600 transition">
                            {item.from}
                          </p>
                        </div>

                        {/* Popular Badge & Vehicle Badge */}
                        <div className="flex flex-col items-end gap-1">
                          <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700 border border-amber-200/50">
                            {isContactCard ? "24/7 HELPLINE" : "POPULAR"}
                          </span>
                          {item.vehicle && (
                            <span className="rounded-md bg-amber-100/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-amber-900 border border-amber-300/60 shadow-2xs">
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
                        <p className="mt-1 pl-4.5 text-lg sm:text-xl font-bold text-gray-900 group-hover/cardhead:text-amber-600 transition">
                          {item.to}
                        </p>
                      </div>
                    </Link>

                    {/* Bottom Row: Starting Fare & Action Button */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-gray-500">
                          {isContactCard ? "Estimated fare from" : "Starting fare"}
                        </p>
                        <p className="text-xl sm:text-2xl font-black text-gray-900">
                          {item.startingFare}
                        </p>
                      </div>

                      <Link
                        href={`/route/${item.slug}`}
                        className="rounded-full border-2 border-amber-500 bg-white px-6 py-1.5 text-xs font-extrabold text-amber-600 transition hover:bg-amber-500 hover:text-white shadow-xs cursor-pointer tracking-wider uppercase"
                      >
                        {actionText}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls & View More Button */}
            {filteredRoutes.length > PAGE_SIZE && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
                {/* Counter Label */}
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {isViewAll ? (
                    <span>
                      Showing all <strong>{filteredRoutes.length}</strong> routes
                    </span>
                  ) : (
                    <span>
                      Showing <strong>{startIndex + 1}</strong>–<strong>{endIndex}</strong> of{" "}
                      <strong>{filteredRoutes.length}</strong> routes (Page {safePage} of {totalPages})
                    </span>
                  )}
                </div>

                {/* Number-wise Pagination + View More Button */}
                <div className="flex flex-wrap items-center gap-2">
                  {!isViewAll && (
                    <div className="flex items-center gap-1.5">
                      {/* Previous Page */}
                      <button
                        type="button"
                        onClick={() => handlePageChange(safePage - 1)}
                        disabled={safePage === 1}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                          safePage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                            : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 border border-gray-300 shadow-2xs cursor-pointer"
                        }`}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">Prev</span>
                      </button>

                      {/* Numbered Page Buttons */}
                      {getPageNumbers().map((p, idx) => {
                        if (typeof p === "string") {
                          return (
                            <span key={`ellipsis-${idx}`} className="px-1.5 text-gray-400 font-bold">
                              ...
                            </span>
                          );
                        }
                        const isActive = p === safePage;
                        return (
                          <button
                            key={`page-${p}`}
                            type="button"
                            onClick={() => handlePageChange(p)}
                            className={`h-8 w-8 sm:h-9 sm:w-9 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center cursor-pointer ${
                              isActive
                                ? "bg-amber-600 text-white shadow-xs"
                                : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-300"
                            }`}
                          >
                            {p}
                          </button>
                        );
                      })}

                      {/* Next Page */}
                      <button
                        type="button"
                        onClick={() => handlePageChange(safePage + 1)}
                        disabled={safePage === totalPages}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                          safePage === totalPages
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                            : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300 border border-gray-300 shadow-2xs cursor-pointer"
                        }`}
                      >
                        <span className="hidden sm:inline">Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {/* View More / Paginate Toggle Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsViewAll(!isViewAll);
                      if (isViewAll) {
                        handlePageChange(1);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 transition shadow-2xs cursor-pointer ml-1"
                  >
                    {isViewAll ? (
                      <span>Show 40 Per Page</span>
                    ) : (
                      <span>View All ({filteredRoutes.length}) Routes</span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
