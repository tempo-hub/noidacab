import {
  BriefcaseBusiness,
  Building2,
  Plane,
  Users,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleUseCases({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const isGroupVehicle =
    vehicle.category === "Urbania" ||
    vehicle.category === "Tempo Traveller";

  const isFamilyVehicle =
    vehicle.category === "SUV" ||
    vehicle.category === "Urbania" ||
    vehicle.category === "Tempo Traveller";

  const useCases = [
    {
      title: isGroupVehicle
        ? "Group Travel"
        : "Family Travel",
      description: isGroupVehicle
        ? `The ${vehicle.name} is designed for group transportation with ${vehicle.seats} seats.`
        : `The ${vehicle.name} provides a comfortable option for families travelling together.`,
      icon: Users,
    },
    {
      title: "Airport Transfers",
      description:
        "Suitable for airport pickup and drop services with convenient luggage capacity.",
      icon: Plane,
    },
    {
      title: "Business Travel",
      description:
        "A practical option for corporate meetings, office travel and business trips.",
      icon: BriefcaseBusiness,
    },
    {
      title: isFamilyVehicle
        ? "Outstation Travel"
        : "Local Travel",
      description: isFamilyVehicle
        ? `The ${vehicle.name} can be selected for comfortable longer-distance journeys.`
        : `The ${vehicle.name} is suitable for everyday travel around Noida.`,
      icon: Building2,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-amber-600">
            Suitable For
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Where Can You Use a {vehicle.name}?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose the {vehicle.name} according to your journey and travel
            requirements.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}