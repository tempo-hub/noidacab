"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  ShieldCheck,
  Clock,
  Phone,
  Sparkles,
  MapPin,
  Calendar,
  Clock3,
  CheckCircle2,
  Users,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "918377809809";
const PHONE_NUMBER = "+918377809809";

export default function CabHero() {
  const [tripType, setTripType] = useState<"Outstation" | "Local" | "Airport" | "Tempo">("Outstation");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("09:00");
  const [vehicleType, setVehicleType] = useState("Sedan (Dzire/Etios)");

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello NoidaCab, I want to book a cab:
• Service: ${tripType}
• Pickup: ${pickup || "Not specified"}
• Destination: ${destination || "Not specified"}
• Date: ${date}
• Time: ${time}
• Vehicle: ${vehicleType}

Please provide the best fare and confirm availability.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 border-b border-slate-300 py-18 md:py-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headlines & Benefits */}
          <div className="lg:col-span-7">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 mb-4">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>Trusted Cab Service Across 50+ Cities</span>
              <span className="h-1 w-1 rounded-full bg-amber-500" />
              <span className="text-amber-800">4.9/5 Rating</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Reliable Cab &{" "}
              <span className="text-amber-600 block sm:inline">
                Tempo Traveller Service
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-800 max-w-2xl">
              Book clean AC cabs, comfortable SUVs, and luxury tempo travellers for
              local rides, outstation trips, airport transfers, and sacred pilgrimage
              tours across Lucknow, Varanasi, Ayodhya, Prayagraj, and Delhi NCR.
            </p>

            {/* Feature Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                <ShieldCheck className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">100% Verified</p>
                  <p className="text-[11px] text-gray-500">Professional Chauffeurs</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                <Clock className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">24/7 Available</p>
                  <p className="text-[11px] text-gray-500">Instant Confirmation</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs col-span-2 sm:col-span-1">
                <Car className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">Fixed Tariff</p>
                  <p className="text-[11px] text-gray-500">Zero Surge Pricing</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20with%20NoidaCab.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-600/25 transition hover:bg-amber-500"
              >
                <Send className="h-4 w-4" />
                Book via WhatsApp
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-bold text-gray-800 shadow-xs transition hover:bg-gray-50 hover:border-gray-400"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                Call +91 8377809809
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-600 border-t border-gray-200/60 pt-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Zero Cancellation Fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>GPS Live Tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Doorstep Pickup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Booking Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl shadow-gray-200/50">
              {/* Card Header badge */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quick Cab Booking</h3>
                  <p className="text-xs text-gray-500">Get Instant Fare & Booking Confirmation</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                  Instant Quote
                </span>
              </div>

              {/* Trip Type Selector Tabs */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-gray-100 rounded-xl mb-5">
                {(["Outstation", "Local", "Airport", "Tempo"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setTripType(tab)}
                    className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                      tripType === tab
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab === "Tempo" ? "Tempo" : tab}
                  </button>
                ))}
              </div>

              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Pickup City / Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-600" />
                    <input
                      type="text"
                      placeholder="e.g. Noida, Delhi, Lucknow, Varanasi"
                      required
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-700 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                    />
                  </div>
                </div>

                {/* Drop Location */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Destination / Drop City
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="e.g. Ayodhya, Agra, Haridwar, Airport"
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-700 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                    />
                  </div>
                </div>

                {/* Date & Time in 2 cols */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-8.5 pr-2 py-2.5 text-xs text-gray-700 sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Time
                    </label>
                    <div className="relative">
                      <Clock3 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-8.5 pr-2 py-2.5 text-xs text-gray-700 sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Vehicle Type
                  </label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm text-gray-700 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                  >
                    <option value="Sedan (Dzire)">Dzire Sedan - 4 Seats</option>
<option value="Sedan (Etios)">Etios Sedan - 4 Seats</option>
<option value="Sedan (Amaze)">Amaze Sedan - 4 Seats</option>
                    <option value="SUV (Ertiga)">SUV (Maruti Ertiga) - 6 Seats</option>
                    <option value="SUV (Innova Crysta)">SUV (Innova Crysta) - 7 Seats</option>
                    <option value="Hatchback (WagonR)">Hatchback (WagonR) - 4 Seats</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-2 rounded-xl bg-amber-600 py-3.5 text-center text-sm sm:text-base font-bold text-white shadow-md shadow-amber-600/30 transition hover:bg-amber-500 cursor-pointer"
                >
                  Check Fare & Confirm via WhatsApp
                </button>

                <p className="text-center text-[11px] text-gray-500">
                  Instant reply in ~2 minutes • No advance required for local booking
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
