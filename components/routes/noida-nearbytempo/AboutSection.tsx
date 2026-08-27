import Link from "next/link";
import {
  BusFront,
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
      icon: BusFront,
      title: "Multiple Seater Options",
      description:
        "Choose from different Tempo Traveller seating capacities based on your group size, luggage and travel requirements.",
    },
    {
      icon: Clock3,
      title: "Convenient Travel",
      description: `Book your ${routeName.toLowerCase()} Tempo Traveller according to your preferred pickup date and travel time.`,
    },
    {
      icon: ShieldCheck,
      title: "Comfortable Group Journey",
      description:
        "Travel together in a spacious and private Tempo Traveller designed for families, friends and larger groups.",
    },
  ];

  return (
    <section className="border-b border-gray-300 bg-white/95 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* ================================================================ */}
        {/* Heading */}
        {/* ================================================================ */}

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          About {routeName} Tempo Traveller Service
        </h2>

        {/* ================================================================ */}
        {/* Content */}
        {/* ================================================================ */}

        <div className="mt-5 max-w-5xl space-y-4 text-base leading-7 text-slate-600">

          <p>
            Our {routeName.toLowerCase()} Tempo Traveller
            service is designed for families, friends,
            corporate groups and other travellers who want
            to travel together in one comfortable vehicle.
            You can choose a Tempo Traveller according to
            your group size, seating requirement and luggage.
          </p>

          <p>
            Whether you need a Tempo Traveller for a
            one-way journey from {route.from.name} to{" "}
            {route.to.name}, a round trip, or a trip with
            multiple stops, you can select a suitable vehicle
            and pickup time according to your travel plans.
          </p>

          <p>
            Our drivers are familiar with routes between{" "}
            {route.from.name} and {route.to.name}, helping
            make group travel more convenient while you
            enjoy a spacious and comfortable journey from
            pickup to drop-off.
          </p>

        </div>

        {/* ================================================================ */}
        {/* Highlights */}
        {/* ================================================================ */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >

                {/* Icon */}

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* ================================================================ */}
        {/* Internal Links */}
        {/* ================================================================ */}

        <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50/50 p-5 sm:p-6">

          <h3 className="text-lg font-semibold text-slate-900">
            Explore {routeName} Tempo Traveller Options
          </h3>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">

            {/* Main Route */}

            <Link
              href={`/${route.slug}`}
              className="font-medium text-amber-600 hover:underline"
            >
              {routeName} Tempo Traveller
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