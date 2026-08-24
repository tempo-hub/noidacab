import {
  ArrowRight,
  CarFront,
  MapPin,
  Navigation,
  ShieldCheck,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: Vehicle;
};

export function JourneyInfo({
  location,
  vehicle,
}: Props) {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <Navigation className="h-4 w-4" />
            LOCAL CAB SERVICE
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {vehicle.name} Cab in {location.name}
          </h2>

          <p className="mt-2 text-lg font-semibold text-amber-600 sm:text-xl">
            Comfortable Local Travel
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Travel comfortably in a {vehicle.name} from{" "}
            {location.name} with a professional driver,
            convenient pickup and reliable cab service.
          </p>

        </div>

        {/* Journey Card */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-7">

            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                <Navigation className="h-4 w-4 text-amber-600" />
              </div>

              <span className="text-sm font-bold text-slate-900">
                Your Local Journey
              </span>

            </div>

            <span className="hidden text-xs font-medium text-slate-400 sm:block">
              Comfortable & reliable travel
            </span>

          </div>

          {/* Location / Vehicle */}
          <div className="grid md:grid-cols-[1fr_150px_1fr] md:items-center">

            {/* Location */}
            <div className="p-6 sm:p-8">

              <div className="flex items-center gap-4">

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100">

                  <MapPin className="h-6 w-6 text-amber-600" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-amber-400" />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Service Location
                  </p>

                  <h3 className="mt-1 truncate text-lg font-bold text-slate-950 sm:text-xl">
                    {location.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Pickup available
                  </p>

                </div>

              </div>

            </div>

            {/* Connector */}
            <div className="flex items-center justify-center border-y border-slate-100 bg-slate-50/50 px-5 py-5 md:border-x md:border-y-0 md:py-8">

              <div className="flex w-full items-center gap-2">

                <span className="h-px flex-1 bg-slate-200" />

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 shadow-sm">

                  <ArrowRight
                    className="h-4 w-4 text-slate-950"
                    strokeWidth={2.5}
                  />

                </div>

                <span className="h-px flex-1 bg-slate-200" />

              </div>

            </div>

            {/* Vehicle */}
            <div className="p-6 sm:p-8">

              <div className="flex items-center gap-4">

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100">

                  <CarFront className="h-6 w-6 text-slate-700" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-slate-400" />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Selected Vehicle
                  </p>

                  <h3 className="mt-1 truncate text-lg font-bold text-slate-950 sm:text-xl">
                    {vehicle.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Comfortable cab
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Vehicle Strip */}
          <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-4 sm:px-7">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <CarFront className="h-4 w-4 text-amber-600" />
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Booking Location
                </p>

                <p className="text-sm font-bold text-slate-900">
                  {location.name} · {vehicle.name}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Trust Features */}
        <div className="mx-auto mt-6 grid max-w-5xl gap-3 sm:grid-cols-3">

          {[
            "Professional driver",
            `Comfortable ${vehicle.name}`,
            "Easy booking",
          ].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-3.5
                shadow-sm
              "
            >

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50">

                <ShieldCheck className="h-4 w-4 text-amber-600" />

              </div>

              <span className="text-sm font-semibold text-slate-700">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}