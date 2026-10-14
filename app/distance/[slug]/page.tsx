import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  Compass,
  MapPin,
  MapPinned,
  Navigation,
  PhoneCall,
  Route,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

import { noidaRoutes, type NoidaRouteData } from "@/data/routes/noidaRoutes";
import { citiesData } from "@/lib/cityData";
import { vehicles, type Vehicle } from "@/data/vehicles";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

interface ResolvedRouteData extends NoidaRouteData {
  slug: string;
  isCityHub: boolean;
  from: {
    name: string;
    slug: string;
  };
  to: {
    name: string;
    slug: string;
  };
  distance: number;
  travelTime: string;
  routes: string[];
}

function resolveDistanceData(rawSlug: string): ResolvedRouteData | null {
  const slug = rawSlug.toLowerCase().trim();
  const baseline = noidaRoutes["noida-to-delhi"] || Object.values(noidaRoutes)[0];

  // 1. Single City Hub (e.g., distance-travel-time-in-noida or distance-travel-time-in-haryana)
  const cityMatch = slug.match(/^distance-travel-time-in-(.+)$/);
  if (cityMatch) {
    const rawCity = cityMatch[1];
    const cityKey = Object.keys(citiesData).find(
      (k) =>
        k.toLowerCase() === rawCity ||
        citiesData[k]?.slug?.toLowerCase() === rawCity
    );
    const cityName =
      cityKey ? citiesData[cityKey].name : rawCity.charAt(0).toUpperCase() + rawCity.slice(1);

    const numericDistance =
      typeof baseline?.distance === "number"
        ? baseline.distance
        : parseFloat(String(baseline?.distance || "25").replace(/[^0-9.]/g, "")) || 25;

    return {
      ...baseline,
      slug,
      isCityHub: true,
      from: { name: cityName, slug: rawCity },
      to: { name: cityName, slug: rawCity },
      distance: numericDistance,
      travelTime: baseline?.travelTime || "45 min",
      routes: baseline?.routes || [
        "Expressway Direct Link",
        "NH Bypass Corridor",
        "Ring Road Outer Transit",
      ],
    };
  }

  // 2. Intercity Route (e.g., noida-to-delhi-distance-travel-time or noida-to-delhi)
  const corridorKey = slug.replace("-distance-travel-time", "");
  const route = noidaRoutes[corridorKey];
  if (route) {
    const numericDistance =
      typeof route.distance === "number"
        ? route.distance
        : parseFloat(String(route.distance || "0").replace(/[^0-9.]/g, "")) || 0;

    return {
      ...route,
      slug,
      isCityHub: false,
      distance: numericDistance,
      travelTime: route.travelTime || "1 hr",
      routes: route.routes || [
        `${route.from.name} Bypass Corridor`,
        "Primary State Expressway",
        `${route.to.name} City Connector`,
      ],
    };
  }

  return null;
}

/* =========================================================================
   DYNAMIC METADATA
========================================================================= */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = resolveDistanceData(slug);

  if (!route) {
    return { title: "Distance & Travel Time | NoidaCab" };
  }

  const title = route.isCityHub
    ? `${route.from.name} Distance & Travel Time | Highway Routes & Cab Fare`
    : `${route.from.name} to ${route.to.name} Distance & Travel Time | NoidaCab`;

  const description = route.isCityHub
    ? `Real-time highway distance, travel duration, toll info, and cab fare in ${route.from.name}. Book sedans, SUVs, and luxury Tempo Travellers with NoidaCab.`
    : `Exact road driving distance and travel duration from ${route.from.name} to ${route.to.name}. Compare transparent cab prices and route details.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.noidacab.com/distance/${slug}`,
    },
  };
}

/* =========================================================================
   PAGE COMPONENT
========================================================================= */
export default async function DistanceSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const route = resolveDistanceData(slug);

  if (!route) {
    notFound();
  }

  const phoneNumber = "918377809809";
  const headline = route.isCityHub
    ? `${route.from.name} Distance & Travel Time`
    : `${route.from.name} to ${route.to.name} Distance & Travel Time`;

  const waInquiryUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello NoidaCab, I want to inquire about road distance, travel time, and cab fares for ${headline}. Please share details.`
  )}`;

  return (
    <main className="bg-white text-slate-900">
      {/* =========================================================================
          1. HERO SECTION
      ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-300 bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-950/15 bg-white/70 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-2xs backdrop-blur-md">
                  <Compass className="h-3.5 w-3.5 text-amber-700" />
                  Verified Highway Transit
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur-md">
                  <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  4.9/5 Rating (15k+ Trips)
                </div>
              </div>

              <h1 className="mt-5 text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {headline}
              </h1>

              <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-slate-800 sm:text-base sm:leading-7">
                {route.isCityHub
                  ? `Real-time driving distance, highway driving duration, toll transit, and door-to-door cab options across ${route.from.name}. Book verified sedans, spacious SUVs, and luxury Tempo Travellers with transparent per-km billing.`
                  : `Real-time driving distance, highway driving duration, toll transit, and door-to-door cab options from ${route.from.name} to ${route.to.name}. Transparent rates and verified highway chauffeurs.`}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-2.5 text-xs font-semibold text-slate-800 sm:grid-cols-2 sm:text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Expressway routing with zero hidden charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Verified commercial green/yellow plate fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Police-vetted highway chauffeurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                  <span>Direct doorstep pickup across all sectors</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  Call 8377809809
                </a>

                <a
                  href={waInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-900/20 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xs backdrop-blur-xs transition hover:bg-white"
                >
                  <Zap className="h-4 w-4 fill-amber-700 text-amber-700" />
                  Quick WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-amber-950/10 backdrop-blur-xl sm:p-7">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/25 blur-2xl" />

                <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      Route Intelligence
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      Transit Matrix Overview
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800">
                    Expressway Route
                  </span>
                </div>

                <div className="mt-5 space-y-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      <MapPin className="h-3 w-3" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Pickup: </span>
                      <span className="text-slate-700">{route.from.name}</span>
                      <p className="text-[10px] text-slate-500">
                        Doorstep reporting at any hotel, sector, or airport gate
                      </p>
                    </div>
                  </div>

                  <div className="ml-2.5 h-4 border-l-2 border-dashed border-slate-300" />

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <Navigation className="h-3 w-3" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Destination: </span>
                      <span className="text-slate-700">
                        {route.isCityHub ? "Designated Corridor Drop" : route.to.name}
                      </span>
                      <p className="text-[10px] text-slate-500">
                        Direct point-to-point drop-off
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                      <MapPin className="h-4 w-4 text-amber-700" />
                      <span>Total Distance</span>
                    </div>
                    <p className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      {route.distance} <span className="text-sm font-bold text-slate-600">km</span>
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">Shortest highway transit</p>
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                      <Clock3 className="h-4 w-4 text-amber-700" />
                      <span>Driving Time</span>
                    </div>
                    <p className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      {route.travelTime}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500">Standard traffic conditions</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-xs font-medium text-slate-600">
                  <span>Instant booking &amp; cab dispatch</span>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-1 font-bold text-amber-800 hover:text-amber-900 hover:underline"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-amber-700" />
                    Call Dispatch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. JOURNEY OVERVIEW METRIC CARDS
      ========================================================================= */}
      <section className="border-b border-gray-300 bg-white/95 px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Route Overview
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {headline} Insights
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Plan your travel with transparent road distance and transit duration metrics.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                Road Distance
              </p>
              <p className="mt-1 text-3xl font-black text-slate-950">
                {route.distance} <span className="text-base font-semibold text-slate-500">KM</span>
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Shortest expressway and highway bypass calculation
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Clock3 className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                Driving Time
              </p>
              <p className="mt-1 text-3xl font-black text-slate-950">{route.travelTime}</p>
              <p className="mt-2 text-xs text-slate-500">
                Calculated under normal weekday transit conditions
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Route className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                Journey Route
              </p>
              <p className="mt-1 text-xl font-black text-slate-950 truncate">
                {route.isCityHub ? `${route.from.name} Regional Transit` : `${route.from.name} ➔ ${route.to.name}`}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Point-to-point chauffeur-driven door drop
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AVAILABLE CABS FLEET
      ========================================================================= */}
      <section className="border-b border-gray-200 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Verified Fleet
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Choose Your Cab for {route.from.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Clean AC vehicles with transparent per-kilometer billing and verified chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v: Vehicle) => {
              const bookingText = encodeURIComponent(
                `Hello NoidaCab, I want to book a ${v.name} for ${headline}. Please confirm fare.`
              );

              return (
                <article
                  key={v.slug}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="relative flex h-48 items-center justify-center bg-slate-50 p-4">
                    {v.image ? (
                      <Image
                        src={v.image}
                        alt={`${v.name} for ${route.from.name}`}
                        fill
                        className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      />
                    ) : (
                      <CarFront className="h-14 w-14 text-slate-400" />
                    )}
                    {v.category && (
                      <span className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-xs border border-slate-200">
                        {v.category}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-black text-slate-950">{v.name}</h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <span>Comfortable AC • {v.seats || 4} Seats • Luggage Boot</span>
                    </div>

                    <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Starting Rate
                        </p>
                        <p className="text-lg font-black text-slate-950">{v.price}</p>
                      </div>

                      <a
                        href={`https://wa.me/${phoneNumber}?text=${bookingText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-amber-400"
                      >
                        Book Now
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ROUTE INFORMATION / HIGHWAYS
      ========================================================================= */}
      <section className="border-b border-gray-300 bg-slate-50/60 px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Highway Routing
            </span>
            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
              Popular Expressways &amp; Corridors
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Commonly preferred highways and bypass routes for travel in and around {route.from.name}.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {route.routes.map((highwayName, index) => (
              <div
                key={index}
                className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Route #{index + 1}
                  </p>
                  <p className="font-bold text-slate-900 text-sm">{highwayName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular City Routes */}
            <PopularCityRoutes
              cityName={route.from.name || "Noida"}
              vehicleSlug="taxi"
              vehicleName="Distance & Travel Cabs"
            />

      {/* =========================================================================
          5. BOOKING CTA BANNER
      ========================================================================= */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-amber-500 px-6 py-10 text-center sm:px-12 sm:py-14">
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-2xl font-black text-slate-950 sm:text-3xl lg:text-4xl">
                Ready to Book Your Ride in {route.from.name}?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-900 sm:text-base">
                Doorstep pickups, certified highway chauffeurs, and transparent billing across all Delhi NCR sectors and regional corridors.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-slate-800"
                >
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  Call 8377809809
                </a>
                <a
                  href={waInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-900/20 bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xs transition hover:bg-slate-100"
                >
                  <Zap className="h-4 w-4 fill-amber-700 text-amber-700" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}