"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Send,
  Phone,
  MapPin,
  Clock,
  Users,
  Briefcase,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
} from "lucide-react";
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import { vehicles } from "@/data/vehicles";
import { masterRoutes } from "@/data/masterRoutes";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RouteTripPlanning from "@/components/routes/vehicles/RouteTripPlanning";
import { SedanFleetSection } from "@/components/cab-page/SedanFleetSection";
import { RouteInfo } from "@/components/cab-page/RouteInfo";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";
import { JourneyInfo } from "@/components/cab-page/JourneyInfo";
import { PickupDropLocations } from "@/components/cab-page/PickupDropLocations";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";

export function RouteSedanPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Sedan vehicle data from data/vehicles.ts
  const vehicleData = vehicles.find((v) => v.slug === "sedan-taxi" || v.slug === "dzire" || v.category === "Sedan") || {
    name: "Sedan",
    slug: "sedan-taxi",
    image: "/cabs/amaze.webp",
    price: "₹10/km",
    seats: 4,
    doors: 4,
    luggage: 3,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Sedan" as const,
  };

  // Fetch route details from data/masterRoutes.ts
  const masterRoute = masterRoutes.find(
    (r) =>
      (r.from.toLowerCase() === route.from.toLowerCase() && r.to.toLowerCase() === route.to.toLowerCase()) ||
      (r.to.toLowerCase() === route.from.toLowerCase() && r.from.toLowerCase() === route.to.toLowerCase())
  );

  const distanceDisplay = masterRoute?.distance
    ? typeof masterRoute.distance === "number"
      ? `${masterRoute.distance} km`
      : masterRoute.distance
    : route.distance || "180 km";

  const durationDisplay = masterRoute?.duration || route.duration || "3 hr 30 min";
  const highwayDisplay = masterRoute?.highway || "National Highway Expressway";

  const ratePerKm = parseFloat(vehicleData.price.replace(/[^0-9.]/g, "")) || 10;
  const distNum = parseFloat(String(distanceDisplay).replace(/[^0-9.]/g, "")) || 180;
  const oneWayFare = Math.round(distNum * 1.5 * ratePerKm + 500);
  const roundTripFare = Math.round(distNum * 2 * ratePerKm);

  const fromSlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const toSlug = route.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const location = {
    slug: route.canonicalSlug || `${fromSlug}-to-${toSlug}`,
    name: `${route.from} to ${route.to}`,
  };

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book Sedan Taxi from ${route.from} to ${route.to} (${distanceDisplay}, Est fare ₹${oneWayFare}). Please confirm availability.`
  )}`;

  // Alternative vehicles from data/vehicles.ts
  const alternativeVehicles = vehicles
    .filter((v) => v.slug !== "sedan-taxi")
    .slice(0, 6);

  const faqs = [
    {
      q: `Which cars are included in the Prime Sedan fleet from ${route.from} to ${route.to}?`,
      a: "Our prime sedan fleet consists of clean, commercial-registered Maruti Dzire, Toyota Etios, and Honda Amaze sedans with verified drivers.",
    },
    {
      q: `What is the tariff for Sedan Taxi from ${route.from} to ${route.to}?`,
      a: `Sedan cabs are billed at flat ${vehicleData.price} for outstation travel, providing executive comfort at the lowest market rates. Estimated one-way trip fare is ₹${oneWayFare.toLocaleString("en-IN")}.`,
    },
    {
      q: "How many passengers and luggage bags can fit in a sedan?",
      a: `It accommodates 4 passengers plus 1 driver and ${vehicleData.luggage} large trolley suitcases comfortably in the enclosed boot.`,
    },
    {
      q: "Is AC active throughout the journey?",
      a: "Yes, 100% chilled air conditioning is guaranteed throughout the ride with zero extra AC charges.",
    },
    {
      q: "Can I book a one-way sedan cab?",
      a: "Yes! We specialize in point-to-point one-way outstation drops with zero return fare charges.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* 1. BREADCRUMBS */}
      <nav className="border-b border-gray-100 bg-slate-50 py-3 text-xs sm:text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span>/</span>
          <Link href="/cab" className="hover:text-amber-600">Cab Routes</Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">{route.from} to {route.to} Sedan Taxi</span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 border-b border-slate-300 py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/90 px-3.5 py-1 text-xs font-bold text-amber-900 shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-amber-700" />
                <span>Prime Sedan Fleet • Dzire / Etios / Amaze • {vehicleData.price}</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600">Sedan Taxi Service</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Enjoy comfortable, affordable outstation travel from {route.from} to {route.to} via {highwayDisplay}. Travel in sanitized, commercially insured sedans with chilled AC, separate boot space, and verified professional chauffeurs.
              </p>

              {/* Quick Route Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-xl">
                <div className="rounded-2xl border border-gray-200 bg-white p-3.5 text-center shadow-xs">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Distance</p>
                  <p className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">{distanceDisplay}</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-3.5 text-center shadow-xs">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Travel Time</p>
                  <p className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">{durationDisplay}</p>
                </div>

                <div className="rounded-2xl border border-amber-400 bg-amber-100/90 p-3.5 text-center shadow-xs">
                  <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">Starting Fare</p>
                  <p className="text-lg sm:text-xl font-black text-amber-900 mt-0.5">₹{oneWayFare.toLocaleString("en-IN")}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-amber-600/30 transition hover:bg-amber-500"
                >
                  <Send className="h-4 w-4" />
                  <span>Book Sedan Taxi on WhatsApp</span>
                </a>

                <a
                  href="tel:+918377809809"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-gray-900 px-6 py-3.5 text-sm sm:text-base font-bold text-white transition hover:bg-gray-800"
                >
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>Call: 8377809809</span>
                </a>
              </div>
            </div>

            {/* Right Card: Vehicle Visual from data/vehicles.ts */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50 flex items-center justify-center border border-amber-100">
                  <Image
                    src={vehicleData.image}
                    alt={`${route.from} to ${route.to} Sedan Taxi`}
                    width={420}
                    height={260}
                    className="object-contain max-h-48 drop-shadow-md hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
                    {vehicleData.price} Flat Rate
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Users className="h-4 w-4 text-amber-600" /> Seating Capacity
                    </span>
                    <strong className="text-gray-900 font-bold">{vehicleData.seats} Passengers + 1 Chauffeur</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Briefcase className="h-4 w-4 text-amber-600" /> Luggage Space
                    </span>
                    <strong className="text-gray-900 font-bold">{vehicleData.luggage} Large Suitcases (Enclosed Boot)</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Air Conditioning
                    </span>
                    <strong className="text-gray-900 font-bold">100% Chilled AC Guaranteed</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Safety
                    </span>
                    <strong className="text-gray-900 font-bold">Commercial Permit, GPS & Airbags</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VEHICLE SPECIFICATIONS */}
      <section className="bg-white/95 py-12 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">SPECIFICATIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Prime Sedan Fleet Features & Comfort Amenities
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Award className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">400L+ Boot Capacity</h3>
              <p className="text-xs text-gray-600 mt-1">Enclosed boot storage keeping all passenger trolley bags clean and dry.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Chilled Cabin AC</h3>
              <p className="text-xs text-gray-600 mt-1">Powerful climate compressor cooling the cabin rapidly in all weather conditions.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Smooth Highway Drive</h3>
              <p className="text-xs text-gray-600 mt-1">Soft passenger suspension absorbing highway expansion joints and minor bumps.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Best Outstation Rate</h3>
              <p className="text-xs text-gray-600 mt-1">Flat ₹10/km rate with transparent kilometer tracking and zero hidden extras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEDAN FLEET (from SedanTemplate) */}
      <SedanFleetSection location={location} currentVehicleSlug={vehicleData.slug} />


      {/* 4. WHY CHOOSE SEDAN FOR THIS ROUTE */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">SMART COMFORT</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Why Book a Sedan Taxi from {route.from} to {route.to}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Most Cost-Effective Outstation Cab
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                At ₹10/km, traveling between {route.from} and {route.to} is cheaper and far more convenient than train tickets, with direct doorstep pickup and drop.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Private, Peaceful Journey
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Enjoy your own personal space to work, take phone calls, or nap peacefully throughout the {durationDisplay} drive.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Verified Commercial Chauffeurs
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Experienced expressway drivers with thorough knowledge of {highwayDisplay}, rest stops, and fuel stations.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Separate Enclosed Luggage Boot
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                All suitcases stay securely locked in the rear trunk, leaving the passenger seating area clean, spacious, and uncluttered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT FARE DETAILS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FARE BREAKDOWN</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Estimated Sedan Taxi Fares ({route.from} to {route.to})
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">ONE-WAY DROP</span>
              <p className="text-3xl font-black text-gray-900 mt-1">₹{oneWayFare.toLocaleString("en-IN")}</p>
              <p className="text-xs text-gray-500 mt-1">Based on ~{distanceDisplay} distance @ {vehicleData.price}</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Fuel, vehicle rent & driver allowance included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Doorstep pickup anywhere in {route.from}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Zero return travel surcharge</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50/40 p-6 shadow-xs">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">ROUND TRIP / MULTI-DAY</span>
              <p className="text-3xl font-black text-amber-900 mt-1">₹{roundTripFare.toLocaleString("en-IN")}</p>
              <p className="text-xs text-amber-700 mt-1">2-Way return trip @ {vehicleData.price} base tariff</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Vehicle dedicated exclusively to you</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Local sightseeing & outstation transfers in {route.to}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tolls, state taxes & parking extra at actuals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* TRAVEL PLANNING (from SedanTemplate) */}
      <TravelPlanning location={location} vehicle={vehicleData} />

      <RouteTripPlanning
        from={route.from}
        to={route.to}
        vehicleName="Sedan taxi"
        summary={`A sedan taxi from ${route.from} to ${route.to} is a practical option for up to four passengers travelling together on a private city or intercity trip.`}
        planningPoint="Sedan models can differ in boot space. Confirm the assigned car, passenger count and number of bags when you request your fare."
      />

      {/* 6. POPULAR CITY ROUTES (from data/masterRoutes.ts) */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug="sedan-taxi"
        vehicleName="Sedan"
      />

      {/* 7. FLEET OPTIONS (from data/vehicles.ts) */}
      {/* <section className="bg-white py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">OTHER VEHICLES</span>
            <h3 className="text-xl font-black text-gray-900 mt-1">
              Compare Other Cabs for {route.from} to {route.to}
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {alternativeVehicles.map((alt) => (
              <Link
                key={alt.slug}
                href={`/route/${fromSlug}-to-${toSlug}-${alt.slug}`}
                className="group rounded-2xl border border-gray-200 bg-slate-50 p-4 hover:border-amber-400 hover:bg-amber-50/50 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-700">{alt.seats} Seats</span>
                  <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-amber-600 transition" />
                </div>
                <h4 className="text-sm font-bold text-gray-900">{alt.name}</h4>
                <p className="text-xs font-semibold text-gray-500 mt-1">{alt.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* 8. FAQS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Sedan Taxi FAQs ({route.from} to {route.to})
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-gray-900 hover:text-amber-600"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180 text-amber-600" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 mb-2">
              Economical & Comfortable
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Book Prime Sedan Taxi from {route.from} to {route.to}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              Clean sanitized cabin, verified chauffeur, transparent {vehicleData.price} rate, and 24x7 phone coordinator assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm sm:text-base font-bold text-amber-900 shadow-md hover:bg-amber-50"
            >
              <Send className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Booking</span>
            </a>

            <a
              href="tel:+918377809809"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 bg-white/10 px-6 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-white/20"
            >
              <Phone className="h-4 w-4" />
              <span>Call: 8377809809</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RouteSedanPage;
