
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Route } from "lucide-react";
import { routes } from "@/data/routes/taxiroutes";

interface RelatedRoutesProps {
  currentSlug?: string;
  limit?: number;
}

export default function RelatedRoutes({
  currentSlug,
  limit = 8,
}: RelatedRoutesProps) {
  // Remove the current route
  const availableRoutes = routes.filter(
    (route) => route.slug !== currentSlug
  );

  // Remove duplicate from → to combinations
  const uniqueRoutes = Array.from(
    new Map(
      availableRoutes.map((route) => [
        `${route.from.slug}-${route.to.slug}`,
        route,
      ])
    ).values()
  );

  // Popular routes first
  const relatedRoutes = uniqueRoutes
    .sort((a, b) => Number(b.popular) - Number(a.popular))
    .slice(0, limit);

  if (!relatedRoutes.length) {
    return null;
  }

  return (
    <section className="bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Popular Taxi Routes
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Explore Popular Taxi Routes
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Explore popular one-way taxi routes, distances and travel times
            between major cities.
          </p>
        </div>

        {/* Routes */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedRoutes.map((route) => (
            <Link
              key={route.slug}
              href={`/${route.slug}-taxi-fare`}
              className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                  <MapPin size={20} />
                </div>

                <ArrowRight
                  size={18}
                  className="mt-2 text-gray-400 transition group-hover:translate-x-1 group-hover:text-amber-500"
                />
              </div>

              {/* Route Name */}
              <h3 className="mt-4 text-lg font-bold leading-6 text-gray-900">
                {route.from.name} to {route.to.name} Taxi
              </h3>

              {/* Distance + Time */}
              <div className="mt-4 space-y-2 text-sm text-gray-600">

                <div className="flex items-center gap-2">
                  <Route
                    size={15}
                    className="shrink-0 text-amber-500"
                  />
                  <span>
                    {route.distance}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3
                    size={15}
                    className="shrink-0 text-amber-500"
                  />
                  <span>
                    {route.duration}
                  </span>
                </div>

              </div>

              {/* Description */}
              {route.description && (
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                  {route.description}
                </p>
              )}

              {/* Link */}
              <div className="mt-4 text-sm font-semibold text-amber-600">
                View Route →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

