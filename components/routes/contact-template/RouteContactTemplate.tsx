import Link from "next/link";

import {
  PhoneCall,
  MessageSquare,
  Clock,
  ShieldCheck,
  MapPin,
  Car,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Users,
  Briefcase,
  Snowflake,
  Headphones,
  Navigation,
  Star,
  Fuel,
  Info,
} from "lucide-react";

import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
interface Props {
  route: ParsedRouteDetail;
}

export default function RouteContactTemplate({ route }: Props) {
  const phone = "8377809809";
  const displayPhone = "+91 8377809809";

  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    `Hello NoidaCab, I need an urgent taxi booking from ${route.from} to ${route.to}. Please confirm cab availability and fare.`
  )}`;

  const fromSlug = route.from.toLowerCase().replace(/^route-/, "").replace(/[^a-z0-9]+/g, "-");
  const toSlug = route.to.toLowerCase().replace(/^route-/, "").replace(/[^a-z0-9]+/g, "-");

  // Extract numeric distance
  const numDist = parseInt(String(route.distance).replace(/[^0-9]/g, "")) || 30;
  const sedanFare = Math.round(numDist * 1.5 * 10 + 500);
  const ertigaFare = Math.round(numDist * 1.5 * 13 + 500);
  const innovaFare = Math.round(numDist * 1.5 * 16 + 500);
  const tempoFare = Math.round(numDist * 1.5 * 20 + 500);

  // Structured Data Schema (ContactPage + TaxiService + FAQ)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `https://www.noidacab.com/route/${route.canonicalSlug}#webpage`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        name: `${route.from} to ${route.to} Taxi Contact Number`,
        description: `24x7 Cab booking helpline and driver dispatch contact number for ${route.from} to ${route.to}.`,
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noidacab.com" },
            { "@type": "ListItem", position: 2, name: "Routes", item: "https://www.noidacab.com/routes" },
            {
              "@type": "ListItem",
              position: 3,
              name: `${route.from} to ${route.to} Contact Number`,
              item: `https://www.noidacab.com/route/${route.canonicalSlug}`,
            },
          ],
        },
      },
      {
        "@type": "TaxiService",
        "@id": `https://www.noidacab.com/route/${route.canonicalSlug}#service`,
        name: `${route.from} to ${route.to} Taxi Booking Service`,
        telephone: "+91-8377809809",
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        areaServed: [
          { "@type": "City", name: route.from },
          { "@type": "City", name: route.to },
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "NoidaCab",
          telephone: "+91-8377809809",
          url: "https://www.noidacab.com",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is the taxi contact number for ${route.from} to ${route.to}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The 24/7 taxi booking contact number for ${route.from} to ${route.to} is +91-8377809809. You can call or WhatsApp anytime for immediate vehicle dispatch.`,
            },
          },
          {
            "@type": "Question",
            name: `How much does a cab from ${route.from} to ${route.to} cost?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Sedan cabs (Dzire/Etios) start from approximately ₹${sedanFare.toLocaleString(
                "en-IN"
              )}, SUVs (Ertiga) from ₹${ertigaFare.toLocaleString(
                "en-IN"
              )}, and Innova Crysta from ₹${innovaFare.toLocaleString(
                "en-IN"
              )}. Fares are transparent with zero hidden costs.`,
            },
          },
          {
            "@type": "Question",
            name: `How quickly can a taxi arrive in ${route.from}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Our drivers are stationed near key sectors and transit hubs, guaranteeing doorstep pickup within 20 to 30 minutes of booking.`,
            },
          },
        ],
      },
    ],
  };

  const fleetOptions = [
    {
      category: "Sedan",
      models: "Maruti Dzire / Toyota Etios",
      seats: "4 Passengers",
      luggage: "2 Bags",
      rate: "₹10/km",
      fare: `₹${sedanFare.toLocaleString("en-IN")}`,
      tag: "Most Popular",
      bestFor: "Solo travelers, couples, airport drop",
    },
    {
      category: "Family SUV",
      models: "Maruti Ertiga / Triber",
      seats: "6 Passengers",
      luggage: "4 Bags",
      rate: "₹13/km",
      fare: `₹${ertigaFare.toLocaleString("en-IN")}`,
      tag: "Best Value",
      bestFor: "Family trips, extra luggage, group commute",
    },
    {
      category: "Premium SUV",
      models: "Toyota Innova Crysta",
      seats: "6-7 Passengers",
      luggage: "5 Bags",
      rate: "₹16/km",
      fare: `₹${innovaFare.toLocaleString("en-IN")}`,
      tag: "VIP Comfort",
      bestFor: "Business travel, long journeys, executive rides",
    },
    {
      category: "Tempo Traveller",
      models: "12-24 Seater / Force Urbania",
      seats: "12–24 Passengers",
      luggage: "10+ Bags",
      rate: "₹20/km",
      fare: `₹${tempoFare.toLocaleString("en-IN")}`,
      tag: "Group Travel",
      bestFor: "Family vacations, weddings, office outings",
    },
  ];

  const faqs = [
    {
      q: `What is the 24x7 cab booking contact number for ${route.from} to ${route.to}?`,
      a: `You can reach our round-the-clock booking coordinator at +91-8377809809. We accept both instant phone bookings and WhatsApp reservations with immediate driver allocation.`,
    },
    {
      q: `Can I book an emergency or early morning flight cab between ${route.from} and ${route.to}?`,
      a: `Yes! Our dispatch desk operates 24/7/365. For early morning flight pickups or emergency late-night travel, dial +91-8377809809 or WhatsApp us. A confirmed cab will arrive at your doorstep within 20–30 minutes.`,
    },
    {
      q: `What is the distance and travel time from ${route.from} to ${route.to}?`,
      a: `The road distance between ${route.from} and ${route.to} is approximately ${route.distance} via ${route.highway}. Average travel time is around ${route.duration}, depending on traffic.`,
    },
    {
      q: `Are toll taxes and driver charges included in the fare?`,
      a: `Our fares are transparent. Per-km base rates and driver allowance are clear upfront. Standard highway state tolls and parking are billed transparently with zero hidden surcharges or surge multipliers.`,
    },
    {
      q: `What payment methods are accepted when booking on call?`,
      a: `You can pay the driver via UPI (Google Pay, PhonePe, Paytm), cash, or net banking upon completion of your trip. No mandatory advance payment is required for standard one-way trips.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white pt-16 pb-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-amber-950 mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>24x7 Direct Dispatch Desk</span>
                <span className="text-amber-400">•</span>
                <span>{route.from} ➔ {route.to}</span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600 block sm:inline">Taxi Contact Number</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700 max-w-2xl">
                Need an immediate or advance cab booking from <strong>{route.from}</strong> to{" "}
                <strong>{route.to}</strong>? Connect directly with our 24/7 helpline at{" "}
                <strong className="text-gray-900">{displayPhone}</strong> for doorstep pickup, verified
                drivers, and transparent per-km billing starting @ ₹10/km.
              </p>

              {/* Direct CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-600/30 hover:bg-amber-700 transition active:scale-[0.98]"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>Call: {displayPhone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 bg-white px-6 py-3.5 text-base font-bold text-emerald-700 shadow-xs hover:bg-emerald-50 transition"
                >
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                  <span>Instant WhatsApp Booking</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-gray-700">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-amber-600" />
                  20–30 Min Doorstep Pickup
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Commercial Verified Chauffeurs
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  Zero Surge Tariffs
                </span>
              </div>
            </div>

            {/* Right Card: Quick Dispatch Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      LIVE HELPLINE DESK
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mt-0.5">
                      {route.from} ➔ {route.to}
                    </h3>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                    Online 24x7
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Phone Helpline Card */}
                  <div className="flex items-center justify-between rounded-2xl bg-amber-50/70 p-4 border border-amber-200/60">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                        PRIMARY BOOKING CALL
                      </span>
                      <p className="text-lg font-black text-gray-900">{displayPhone}</p>
                      <p className="text-[11px] text-gray-600">Immediate cab dispatch in 20 mins</p>
                    </div>
                    <a
                      href={`tel:${phone}`}
                      className="rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-amber-700 transition"
                    >
                      Call Now
                    </a>
                  </div>

                  {/* WhatsApp Support Card */}
                  <div className="flex items-center justify-between rounded-2xl bg-emerald-50/70 p-4 border border-emerald-200/60">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        WHATSAPP DISPATCH DESK
                      </span>
                      <p className="text-base font-black text-gray-900">Instant Chat & Car Photos</p>
                      <p className="text-[11px] text-gray-600">Typical response in 2 minutes</p>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                    >
                      Chat Now
                    </a>
                  </div>

                  {/* Route Highlights Mini-Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 text-center">
                      <span className="text-[10px] font-bold uppercase text-gray-400 block">Distance</span>
                      <span className="text-sm font-black text-gray-900">{route.distance}</span>
                    </div>
                    <div className="rounded-xl bg-gray-50 p-3 border border-gray-100 text-center">
                      <span className="text-[10px] font-bold uppercase text-gray-400 block">Starting Fare</span>
                      <span className="text-sm font-black text-amber-600">
                        ₹{sedanFare.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Route Metrics Bar */}
      <section className="bg-slate-900 text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Corridor Highway
              </span>
              <p className="text-base sm:text-lg font-black text-white mt-1">{route.highway}</p>
            </div>
            <div className="p-2 border-l border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Travel Distance
              </span>
              <p className="text-base sm:text-lg font-black text-amber-400 mt-1">{route.distance}</p>
            </div>
            <div className="p-2 border-l border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Estimated Duration
              </span>
              <p className="text-base sm:text-lg font-black text-white mt-1">{route.duration}</p>
            </div>
            <div className="p-2 border-l border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Helpline Status
              </span>
              <p className="text-base sm:text-lg font-black text-emerald-400 mt-1">24x7 Active</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Available Cabs on Call Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50/60 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              CAB OPTIONS ON CALL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
              Choose & Book Your Cab for {route.from} to {route.to}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Call our helpline to book any of the following vehicle categories with immediate confirmation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fleetOptions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-800">
                      {item.tag}
                    </span>
                    <span className="text-xs font-bold text-gray-500">{item.rate}</span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900">{item.category}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.models}</p>

                  <div className="my-4 py-3 border-y border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase">Estimated Fare</span>
                      <p className="text-2xl font-black text-amber-600">{item.fare}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                      AC Cab
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-amber-600" />
                      <span>{item.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5 text-amber-600" />
                      <span>{item.luggage} capacity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="h-3.5 w-3.5 text-amber-600" />
                      <span className="truncate">{item.bestFor}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <a
                    href={`tel:${phone}`}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-xs font-bold text-white hover:bg-amber-700 transition"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>Call to Book {item.category}</span>
                  </a>

                  <a
                    href={`https://wa.me/91${phone}?text=${encodeURIComponent(
                      `Hello NoidaCab, I want to book a ${item.category} from ${route.from} to ${route.to} (${item.fare}). Please confirm availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 py-2 text-xs font-bold text-gray-800 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 transition"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How Booking on Call Works */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-10 text-center mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
              How to Book a Taxi from {route.from} to {route.to} on Call
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xs text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 mb-4 font-black text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900">Dial Our Helpline</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Call <strong>{displayPhone}</strong> or send a quick WhatsApp with your pickup locality in{" "}
                {route.from} and preferred travel time.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xs text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 mb-4 font-black text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900">Choose Cab & Fixed Tariff</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Select from Sedan, Ertiga, Innova Crysta, or Tempo Traveller with all-inclusive per-km rates
                and zero hidden costs.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xs text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 mb-4 font-black text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900">Doorstep Pickup & Travel</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Receive driver contact and vehicle registration details instantly. Enjoy comfortable AC travel
                to {route.to} and pay after drop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pickup & Drop Locations */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50/60 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Pickup */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <h3 className="text-lg font-bold text-gray-900">
                  Popular Pickup Points in {route.from}
                </h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Doorstep pickup is supported across all sectors, colonies, tech parks, and stations:
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {route.pickupPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl bg-gray-50 px-3.5 py-2.5 text-xs font-semibold text-gray-800 border border-gray-100"
                  >
                    <MapPin className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drop */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <h3 className="text-lg font-bold text-gray-900">
                  Key Drop Destinations in {route.to}
                </h3>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Direct hotel, residence, railway station, or airport drop at your exact destination:
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {route.dropPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl bg-gray-50 px-3.5 py-2.5 text-xs font-semibold text-gray-800 border border-gray-100"
                  >
                    <MapPin className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Call NoidaCab */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              WHY CALL NOIDACAB
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
              Top Reasons Travelers Call Our {route.from} to {route.to} Helpline
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 p-5 bg-white">
              <Headphones className="h-8 w-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-gray-900 text-base">Human Support</h4>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                No automated bot menus. Speak directly with a local dispatch coordinator who understands your
                route requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 bg-white">
              <ShieldCheck className="h-8 w-8 text-emerald-600 mb-3" />
              <h4 className="font-bold text-gray-900 text-base">100% Ride Guarantee</h4>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                Zero driver cancellations. Once you receive your booking confirmation, your ride is 100%
                guaranteed.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 bg-white">
              <Car className="h-8 w-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-gray-900 text-base">Clean Commercial Cars</h4>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                Only well-maintained yellow-plate commercial cars with high-powered AC and highway fitness
                certification.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-5 bg-white">
              <Star className="h-8 w-8 text-amber-600 mb-3" />
              <h4 className="font-bold text-gray-900 text-base">Transparent Billing</h4>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                Flat per-km rates with zero surge pricing, no hidden commission fees, and clear GST receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs Section with Accordion Details */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-50/60 border-b border-gray-200">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-1">
              {route.from} to {route.to} Taxi Booking FAQs
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-amber-300 [&_summary::-webkit-details-marker]:hidden"
                open={i === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-gray-900 text-sm sm:text-base">
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-amber-600">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Popular City Routes */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug="contact-number"
        vehicleName="Taxi Contact"
      />

      {/* 8. Related Corridor Links */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-base font-bold text-gray-900 mb-4">
            Explore More {route.from} to {route.to} Travel Services:
          </h3>
          <div className="flex flex-wrap gap-2.5 text-xs">
            <Link
              href={`/route/${fromSlug}-to-${toSlug}-taxi`}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 font-semibold text-gray-700 hover:border-amber-500 hover:text-amber-700 transition"
            >
              {route.from} to {route.to} Taxi
            </Link>
            <Link
              href={`/route/${fromSlug}-to-${toSlug}-taxi-fare`}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 font-semibold text-gray-700 hover:border-amber-500 hover:text-amber-700 transition"
            >
              {route.from} to {route.to} Taxi Fare
            </Link>
            <Link
              href={`/route/${fromSlug}-to-${toSlug}-one-way-taxi`}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 font-semibold text-gray-700 hover:border-amber-500 hover:text-amber-700 transition"
            >
              {route.from} to {route.to} One Way Cab
            </Link>
            <Link
              href={`/route/${fromSlug}-to-${toSlug}-sedan-taxi`}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 font-semibold text-gray-700 hover:border-amber-500 hover:text-amber-700 transition"
            >
              {route.from} to {route.to} Sedan Taxi
            </Link>
            <Link
              href={`/route/${fromSlug}-to-${toSlug}-suv-taxi`}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 font-semibold text-gray-700 hover:border-amber-500 hover:text-amber-700 transition"
            >
              {route.from} to {route.to} SUV Taxi
            </Link>
            <Link
              href={`/route/${fromSlug}-to-${toSlug}-tempo-traveller`}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 font-semibold text-gray-700 hover:border-amber-500 hover:text-amber-700 transition"
            >
              {route.from} to {route.to} Tempo Traveller
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Bottom Sticky / Conversion CTA */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">
              Ready to Book Your Ride from {route.from} to {route.to}?
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 mt-1">
              Dial our 24x7 coordinator for instant cab allocation & doorstep pickup.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black text-amber-700 shadow-md hover:bg-amber-50 transition"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call: {displayPhone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 text-sm font-black text-white hover:bg-white/10 transition"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
