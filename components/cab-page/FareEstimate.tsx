import {
  Calculator,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import {
  getPerKmRate,
} from "@/lib/pricing";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: Vehicle;
};

export function FareEstimate({
  location,
  vehicle,
}: Props) {
  const rate = getPerKmRate(vehicle);

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
              <Calculator className="h-4 w-4" />
              FARE INFORMATION
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple & Transparent Cab Fare
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Book a{" "}
              <span className="font-semibold text-slate-900">
                {vehicle.name}
              </span>{" "}
              cab in{" "}
              <span className="font-semibold text-slate-900">
                {location.name}
              </span>{" "}
              with transparent pricing and no hidden charges.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              {/* Location */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <MapPin className="h-5 w-5 text-slate-700" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="font-semibold text-slate-900">
                    {location.name}
                  </p>
                </div>

              </div>

              {/* Vehicle */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <Calculator className="h-5 w-5 text-slate-700" />
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

              {/* Rate */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Starting rate
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">

                    <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                      ₹{rate}
                    </span>

                    <span className="text-sm text-slate-500">
                      / km
                    </span>

                  </div>
                </div>

                <div className="rounded-2xl bg-amber-50 px-4 py-3 text-center">

                  <p className="text-xs text-slate-500">
                    Vehicle
                  </p>

                  <p className="font-bold text-slate-900">
                    {vehicle.name}
                  </p>

                </div>

              </div>

              {/* INFORMATION */}
              <div className="mt-6 rounded-2xl bg-slate-50 p-4">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-slate-500">
                    Location
                  </span>

                  <span className="font-semibold text-slate-900">
                    {location.name}
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
                    Booking
                  </span>

                  <span className="text-xl font-bold text-slate-900">
                    Available
                  </span>

                </div>

              </div>

              {/* NOTE */}
              <div className="mt-5 flex gap-2 text-sm text-slate-500">

                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />

                <p>
                  Final fare depends on the trip distance,
                  duration, tolls, parking and other applicable
                  charges.
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}