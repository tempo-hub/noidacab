"use client";

import Image from "next/image";
import {
  Calculator,
  CheckCircle2,
  MapPin,
  Car,
  BusFront,
  Fuel,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { getPerKmRate } from "@/lib/pricing";
import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: Vehicle;
};

export function FareEstimate({ location, vehicle }: Props) {
  const rate = getPerKmRate(vehicle);

  const isTempo =
    vehicle.category?.toLowerCase() === "tempo-traveller" ||
    vehicle.slug?.toLowerCase().includes("tempo") ||
    vehicle.slug?.toLowerCase().includes("urbania") ||
    vehicle.name?.toLowerCase().includes("tempo") ||
    vehicle.name?.toLowerCase().includes("urbania");

  const vehicleLabel = isTempo ? "rental" : "cab";

  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want an exact fare quotation for a ${vehicle.name} ${vehicleLabel} in ${location.name}.`
  )}`;

  return (
    <section className="border-b border-gray-300 bg-white/95 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800">
              <Calculator className="h-4 w-4 text-amber-600" />
              Transparent Metering
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Simple &amp; Transparent {isTempo ? "Rental Price" : "Cab Fare"} in {location.name}
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Book a clean, sanitized{" "}
              <span className="font-semibold text-slate-900">
                {vehicle.name}
              </span>{" "}
              {isTempo ? "on rent" : "taxi"} in{" "}
              <span className="font-semibold text-slate-900">
                {location.name}
              </span>{" "}
              with straight per-kilometer billing and zero peak-hour surge fees.
            </p>

            {/* Quick Metrics / Locality highlights */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    Pickup Zone
                  </p>
                  <p className="font-bold text-slate-900">
                    {location.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  {isTempo ? <BusFront className="h-5 w-5" /> : <Car className="h-5 w-5" />}
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {isTempo ? "Fleet Model" : "Cab Model"}
                  </p>
                  <p className="font-bold text-slate-900">
                    {vehicle.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-600 sm:text-sm">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {isTempo ? "Commercial All-India Permit" : "GPS Metered Rides"}
              </span>
              <span className="flex items-center gap-1.5">
                <Fuel className="h-4 w-4 text-emerald-600" />
                Fuel &amp; Chauffeur Included
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Zero Cancellation Fee
              </span>
            </div>
          </div>

          {/* ================= RIGHT FARE CARD ================= */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            {/* Top accent line */}
            <div className="h-1.5 bg-amber-400" />

            <div className="p-5 sm:p-6">
              {/* Primary Rate Box */}
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Base Running Rate
                  </p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-4xl font-black tracking-tight text-slate-900">
                      ₹{rate}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      / km
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                    No Peak Surge
                  </span>
                  <p className="mt-1 text-[11px] text-slate-400">Fixed Price</p>
                </div>
              </div>

              {/* Trip specs breakdown */}
              <div className="mt-5 space-y-2.5 rounded-2xl bg-slate-50 p-4 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Vehicle Type</span>
                  <span className="font-semibold text-slate-900">{vehicle.name}</span>
                </div>
                <div className="h-px bg-slate-200/70" />
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Pickup Area</span>
                  <span className="font-semibold text-slate-900">{location.name}</span>
                </div>
                <div className="h-px bg-slate-200/70" />
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Luggage Allowance</span>
                  <span className="font-semibold text-slate-900">
                    {vehicle.luggage || (isTempo ? 8 : 2)} Large Bags
                  </span>
                </div>
                <div className="h-px bg-slate-200/70" />
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Seating Capacity</span>
                  <span className="font-semibold text-slate-900">
                    Up to {vehicle.seats || (isTempo ? 12 : 4)} Passengers
                  </span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-slate-800"
              >
                Get Quote on WhatsApp
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </a>

              {/* Disclaimer */}
              <div className="mt-4 flex items-start gap-2 text-[11px] leading-4 text-slate-500">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                <p>
                  State permits, expressway tolls, and parking tickets are billed directly as per actual FASTag receipts.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}