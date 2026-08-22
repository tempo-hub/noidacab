import {
  Clock3,
  MapPin,
  Route as RouteIcon,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleRoute({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-amber-600">
            Taxi Routes
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {vehicle.name} Taxi Routes from Noida
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Book a {vehicle.name} from Noida for local destinations,
            Delhi travel, airport transfers and nearby cities. The actual
            route, distance and travel time depend on your pickup and
            destination.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex justify-between item-center">
              <h3 className="mt-4 font-semibold text-slate-900">
                Noida Local
              </h3>
              <MapPin className="h-5 w-5 text-amber-600" />
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Travel between Noida sectors, residential areas, offices and
              commercial locations.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex justify-between item-center">


              <h3 className="mt-4 font-semibold text-slate-900">
                Noida to Delhi
              </h3>
              <RouteIcon className="h-5 w-5 text-amber-600" />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Comfortable taxi travel from Noida to different parts of Delhi
              through suitable routes.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">

            <div className="flex justify-between item-center">


              <h3 className="mt-4 font-semibold text-slate-900">
                Airport Transfers
              </h3>

              <Clock3 className="h-5 w-5 text-amber-600" />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Use this vehicle for airport pickup and drop services from Noida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}