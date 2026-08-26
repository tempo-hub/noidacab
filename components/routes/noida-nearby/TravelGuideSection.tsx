import Link from "next/link";
import {
  Clock3,
  MapPin,
  Route,
  TrafficCone,
} from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";

type TravelGuideSectionProps = {
  route: RouteData;
};

export default function TravelGuideSection({
  route,
}: TravelGuideSectionProps) {
  const routeName = `${route.from.name} to ${route.to.name}`;

  const travelFacts = [
    {
      icon: MapPin,
      title: "Distance",
      value: route.distance,
      description: `The actual distance depends on your pickup point in ${route.from.name} and your destination in ${route.to.name}.`,
    },
    {
      icon: Clock3,
      title: "Travel Time",
      value: route.duration,
      description:
        "Journey time can vary depending on traffic, pickup location and your destination.",
    },
    {
      icon: Route,
      title: "Route",
      value: `${route.from.name} → ${route.to.name}`,
      description:
        "Your driver can select the most suitable route based on the pickup and drop location.",
    },
    {
      icon: TrafficCone,
      title: "Traffic",
      value: "Varies by time",
      description:
        "Peak-hour traffic can increase travel time, particularly during busy commuting periods.",
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {routeName} Route, Distance & Travel Time
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Book a one way cab from{" "}
            {route.from.name} to{" "}
            {route.to.name} when you only need a
            single drop, with no return trip included.
            This works well for office commutes,
            airport drops, or a one-time visit where
            you&apos;ll arrange your own way back. You
            pay for the distance covered on that
            single journey, with no return trip
            included.
          </p>
        </div>

        {/* Route */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">

            {/* From */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <MapPin size={25} />
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                {route.from.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Pickup
              </p>
            </div>

            {/* Desktop Route Line */}
            <div className="hidden h-px w-32 bg-slate-300 sm:block lg:w-52" />

            {/* Mobile Route */}
            <div className="flex flex-col items-center sm:hidden">
              <div className="h-10 w-px bg-slate-300" />

              <Route
                size={20}
                className="text-amber-500"
              />

              <div className="h-10 w-px bg-slate-300" />
            </div>

            {/* To */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <MapPin size={25} />
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                {route.to.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Drop-off
              </p>
            </div>
          </div>
        </div>

        {/* Travel Facts */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {travelFacts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={20} />
                </div>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  {fact.title}
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {fact.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {fact.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Travel Information */}
        <div className="mt-7 grid gap-6 lg:grid-cols-2">

          {/* Factors */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              What can affect your travel time?
            </h3>

            <div className="mt-4 space-y-3">
              {[
                "Your exact pickup and drop locations",
                "Traffic during peak commuting hours",
                "Road and weather conditions",
                "Stops requested during the journey",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />

                  <p className="text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Planning */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Planning your {routeName} trip
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              If you have an important appointment,
              flight or train to catch, allow additional
              time for traffic. You can select your
              pickup date and time while booking your
              taxi.
            </p>

            <Link
              href={`/${route.slug.replace(
                "-taxi",
                "-taxi-fare"
              )}`}
              className="mt-5 inline-flex text-sm font-semibold text-amber-600 hover:underline"
            >
              Check {routeName} Taxi Fare →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}