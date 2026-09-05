import {
  CheckCircle2,
  MapPinned,
  UserRoundCheck,
  Wind,
  Sparkles,
  ShieldAlert,
  BatteryCharging,
  Music,
  Luggage,
  Clock,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleFeatures({ vehicle }: { vehicle: Vehicle }) {
  const dynamicFeatures = [
    {
      enabled: vehicle.airCondition,
      title: "Climate Controlled AC",
      description: "Powerful dual-zone air conditioning ensuring a cool, comfortable ride across Delhi NCR.",
      icon: Wind,
      badge: "Standard Comfort",
    },
    {
      enabled: vehicle.gps,
      title: "Live GPS Tracking",
      description: "Real-time navigation and GPS tracking for route optimization and passenger safety.",
      icon: MapPinned,
      badge: "Safety Monitored",
    },
    {
      enabled: vehicle.driverChoice,
      title: "Verified Commercial Driver",
      description: "Experienced, background-verified chauffeurs trained in highway and city driving.",
      icon: UserRoundCheck,
      badge: "Vetted Staff",
    },
    // Standard inclusions for all Noida Cab fleet vehicles
    {
      enabled: true,
      title: "Deep Sanitized Cabin",
      description: "Cleaned and vacuumed before every trip for a fresh, smoke-free traveling atmosphere.",
      icon: Sparkles,
      badge: "Hygiene Assured",
    },
    {
      enabled: true,
      title: "Spacious Boot & Handling",
      description: `Accommodates ${vehicle.luggage} bags with courteous driver assistance during loading/unloading.`,
      icon: Luggage,
      badge: `${vehicle.luggage} Bags Space`,
    },
    {
      enabled: true,
      title: "USB Charging & Media",
      description: "Keep your devices charged on the go with onboard charging ports and Bluetooth/FM audio.",
      icon: BatteryCharging,
      badge: "Onboard Utility",
    },
  ];

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200/80 mb-3">
            <Sparkles size={13} className="text-amber-600" />
            Comfort & Amenities
          </div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            {vehicle.name} Features & Amenities
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Engineered for long-distance durability and local city ease. Explore the onboard features and safety amenities included with every booking.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dynamicFeatures
            .filter((feature) => feature.enabled)
            .map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-600/40 transition-all duration-200"
                >
                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                        {feature.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base font-extrabold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Included in Fare
                    </span>
                    <span className="text-slate-400 font-medium">Verified</span>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Bottom Safety Strip */}
        <div className="mt-10 rounded-2xl border border-amber-200/70 bg-amber-50/50 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-6 w-6 text-amber-600 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Commercial Yellow-Plate Transport Licensed
              </p>
              <p className="text-xs text-slate-500">
                All vehicles carry comprehensive passenger insurance, fitness certification, and interstate permits.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-white border border-amber-200 px-3.5 py-2 rounded-xl shrink-0 shadow-sm">
            <Clock size={14} className="text-amber-600" />
            24/7 Roadside Assist
          </div>
        </div>
      </div>
    </section>
  );
}