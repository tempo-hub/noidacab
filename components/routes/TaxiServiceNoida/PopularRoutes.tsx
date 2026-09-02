import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Route,
} from "lucide-react";

const popularRoutes = [
  {
    origin: "Noida",
    destination: "Delhi",
    distance: "Approx. 25 km",
    time: "45–60 min",
    href: "/noida-to-delhi-taxi",
  },
  {
    origin: "Noida",
    destination: "Agra",
    distance: "Approx. 200 km",
    time: "3–4 hrs",
    href: "/noida-to-agra-taxi",
  },
  {
    origin: "Noida",
    destination: "Jaipur",
    distance: "Approx. 280 km",
    time: "5–6 hrs",
    href: "/noida-to-jaipur-taxi",
  },
  {
    origin: "Noida",
    destination: "Haridwar",
    distance: "Approx. 220 km",
    time: "4–5 hrs",
    href: "/noida-to-haridwar-taxi",
  },
  {
    origin: "Noida",
    destination: "Mathura",
    distance: "Approx. 170 km",
    time: "2.5–3 hrs",
    href: "/noida-to-mathura-taxi",
  },
  {
    origin: "Noida",
    destination: "Vrindavan",
    distance: "Approx. 180 km",
    time: "3–4 hrs",
    href: "/noida-to-vrindavan-taxi",
  },
  {
    origin: "Noida",
    destination: "Lucknow",
    distance: "Approx. 500 km",
    time: "8–10 hrs",
    href: "/noida-to-lucknow-taxi",
  },
  {
    origin: "Noida",
    destination: "Meerut",
    distance: "Approx. 70 km",
    time: "1.5–2 hrs",
    href: "/noida-to-meerut-taxi",
  },
];

export default function PopularRoutes() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
              <Route className="h-3.5 w-3.5" />
              Popular Routes
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Popular Taxi Routes from Noida
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Book a private taxi from Noida to popular destinations across
              Delhi NCR and North India. Choose one-way or round-trip travel
              according to your requirements.
            </p>
          </div>

          <Link
            href="/noida/routes"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View All Routes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Routes */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {popularRoutes.map((route) => (
            <RouteCard
              key={route.destination}
              route={route}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <MapPin className="h-5 w-5 text-slate-700" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Looking for a different destination?
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Share your destination and pickup location to check taxi
                options for your journey.
              </p>
            </div>
          </div>

          <a
            href="tel:8377809809"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Ask for a Route
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Route Card
--------------------------------- */

function RouteCard({
  route,
}: {
  route: {
    origin: string;
    destination: string;
    distance: string;
    time: string;
    href: string;
  };
}) {
  return (
    <Link
      href={route.href}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.22)] sm:p-5"
    >
      {/* Route Header */}
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-amber-50">
          <Route className="h-4 w-4 text-slate-700 transition-colors group-hover:text-amber-600" />
        </div>

        <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-amber-600" />
      </div>

      {/* Route */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-700">
          {route.origin}
        </span>

        <div className="h-px flex-1 bg-slate-200" />

        <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />

        <span className="text-sm font-semibold text-slate-900">
          {route.destination}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base font-bold text-slate-900">
        {route.origin} to {route.destination} Taxi
      </h3>

      {/* Details */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-slate-50 px-2.5 py-2">
          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
            Distance
          </p>

          <p className="mt-0.5 text-xs font-semibold text-slate-700">
            {route.distance}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 px-2.5 py-2">
          <p className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
            <Clock3 className="h-3 w-3" />
            Time
          </p>

          <p className="mt-0.5 text-xs font-semibold text-slate-700">
            {route.time}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-semibold text-slate-600 transition-colors group-hover:text-amber-600">
        View Taxi Route
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}