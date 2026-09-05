"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";
import { useState } from "react";

export default function VehicleHero({ vehicle }: { vehicle: Vehicle }) {
  const categoryLabel = vehicle.category.toUpperCase();

  const categoryDescription: Record<Vehicle["category"], string> = {
    Hatchback:
      "Book an affordable and comfortable hatchback in Noida for local travel, airport transfers and everyday journeys.",
    Sedan:
      "Book a comfortable private sedan in Noida for business travel, airport transfers, family trips and city travel.",
    SUV:
      "Book a spacious SUV in Noida for family trips, airport transfers, outstation journeys and comfortable group travel.",
    Urbania:
      "Book a premium Force Urbania in Noida for comfortable group travel, events, tours and long-distance journeys.",
    "Tempo Traveller":
      "Book a comfortable Tempo Traveller in Noida for family trips, group tours, events, weddings and outstation travel.",
  };

  const [formData, setFormData] = useState({
    pickup: "Noida",
    drop: "Delhi",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Booking Request - Noida Cab*
--------------------------------
*Vehicle:* ${vehicle.name}
*Pickup:* ${formData.pickup}
*Drop:* ${formData.drop}
*Date:* ${formData.date || "Not specified"}
*Time:* ${formData.time || "Not specified"}
*Rate:* ${vehicle.price}
--------------------------------`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918377809809";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="booking" className="relative overflow-hidden py-18 sm:py-16 lg:py-20">
      {/* Background with Ambient Amber Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-400 via-amber-200 to-slate-50" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-600/20 bg-white/90 px-3.5 py-1.5 text-xs font-extrabold text-amber-800 shadow-sm backdrop-blur-md">
                <CarFront size={14} className="text-amber-600" />
                NOIDA {categoryLabel} RENTAL
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-amber-600/10 px-3 py-1 text-xs font-bold text-amber-900">
                <Star size={13} className="fill-amber-600 text-amber-600" />
                4.9/5 Rated Service
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {vehicle.name} Taxi 
              <span className="block text-amber-600">Service in Noida</span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {categoryDescription[vehicle.category]}
            </p>

            {/* Prominent Vehicle Graphic Container */}
            {/* Dynamic Vehicle Image Container */}
<div
  className={`relative mt-6 h-48 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/60 p-4 shadow-lg backdrop-blur-md sm:h-56 ${
    vehicle.category === "Tempo Traveller" || vehicle.category === "Urbania"
      ? "max-w-lg" // Wider aspect for Tempo Travellers & Urbania
      : "max-w-xs" // Standard width for Sedans, Hatchbacks, & SUVs
  }`}
>
  <Image
    src={vehicle.image}
    alt={`${vehicle.name} taxi in Noida`}
    fill
    priority
    sizes={
      vehicle.category === "Tempo Traveller" || vehicle.category === "Urbania"
        ? "(max-width: 768px) 100vw, 512px"
        : "(max-width: 768px) 100vw, 384px"
    }
    className="object-contain p-2 transition-transform duration-500 hover:scale-105"
  />

  <div className="absolute bottom-3 left-3 rounded-lg bg-slate-900/80 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
    Sanitized & GPS Tracked
  </div>

  <div className="absolute bottom-3 right-3 rounded-lg bg-amber-600 px-3 py-1 text-xs font-extrabold text-white shadow-sm">
    From {vehicle.price}
  </div>
</div>

            {/* Feature Badges */}
            {/* <div className="mt-6 grid grid-cols-3 gap-2 max-w-xl">
              <HeroFeature
                icon={<CarFront size={16} className="text-amber-600" />}
                text={vehicle.airCondition ? "Chilled AC" : "Non-AC"}
              />
              <HeroFeature
                icon={<Users size={16} className="text-amber-600" />}
                text={`${vehicle.seats} Pushback Seats`}
              />
              <HeroFeature
                icon={<ShieldCheck size={16} className="text-amber-600" />}
                text="Verified Driver"
              />
            </div> */}
          </div>

          {/* RIGHT - BOOKING FORM CARD */}
          <div>
            <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-md sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    Instant Cab Estimate
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    Book {vehicle.name}
                  </h2>
                </div>
                <div className="rounded-xl bg-amber-50 px-3 py-1.5 text-right">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Base Fare</span>
                  <span className="text-sm font-black text-amber-600">{vehicle.price}</span>
                </div>
              </div>

              <form onSubmit={handleBooking} className="space-y-3.5">
                {/* Pickup */}
                <div className="rounded-xl border border-slate-300/80 bg-slate-50/50 p-3 focus-within:border-amber-600 focus-within:bg-white focus-within:ring-1 focus-within:ring-amber-600 transition">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Pickup Location
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin size={16} className="text-amber-600 shrink-0" />
                    <input
                      type="text"
                      name="pickup"
                      required
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder="e.g. Sector 62 Noida / Pari Chowk"
                      className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Drop */}
                <div className="rounded-xl border border-slate-300/80 bg-slate-50/50 p-3 focus-within:border-amber-600 focus-within:bg-white focus-within:ring-1 focus-within:ring-amber-600 transition">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Drop Location
                  </label>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400 shrink-0" />
                    <input
                      type="text"
                      name="drop"
                      required
                      value={formData.drop}
                      onChange={handleChange}
                      placeholder="e.g. IGI Airport Terminal 3 / Delhi"
                      className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-300/80 bg-slate-50/50 p-3 focus-within:border-amber-600 focus-within:bg-white focus-within:ring-1 focus-within:ring-amber-600 transition">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <CalendarDays size={14} className="text-amber-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Pickup Date</span>
                    </div>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1.5 w-full bg-transparent text-xs font-bold text-slate-900 outline-none"
                    />
                  </div>

                  <div className="rounded-xl border border-slate-300/80 bg-slate-50/50 p-3 focus-within:border-amber-600 focus-within:bg-white focus-within:ring-1 focus-within:ring-amber-600 transition">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock3 size={14} className="text-amber-600" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Pickup Time</span>
                    </div>
                    <input
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="mt-1.5 w-full bg-transparent text-xs font-bold text-slate-900 outline-none"
                    />
                  </div>
                </div>

                {/* Quick specs pills */}
                <div className="grid grid-cols-3 gap-2 py-1">
                  <InfoItem label="Capacity" value={`${vehicle.seats} Seats`} />
                  <InfoItem label="Boot Space" value={`${vehicle.luggage} Bags`} />
                  <InfoItem label="Category" value={vehicle.category} />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3.5 text-sm font-extrabold tracking-wide text-white shadow-lg transition hover:bg-amber-700 active:scale-[0.99] cursor-pointer"
                >
                  CONFIRM & BOOK ON WHATSAPP
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HeroFeature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-sm">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50">
        {icon}
      </span>
      <span className="text-xs font-bold text-slate-800">{text}</span>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-100/70 p-2 text-center border border-slate-200/60">
      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
      <p className="mt-0.5 truncate text-xs font-extrabold text-slate-900">{value}</p>
    </div>
  );
}