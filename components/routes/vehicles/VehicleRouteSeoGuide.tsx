import Link from "next/link";
import {
  Users,
  Briefcase,
  Gauge,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  Compass,
  MapPin,
  Clock,
  Sparkles,
  Phone,
  Send,
  HelpCircle,
  Award,
} from "lucide-react";
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import { getVehicleSeoProfile } from "./vehicleSeoProfiles";

interface Props {
  route: ParsedRouteDetail;
  vehicleSlug?: string;
  vehicleName?: string;
}

export default function VehicleRouteSeoGuide({ route, vehicleSlug, vehicleName }: Props) {
  const profile = getVehicleSeoProfile(vehicleSlug);
  const displayName = vehicleName || profile.vehicleName;

  const distanceText = route.distance
    ? typeof route.distance === "number"
      ? `${route.distance} km`
      : route.distance
    : "180 km";

  const durationText = route.duration || "3 hr 30 min";
  const highwayText = route.highway || "National Highway Expressway";

  // Dynamic origin localities
  const isFromNoida =
    route.from.toLowerCase().includes("noida") || route.from.toLowerCase().includes("delhi");

  const originPickupAreas = isFromNoida
    ? [
        "Sector 18, 27, 37, 50, 62 & 76",
        "Noida Expressway (Sectors 128, 137, 142, 168)",
        "Greater Noida (Pari Chowk, Alpha, Beta, Delta)",
        "Noida Extension / Greater Noida West",
        "Botanical Garden & Electronic City Metro stations",
        "Indirapuram, Vaishali & Vasundhara (NCR border)",
      ]
    : [
        `Central business districts & residential colonies in ${route.from}`,
        `All major railway junctions & satellite stations in ${route.from}`,
        `Inter-State Bus Terminus (ISBT) gates in ${route.from}`,
        `Airport terminals & hotel porticos across ${route.from}`,
      ];

  const destDropAreas = [
    `Direct doorstep drop at any hotel, resort or residence in ${route.to}`,
    `All major transit hubs (Railway Station, Bus Stand, Airport) in ${route.to}`,
    `Prominent industrial corridors, tech parks & commercial centers in ${route.to}`,
    `Key tourist landmarks, heritage sights & holy shrines in ${route.to}`,
  ];

  const whatsappUrl = `https://wa.me/919818022687?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book ${displayName} from ${route.from} to ${route.to} (~${distanceText}). Please share instant quote & driver details.`
  )}`;

  return (
    <section className="bg-white/95 py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
            <Compass className="h-3.5 w-3.5 text-amber-600" />
            Route & Fleet Intelligence Guide
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Why {displayName} is the Ideal Ride for {route.from} to {route.to}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            {profile.tagline}. Planning an intercity road trip across {distanceText} (~{durationText}) via {highwayText}?
            Here is your comprehensive engineering, luggage capacity, seating ergonomics, and highway travel breakdown.
          </p>
        </div>

        {/* 4-Column Technical & Ergonomic Matrix */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1. Seating & Layout */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-2xs hover:border-amber-400 hover:shadow-xs transition">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60">
              <Users className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
              Capacity & Ergonomics
            </span>
            <h3 className="mt-1 text-base font-bold text-gray-900">
              {profile.seatingCapacity}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              {profile.seatingLayout}
            </p>
          </div>

          {/* 2. Boot Space & Luggage */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-2xs hover:border-amber-400 hover:shadow-xs transition">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60">
              <Briefcase className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
              Luggage Capacity
            </span>
            <h3 className="mt-1 text-base font-bold text-gray-900">
              {profile.bootSpaceLitres}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              {profile.luggageCapability}
            </p>
          </div>

          {/* 3. Engine & High-Speed Dynamics */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-2xs hover:border-amber-400 hover:shadow-xs transition">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60">
              <Gauge className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
              Engine & Highway Stability
            </span>
            <h3 className="mt-1 text-base font-bold text-gray-900">
              Expressway Performance
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              {profile.engineSpecs}. {profile.highwayCharacteristics}
            </p>
          </div>

          {/* 4. Climate Control */}
          <div className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-2xs hover:border-amber-400 hover:shadow-xs transition">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60">
              <Snowflake className="h-5 w-5" />
            </div>
            <span className="mt-4 block text-[11px] font-extrabold uppercase tracking-wider text-amber-600">
              Cabin Climate Control
            </span>
            <h3 className="mt-1 text-base font-bold text-gray-900">
              100% Chilled AC Guaranteed
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              {profile.acSystem}. Zero extra surcharge for AC operation across all highway segments.
            </p>
          </div>
        </div>

        {/* Deep Direct Comparison & Suitability Guide */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Left 2 Cols: Detailed Comparison & Highway Intelligence */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                VEHICLE COMPARISON & SELECTION GUIDE
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-black text-gray-900">
                Is {displayName} the Right Cab for Your {route.from} to {route.to} Trip?
              </h3>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-amber-200/70 bg-amber-50/40 p-5">
                  <h4 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    {profile.versusComparison.heading1}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {profile.versusComparison.text1}
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5">
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    {profile.versusComparison.heading2}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {profile.versusComparison.text2}
                  </p>
                </div>
              </div>

              {/* Luggage Packing Tip */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Smart Packing Recommendation for {displayName}
                  </h5>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {profile.packingTips}
                  </p>
                </div>
              </div>
            </div>

            {/* Highway Route Travel Breakdown */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                EXPRESSWAY & LOGISTICS ADVISORY
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-black text-gray-900">
                Driving from {route.from} to {route.to} via {highwayText}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {profile.highwayAdvice} The total estimated driving distance is {distanceText}, taking approximately {durationText} depending on traffic conditions.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-slate-50 p-4 text-center">
                  <Clock className="h-5 w-5 text-amber-600 mx-auto" />
                  <span className="mt-2 block text-xs font-bold text-gray-900">Best Departure</span>
                  <span className="text-[11px] text-gray-500">5:30 AM – 6:30 AM</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-slate-50 p-4 text-center">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 mx-auto" />
                  <span className="mt-2 block text-xs font-bold text-gray-900">Toll Payments</span>
                  <span className="text-[11px] text-gray-500">100% FASTag Enabled</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-slate-50 p-4 text-center">
                  <Award className="h-5 w-5 text-amber-600 mx-auto" />
                  <span className="mt-2 block text-xs font-bold text-gray-900">Chauffeur</span>
                  <span className="text-[11px] text-gray-500">Highway Verified Driver</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Ideal For + Local Doorstep Coverage */}
          <div className="space-y-6">
            {/* Ideal Travel Scenarios */}
            <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 p-6 sm:p-7 shadow-xs">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                SUITABILITY CHECKLIST
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-black text-gray-900">
                Best Suited For
              </h3>

              <ul className="mt-4 space-y-3">
                {profile.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-snug">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-amber-200/60">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-xs sm:text-sm font-bold shadow-xs transition"
                >
                  <Send className="h-4 w-4" />
                  <span>Check {displayName} Availability</span>
                </a>
              </div>
            </div>

            {/* Local Doorstep Pickup & Drop Highlights */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                COMPLETE CITY COVERAGE
              </span>
              <h3 className="mt-1 text-base sm:text-lg font-black text-gray-900 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                Pickup & Drop Coverage
              </h3>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Pickup anywhere in {route.from}:
                  </h4>
                  <ul className="mt-1.5 space-y-1.5 text-xs text-gray-600">
                    {originPickupAreas.map((loc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Drop coverage in {route.to}:
                  </h4>
                  <ul className="mt-1.5 space-y-1.5 text-xs text-gray-600">
                    {destDropAreas.map((loc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>24x7 Helpline:</span>
                <a href="tel:+918377809809" className="font-bold text-amber-700 hover:underline">
                  +91 8377809809
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
