import {
  ArrowRight,
  Clock3,
  MapPin,
  Route,
} from "lucide-react";

interface DistanceOverviewProps {
  route: {
    from: {
      name: string;
    };
    to: {
      name: string;
    };
    distance: number;
    travelTime: string;
  };
}

export default function DistanceOverview({
  route,
}: DistanceOverviewProps) {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Journey Overview
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            {route.from.name} to {route.to.name}{" "}
            <span className="text-orange-500">
              Distance & Travel Time
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Plan your journey with clear distance and travel-time
            information for a comfortable cab ride from{" "}
            <span className="font-medium text-zinc-900">
              {route.from.name}
            </span>{" "}
            to{" "}
            <span className="font-medium text-zinc-900">
              {route.to.name}
            </span>
            .
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* Distance */}
          <div className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <MapPin className="h-5 w-5" />
              </div>

              <span className="text-xs font-semibold tracking-wider text-zinc-300">
                01
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-zinc-500">
                Approx. Distance
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                  {route.distance}
                </span>

                <span className="mb-1 text-sm font-semibold text-zinc-500">
                  KM
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-500">
                Standard road distance
              </p>
            </div>
          </div>

          {/* Travel Time */}
          <div className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Clock3 className="h-5 w-5" />
              </div>

              <span className="text-xs font-semibold tracking-wider text-zinc-300">
                02
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-zinc-500">
                Estimated Travel Time
              </p>

              <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                {route.travelTime}
              </p>

              <p className="mt-3 text-sm text-zinc-500">
                Based on normal traffic conditions
              </p>
            </div>
          </div>

          {/* Journey */}
          <div className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Route className="h-5 w-5" />
              </div>

              <span className="text-xs font-semibold tracking-wider text-zinc-300">
                03
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-zinc-500">
                Journey
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl font-bold text-zinc-950">
                  {route.from.name}
                </span>

                <ArrowRight className="h-4 w-4 shrink-0 text-orange-500" />

                <span className="text-xl font-bold text-zinc-950">
                  {route.to.name}
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-500">
                Direct intercity cab journey
              </p>
            </div>
          </div>
        </div>

        {/* Route Visual */}
        <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 px-6 py-7 sm:px-8">
          <div className="flex items-center gap-5">

            {/* Pickup */}
            <div className="shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full border-2 border-orange-500 bg-white" />

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Pickup
                  </p>

                  <p className="mt-1 font-semibold text-zinc-950">
                    {route.from.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Route Line */}
            <div className="relative flex-1">
              <div className="h-px w-full bg-zinc-300" />

              <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm">
                <Route className="h-3.5 w-3.5 text-orange-500" />
              </div>
            </div>

            {/* Destination */}
            <div className="shrink-0 text-right">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Destination
                  </p>

                  <p className="mt-1 font-semibold text-zinc-950">
                    {route.to.name}
                  </p>
                </div>

                <div className="h-3 w-3 rounded-full bg-orange-500" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}