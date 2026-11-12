"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  HeroSection,
  FareEstimate,
  VehicleFeatures,
  BookingCTA,
} from "@/components/cab-page";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RelatedCityRoutes from "./RelatedCityRoutes";
import CabTestimonials from "@/components/cab/CabTestimonials";
import VehicleRouteSeoGuide from "./VehicleRouteSeoGuide";
import RouteComprehensiveDetails from "./RouteComprehensiveDetails";
import { getComprehensiveRouteData } from "@/data/masterRoutes";
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import { vehicles, type Vehicle } from "@/data/vehicles";

export function Route20SeaterTempoPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch 20 seater tempo vehicle data from data/vehicles.ts
  const rawVehicle =
    vehicles.find((v) => v.slug === "20-seater-tempo-traveller") ||
    vehicles.find((v) => v.slug === route.vehicleSlug);

  const vehicleData: Vehicle = {
    name: "20 Seater Tempo Traveller",
    slug: "20-seater-tempo-traveller",
    image: rawVehicle?.image || "/cabs/tempofirst.webp",
    price: "₹27/km",
    seats: 20,
    doors: 4,
    luggage: 18,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Tempo Traveller",
  };

  const location = {
    slug:
      route.canonicalSlug ||
      `${route.from.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-to-${route.to
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`,
    name: `${route.from} to ${route.to}`,
  };

  const ratePerKm =
    parseFloat(vehicleData.price?.replace(/[^0-9.]/g, "") || "27") || 27;
  const distNum =
    parseFloat(String(route.distance || "180").replace(/[^0-9.]/g, "")) || 180;
  const calculatedFare = Math.round(distNum * 1.5 * ratePerKm + 500);

  const cleanSlug = (route.canonicalSlug || route.slug).replace(/^(route[-/])+/g, "");
  const url = `https://www.noidacab.com/route/${cleanSlug}`;

  const faqs = [
    {
      q: `How many passengers can travel in a 20 Seater Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `The 20 Seater Tempo Traveller comfortably accommodates up to 20 passengers plus 1 commercial chauffeur. It is configured with 2x1 pushback luxury seating, high headroom, and a wide walking aisle.`,
    },
    {
      q: `What is the outstation tariff for a 20 Seater Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `Billed at flat ${vehicleData.price} for outstation travel with a 250 km daily running minimum. The quote covers vehicle rent, fuel, and chauffeur allowances.`,
    },
    {
      q: `How much luggage can fit in the 20 Seater Tempo Traveller?`,
      a: `It features a dedicated rear luggage compartment that easily holds ${vehicleData.luggage} large trolley suitcases, plus overhead racks for smaller bags and a full-length rooftop carrier.`,
    },
    {
      q: `Is the 20 Seater Tempo Traveller fitted with powerful dual air conditioning?`,
      a: `Yes, it comes with high-capacity dual AC compressor units and individual passenger air vents spanning all seating rows for instant, uniform cooling.`,
    },
    {
      q: `Can we hire a 20 Seater Tempo Traveller for a one-way trip to ${route.to}?`,
      a: `Yes! Point-to-point one-way outstation transfers from ${route.from} to ${route.to} are available with zero return journey charges.`,
    },
    {
      q: `How does round-trip billing work for weddings and large family excursions?`,
      a: `For round trips, the 20 Seater Tempo Traveller remains exclusively at your disposal in ${route.to} for local event transportation, hotel transfers, and sightseeing at ${vehicleData.price} with standard 250 km/day billing.`,
    },
    {
      q: `Are state border entry taxes, FASTag tolls, and parking included?`,
      a: `Vehicle rental and fuel are covered. Inter-state commercial permit taxes and highway FASTag tolls are billed at actuals based on official receipts.`,
    },
    {
      q: `Are the chauffeurs experienced with large commercial vehicles on highways?`,
      a: `Yes, all chauffeurs hold valid heavy passenger vehicle commercial licenses with 8+ years of inter-state driving experience on routes like Yamuna Expressway and NH corridors.`,
    },
    {
      q: `Can multiple boarding points be scheduled across ${route.from}?`,
      a: `Yes, we accommodate multiple coordinated pickup points across residential sectors and business hubs in ${route.from} before commencing the highway journey.`,
    },
    {
      q: `What onboard entertainment and charging options are available?`,
      a: `Equipped with individual mobile USB charging ports, high-definition LED TV, premium Bluetooth audio sound system, and soft night cabin illumination.`,
    },
  ];

  // Comprehensive corridor intelligence for route indexing
  const routeIntelligence = getComprehensiveRouteData(
    route.from,
    route.to,
    "20-seater-tempo-traveller",
    "20 Seater Tempo Traveller"
  );

  return (
    <main className="min-h-screen bg-white">
      {/* 1. BREADCRUMBS */}
      <nav className="border-b border-gray-100 bg-slate-50 py-3 text-xs sm:text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/cab" className="hover:text-amber-600">
            Cab Routes
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">
            {route.from} to {route.to} 20 Seater Tempo Traveller
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <HeroSection
        location={location}
        vehicle={vehicleData}
        fare={calculatedFare}
        tagline={`Heavy-duty 20 Seater Tempo Traveller hire from ${route.from} to ${route.to}. Perfect for large group expeditions, wedding guests and corporate events.`}
      />

      {/* 3. FARE ESTIMATE */}
      <FareEstimate location={location} vehicle={vehicleData} />

      {/* 4. VEHICLE FEATURES */}
      <VehicleFeatures
        vehicle={vehicleData}
        highlights={[
          "20 comfortable pushback seats",
          "Heavy-duty outstation luggage capacity",
          "Dual climate blowers with individual vents",
          "Commercial highway license chauffeurs",
        ]}
      />

      {/* COMPREHENSIVE ROUTE DETAILS (Overview, Milestones, Major Stops, Road Condition, Cab Comparison, Localities, Policies) */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="20-seater-tempo-traveller"
      />

      {/* 14. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="20-seater-tempo-traveller"
        vehicleName="20 Seater Tempo Traveller"
      />

      

      {/* 15b. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="20-seater-tempo-traveller"
        vehicleName="20 Seater Tempo Traveller"
      />

      {/* 15. TESTIMONIALS */}
      <CabTestimonials />

      {/* 16. FAQ SECTION */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              20 Seater Tempo Traveller FAQs ({route.from} to {route.to})
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

      {/* 15. POPULAR CITY ROUTES */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug="20-seater-tempo-traveller"
        vehicleName="20 Seater Tempo Traveller"
      />

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default Route20SeaterTempoPage;
