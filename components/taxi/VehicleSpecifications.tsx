import {
  AirVent,
  BriefcaseBusiness,
  CarFront,
  Compass,
  Fuel,
  Gauge,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleSpecifications({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const primarySpecs = [
    {
      label: "Seating Capacity",
      value: `${vehicle.seats} Passengers`,
      subtext: "Comfort pushback arrangement",
      icon: Users,
    },
    {
      label: "Luggage Space",
      value: `${vehicle.luggage} Bags / Suitcases`,
      subtext: "Dedicated boot / rear cargo",
      icon: BriefcaseBusiness,
    },
    {
      label: "Air Conditioning",
      value: vehicle.airCondition ? "Dual Zone Climate" : "Standard Air System",
      subtext: "Rear AC vents equipped",
      icon: AirVent,
    },
    {
      label: "Door Access",
      value: `${vehicle.doors || 4} Passenger Doors`,
      subtext: "Ergonomic wide entry",
      icon: CarFront,
    },
    {
      label: "Tracking & GPS",
      value: vehicle.gps ? "Live Active Tracking" : "Standard Navigation",
      subtext: "24x7 control room connected",
      icon: MapPinned,
    },
  ];

  const technicalDetails = [
    { label: "Category", value: `${vehicle.category} Transport` },
    { label: "Fuel Type", value: "Clean Fuel / Diesel Efficient" },
    { label: "Ideal Route", value: "Local Noida, Delhi NCR & Outstation" },
    { label: "Driver Allowance", value: "Included in standard rates" },
    { label: "Fleet Condition", value: "Late Model, Fully Inspected" },
    { label: "Permit Type", value: "All-India Tourist Permit (Commercial)" },
  ];

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200/80 mb-3">
            <Sparkles size={13} className="text-amber-600" />
            Vehicle Details
          </div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            {vehicle.name} Technical Specifications
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Review detailed dimensions, seating configurations, and utility parameters before confirming your trip.
          </p>
        </div>

        {/* Primary Specs Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 mb-8">
          {primarySpecs.map((spec) => {
            const Icon = spec.icon;

            return (
              <div
                key={spec.label}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm hover:border-amber-600/40 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-base font-extrabold text-slate-900 leading-snug">
                    {spec.value}
                  </p>
                </div>

                <p className="mt-3 text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-medium">
                  {spec.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Extended Technical Specs Box */}
        <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-600" />
            Commercial Vehicle Build & Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalDetails.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs"
              >
                <span className="text-xs font-medium text-slate-500">
                  {detail.label}
                </span>
                <span className="text-xs font-bold text-slate-900 text-right">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          {/* Footnote Strip */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl bg-amber-50/70 border border-amber-200/60 p-3.5 text-xs text-slate-700">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck size={16} className="text-amber-600 shrink-0" />
              <span>
                Standard yellow commercial registration plates compliant with RTO safety norms.
              </span>
            </div>
            <span className="font-bold text-amber-800 shrink-0">
              Verified Condition
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}