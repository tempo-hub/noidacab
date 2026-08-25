"use client";

import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  Clock3,
  MapPin,
} from "lucide-react";

const routes = [
  {
    from: "Noida",
    to: "Delhi",
    distance: "25 km",
    time: "1–2 hours",
    price: "₹1,100",
    href: "/taxi",
    featured: true,
  },
  {
    from: "Noida",
    to: "IGI Airport",
    distance: "35 km",
    time: "1–2 hours",
    price: "₹1,200",
    href: "/taxi",
  },
  {
    from: "Noida",
    to: "Greater Noida",
    distance: "30 km",
    time: "1–1.5 hours",
    price: "₹900",
    href: "/taxi",
  },
  {
    from: "Noida",
    to: "Ghaziabad",
    distance: "25 km",
    time: "1–1.5 hours",
    price: "₹850",
    href: "/taxi",
  },
  {
    from: "Noida",
    to: "Gurugram",
    distance: "55 km",
    time: "1.5–2.5 hours",
    price: "₹1,600",
    href: "/taxi",
  },
  {
    from: "Noida",
    to: "Agra",
    distance: "200 km",
    time: "3.5–4.5 hours",
    price: "₹2,800",
    href: "/taxi",
  },
  {
    from: "Noida",
    to: "Haridwar",
    distance: "220 km",
    time: "4–5 hours",
    price: "₹3,000",
    href: "/taxi",
  },
  {
    from: "Noida",
    to: "Jaipur",
    distance: "280 km",
    time: "5–6 hours",
    price: "₹3,600",
    href: "/taxi",
  },
];

export default function PopularNoidaRoutes() {
  return (
    <section className="bg-white/95 py-14 sm:py-16 lg:py-20 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:items-center sm:justify-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
              Popular Taxi Routes
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Popular Routes From Noida
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Explore frequently booked taxi routes from Noida with
              clear fares, comfortable vehicles and reliable pickup service.
            </p>
          </div>

          {/* <Link
            href="/route/noida-to-delhi-taxi"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
          >
            View All Routes

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link> */}
        </div>

        {/* Route Grid */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <div
              key={`${route.from}-${route.to}`}
              className={`group relative overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${route.featured
                ? "border-amber-300 shadow-[0_10px_35px_rgba(245,158,11,0.12)]"
                : "border-slate-200 hover:border-amber-200"
                }`}
            >
              {/* Top Accent */}
              <div
                className={`absolute inset-x-0 top-0 h-1 ${route.featured
                  ? "bg-amber-400"
                  : "bg-amber-200 group-hover:bg-amber-400"
                  }`}
              />
              <div>

              </div>
              <div className="flex items-start gap-4">
                {/* Left Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                  <CarFront size={21} />
                </div>

                {/* Right Content */}
                <div className="flex-1">
                  {/* Route + Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                      <span>{route.from}</span>

                      <span className="text-amber-500">→</span>

                      <span>{route.to}</span>
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
                      {route.distance}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3
                        size={15}
                        className="text-amber-500"
                      />
                      {route.time}
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
                  {route.price}
                </span>
                <Link
                  href="tel:+918448445504">
                  <span className="text-sm font-semibold text-amber-600 opacity-0 transition group-hover:opacity-100">
                    Book →
                  </span></Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}