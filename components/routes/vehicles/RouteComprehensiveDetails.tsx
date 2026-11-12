"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Clock,
  Car,
  Bus,
  Compass,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Utensils,
  Fuel,
  Info,
  Calendar,
  Users,
  Briefcase,
  Send,
  Phone,
  Sparkles,
  Award,
  Building,
  Home,
  Luggage,
} from "lucide-react";
import type { ComprehensiveRouteData } from "@/data/masterRoutes";

interface Props {
  details: ComprehensiveRouteData;
  activeVehicleSlug?: string;
}

export default function RouteComprehensiveDetails({ details, activeVehicleSlug }: Props) {
  const whatsappBaseUrl = "https://wa.me/919818022687";
  const pathname = usePathname() || "";

  const isTempo = Boolean(
    pathname.includes("tempo") ||
    pathname.includes("urbania") ||
    pathname.includes("seater") ||
    (activeVehicleSlug && (
      activeVehicleSlug.toLowerCase().includes("tempo") ||
      activeVehicleSlug.toLowerCase().includes("urbania") ||
      activeVehicleSlug.toLowerCase().includes("seater")
    )) ||
    (details.vehicleSlug && (
      details.vehicleSlug.toLowerCase().includes("tempo") ||
      details.vehicleSlug.toLowerCase().includes("urbania") ||
      details.vehicleSlug.toLowerCase().includes("seater")
    )) ||
    (details.vehicleName && (
      details.vehicleName.toLowerCase().includes("tempo") ||
      details.vehicleName.toLowerCase().includes("urbania")
    ))
  );

  const distNum =
    details.distanceKm ||
    parseInt(String(details.distance).replace(/[^0-9]/g, ""), 10) ||
    180;

  const tempoFleetOptions = [
    {
      title: "12 Seater Tempo",
      models: "Force 12 Seater Pushback",
      seats: "12 Passengers",
      luggage: "8-10 Large Bags",
      ratePerKm: "₹23/km",
      oneWayEstimate: `₹${Math.round(distNum * 1.5 * 23 + 500).toLocaleString("en-IN")}`,
      recommendedFor: "Family trips, medium groups, pilgrimage yatras, and outstation weekend excursions.",
      slug: "12-seater-tempo-traveller",
    },
    {
      title: "16 Seater Tempo",
      models: "Force 16 Seater Deluxe",
      seats: "16 Passengers",
      luggage: "12-14 Large Bags + Carrier",
      ratePerKm: "₹25/km",
      oneWayEstimate: `₹${Math.round(distNum * 1.5 * 25 + 500).toLocaleString("en-IN")}`,
      recommendedFor: "Corporate outings, wedding guest transportation, and long-distance group tours.",
      slug: "16-seater-tempo-traveller",
    },
    {
      title: "20 / 24 Seater Cruiser",
      models: "Force 20-24 Seater High-Deck",
      seats: "20-24 Passengers",
      luggage: "18-22 Large Bags + Carrier",
      ratePerKm: "₹27 - ₹29/km",
      oneWayEstimate: `₹${Math.round(distNum * 1.5 * 27 + 500).toLocaleString("en-IN")}`,
      recommendedFor: "Large wedding celebrations, college trips, conference delegates, and pilgrimage groups.",
      slug: "20-seater-tempo-traveller",
    },
    {
      title: "Luxury / Urbania",
      models: "Maharaja Recliner / Force Urbania",
      seats: "10-12 Luxury Captain Seats",
      luggage: "10-14 Bags + Overhead Bins",
      ratePerKm: "₹25/km",
      oneWayEstimate: `₹${Math.round(distNum * 1.5 * 25 + 500).toLocaleString("en-IN")}`,
      recommendedFor: "VIP corporate executives, overseas tourists, and luxury wedding party travel.",
      slug: "luxury-tempo-traveller",
    },
  ];

  const displayFleetOptions = isTempo ? tempoFleetOptions : details.cabOptions;

  const sanitizeText = (text: string) => {
    if (!isTempo || !text) return text;
    return text
      .replace(/\bcabs\b/gi, "Tempo Travellers")
      .replace(/\bcab\b/gi, "Tempo Traveller")
      .replace(/\btaxis\b/gi, "Tempo Travellers")
      .replace(/\btaxi\b/gi, "Tempo Traveller");
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900">
      {/* =========================================================================
          ROUTE OVERVIEW (Distance, Travel Time, Best Time, Summary)
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="route-overview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Compass className="h-3.5 w-3.5 text-amber-700" />
              Route Overview & Travel Intelligence
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              {details.from} to {details.to} Travel Distance & Timing Guide
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {details.overview.routeSummary}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-slate-50/70 p-5 shadow-xs hover:border-amber-400 hover:shadow-sm transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-3">
                <Navigation className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Total Distance</p>
              <h3 className="text-xl font-black text-gray-950 mt-0.5">{details.distance}</h3>
              <p className="text-xs text-gray-600 mt-1.5">Accurate point-to-point highway distance.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/70 p-5 shadow-xs hover:border-amber-400 hover:shadow-sm transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-3">
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Estimated Travel Time</p>
              <h3 className="text-xl font-black text-gray-950 mt-0.5">{details.duration}</h3>
              <p className="text-xs text-gray-600 mt-1.5">Typical driving time with standard cruise speeds.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/70 p-5 shadow-xs hover:border-amber-400 hover:shadow-sm transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-3">
                <Calendar className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Best Departure Time</p>
              <h3 className="text-base font-bold text-gray-950 mt-0.5">5:30 AM – 7:00 AM</h3>
              <p className="text-xs text-gray-600 mt-1.5">Avoid city bottleneck traffic and reach relaxed.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/70 p-5 shadow-xs hover:border-amber-400 hover:shadow-sm transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800 mb-3">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Road Quality</p>
              <h3 className="text-base font-bold text-gray-950 mt-0.5">Access-Controlled Highway</h3>
              <p className="text-xs text-gray-600 mt-1.5">Smooth asphalt with automatic FASTag lanes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROUTE MAP & HIGHWAYS (Actual Corridor Route & Important Highways)
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="route-map">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <MapPin className="h-3.5 w-3.5 text-amber-700" />
              Actual Highway Route & Navigation Steps
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              {details.from} to {details.to} Highway Corridor & Route Map
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              Follow the verified primary driving route between {details.from} and {details.to} via {details.highway}.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Steps Timeline */}
            <div className="lg:col-span-8">
              <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-300 space-y-6">
                {details.routeMap.pathSteps.map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-black ring-4 ring-white shadow-xs">
                      {idx + 1}
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-xs hover:border-amber-400 hover:shadow-md transition">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                          Milestone 0{idx + 1}
                        </span>
                      </div>
                      <p className="mt-1 text-sm sm:text-base font-bold text-gray-900 leading-snug">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highway Highlights Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-amber-200/90 bg-gradient-to-br from-white to-amber-50/50 p-6 shadow-md">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                  <Car className="h-4 w-4 text-amber-600" />
                  Key Highways & Expressways
                </div>
                <h3 className="text-xl font-black text-gray-950">
                  {details.highway}
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Engineered with separated multi-lane corridors, emergency rest lanes, speed radar cameras, and round-the-clock patrol security.
                </p>

                <div className="mt-5 space-y-2.5 border-t border-amber-200/60 pt-4 text-xs font-medium text-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Access Type:</span>
                    <strong className="text-gray-900">Access-Controlled Highway</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Toll System:</span>
                    <strong className="text-emerald-700">100% FASTag Automated</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Speed Limit:</span>
                    <strong className="text-gray-900">100 km/h Max Limit</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Emergency Support:</span>
                    <strong className="text-gray-900">24x7 Highway Patrol & Crane</strong>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                      isTempo
                        ? `Hello, I want to inquire about route navigation and Tempo Traveller booking from ${details.from} to ${details.to}.`
                        : `Hello NoidaCab, I want to inquire about route navigation and taxi booking from ${details.from} to ${details.to}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-amber-500 transition"
                  >
                    <Send className="h-4 w-4" />
                    <span>Inquire About Road Route</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          POPULAR DESTINATIONS (Destination ke aas-paas ke locations)
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="popular-destinations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-700" />
              Local Sightseeing & Top Attractions
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              Popular Places to Visit in & Around {details.to}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              Explore the must-see tourist landmarks, historical sites, and holy shrines when you arrive in {details.to}. Your driver is available for city transfers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {details.popularDestinations.map((dest, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-slate-50/60 p-6 shadow-xs hover:border-amber-400 hover:bg-white hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 font-bold text-amber-800 border border-amber-200/60">
                      {dest.category}
                    </span>
                    {dest.distanceFromCity && (
                      <span className="text-[11px] font-semibold text-gray-500">
                        {dest.distanceFromCity}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-black text-gray-900">
                    {dest.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-gray-200/60 pt-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-500">
                    {isTempo ? "Sightseeing Transfer:" : "Taxi Transfer:"}
                  </span>
                  <span className="font-bold text-amber-700">Doorstep Drop Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAJOR HIGHWAY STOPS & FOOD BREAKS
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="major-stops">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Utensils className="h-3.5 w-3.5 text-amber-700" />
              Highway Food Courts & Refreshment Breaks
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              Recommended Stops & Food Breaks ({details.from} to {details.to})
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              Travel comfortably with planned halts at hygienic food courts, highway dhabas, and modern fuel complexes along the route.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {details.majorStops.map((stop, i) => (
              <div
                key={i}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xs hover:border-amber-300 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800 font-black text-sm">
                    0{i + 1}
                  </span>
                  {stop.distanceFromOrigin && (
                    <span className="rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-bold text-gray-700 border border-gray-200">
                      {stop.distanceFromOrigin} mark
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-base font-black text-gray-900">
                  {stop.name}
                </h3>

                <span className="mt-1 inline-block text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  {stop.type}
                </span>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {stop.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-emerald-700 border-t border-gray-100 pt-3">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>Hygienic restrooms, dining & fuel available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROUTE DETAILS (Tolls, Expressway, Road Conditions)
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="route-details">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Info className="h-3.5 w-3.5 text-amber-700" />
              Highway Engineering & Toll Advisory
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              Route Details: Tolls, Expressways & Driving Conditions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              Complete technical and regulatory details for your road journey from {details.from} to {details.to}.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase">Estimated Toll Charges</p>
                  <h3 className="text-base font-black text-gray-900">{details.routeDetails.tollEstimate}</h3>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Seamless digital deduction via FASTag. Receipts provided for complete travel transparency.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase">Highway / Expressway</p>
                  <h3 className="text-base font-black text-gray-900">{details.routeDetails.expressway}</h3>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Access-controlled corridor with multi-lane asphalt concrete and clearly marked exits.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase">Road Surface & Quality</p>
                  <h3 className="text-base font-black text-gray-900">Excellent Surface</h3>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {details.routeDetails.roadCondition}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase">Speed Limit</p>
                  <h3 className="text-base font-black text-gray-900">{details.routeDetails.speedLimit}</h3>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enforced by automated highway speed sensors to ensure passenger safety throughout.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Fuel className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase">Fuel & EV Availability</p>
                  <h3 className="text-base font-black text-gray-900">Every 25–35 km</h3>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {details.routeDetails.petrolPumpsEvChangers}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase">Best Driving Window</p>
                  <h3 className="text-base font-black text-gray-900">Early Morning</h3>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {details.routeDetails.bestTimeToTravel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VEHICLE / FLEET OPTIONS COMPARISON
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id={isTempo ? "tempo-options" : "cab-options"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              {isTempo ? <Bus className="h-3.5 w-3.5 text-amber-700" /> : <Car className="h-3.5 w-3.5 text-amber-700" />}
              {isTempo ? "Tempo Traveller Fleet Comparison" : "Vehicle Fleet Comparison"}
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              {isTempo
                ? `Compare Tempo Traveller Options for ${details.from} to ${details.to}`
                : `Compare Cab Options for ${details.from} to ${details.to}`}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {isTempo
                ? `Choose from our verified fleet of 12-seater, 16-seater, 20-seater, 24-seater pushback Tempo Travellers, and luxury Force Urbanias.`
                : `Choose from our verified fleet of economical sedans, family SUVs, executive Innovas, and spacious Tempo Travellers.`}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {displayFleetOptions.map((opt, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                    <span>{opt.title}</span>
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-900 font-bold">
                      {opt.ratePerKm}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-gray-950">
                    {opt.models}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-amber-600" />
                      <span>Capacity: <strong>{opt.seats}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5 text-amber-600" />
                      <span>Boot: <strong>{opt.luggage}</strong></span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                    {opt.recommendedFor}
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500 font-semibold">Starting One-Way:</span>
                    <span className="text-base font-black text-gray-950">{opt.oneWayEstimate}</span>
                  </div>

                  <a
                    href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                      isTempo
                        ? `Hello, I want to book ${opt.title} (${opt.models}) for route: ${details.from} to ${details.to}. Please share availability.`
                        : `Hello NoidaCab, I want to book ${opt.title} (${opt.models}) for route: ${details.from} to ${details.to}. Please share availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gray-900 py-2.5 text-xs font-bold text-white hover:bg-amber-600 transition"
                  >
                    <Send className="h-3.5 w-3.5 text-amber-400" />
                    <span>Select {opt.title}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRAVEL PURPOSES (Airport, Office, Family, Business, Pilgrimage)
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="travel-purposes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Award className="h-3.5 w-3.5 text-amber-700" />
              Tailored Travel Use Cases
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              {isTempo
                ? `Why Hire Tempo Traveller from ${details.from} to ${details.to}?`
                : `Why Book Cabs from ${details.from} to ${details.to}?`}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              Whatever your reason for travel, our fleet and experienced chauffeurs guarantee a punctual, stress-free road journey.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {details.travelPurposes.map((purpose, i) => {
              const cleanedDesc = isTempo
                ? purpose.desc
                    .replace(/Sedans, SUVs, or spacious Tempo Travellers/gi, "spacious Tempo Travellers and luxury Force Urbanias")
                    .replace(/\bcabs\b/gi, "Tempo Travellers")
                    .replace(/\bcab\b/gi, "Tempo Traveller")
                    .replace(/\btaxis\b/gi, "Tempo Travellers")
                    .replace(/\btaxi\b/gi, "Tempo Traveller")
                : purpose.desc;

              return (
                <div
                  key={i}
                  className="rounded-3xl border border-gray-200 bg-slate-50/60 p-6 shadow-xs hover:border-amber-300 hover:bg-white hover:shadow-md transition"
                >
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-200">
                    {purpose.highlight}
                  </span>

                  <h3 className="mt-3 text-lg font-black text-gray-950">
                    {isTempo ? sanitizeText(purpose.title) : purpose.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {cleanedDesc}
                  </p>

                  <div className="mt-4 border-t border-gray-200/60 pt-3 flex items-center gap-2 text-xs text-amber-700 font-bold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Doorstep Pickup & Punctual Dispatch</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          NEARBY PICKUP AREAS (Relevant Pickup Localities in Origin)
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="nearby-pickup-areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <MapPin className="h-3.5 w-3.5 text-amber-700" />
              Doorstep Service Coverage
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              Pickup Areas in {details.from} & Drop Localities in {details.to}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              We provide 100% doorstep pickups across all sectors, colonies, tech parks, and transit hubs without extra boarding surcharges.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Origin Pickup Localities */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-4">
                <Home className="h-4 w-4 text-amber-600" />
                Popular Pickup Localities in {details.from}
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {details.pickupAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 border border-gray-200/80 shadow-2xs text-xs font-semibold text-gray-800"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Destination Drop Localities */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-4">
                <Building className="h-4 w-4 text-amber-600" />
                Drop-Off Coverage Across {details.to}
              </div>

              <div className="space-y-2.5">
                {details.dropAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3.5 border border-gray-200/80 shadow-2xs text-xs font-semibold text-gray-800"
                  >
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOOKING INFORMATION (Cancellation, Waiting, Luggage, Process)
         ========================================================================= */}
      <section className="bg-white/95 py-12 border-b border-gray-200" id="booking-information">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-700" />
              Booking & Policy Transparency
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
              Booking Information & Customer Protection Policies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              Enjoy 100% peace of mind with our transparent policies on cancellations, waiting times, luggage, and secure booking.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <div className="rounded-3xl border border-gray-200 bg-slate-50/70 p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 font-bold mb-3">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Zero Cancellation Fee</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {details.bookingInfo.cancellationPolicy}
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-slate-50/70 p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 font-bold mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Complimentary 45-Min Waiting</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {details.bookingInfo.waitingCharges}
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-slate-50/70 p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 font-bold mb-3">
                <Luggage className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Luggage Guidelines</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {isTempo
                  ? "Tempo Travellers feature dedicated heavy-duty rear luggage compartments holding 8 to 22 large suitcases, interior overhead parcel racks, and weatherproof rooftop luggage carriers."
                  : details.bookingInfo.luggageGuidelines}
              </p>
            </div>
          </div>

          {/* 3-Step Booking Process */}
          <div className="rounded-3xl border border-amber-200 bg-amber-50/40 p-6 sm:p-8">
            <h3 className="text-xl font-black text-gray-950 mb-6">
              {isTempo
                ? `How to Book Your ${details.from} to ${details.to} Tempo Traveller in 3 Easy Steps:`
                : `How to Book Your ${details.from} to ${details.to} Cab in 3 Easy Steps:`}
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              {details.bookingInfo.bookingProcess.map((step) => {
                const stepTitle =
                  isTempo && step.title.toLowerCase().includes("cab")
                    ? "Select Route & Tempo Traveller"
                    : step.title;
                const stepDesc = isTempo
                  ? step.desc
                      .replace(/and vehicle class/gi, "and seating capacity")
                      .replace(/\bcab\b/gi, "Tempo Traveller")
                      .replace(/\bcabs\b/gi, "Tempo Travellers")
                  : step.desc;

                return (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-600 text-white font-black text-base shadow-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{stepTitle}</h4>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">{stepDesc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-amber-200/60 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <CreditCard className="h-4 w-4 text-emerald-600" />
                <span>Accepted Payments: UPI, Credit/Debit Cards, NetBanking, Cash to Driver</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                    isTempo
                      ? `Hello, I want to book a Tempo Traveller from ${details.from} to ${details.to}. Please share the best fare and vehicle details.`
                      : `Hello NoidaCab, I want to book a cab from ${details.from} to ${details.to}. Please share the best fare and driver details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-amber-500 transition"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>WhatsApp Booking</span>
                </a>

                <a
                  href="tel:+918377809809"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-gray-800 transition"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-400" />
                  <span>Call 8377809809</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
