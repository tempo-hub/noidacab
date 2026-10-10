"use client";

import { useState } from "react";
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
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "918377809809";
const PHONE_NUMBER = "+918377809809";

interface Props {
  title: string;
  highlightText: string;
  subtitle: string;
  badgeText: string;
  defaultTripType?: "Outstation" | "Airport" | "Local" | "Sightseeing";
  defaultPickupPlaceholder?: string;
  defaultDropPlaceholder?: string;
}

export default function RouteHero({
  title,
  highlightText,
  subtitle,
  badgeText,
  defaultTripType = "Outstation",
  defaultPickupPlaceholder = "e.g. Noida, Delhi, Lucknow",
  defaultDropPlaceholder = "e.g. Agra, Jaipur, Haridwar",
}: Props) {
  const [tripType, setTripType] = useState<string>(defaultTripType);
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
• Service Category: ${tripType}
• Pickup Location: ${pickup || "Not specified"}
• Drop Destination: ${destination || "Not specified"}
• Travel Date: ${date}
• Pickup Time: ${time}
• Vehicle Preference: ${vehicleType}

Please provide route quotation & driver details.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 to-white py-20 md:py-20 border-b border-slate-300 ">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-amber-200/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 mb-6">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>{badgeText}</span>
              <span className="h-1 w-1 rounded-full bg-amber-500" />
              <span className="text-amber-800">4.9/5 Rating</span>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              {title}{" "}
              <span className="text-amber-600 block sm:inline">
                {highlightText}
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-800 max-w-2xl">
              {subtitle}
            </p>

            {/* Feature Badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                <ShieldCheck className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">Verified Chauffeurs</p>
                  <p className="text-[11px] text-gray-500">Commercial Licences</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                <Clock className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">Zero Waiting</p>
                  <p className="text-[11px] text-gray-500">10-Min Early Arrival</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs col-span-2 sm:col-span-1">
                <Car className="h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">Flat Per-Km Fare</p>
                  <p className="text-[11px] text-gray-500">No Surge Pricing</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20route.`}
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
                Call Now
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-600 border-t border-gray-200/60 pt-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Zero Advance on Local</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>GPS Live Tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Sanitized AC Vehicles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Booking Form */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl shadow-gray-200/50">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Check Route Fare</h3>
                  <p className="text-xs text-gray-500">Instant Quote & Fast Cab Allocation</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                  Instant Quote
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Pickup Location
                  </label>
                  <div className="relative text-gray-800">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-600" />
                    <input
                      type="text"
                      placeholder={defaultPickupPlaceholder}
                      required
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Drop / Destination
                  </label>
                  <div className="relative text-gray-800">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={defaultDropPlaceholder}
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Travel Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-8.5 pr-2 py-2.5 text-xs text-gray-800 sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Pickup Time
                    </label>
                    <div className="relative">
                      <Clock3 className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-8.5 pr-2 py-2.5 text-xs text-gray-800 sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Vehicle Type
                  </label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                  >
                    <option value="Hatchback (WagonR)">Hatchback (WagonR) - 4 Seats</option>
                    <option value="Sedan (Dzire)">Dzire Sedan - 4 Seats</option>
                    <option value="Sedan (Etios)">Etios Sedan - 4 Seats</option>
                    <option value="Sedan (Amaze)">Amaze Sedan - 4 Seats</option>
                    <option value="SUV (Maruti Ertiga)">SUV (Maruti Ertiga) - 6 Seats</option>
                    <option value="Premium SUV (Innova Crysta)">Toyota Innova Crysta - 7 Seats</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 rounded-xl bg-amber-600 py-3.5 text-center text-sm sm:text-base font-bold text-white shadow-md shadow-amber-600/30 transition hover:bg-amber-500 cursor-pointer"
                >
                  Get Route Quote on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
