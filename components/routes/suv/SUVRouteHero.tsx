import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Route,
} from "lucide-react";

import type { ParsedRoute } from "@/lib/parse-route";

type Props = {
  route: ParsedRoute;
};

export function SUVRouteHero({ route }: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-orange-50/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link
            href="/"
            className="transition hover:text-orange-600"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/suv"
            className="transition hover:text-orange-600"
          >
            SUV Taxi
          </Link>

          <span>/</span>

          <span className="text-slate-700">
            {route.fromName} to {route.toName}
          </span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              <CarFront className="h-4 w-4" />
              SUV Taxi Service
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {route.fromName} to {route.toName}
              <span className="block text-orange-500">
                SUV Taxi
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Book a comfortable SUV taxi from {route.fromName} to{" "}
              {route.toName}. Choose from spacious Ertiga and Innova
              vehicles for family travel, airport transfers and
              outstation journeys.
            </p>

            {/* Route stats */}
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              <RouteStat
                icon={<Route />}
                label="Distance"
                value={route.distance}
              />

              <RouteStat
                icon={<Clock3 />}
                label="Travel Time"
                value={route.travelTime}
              />

              <RouteStat
                icon={<CarFront />}
                label="Vehicles"
                value="Ertiga & Innova"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#suv-vehicles"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
              >
                View SUV Options
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#route-info"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Route Details
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <TrustPoint text="AC Vehicles" />
              <TrustPoint text="Professional Drivers" />
              <TrustPoint text="SUV Options" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/60">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Your Route
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {route.fromName} → {route.toName}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>

                <div className="my-6 h-px bg-white/10" />

                <div className="space-y-4">
                  <HeroDetail
                    label="Distance"
                    value={route.distance}
                  />

                  <HeroDetail
                    label="Estimated Travel"
                    value={route.travelTime}
                  />

                  <HeroDetail
                    label="Available SUVs"
                    value="Ertiga & Innova"
                  />
                </div>

                <div className="mt-7 rounded-2xl bg-white/10 p-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />

                    <p className="text-sm leading-6 text-slate-300">
                      Spacious SUV taxis are a practical choice for
                      families, groups and passengers travelling with
                      extra luggage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-2 text-orange-500">
        {icon}

        <span className="text-xs font-medium text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function TrustPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <CheckCircle2 className="h-4 w-4 text-green-600" />
      {text}
    </div>
  );
}

function HeroDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-slate-400">
        {label}
      </span>

      <span className="text-sm font-semibold text-white">
        {value}
      </span>
    </div>
  );
}