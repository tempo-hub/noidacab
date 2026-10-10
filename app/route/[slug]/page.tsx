import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { parseDynamicRouteSlug, buildPopularRouteItem } from "@/data/popularRoutesData";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import CabFleet from "@/components/cab/CabFleet";
import HowToBook from "@/components/cab/HowToBook";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import CabCTA from "@/components/cab/CabCTA";
import {
  MapPin,
  Clock,
  Car,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock3,
  Send,
  Phone,
  Sparkles,
  Users,
  Briefcase,
  Snowflake,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import RouteFAQs from "@/components/cab-routes/RouteFAQs";
import RouteFareTemplate from "@/components/routes/fare-template/RouteFareTemplate";
import { OneWayRoutePage } from "@/components/routes/one-way/OneWayRoutePage";
import type { RouteData } from "@/data/routes/taxiroutes";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const route = parseDynamicRouteSlug(slug);

  if (route.vehicleSlug === "one-way-taxi" || slug.toLowerCase().endsWith("-one-way-taxi")) {
    return {
      title: `${route.from} to ${route.to} One Way Cab Starting @ ${route.fare} | NoidaCab`,
      description: `Book a reliable one-way cab from ${route.from} to ${route.to} with NoidaCab. Clean AC cars, professional drivers, transparent fares. Distance: ${route.distance} (${route.duration}). Call 8377809809.`,
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} One Way Cab - NoidaCab`,
        description: `Book one-way cab from ${route.from} to ${route.to}. Starting fare: ${route.fare}. Zero return charges.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  const isFareRoute =
    route.vehicleSlug === "taxi-fare" ||
    slug.toLowerCase().endsWith("-taxi-fare") ||
    slug.toLowerCase().endsWith("-fare-taxi");

  if (isFareRoute) {
    return {
      title: `${route.from} to ${route.to} Taxi Fare Starting @ ${route.fare} - NoidaCab`,
      description: `Check affordable taxi fares from ${route.from} to ${route.to}. Clean AC Sedans & SUVs starting @ ₹10/km. Distance: ${route.distance} (${route.duration}). Transparent pricing, zero hidden charges. Call 8377809809.`,
      alternates: {
        canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      },
      openGraph: {
        title: `${route.from} to ${route.to} Taxi Fare - NoidaCab`,
        description: `Check transparent taxi fares from ${route.from} to ${route.to}. Starting fare: ${route.fare}.`,
        url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
        siteName: "NoidaCab",
      },
    };
  }

  return {
    title: `${route.from} to ${route.to} ${route.vehicle} | Starting ${route.fare} - NoidaCab`,
    description: `Book comfortable ${route.from} to ${route.to} ${route.vehicle.toLowerCase()} and taxi. Distance: ${route.distance} (${route.duration}). Transparent per-km billing, verified drivers, and doorstep pickup.`,
    alternates: {
      canonical: `https://www.noidacab.com/route/${route.canonicalSlug}`,
    },
    openGraph: {
      title: `${route.from} to ${route.to} ${route.vehicle} - NoidaCab`,
      description: `Fast & reliable travel between ${route.from} and ${route.to}. Starting fare: ${route.fare}.`,
      url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
      siteName: "NoidaCab",
    },
  };
}

export default async function DynamicRouteDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const route = parseDynamicRouteSlug(slug);

  if (slug.toLowerCase() !== route.canonicalSlug.toLowerCase()) {
    redirect(`/route/${route.canonicalSlug}`);
  }

  if (route.vehicleSlug === "taxi-fare" || slug.toLowerCase().endsWith("-taxi-fare")) {
    const fromSlug = route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const toSlug = route.to.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const fareRouteData: RouteData = {
      slug: `${fromSlug}-to-${toSlug}`,
      from: {
        name: route.from,
        slug: fromSlug,
      },
      to: {
        name: route.to,
        slug: toSlug,
      },
      distance: route.distance,
      duration: route.duration,
      description:
        route.description ||
        `Book affordable and reliable taxi from ${route.from} to ${route.to} with transparent per-km fares and verified drivers.`,
      popular: true,
    };

    return <RouteFareTemplate route={fareRouteData} />;
  }

  if (route.vehicleSlug === "one-way-taxi" || slug.toLowerCase().endsWith("-one-way-taxi")) {
    return (
      <OneWayRoutePage
        route={{
          slug: route.canonicalSlug,
          from: route.from,
          to: route.to,
          distance: route.distance,
          travelTime: route.duration,
          description:
            route.description ||
            `Book a reliable one-way cab from ${route.from} to ${route.to} with NoidaCab. Choose Sedan, SUV and Innova cabs with professional drivers, comfortable rides and affordable fares.`,
        }}
      />
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${route.from} to ${route.to} ${route.vehicle} Service`,
    description: route.description,
    url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
    telephone: "+918377809809",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
    },
    areaServed: [
      { "@type": "City", name: route.from },
      { "@type": "City", name: route.to },
    ],
  };

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${route.vehicle} from ${route.from} to ${route.to} (${route.distance}, Starting ${route.fare}). Please confirm fare & availability.`
  )}`;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Route Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 to-white py-20 md:py-20 border-b border-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-900 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>Expressway Certified Route</span>
                <span className="h-1 w-1 rounded-full bg-amber-500" />
                <span>{route.highway}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                {route.from} to {route.to}{" "}
                <span className="text-amber-600 block sm:inline">
                  {route.vehicle} Booking
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl">
                {route.description}
              </p>

              {/* Key Route Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs text-center">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Distance</p>
                  <p className="text-lg sm:text-2xl font-black text-gray-900 mt-1">{route.distance}</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs text-center">
                  <p className="text-xs font-semibold text-gray-400 uppercase">Duration</p>
                  <p className="text-lg sm:text-2xl font-black text-gray-900 mt-1">{route.duration}</p>
                </div>

                <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-4 shadow-xs text-center">
                  <p className="text-xs font-semibold text-amber-800 uppercase">Starting Fare</p>
                  <p className="text-lg sm:text-2xl font-black text-amber-600 mt-1">{route.fare}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-600/25 transition hover:bg-amber-500"
                >
                  <Send className="h-4 w-4" />
                  Book {route.vehicle} on WhatsApp
                </a>

                <a
                  href="tel:+918377809809"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-base font-bold text-gray-800 shadow-xs transition hover:bg-gray-50 hover:border-gray-400"
                >
                  <Phone className="h-4 w-4 text-amber-600" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Card: Quick Booking Box */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Instant Booking</h3>
                    <p className="text-xs text-gray-500">{route.from} → {route.to}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                    Instant Quote
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>PICKUP LOCATION</span>
                    </div>
                    <p className="text-base font-bold text-gray-900 mt-1">{route.from}</p>
                    <p className="text-xs text-gray-500">Doorstep pickup available across all localities</p>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-4 border border-gray-100">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                      <span className="h-2 w-2 rounded-full border-2 border-gray-400 bg-white" />
                      <span>DROP DESTINATION</span>
                    </div>
                    <p className="text-base font-bold text-gray-900 mt-1">{route.to}</p>
                    <p className="text-xs text-gray-500">Direct drop at hotel, temple, or residence</p>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-amber-50/60 border border-amber-200/50">
                    <div>
                      <p className="text-xs text-amber-800 font-medium">Selected Vehicle Tariff</p>
                      <p className="text-lg font-black text-amber-900">{route.vehicle}</p>
                    </div>
                    <span className="text-xl font-black text-amber-600">{route.fare}</span>
                  </div>

                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3.5 text-center text-sm sm:text-base font-bold text-white shadow-md shadow-amber-600/30 transition hover:bg-amber-500 cursor-pointer"
                  >
                    Confirm {route.from} to {route.to} Ride
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Available Vehicle Options & Fare Comparison */}
      <section className="bg-white/95 py-12 sm:py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              VEHICLE OPTIONS & TARIFFS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Choose Your Vehicle for {route.from} to {route.to}
            </h2>
            <p className="mt-2 text-base text-gray-600">
              All fares include vehicle rental, fuel, and experienced highway chauffeur.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {route.vehicleOptions.map((opt) => (
              <div
                key={opt.name}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xs flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                      {opt.type}
                    </span>
                    <span className="text-xl font-black text-gray-900">
                      {opt.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">{opt.name}</h3>

                  <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-amber-600" /> Seats</span>
                      <strong className="text-gray-900">{opt.seats}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-amber-600" /> Luggage</span>
                      <strong className="text-gray-900">{opt.luggage}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><Snowflake className="h-3.5 w-3.5 text-amber-600" /> AC Cabin</span>
                      <strong className="text-gray-900">Yes (Dual AC)</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/918377809809?text=${encodeURIComponent(
                      `Hello NoidaCab, I want to book a ${opt.name} from ${route.from} to ${route.to} (${opt.price}). Please confirm.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-amber-500 transition"
                  >
                    <span>Book {opt.type} Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Pickup & Drop Locations Guide */}
      <section className="bg-white/95 py-12 sm:py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Pickup points in origin */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Pickup Locations in {route.from}</h3>
                  <p className="text-xs text-gray-500">Doorstep pickup available everywhere</p>
                </div>
              </div>

              <ul className="space-y-3">
                {route.pickupPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Drop points in destination */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Drop Points in {route.to}</h3>
                  <p className="text-xs text-gray-500">Direct drop-off at your destination</p>
                </div>
              </div>

              <ul className="space-y-3">
                {route.dropPoints.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Popular Routes Section (Styled exactly like the user's reference image!) */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug={route.vehicleSlug}
        vehicleName={route.vehicle}
      />

      {/* 5. How to Book Section */}
      <HowToBook />

      {/* 6. Why Choose Us */}
      <WhyChooseCab />

      {/* 7. Testimonials */}
      <CabTestimonials />

      {/* 8. Route Specific FAQs */}
      <RouteFAQs route={route} />

      {/* 9. Final CTA */}
      <CabCTA />
    </main>
  );
}
