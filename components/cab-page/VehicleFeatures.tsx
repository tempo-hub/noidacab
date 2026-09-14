"use client";

import Image from "next/image";
import {
  CarFront,
  Check,
  Luggage,
  MapPinned,
  Snowflake,
  UserRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

type Props = {
  vehicle: Vehicle;
  highlights?: string[];
};

export function VehicleFeatures({
  vehicle,
  highlights = [],
}: Props) {
  const features = [
    {
      label: "Passengers",
      value: `${vehicle.seats} Seats`,
      icon: UserRound,
      show: true,
    },
    {
      label: "Doors",
      value: `${vehicle.doors} Doors`,
      icon: CarFront,
      show: true,
    },
    {
      label: "Luggage",
      value: `${vehicle.luggage} Bags`,
      icon: Luggage,
      show: true,
    },
    {
      label: "Air Condition",
      value: "Chilled AC",
      icon: Snowflake,
      show: vehicle.airCondition,
    },
    {
      label: "GPS Tracking",
      value: "Live GPS",
      icon: MapPinned,
      show: vehicle.gps,
    },
    {
      label: "Driver",
      value: "Verified Chauffeur",
      icon: ShieldCheck,
      show: vehicle.driverChoice,
    },
  ];

   const isTempo =
    vehicle.category?.toLowerCase() === "tempo-traveller" ||
    vehicle.slug?.toLowerCase().includes("tempo") ||
    vehicle.slug?.toLowerCase().includes("urbania") ||
    vehicle.name?.toLowerCase().includes("tempo") ||
    vehicle.name?.toLowerCase().includes("urbania");


  const visibleFeatures = features.filter((feature) => feature.show);

  return (
    <section className="border-b border-gray-300 bg-white/95 py-12 sm:py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <CarFront className="h-4 w-4 text-amber-600" />
            CAB SPECIFICATIONS
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {vehicle.name} Comfort & Features
          </h2>

          <p className="mt-3 max-w-7xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Inspected, clean, and mechanically sound {vehicle.name} cabs designed for smooth city navigation and highway runs.
          </p>
        </div>

        {/* ================= REAL VEHICLE VISUAL + SPEC CHIPS ================= */}
        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            
            {/* Real Vehicle Image Frame */}
            <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs sm:h-72 lg:col-span-5">
              <Image
                src={vehicle.image}
                alt={`${vehicle.name} cab features and interior comfort`}
                fill
                className={isTempo ? "object-contain transition-transform duration-300 hover:scale-105" : "object-cover transition-transform duration-300 hover:scale-105"}
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute top-3 left-3 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                {vehicle.category || "Commercial Fleet"}
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-emerald-600/90 px-2.5 py-1 text-[11px] font-bold text-white shadow backdrop-blur-xs">
                <Sparkles size={12} /> 100% Sanitized
              </div>
            </div>

            {/* Feature Metrics Grid */}
            <div className="lg:col-span-7">
              <div
                className={`grid gap-3 sm:gap-4 ${
                  visibleFeatures.length <= 4
                    ? "grid-cols-2"
                    : "grid-cols-2 sm:grid-cols-3"
                }`}
              >
                {visibleFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.label}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border border-slate-200
                        bg-white
                        p-4
                        shadow-xs
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-amber-300
                        hover:shadow-md
                      "
                    >
                      {/* Top accent line on hover */}
                      <div className="absolute left-0 top-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />

                      {/* Feature Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-amber-100 group-hover:text-amber-700 sm:h-11 sm:w-11">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </div>

                      {/* Content */}
                      <div className="mt-3.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[11px]">
                          {feature.label}
                        </p>
                        <p className="mt-0.5 text-sm font-extrabold text-slate-900 sm:text-base">
                          {feature.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ================= HIGHLIGHTS BANNER ================= */}
        {highlights.length > 0 && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/60 sm:mt-10">
            <div className="border-b border-amber-200 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-xs">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                    Why choose the {vehicle.name}?
                  </h3>
                  <p className="text-xs text-slate-600 sm:text-sm">
                    Verified benefits for city transits and outstation stretches.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-amber-200 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 bg-white px-5 py-4 transition-colors hover:bg-amber-50 sm:px-6"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </div>

                  <span className="text-sm font-medium text-slate-800">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}