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

function getBestFor(vehicle: Vehicle) {
  if (vehicle.seats >= 20) {
    return "Large groups, events and corporate travel";
  }

  if (vehicle.seats >= 16) {
    return "Office groups, families and group tours";
  }

  if (vehicle.seats >= 12) {
    return "Families, friends and small group travel";
  }

  return "Small groups and family travel";
}

function getDescription(
  vehicle: Vehicle
) {
  return `A spacious ${vehicle.name} for families, friends, office groups and other travellers looking for comfortable group transportation.`;
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

  // Only show Tempo Traveller vehicles
  const tempoVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.category === "Tempo Traveller"
  );

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* ================================================================ */}
        {/* Heading */}
        {/* ================================================================ */}

        <div className="max-w-3xl">

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Which Tempo Traveller Is Best for Your{" "}
            {routeName} Journey?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose a Tempo Traveller based on your
            group size, luggage, comfort requirements
            and type of journey. Explore the available
            Tempo Traveller options for travelling from{" "}
            {route.from.name} to{" "}
            {route.to.name}.
          </p>

        </div>

        {/* ================================================================ */}
        {/* Vehicle Cards */}
        {/* ================================================================ */}

        {tempoVehicles.length > 0 && (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {tempoVehicles.map((vehicle) => {
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

                  {/* ==================================================== */}
                  {/* Top */}
                  {/* ==================================================== */}

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <Link
                        href={href}
                        className="text-xl font-bold text-slate-900 hover:text-amber-600 hover:underline"
                      >
                        {vehicle.name}
                      </Link>

                      <p className="mt-1 text-sm text-slate-500">
                        Tempo Traveller
                      </p>

                    </div>

                    {/* Seats */}

                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">

                      <Users size={14} />

                      Up to {vehicle.seats}

                    </div>

                  </div>

                  {/* ==================================================== */}
                  {/* Best For */}
                  {/* ==================================================== */}

                  <div className="mt-5">

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Best for
                    </p>

                    <p className="mt-1 font-semibold text-slate-800">
                      {getBestFor(vehicle)}
                    </p>

                  </div>

                  {/* ==================================================== */}
                  {/* Description */}
                  {/* ==================================================== */}

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {getDescription(vehicle)}
                  </p>

                  {/* ==================================================== */}
                  {/* Features */}
                  {/* ==================================================== */}

                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">

                    {/* Private Vehicle */}

                    <div className="flex items-center gap-2 text-sm text-slate-600">

                      <Check
                        size={16}
                        className="text-emerald-600"
                      />

                      Private Tempo Traveller

                    </div>

                    {/* AC */}

                    <div className="flex items-center gap-2 text-sm text-slate-600">

                      <Check
                        size={16}
                        className="text-emerald-600"
                      />

                      {vehicle.airCondition
                        ? "Air-conditioned vehicle"
                        : "Non-air-conditioned vehicle"}

                    </div>

                    {/* Luggage */}

                    <div className="flex items-center gap-2 text-sm text-slate-600">

                      <Check
                        size={16}
                        className="text-emerald-600"
                      />

                      {vehicle.luggage} luggage
                      capacity

                    </div>

                  </div>

                  {/* ==================================================== */}
                  {/* Link */}
                  {/* ==================================================== */}

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

                    View {vehicle.name}

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </Link>

                </article>
              );
            })}

          </div>
        )}

        {/* ================================================================ */}
        {/* Empty State */}
        {/* ================================================================ */}

        {tempoVehicles.length === 0 && (
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">

            <h3 className="text-lg font-semibold text-slate-900">
              Tempo Traveller options coming soon
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tempo Traveller vehicle options are
              currently unavailable for this route.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}