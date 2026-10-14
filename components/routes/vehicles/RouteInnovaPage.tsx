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
import { RouteInfo } from "@/components/cab-page/RouteInfo";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";
import { JourneyInfo } from "@/components/cab-page/JourneyInfo";
import { PickupDropLocations } from "@/components/cab-page/PickupDropLocations";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import RouteTripPlanning from "@/components/routes/vehicles/RouteTripPlanning";

export function RouteInnovaPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Innova Crysta data from data/vehicles.ts
  const vehicleData = vehicles.find((v) => v.slug === "innova-crysta") || {
    name: "Innova Crysta",
    slug: "innova-crysta",
    image: "/cabs/innova.webp",
    price: "₹16/km",
    seats: 6,
    doors: 4,
    luggage: 4,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "SUV" as const,
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

  const ratePerKm = parseFloat(vehicleData.price.replace(/[^0-9.]/g, "")) || 16;
  const distNum = parseFloat(String(distanceDisplay).replace(/[^0-9.]/g, "")) || 180;
  const oneWayFare = Math.round(distNum * 1.5 * ratePerKm + 500);
  const roundTripFare = Math.max(
    Math.round(distNum * 3 * ratePerKm + 500),
    Math.round(oneWayFare * 1.5)
  );

  const fromSlug = route.from.toLowerCase().replace(/^route-/, "").replace(/[^a-z0-9]+/g, "-");
  const toSlug = route.to.toLowerCase().replace(/^route-/, "").replace(/[^a-z0-9]+/g, "-");

  const location = {
    slug: (route.canonicalSlug || `${fromSlug}-to-${toSlug}`).replace(/^(route[-/])+/g, ""),
    name: `${route.from.replace(/^Route\s+/i, "")} to ${route.to}`,
  };

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book Toyota Innova Crysta from ${route.from} to ${route.to} (${distanceDisplay}, Est fare ₹${oneWayFare}). Please confirm availability.`
  )}`;

  // Alternative vehicles from data/vehicles.ts
  const alternativeVehicles = vehicles
    .filter((v) => v.slug !== "innova-crysta")
    .slice(0, 6);

  const faqs = [
    {
      q: `How many passengers can travel in Toyota Innova Crysta from ${route.from} to ${route.to}?`,
      a: "Our Toyota Innova Crysta comfortably seats 6 passengers plus 1 chauffeur, with plush captain recliner seats in the middle row.",
    },
    {
      q: `What is the outstation per-km rate for Innova Crysta from ${route.from} to ${route.to}?`,
      a: `Innova Crysta is billed at flat ${vehicleData.price} for outstation travel, covering vehicle rental, fuel, and chauffeur allowances. Estimated one-way trip fare is ₹${oneWayFare.toLocaleString("en-IN")}.`,
    },
    {
      q: "Can Innova Crysta accommodate heavy luggage?",
      a: `Yes, the boot easily accommodates ${vehicleData.luggage} large trolley suitcases. The rear row can also be folded for excess baggage.`,
    },
    {
      q: "Is Innova Crysta available for one-way point-to-point drop?",
      a: "Yes! We offer point-to-point one-way Innova drops with zero return travel charges.",
    },
    {
      q: "Are the vehicles clean and sanitized before departure?",
      a: "Every Innova Crysta undergoes vacuum cleaning, upholstery sanitization, and AC filter inspection before every dispatch.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. BREADCRUMBS */}
      <nav className="border-b border-gray-100 bg-slate-50 py-3 text-xs sm:text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span>/</span>
          <Link href="/cab" className="hover:text-amber-600">Cab Routes</Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">{route.from} to {route.to} Innova Crysta</span>
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
                <span>Luxury 6-7 Seater MUV • {vehicleData.price}</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600">Toyota Innova Crysta Taxi</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Experience supreme highway comfort from {route.from} to {route.to} via {highwayDisplay}. Relax in captain recliner seats with dual digital climate control, expansive luggage room, and verified expressway chauffeurs.
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
                  <span>Book Innova Crysta on WhatsApp</span>
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
                    alt={`${route.from} to ${route.to} Toyota Innova Crysta`}
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
                    <strong className="text-gray-900 font-bold">{vehicleData.luggage} Large Trolley Bags</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Air Conditioning
                    </span>
                    <strong className="text-gray-900 font-bold">Dual Digital Climate Control</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Safety
                    </span>
                    <strong className="text-gray-900 font-bold">ABS, 7 Airbags & Vehicle Stability Control</strong>
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
              Toyota Innova Crysta Engineering Highlights
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Award className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Captain Recliner Seats</h3>
              <p className="text-xs text-gray-600 mt-1">Plush individual middle-row captain seats with fold-down armrests and deep reclining angles.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Dual Digital AC</h3>
              <p className="text-xs text-gray-600 mt-1">Digital climate control with individual roof-mounted vents for both second and third rows.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">2.4L Diesel Engine</h3>
              <p className="text-xs text-gray-600 mt-1">150 BHP highway powerhouse engineered for effortless high-speed cruising and overtaking.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">High-Stability Suspension</h3>
              <p className="text-xs text-gray-600 mt-1">Independent coil spring front suspension that glides smoothly over road potholes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE INFO (from InnovaTemplate) */}
      {/* <RouteInfo location={location} vehicle={vehicleData} /> */}

      {/* VEHICLE SUMMARY (from InnovaTemplate) */}
      <VehicleSummary location={location} vehicle={vehicleData} />

      {/* 4. WHY CHOOSE INNOVA CRYSTA FOR THIS ROUTE */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">EXECUTIVE COMFORT</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Why Book Innova Crysta from {route.from} to {route.to}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Unrivaled Long-Distance Comfort
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Long highway runs on {highwayDisplay} feel effortless. Innova Crysta cushions every bump, preventing travel fatigue for elderly relatives and kids.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Executive Family & Corporate Choice
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                The benchmark for corporate delegate transit, airport drop-offs, and luxury family vacations across North India.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Expansive Baggage Capacity
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Stores {vehicleData.luggage} large suitcases comfortably with space left over for backpacks and duty-free bags.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Highway Verified Chauffeur
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Handled by experienced highway chauffeurs with verified background checks and polite demeanor.
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
              Estimated Innova Crysta Fares ({route.from} to {route.to})
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Dedicated vehicle throughout the trip</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Local sightseeing & outstation transfers in {route.to}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tolls, state taxes & parking extra at actuals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* JOURNEY INFO (from InnovaTemplate) */}
      <JourneyInfo location={location} vehicle={vehicleData} />

      {/* PICKUP & DROP LOCATIONS (from InnovaTemplate) */}
      <PickupDropLocations location={location} vehicle={vehicleData} />

      {/* WHY CHOOSE US */}
      <WhyChooseUs location={location} vehicle={vehicleData} />

      {/* WHAT'S INCLUDED (from InnovaTemplate) */}
      <WhatsIncluded location={location} vehicle={vehicleData} />

      {/* BOOKING PROCESS (from InnovaTemplate) */}
      <BookingProcess location={location} vehicle={vehicleData} />

      {/* TRAVEL TIPS (from InnovaTemplate) */}
      <TravelTips location={location} vehicle={vehicleData} />

      {/* ROUTE TRIP PLANNING */}
      <RouteTripPlanning
        from={route.from}
        to={route.to}
        vehicleName="Toyota Innova Crysta"
        summary={`An Innova Crysta taxi from ${route.from} to ${route.to} delivers supreme outstation comfort for up to 6-7 passengers, featuring plush middle captain recliners, dual digital climate control, and generous boot space for 4-5 large bags.`}
        planningPoint={`The listed Toyota Innova Crysta capacity is 6 passengers plus 1 chauffeur with ample luggage space. For long highway drives via ${highwayDisplay}, advance doorstep pickup scheduling ensures punctual departure and zero waiting delays.`}
      />


      {/* 6. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="innova-crysta"
        vehicleName="Toyota Innova Crysta"
      />

      

      {/* 8. RELATED REGIONAL CITY ROUTES (matched by destination city's state/region) */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="innova-crysta"
        vehicleName="Toyota Innova Crysta"
      />

      {/* 7. FLEET OPTIONS (from data/vehicles.ts) */}
      {/* <section className="bg-white/95 py-12 border-b border-gray-200">
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

      {/* 8. TESTIMONIALS */}
      <CabTestimonials />

      {/* 9. FAQS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Innova Crysta Taxi FAQs ({route.from} to {route.to})
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
        vehicleSlug="innova-crysta"
        vehicleName="Innova Crysta"
      />

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 mb-2">
              Luxury Outstation Cab
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Book Toyota Innova Crysta from {route.from} to {route.to}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              Sanitized luxury cabin, professional chauffeur, flat {vehicleData.price} rate, and 24x7 phone coordinator assistance.
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

export default RouteInnovaPage;
