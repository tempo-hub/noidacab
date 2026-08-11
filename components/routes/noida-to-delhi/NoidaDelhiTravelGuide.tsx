// src/components/routes/noida-delhi/NoidaDelhiTravelGuide.tsx

import Link from "next/link";
import {
  Clock3,
  MapPin,
  Route,
  TrafficCone,
} from "lucide-react";

const travelFacts = [
  {
    icon: MapPin,
    title: "Distance",
    value: "Approx. 25–45 km",
    description:
      "The actual distance depends on your pickup point in Noida and your destination in Delhi.",
  },
  {
    icon: Clock3,
    title: "Travel Time",
    value: "Around 1–2 hours",
    description:
      "Journey time can vary depending on traffic, pickup location and your destination.",
  },
  {
    icon: Route,
    title: "Route",
    value: "Noida → Delhi",
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

export default function NoidaDelhiTravelGuide() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Noida to Delhi Route, Distance & Travel Time
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            The distance and travel time between Noida and Delhi depend
            on your exact pickup and drop locations. A private taxi gives
            you the flexibility to travel directly from your location in
            Noida to your destination in Delhi without changing vehicles.
          </p>
        </div>

        {/* Route */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">

            {/* Noida */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <MapPin size={25} />
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                Noida
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Pickup
              </p>
            </div>

            {/* Route Line */}
            <div className="hidden h-px w-32 bg-slate-300 sm:block lg:w-52" />

            <div className="flex flex-col items-center sm:hidden">
              <div className="h-10 w-px bg-slate-300" />
              <Route
                size={20}
                className="text-amber-500"
              />
              <div className="h-10 w-px bg-slate-300" />
            </div>

            {/* Delhi */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <MapPin size={25} />
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                Delhi
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

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Planning your Noida to Delhi trip
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              If you have an important appointment, flight or train to
              catch, allow additional time for traffic. You can select
              your pickup date and time while booking your taxi.
            </p>

            <Link
              href="/noida-to-delhi-taxi-fare"
              className="mt-5 inline-flex text-sm font-semibold text-amber-600 hover:underline"
            >
              Check Noida to Delhi Taxi Fare →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}