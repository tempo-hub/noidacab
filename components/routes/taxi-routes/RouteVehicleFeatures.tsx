import {
  BriefcaseBusiness,
  CarFront,
  CheckCircle2,
  Users,
} from "lucide-react";

import type { RouteVehicleProps } from "./type";

export default function RouteVehicleFeatures({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  const features = [
    {
      label: "Seating capacity",
      detail: `${vehicle.seats} passengers plus driver`,
      icon: Users,
    },
    {
      label: "Luggage capacity",
      detail: `${vehicle.luggage} medium luggage bags`,
      icon: BriefcaseBusiness,
    },
    {
      label: "Best suited for",
      detail:
        vehicle.category === "SUV"
          ? "Families, small groups and colleagues travelling together"
          : vehicle.category === "Sedan"
            ? "Couples, families and business travellers"
            : vehicle.category === "Hatchback"
              ? "Individuals, couples and small luggage trips"
              : "Groups and comfortable long-distance travel",
      icon: Users,
    },
    {
      label: "Ideal group size",
      detail:
        vehicle.seats >= 6
          ? `4 to ${vehicle.seats} people`
          : vehicle.seats >= 4
            ? `2 to ${vehicle.seats} people`
            : `${vehicle.seats} people`,
      icon: Users,
    },
    {
      label: "Comfort",
      detail: vehicle.airCondition
        ? "Air-conditioned, clean and comfortable cabin"
        : "Clean and comfortable cabin",
      icon: CheckCircle2,
    },
    {
      label: "Use case",
      detail:
        vehicle.category === "SUV"
          ? "Airport transfers with luggage, family trips, office travel and day trips"
          : vehicle.category === "Sedan"
            ? "Airport transfers, office commutes, city travel and outstation trips"
            : vehicle.category === "Hatchback"
              ? "City travel, short trips and economical cab bookings"
              : "Group transfers, airport travel, events and outstation journeys",
      icon: CarFront,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <CarFront className="h-4 w-4" />
            {vehicle.name} Features
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {vehicle.name} Features and Options
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Check the key features and practical details of our{" "}
            {vehicle.name} taxi for your journey from{" "}
            {route.fromName} to {route.toName}.
          </p>
        </div>

        {/* Features table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Table header */}
          <div className="hidden grid-cols-[280px_1fr] border-b border-gray-200 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-900 sm:grid">
            <div>Feature</div>
            <div>Detail</div>
          </div>

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className={`grid gap-3 px-5 py-5 sm:grid-cols-[280px_1fr] sm:px-6 ${
                  index !== features.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                {/* Feature */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="font-semibold text-gray-900">
                    {feature.label}
                  </span>
                </div>

                {/* Detail */}
                <div className="pl-12 text-sm leading-6 text-gray-600 sm:pl-0">
                  {feature.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}