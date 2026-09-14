"use client";

import Image from "next/image";
import {
  ArrowRight,
  CarFront,
  BusFront,
  MapPin,
  Navigation,
  ShieldCheck,
  Clock,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: Vehicle;
};

export function JourneyInfo({ location, vehicle }: Props) {
  const isTempo =
    vehicle.category?.toLowerCase() === "tempo-traveller" ||
    vehicle.slug?.toLowerCase().includes("tempo") ||
    vehicle.slug?.toLowerCase().includes("urbania") ||
    vehicle.name?.toLowerCase().includes("tempo") ||
    vehicle.name?.toLowerCase().includes("urbania");

  const vehicleTypeLabel = isTempo ? "rental" : "cab";

  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${vehicle.name} ${vehicleTypeLabel} for pickup in ${location.name}. Please confirm dispatch.`
  )}`;

  return (
    <section className="border-b border-gray-300 bg-white/95 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <Navigation className="h-4 w-4 text-amber-600" />
            {isTempo ? "GROUP TRAVEL RENTAL" : "LOCAL CAB SERVICE"}
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {vehicle.name} {isTempo ? "Rental" : "Cab"} in {location.name}
          </h2>

          <p className="mt-2 text-base font-bold text-amber-600 sm:text-lg">
            {isTempo
              ? "Comfortable Outstation Tours, Weddings & Group Journeys"
              : "Reliable Doorstep Pickups & Comfortable City Rides"}
          </p>

          <p className="mt-2 max-w-7xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {isTempo ? (
              <>
                Hire a luxury, pushback AC {vehicle.name} from{" "}
                <span className="font-semibold text-slate-900">{location.name}</span>{" "}
                for long-distance family vacations, wedding guest transfers, and outstation trips with an experienced highway chauffeur and transparent billing.
              </>
            ) : (
              <>
                Travel comfortably across Delhi NCR in an AC {vehicle.name} from{" "}
                <span className="font-semibold text-slate-900">{location.name}</span>{" "}
                with a professional driver, transparent billing, and zero cancellation penalty.
              </>
            )}
          </p>
        </div>

        {/* ================= JOURNEY SHOWCASE CARD ================= */}
        <div className="mt-10 max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/80 px-5 py-3.5 sm:px-7">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Navigation className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wide text-slate-900 sm:text-sm">
                {isTempo ? "Scheduled Departure Hub" : "Active Route Dispatch"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {isTempo
                ? `Booking Open for Tours & Events in ${location.name}`
                : `Instant Pickup Available in ${location.name}`}
            </div>
          </div>

          {/* Location / Real Vehicle Image / Vehicle Info Grid */}
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">

            {/* Left: Pickup Origin */}
            <div className="lg:col-span-4">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-xs">
                  <MapPin className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-amber-500" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Pickup Location
                  </p>
                  <h3 className="mt-0.5 truncate text-lg font-black text-slate-950 sm:text-xl">
                    {location.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {isTempo
                      ? "Doorstep pickup for group tours & event venues"
                      : "All sectors, societies & business parks"}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>
                    {isTempo
                      ? "All-India tourist permit & GPS enabled"
                      : "Doorstep pickup with GPS tracking"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                  <span>
                    {isTempo
                      ? `On-time departure guaranteed in ${location.name}`
                      : `ETA: 10–15 mins inside ${location.name}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Real Vehicle Image & Spec Chip */}
            <div className="lg:col-span-4">
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xs sm:h-48">
                <Image
                  src={vehicle.image || "/cabs/amazemain.webp"}
                  alt={`${vehicle.name} ${isTempo ? "rental" : "fleet"} in ${location.name}`}
                  fill
                  className={`transition-transform duration-300 hover:scale-105 ${
                    isTempo ? "object-contain p-3" : "object-cover"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
                <span className="absolute top-2.5 left-2.5 rounded-md bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                  {vehicle.category || (isTempo ? "Luxury Tempo" : "Economy AC")}
                </span>
                <span className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-md bg-emerald-600/90 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                  <Sparkles size={11} /> {isTempo ? "Sanitized Cabin" : "Clean Cab"}
                </span>
              </div>
            </div>

            {/* Right: Vehicle Details & Instant Book */}
            <div className="space-y-4 lg:col-span-4">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-xs">
                  {isTempo ? <BusFront className="h-6 w-6" /> : <CarFront className="h-6 w-6" />}
                  <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Selected Vehicle
                  </p>
                  <h3 className="mt-0.5 truncate text-lg font-black text-slate-950 sm:text-xl">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-amber-600">
                    Starting at {vehicle.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Book {vehicle.name}
                  <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
                </a>

                <a
                  href="tel:918377809809"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 transition hover:bg-slate-50"
                  aria-label="Call driver dispatch"
                >
                  <PhoneCall className="h-4 w-4 text-amber-600" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Summary Strip */}
          <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3.5 sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-400 text-slate-950">
                  {isTempo ? <BusFront className="h-3.5 w-3.5" /> : <CarFront className="h-3.5 w-3.5" />}
                </div>
                <span className="font-semibold text-slate-700">
                  Assigned fleet for <strong className="text-slate-950">{location.name}</strong>: {vehicle.name} ({vehicle.seats || (isTempo ? 12 : 4)} Seats, {vehicle.luggage || (isTempo ? 8 : 2)} Bags, Dual AC)
                </span>
              </div>
              <span className="font-bold text-amber-700">Fixed Price • No Hidden Cost</span>
            </div>
          </div>

        </div>

        {/* ================= TRUST BADGES ================= */}
        <div className="mt-6 grid max-w-7xl gap-3 sm:grid-cols-3">
          {[
            {
              title: "Verified Chauffeur",
              desc: isTempo
                ? "Experienced highway driver with commercial badge"
                : "Background-checked & polite local driver",
            },
            {
              title: `Sanitized ${vehicle.name}`,
              desc: isTempo
                ? "Pushback reclining seats & high boot capacity"
                : "Clean AC cabin with ample boot space",
            },
            {
              title: "Transparent Billing",
              desc: "Pay only for actual kilometers driven",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-950 sm:text-sm">{item.title}</h4>
                <p className="mt-0.5 text-[11px] text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}