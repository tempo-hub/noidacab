"use client";

import {
  ArrowRight,
  BusFront,
  CheckCircle2,
  Clock,
  MapPin,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Zap,
  Building2,
  Home,
  Compass,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: Vehicle;
};

export function PickupDropLocations({ location, vehicle }: Props) {
  const isTempo =
    vehicle.category?.toLowerCase() === "tempo-traveller" ||
    vehicle.slug?.toLowerCase().includes("tempo") ||
    vehicle.slug?.toLowerCase().includes("urbania") ||
    vehicle.name?.toLowerCase().includes("tempo") ||
    vehicle.name?.toLowerCase().includes("urbania");

  const vehicleLabel = isTempo ? "rental" : "cab";

  // Determine if location is a route (from -> to) or a single city
  let fromCity = "";
  let toCity = "";
  let isRoute = false;

  const rawName = location.name || "";
  const rawSlug = location.slug || "";

  if (rawName.toLowerCase().includes(" to ")) {
    const parts = rawName.split(/\s+to\s+/i);
    fromCity = parts[0]?.trim() || "Noida";
    toCity = parts[1]?.trim() || "Destination";
    isRoute = true;
  } else if (rawSlug.includes("-to-")) {
    const parts = rawSlug.split("-to-");
    const capitalize = (s: string) =>
      s
        .replace(/-(taxi|cab|rental|suv|sedan|tempo|urbania|innova|ertiga|dzire|amaze|etios).*$/i, "")
        .replace(/-/g, " ")
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");

    fromCity = capitalize(parts[0]);
    toCity = capitalize(parts[1]);
    isRoute = true;
  } else {
    fromCity = rawName || "Noida";
    toCity = "Delhi NCR & Outstation";
    isRoute = false;
  }

  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    isRoute
      ? `Hello NoidaCab, I need to schedule a doorstep pickup in ${fromCity} for a drop in ${toCity} with a ${vehicle.name} ${vehicleLabel}. Please confirm availability.`
      : `Hello NoidaCab, I need to schedule a doorstep pickup in ${fromCity} for a ${vehicle.name} ${vehicleLabel}.`
  )}`;

  return (
    <section className="border-b border-gray-300 bg-white/95 py-12 sm:py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <MapPin className="h-4 w-4 text-amber-600" />
            {isRoute
              ? `${fromCity.toUpperCase()} TO ${toCity.toUpperCase()} TRANSFERS`
              : isTempo
              ? "GROUP DEPARTURE & TOURS"
              : "DOORSTEP TRANSFERS"}
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {isRoute
              ? `${fromCity} to ${toCity} Pickup & Drop Points`
              : `${isTempo ? "Doorstep Group Pickup" : "Pickup & Drop Service"} in ${fromCity}`}
          </h2>

          <p className="mx-auto mt-3 max-w-7xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {isRoute ? (
              <>
                Private doorstep pickup anywhere in{" "}
                <span className="font-bold text-slate-900">{fromCity}</span> and direct, point-to-point drop at your exact destination address in{" "}
                <span className="font-bold text-slate-900">{toCity}</span>. Travel comfortably in a sanitized{" "}
                <span className="font-bold text-slate-900">{vehicle.name}</span> with verified commercial chauffeurs and transparent per-km billing.
              </>
            ) : isTempo ? (
              <>
                Hassle-free group pickup across{" "}
                <span className="font-bold text-slate-900">{fromCity}</span> with a clean{" "}
                <span className="font-bold text-slate-900">{vehicle.name}</span>. Equipped with reclining pushback seats, dual AC blowers, all-India commercial tourist permits, and verified highway chauffeurs.
              </>
            ) : (
              <>
                Reliable, point-to-point transfer across{" "}
                <span className="font-bold text-slate-900">{fromCity}</span> and surrounding regions with clean{" "}
                <span className="font-bold text-slate-900">{vehicle.name}</span> cabs. Zero cancellation charges, digital FASTag billing, and verified local chauffeurs.
              </>
            )}
          </p>
        </div>

        {/* ================= MAIN TRANSFER WORKFLOW ================= */}
        <div className="mt-10 max-w-7xl">
          <div className="relative grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">

            {/* Pickup Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl sm:p-7">
              {/* Top Accent Strip */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-amber-500" />

              <div>
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-xs transition-colors group-hover:bg-amber-200">
                    <MapPin className="h-6 w-6" />
                    <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Step 1: Origin
                    </p>
                    <h3 className="mt-0.5 truncate text-xl font-black text-slate-950 sm:text-2xl">
                      Pickup in {fromCity}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Doorstep arrival across all residential sectors, societies &amp; commercial hubs
                    </p>
                  </div>
                </div>

                {/* Pickup Coverage Points */}
                <div className="mt-5 rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Coverage Areas in {fromCity}:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <Home className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>Societies, Sectors &amp; Homes</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Compass className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>Railway Stations &amp; Metro Gates</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>Tech Parks &amp; Corporate Offices</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                      <span>Hotels, Airports &amp; Venues</span>
                    </li>
                  </ul>
                </div>

                {/* Pickup Perks */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                  {[
                    "Chauffeur reaches exactly at your GPS pin 10–15 mins prior",
                    "Assistance with heavy luggage loading into enclosed boot",
                    "Advance vehicle registration & driver contact shared via SMS/WhatsApp",
                  ].map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="text-xs font-medium text-slate-700 sm:text-sm">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200/70 bg-amber-50/60 p-3 text-xs text-amber-900 flex items-center justify-between">
                <span className="font-bold">Doorstep Pickup:</span>
                <span className="font-medium text-emerald-700 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Verified drivers ready in {fromCity}
                </span>
              </div>
            </div>

            {/* Mid Vehicle Showcase & Connector */}
            <div className="flex flex-col items-center justify-center gap-2 py-2 md:px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-400 text-slate-950 shadow-md">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </div>
              <span className="hidden md:block text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                Expressway
              </span>
            </div>

            {/* Drop Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl sm:p-7">
              {/* Top Accent Strip */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-slate-950" />

              <div>
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 shadow-xs transition-colors group-hover:bg-slate-200">
                    <Navigation className="h-6 w-6" />
                    <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-900" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Step 2: Destination
                    </p>
                    <h3 className="mt-0.5 truncate text-xl font-black text-slate-950 sm:text-2xl">
                      Drop in {toCity}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Point-to-point drop at any hotel, residence, office or outstation address
                    </p>
                  </div>
                </div>

                {/* Drop Coverage Points */}
                <div className="mt-5 rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Drop Locations in {toCity}:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-slate-800 shrink-0" />
                      <span>Hotels, Resorts &amp; Homestays</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Home className="h-3.5 w-3.5 text-slate-800 shrink-0" />
                      <span>Residential Colonies &amp; Villas</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Compass className="h-3.5 w-3.5 text-slate-800 shrink-0" />
                      <span>Tourist Landmarks &amp; City Centers</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-800 shrink-0" />
                      <span>Colleges, Hospitals &amp; Offices</span>
                    </li>
                  </ul>
                </div>

                {/* Drop Perks */}
                <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                  {[
                    "Direct expressway routing with zero detours or extra passenger pickups",
                    "Full AC comfort maintained throughout the intercity journey",
                    "Zero return fare penalties on one-way point-to-point drop bookings",
                  ].map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="text-xs font-medium text-slate-700 sm:text-sm">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 flex items-center justify-between">
                <span className="font-bold">Transparent Tariff:</span>
                <span className="font-semibold text-slate-900">Starting at {vehicle.price}</span>
              </div>
            </div>

          </div>

          {/* ================= BOTTOM CONVERSION BAR ================= */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:px-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-slate-950 font-bold">
                <Clock className="h-4 w-4" />
              </div>
              <span className="text-slate-700 font-medium">
                {isRoute ? (
                  <>
                    Direct doorstep pickup in <strong className="text-slate-950">{fromCity}</strong> with guaranteed on-time drop in <strong className="text-slate-950">{toCity}</strong>.
                  </>
                ) : isTempo ? (
                  <>
                    Direct group boarding from <strong className="text-slate-950">{fromCity}</strong> with advance booking guarantee.
                  </>
                ) : (
                  <>
                    Direct pickup from <strong className="text-slate-950">{fromCity}</strong> inside 10–15 mins.
                  </>
                )}
              </span>
            </div>

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 sm:flex-initial"
              >
                {isTempo ? (
                  <BusFront className="h-3.5 w-3.5 text-amber-400" />
                ) : (
                  <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                )}
                {isRoute ? `Book ${vehicle.name} to ${toCity}` : isTempo ? `Book ${vehicle.name}` : "Schedule Cab"}
              </a>

              <a
                href="tel:918377809809"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-100"
              >
                <PhoneCall className="h-3.5 w-3.5 text-amber-600" />
                Call: 8377809809
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}