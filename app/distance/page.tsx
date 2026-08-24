// app/distance/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  Clock3,
  MapPin,
  Route,
} from "lucide-react";

import { noidaRoutes } from "@/data/routes/noidaRoutes";

export const metadata = {
  title: "Noida Distance & Travel Time Routes | NoidaCab",
  description:
    "Explore distance, travel time, cab options and vehicle-wise routes from Noida to popular nearby cities.",
};

export default function DistancePage() {
  const routes = Object.values(noidaRoutes);

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-18 sm:py-16 lg:py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
     
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-900" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-900">
                Distance & Travel Time
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Noida to Nearby Cities{" "}
              <span className="text-orange-500">
                Distance & Travel Time
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-900 sm:text-lg">
              Explore road distance, estimated travel time and
              available cab options from Noida to popular destinations.
            </p>
          </div>

        </div>
      </section>

      {/* Routes */}
      <section className="bg-white/95 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Popular Routes
            </p>

            <h2 className="mt-2 text-3xl font-bold text-zinc-950">
              Choose Your Destination
            </h2>

            <p className="mt-3 text-zinc-600">
              Compare distance, travel time and cab options for
              your preferred route.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {routes.map((route) => (
              <div
                key={route.slug}
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50/95 transition-all duration-300 hover:border-orange-200 hover:shadow-xl"
              >
                {/* Route Header */}
                <div className="border-b border-zinc-200 bg-white p-6 sm:p-7">

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                        <Route className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-zinc-950">
                          {route.from.name} to {route.to.name}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-500">

                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-orange-500" />
                            {route.distance} km
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Clock3 className="h-4 w-4 text-orange-500" />
                            {route.travelTime}
                          </span>

                        </div>
                      </div>
                    </div>

                    {/* Distance Page */}
                    <Link
                      href={`/${route.slug}-distance-travel-time`}
                      className="hidden items-center gap-1.5 text-sm font-semibold text-orange-600 sm:flex"
                    >
                      Distance
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                  </div>
                </div>

                {/* Vehicles */}
                <div className="p-6 sm:p-7">

                  <div className="mb-4 flex items-center gap-2">
                    <CarFront className="h-4 w-4 text-orange-500" />

                    <p className="text-sm font-semibold text-zinc-900">
                      Available Cabs
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {route.cabs.map((cab) => (
                      <Link
                        key={cab.slug}
                        href={`/${route.from.slug}-to-${route.to.slug}-${cab.slug}-taxi`}
                        className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-300 hover:border-orange-200 hover:shadow-md"
                      >
                        <div>
                          <p className="font-semibold text-zinc-950">
                            {cab.name}
                          </p>

                          <p className="mt-1 text-xs text-zinc-500">
                            {cab.category} · ₹{cab.pricePerKm}/km
                          </p>
                        </div>

                        <ArrowRight className="h-4 w-4 text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-orange-500" />
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Distance Link */}
                  <Link
                    href={`/${route.slug}-distance-travel-time`}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 sm:hidden"
                  >
                    View Distance & Travel Time
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}