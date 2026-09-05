import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  Users,
  Luggage,
  IndianRupee,
} from "lucide-react";
import { vehicles } from "@/data/vehicles";

// import { vehicles } from "@/data/vehicles/vehicle";

export default function TaxiTypes() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
            Our Fleet
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Choose the Right Taxi for Your Journey
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            From economical sedans to premium SUVs and spacious group
            vehicles, choose a taxi that fits your passengers, luggage and
            travel requirements.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {vehicles.slice(0,6).map((vehicle) => (
            <TaxiCard
              key={vehicle.slug}
              vehicle={vehicle}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:flex-row sm:p-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              Need help choosing a taxi?
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Tell us about your trip and we’ll help you choose the right
              vehicle.
            </p>
          </div>

          <a
            href="tel:8377809809"
            className="inline-flex h-11 w-full shrink-0 items-center justify-center rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white transition hover:bg-amber-400 sm:w-auto"
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Taxi Card
--------------------------------- */

function TaxiCard({
  vehicle,
}: {
  vehicle: (typeof vehicles)[number];
}) {
  return (
    <Link
      href={`/${vehicle.slug}${
  vehicle.category === "Tempo Traveller" || vehicle.category === "Urbania" || vehicle.slug === "innova-crysta"
    ? "-in-noida"
    : "-taxi-in-noida"
}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_-22px_rgba(15,23,42,0.25)]"
    >
      {/* Vehicle Image */}
      <div className="relative h-60 overflow-hidden bg-slate-50">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} taxi in Noida`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover p-5 transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
          {vehicle.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Name + Price */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {vehicle.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Available for booking in Noida
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1.5">
            <IndianRupee className="h-3.5 w-3.5 text-amber-600" />

            <span className="text-xs font-bold text-slate-800">
              {vehicle.price.replace("₹", "")}
            </span>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-5 grid grid-cols-2 gap-2">

          {/* Seats */}
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5">
            <Users className="h-4 w-4 shrink-0 text-slate-500" />

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Seats
              </p>

              <p className="text-xs font-semibold text-slate-700">
                {vehicle.seats} Passengers
              </p>
            </div>
          </div>

          {/* Luggage */}
          <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5">
            <Luggage className="h-4 w-4 shrink-0 text-slate-500" />

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Luggage
              </p>

              <p className="text-xs font-semibold text-slate-700">
                {vehicle.luggage} Bags
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Features */}
        <div className="mt-4 flex flex-wrap gap-2">
          {vehicle.airCondition && (
            <Feature label="AC" />
          )}

          {vehicle.gps && (
            <Feature label="GPS" />
          )}

          {vehicle.driverChoice && (
            <Feature label="Driver" />
          )}
        </div>

        {/* Link */}
        <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-700 transition group-hover:text-amber-600">
          View Taxi Details

          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

/* --------------------------------
   Feature
--------------------------------- */

function Feature({
  label,
}: {
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-600">
      <CarFront className="h-3 w-3 text-slate-400" />
      {label}
    </span>
  );
}