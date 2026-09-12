"use client";

import Image from "next/image";
import {
  ArrowRight,
  Car,
  CheckCircle2,
  Clock,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
  Luggage,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: Vehicle;
  tagline?: string;
  fare?: number;
  phoneNumber?: string;
};

export function HeroSection({
  location,
  vehicle,
  tagline,
  fare,
  phoneNumber = "918377809809",
}: Props) {
  const whatsappBookingUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${vehicle.name} cab in ${location.name}. Please confirm driver arrival and pricing.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-18 sm:py-18 lg:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-7">
            {/* Trust Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <div className="flex items-center gap-1.5 font-bold text-slate-950">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                4.9 Rating
              </div>
              <span className="text-slate-400">•</span>
              <span className="text-slate-700">Reliable Cab Service</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-700">No Hidden Charges</span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {vehicle.name}{" "}
              <span className="mx-2 inline-flex align-middle text-amber-600 sm:mx-4">
                <ArrowRight className="h-8 w-8 sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
              </span>{" "}
              <span className="text-amber-600">{location.name}</span>
            </h1>

            {/* Vehicle & Type Subtitle */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                {vehicle.name} Taxi in {location.name}
              </h2>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              <span className="text-sm font-medium text-slate-700 sm:text-base">
                Local Taxi Booking
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              {tagline ||
                `Book a comfortable ${vehicle.name} cab in ${location.name}. Enjoy convenient pickup, a professional driver and a comfortable journey with transparent pricing.`}
            </p>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-800 sm:text-sm">
              <span className="flex items-center gap-1.5 rounded-lg border border-white/60 bg-white/70 px-3 py-1.5 backdrop-blur-xs">
                <Clock className="h-4 w-4 text-amber-600" /> 10–15 Min Pickup
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-white/60 bg-white/70 px-3 py-1.5 backdrop-blur-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600" /> Verified Drivers
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-white/60 bg-white/70 px-3 py-1.5 backdrop-blur-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Doorstep Pickup
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <Car className="h-4 w-4 text-amber-400" />
                Book {vehicle.name}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                Call Now
              </a>
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-amber-900/5 backdrop-blur-md sm:p-5">

              {/* Real Vehicle Image Preview */}
              <div className="relative h-58 w-full overflow-hidden rounded-xl border border-slate-200 bg-white sm:h-60">
                <Image
                  src={vehicle.image || "/cabs/amazemain.webp"}
                  alt={`${vehicle.name} taxi in ${location.name}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <span className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                  {vehicle.category || "AC Taxi"}
                </span>
              </div>

              {/* Location & Vehicle Details */}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 truncate text-sm font-bold text-slate-950 sm:text-base">
                    {location.name}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs text-slate-500">Vehicle</p>
                  <p className="mt-1 truncate text-sm font-bold text-slate-950 sm:text-base">
                    {vehicle.name}
                  </p>
                </div>
              </div>

              {/* Capacity Chips */}
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5">
                  <Users className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Up to <strong>{vehicle.seats || 4} Seats</strong></span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5">
                  <Luggage className="h-4 w-4 text-amber-600 shrink-0" />
                  <span><strong>{vehicle.luggage || 2} Luggage</strong> Bags</span>
                </div>
              </div>

              {/* Fare / Price Display */}
              <div className="mt-3 flex items-center justify-between rounded-xl bg-amber-50 px-4 py-3">
                <div>
                  <p className="text-xs text-slate-500">
                    {fare ? "Estimated Fare" : "Standard Base Rate"}
                  </p>
                  <p className="text-lg font-extrabold text-slate-950">
                    {fare ? `₹${fare.toLocaleString("en-IN")}` : vehicle.price}
                  </p>
                </div>
                <span className="rounded-full bg-amber-400 px-3 py-1 text-[10px] font-bold text-slate-950">
                  {fare ? "ESTIMATE" : "NO SURGE"}
                </span>
              </div>

              {/* Trust Badges */}
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