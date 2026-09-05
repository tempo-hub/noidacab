import Image from "next/image";
import type { Vehicle } from "@/data/vehicles";
import {
  ShieldCheck,
  CheckCircle,
  Fuel,
  Users,
  Briefcase,
  AirVent,
  Radio,
  Sparkles,
  Award,
} from "lucide-react";

export default function VehicleShowcaseSpecs({ vehicle }: { vehicle: Vehicle }) {
  const specs = [
    { label: "Vehicle Model", value: vehicle.name, icon: Award },
    { label: "Category", value: `${vehicle.category} Cab`, icon: Sparkles },
    { label: "Seating Capacity", value: `${vehicle.seats} Adults Comfortably`, icon: Users },
    { label: "Luggage Space", value: `${vehicle.luggage} Medium Suitcases`, icon: Briefcase },
    { label: "Air Conditioning", value: vehicle.airCondition ? "Dual Zone Climate Control" : "Standard", icon: AirVent },
    { label: "Safety & Tracking", value: vehicle.gps ? "Live GPS & Emergency SOS" : "Standard GPS", icon: ShieldCheck },
    { label: "Entertainment", value: "Bluetooth / FM Music System", icon: Radio },
    { label: "Fuel Efficiency", value: "Eco-Optimized Engine", icon: Fuel },
  ];

  return (
    <section className="border-b border-slate-200 bg-white/95 py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-2">
          <span className="inline-block rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200">
            Vehicle Tour & Specifications
          </span>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            Detailed Look at {vehicle.name}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Well-maintained, commercial yellow-plate fleet ready for local Noida runs and long outstation journeys.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Large High-Res Vehicle Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 p-6 shadow-xl">
              <Image
                src={vehicle.image}
                alt={`${vehicle.name} full view`}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-contain p-4 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-md border border-slate-200">
                ⭐ Prime Clean Fleet
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Technical & Comfort Specs</h3>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 shadow-sm hover:border-amber-600/40 transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600/10 text-amber-600">
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-semibold text-slate-600">{item.label}</span>
                    </div>
                    <span className="text-xs font-extrabold text-slate-900 text-right">{item.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}