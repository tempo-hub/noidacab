"use client";

import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function SedanTaxiNoidaHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-18 sm:py-16 lg:py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-900 bg-amber-800 px-4 py-2 text-sm font-medium text-amber-300">
              <CarFront className="h-4 w-4" />
              Sedan Taxi Service in Noida
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Comfortable{" "}
              <span className="text-amber-900">Sedan Taxi</span> in Noida
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-800 sm:text-lg">
              Book a reliable sedan taxi in Noida for local travel, airport
              transfers, business trips and outstation journeys. Choose from
              comfortable Dzire, Etios and Amaze cabs with professional
              drivers.
            </p>

            {/* Trust Points */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-900" />
                Clean & comfortable sedans
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-900" />
                Verified professional drivers
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-900" />
                Local & outstation trips
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-900" />
                Transparent pricing
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#book-sedan"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Book Sedan Taxi
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:8377809809"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call 8377809809
              </a>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="rounded-3xl border border-white bg-white p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Noida Sedan Service
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Ride comfortably across Noida
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10">
                  <CarFront className="h-5 w-5 text-amber-400" />
                </div>
              </div>

              {/* Route */}
              <div className="mt-6 rounded-2xl border border-white/90 bg-slate-200/70 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Pickup</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Anywhere in Noida
                    </p>
                  </div>
                </div>

                <div className="ml-5 my-2 h-6 border-l border-dashed border-slate-700" />

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/10">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Destination</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Local / Airport / Outstation
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Stats */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <ShieldCheck className="mx-auto h-5 w-5 text-amber-900" />
                  <p className="mt-1 text-xs font-medium text-slate-800">
                    Verified
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <Star className="mx-auto h-5 w-5 text-amber-900" />
                  <p className="mt-1 text-xs font-medium text-slate-800">
                    Quality
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3 text-center">
                  <CarFront className="mx-auto h-5 w-5 text-amber-900" />
                  <p className="mt-1 text-xs font-medium text-slate-800">
                    Sedan
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-200/10">
                  <ShieldCheck className="h-5 w-5 text-amber-300" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Trusted Taxi</p>
                  <p className="text-sm font-semibold text-slate-200">
                    Reliable Noida Rides
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

