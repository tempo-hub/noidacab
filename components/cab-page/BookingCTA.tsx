"use client";

import {
  ArrowRight,
  Car,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

type Props = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: {
    name: string;
  };

  url?: string;
};

export function BookingCTA({
  location,
  vehicle,
  url,
}: Props) {
  const handleBooking = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <section className="relative overflow-hidden bg-amber-400 py-12 sm:py-16 lg:py-20">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* CTA Card */}
        <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">

          <div className="p-6 sm:p-8 lg:p-10">

            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-400">
                <ShieldCheck className="h-4 w-4" />
                READY TO TRAVEL?
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Book Your{" "}
                <span className="text-amber-400">
                  {vehicle.name}
                </span>{" "}
                Cab Today
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Book a comfortable{" "}
                <span className="font-semibold text-white">
                  {vehicle.name}
                </span>{" "}
                cab from{" "}
                <span className="font-semibold text-white">
                  {location.name}
                </span>{" "}
                with a professional driver and a comfortable vehicle.
              </p>

            </div>

            {/* Booking Information */}
            <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">

              <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">

                {/* Pickup */}
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Pickup Location
                    </p>

                    <p className="truncate text-sm font-bold text-white sm:text-base">
                      {location.name}
                    </p>

                  </div>

                </div>

                {/* Vehicle */}
                <div className="flex items-center justify-center gap-2 sm:flex-col sm:gap-1">

                  <Car className="h-5 w-5 text-amber-400" />

                  <span className="text-xs font-semibold text-slate-400">
                    {vehicle.name}
                  </span>

                </div>

                {/* Destination */}
                <div className="flex items-center gap-3 sm:justify-end">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Destination
                    </p>

                    <p className="truncate text-sm font-bold text-white sm:text-base">
                      Select Destination
                    </p>

                  </div>

                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center">

              <button
                type="button"
                onClick={handleBooking}
                disabled={!url}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  bg-amber-400
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-lg
                  shadow-black/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-amber-300
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:w-auto
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                Book {vehicle.name} Cab

                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </div>

            {/* Trust Points */}
            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Professional Driver
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Clean & Comfortable
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 sm:text-sm">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                Easy Booking
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}