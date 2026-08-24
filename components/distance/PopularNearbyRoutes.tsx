import Link from "next/link";
import {
  ArrowRight,
  MapPinned,
  Route,
} from "lucide-react";

interface NearbyRoute {
  slug: string;
  from: {
    name: string;
    slug: string;
  };
  to: {
    name: string;
    slug: string;
  };
  distance: number;
  travelTime: string;
}

interface PopularNearbyRoutesProps {
  currentSlug: string;
  routes: NearbyRoute[];
}

export default function PopularNearbyRoutes({
  currentSlug,
  routes,
}: PopularNearbyRoutesProps) {
  const nearbyRoutes = routes
    .filter((route) => route.slug !== currentSlug)
    .slice(0, 6);

  if (nearbyRoutes.length === 0) {
    return null;
  }

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Nearby Routes
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Popular Routes from{" "}
              <span className="text-orange-500">
                Noida
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
              Explore other popular destinations from Noida and
              compare distance, travel time and available cab options.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 text-sm font-medium text-zinc-500 md:flex">
            <Route className="h-4 w-4 text-orange-500" />
            More destinations
          </div>
        </div>

        {/* Route Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyRoutes.map((route, index) => {
            const href = `/${route.slug}-distance-travel-time`;

            return (
              <Link
                key={route.slug}
                href={href}
                className="group rounded-3xl border border-zinc-200 bg-zinc-50/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <MapPinned className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-bold tracking-wider text-zinc-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Route */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Popular Destination
                  </p>

                  <h3 className="mt-2 flex items-center gap-2 text-lg font-bold text-zinc-950">
                    {route.from.name}

                    <ArrowRight className="h-4 w-4 text-orange-500" />

                    {route.to.name}
                  </h3>
                </div>

                {/* Stats */}
                <div className="mt-6 flex items-center gap-4 border-t border-zinc-200 pt-5">
                  <div>
                    <p className="text-xs text-zinc-400">
                      Distance
                    </p>

                    <p className="mt-1 text-sm font-semibold text-zinc-900">
                      {route.distance} km
                    </p>
                  </div>

                  <div className="h-8 w-px bg-zinc-200" />

                  <div>
                    <p className="text-xs text-zinc-400">
                      Travel Time
                    </p>

                    <p className="mt-1 text-sm font-semibold text-zinc-900">
                      {route.travelTime}
                    </p>
                  </div>

                  <ArrowRight className="ml-auto h-4 w-4 text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}