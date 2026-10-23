"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Star,
  ShieldCheck,
  Zap,
  PhoneCall,
  MapPin,
  Clock3,
  Route,
  CarFront,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Fuel,
  Users,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { CityInfo } from "@/lib/cityData";
import { vehicles, type Vehicle } from "@/data/vehicles";
import { getRoutesFromMasterRoutes } from "@/components/cab/PopularCityRoutes";
import RelatedCityRoutes from "@/components/cab/RelatedCityRoutes";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";

interface Props {
  city: CityInfo;
}

function getCityVehicleUrl(citySlug: string, vehicle: Vehicle): string {
  if (citySlug === "noida") {
    return `/taxi/${vehicle.slug}`;
  }

  const vSlug = vehicle.slug.toLowerCase().trim();
  switch (vSlug) {
    case "dzire":
      return `/dzire-taxi-in-${citySlug}`;
    case "etios":
      return `/etios-taxi-in-${citySlug}`;
    case "amaze":
      return `/amaze-taxi-in-${citySlug}`;
    case "sedan":
    case "sedan-taxi":
      return `/sedan-taxi-in-${citySlug}`;
    case "ertiga":
      return `/ertiga-taxi-in-${citySlug}`;
    case "innova-crysta":
    case "innova":
      return `/innova-crysta-in-${citySlug}`;
    case "wagonr":
      return `/wagonr-taxi-in-${citySlug}`;
    case "urbania":
    case "urbania-rental":
      return `/urbania-rental-in-${citySlug}`;
    case "luxury-tempo-traveller":
      return `/luxury-tempo-traveller-in-${citySlug}`;
    case "12-seater-tempo-traveller":
      return `/12-seater-tempo-traveller-in-${citySlug}`;
    case "16-seater-tempo-traveller":
      return `/16-seater-tempo-traveller-in-${citySlug}`;
    case "20-seater-tempo-traveller":
      return `/20-seater-tempo-traveller-in-${citySlug}`;
    case "24-seater-tempo-traveller":
      return `/24-seater-tempo-traveller-in-${citySlug}`;
    default:
      if (vSlug.includes("tempo")) {
        return `/${vSlug}-in-${citySlug}`;
      }
      return `/${vSlug}-taxi-in-${citySlug}`;
  }
}

export default function DynamicCityDistancePage({ city }: Props) {
  const cityRoutes = getRoutesFromMasterRoutes(city.name, "taxi", 12, "Cab", true);

  const whatsappMessage = encodeURIComponent(
    `Hello NoidaCab, I want to inquire about distance, highway travel times, and cab booking for ${city.name} (${city.state}). Please share details.`
  );
  const whatsappUrl = `https://wa.me/919818022687?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================================
          1. HERO SECTION
      ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-14 text-slate-900 border-b border-slate-300 sm:py-18 lg:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-950/15 bg-white/70 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-2xs backdrop-blur-md">
                  <Compass className="h-3.5 w-3.5 text-amber-700" />
                  Verified Highway Road Matrix
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  4.9/5 Rating (1,250+ Road Trips)
                </div>
              </div>

              <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Distance &amp; Travel Time in{" "}
                <span className="text-amber-700 block">{city.name}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-800 sm:text-base sm:leading-7 font-medium">
                Check exact driving road kilometres, estimated highway transit durations, toll gateways, and reliable door-to-door cab options across <strong className="text-slate-950">{city.name}</strong> ({city.state}). Transparent per-kilometre billing with verified highway chauffeurs.
              </p>

              {/* Badges */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Real-time expressway routing with zero surge</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Verified commercial fleet (Green/Yellow plates)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Police-vetted highway chauffeurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Doorstep pickup across {city.localities.slice(0, 3).join(", ")}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href={`/taxi-service-in-${city.slug}`}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Book Cab in {city.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:8377809809"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-900/20 bg-white/80 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-xs backdrop-blur-xs transition hover:bg-white"
                >
                  <PhoneCall className="h-4 w-4 text-amber-700" />
                  Call 8377809809
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <Zap className="h-4 w-4 text-emerald-600 fill-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Overview Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-amber-950/10 backdrop-blur-xl sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      Regional Highway Network
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      {city.name} Transit Summary
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800">
                    Express Corridors
                  </span>
                </div>

                <div className="mt-5 space-y-3.5 text-xs">
                  <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 p-3.5 border border-slate-100">
                    <MapPin className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Key Departure Hubs</p>
                      <p className="text-slate-600 mt-0.5">
                        {city.localities.slice(0, 5).join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 p-3.5 border border-slate-100">
                    <Route className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Top Connected Destinations</p>
                      <p className="text-slate-600 mt-0.5">
                        {city.popularOutstation.slice(0, 5).join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-slate-50/80 p-3.5 border border-slate-100">
                    <Clock3 className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">Airport &amp; Transit Terminals</p>
                      <p className="text-slate-600 mt-0.5">
                        {city.airportName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Fastest Doorstep Reporting</span>
                  <span className="text-emerald-700 font-bold">15 - 30 Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERCITY DISTANCE & TRAVEL TIME TABLE
      ========================================================================= */}
      {cityRoutes.length > 0 && (
        <section className="bg-white py-14 border-b border-gray-200 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Road Kilometres &amp; Duration
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                {city.name} Intercity Distance &amp; Travel Time Matrix
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                Explore calculated highway driving distances, estimated travel durations, major expressways, and starting fares from {city.name} to connected cities.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-zinc-700">
                  <thead className="bg-zinc-50 text-xs font-bold uppercase tracking-wider text-zinc-600 border-b border-zinc-200">
                    <tr>
                      <th className="px-5 py-3.5">Route</th>
                      <th className="px-4 py-3.5">Distance</th>
                      <th className="px-4 py-3.5">Driving Time</th>
                      <th className="px-4 py-3.5">Highway / Expressway</th>
                      <th className="px-4 py-3.5">Starting Fare</th>
                      <th className="px-5 py-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    {cityRoutes.map((r, idx) => (
                      <tr key={idx} className="transition hover:bg-orange-50/40">
                        <td className="px-5 py-4 font-bold text-zinc-900">
                          {r.from} &rarr; {r.to}
                        </td>
                        <td className="px-4 py-4 font-semibold text-zinc-800">
                          {r.distance}
                        </td>
                        <td className="px-4 py-4 text-zinc-600">
                          {r.duration}
                        </td>
                        <td className="px-4 py-4 text-zinc-500 text-xs font-medium">
                          {r.highway || "National Highway Expressway"}
                        </td>
                        <td className="px-4 py-4 font-bold text-orange-600">
                          {r.startingFare}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Link
                            href={r.slug ? `/route/${r.slug}` : `/taxi-service-in-${city.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-orange-600"
                          >
                            Book Cab
                            <ChevronRight className="h-3.5 w-3.5" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          3. AVAILABLE CABS FLEET IN CITY
      ========================================================================= */}
      <section className="bg-zinc-50/60 py-14 border-b border-gray-200 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Verified Fleet
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Choose Your Cab in <span className="text-orange-500">{city.name}</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
              Compare vehicle options, passenger seating capacity, boot space, and transparent per-kilometre tariffs for your journey across {city.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => {
              const cabUrl = getCityVehicleUrl(city.slug, vehicle);

              return (
                <article
                  key={vehicle.slug}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-orange-200 hover:shadow-lg"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-zinc-50">
                    {vehicle.image ? (
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} taxi in ${city.name}`}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-zinc-400">
                        <CarFront className="h-16 w-16" />
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                        {vehicle.category || "Cab"}
                      </span>
                      <span className="text-base font-bold text-zinc-950">
                        {vehicle.price}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-zinc-950">
                      {vehicle.name} in {city.name}
                    </h3>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-zinc-600">
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{vehicle.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{vehicle.luggage} Bags</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="h-3.5 w-3.5 text-zinc-400" />
                        <span>AC Available</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Zero Surge</span>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-zinc-100 pt-4">
                      <Link
                        href={cabUrl}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                      >
                        Book {vehicle.name}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TRAVEL INFORMATION & HIGHWAY FACTORS
      ========================================================================= */}
      <section className="bg-white py-14 border-b border-gray-200 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Transit Guidelines
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Road &amp; Highway Travel Factors for {city.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
              Key route intelligence to help you plan smooth, timely, and budget-friendly journeys from {city.name}.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition hover:border-orange-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                <Route className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-zinc-950 text-base">Expressway Routing</h3>
              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Chauffeurs utilize modern access-controlled expressways and state highways to ensure optimal transit speed and smooth ride comfort.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition hover:border-orange-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                <Clock3 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-zinc-950 text-base">Peak Traffic Windows</h3>
              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Early morning (5:00 AM – 7:30 AM) departures avoid urban bottlenecks at city exit toll plazas and save up to 45 minutes of transit time.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition hover:border-orange-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-zinc-950 text-base">Doorstep Reporting</h3>
              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Direct pickup from your doorstep across {city.localities.slice(0, 3).join(", ")}, railway stations, and local airports without waiting charges.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition hover:border-orange-300 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-zinc-950 text-base">Transparent Billing</h3>
              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Fixed per-km billing starting at ₹10/km. No hidden return tolls or night surcharges when booked in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. REGIONAL & CONNECTED CORRIDORS
      ========================================================================= */}
      <RelatedCityRoutes
        destinationCity={city.name}
        vehicleSlug="taxi"
        vehicleName="Taxi"
        distanceTravelTime
      />

      <PopularCityRoutes
        cityName={city.name || "Noida"}
        vehicleSlug="taxi"
        vehicleName="Distance Cabs"
      />

      {/* =========================================================================
          6. DISTANCE & TRAVEL FAQ
      ========================================================================= */}
      <section className="bg-white py-14 border-b border-gray-200 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Got Questions?
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Frequently Asked Questions for {city.name} Travel
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5">
              <h3 className="text-base font-bold text-zinc-950 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-orange-500 shrink-0" />
                How are the distance and travel time from {city.name} calculated?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 pl-7">
                Distances are computed using actual highway road kilometres through major national expressways and state highways. Estimated durations account for standard highway speed limits, toll plaza clearances, and typical traffic conditions.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5">
              <h3 className="text-base font-bold text-zinc-950 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Can I book one-way cabs from {city.name}?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 pl-7">
                Yes! NoidaCab provides dedicated one-way outstation taxi services from {city.name} to major destinations including Delhi, Noida, Gurgaon, Agra, Chandigarh, and Jaipur. You pay only for one-side travel without return fare.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5">
              <h3 className="text-base font-bold text-zinc-950 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-orange-500 shrink-0" />
                Are toll taxes and parking included in the taxi fare?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 pl-7">
                Standard outstation fares are based on per-kilometre charges. State border taxes, expressway FASTag tolls, and parking fees (if applicable) are transparently billed at actual receipt costs with no markup.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5">
              <h3 className="text-base font-bold text-zinc-950 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-orange-500 shrink-0" />
                What vehicle types are available for long-distance highway travel?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 pl-7">
                We offer Maruti Dzire, Toyota Etios, and Honda Amaze for 1-4 passengers; Maruti Ertiga and Toyota Innova Crysta for 4-7 passengers; and 12, 16, 20, 24-seater luxury Tempo Travellers and Force Urbania for group travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. BOOKING CTA
      ========================================================================= */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-6 py-10 shadow-xl sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
                  <CarFront className="h-4 w-4" />
                  Ready to Travel from {city.name}?
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Book Your Cab in <span className="text-orange-500">{city.name}</span> Today
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
                  Get instant quotations, confirmed door-to-door cab pickups, and professional highway chauffeurs. Call our 24/7 helpline or book online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/taxi-service-in-${city.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                >
                  Book Cab Now
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <a
                  href="tel:8377809809"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-4 text-base font-bold text-white transition hover:bg-zinc-800"
                >
                  <PhoneCall className="h-5 w-5 text-orange-400" />
                  8377809809
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
