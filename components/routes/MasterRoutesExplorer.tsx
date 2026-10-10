"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { MasterRouteItem } from "@/data/masterRoutes";
import { calculateStartingFare, vehicleRules, normalizeVehicleKey } from "@/data/popularRoutesData";

interface Props {
  routes: MasterRouteItem[];
}

export default function MasterRoutesExplorer({ routes }: Props) {
  const [search, setSearch] = useState("");
  const [selectedOrigin, setSelectedOrigin] = useState("All");

  // Collect unique origin cities
  const originCities = ["All", ...Array.from(new Set(routes.map((r) => r.from.trim())))];

  const filteredRoutes = routes.filter((item) => {
    const matchesOrigin =
      selectedOrigin === "All" ||
      item.from.toLowerCase() === selectedOrigin.toLowerCase();

    if (!matchesOrigin) return false;

    if (!search.trim()) return true;
    const q = search.toLowerCase().trim();

    return (
      item.from.toLowerCase().includes(q) ||
      item.to.toLowerCase().includes(q) ||
      (item.highway && item.highway.toLowerCase().includes(q))
    );
  });

  return (
    <div className="mt-8">
      {/* Controls Bar: Origin Pills & Search Input */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-gray-200">
        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {originCities.slice(0, 8).map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedOrigin(city)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedOrigin === city
                  ? "bg-amber-600 text-white shadow-sm"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {city === "All" ? "All Origin Cities" : city}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search city, destination, or highway..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
          />
        </div>
      </div>

      {/* Counter */}
      <div className="mt-6 flex items-center justify-between text-xs sm:text-sm text-gray-500">
        <span>
          Showing <strong className="text-gray-900">{filteredRoutes.length}</strong> routes
          {selectedOrigin !== "All" && ` from ${selectedOrigin}`}
        </span>
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          All Routes Expressway Certified
        </span>
      </div>

      {/* Route Cards Grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRoutes.map((r, index) => {
          const distKm = typeof r.distance === "number" ? r.distance : parseInt(String(r.distance).replace(/[^0-9]/g, "")) || 180;
          const sedanFare = calculateStartingFare(distKm, "taxi");
          const defaultVehicle = r.defaultVehicle || "tempo-traveller";
          const defaultFare = calculateStartingFare(distKm, defaultVehicle);
          const vRule = vehicleRules[defaultVehicle] || vehicleRules[normalizeVehicleKey(defaultVehicle)] || vehicleRules["tempo-traveller"];
          const vSlug = vRule?.slug || defaultVehicle;

          const fromSlug = r.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const toSlug = r.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const primarySlug = `/route/${fromSlug}-to-${toSlug}-${vSlug}`;

          return (
            <div
              key={`${r.from}-${r.to}-${index}`}
              className="group rounded-2xl md:rounded-3xl border border-gray-200/90 bg-white p-6 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between"
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
                      {r.from}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-col items-end gap-1">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700 border border-amber-200/50">
                      POPULAR
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500 capitalize">
                      {defaultVehicle.replace(/-/g, " ")}
                    </span>
                  </div>
                </div>

                {/* Connector */}
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
                    {r.to}
                  </p>
                </div>

                {/* Distance & Highway Info */}
                <div className="mt-4 flex items-center justify-between border-t border-dashed border-gray-200 pt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-600" />
                    {distKm} km
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-amber-600" />
                    {r.duration}
                  </span>
                </div>

                {r.highway && (
                  <p className="mt-1 text-[11px] text-gray-400 truncate">
                    Via: {r.highway}
                  </p>
                )}
              </div>

              {/* Bottom Row: Starting Fare & BOOK Button */}
              <div className="mt-5 border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400">Starting fare</span>
                  <p className="text-2xl font-black text-gray-900">
                    ₹{defaultFare.toLocaleString("en-IN")}
                  </p>
                </div>

                <Link
                  href={primarySlug}
                  className="rounded-full border border-amber-500 px-6 py-2 text-xs sm:text-sm font-bold text-gray-900 transition-colors hover:bg-amber-500 hover:text-white"
                >
                  BOOK
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
