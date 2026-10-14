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
import RelatedCityRoutes from "./RelatedCityRoutes";
import CabTestimonials from "@/components/cab/CabTestimonials";
import VehicleRouteSeoGuide from "./VehicleRouteSeoGuide";
import RouteTripPlanning from "@/components/routes/vehicles/RouteTripPlanning";

import { RouteInfo } from "@/components/cab-page/RouteInfo";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";
import { JourneyInfo } from "@/components/cab-page/JourneyInfo";
import { PickupDropLocations } from "@/components/cab-page/PickupDropLocations";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";

export function RouteEtiosPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Toyota Etios data from data/vehicles.ts
  const vehicleData = vehicles.find((v) => v.slug === "etios") || {
    name: "Etios",
    slug: "etios",
    image: "/cabs/etios.webp",
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
  const roundTripFare = Math.round(distNum * 3 * ratePerKm + 500);

  const fromSlug = route.from.toLowerCase().replace(/^route-/, "").replace(/[^a-z0-9]+/g, "-");
  const toSlug = route.to.toLowerCase().replace(/^route-/, "").replace(/[^a-z0-9]+/g, "-");

  const location = {
    slug: (route.canonicalSlug || `${fromSlug}-to-${toSlug}`).replace(/^(route[-/])+/g, ""),
    name: `${route.from.replace(/^Route\s+/i, "")} to ${route.to}`,
  };

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book Toyota Etios from ${route.from} to ${route.to} (${distanceDisplay}, Est fare ₹${oneWayFare}). Please confirm availability.`
  )}`;

  // Alternative vehicles from data/vehicles.ts
  const alternativeVehicles = vehicles
    .filter((v) => v.slug !== "etios")
    .slice(0, 6);

  const faqs = [
    {
      q: `How many passengers can travel in Toyota Etios from ${route.from} to ${route.to}?`,
      a: "Toyota Etios seats 4 passengers plus 1 driver with an exceptionally wide rear bench seat and flat rear floor.",
    },
    {
      q: `What is the tariff for Toyota Etios outstation cab from ${route.from} to ${route.to}?`,
      a: `Toyota Etios is billed at flat ${vehicleData.price} for outstation routes, offering unmatched value and Toyota durability. Estimated one-way trip fare is ₹${oneWayFare.toLocaleString("en-IN")}.`,
    },
    {
      q: "How large is the boot space of Toyota Etios?",
      a: `Toyota Etios features an industry-leading 592-litre boot—large enough to carry ${vehicleData.luggage} large suitcases and additional duffels with ease.`,
    },
    {
      q: "Is Toyota Etios comfortable for long 400+ km road trips?",
      a: "Yes! Etios is celebrated for its soft suspension, flat floorboard, and relaxed seating posture, making it a favorite for long highway journeys.",
    },
    {
      q: "Can I book Toyota Etios for one-way outstation travel?",
      a: "Yes! We offer point-to-point one-way outstation drops with zero return fare charges and transparent per-km billing.",
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
          <span className="font-semibold text-gray-800">{route.from} to {route.to} Toyota Etios</span>
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
                <span>Toyota Durability • 592L Boot • {vehicleData.price}</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600">Etios Taxi</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Travel with supreme peace of mind from {route.from} to {route.to} via {highwayDisplay} in the legendary Toyota Etios. Renowned for its huge 592L boot space, soft highway suspension, and dependable Japanese engineering.
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
                  <span>Book Toyota Etios on WhatsApp</span>
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
                    alt={`${route.from} to ${route.to} Toyota Etios`}
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
                    <strong className="text-gray-900 font-bold">{vehicleData.luggage} Suitcases (592L Gigantic Boot)</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Air Conditioning
                    </span>
                    <strong className="text-gray-900 font-bold">Chilled High-Capacity Rotary AC</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Safety
                    </span>
                    <strong className="text-gray-900 font-bold">Global NCAP 4-Star Crash Safety & ABS</strong>
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
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Toyota Etios Engineering & Cabin Dimensions
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Award className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">592L Massive Boot</h3>
              <p className="text-xs text-gray-600 mt-1">Largest luggage capacity among sedans, carrying heavy airport luggage without issue.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Flat Rear Floor</h3>
              <p className="text-xs text-gray-600 mt-1">Zero center hump on the rear floorboard allowing the middle passenger complete foot stretch.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Toyota D-4D Engine</h3>
              <p className="text-xs text-gray-600 mt-1">Unmatched engine longevity known across India for million-kilometer reliability.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Smooth Suspension</h3>
              <p className="text-xs text-gray-600 mt-1">Long-travel shock absorbers designed specifically to handle rough highway patches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE SUMMARY (from EtiosTemplate) */}
      <VehicleSummary location={location} vehicle={vehicleData} />

      {/* ROUTE INFO (from EtiosTemplate) */}
      <RouteInfo location={location} vehicle={vehicleData} />

      {/* 4. WHY CHOOSE ETIOS FOR THIS ROUTE */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">UNMATCHED DURABILITY</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Why Book Toyota Etios from {route.from} to {route.to}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Industry&apos;s Largest 592L Boot
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Holds up to 4 large suitcases plus carry-on bags. No need to cram bags onto passenger seats or tie luggage outside.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Unbeatable Knee & Shoulder Room
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Extra wide bench seat and flat rear floor allow 3 full-grown adults to sit in the back comfortably throughout the {durationDisplay} drive.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Proven Highway Cruiser
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Glides across {highwayDisplay} without cabin vibration, keeping passengers fresh and energetic upon arrival.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Courteous Professional Chauffeur
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Experienced expressway drivers with thorough route knowledge, verified backgrounds, and punctual habits.
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
              Estimated Toyota Etios Fares ({route.from} to {route.to})
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">ONE-WAY DROP</span>
              <p className="text-3xl font-black text-gray-900 mt-1">₹{oneWayFare.toLocaleString("en-IN")}</p>
              <p className="text-xs text-gray-500 mt-1">Based on ~{distanceDisplay} distance @ {vehicleData.price}</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Fuel, vehicle rent & driver allowance included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Punctual doorstep pickup across {route.from}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Zero return travel surcharge</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50/40 p-6 shadow-xs">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">ROUND TRIP / MULTI-DAY</span>
              <p className="text-3xl font-black text-amber-900 mt-1">₹{roundTripFare.toLocaleString("en-IN")}</p>
              <p className="text-xs text-amber-700 mt-1">2-Way return trip @ {vehicleData.price} base tariff</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Vehicle dedicated exclusively to your group</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Local sightseeing & outstation transfers in {route.to}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tolls, state taxes & parking extra at actuals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY INFO (from EtiosTemplate) */}
      {/* <JourneyInfo location={location} vehicle={vehicleData} /> */}

      {/* PICKUP & DROP LOCATIONS (from EtiosTemplate) */}
      {/* <PickupDropLocations location={location} vehicle={vehicleData} /> */}

      {/* WHY CHOOSE US (from EtiosTemplate) */}
      <WhyChooseUs location={location} vehicle={vehicleData} />

      {/* WHAT'S INCLUDED (from EtiosTemplate) */}
      <WhatsIncluded location={location} vehicle={vehicleData} />

      {/* BOOKING PROCESS (from EtiosTemplate) */}
      <BookingProcess location={location} vehicle={vehicleData} />

      {/* TRAVEL TIPS (from EtiosTemplate) */}
      <TravelTips location={location} vehicle={vehicleData} />

      {/* TRAVEL PLANNING (from EtiosTemplate) */}
      {/* <TravelPlanning location={location} vehicle={vehicleData} /> */}

      <RouteTripPlanning
        from={route.from}
        to={route.to}
        vehicleName="Toyota Etios"
        summary={`A Toyota Etios cab from ${route.from} to ${route.to} is suited to a small group that wants a private ride and enclosed luggage storage for the journey.`}
        planningPoint="The listed Etios capacity is four passengers with space for three luggage pieces. Share your group size and bag count before confirming, especially when travelling with full-size suitcases."
      />

      {/* 6. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="etios"
        vehicleName="Toyota Etios"
      />

      {/* 8. RELATED REGIONAL CITY ROUTES (matched by destination city's state/region) */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="etios"
        vehicleName="Toyota Etios"
      />

      {/* 8. TESTIMONIALS */}
      <CabTestimonials />

      {/* 9. FAQS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Toyota Etios Taxi FAQs ({route.from} to {route.to})
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

      {/* 7. POPULAR CITY ROUTES (from data/masterRoutes.ts) */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug="etios"
        vehicleName="Etios"
      />

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 mb-2">
              Toyota Reliability Guaranteed
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Book Toyota Etios from {route.from} to {route.to}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              Sanitized AC cabin, verified chauffeur, flat {vehicleData.price} rate, and 24x7 phone coordinator assistance.
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

export default RouteEtiosPage;
