import {
  CheckCircle2,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

import type { RouteVehicleProps } from "./type";

export default function RouteFare({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  return (
    <section className="bg-white/95 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              <IndianRupee className="h-4 w-4" />
              Transparent Cab Fare
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {vehicle.name} Fare from{" "}
              {route.fromName} to {route.toName}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
              <p>
                Our {route.fromName} to {route.toName}{" "}
                {vehicle.name} taxi fare is designed to keep
                your journey affordable and transparent, without
                unexpected charges added to your trip.
              </p>

              <p>
                The {route.fromName} to {route.toName}{" "}
                {vehicle.name} cab fare starts from{" "}
                <strong className="text-gray-900">
                  {vehicle.price}
                </strong>
                . The final fare is confirmed before booking
                based on your journey type and travel
                requirements.
              </p>

              <p>
                You can book the {vehicle.name} for both one-way
                and round-trip journeys. Driver allowance and
                fuel are included, while applicable tolls and
                parking charges are billed separately at actuals.
              </p>
            </div>

            {/* FARE FEATURES */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-600" />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Upfront Fare
                  </p>
                  <p className="text-xs text-gray-500">
                    Know your fare before booking
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-600" />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Fuel Included
                  </p>
                  <p className="text-xs text-gray-500">
                    No separate fuel surcharge
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-600" />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Driver Allowance
                  </p>
                  <p className="text-xs text-gray-500">
                    Included in the quoted fare
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-orange-600" />

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    No Hidden Charges
                  </p>
                  <p className="text-xs text-gray-500">
                    Toll and parking at actuals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FARE CARD */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-orange-50 p-6 text-center">
              <p className="text-sm font-medium text-gray-600">
                {vehicle.name} Starting Fare
              </p>

              <p className="mt-2 text-4xl font-black text-orange-600">
                {vehicle.price}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                From {route.fromName} to {route.toName}
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-sm">
                <span className="text-gray-500">
                  Vehicle
                </span>

                <span className="font-semibold text-gray-900">
                  {vehicle.name}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-sm">
                <span className="text-gray-500">
                  Route
                </span>

                <span className="font-semibold text-gray-900">
                  {route.fromName} → {route.toName}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-sm">
                <span className="text-gray-500">
                  Distance
                </span>

                <span className="font-semibold text-gray-900">
                  {route.distance}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  Travel Time
                </span>

                <span className="font-semibold text-gray-900">
                  {route.travelTime}
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/918377809809?text=${encodeURIComponent(
                `Hi, I want to know the fare for ${vehicle.name}. Please share the details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-gray-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Get {vehicle.name} Fare
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}