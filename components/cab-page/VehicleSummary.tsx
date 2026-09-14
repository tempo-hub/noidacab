"use client";

import Image from "next/image";
import {
  ArrowRight,
  CarFront,
  Luggage,
  Snowflake,
  UserRound,
  ShieldCheck,
  Zap,
  PhoneCall,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: Vehicle;
};

export function VehicleSummary({ location, vehicle }: Props) {
  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to reserve the ${vehicle.name} cab in ${location.name}. Please confirm dispatch timing.`
  )}`;

  return (
    <section className="border-b border-gray-300 bg-white/95 py-12 sm:py-16 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* ================= LEFT: VEHICLE IMAGE SHOWCASE ================= */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200/70 p-6 sm:min-h-[380px] sm:p-10 lg:min-h-[480px]">
              
              {/* Radial glow accent */}
              <div className="absolute h-80 w-80 rounded-full bg-amber-300/40 blur-3xl" />

              <div className="relative z-10 h-60 w-full max-w-[520px] sm:h-72 lg:h-80">
                <Image
                  src={vehicle.image || "/cabs/amazemain.webp"}
                  alt={`${vehicle.name} fleet in ${location.name}`}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
              </div>

              {/* Status and selected badge */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs sm:top-7 sm:left-7">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Commercial Fleet</span>
              </div>

              <div className="absolute bottom-5 left-5 z-20 rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-xs sm:bottom-7 sm:left-7">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Base Price
                </p>
                <p className="text-base font-extrabold text-slate-950">
                  {vehicle.price}
                </p>
              </div>

              <div className="absolute bottom-5 right-5 z-20 hidden rounded-2xl border border-white/80 bg-white/95 px-3 py-2 text-right shadow-md backdrop-blur-xs sm:block sm:bottom-7 sm:right-7">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Driver ETA
                </p>
                <p className="text-xs font-extrabold text-emerald-600">
                  10–15 Mins
                </p>
              </div>
            </div>

            {/* ================= RIGHT: SUMMARY SPECS & BOOKING ================= */}
            <div className="p-6 sm:p-8 lg:p-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold text-amber-700">
                <CarFront className="h-4 w-4 text-amber-600" />
                CONFIRM VEHICLE DETAILS
              </span>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                {vehicle.name} Cab in {location.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Spacious and verified{" "}
                <strong className="text-slate-950">{vehicle.name}</strong>
                ready for dispatch in{" "}
                <strong className="text-slate-950">{location.name}</strong>.
                Ideal for family outings, airport drops, and intercity trips.
              </p>

              {/* Vehicle Specs Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-amber-600 shrink-0" />
                    <span className="text-xs text-slate-500 font-medium">Seating</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-slate-950">
                    {vehicle.seats} Passengers
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Luggage className="h-4 w-4 text-amber-600 shrink-0" />
                    <span className="text-xs text-slate-500 font-medium">Boot Space</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-slate-950">
                    {vehicle.luggage} Bags
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <Snowflake className="h-4 w-4 text-amber-600 shrink-0" />
                    <span className="text-xs text-slate-500 font-medium">Climate</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-slate-950">
                    {vehicle.airCondition ? "Chilled AC" : "Standard AC"}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span className="text-xs text-slate-500 font-medium">Safety</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-slate-950">
                    Verified Chauffeur
                  </p>
                </div>
              </div>

              {/* Area Assurance */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-xs">
                <span className="font-semibold text-slate-700">
                  Serving all sectors near:
                </span>
                <span className="font-bold text-amber-900">
                  {location.name}
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-amber-400
                    px-6
                    py-3.5
                    text-sm
                    font-extrabold
                    text-slate-950
                    shadow-sm
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-amber-300
                    sm:flex-1
                  "
                >
                  <Zap className="h-4 w-4 text-slate-950 fill-slate-950" />
                  Instant Booking
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:918377809809"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border border-slate-300
                    bg-white
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-slate-900
                    transition-all
                    hover:border-amber-300
                    hover:bg-slate-50
                  "
                >
                  <PhoneCall className="h-4 w-4 text-amber-600" />
                  Call
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}