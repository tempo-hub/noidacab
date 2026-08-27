import {
  Clock3,
  MapPin,
  Route,
} from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";

type RouteInfoSectionProps = {
  route: RouteData;
};

export default function RouteInfoSection({
  route,
}: RouteInfoSectionProps) {
  const routeName = `${route.from.name} to ${route.to.name}`;

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* ================================================================ */}
        {/* Heading */}
        {/* ================================================================ */}

        <div className="max-w-4xl">

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {routeName} Tempo Traveller Route
            Information
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Plan your group journey from{" "}
            {route.from.name} to {route.to.name}
            with a Tempo Traveller. The route, distance
            and travel time can vary depending on your
            exact pickup location, destination, traffic
            conditions and stops during the journey.
          </p>

        </div>

        {/* ================================================================ */}
        {/* Main Route Summary */}
        {/* ================================================================ */}

        <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

            {/* Route */}

            <div className="flex items-center gap-4 p-5 sm:p-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Route size={21} />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Route
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {route.from.name} → {route.to.name}
                </p>

              </div>

            </div>

            {/* Distance */}

            <div className="flex items-center gap-4 p-5 sm:p-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <MapPin size={21} />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Approx Distance
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {route.distance}
                </p>

              </div>

            </div>

            {/* Travel Time */}

            <div className="flex items-center gap-4 p-5 sm:p-6">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Clock3 size={21} />
              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Approx Travel Time
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {route.duration}
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* ================================================================ */}
        {/* Route Details */}
        {/* ================================================================ */}

        <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-5 sm:p-6">

          <p className="text-sm leading-6 text-slate-700 sm:text-base">

            <span className="font-semibold text-slate-900">
              Route details:
            </span>{" "}

            The exact route between{" "}
            {route.from.name} and{" "}
            {route.to.name} may vary depending on
            your pickup and drop-off locations,
            traffic conditions, road conditions and
            the route selected by your Tempo Traveller
            driver.

          </p>

        </div>

      </div>
    </section>
  );
}