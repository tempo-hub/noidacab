
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Navigation,
} from "lucide-react";

import { noidaLocalities } from "@/data/routes/noida";

const INITIAL_LOCATIONS = 12;

export default function SedanTaxiNoidaLocations() {
  const [showAll, setShowAll] = useState(false);

  const locations = useMemo(() => {
    return showAll
      ? noidaLocalities
      : noidaLocalities.slice(0, INITIAL_LOCATIONS);
  }, [showAll]);

  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200">
              <MapPin className="h-4 w-4" />
              Pickup Locations
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Sedan Taxi Service Across Noida
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Book a sedan taxi from major sectors, residential areas,
              business hubs, airports and nearby locations across Noida and
              Greater Noida.
            </p>
          </div>

          {/* Location Count */}
          <div className="shrink-0 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-2xl font-bold text-slate-900">
              {noidaLocalities.length}+
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Pickup locations
            </p>
          </div>
        </div>

        {/* Location Grid */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/noida/${location.slug}/sedan-taxi`}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                  <MapPin className="h-4 w-4 text-amber-600" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    Sedan Taxi in {location.name}
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Pickup available
                  </p>
                </div>
              </div>

              <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-600" />
            </Link>
          ))}
        </div>

        {/* Show More */}
        {noidaLocalities.length > INITIAL_LOCATIONS && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-amber-400 hover:text-amber-700"
            >
              {showAll
                ? "Show Fewer Locations"
                : `View All ${noidaLocalities.length} Locations`}

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}

        {/* Location Information */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950">
                <Navigation className="h-5 w-5 text-amber-400" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Easy Pickup From Your Location
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Whether you are in a residential sector, commercial area,
                  airport or a nearby Noida locality, you can request a sedan
                  taxi pickup from your preferred location.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Need Pickup From Another Location?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              If your pickup point isn't listed above, contact us with your
              location and travel requirement. We can confirm availability and
              the applicable fare.
            </p>

            <a
              href="tel:8377809809"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800"
            >
              Call 8377809809
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

