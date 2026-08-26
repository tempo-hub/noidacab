import Link from "next/link";
import {
  Car,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";

type AboutSectionProps = {
  route: RouteData;
};

export default function AboutSection({
  route,
}: AboutSectionProps) {
  const routeName = `${route.from.name} to ${route.to.name}`;

  const highlights = [
    {
      icon: MapPin,
      title: "Flexible Pickup",
      description: `Pickup is available from residential, commercial and business locations across ${route.from.name}.`,
    },
    {
      icon: Car,
      title: "Multiple Cab Options",
      description:
        "Choose from hatchbacks, sedans, SUVs and larger vehicles based on your group size.",
    },
    {
      icon: Clock3,
      title: "Convenient Travel",
      description: `Book your ${routeName.toLowerCase()} according to your preferred pickup date and travel time.`,
    },
    {
      icon: ShieldCheck,
      title: "Comfortable Journey",
      description:
        "Travel in a private cab with a vehicle selected according to your requirements.",
    },
  ];

  return (
    <section className="border-b border-gray-300 bg-white/95 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          About {routeName} Taxi Service
        </h2>

        {/* Content */}
        <div className="mt-5 max-w-5xl space-y-4 text-base leading-7 text-slate-600">

          <p>
            Our {routeName.toLowerCase()} cab service gives
            you a fixed, upfront fare before you step into
            the car, so you know exactly what you&apos;re
            paying and why. You can choose from
            hatchbacks, sedans, SUVs, and larger vehicles
            depending on your group size and luggage.
          </p>

          <p>
            Need a taxi from {route.from.name} to{" "}
            {route.to.name} for a single drop, or a round
            trip cab that waits and brings you back home?
            Both options are available. We can also handle
            direct airport and railway station pickup and
            drop where applicable.
          </p>

          <p>
            Our drivers are familiar with routes between{" "}
            {route.from.name} and {route.to.name}, helping
            make your journey more convenient even when
            traffic conditions change.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Internal Links */}
        <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50/50 p-5 sm:p-6">

          <h3 className="text-lg font-semibold text-slate-900">
            Explore {routeName} Taxi Options
          </h3>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">

            {/* Main Route */}
            <Link
              href={`/${route.slug}`}
              className="font-medium text-amber-600 hover:underline"
            >
              {routeName} Taxi
            </Link>

            {/* Route Distance */}
            <span className="font-medium text-slate-500">
              {route.distance}
            </span>

            {/* Route Duration */}
            <span className="font-medium text-slate-500">
              {route.duration}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}