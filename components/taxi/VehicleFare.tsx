import Link from "next/link";
import { ArrowRight, IndianRupee } from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleFare({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-amber-100 bg-amber-50">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="text-sm font-semibold text-amber-700">
                Taxi Fare
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {vehicle.name} Taxi Fare in Noida
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Our listed starting rate for {vehicle.name} is based on the
                current vehicle pricing. The final fare can vary depending on
                your route, trip type, distance and applicable charges.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                <IndianRupee className="h-5 w-5 text-amber-600" />

                <div>
                  <p className="text-xs text-slate-500">
                    Starting Rate
                  </p>

                  <p className="text-lg font-bold text-slate-900">
                    {vehicle.price}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/noida-to-delhi-taxi-fare"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              View Detailed Fare
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}