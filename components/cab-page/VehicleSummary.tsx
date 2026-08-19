import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Luggage,
  Snowflake,
  UserRound,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  route: {
    fromName: string;
    toName: string;
    distanceKm: number;
  };
  vehicle: Vehicle;
  fare?: number;
};

export function VehicleSummary({
  route,
  vehicle,
  fare,
}: Props) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* Vehicle Image */}
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-slate-100 p-6 sm:min-h-[360px] sm:p-10 lg:min-h-[480px]">

              {/* Background Shape */}
              <div className="absolute h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />

              <img
                src={vehicle.image}
                alt={`${vehicle.name} cab`}
                className="
                  relative
                  z-10
                  max-h-[250px]
                  w-full
                  max-w-[600px]
                  object-cover
                  drop-shadow-2xl
                  transition-transform
                  duration-500
                  hover:scale-[1.03]
                  sm:max-h-[320px]
                  lg:max-h-[390px]
                "
              />

              {/* Vehicle Badge */}
              <div className="absolute bottom-5 left-5 z-20 rounded-xl border border-white/80 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm sm:bottom-7 sm:left-7">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Selected Vehicle
                </p>

                <p className="text-sm font-bold text-slate-950">
                  {vehicle.name}
                </p>
              </div>

            </div>

            {/* Summary */}
            <div className="p-6 sm:p-8 lg:p-10">

              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                <CarFront className="h-4 w-4" />
                VEHICLE SUMMARY
              </span>

              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {vehicle.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A comfortable and practical choice for your{" "}
                <span className="font-semibold text-slate-950">
                  {route.fromName} → {route.toName}
                </span>{" "}
                journey.
              </p>

              {/* Vehicle Details */}
              <div className="mt-6 grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <UserRound className="h-4 w-4 text-amber-600" />

                    <span className="text-xs text-slate-500">
                      Passengers
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-bold text-slate-950">
                    {vehicle.seats} Seats
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Luggage className="h-4 w-4 text-amber-600" />

                    <span className="text-xs text-slate-500">
                      Luggage
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-bold text-slate-950">
                    {vehicle.luggage} Bags
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Snowflake className="h-4 w-4 text-amber-600" />

                    <span className="text-xs text-slate-500">
                      Comfort
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-bold text-slate-950">
                    {vehicle.airCondition ? "AC Available" : "Non AC"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <CarFront className="h-4 w-4 text-amber-600" />

                    <span className="text-xs text-slate-500">
                      Doors
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-bold text-slate-950">
                    {vehicle.doors} Doors
                  </p>
                </div>

              </div>

              {/* Route */}
              {/* <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">

                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
                  <span>{route.fromName}</span>

                  <ArrowRight className="h-4 w-4 text-amber-600" />

                  <span>{route.toName}</span>
                </div>

                <p className="mt-1 text-xs text-slate-600">
                  {route.distanceKm} km · One Way
                  {fare ? ` · From ₹${fare.toLocaleString("en-IN")}` : ""}
                </p>

              </div> */}

              {/* Benefits */}
              {/* <div className="mt-5 space-y-2.5">

                {[
                  "Professional driver",
                  "Clean and comfortable vehicle",
                  "Transparent fare estimate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />
                    {item}
                  </div>
                ))}

              </div> */}

              {/* CTA */}
              <button
                type="button"
                className="
                  group
                  mt-7
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-amber-400
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-sm
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-amber-300
                  sm:w-auto
                "
              >
                Book {vehicle.name}

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}