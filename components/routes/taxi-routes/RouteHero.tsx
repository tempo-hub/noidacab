import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

import type { RouteVehicleProps } from "./type";

export default function RouteHero({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-22 sm:py-16 lg:py-22">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-18">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div>
            {/* Trust bar */}
            <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-gray-800">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-600 text-amber-600" />
                4.9 Rating
              </span>

              <span className="text-gray-500">•</span>

              <span>Reliable Cab Service</span>

              <span className="text-gray-500">•</span>

              <span>No Hidden Charges</span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
              {route.fromName} To
              <span className="px-1 text-orange-600">
                {/* <span className="mr-2 inline-block">
                  →
                </span> */}
                {route.toName} Taxi
              </span>
            </h1>

            {/* Subtitle */}
            {/* <div className="mt-5 flex flex-wrap items-center gap-2 text-base font-semibold text-gray-900 sm:text-lg">
              <span>
                {vehicle.name} Taxi in {route.toName}
              </span>

              <span className="text-orange-600">•</span>

              <span className="font-medium text-gray-700">
                {route.fromName} to {route.toName} Cab
              </span>
            </div> */}

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-800 sm:text-lg">
              Book a comfortable {vehicle.name} taxi from{" "}
              {route.fromName} to {route.toName} with a
              professional driver, transparent pricing and
              reliable cab service.
            </p>

            {/* Route information */}
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="rounded-xl bg-white/70 px-4 py-3 backdrop-blur-sm">
                <span className="block text-xs text-gray-600">
                  Distance
                </span>

                <span className="mt-1 block font-bold text-gray-900">
                  {route.distance}
                </span>
              </div>

              <div className="rounded-xl bg-white/70 px-4 py-3 backdrop-blur-sm">
                <span className="block text-xs text-gray-600">
                  Travel Time
                </span>

                <span className="mt-1 block font-bold text-gray-900">
                  {route.travelTime}
                </span>
              </div>

              <div className="rounded-xl bg-white/70 px-4 py-3 backdrop-blur-sm">
                <span className="block text-xs text-gray-600">
                  Starting Fare
                </span>

                <span className="mt-1 block font-bold text-gray-900">
                  {vehicle.price}
                </span>
              </div>
            </div>

            {/* Bottom trust points */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-800">
              <span className="inline-flex items-center gap-2">
                <CarFront className="h-4 w-4 text-orange-600" />
                {vehicle.name} cab
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-600" />
                Available for booking
              </span>

              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-600" />
                Transparent pricing
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT BOOKING CARD
          ===================================================== */}
          <div className="rounded-2xl bg-white p-3 shadow-xl shadow-orange-900/10">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              {/* Location + Vehicle */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Location */}
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                    <CarFront className="h-4 w-4 text-orange-600" />
                  </div>

                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {route.toName}
                  </p>
                </div>

                {/* Vehicle */}
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                    <CarFront className="h-4 w-4 text-orange-600" />
                  </div>

                  <p className="text-xs text-gray-500">
                    Vehicle
                  </p>

                  <p className="mt-1 truncate font-bold text-gray-900">
                    {vehicle.name}
                  </p>
                </div>
              </div>

              {/* Main CTA */}
              <a
                href={`https://wa.me/918377809809?text=${encodeURIComponent(
                  `Hi, I want to book a ${vehicle.name}. Please share the details and fare.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
              >
                <MessageCircle className="h-4 w-4 text-orange-600" />

                Book Now
              </a>

              {/* Divider */}
              <div className="my-4 h-px bg-gray-200" />

              {/* Trust */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-gray-600">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
                  Verified Drivers
                </span>

                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
                  Clean Vehicles
                </span>

                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-orange-600" />
                  Transparent Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}