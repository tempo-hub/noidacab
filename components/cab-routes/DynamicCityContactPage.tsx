"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  MapPin,
  Car,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Send,
  Star,
} from "lucide-react";
import { CityInfo } from "@/lib/cityData";
import { intercityTaxiRoutes } from "@/data/allRoutesData";
import CabFleet from "@/components/cab/CabFleet";
import OurServicesGrid from "@/components/cab-routes/OurServicesGrid";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import AllCityRoutes from "@/components/cab-routes/AllCityRoutes";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabFAQ from "@/components/cab/CabFAQ";
import CabCTA from "@/components/cab/CabCTA";

const PHONE_NUMBER = "8377809809";
const DISPLAY_PHONE = "+91 8377809809";

interface Props {
  city: CityInfo;
}

export default function DynamicCityContactPage({ city }: Props) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("09:00");
  const [vehicleType, setVehicleType] = useState("Sedan (Dzire/Etios)");

  const defaultPickup = `${city.name} (${city.localities[0] || "City Center"})`;
  const defaultDrop = city.popularOutstation[0] || "Destination City";

  const whatsappHeroUrl = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
    `Hi NoidaCab, I need an immediate taxi booking in ${city.name}. Please share vehicle availability and fares.`
  )}`;

  const handleQuickBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello NoidaCab, I want to book a cab in ${city.name}:
• City: ${city.name}
• Pickup Location: ${pickup || defaultPickup}
• Drop Destination: ${destination || defaultDrop}
• Travel Date: ${date}
• Pickup Time: ${time}
• Vehicle Preference: ${vehicleType}

Please provide route quotation & driver allocation details.`;

    window.open(
      `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  // Filter routes connected with this city
  const cityRoutes = intercityTaxiRoutes.filter(
    (r) =>
      r.from.toLowerCase().includes(city.slug) ||
      r.to.toLowerCase().includes(city.slug) ||
      r.from.toLowerCase().includes(city.name.toLowerCase()) ||
      r.to.toLowerCase().includes(city.name.toLowerCase())
  );
  const displayRoutes = cityRoutes.length > 0 ? cityRoutes : intercityTaxiRoutes;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `NoidaCab - 24/7 ${city.name} Taxi Booking Helpline`,
    telephone: "+91-8377809809",
    url: `https://noidacab.com/${city.slug}-taxi-contact-number`,
    areaServed: [city.name, city.state, "North India"],
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* 1. HERO SECTION - Vibrant gradient matching RouteHero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-16 md:py-20 border-b border-slate-300">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>24×7 Cab Dispatch Desk • {city.name} Helpline</span>
                <span className="h-1 w-1 rounded-full bg-amber-500" />
                <span className="text-amber-800">4.9/5 Rating</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                {city.name} Taxi{" "}
                <span className="text-amber-600 block sm:inline">
                  Contact Number
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-800 max-w-2xl">
                Need a dependable cab in {city.name}? Dial our 24/7 taxi booking helpline or chat on WhatsApp for immediate vehicle allocation across {city.localities.slice(0, 4).join(", ")}, local city tours, airport drops, and outstation corridors with zero surge pricing.
              </p>

              {/* Direct Dial CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-600/25 transition hover:bg-amber-500 active:scale-[0.98]"
                >
                  <PhoneCall className="h-5 w-5" />
                  Call: {DISPLAY_PHONE}
                </a>

                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-bold text-gray-800 shadow-xs transition hover:bg-gray-50 hover:border-gray-400"
                >
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                  Instant WhatsApp Booking
                </a>
              </div>

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
                    <p className="text-[11px] text-gray-500">10-20 Min Arrival</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs col-span-2 sm:col-span-1">
                  <Car className="h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">Flat Per-Km Fare</p>
                    <p className="text-[11px] text-gray-500">No Hidden Costs</p>
                  </div>
                </div>
              </div>

              {/* Trust checklist */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-700 border-t border-gray-200/60 pt-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>24×7 Local & Highway Support</span>
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

            {/* Right Column: Emergency Card & Quick Booking Form */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Hotline Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-slate-900 p-6 sm:p-7 text-white shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {city.name} 24×7 Dispatch Desk
                    </h3>
                    <p className="text-xs text-slate-400">
                      Immediate allocation & advance booking
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 text-emerald-400 px-2.5 py-1 text-[11px] font-bold border border-emerald-500/30">
                    Live Now
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-slate-800/80 p-3.5 border border-slate-700/80">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                        Primary Hotline
                      </span>
                      <span className="text-base font-extrabold text-white">
                        {DISPLAY_PHONE}
                      </span>
                    </div>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="rounded-lg bg-amber-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-amber-500 transition"
                    >
                      Dial Now
                    </a>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-800/80 p-3.5 border border-slate-700/80">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                        WhatsApp Dispatch
                      </span>
                      <span className="text-base font-extrabold text-white">
                        Instant Fare Quotation
                      </span>
                    </div>
                    <a
                      href={whatsappHeroUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Fare Enquiry Form */}
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Quick Route Enquiry</h3>
                    <p className="text-xs text-gray-500">Direct WhatsApp Cab Allocation</p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 border border-amber-200">
                    Fast Response
                  </span>
                </div>

                <form onSubmit={handleQuickBooking} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Pickup Location
                    </label>
                    <div className="relative text-gray-800">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-600" />
                      <input
                        type="text"
                        placeholder={defaultPickup}
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 text-xs sm:text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Drop Destination
                    </label>
                    <div className="relative text-gray-800">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder={defaultDrop}
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 text-xs sm:text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Vehicle Type
                      </label>
                      <select
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="w-full px-2.5 py-2 text-xs sm:text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      >
                        <option value="Sedan (Dzire/Etios)">Sedan (Dzire / Etios)</option>
                        <option value="SUV (Ertiga)">SUV (Ertiga 6-Seater)</option>
                        <option value="Innova Crysta">Innova Crysta (7-Seater)</option>
                        <option value="Tempo Traveller">Tempo Traveller (12-24 Seater)</option>
                        <option value="Force Urbania">Force Urbania (Luxury)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-500 transition cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    Enquire Fare via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. City Overview Highlight Box */}
      <section className="bg-amber-50/50 py-10 border-b border-amber-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <MapPin className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Popular Pickup Hubs in {city.name}
                </p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  {city.localities.slice(0, 5).join(", ")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  Top Outstation Routes
                </p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  {city.popularOutstation.slice(0, 4).map((c) => `${city.name} to ${c}`).join(" • ")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl bg-white p-5 border border-amber-200/60 shadow-xs">
              <Star className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase">
                  24/7 {city.name} Helpdesk
                </p>
                <p className="text-sm font-bold text-gray-900 mt-1">
                  Instant allocation & zero waiting disputes
                </p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-xs font-bold text-amber-600 hover:underline inline-flex items-center gap-1 mt-0.5"
                >
                  <Phone className="h-3.5 w-3.5" /> Call {DISPLAY_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Available Cabs on Call / Fleet */}
      <CabFleet />

      {/* 4. Popular Routes Section (Connected to this city) */}
      <PopularCityRoutes
        cityName={city.name}
        vehicleSlug="taxi"
        vehicleName="Taxi"
        title={`Popular Taxi Routes from ${city.name}`}
        subtitle={`Explore top outstation and one-way drops originating from ${city.name} with verified chauffeurs and flat per-km pricing.`}
      />

      {/* 5. All Intercity Taxi Routes connecting with this city */}
      <AllCityRoutes
        routes={displayRoutes}
        title={`All Intercity Taxi Routes Connecting ${city.name}`}
        subtitle={`Seamless one-way drops and round-trip highway cabs connecting ${city.name} with major pilgrimage centers, expressways, and business corridors.`}
        badge={`${city.name} Corridors`}
      />

      {/* 6. Our Services Grid */}
      <OurServicesGrid currentServiceSlug="taxi-service-routes" />

      {/* 7. Local Coverage Hotspots in this City */}
      <section className="bg-white py-12 sm:py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              City Coverage
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
              Cab Pickup Hotspots Across {city.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Our verified drivers are stationed across major residential hubs, tech parks, railway stations, and airport terminals in {city.name} to ensure doorstep pickup in 15–25 minutes.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {city.localities.map((locality, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 hover:border-amber-300 hover:bg-amber-50/50 transition"
              >
                <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
                <span>{locality}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. How to Book Section */}
      <HowToBook />

      {/* 9. Why Choose Us */}
      <WhyChooseCab />

      {/* 10. Testimonials */}
      <CabTestimonials />

      {/* 11. FAQs */}
      <CabFAQ />

      {/* 12. Bottom CTA */}
      <CabCTA />
    </main>
  );
}
