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

export function RouteErtigaPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Maruti Ertiga data from data/vehicles.ts
  const vehicleData = vehicles.find((v) => v.slug === "ertiga") || {
    name: "Ertiga",
    slug: "ertiga",
    image: "/cabs/ertiga.webp",
    price: "₹13/km",
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

  const ratePerKm = parseFloat(vehicleData.price.replace(/[^0-9.]/g, "")) || 13;
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
    `Hello NoidaCab, I want to book Maruti Ertiga from ${route.from} to ${route.to} (${distanceDisplay}, Est fare ₹${oneWayFare}). Please confirm availability.`
  )}`;

  // Alternative vehicles from data/vehicles.ts
  const alternativeVehicles = vehicles
    .filter((v) => v.slug !== "ertiga")
    .slice(0, 6);

  const faqs = [
    {
      q: `How many passengers can sit in Maruti Ertiga from ${route.from} to ${route.to}?`,
      a: "Maruti Ertiga accommodates up to 6 passengers plus 1 driver, with flexible second and third row split seating.",
    },
    {
      q: `What is the outstation fare for Maruti Ertiga from ${route.from} to ${route.to}?`,
      a: `Ertiga is billed at flat ${vehicleData.price} for outstation travel, making it India's most budget-friendly 6-seater family SUV. Estimated one-way trip fare is ₹${oneWayFare.toLocaleString("en-IN")}.`,
    },
    {
      q: "How much luggage can an Ertiga carry?",
      a: `With all seats up, it holds 2-3 duffels. By folding the third-row 50:50 split seats, it holds ${vehicleData.luggage} large trolley suitcases easily.`,
    },
    {
      q: "Does Ertiga have roof-mounted AC for rear passengers?",
      a: "Yes, our Ertiga cabs are equipped with roof-mounted 2nd-row AC blowers with 3-speed fan control to ensure all rows remain cool.",
    },
    {
      q: "Can we hire Ertiga for outstation round trips with family?",
      a: "Yes, Ertiga is our most popular family outstation car for weekend getaways, weddings, and hill stations.",
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
          <span className="font-semibold text-gray-800">{route.from} to {route.to} Ertiga Taxi</span>
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
                <span>6 Seater Budget Family SUV • {vehicleData.price}</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600">Maruti Ertiga Taxi</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                The most economical 6-seater family SUV for outstation trips from {route.from} to {route.to} via {highwayDisplay}. Enjoy dual roof AC blowers, smooth highway cruising, and verified professional chauffeurs.
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
                  <span>Book Ertiga Taxi on WhatsApp</span>
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
                    alt={`${route.from} to ${route.to} Maruti Ertiga`}
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
                    <strong className="text-gray-900 font-bold">{vehicleData.luggage} Suitcases (Split-Fold Boot)</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Air Conditioning
                    </span>
                    <strong className="text-gray-900 font-bold">Dual Roof AC Vents with 3 Speeds</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Safety
                    </span>
                    <strong className="text-gray-900 font-bold">ABS with EBD & Dual Front Airbags</strong>
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
              Maruti Ertiga Highlights & Cabin Comfort
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Award className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">6-Passenger Versatility</h3>
              <p className="text-xs text-gray-600 mt-1">Comfortably seats 6 adults across three rows with reclining second-row seats.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Roof AC Blowers</h3>
              <p className="text-xs text-gray-600 mt-1">Roof-mounted vents channel cool air directly to the rear rows for all-passenger relief.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">1.5L K-Series Engine</h3>
              <p className="text-xs text-gray-600 mt-1">Reliable, fuel-efficient highway engine delivering a silent, vibration-free ride.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Best Value 6-Seater</h3>
              <p className="text-xs text-gray-600 mt-1">At ₹13/km, it delivers unmatched economy for 5-6 passengers traveling together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE INFO (from ErtigaTemplate) */}
      {/* <RouteInfo location={location} vehicle={vehicleData} /> */}

      {/* JOURNEY INFO (from ErtigaTemplate) */}
      <JourneyInfo location={location} vehicle={vehicleData} />
      

      
      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Ertiga Pickup and Drop: {route.from} to {route.to}</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-amber-400 pl-4">
              <h3 className="font-bold text-gray-900">Pickup in {route.from}</h3>
              <p className="mt-2 leading-6 text-gray-600">Share your complete pickup address or map pin, preferred time and passenger count when requesting the booking.</p>
            </div>
            <div className="border-l-2 border-slate-400 pl-4">
              <h3 className="font-bold text-gray-900">Drop in {route.to}</h3>
              <p className="mt-2 leading-6 text-gray-600">Provide your exact destination and any planned stops before confirming the fare and trip details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ERTIGA FOR THIS ROUTE */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FAMILY COMFORT</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Why Book Maruti Ertiga from {route.from} to {route.to}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Budget-Friendly Family SUV
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Save money without sacrificing space. Ertiga offers 6 comfortable seats at just ₹13/km, saving you 20-30% compared to Innova cabs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Dual AC Cooling For Every Row
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Independent rear roof blowers keep kids and grandparents in the back rows completely comfortable throughout the {durationDisplay} journey.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Flexible Split-Folding Boot
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Need more luggage space? The third row folds flat with a single lever, converting into a huge 550-litre cargo floor.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Verified Highway Chauffeur
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Handled by courteous, verified commercial drivers experienced on {highwayDisplay} and North Indian expressways.
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
              Estimated Maruti Ertiga Fares ({route.from} to {route.to})
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Zero return trip fee</li>
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

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">What to Expect With Your Ertiga Booking</h2>
          <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <p className="border-t border-gray-200 pt-4 text-gray-700">Maruti Ertiga for the confirmed route and trip type</p>
            <p className="border-t border-gray-200 pt-4 text-gray-700">Driver service for the duration of the booked journey</p>
            <p className="border-t border-gray-200 pt-4 text-gray-700">Pickup and drop at the agreed addresses</p>
            <p className="border-t border-gray-200 pt-4 text-gray-700">Fare and applicable trip charges confirmed before booking</p>
          </div>
          <p className="mt-5 text-sm leading-6 text-gray-600">Confirm tolls, state taxes, parking, waiting time and any minimum-kilometre terms in your final quote.</p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">How to Book a Maruti Ertiga</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            <li className="border-t-2 border-amber-400 bg-white p-5">
              <span className="text-xs font-bold text-amber-700">STEP 1</span>
              <h3 className="mt-2 font-bold text-gray-900">Share your trip details</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">Tell us your pickup in {route.from}, destination in {route.to}, date, passenger count and luggage needs.</p>
            </li>
            <li className="border-t-2 border-amber-400 bg-white p-5">
              <span className="text-xs font-bold text-amber-700">STEP 2</span>
              <h3 className="mt-2 font-bold text-gray-900">Review and confirm the quote</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">Check the route, one-way or round-trip terms and any applicable charges before confirming.</p>
            </li>
            <li className="border-t-2 border-amber-400 bg-white p-5">
              <span className="text-xs font-bold text-amber-700">STEP 3</span>
              <h3 className="mt-2 font-bold text-gray-900">Meet your driver</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">Use the driver and vehicle details shared with your booking to meet the Ertiga at the agreed pickup point.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Travel Tips for Your {route.from} to {route.to} Ertiga Trip</h2>
          <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Allow extra travel time for traffic and road conditions along the route.</li>
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Share exact pickup and drop addresses to help confirm the route and estimate.</li>
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Tell us your passenger and luggage count so the seating and boot arrangement can be checked.</li>
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Review the final fare, trip terms and applicable charges before you confirm.</li>
          </ul>
        </div>
      </section>

      {/* VEHICLE SUMMARY (from ErtigaTemplate) */}
      {/* <VehicleSummary location={location} vehicle={vehicleData} /> */}


      {/* PICKUP & DROP LOCATIONS (from ErtigaTemplate) */}
      <PickupDropLocations location={location} vehicle={vehicleData} />

      {/* WHY CHOOSE US (from ErtigaTemplate) */}
      <WhyChooseUs location={location} vehicle={vehicleData} />

      {/* WHAT'S INCLUDED (from ErtigaTemplate) */}
      <WhatsIncluded location={location} vehicle={vehicleData} />

      {/* BOOKING PROCESS (from ErtigaTemplate) */}
      <BookingProcess location={location} vehicle={vehicleData} />

      {/* TRAVEL TIPS (from ErtigaTemplate) */}
      <TravelTips location={location} vehicle={vehicleData} />

      {/* TRAVEL PLANNING (from ErtigaTemplate) */}
      {/* <TravelPlanning location={location} vehicle={vehicleData} /> */}

      <RouteTripPlanning
        from={route.from}
        to={route.to}
        vehicleName="Maruti Ertiga"
        summary={`An Ertiga cab from ${route.from} to ${route.to} gives families and small groups room to travel together, with three seating rows for up to six passengers.`}
        planningPoint="The listed capacity is six passengers and four luggage pieces. If all seats will be occupied, tell us how many bags you are carrying so we can confirm the available luggage space."
      />

      {/* 6. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="ertiga"
        vehicleName="Maruti Suzuki Ertiga"
      />

      

      {/* 8. RELATED REGIONAL CITY ROUTES (matched by destination city's state/region) */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="ertiga"
        vehicleName="Maruti Ertiga"
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

      {/* 8. TESTIMONIALS */}
      <CabTestimonials />

      {/* 9. FAQS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Maruti Ertiga Taxi FAQs ({route.from} to {route.to})
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
        vehicleSlug="ertiga"
        vehicleName="Ertiga"
      />

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 mb-2">
              Economical 6-Seater SUV
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Book Maruti Ertiga from {route.from} to {route.to}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              Clean sanitized cabin, verified chauffeur, transparent {vehicleData.price} billing, and 24x7 phone coordinator assistance.
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

export default RouteErtigaPage;
