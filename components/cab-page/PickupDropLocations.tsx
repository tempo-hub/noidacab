"use client";

import Image from "next/image";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock,
  MapPin,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Zap,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: Vehicle;
};

export function PickupDropLocations({ location, vehicle }: Props) {
  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I need to schedule a doorstep pickup in ${location.name} with a ${vehicle.name} cab.`
  )}`;

  return (
    <section className="border-b border-gray-300 bg-white/95 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <MapPin className="h-4 w-4 text-amber-600" />
            DOORSTEP TRANSFERS
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Pickup & Drop Service in {location.name}
          </h2>

          <p className="mx-auto mt-3 max-w-7xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Reliable, point-to-point transfer across Delhi NCR with clean{" "}
            <span className="font-bold text-slate-900">{vehicle.name}</span> cabs. 
            Zero cancellation charges, digital billing, and verified local chauffeurs.
          </p>
        </div>

        {/* ================= MAIN TRANSFER WORKFLOW ================= */}
        <div className="mt-10 max-w-7xl">
          <div className="relative grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">

            {/* Pickup Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl sm:p-7">
              {/* Top Accent Strip */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-amber-400" />

              <div>
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-xs transition-colors group-hover:bg-amber-200">
                    <MapPin className="h-6 w-6" />
                    <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Step 1: Origin
                    </p>
                    <h3 className="mt-0.5 truncate text-xl font-black text-slate-950 sm:text-2xl">
                      {location.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Doorstep arrival across societies, offices & metro gates
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {[
                    "Chauffeur reaches exactly at your pin location",
                    "Assistance with heavy luggage loading",
                    "10–15 min quick dispatch window",
                  ].map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="text-xs font-medium text-slate-700 sm:text-sm">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200/70 bg-amber-50/60 p-3 text-xs text-amber-900">
                <span className="font-bold">Live Status:</span> Drivers active in {location.name}
              </div>
            </div>

            {/* Mid Vehicle Showcase & Connector */}
            <div className="flex flex-col items-center justify-center gap-3 py-2 md:px-2">              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-amber-400 text-slate-950 shadow-md">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </div>
            </div>

            {/* Drop Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl sm:p-7">
              {/* Top Accent Strip */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-slate-950" />

              <div>
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 shadow-xs transition-colors group-hover:bg-slate-200">
                    <Navigation className="h-6 w-6" />
                    <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-900" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Step 2: Destination
                    </p>
                    <h3 className="mt-0.5 text-xl font-black text-slate-950 sm:text-2xl">
                      Anywhere in NCR
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Delhi, Noida, Greater Noida, Gurgaon, Airports & Railway
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                  {[
                    "Direct expressway routing without unnecessary detours",
                    "Real-time FASTag toll receipts provided",
                    "Chilled climate control throughout the trip",
                  ].map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="text-xs font-medium text-slate-700 sm:text-sm">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
                <span className="font-bold">Tariff:</span> Starting at {vehicle.price}
              </div>
            </div>

          </div>

          {/* ================= BOTTOM CONVERSION BAR ================= */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:px-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-slate-950 font-bold">
                <Clock className="h-4 w-4" />
              </div>
              <span className="text-slate-700 font-medium">
                Direct pickup from <strong className="text-slate-950">{location.name}</strong> inside 10–15 mins.
              </span>
            </div>

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 sm:flex-initial"
              >
                <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                Schedule Cab
              </a>

              <a
                href="tel:918377809809"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-100"
              >
                <PhoneCall className="h-3.5 w-3.5 text-amber-600" />
                Call
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}