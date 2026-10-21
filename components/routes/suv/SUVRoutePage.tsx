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
  CarFront,
  Star,
} from "lucide-react";
import type { ParsedRoute } from "@/lib/parse-route";
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import { vehicles } from "@/data/vehicles";
import { masterRoutes } from "@/data/masterRoutes";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RelatedCityRoutes from "@/components/cab/RelatedCityRoutes";
import CabTestimonials from "@/components/cab/CabTestimonials";
import VehicleRouteSeoGuide from "@/components/routes/vehicles/VehicleRouteSeoGuide";
import RouteTripPlanning from "@/components/routes/vehicles/RouteTripPlanning";
import { RouteInfo } from "@/components/cab-page/RouteInfo";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";

type RouteProp = ParsedRoute | ParsedRouteDetail | any;

export function SUVRoutePage({ route }: { route: RouteProp }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Normalize origin & destination names
  const rawFrom = String(route.fromName || route.from || "Uttarakhand").replace(/^route[-_\s]+/i, "");
  const rawTo = String(route.toName || route.to || "Rohtak").replace(/^route[-_\s]+/i, "");

  const capitalize = (s: string) =>
    s
      .replace(/-/g, " ")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");

  const fromName = capitalize(rawFrom);
  const toName = capitalize(rawTo);

  const fromSlug = (route.fromSlug || fromName.toLowerCase().replace(/[^a-z0-9]+/g, "-")).replace(/^route-/, "");
  const toSlug = (route.toSlug || toName.toLowerCase().replace(/[^a-z0-9]+/g, "-")).replace(/^route-/, "");

  // Fetch route details from masterRoutes
  const masterRoute = masterRoutes.find(
    (r) =>
      (r.from.toLowerCase() === fromName.toLowerCase() && r.to.toLowerCase() === toName.toLowerCase()) ||
      (r.to.toLowerCase() === fromName.toLowerCase() && r.from.toLowerCase() === toName.toLowerCase())
  );

  const distanceDisplay = masterRoute?.distance
    ? typeof masterRoute.distance === "number"
      ? `${masterRoute.distance} km`
      : masterRoute.distance
    : route.distance || "240 km";

  const durationDisplay = masterRoute?.duration || route.travelTime || route.duration || "4 hr 30 min";
  const highwayDisplay = masterRoute?.highway || "National Highway & Expressway Corridor";

  // Vehicle data lookup
  const ertigaData = vehicles.find((v) => v.slug === "ertiga") || {
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

  const innovaData = vehicles.find((v) => v.slug === "innova-crysta") || {
    name: "Innova Crysta",
    slug: "innova-crysta",
    image: "/cabs/innova.webp",
    price: "₹18/km",
    seats: 7,
    doors: 4,
    luggage: 5,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "SUV" as const,
  };

  // General SUV vehicle data for template props
  const vehicleData = {
    name: "SUV Taxi",
    slug: "suv-taxi",
    image: "/cabs/ertiga.webp",
    price: "₹13/km",
    seats: 7,
    doors: 4,
    luggage: 4,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "SUV" as const,
  };

  // Pricing calculations
  const distNum = parseFloat(String(distanceDisplay).replace(/[^0-9.]/g, "")) || 240;
  const ertigaRate = parseFloat(ertigaData.price.replace(/[^0-9.]/g, "")) || 13;
  const innovaRate = parseFloat(innovaData.price.replace(/[^0-9.]/g, "")) || 18;

  const ertigaOneWayFare = Math.round(distNum * 1.5 * ertigaRate + 500);
  const ertigaRoundTripFare = Math.round(distNum * 3 * ertigaRate + 500);
  const innovaOneWayFare = Math.round(distNum * 1.5 * innovaRate + 500);
  const innovaRoundTripFare = Math.round(distNum * 3 * innovaRate + 500);

  const oneWayFare = ertigaOneWayFare;
  const roundTripFare = ertigaRoundTripFare;

  const location = {
    slug: `${fromSlug}-to-${toSlug}`,
    name: `${fromName} to ${toName}`,
  };

  // WhatsApp Booking URLs
  const whatsappBookingUrl = `https://wa.me/919818022687?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book an SUV Taxi (Ertiga / Innova Crysta) from ${fromName} to ${toName} (${distanceDisplay}, Est. starting fare ₹${oneWayFare.toLocaleString("en-IN")}). Please confirm availability.`
  )}`;

  const ertigaBookingUrl = `https://wa.me/919818022687?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book Maruti Ertiga 6-Seater SUV from ${fromName} to ${toName} (${distanceDisplay}, Est. fare ₹${ertigaOneWayFare.toLocaleString("en-IN")}). Please confirm availability.`
  )}`;

  const innovaBookingUrl = `https://wa.me/919818022687?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book Toyota Innova Crysta 7-Seater SUV from ${fromName} to ${toName} (${distanceDisplay}, Est. fare ₹${innovaOneWayFare.toLocaleString("en-IN")}). Please confirm availability.`
  )}`;

  // Structured route object for SEO Guide
  const routeDetail: ParsedRouteDetail = {
    slug: `${fromSlug}-to-${toSlug}-suv-taxi`,
    canonicalSlug: `${fromSlug}-to-${toSlug}-suv-taxi`,
    from: fromName,
    to: toName,
    vehicle: "SUV Taxi",
    vehicleSlug: "suv-taxi",
    distance: distanceDisplay,
    duration: durationDisplay,
    fare: `₹${oneWayFare.toLocaleString("en-IN")}`,
    highway: highwayDisplay,
    title: `${fromName} to ${toName} SUV Taxi`,
    description: route.description || `Book comfortable 6-7 seater SUV taxi from ${fromName} to ${toName} with verified chauffeurs.`,
    pickupPoints: [],
    dropPoints: [],
    vehicleOptions: [],
  };

  const faqs = [
    {
      q: `How many passengers can travel in an SUV taxi from ${fromName} to ${toName}?`,
      a: `Our SUV fleet includes the 6-seater Maruti Ertiga (up to 6 passengers + 1 driver) and the 7-seater Toyota Innova Crysta (up to 7 passengers + 1 driver with luxury middle captain seats).`,
    },
    {
      q: `What is the outstation SUV taxi fare from ${fromName} to ${toName}?`,
      a: `SUV fares start at flat ₹13/km for Maruti Ertiga (estimated one-way drop starting @ ₹${ertigaOneWayFare.toLocaleString("en-IN")}) and ₹18/km for Toyota Innova Crysta (estimated one-way drop starting @ ₹${innovaOneWayFare.toLocaleString("en-IN")}). Fares include fuel and driver allowance.`,
    },
    {
      q: `How much luggage can fit inside an SUV taxi on this route?`,
      a: `An SUV easily accommodates 4 to 5 large trolley suitcases plus 3 carry-on backpacks. If traveling with 4-5 passengers, the third-row seats can be partially folded to provide up to 550 litres of cargo space. Waterproof rooftop luggage carriers are also available on request.`,
    },
    {
      q: `Is the SUV taxi available for one-way drop from ${fromName} to ${toName}?`,
      a: `Yes, we provide point-to-point one-way outstation drops from ${fromName} to ${toName} with zero return fare charges. You only pay for the one-side journey.`,
    },
    {
      q: `Are toll taxes and state border permits included in the fare quote?`,
      a: `Vehicle rental, fuel, and driver allowances are included in your base booking quote. Highway expressway tolls, state entry border permits, and parking fees are paid at actuals during the journey.`,
    },
    {
      q: `How can I book an urgent or early morning SUV taxi from ${fromName} to ${toName}?`,
      a: `You can instantly book via WhatsApp or call our 24x7 booking desk at +91-9818022687. We confirm driver assignment and vehicle registration details within 15 minutes.`,
    },
  ];

  // Schema Markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${fromName} to ${toName} SUV Taxi Service`,
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
      telephone: "+91-8377809809",
      url: "https://www.noidacab.com",
    },
    serviceType: "Outstation SUV Taxi Service",
    areaServed: [
      { "@type": "City", name: fromName },
      { "@type": "City", name: toName },
    ],
    offers: {
      "@type": "Offer",
      price: String(oneWayFare),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD Schemas for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }}
      />

      {/* 1. BREADCRUMBS */}
      <nav className="border-b border-gray-100 bg-slate-50 py-3 text-xs sm:text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span>/</span>
          <Link href="/cab" className="hover:text-amber-600">Cab Routes</Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">{fromName} to {toName} SUV Taxi</span>
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
                <span>Prime 6-7 Seater SUVs • Ertiga & Innova Crysta • From ₹13/km</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {fromName} to {toName}{" "}
                <span className="text-amber-600">SUV Taxi</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Experience superior family and group travel comfort from {fromName} to {toName} via {highwayDisplay}. Choose between economical Maruti Ertiga and executive Toyota Innova Crysta with dual AC vents, spacious 3-row seating, generous luggage boot, and verified expressway chauffeurs.
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
                  <span>Book SUV Taxi on WhatsApp</span>
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

            {/* Right Card: Vehicle Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50 flex items-center justify-center border border-amber-100">
                  <Image
                    src="/cabs/ertiga.webp"
                    alt={`${fromName} to ${toName} SUV Taxi`}
                    width={420}
                    height={260}
                    className="object-contain max-h-48 drop-shadow-md hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
                    From ₹13/km
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Users className="h-4 w-4 text-amber-600" /> Seating Capacity
                    </span>
                    <strong className="text-gray-900 font-bold">6-7 Passengers + 1 Chauffeur</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Briefcase className="h-4 w-4 text-amber-600" /> Luggage Space
                    </span>
                    <strong className="text-gray-900 font-bold">4-5 Large Suitcases (Expandable Boot)</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Air Conditioning
                    </span>
                    <strong className="text-gray-900 font-bold">Dual & Triple Roof AC Louvers</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Safety
                    </span>
                    <strong className="text-gray-900 font-bold">Dual Airbags, ABS with EBD & All-India Permit</strong>
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
              {fromName} to {toName} SUV Engineering & Comfort Highlights
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Award className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">6-7 Seater Flexibility</h3>
              <p className="text-xs text-gray-600 mt-1">Modular 3-row seating designed for joint families and group travel with abundant legroom.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Dual Roof AC Vents</h3>
              <p className="text-xs text-gray-600 mt-1">Independent roof blowers cooling rear rows within minutes even during hot midday drives.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Heavy-Duty Suspension</h3>
              <p className="text-xs text-gray-600 mt-1">200mm+ road clearance effortlessly handling highway expansion joints and rough road patches.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Economical Per-Seat Tariff</h3>
              <p className="text-xs text-gray-600 mt-1">Save up to 40% compared to booking two separate sedans while keeping the entire group together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE SUMMARY */}
      {/* <VehicleSummary location={location} vehicle={vehicleData} /> */}

      {/* ROUTE INFO */}
      {/* <RouteInfo location={location} vehicle={vehicleData} /> */}

      {/* 4. SUV FLEET SHOWCASE: ERTIGA VS INNOVA CRYSTA */}
      <section className="bg-slate-50 py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">CHOOSE YOUR SUV</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Select Your SUV Cab for {fromName} to {toName}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Compare our most popular 6 and 7-seater vehicles tailored to your passenger count and luggage needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Ertiga Card */}
            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="relative h-52 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
                  <Image
                    src={ertigaData.image}
                    alt={`${fromName} to ${toName} Maruti Ertiga`}
                    width={380}
                    height={220}
                    className="object-contain max-h-44 hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                    {ertigaData.price} Base Tariff
                  </span>
                  <span className="absolute top-4 left-4 rounded-full bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 text-xs font-bold">
                    6 Passengers
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black text-gray-900">Maruti Suzuki Ertiga</h3>
                      <p className="text-xs text-gray-500 mt-0.5">Smart Hybrid • Family Favorite</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-500 uppercase">Est. One-Way</p>
                      <p className="text-xl font-black text-amber-600">₹{ertigaOneWayFare.toLocaleString("en-IN")}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed">
                    India&apos;s best-selling 6-seater MPV. Features 2 front bucket seats, sliding second row, and split reclining third row. Ideal for budget-conscious families.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-gray-700 bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                    <div><strong>Seats:</strong> 6 Passengers + 1 Chauffeur</div>
                    <div><strong>Boot:</strong> 3-4 Suitcases (Foldable 3rd Row)</div>
                    <div><strong>AC:</strong> Dual Roof AC Blowers</div>
                    <div><strong>Best For:</strong> Family Outings & Sightseeing</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={ertigaBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-amber-500 transition"
                >
                  <Send className="h-4 w-4" />
                  <span>Book Maruti Ertiga on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Innova Crysta Card */}
            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="relative h-52 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-4">
                  <Image
                    src={innovaData.image}
                    alt={`${fromName} to ${toName} Toyota Innova Crysta`}
                    width={380}
                    height={220}
                    className="object-contain max-h-44 hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                    {innovaData.price} Base Tariff
                  </span>
                  <span className="absolute top-4 left-4 rounded-full bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 text-xs font-bold">
                    7 Passengers (Captain Seats)
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black text-gray-900">Toyota Innova Crysta</h3>
                      <p className="text-xs text-gray-500 mt-0.5">VIP Executive • Highway Legend</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-500 uppercase">Est. One-Way</p>
                      <p className="text-xl font-black text-amber-600">₹{innovaOneWayFare.toLocaleString("en-IN")}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed">
                    The undisputed king of Indian highways. Equipped with 2.4L diesel torque, middle-row captain recliner armrests, heavy acoustic isolation, and superior expressway dampening.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-gray-700 bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                    <div><strong>Seats:</strong> 7 Passengers + 1 Chauffeur</div>
                    <div><strong>Boot:</strong> 5+ Large Bags (Rooftop Carrier Avail.)</div>
                    <div><strong>AC:</strong> Triple-Zone Auto Digital AC</div>
                    <div><strong>Best For:</strong> Corporate VIPs & Long Trips</div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={innovaBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white shadow-md hover:bg-gray-800 transition"
                >
                  <Send className="h-4 w-4 text-amber-400" />
                  <span>Book Innova Crysta on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE SUV FOR THIS ROUTE */}
      {/* <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">SMART GROUP TRAVEL</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Why Book an SUV Taxi from {fromName} to {toName}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Travel Together Without Splitting Cars
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Save up to 40% on overall toll, fuel, and driver charges by booking a single 6-7 seater SUV instead of two small sedans. Enjoy shared conversations, snacks, and music on the road.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Generous Luggage Capacity
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Foldable third-row seats allow flexible cargo expansion for up to 5 large trolley suitcases. Waterproof rooftop luggage carriers are also available on request.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Smooth Ride on {highwayDisplay}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                High ground clearance and long-travel shock absorbers easily soak up expressway expansion joints, bridge dips, and rural patches without cabin jerk.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Verified Commercial Highway Chauffeurs
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Experienced, polite drivers with verified commercial badges and in-depth knowledge of rest stops, hygienic highway food plazas, and safe speeds.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* 6. TRANSPARENT FARE DETAILS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FARE BREAKDOWN</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Estimated SUV Taxi Fares ({fromName} to {toName})
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">ONE-WAY DROP</span>
              <p className="text-3xl font-black text-gray-900 mt-1">₹{oneWayFare.toLocaleString("en-IN")}</p>
              <p className="text-xs text-gray-500 mt-1">Based on ~{distanceDisplay} distance @ ₹13/km base tariff</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Fuel, vehicle rent & driver allowance included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Punctual doorstep pickup anywhere in {fromName}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Zero return travel surcharge</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Innova Crysta option available @ ₹18/km</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50/40 p-6 shadow-xs">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">ROUND TRIP / MULTI-DAY</span>
              <p className="text-3xl font-black text-amber-900 mt-1">₹{roundTripFare.toLocaleString("en-IN")}</p>
              <p className="text-xs text-amber-700 mt-1">2-Way return trip @ ₹13/km base tariff</p>
              <ul className="mt-4 space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Vehicle dedicated exclusively to your group</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Local sightseeing & outstation transfers in {toName}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Flexible multiple day stops and return journey</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tolls, state taxes & parking extra at actuals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs location={location} vehicle={vehicleData} />

      {/* WHAT'S INCLUDED */}
      <WhatsIncluded location={location} vehicle={vehicleData} />

      {/* BOOKING PROCESS */}
      <BookingProcess location={location} vehicle={vehicleData} />

      {/* TRAVEL TIPS */}
      <TravelTips location={location} vehicle={vehicleData} />

      {/* TRAVEL PLANNING */}
      {/* <TravelPlanning location={location} vehicle={vehicleData} /> */}

      {/* ROUTE TRIP PLANNING */}
      <RouteTripPlanning
        from={fromName}
        to={toName}
        vehicleName="SUV Taxi"
        summary={`An SUV taxi from ${fromName} to ${toName} provides high-clearance comfort for groups of up to 6 or 7 passengers with luggage, offering an ideal setup for family trips and intercity corporate runs.`}
        planningPoint="When traveling with 6 or 7 full adults, notify us in advance regarding heavy luggage bags so we can provide an SUV equipped with a rooftop luggage carrier."
      />

      {/* 7. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={routeDetail}
        vehicleSlug="suv-taxi"
        vehicleName="SUV Taxi (Ertiga & Innova Crysta)"
      />

      {/* 8. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={toName}
        vehicleSlug="suv-taxi"
        vehicleName="SUV Taxi"
      />

      {/* 9. TESTIMONIALS */}
      <CabTestimonials />

      {/* 10. FAQS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              {fromName} to {toName} SUV Taxi FAQs
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

      {/* 11. POPULAR CITY ROUTES */}
      <PopularCityRoutes
        cityName={fromName}
        vehicleSlug="suv-taxi"
        vehicleName="SUV Taxi"
      />

      {/* 12. BOTTOM CONVERSION CTA */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 mb-2">
              Spacious & Sanitized 6-7 Seater Cabs
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Book SUV Taxi from {fromName} to {toName}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              Sanitized AC cabin, verified chauffeur, transparent rates from ₹13/km, and 24x7 phone coordinator assistance.
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

export default SUVRoutePage;