"use client";

import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  Clock3,
  MapPin,
} from "lucide-react";

import { noidaRoutes } from "@/data/routes/noidaRoutes";

export default function PopularNoidaRoutes() {
  const routes = Object.values(noidaRoutes);

  return (
    <section className="border-b border-gray-300 bg-white/95 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
              Popular Taxi Routes
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Popular Routes From Noida
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Explore frequently booked taxi routes from Noida with
              clear fares, comfortable vehicles and reliable pickup service.
            </p>
          </div>
        </div>

        {/* Route Grid */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {routes.slice(0, 8).map((route, index) => {
            const href = `/${route.slug}-taxi`;

            const calculatedPrice = (route.distance * 1.5 * 10) + 500;

            const price = `₹${calculatedPrice.toLocaleString("en-IN")}`;

            return (
              <Link
                key={route.slug}
                href={href}
                className={`group relative overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0
                    ? "border-amber-300 shadow-[0_10px_35px_rgba(245,158,11,0.12)]"
                    : "border-slate-200 hover:border-amber-200"
                  }`}
              >
                {/* Top Accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${index === 0
                      ? "bg-amber-400"
                      : "bg-amber-200 group-hover:bg-amber-400"
                    }`}
                />

                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                    <CarFront size={21} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    {/* Route */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2 text-lg font-bold text-slate-950">
                        <span>{route.from.name}</span>

                        <span className="text-amber-500">
                          →
                        </span>

                        <span>{route.to.name}</span>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition group-hover:bg-amber-50 group-hover:text-amber-600">
                        <ArrowRight size={17} />
                      </div>
                    </div>

                    {/* Distance / Time */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin
                          size={15}
                          className="text-amber-500"
                        />

                        {route.distance} km
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock3
                          size={15}
                          className="text-amber-500"
                        />

                        {route.travelTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 border-t border-slate-100" />

                {/* Price */}
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Starting from
                </p>

                <div className="mt-1 flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-slate-950">
                    {price}
                  </span>

                  <span className="text-sm font-semibold text-amber-600 opacity-0 transition group-hover:opacity-100">
                    Book →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}