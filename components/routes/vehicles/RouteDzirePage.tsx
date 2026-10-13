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

export function RouteDzirePage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Maruti Dzire data from data/vehicles.ts
  const vehicleData = vehicles.find((v) => v.slug === "dzire") || {
    name: "Dzire",
    slug: "dzire",
    image: "/cabs/dzire.webp",
    price: "₹10/km",
    seats: 4,
    doors: 4,
    luggage: 2,
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
    `Hello NoidaCab, I want to book Maruti Dzire from ${route.from} to ${route.to} (${distanceDisplay}, Est fare ₹${oneWayFare}). Please confirm availability.`
  )}`;

  // Alternative vehicles from data/vehicles.ts
  const alternativeVehicles = vehicles
    .filter((v) => v.slug !== "dzire")
    .slice(0, 6);

  const faqs = [
    {
      q: `How many passengers can travel in Maruti Dzire from ${route.from} to ${route.to}?`,
      a: "Maruti Dzire accommodates up to 4 passengers plus 1 driver with generous legroom and rear AC vents.",
    },
    {
      q: `What is the outstation fare for Dzire Taxi from ${route.from} to ${route.to}?`,
      a: `Dzire is billed at flat ${vehicleData.price} for outstation travel, making it the most cost-effective sedan in India. Estimated one-way trip fare is ₹${oneWayFare.toLocaleString("en-IN")}.`,
    },
    {
      q: "How much luggage can fit into the boot of Maruti Dzire?",
      a: `Maruti Dzire features a 378-litre enclosed boot that easily accommodates ${vehicleData.luggage} large trolley suitcases and 2 duffle bags.`,
    },
    {
      q: "Is Dzire Taxi available for one-way outstation drop?",
      a: "Yes! We provide one-way point-to-point drops with zero return fare charges.",
    },
    {
      q: "Are toll taxes and state taxes included in the fare?",
      a: "Vehicle rental, fuel, and driver allowances are included. Highway tolls and state border permits are paid at actuals.",
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
          <span className="font-semibold text-gray-800">{route.from} to {route.to} Dzire Taxi</span>
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
                <span>Prime Sedan Comfort • {vehicleData.price}</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600">Dzire Taxi</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                India&apos;s most reliable and economical sedan for intercity travel from {route.from} to {route.to} via {highwayDisplay}. Enjoy a smooth, fuel-efficient ride with rear AC vents, 378L boot space, and verified professional chauffeurs.
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
                  <span>Book Dzire Taxi on WhatsApp</span>
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
                    alt={`${route.from} to ${route.to} Maruti Dzire`}
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
                    <strong className="text-gray-900 font-bold">{vehicleData.luggage} Large Bags (378L Boot)</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Air Conditioning
                    </span>
                    <strong className="text-gray-900 font-bold">Automatic Climate with Rear AC Vents</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Safety
                    </span>
                    <strong className="text-gray-900 font-bold">Dual Airbags, ABS & Heartect Platform</strong>
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
              Maruti Dzire Engineering & Comfort Highlights
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Award className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">378L Enclosed Boot</h3>
              <p className="text-xs text-gray-600 mt-1">Deep boot volume accommodating large trolley suitcases and duffels safely under cover.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Rear AC Vents</h3>
              <p className="text-xs text-gray-600 mt-1">Dedicated air outlets for rear passengers ensure instant cabin cooling even in peak summer.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Heartect Chassis</h3>
              <p className="text-xs text-gray-600 mt-1">Rigid, lightweight structure delivering supreme fuel economy and high-speed stability.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Flat ₹10/km Rate</h3>
              <p className="text-xs text-gray-600 mt-1">North India&apos;s most economical outstation rate for solo, couple, or small family travel.</p>
            </div>
          </div>
        </div>
      </section>

       {/* VEHICLE SUMMARY (from DzireTemplate) */}
      <VehicleSummary location={location} vehicle={vehicleData} />


      {/* ROUTE INFO (from DzireTemplate) */}
      <RouteInfo location={location} vehicle={vehicleData} />

      {/* 4. WHY CHOOSE DZIRE FOR THIS ROUTE */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">SMART TRAVEL</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Why Book Maruti Dzire from {route.from} to {route.to}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Unbeatable Tariff Economy
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                At just ₹10/km, Maruti Dzire is the smartest choice for personal, corporate, or airport transfers between {route.from} and {route.to}.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Silent Cabin & Smooth Highway Ride
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Cruise effortlessly along {highwayDisplay} with plush cushioned seating, smooth suspension, and zero engine noise.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Doorstep Punctuality Guaranteed
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Your sanitized Dzire arrives at your doorstep in {route.from} on time, backed by 24x7 phone coordinator tracking.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Verified Commercial Driver
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Polite, vetted chauffeurs with extensive intercity expressway experience, ensuring a relaxed journey.
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
              Estimated Maruti Dzire Fares ({route.from} to {route.to})
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Zero return trip fee</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50/40 p-6 shadow-xs">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">ROUND TRIP / MULTI-DAY</span>
              <p className="text-3xl font-black text-amber-900 mt-1">₹{roundTripFare.toLocaleString("en-IN")}</p>
              <p className="text-xs text-amber-700 mt-1">2-Way return trip @ {vehicleData.price} base tariff</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Dedicated car throughout the trip</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Local sightseeing & outstation transfers in {route.to}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tolls, state taxes & parking extra at actuals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
      {/* JOURNEY INFO (from DzireTemplate) */}
      {/* <JourneyInfo location={location} vehicle={vehicleData} /> */}

      {/* PICKUP & DROP LOCATIONS (from DzireTemplate) */}
      {/* <PickupDropLocations location={location} vehicle={vehicleData} /> */}

      {/* WHY CHOOSE US (from DzireTemplate) */}
      <WhyChooseUs location={location} vehicle={vehicleData} />

      {/* WHAT'S INCLUDED (from DzireTemplate) */}
      <WhatsIncluded location={location} vehicle={vehicleData} />

      {/* BOOKING PROCESS (from DzireTemplate) */}
      <BookingProcess location={location} vehicle={vehicleData} />

      {/* TRAVEL TIPS (from DzireTemplate) */}
      <TravelTips location={location} vehicle={vehicleData} />

      {/* TRAVEL PLANNING (from DzireTemplate) */}
      <TravelPlanning location={location} vehicle={vehicleData} />

      <RouteTripPlanning
        from={route.from}
        to={route.to}
        vehicleName="Maruti Dzire"
        summary={`A Dzire taxi from ${route.from} to ${route.to} suits up to four passengers travelling with light luggage, including business trips and direct airport transfers.`}
        planningPoint="The listed Dzire capacity is four passengers with space for two large bags. Share your passenger and luggage count when requesting the fare so the fit can be confirmed."
      />

      {/* 6. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="dzire"
        vehicleName="Maruti Suzuki Dzire"
      />


      {/* 8. RELATED REGIONAL CITY ROUTES (matched by destination city's state/region) */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="dzire"
        vehicleName="Maruti Dzire"
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
              Maruti Dzire Taxi FAQs ({route.from} to {route.to})
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
        vehicleSlug="dzire"
        vehicleName="Dzire"
      />

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 mb-2">
              Best Seller Sedan
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Book Maruti Dzire from {route.from} to {route.to}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              Sanitized AC cabin, professional chauffeur, flat {vehicleData.price} rate, and 24x7 phone coordinator assistance.
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

export default RouteDzirePage;
