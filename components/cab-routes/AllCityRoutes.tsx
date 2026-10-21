"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ArrowRight,
  Search,
  Car,
  CheckCircle2,
  Phone,
  Sparkles,
} from "lucide-react";
import { RouteItem } from "@/data/allRoutesData";

interface Props {
  routes: RouteItem[];
  title: string;
  subtitle: string;
  badge?: string;
}

export default function AllCityRoutes({
  routes,
  title,
  subtitle,
  badge = "Popular Routes",
}: Props) {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");

  // Collect unique departure cities
  const cities = ["All", ...Array.from(new Set(routes.map((r) => r.from.split(" ")[0].replace(",", ""))))];

  const filteredRoutes = routes.filter((item) => {
    const matchesCity =
      selectedCity === "All" ||
      item.from.toLowerCase().includes(selectedCity.toLowerCase());

    if (!matchesCity) return false;

    if (!search.trim()) return true;

    const q = search.toLowerCase();
    return (
      item.from.toLowerCase().includes(q) ||
      item.to.toLowerCase().includes(q) ||
      item.highlights.some((h) => h.toLowerCase().includes(q)) ||
      item.recommendedVehicle.toLowerCase().includes(q)
    );
  });

  return (
    <section id="routes" className="bg-white/95 py-12 sm:py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            {badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>

          {/* Search & City Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* City Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedCity === city
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {city === "All" ? "All Departure Cities" : city}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search route or landmark..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRoutes.map((route) => {
            const calculatedFare = (() => {
              const distMatch = route.distance.match(/\d+(\.\d+)?/);
              const rateMatch = (route.perKmRate || "₹10/km").match(/\d+(\.\d+)?/);
              if (distMatch) {
                const dist = parseFloat(distMatch[0]);
                const rate = rateMatch ? parseFloat(rateMatch[0]) : 10;
                return `₹${Math.round(dist * 1.5 * rate + 500).toLocaleString("en-IN")}`;
              }
              return route.startingFare;
            })();

            const cleanCitySlug = (city: string) => {
              const primary = city.split("(")[0].split("&")[0].split("/")[0].trim();
              return primary
                .toLowerCase()
                .replace(/^route[-_ ]+/, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
            };

            const getRouteTypeSlug = (vehicle?: string) => {
              if (!vehicle) return "taxi";
              const lower = vehicle.toLowerCase();
              if (lower.includes("urbania")) return "urbania-rental";
              if (lower.includes("tempo")) return "tempo-traveller";
              if (lower.includes("innova")) return "innova-crysta-taxi";
              if (lower.includes("ertiga")) return "ertiga-taxi";
              if (lower.includes("suv")) return "suv-taxi";
              if (lower.includes("dzire")) return "dzire-taxi";
              if (lower.includes("etios")) return "etios-taxi";
              if (lower.includes("amaze")) return "amaze-taxi";
              if (lower.includes("sedan")) return "sedan-taxi";
              return "taxi";
            };

            const cleanFrom = cleanCitySlug(route.from);
            const cleanTo = cleanCitySlug(route.to);
            const primaryRouteType = getRouteTypeSlug(route.recommendedVehicle);
            const primaryRouteUrl = `/route/${cleanFrom}-to-${cleanTo}-${primaryRouteType}`;

            const bookingText = `Hello NoidaCab, I want to book a cab for route: ${route.from} to ${route.to} (${route.distance}, Starting ${calculatedFare}). Please confirm fare & cab availability.`;

            return (
              <div
                key={route.id}
                className="group flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl"
              >
                <div>
                  {/* Top route badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-200/60">
                      <Clock className="h-3 w-3" />
                      {route.duration}
                    </span>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                      {calculatedFare}
                    </span>
                  </div>

                  {/* Origin to Destination - Clickable to Route */}
                  <Link
                    href={primaryRouteUrl}
                    className="block group/link space-y-2 mb-4 hover:opacity-90 transition"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0 text-[10px]">
                        ●
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Pickup</p>
                        <p className="text-base font-bold text-gray-900 leading-snug group-hover/link:text-amber-600 transition">{route.from}</p>
                      </div>
                    </div>

                    <div className="ml-2 h-4 w-0.5 bg-gray-200" />

                    <div className="flex items-start gap-2.5">
                      <div className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-white shrink-0 text-[10px]">
                        ▼
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Drop / Destination</p>
                        <p className="text-base font-bold text-gray-900 leading-snug group-hover/link:text-amber-600 transition">{route.to}</p>
                      </div>
                    </div>
                  </Link>

                  {/* Route Details */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {route.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {route.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* Vehicle recommendation */}
                  <div className="border-t border-gray-100 pt-3 text-xs text-gray-500 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Car className="h-3.5 w-3.5 text-amber-600" />
                      Vehicle: <strong className="text-gray-800">{route.recommendedVehicle}</strong>
                    </span>
                    <span className="font-semibold text-gray-700">{route.distance}</span>
                  </div>

                  {/* Route Template Direct Selectors */}
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Available Route Templates:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-taxi`}
                        className="rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-800 hover:bg-amber-100 border border-amber-200/50 transition"
                      >
                        Taxi
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-taxi-fare`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        Fare
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-one-way-taxi`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        One-Way
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-sedan-taxi`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        Sedan
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-suv-taxi`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        SUV
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-tempo-traveller`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        Tempo
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-innova-crysta-taxi`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        Innova
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-contact-number`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        Contact
                      </Link>
                      <Link
                        href={`/route/${cleanFrom}-to-${cleanTo}-distance-travel-time`}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition"
                      >
                        Distance
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2">
                  <Link
                    href={primaryRouteUrl}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-600 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-amber-500"
                  >
                    <span>Book Route</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/919818022687?text=${encodeURIComponent(bookingText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp Booking"
                    className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200 transition"
                  >
                    WhatsApp
                  </a>

                  <a
                    href="tel:+918377809809"
                    title="Call Helpline"
                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-600" />
                    <span>Call</span>
                  </a>
                </div>

                {/* Direct Route Template Link */}
                <div className="mt-2 text-center">
                  <Link
                    href={primaryRouteUrl}
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
                  >
                    <span>View {route.from} to {route.to} Dedicated Route Page</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 mt-6">
            <MapPin className="mx-auto h-10 w-10 text-gray-400 mb-2" />
            <p className="text-base font-bold text-gray-800">No routes found matching your search</p>
            <p className="text-xs text-gray-500 mt-1">Try another keyword or search for a city like Delhi, Agra, or Lucknow.</p>
          </div>
        )}
      </div>
    </section>
  );
}
