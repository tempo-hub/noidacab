import {
  AirVent,
  BriefcaseBusiness,
  CarFront,
  MapPinned,
  Users,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleSpecifications({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const specifications = [
    {
      label: "Seating Capacity",
      value: `${vehicle.seats} Passengers`,
      icon: Users,
    },
    {
      label: "Luggage",
      value: `${vehicle.luggage} Bags`,
      icon: BriefcaseBusiness,
    },
    {
      label: "Doors",
      value: `${vehicle.doors} Doors`,
      icon: CarFront,
    },
    {
      label: "Air Conditioning",
      value: vehicle.airCondition ? "Available" : "Not Available",
      icon: AirVent,
    },
    {
      label: "GPS",
      value: vehicle.gps ? "Available" : "Not Available",
      icon: MapPinned,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-amber-600">
            Vehicle Details
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {vehicle.name} Specifications
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Check the key features and specifications before booking your{" "}
            {vehicle.name}.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {specifications.map((specification) => {
            const Icon = specification.icon;

            return (
              <div
                key={specification.label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  {specification.label}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  {specification.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}