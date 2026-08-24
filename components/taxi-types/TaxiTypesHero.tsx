import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { vehicles } from "@/data/vehicles";



export default function TaxiTypesHero() {
  const taxiCategories = ["Hatchback", "Sedan", "SUV"] as const;

const featuredVehicles = taxiCategories
  .map((category) =>
    vehicles.find(
      (vehicle) => vehicle.category === category
    )
  )
  .filter(
    (vehicle): vehicle is (typeof vehicles)[number] =>
      Boolean(vehicle)
  );
  return (
<section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-18 sm:py-16 lg:py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
     
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero3.webp')",
        }}
      /> */}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-300/95 via-amber-400/85 to-amber-500/70" /> */}

      {/* Decorative Blur */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-yellow-300/30 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/20 blur-3xl" />
      </div> */}

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-500/15 px-4 py-2 text-sm font-medium text-amber-950 backdrop-blur-sm">
              <CarFront className="h-4 w-4" />

              Taxi Services in Noida
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              Taxi Types for Every
              <span className="block text-amber-900">
                Journey in Noida
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-black sm:text-lg">
              Choose the right taxi based on your group size, luggage,
              destination and travel requirements. From economical
              hatchbacks and comfortable sedans to SUVs, Innova Crysta
              and Tempo Travellers, find a cab that fits your journey.
            </p>

            {/* Trust Points */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <TrustPoint text="AC Vehicles" />

              <TrustPoint text="Professional Drivers" />

              <TrustPoint text="Multiple Vehicle Options" />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://wa.me/918448445504"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-400"
              >
                Book a Taxi

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/route/noida-to-delhi-taxi"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/20 px-6 py-3.5 text-sm font-semibold text-black backdrop-blur-md transition hover:bg-white/30"
              >
                Noida to Delhi Taxi
              </Link>
            </div>
          </div>

          {/* =====================================================
              RIGHT VEHICLE PRICING
          ===================================================== */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-4 shadow-2xl shadow-amber-900/20 backdrop-blur-xl sm:p-5">
              {/* Header */}
              <div className="flex items-center justify-between px-2 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    Our Fleet
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    Taxi Fare Per KM
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <CarFront className="h-5 w-5" />
                </div>
              </div>

              {/* Vehicle List */}
              <div className="space-y-3">
                {featuredVehicles.map((vehicle) => (
                  <Link
                    key={vehicle.slug}
                    href={`/taxi/${vehicle.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
                  >
                    {/* Vehicle Image */}
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-50">
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} taxi in Noida`}
                        fill
                        sizes="96px"
                        className="object-contain p-1 transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Vehicle Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-sm font-bold text-slate-950">
                          {vehicle.name}
                        </h3>

                        <span className="hidden rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600 sm:inline-block">
                          {vehicle.category}
                        </span>
                      </div>

                      <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="h-3.5 w-3.5 text-amber-500" />

                        Noida Taxi
                      </div>
                    </div>

                    {/* Price */}
                    <div className="shrink-0 text-right">
                      <p className="text-lg font-bold text-slate-950">
                        {vehicle.price}
                      </p>

                      <p className="text-[10px] text-slate-500">
                        per km
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
      <CheckCircle2 className="h-4 w-4 text-green-700" />

      {text}
    </div>
  );
}