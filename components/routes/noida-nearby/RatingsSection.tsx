"use client";

import {
  Clock3,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";

type RatingsSectionProps = {
  route: RouteData;
};

export default function RatingsSection({
  route,
}: RatingsSectionProps) {
  const routeName = `${route.from.name} to ${route.to.name}`;

  const servicePoints = [
    {
      icon: Clock3,
      title: "On-Time Pickups",
      description: `Drivers arrive on schedule so your ${routeName} journey starts without unnecessary waiting.`,
    },
    {
      icon: ShieldCheck,
      title: "Trusted Drivers",
      description:
        "Travel with experienced and verified drivers focused on a safe, comfortable journey.",
    },
    {
      icon: Sparkles,
      title: "Clean & Comfortable",
      description:
        "Well-maintained vehicles with a comfortable interior for short and long-distance rides.",
    },
  ];

  return (
    <section className="border-b border-gray-300 bg-white/95 py-6 sm:py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Travellers Say About{" "}
            {routeName} Cabs on NoidaCabs
          </h2>
        </div>

        {/* Main Experience Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">

          {/* Top Trust Area */}
          <div className="grid lg:grid-cols-[280px_1fr]">

            {/* Rating */}
            <div className="relative overflow-hidden bg-slate-900 p-7 text-white sm:p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />

              <div className="relative">

                <div className="flex items-center gap-2">
                  <Star
                    size={20}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="text-sm font-medium text-slate-300">
                    Rider Rating
                  </span>
                </div>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight">
                    4.3
                  </span>

                  <span className="mb-1 text-sm text-slate-400">
                    / 5
                  </span>
                </div>

                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        className="fill-amber-400 text-amber-400"
                      />
                    )
                  )}
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-400">
                  Consistently rated for dependable
                  service, comfortable vehicles and
                  professional drivers.
                </p>
              </div>
            </div>

            {/* Service Points */}
            <div className="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {servicePoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group p-6 transition hover:bg-amber-50/40 sm:p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-100">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="border-t border-slate-100 bg-gradient-to-r from-amber-50/70 via-white to-white px-6 py-7 sm:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <ThumbsUp
                    size={19}
                    fill="currentColor"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Built around everyday riders
                  </p>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                    Whether you&apos;re heading to{" "}
                    {route.to.name} for work, the
                    airport, or a day out, our focus
                    is on making your journey
                    comfortable from pickup to
                    drop-off.
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-sm font-semibold text-amber-600">
                {route.from.name} → {route.to.name}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}