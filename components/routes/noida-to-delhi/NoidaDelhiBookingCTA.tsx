// src/components/routes/noida-delhi/NoidaDelhiBookingCTA.tsx

import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  ShieldCheck,
} from "lucide-react";

export default function NoidaDelhiBookingCTA() {
  return (
    <section className="bg-white px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-[#ffb300] px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-16">

          {/* Decorative background */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative mx-auto max-w-3xl">

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
              <CarFront size={28} />
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Ready to Book Your Noida to Delhi Taxi?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-amber-50 sm:text-base">
              Choose your pickup location, travel time and preferred
              vehicle to book a comfortable taxi from Noida to Delhi.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="tel:+918377809809"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-amber-600 shadow-sm transition hover:bg-amber-50 sm:w-auto"
              >
                Book a Taxi
                <ArrowRight size={17} />
              </Link>

              {/* <Link
                href="/route/noida-to-delhi-taxi-fare"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto"
              >
                Check Taxi Fare
              </Link> */}

            </div>

            {/* Trust Points */}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 text-sm text-amber-50 sm:flex-row sm:gap-6">

              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={17} />
                Comfortable vehicles
              </span>

              <span className="hidden h-4 w-px bg-white sm:block" />

              <span className="inline-flex items-center gap-2">
                <CarFront size={17} />
                Multiple vehicle options
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}