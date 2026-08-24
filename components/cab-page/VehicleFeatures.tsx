import {
  CarFront,
  Check,
  Luggage,
  MapPinned,
  Snowflake,
  UserRound,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  vehicle: Vehicle;
  highlights?: string[];
};

export function VehicleFeatures({
  vehicle,
  highlights = [],
}: Props) {
  const features = [
    {
      label: "Passengers",
      value: `${vehicle.seats} Seats`,
      icon: UserRound,
      show: true,
    },
    {
      label: "Doors",
      value: `${vehicle.doors} Doors`,
      icon: CarFront,
      show: true,
    },
    {
      label: "Luggage",
      value: `${vehicle.luggage} Bags`,
      icon: Luggage,
      show: true,
    },
    {
      label: "Air Condition",
      value: "AC",
      icon: Snowflake,
      show: vehicle.airCondition,
    },
    {
      label: "GPS",
      value: "Available",
      icon: MapPinned,
      show: vehicle.gps,
    },
    {
      label: "Driver",
      value: "Professional",
      icon: UserRound,
      show: vehicle.driverChoice,
    },
  ];

  const visibleFeatures = features.filter((feature) => feature.show);

  return (
    <section className="bg-white/95 border-b border-gray-300 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <CarFront className="h-4 w-4" />
            VEHICLE DETAILS
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {vehicle.name} Features
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Everything you need for a comfortable and convenient journey with
            the {vehicle.name}.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className={`mx-auto mt-10 grid max-w-6xl gap-3 sm:gap-4 ${
            visibleFeatures.length <= 4
              ? "grid-cols-2 lg:grid-cols-4"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
          }`}
        >
          {visibleFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-300
                  hover:shadow-lg
                  sm:p-5
                "
              >
                {/* Amber hover accent */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-0.5
                    w-0
                    bg-amber-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100
                    text-slate-700
                    transition-all
                    duration-300
                    group-hover:bg-amber-100
                    group-hover:text-amber-600
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                    {feature.label}
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-900 sm:text-base">
                    {feature.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50/60 sm:mt-10">
            <div className="border-b border-amber-200 px-5 py-5 sm:px-7">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-950 sm:text-lg">
                    Why choose the {vehicle.name}?
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    Built for comfortable, reliable and hassle-free travel.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-amber-200 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-white
                    px-5
                    py-4
                    transition-colors
                    hover:bg-amber-50
                    sm:px-6
                  "
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </div>

                  <span className="text-sm font-medium leading-5 text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}