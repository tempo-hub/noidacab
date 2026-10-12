"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Sparkles,
  Users,
  Briefcase,
  Snowflake,
  Fuel,
  ChevronDown,
  ArrowRight,
  Send,
  Star,
  Luggage,
  Shield,
  Gauge,
  HelpCircle,
} from "lucide-react";
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";

export interface VehicleRouteConfig {
  vehicleName: string;
  vehicleSlug: string;
  badge: string;
  tagline: string;
  image: string;
  ratePerKm: number;
  seats: number;
  luggageBags: string;
  bootVolume: string;
  acType: string;
  suspension: string;
  engine: string;
  highlights: string[];
  whyChooseTitle: string;
  whyChoose: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

interface Props {
  route: ParsedRouteDetail;
  config: VehicleRouteConfig;
}

export default function VehicleRouteBase({ route, config }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculate realistic distance and fares
  const numDist = parseInt(String(route.distance).replace(/[^0-9]/g, "")) || 180;
  const oneWayFare = Math.round(numDist * 1.5 * config.ratePerKm + 500);
  const roundTripFare = Math.round(numDist * 2 * config.ratePerKm + 1000);

  const fromSlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const toSlug = route.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${config.vehicleName} for route: ${route.from} to ${route.to} (${route.distance}, Estimated ₹${oneWayFare.toLocaleString("en-IN")}). Please confirm availability & driver dispatch.`
  )}`;

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const taxiSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${route.from} to ${route.to} ${config.vehicleName} Taxi`,
    description: `Book comfortable and verified ${config.vehicleName} from ${route.from} to ${route.to}. Rate: ₹${config.ratePerKm}/km. Distance: ${route.distance} (${route.duration}).`,
    url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
    telephone: "+918377809809",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
      telephone: "+918377809809",
    },
    areaServed: [route.from, route.to],
  };

  // Alternative vehicle switcher
  const isGroupVehicle =
    config.vehicleSlug.includes("tempo") ||
    config.vehicleSlug.includes("urbania");

  const alternativeVehicles = (isGroupVehicle
    ? [
        { name: "12-Seater Tempo", slug: "12-seater-tempo-traveller", rate: "₹20/km", seats: "12 Seats" },
        { name: "16-Seater Tempo", slug: "16-seater-tempo-traveller", rate: "₹25/km", seats: "16 Seats" },
        { name: "20-Seater Tempo", slug: "20-seater-tempo-traveller", rate: "₹27/km", seats: "20 Seats" },
        { name: "24-Seater Tempo", slug: "24-seater-tempo-traveller", rate: "₹29/km", seats: "24 Seats" },
        { name: "Luxury Maharaja", slug: "luxury-tempo-traveller", rate: "₹25/km", seats: "12 Seats" },
        { name: "Force Urbania", slug: "urbania-rental", rate: "₹25/km", seats: "12-16 Seats" },
        { name: "Innova Crysta", slug: "innova-crysta-taxi", rate: "₹16/km", seats: "6 Seats" },
      ]
    : [
        { name: "Innova Crysta", slug: "innova-crysta-taxi", rate: "₹16/km", seats: "6 Seats" },
        { name: "Ertiga", slug: "ertiga-taxi", rate: "₹13/km", seats: "6 Seats" },
        { name: "Dzire", slug: "dzire-taxi", rate: "₹10/km", seats: "4 Seats" },
        { name: "Amaze", slug: "amaze-taxi", rate: "₹10/km", seats: "4 Seats" },
        { name: "Etios", slug: "etios-taxi", rate: "₹10/km", seats: "4 Seats" },
        { name: "Sedan", slug: "sedan-taxi", rate: "₹10/km", seats: "4 Seats" },
        { name: "12 Seater Tempo", slug: "12-seater-tempo-traveller", rate: "₹20/km", seats: "12 Seats" },
      ]
  ).filter((v) => v.slug !== config.vehicleSlug);

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-amber-50/40 py-20 border-b border-amber-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-900/90 px-3.5 py-1 text-xs font-black text-amber-200 uppercase tracking-wider shadow-xs">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  {config.badge}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1 text-xs font-bold text-gray-800 border border-amber-300/80">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  {route.highway || "Expressway Certified Route"}
                </span>

                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  4.9 / 5 Rating
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl md:text-5xl lg:text-5xl leading-[1.12]">
                {route.from} to {route.to}{" "}
                <span className="text-amber-800 block sm:inline">
                  {config.vehicleName} Taxi
                </span>
              </h1>

              {/* Tagline & Description */}
              <p className="mt-4 text-base sm:text-lg font-medium text-gray-800 leading-relaxed max-w-2xl">
                {config.tagline}. Travel with private doorstep pickup in {route.from}, transparent per-km billing at ₹{config.ratePerKm}/km, and verified commercial chauffeurs.
              </p>

              {/* Metrics Grid */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
                <div className="rounded-2xl border border-amber-200/90 bg-white/95 p-3.5 text-center shadow-xs">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Distance</p>
                  <p className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">{route.distance}</p>
                </div>

                <div className="rounded-2xl border border-amber-200/90 bg-white/95 p-3.5 text-center shadow-xs">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Travel Time</p>
                  <p className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">{route.duration}</p>
                </div>

                <div className="rounded-2xl border border-amber-400 bg-amber-100/90 p-3.5 text-center shadow-xs">
                  <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">Starting Fare</p>
                  <p className="text-lg sm:text-xl font-black text-amber-900 mt-0.5">₹{oneWayFare.toLocaleString("en-IN")}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-amber-600/30 transition hover:bg-amber-500 hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  <span>Book {config.vehicleName} on WhatsApp</span>
                </a>

                <a
                  href="tel:+918377809809"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-gray-900 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-xs transition hover:bg-gray-800"
                >
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>Call: 8377809809</span>
                </a>
              </div>
            </div>

            {/* Right Card: Vehicle Visual & Instant Reservation */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50/50 flex items-center justify-center border border-amber-100">
                  <Image
                    src={config.image}
                    alt={`${route.from} to ${route.to} ${config.vehicleName}`}
                    width={420}
                    height={260}
                    className="object-contain max-h-48 drop-shadow-md hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
                    ₹{config.ratePerKm}/km Flat Rate
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Users className="h-4 w-4 text-amber-600" /> Capacity
                    </span>
                    <strong className="text-gray-900 font-bold">{config.seats} Passengers + Chauffeur</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Briefcase className="h-4 w-4 text-amber-600" /> Luggage Space
                    </span>
                    <strong className="text-gray-900 font-bold">{config.luggageBags} ({config.bootVolume})</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Cabin AC
                    </span>
                    <strong className="text-gray-900 font-bold">{config.acType}</strong>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
                    <div>
                      <p className="text-[11px] font-bold text-amber-900 uppercase">Estimated One-Way Fare</p>
                      <p className="text-xs text-amber-700">Distance: {route.distance}</p>
                    </div>
                    <span className="text-2xl font-black text-amber-900">
                      ₹{oneWayFare.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3.5 text-center text-sm font-bold text-white shadow-md hover:bg-amber-500 transition"
                  >
                    Confirm {config.vehicleName} Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VEHICLE SPECIFICATIONS & AMENITIES BAR */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              VEHICLE HIGHLIGHTS & ARCHITECTURE
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-900">
              {config.vehicleName} Specifications for {route.from} to {route.to}
            </h2>
            <p className="mt-1.5 text-sm text-gray-600">
              Engineered for endurance, passenger space, and smooth highway stability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Passenger Seating</p>
                  <h3 className="text-base font-bold text-gray-900">{config.seats} Adult Passengers</h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Ergonomically contoured seats with generous shoulder room and adjustable headrests for fatigue-free travel.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Luggage className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Luggage Trunk</p>
                  <h3 className="text-base font-bold text-gray-900">{config.bootVolume}</h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Capacity for {config.luggageBags}. Trunk keeps all luggage safe and away from cabin seating.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Snowflake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Air Conditioning</p>
                  <h3 className="text-base font-bold text-gray-900">{config.acType}</h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                High-capacity cooling maintains a pleasant 21°C cabin temperature even in peak 45°C summer heat.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Engine & Powertrain</p>
                  <h3 className="text-base font-bold text-gray-900">{config.engine}</h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Refined powertrain optimized for responsive overtaking, hill climbs, and effortless 100 km/h cruising.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Suspension System</p>
                  <h3 className="text-base font-bold text-gray-900">{config.suspension}</h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Tuned damping glides effortlessly over highway expansion joints, speed breakers, and uneven bypasses.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-slate-50/60 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Safety & Security</p>
                  <h3 className="text-base font-bold text-gray-900">ABS, Airbags & GPS Tracker</h3>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Commercial taxi with live GPS tracking, speed limiter alerts, and experienced highway-certified chauffeurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE THIS VEHICLE ON THIS SPECIFIC ROUTE */}
      <section className="bg-slate-50 py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              TRAVEL ADVANTAGES
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-900">
              {config.whyChooseTitle.replace("{from}", route.from).replace("{to}", route.to)}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Key reasons our passengers rate {config.vehicleName} as the #1 choice for {route.from} to {route.to} travel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {config.whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-xs hover:border-amber-300 hover:shadow-md transition"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 font-black text-lg">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSPARENT FARE BREAKDOWN */}
      <section className="bg-white py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left fare breakdown */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                FIXED & PER-KM BILLING
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-900">
                {route.from} to {route.to} {config.vehicleName} Fare Estimate
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                We believe in 100% transparent pricing. You only pay for what you travel, with zero surge or hidden booking charges.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-slate-50">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">One-Way Trip</h4>
                    <p className="text-xs text-gray-500">Doorstep pickup & direct drop-off</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-gray-900">₹{oneWayFare.toLocaleString("en-IN")}</p>
                    <p className="text-[11px] font-semibold text-emerald-700">Zero Return Fare</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-slate-50">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Round Trip (Same Day / Multi Day)</h4>
                    <p className="text-xs text-gray-500">Cab remains at your disposal</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-gray-900">₹{roundTripFare.toLocaleString("en-IN")}</p>
                    <p className="text-[11px] font-semibold text-amber-700">₹{config.ratePerKm}/km Rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Inclusions checklist */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-amber-200/80 bg-amber-50/50 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  What is Included in Your {config.vehicleName} Booking:
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Dedicated sanitized {config.vehicleName} exclusively for your ride</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Professional commercial driver with highway certification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>All vehicle fuel charges and driver allowances included</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Doorstep pickup across all sectors and localities in {route.from}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Air conditioning active throughout journey without extra fee</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>GST invoice provided for business & corporate tax reimbursement</span>
                  </li>
                </ul>

                <p className="mt-5 text-xs text-gray-500 border-t border-amber-200/60 pt-3">
                  * Applicable state entry taxes, expressway tolls, and parking tickets are payable as per actual toll booth receipts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR CITY ROUTES FOR THIS VEHICLE */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug={config.vehicleSlug}
        vehicleName={config.vehicleName}
      />

      {/* 6. ALTERNATIVE VEHICLE FLEET SWITCHER */}
      {/* <section className="bg-white py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              FLEET OPTIONS FOR THIS ROUTE
            </span>
            <h3 className="text-xl font-black text-gray-900 mt-1">
              Compare Other Vehicles for {route.from} to {route.to}
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {alternativeVehicles.map((alt) => (
              <Link
                key={alt.slug}
                href={`/route/${fromSlug}-to-${toSlug}-${alt.slug}`}
                className="group rounded-2xl border border-gray-200 bg-slate-50 p-4 hover:border-amber-400 hover:bg-amber-50/50 hover:shadow-sm transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-700">{alt.seats}</span>
                  <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition" />
                </div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-800 transition">{alt.name}</h4>
                <p className="text-xs font-semibold text-gray-500 mt-1">{alt.rate}</p>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* 7. VEHICLE SPECIFIC FAQS */}
      <section className="bg-slate-50 py-14 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              COMMONLY ASKED QUESTIONS
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-gray-900">
              {config.vehicleName} FAQs ({route.from} to {route.to})
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Everything you need to know about booking our {config.vehicleName} cab.
            </p>
          </div>

          <div className="space-y-3">
            {config.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-gray-900 hover:text-amber-600 transition"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                        isOpen ? "rotate-180 text-amber-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CONVERSION CTA */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 mb-2">
              Instant Dispatch Guaranteed
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Ready to Book Your {config.vehicleName} Ride?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              From {route.from} to {route.to}. Clean AC cabin, verified driver, and 24x7 phone coordinator assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+918377809809"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-amber-900 shadow-md hover:bg-amber-50 transition"
            >
              <Phone className="h-4 w-4 text-amber-600" />
              <span>Call: 8377809809</span>
            </a>

            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3.5 text-sm font-black text-white hover:bg-white/10 transition"
            >
              <Send className="h-4 w-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
