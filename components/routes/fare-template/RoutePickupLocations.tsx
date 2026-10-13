import Link from "next/link";
import {
  MapPin,
  Route as RouteIcon,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { masterRoutes } from "@/data/masterRoutes";
import type { RouteData } from "@/data/routes/taxiroutes";

export default function RoutePickupLocations({
  route,
}: {
  route: RouteData;
}) {
  const normalizeCity = (city: string) =>
    city.trim().toLowerCase();

  const currentFrom = normalizeCity(route.from.name);
  const currentTo = normalizeCity(route.to.name);

  // Get routes connected to the current pickup city.
  const relatedRoutes = masterRoutes.filter(
    (item) =>
      normalizeCity(item.from) === currentFrom &&
      normalizeCity(item.to) !== currentTo,
  );

  // Remove duplicate destination names.
  const uniqueRoutes = Array.from(
    new Map(
      relatedRoutes.map((item) => [
        normalizeCity(item.to),
        item,
      ]),
    ).values(),
  ).slice(0, 6);

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .trim()
      .replace(/^route[-_ ]+/, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} />
            Popular Routes
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Popular Routes from {route.from.name}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore available cab routes from {route.from.name} to
            popular destinations, with route distance and estimated
            travel time.
          </p>
        </div>

        {uniqueRoutes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uniqueRoutes.map((item) => {
              const href = `/route/${slugify(item.from)}-to-${slugify(
                item.to,
              )}-taxi-fare`;

              return (
                <Link
                  key={`${item.from}-${item.to}`}
                  href={href}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#FFFDF5] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                        <MapPin size={22} />
                      </div>

                      <span className="rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-800">
                        {item.distance} km
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                      {item.from} to {item.to} Taxi
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                      <RouteIcon size={15} className="text-amber-600" />
                      <span>{item.duration}</span>
                    </div>

                    {item.highway && (
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        Via {item.highway}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:underline">
                    <span>Explore Route</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-sm text-slate-500">
            No additional routes are currently available from{" "}
            {route.from.name}.
          </p>
        )}

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
            Route availability, distance, and travel time are based on
            the routes configured in the master route registry.
          </p>
        </div>
      </div>
    </section>
  );
}