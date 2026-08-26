import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
} from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";
import type { Vehicle } from "@/data/vehicles";

type VehicleComparisonSectionProps = {
  route: RouteData;
  vehicles: Vehicle[];
};

function getVehicleCategoryLabel(
  vehicle: Vehicle
) {
  if (vehicle.name === "Innova Crysta") {
    return "Premium SUV";
  }

  if (vehicle.category === "SUV") {
    return "SUV";
  }

  return vehicle.category;
}

function getBestFor(vehicle: Vehicle) {
  switch (vehicle.category) {
    case "Hatchback":
      return "Solo trips and budget travel";

    case "Sedan":
      return "Couples, business and airport travel";

    case "SUV":
      return "Families, small groups and extra luggage";

    case "Tempo Traveller":
      return "Office groups, events and larger families";

    case "Urbania":
      return "Premium group and corporate travel";

    default:
      return "Comfortable private travel";
  }
}

function getDescription(vehicle: Vehicle) {
  switch (vehicle.category) {
    case "Hatchback":
      return `A practical ${vehicle.name} option for passengers looking for economical and comfortable travel.`;

    case "Sedan":
      return `A comfortable ${vehicle.name} sedan for passengers looking for a smooth and convenient journey.`;

    case "SUV":
      return `A spacious ${vehicle.name} option for families and groups who need additional seating and luggage space.`;

    case "Tempo Traveller":
      return `A spacious ${vehicle.name} for larger families, office groups and group transportation.`;

    case "Urbania":
      return `A premium ${vehicle.name} option for comfortable group, corporate and family travel.`;

    default:
      return `A comfortable ${vehicle.name} option for your journey.`;
  }
}

function getVehicleHref(
  route: RouteData,
  vehicle: Vehicle
) {
  return `/${route.slug.replace(
    "-taxi",
    `-${vehicle.slug}-taxi`
  )}`;
}

export default function VehicleComparisonSection({
  route,
  vehicles,
}: VehicleComparisonSectionProps) {
  const routeName = `${route.from.name} to ${route.to.name}`;

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Which Taxi Is Best for Your{" "}
            {routeName} Journey?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose your vehicle based on the
            number of passengers, luggage, comfort
            requirements and type of journey. Here
            are some popular taxi options available
            for travel from{" "}
            {route.from.name} to{" "}
            {route.to.name}.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => {
            const href = getVehicleHref(
              route,
              vehicle
            );

            return (
              <article
                key={vehicle.slug}
                className="
                  group
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-amber-200
                  hover:shadow-md
                  sm:p-6
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={href}
                      className="text-xl font-bold text-slate-900 hover:text-amber-600 hover:underline"
                    >
                      {vehicle.name}
                    </Link>

                    <p className="mt-1 text-sm text-slate-500">
                      {getVehicleCategoryLabel(
                        vehicle
                      )}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                    <Users size={14} />

                    Up to {vehicle.seats}
                  </div>
                </div>

                {/* Best For */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Best for
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {getBestFor(vehicle)}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {getDescription(vehicle)}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check
                      size={16}
                      className="text-emerald-600"
                    />

                    Private cab option
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check
                      size={16}
                      className="text-emerald-600"
                    />

                    {vehicle.airCondition
                      ? "Air-conditioned vehicle"
                      : "Non-air-conditioned vehicle"}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check
                      size={16}
                      className="text-emerald-600"
                    />

                    {vehicle.luggage} luggage
                    capacity
                  </div>
                </div>

                {/* Link */}
                <Link
                  href={href}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-amber-600
                    hover:text-amber-700
                  "
                >
                  View {vehicle.name} Taxi

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        {vehicles.some(
          (vehicle) =>
            vehicle.category ===
              "Tempo Traveller" ||
            vehicle.category === "Urbania"
        ) && (
          <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm leading-6 text-slate-600">
              Travelling with a larger group?
              Explore our{" "}
              <Link
                href={`/${route.slug.replace(
                  "-taxi",
                  "-tempo-traveller"
                )}`}
                className="font-semibold text-amber-600 hover:underline"
              >
                {routeName} Tempo Traveller
              </Link>{" "}
              options for group transportation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}