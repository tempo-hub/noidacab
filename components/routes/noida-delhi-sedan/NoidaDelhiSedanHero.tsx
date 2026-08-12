"use client";

import Image from "next/image";
import {
  ArrowLeftRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";

export default function NoidaDelhiSedanHero() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden py-22"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/sedanbg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 " />

        {/* Optional dark gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/90 via-amber-500/75 to-amber-500/60" />
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-4 py-2 text-xs font-bold text-slate-900 backdrop-blur-sm sm:text-sm">
              <CarFront size={16} />
              NOIDA TO DELHI SEDAN TAXI
            </div>

            {/* Heading */}
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Noida to Delhi
              <span className="block text-slate-800">
                Sedan Taxi
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-800 sm:text-lg">
              Book a comfortable private sedan from Noida to Delhi.
              Choose from popular cars such as Dzire, Etios and Amaze
              for convenient one-way travel.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              <HeroFeature
                icon={<CarFront size={17} />}
                text="AC Sedan"
              />

              <HeroFeature
                icon={<Users size={17} />}
                text="Up to 4 Seats"
              />

              <HeroFeature
                icon={<CheckCircle2 size={17} />}
                text="Private Cab"
              />
            </div>

            {/* Vehicle Preview */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-20 w-32 overflow-hidden rounded-xl border border-black/10 bg-white/50 backdrop-blur-sm">
                <Image
                  src="/sedanbg.webp"
                  alt="Sedan taxi for Noida to Delhi"
                  fill
                  sizes="128px"
                  className="object-contain p-2"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-950">
                  Popular Sedan Options
                </p>

                <p className="mt-1 text-sm text-slate-700">
                  Dzire • Etios • Amaze
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - BOOKING FORM */}
          <div className="lg:pl-6">
            <div className="rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">

              {/* Locations */}
              <div className="space-y-3">

                {/* From */}
                <div className="relative rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    From
                  </p>

                  <p className="mt-1 text-lg font-bold text-slate-900">
                    Noida
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Noida, Uttar Pradesh, India
                  </p>

                  
                </div>

                {/* To */}
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    To
                  </p>

                  <p className="mt-1 text-lg font-bold text-slate-900">
                    Delhi
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Delhi, India
                  </p>
                </div>

              </div>

              {/* Date + Time */}
              <div className="mt-3 grid gap-3 sm:grid-cols-2">

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={17}
                      className="text-blue-600"
                    />

                    <span className="text-xs font-semibold text-slate-500">
                      Pickup Date
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-bold text-slate-900">
                    Select Date
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2">
                    <Clock3
                      size={17}
                      className="text-blue-600"
                    />

                    <span className="text-xs font-semibold text-slate-500">
                      Pickup Time
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-bold text-slate-900">
                    Select Time
                  </p>
                </div>

              </div>

              {/* Search */}
              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-4 text-sm font-extrabold tracking-wide text-white transition hover:bg-orange-600 active:scale-[0.99]"
              >
                SEARCH SEDANS
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HeroFeature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-slate-900 backdrop-blur-sm">
        {icon}
      </span>

      <span>{text}</span>
    </div>
  );
}