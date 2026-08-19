import {
  Calculator,
  CheckCircle2,
  MapPin,
  Route,
} from "lucide-react";

import {
  calculateFare,
  getPerKmRate,
} from "@/lib/pricing";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  route: {
    fromName: string;
    toName: string;
    distanceKm: number;
  };

  vehicle: Vehicle;
};

export function FareEstimate({
  route,
  vehicle,
}: Props) {
  const fare = calculateFare(
    vehicle,
    route.distanceKm
  );

  const rate = getPerKmRate(vehicle);

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
              <Calculator className="h-4 w-4" />
              FARE ESTIMATE
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple & Transparent Cab Fare
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Get an estimated fare for your{" "}
              <span className="font-semibold text-slate-900">
                {vehicle.name}
              </span>{" "}
              cab based on the total route distance.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {/* Distance */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Route className="h-5 w-5 text-slate-700" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Total Distance
                  </p>

                  <p className="font-semibold text-slate-900">
                    {route.distanceKm} km
                  </p>
                </div>

              </div>

              {/* Vehicle */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <MapPin className="h-5 w-5 text-slate-700" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Vehicle
                  </p>

                  <p className="font-semibold text-slate-900">
                    {vehicle.name}
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* FARE CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

            {/* Accent */}
            <div className="h-1.5 bg-amber-400" />

            <div className="p-6 sm:p-7">

              {/* Fare */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Estimated fare
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">

                    <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                      ₹{fare.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-slate-500">
                      approx.
                    </span>

                  </div>
                </div>

                {/* Rate */}
                <div className="rounded-2xl bg-amber-50 px-4 py-3 text-center">

                  <p className="text-xs text-slate-500">
                    Rate
                  </p>

                  <p className="font-bold text-slate-900">
                    ₹{rate}/km
                  </p>

                </div>

              </div>

              {/* CALCULATION */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-4">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    Distance
                  </span>

                  <span className="font-semibold text-slate-900">
                    {route.distanceKm} km
                  </span>

                </div>

                <div className="my-3 h-px bg-slate-200" />

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    {vehicle.name} rate
                  </span>

                  <span className="font-semibold text-slate-900">
                    ₹{rate}/km
                  </span>

                </div>

                <div className="my-3 h-px bg-slate-200" />

                <div className="flex items-center justify-between">

                  <span className="font-semibold text-slate-900">
                    Estimated total
                  </span>

                  <span className="text-xl font-bold text-slate-900">
                    ₹{fare.toLocaleString("en-IN")}
                  </span>

                </div>

              </div>

              {/* NOTE */}
              <div className="mt-5 flex gap-2 text-sm text-slate-500">

                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />

                <p>
                  Final fare may vary depending on tolls,
                  parking and other applicable charges.
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}