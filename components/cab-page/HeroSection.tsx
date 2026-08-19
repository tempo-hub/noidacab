"use client";

import {
  ArrowRight,
  Car,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Route as RouteIcon,
  ShieldCheck,
  Star,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  route: {
    fromName: string;
    toName: string;
    distanceKm: number;
  };

  vehicle: Vehicle;

  tagline?: string;
  fare?: number;
  phoneNumber?: string;
};

export function HeroSection({
  route,
  vehicle,
  tagline,
  fare,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-12 sm:py-16 lg:py-20">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        

        {/* Main Content */}
        {/* Main Hero Content */}
<div className="mt-2 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">

  {/* ================= LEFT ================= */}
  <div className="max-w-3xl">
    {/* Trust Row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-1.5 font-bold text-slate-950">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            4.9 Rating
          </div>

          <span className="text-slate-400">•</span>

          <span className="text-slate-700">
            Reliable Cab Service
          </span>

          <span className="text-slate-400">•</span>

          <span className="text-slate-700">
            No Hidden Charges
          </span>
        </div>

    {/* Route */}
    <h1 className="text-4xl font-black leading-[1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
      {route.fromName}

      <span className="mx-2 inline-flex align-middle text-amber-600 sm:mx-4">
        <ArrowRight className="h-8 w-8 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
      </span>

      <span className="text-amber-600">
        {route.toName}
      </span>
    </h1>

    {/* Vehicle */}
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
        {vehicle.name} Cab
      </h2>

      <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />

      <span className="text-sm font-medium text-slate-700 sm:text-base">
        One Way Cab Booking
      </span>
    </div>

    {/* Short Description */}
    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
      {tagline ||
        `Book a comfortable ${vehicle.name} cab from ${route.fromName} to ${route.toName}. Enjoy a convenient pickup, professional driver and a comfortable journey with transparent pricing.`}
    </p>

    {/* Route Information */}
    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-700">

      <div className="flex items-center gap-2">
        <RouteIcon className="h-4 w-4 text-amber-600" />
        <span>
          <strong className="text-slate-950">
            {route.distanceKm} km
          </strong>{" "}
          distance
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Car className="h-4 w-4 text-amber-600" />
        <span>
          <strong className="text-slate-950">
            {vehicle.name}
          </strong>{" "}
          cab
        </span>
      </div>

    </div>

  </div>


  {/* ================= RIGHT ================= */}
  <div className="lg:pl-4">

    {/* Stats Card */}
    <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-amber-900/5 backdrop-blur-md sm:p-5">

      <div className="grid grid-cols-2 gap-3">

        {/* Distance */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50">
            <RouteIcon className="h-4 w-4 text-amber-600" />
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Distance
          </p>

          <p className="mt-1 text-base font-bold text-slate-950">
            {route.distanceKm} km
          </p>
        </div>

        {/* Vehicle */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50">
            <Car className="h-4 w-4 text-amber-600" />
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Vehicle
          </p>

          <p className="mt-1 truncate text-base font-bold text-slate-950">
            {vehicle.name}
          </p>
        </div>

      </div>

      {/* Fare */}
      {fare && (
        <div className="mt-3 flex items-center justify-between rounded-xl bg-amber-50 px-4 py-3">
          <div>
            <p className="text-xs text-slate-500">
              Estimated Fare
            </p>

            <p className="text-lg font-extrabold text-slate-950">
              ₹{fare.toLocaleString("en-IN")}
            </p>
          </div>

          <span className="rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold text-slate-950">
            ESTIMATE
          </span>
        </div>
      )}

      {/* CTA */}
      <div className="mt-4 grid gap-3">

        <button
          type="button"
          className="
            group
            inline-flex
            w-full
            items-center
            justify-center
            gap-2.5
            rounded-xl
            bg-slate-950
            px-6
            py-3.5
            text-sm
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-slate-800
          "
        >
          <Car className="h-5 w-5 text-amber-400" />

          Book {vehicle.name}

          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          className="
            inline-flex
            w-full
            items-center
            justify-center
            gap-2.5
            rounded-xl
            border
            border-slate-300
            bg-white
            px-6
            py-3.5
            text-sm
            font-bold
            text-slate-950
            transition-all
            hover:border-amber-300
            hover:bg-amber-50
          "
        >
          <MessageCircle className="h-5 w-5 text-amber-600" />

          WhatsApp Quote
        </button>

      </div>

      {/* Trust */}
      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-slate-200 pt-4">

        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
          Verified Drivers
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
          Clean Vehicles
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
          Transparent Pricing
        </div>

      </div>

    </div>

  </div>

</div>
      </div>
    </section>
  );
}