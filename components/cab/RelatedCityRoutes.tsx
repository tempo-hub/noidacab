"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Search,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  Send,
  Sparkles,
  ChevronRight,
  Car,
  Navigation,
} from "lucide-react";
import {
  getRegionByCityName,
  getRegionalRoutesFromMaster,
  REGIONAL_METADATA,
  CityCabRouteItem,
} from "@/data/cityCabRoutes";

interface Props {
  destinationCity?: string;
  vehicleSlug?: string;
  vehicleName?: string;
  title?: string;
  subtitle?: string;
}

export default function RelatedCityRoutes({
  destinationCity = "",
  vehicleSlug = "taxi",
  vehicleName = "Cab",
  title,
  subtitle,
}: Props) {
  // 1. Detect matching region based on URL / destination city
  const detectedRegion = useMemo(() => {
    return getRegionByCityName(destinationCity);
  }, [destinationCity]);

  // 2. Active Tab State (defaults to detected region, e.g. "Punjab")
  const [selectedRegion, setSelectedRegion] = useState<string>(detectedRegion);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleLimit, setVisibleLimit] = useState<number>(24);

  useEffect(() => {
    setSelectedRegion(detectedRegion);
    setVisibleLimit(24);
  }, [detectedRegion]);

  // Available region tabs
  const regionTabs = ["Punjab", "Haryana", "Uttarakhand", "Uttar Pradesh", "Rajasthan", "All"];

  // 3. Fetch routes from masterRoutes for current active tab & vehicle
  const routes: CityCabRouteItem[] = useMemo(() => {
    return getRegionalRoutesFromMaster(selectedRegion, vehicleSlug);
  }, [selectedRegion, vehicleSlug]);

  // 4. Filter by live search query
  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) return routes;
    const q = searchQuery.toLowerCase().trim();
    return routes.filter(
      (r) =>
        r.to.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q) ||
        (r.highway && r.highway.toLowerCase().includes(q))
    );
  }, [routes, searchQuery]);

  // Current display slice
  const displayedRoutes = filteredRoutes.slice(0, visibleLimit);
  const hasMore = filteredRoutes.length > visibleLimit;

  // Metadata for current active region
  const regionMeta = REGIONAL_METADATA[selectedRegion] || {
    tagline: `Explore ${selectedRegion} Highway Corridors & Outstation Destinations`,
    badge: `${selectedRegion} Route Corridor`,
    description: `Direct outstation cabs, Sedans, SUVs, and luxury Tempo Travellers connecting Noida to ${selectedRegion}.`,
  };

  const currentTitle =
    title ||
    `Popular ${selectedRegion === "All" ? "North India" : selectedRegion} Cab Routes (${vehicleName})`;

  const currentSubtitle =
    subtitle ||
    `Travelling across ${selectedRegion === "All" ? "North India" : selectedRegion}? Explore verified outstation taxi routes from Noida with flat per-km tariffs, verified chauffeurs, and 24/7 doorstep pickup.`;

  return (
    <section className="bg-white/95 py-12 sm:py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/90 border border-amber-300 px-4 py-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>{regionMeta.badge}</span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            {currentTitle}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {currentSubtitle}
          </p>

          {/* Quick Value Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-gray-700">
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Verified Highway Chauffeurs
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Award className="h-4 w-4 text-amber-600" />
              Transparent Per-Km Tariffs
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Clock className="h-4 w-4 text-blue-600" />
              Guaranteed On-Time Pickup
            </span>
          </div>
        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {regionTabs.map((tab) => {
              const isActive = selectedRegion === tab;
              const isDetected = detectedRegion === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setSelectedRegion(tab);
                    setVisibleLimit(24);
                  }}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-102"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-amber-50 hover:border-amber-300"
                  }`}
                >
                  <span>{tab}</span>
                  {isDetected && !isActive && (
                    <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
            <input
              type="text"
              placeholder={`Search ${selectedRegion} city (e.g. ${
                selectedRegion === "Punjab"
                  ? "Amritsar, Patiala..."
                  : selectedRegion === "Haryana"
                  ? "Ambala, Panipat..."
                  : "Dehradun, Haridwar..."
              })`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleLimit(24);
              }}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm text-gray-700 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
            />
          </div>
        </div>

        {/* Region Highlights Banner */}
        <div className="mb-6 rounded-2xl bg-white border border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-extrabold text-gray-900">
                {selectedRegion} Route Corridor
              </span>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                {filteredRoutes.length} Connected Cities
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {regionMeta.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+918377809809"
              className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-bold text-white shadow-2xs hover:bg-amber-600 transition"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Call 8377809809</span>
            </a>
            <a
              href={`https://wa.me/918377809809?text=${encodeURIComponent(
                `Hello NoidaCab, I want to book a ${vehicleName} cab from Noida to ${selectedRegion}. Please share availability and best fare.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-2xs hover:bg-emerald-700 transition"
            >
              <Send className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Routes Grid */}
        {displayedRoutes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {displayedRoutes.map((route) => {
              const isCurrentDestination =
                destinationCity &&
                route.to.toLowerCase().replace(/[^a-z0-9]/g, "") ===
                  destinationCity.toLowerCase().replace(/[^a-z0-9]/g, "");

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`group relative rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    isCurrentDestination
                      ? "border-amber-500 bg-amber-50/70 ring-2 ring-amber-400/40"
                      : "border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50/20"
                  }`}
                >
                  {/* Origin -> Destination */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
                      <span className="text-xs font-extrabold text-gray-900 truncate">
                        {route.from} to {route.to}
                      </span>
                    </div>
                    {route.isPopular && (
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Route Specs: Distance & Duration */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="font-semibold text-gray-700">{route.distance}</span>
                    <span>•</span>
                    <span>{route.duration}</span>
                  </div>

                  {/* Highway */}
                  {route.highway && (
                    <div className="text-[11px] text-gray-500 truncate mb-3 flex items-center gap-1">
                      <Navigation className="h-3 w-3 text-gray-400 shrink-0" />
                      <span className="truncate">{route.highway}</span>
                    </div>
                  )}

                  {/* Pricing & CTA */}
                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-500 block">
                        Estimated Fare
                      </span>
                      <span className="text-xs sm:text-sm font-black text-amber-600">
                        {route.startingFare}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 group-hover:text-amber-600 group-hover:translate-x-0.5 transition">
                      <span>Book Cab</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
            <Car className="h-10 w-10 text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-bold text-gray-700">
              No matching routes found for &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Try searching another city or switch tabs above.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-bold hover:bg-amber-700"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* View More Button */}
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setVisibleLimit((prev) => prev + 24)}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-amber-800 shadow-2xs hover:bg-amber-50 hover:border-amber-400 transition"
            >
              <span>View More {selectedRegion} Routes ({filteredRoutes.length - visibleLimit} remaining)</span>
              <ArrowRight className="h-4 w-4 text-amber-600" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
