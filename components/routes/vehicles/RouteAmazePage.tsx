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

export function RouteAmazePage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Honda Amaze data from data/vehicles.ts
  const vehicleData = vehicles.find((v) => v.slug === "amaze") || {
    name: "Amaze",
    slug: "amaze",
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

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book Honda Amaze from ${route.from} to ${route.to} (${distanceDisplay}, Est fare ₹${oneWayFare}). Please confirm availability.`
  )}`;

  // Alternative vehicles from data/vehicles.ts
  const alternativeVehicles = vehicles
    .filter((v) => v.slug !== "amaze")
    .slice(0, 6);

  const faqs = [
    {
      q: `How many passengers can travel in Honda Amaze from ${route.from} to ${route.to}?`,
      a: "Honda Amaze seats 4 passengers plus 1 driver with generous shoulder room and wide contoured rear seats.",
    },
    {
      q: `What is the tariff for Honda Amaze taxi from ${route.from} to ${route.to}?`,
      a: `Amaze is billed at flat ${vehicleData.price} for outstation trips, offering Japanese sedan refinement at the lowest market rate. Estimated one-way trip fare is ₹${oneWayFare.toLocaleString("en-IN")}.`,
    },
    {
      q: "How much luggage can fit in the boot of Honda Amaze?",
      a: `Honda Amaze has a massive 420-litre boot—the largest in its category—accommodating ${vehicleData.luggage} large suitcases with room to spare.`,
    },
    {
      q: "Is Honda Amaze comfortable on highway expressways?",
      a: "Yes, Honda's advanced suspension damping and acoustic sound insulation deliver a serene highway ride on Yamuna Expressway and national corridors.",
    },
    {
      q: "Can I book Honda Amaze for airport drops and one-way outstation trips?",
      a: "Yes! We specialize in point-to-point one-way outstation and airport drops with transparent billing and zero return fare charges.",
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
          <span className="font-semibold text-gray-800">{route.from} to {route.to} Honda Amaze</span>
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
                <span>Japanese Engineering • 420L Boot • {vehicleData.price}</span>
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600">Honda Amaze Taxi</span>
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Experience refined Japanese sedan comfort from {route.from} to {route.to} via {highwayDisplay}. Benefit from the largest 420L trunk in its class, plush ride dynamics, chilled digital AC, and certified highway chauffeurs.
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
                  <span>Book Honda Amaze on WhatsApp</span>
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
                    alt={`${route.from} to ${route.to} Honda Amaze`}
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
                    <strong className="text-gray-900 font-bold">{vehicleData.luggage} Large Bags (420L Trunk)</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-100 pb-2">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <Snowflake className="h-4 w-4 text-amber-600" /> Air Conditioning
                    </span>
                    <strong className="text-gray-900 font-bold">MaxCool Digital Climate Control</strong>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" /> Safety
                    </span>
                    <strong className="text-gray-900 font-bold">G-CON Technology, Dual Airbags & ABS</strong>
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
              Honda Amaze Highlights & Cabin Features
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Award className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">420L Extra Boot</h3>
              <p className="text-xs text-gray-600 mt-1">Class-leading boot space that holds 3 full-sized suitcases without cabin intrusion.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Snowflake className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">MaxCool Fast AC</h3>
              <p className="text-xs text-gray-600 mt-1">Rapid climate compressor pulling cabin temperature down within 3 minutes of start.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <Zap className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Honda Refinement</h3>
              <p className="text-xs text-gray-600 mt-1">Japanese engine precision offering ultra-smooth acceleration and zero chassis noise.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs">
              <ShieldCheck className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">G-CON Safety Body</h3>
              <p className="text-xs text-gray-600 mt-1">Advanced crash energy absorption design ensuring optimal protection on expressways.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Route information</p>
          <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">Honda Amaze Route from {route.from} to {route.to}</h2>
          <p className="mt-4 leading-7 text-gray-600">
            The Honda Amaze cab covers approximately {distanceDisplay} from {route.from} to {route.to}, with an estimated travel time of {durationDisplay}. The route may use {highwayDisplay}; the best route and actual journey time depend on the pickup address, destination and current traffic. Share any appointment or arrival deadline when booking so you can plan an appropriate pickup time.
          </p>
        </div>
      </section>

      {/* 4. WHY CHOOSE AMAZE FOR THIS ROUTE */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-7xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">JAPANESE REFINEMENT</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Why Book Honda Amaze from {route.from} to {route.to}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Class-Leading 420-Litre Boot
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Pack without hesitation. Easily accommodates 3 large trolley suitcases and 2 duffle bags for multi-day trips or airport drops.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Executive Sedan Aesthetics
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Bold front chrome grille, sleek LED DRLs, and roomy dual-tone cabin make it an impressive option for business and personal travel.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Silky Highway Ride
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Absorbs highway undulations on {highwayDisplay} with ease, offering passengers a peaceful working or resting environment.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 bg-slate-50/50">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                Experienced Professional Chauffeur
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Our drivers are verified, polite, and well-trained in highway safety, punctual pickups, and courteous assistance.
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
              Estimated Honda Amaze Fares ({route.from} to {route.to})
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
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Car remains at your group&apos;s disposal</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Local sightseeing & transfers in {route.to}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tolls, state taxes & parking extra at actuals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Honda Amaze Journey Details</h2>
          <p className="mt-3 leading-7 text-gray-600">
            This booking is a private trip from {route.from} to {route.to}. Your estimated distance is {distanceDisplay} and expected drive time is {durationDisplay}. Final routing and travel time can change with road conditions and the exact pickup and drop addresses.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Pickup and Drop for {route.from} to {route.to}</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <div className="border-l-2 border-amber-400 pl-4">
              <h3 className="font-bold text-gray-900">Pickup in {route.from}</h3>
              <p className="mt-2 leading-6 text-gray-600">Provide your complete pickup address or map pin and preferred pickup time when requesting the booking.</p>
            </div>
            <div className="border-l-2 border-slate-400 pl-4">
              <h3 className="font-bold text-gray-900">Drop in {route.to}</h3>
              <p className="mt-2 leading-6 text-gray-600">Share the exact destination address before confirming so the route and fare can be quoted for your trip.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">What Is Included With Your Honda Amaze Booking?</h2>
          <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <p className="border-t border-gray-200 pt-4 text-gray-700">Honda Amaze cab for the confirmed route and trip type</p>
            <p className="border-t border-gray-200 pt-4 text-gray-700">Professional driver for the booked journey</p>
            <p className="border-t border-gray-200 pt-4 text-gray-700">Pickup and drop at the addresses agreed at booking</p>
            <p className="border-t border-gray-200 pt-4 text-gray-700">Fare estimate and applicable charges shared before confirmation</p>
          </div>
          <p className="mt-5 text-sm leading-6 text-gray-600">Confirm tolls, parking, waiting time and any other route-specific charges with the final quote before you book.</p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">How to Book a Honda Amaze Cab</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-3">
            <li className="border-t-2 border-amber-400 bg-white p-5">
              <span className="text-xs font-bold text-amber-700">STEP 1</span>
              <h3 className="mt-2 font-bold text-gray-900">Share trip details</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">Provide your pickup in {route.from}, destination in {route.to}, travel date and passenger/luggage count.</p>
            </li>
            <li className="border-t-2 border-amber-400 bg-white p-5">
              <span className="text-xs font-bold text-amber-700">STEP 2</span>
              <h3 className="mt-2 font-bold text-gray-900">Review the fare</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">Confirm the route, trip type and applicable charges with the team before accepting the booking.</p>
            </li>
            <li className="border-t-2 border-amber-400 bg-white p-5">
              <span className="text-xs font-bold text-amber-700">STEP 3</span>
              <h3 className="mt-2 font-bold text-gray-900">Meet your driver</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">Receive the vehicle and driver details, then meet your cab at the confirmed pickup point.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white/95 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Travel Tips for Your {route.from} to {route.to} Amaze Trip</h2>
          <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Allow extra time for traffic, especially if travelling to an appointment or scheduled connection.</li>
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Share the exact pickup and drop addresses to receive an accurate route estimate.</li>
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Confirm passenger and luggage capacity when booking, particularly if carrying large bags.</li>
            <li className="border-l-2 border-amber-400 pl-4 leading-6 text-gray-700">Check the confirmed fare and any toll, parking or waiting charges before the trip.</li>
          </ul>
        </div>
      </section>

      <RouteTripPlanning
        from={route.from}
        to={route.to}
        vehicleName="Honda Amaze"
        summary={`A Honda Amaze taxi on the ${route.from} to ${route.to} route provides private sedan travel for a small group, with separate boot space for luggage.`}
        planningPoint="The listed Amaze capacity is four passengers with space for three luggage pieces. Mention oversized bags or extra luggage while booking so the vehicle arrangement can be checked."
      />

      {/* 6. POPULAR CITY ROUTES (from data/masterRoutes.ts) */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug="amaze"
        vehicleName="Amaze"
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

      {/* 8. FAQS */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Honda Amaze Taxi FAQs ({route.from} to {route.to})
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
              Japanese Luxury Sedan
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Book Honda Amaze from {route.from} to {route.to}
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

export default RouteAmazePage;
