"use client";

import { useState } from "react";
import Image from "next/image";
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
  Users,
  Briefcase,
  Snowflake,
  Fuel,
  HelpCircle,
} from "lucide-react";
import { CityInfo } from "@/lib/cityData";
import { Vehicle } from "@/data/vehicles";
import { intercityTaxiRoutes } from "@/data/allRoutesData";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import AllCityRoutes from "@/components/cab-routes/AllCityRoutes";
import OurServicesGrid from "@/components/cab-routes/OurServicesGrid";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabCTA from "@/components/cab/CabCTA";

const PHONE_NUMBER = "8377809809";
const DISPLAY_PHONE = "+91 8377809809";

interface Props {
  city: CityInfo;
  vehicle: Vehicle;
  customTitle?: string;
  customSubtitle?: string;
}

export default function DynamicCityVehiclePage({
  city,
  vehicle,
  customTitle,
  customSubtitle,
}: Props) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("09:00");
  const [tripType, setTripType] = useState("Outstation Round Trip");

  const defaultPickup = `${city.name} (${city.localities[0] || "City Center"})`;
  const defaultDrop = city.popularOutstation[0] || "Destination City";

  const isCar =
    vehicle.category === "Sedan" ||
    vehicle.category === "SUV" ||
    vehicle.category === "Hatchback" ||
    ["dzire", "etios", "amaze", "wagonr", "ertiga", "innova-crysta"].includes(vehicle.slug);

  const vehicleServiceType = isCar ? "Taxi Service" : "Rental Service";
  const displayTitle = customTitle || `${vehicle.name} in ${city.name}`;
  const displaySubtitle =
    customSubtitle ||
    `Book a reliable, clean, and sanitized ${vehicle.name} ${vehicleServiceType.toLowerCase()} in ${city.name} (${city.state}). Features ${vehicle.seats} pushback seats, dual AC, space for ${vehicle.luggage} bags, verified commercial drivers, and flat per-km tariffs starting at ${vehicle.price}. Doorstep pickup across ${city.localities.slice(0, 4).join(", ")}.`;

  const whatsappHeroUrl = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
    `Hi NoidaCab, I want to book a ${vehicle.name} in ${city.name}. Please confirm vehicle availability and fare quotation.`
  )}`;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello NoidaCab, I want to book a vehicle:
• Vehicle: ${vehicle.name}
• City: ${city.name}
• Trip Type: ${tripType}
• Pickup: ${pickup || defaultPickup}
• Drop: ${destination || defaultDrop}
• Date: ${date}
• Time: ${time}
• Rate: ${vehicle.price}

Please share instant driver allocation and fare quote.`;

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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} Taxi Service in ${city.name}`,
    description: displaySubtitle,
    brand: {
      "@type": "Brand",
      name: "NoidaCab",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: vehicle.price.replace(/[^0-9]/g, "") || "10",
      offerCount: "1",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "185",
    },
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* 1. HERO SECTION - Radiant Amber Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-16 md:py-20 border-b border-slate-300">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>24×7 {city.name} Fleet • {vehicle.category || "Cab"} Category</span>
                <span className="h-1 w-1 rounded-full bg-amber-500" />
                <span className="text-amber-800">4.9/5 Rating</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                {vehicle.name}{" "}
                <span className="text-amber-600 block sm:inline">
                  in {city.name}
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-800 max-w-2xl">
                {displaySubtitle}
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
                  Book on WhatsApp
                </a>
              </div>

              {/* Feature Badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="flex items-center gap-2 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                  <Users className="h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">{vehicle.seats} Seats</p>
                    <p className="text-[10px] text-gray-500">Pushback Comfort</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                  <Car className="h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">{vehicle.price}</p>
                    <p className="text-[10px] text-gray-500">Flat Per-KM Rate</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                  <Briefcase className="h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">{vehicle.luggage} Bags</p>
                    <p className="text-[10px] text-gray-500">Spacious Boot</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-white border border-gray-200/80 p-3 shadow-xs">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-gray-900">Verified Driver</p>
                    <p className="text-[10px] text-gray-500">GPS Tracked</p>
                  </div>
                </div>
              </div>

              {/* Trust checklist */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-700 border-t border-gray-200/60 pt-6">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Doorstep Pickup Across {city.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>100% Sanitized AC Vehicles</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Zero Advance for Local City Rides</span>
                </div>
              </div>
            </div>

            {/* Right Column: Vehicle Preview Card & Quick Quote Form */}
            <div className="lg:col-span-5 space-y-6">
              {/* Vehicle Showcase Card */}
              <div className="rounded-3xl border border-slate-200/90 bg-slate-900 p-6 sm:p-7 text-white shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold">
                      Starting @ {vehicle.price} • {vehicle.seats} Seater
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 text-emerald-400 px-2.5 py-1 text-[11px] font-bold border border-emerald-500/30">
                    Available in {city.name}
                  </span>
                </div>

                <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-800/80 mb-4 flex items-center justify-center border border-slate-700">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} in ${city.name}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">Per KM Tariff</span>
                    <strong className="text-amber-400 text-sm">{vehicle.price}</strong>
                  </div>
                  <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">Chauffeur</span>
                    <strong className="text-emerald-400 text-sm">Included</strong>
                  </div>
                </div>
              </div>

              {/* Quick Route Enquiry Form */}
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Book {vehicle.name}</h3>
                    <p className="text-xs text-gray-500">Direct WhatsApp Driver Allocation</p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 border border-amber-200">
                    Fast Quote
                  </span>
                </div>

                <form onSubmit={handleBooking} className="space-y-3.5">
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
                        Trip Type
                      </label>
                      <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                        className="w-full px-2.5 py-2 text-xs sm:text-sm text-gray-800 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
                      >
                        <option value="Outstation Round Trip">Outstation Round Trip</option>
                        <option value="One Way Drop">One Way Drop</option>
                        <option value="Local 8hr/80km">Local 8hr / 80km</option>
                        <option value="Airport Transfer">Airport Transfer</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-500 transition cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    Enquire {vehicle.name} Quote via WhatsApp
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
                  Top Outstation Routes with {vehicle.name}
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

      {/* 3. Vehicle Specifications Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              Vehicle Specifications
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
              {vehicle.name} Features & Comfort Amenities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Every {vehicle.name} in our {city.name} fleet undergoes routine sanitization, mechanical inspections, and highway safety verification.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
              <Users className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="text-sm font-bold text-gray-900">Seating Capacity</h3>
              <p className="text-xs text-gray-600 mt-1">{vehicle.seats} comfortable pushback passenger seats with individual seatbelts.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
              <Briefcase className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="text-sm font-bold text-gray-900">Luggage Capacity</h3>
              <p className="text-xs text-gray-600 mt-1">Dedicated boot space for {vehicle.luggage} medium/large suitcases.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="text-sm font-bold text-gray-900">Air Conditioning</h3>
              <p className="text-xs text-gray-600 mt-1">Powerful dual-zone AC vents ensuring pleasant cooling in peak summer.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-5">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="text-sm font-bold text-gray-900">Highway Safety</h3>
              <p className="text-xs text-gray-600 mt-1">Real-time GPS tracking, speed governors, and verified highway chauffeurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Routes Section (Connected to this city & vehicle) */}
      <PopularCityRoutes
        cityName={city.name}
        vehicleSlug={vehicle.slug}
        vehicleName={vehicle.name}
        title={`Popular ${vehicle.name} Routes from ${city.name}`}
        subtitle={`Top outstation routes from ${city.name} booked with ${vehicle.name} at flat per-km tariffs.`}
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
              City Pickup Coverage
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
              {vehicle.name} Pickup Hubs Across {city.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Our chauffeurs are stationed across major localities in {city.name} to ensure doorstep pickup in under 30 minutes.
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

      {/* 11. Vehicle FAQs */}
      <section className="py-12 sm:py-16 bg-gray-50/50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              Got Questions?
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
              {vehicle.name} Booking FAQs in {city.name}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                How is the fare calculated for {vehicle.name} in {city.name}?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Fares are calculated at flat {vehicle.price} for outstation travel with a minimum daily running standard (typically 250 km/day). For local full-day city tours in {city.name}, 8hr/80km packages are available with zero surge.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                Are toll taxes, parking, and driver allowance included?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Driver allowance is included in our tariff. Highway tolls, state border permits, and parking are payable on actuals or can be bundled into an all-inclusive fixed package upon request.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                How early should I book {vehicle.name} in {city.name}?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Sedans and SUVs can be confirmed with 1 to 2 hours prior notice. For Tempo Travellers and Force Urbania, booking 1 to 2 days in advance is recommended during peak pilgrimage and wedding seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Bottom CTA */}
      <CabCTA />
    </main>
  );
}
