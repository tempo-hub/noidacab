import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Plane,
  TrainFront,
} from "lucide-react";

const taxiRoutes = [
  {
    from: "Noida",
    to: "Delhi",
    description:
      "Book a private taxi from Noida to Delhi for business travel, airport transfers and everyday journeys.",
    distance: "25–35 km",
    href: "/route/noida-to-delhi-taxi",
    icon: Building2,
    featured: true,
  },

  {
    from: "Noida",
    to: "Greater Noida",
    description:
      "Comfortable local taxi service between Noida and Greater Noida for daily and business travel.",
    distance: "15–30 km",
    href: "/noida-to-greater-noida-taxi",
    icon: Building2,
  },

  {
    from: "Noida",
    to: "Ghaziabad",
    description:
      "Book a convenient cab from Noida to Ghaziabad for local and intercity travel.",
    distance: "20–30 km",
    href: "/noida-to-ghaziabad-taxi",
    icon: Building2,
  },

  {
    from: "Noida",
    to: "Gurgaon",
    description:
      "Travel comfortably from Noida to Gurgaon with a private cab for work and business trips.",
    distance: "45–55 km",
    href: "/noida-to-gurgaon-taxi",
    icon: Building2,
  },

  {
    from: "Noida",
    to: "Delhi Airport",
    description:
      "Pre-book a taxi from Noida to Delhi Airport for convenient pickup and drop service.",
    distance: "30–40 km",
    href: "/noida-to-delhi-airport-taxi",
    icon: Plane,
  },

  {
    from: "Noida",
    to: "New Delhi Railway Station",
    description:
      "Book a private cab from Noida to New Delhi Railway Station with convenient pickup.",
    distance: "25–35 km",
    href: "/noida-to-new-delhi-railway-station-taxi",
    icon: TrainFront,
  },
];

export default function PopularTaxiRoutes() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
              <MapPin className="h-3.5 w-3.5" />
              Popular Taxi Routes
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Taxi from Noida to Nearby Cities
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600">
              Book a private taxi from Noida to Delhi and other nearby
              destinations. Choose your route below to view route-specific
              fare, distance, travel information and booking options.
            </p>
          </div>

          <Link
            href="/taxi-routes"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-amber-700 transition hover:text-amber-800 sm:inline-flex"
          >
            View All Routes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Routes */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {taxiRoutes.map((route) => {
            const Icon = route.icon;

            return (
              <Link
                key={route.href}
                href={route.href}
                className={`group relative overflow-hidden rounded-2xl border bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  route.featured
                    ? "border-amber-200 ring-1 ring-amber-100"
                    : "border-slate-200"
                }`}
              >
                {/* Featured Badge */}
                {route.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">
                    Popular
                  </span>
                )}

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Route */}
                <div className="mt-5 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>{route.from}</span>

                  <ArrowRight className="h-4 w-4 text-amber-500 transition group-hover:translate-x-1" />

                  <span>{route.to}</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {route.description}
                </p>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-medium text-slate-500">
                    Approx. {route.distance}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700">
                    View Route
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile All Routes */}
        <div className="mt-6 sm:hidden">
          <Link
            href="/taxi-routes"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800"
          >
            View All Taxi Routes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}