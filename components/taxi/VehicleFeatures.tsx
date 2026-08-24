import {
  CheckCircle2,
  MapPinned,
  UserRoundCheck,
  Wind,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleFeatures({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const features = [
    {
      enabled: vehicle.airCondition,
      title: "Air Conditioned",
      description:
        "Travel comfortably with an air-conditioned cabin.",
      icon: Wind,
    },
    {
      enabled: vehicle.gps,
      title: "GPS Navigation",
      description:
        "GPS-enabled travel for convenient route navigation.",
      icon: MapPinned,
    },
    {
      enabled: vehicle.driverChoice,
      title: "Driver Choice",
      description:
        "Professional driver service available with the vehicle.",
      icon: UserRoundCheck,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-amber-600">
            Features
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {vehicle.name} Taxi Features
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features
            .filter((feature) => feature.enabled)
            .map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                    Available
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}