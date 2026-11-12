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

export function Route12SeaterTempoPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch 12 seater tempo vehicle data from data/vehicles.ts
  const rawVehicle =
    vehicles.find((v) => v.slug === "12-seater-tempo-traveller") ||
    vehicles.find((v) => v.slug === route.vehicleSlug);

  const vehicleData: Vehicle = {
    name: "12 Seater Tempo Traveller",
    slug: "12-seater-tempo-traveller",
    image: rawVehicle?.image || "/cabs/tempofirst.webp",
    price: "₹20/km",
    seats: 12,
    doors: 4,
    luggage: 10,
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
    parseFloat(vehicleData.price?.replace(/[^0-9.]/g, "") || "20") || 20;
  const distNum =
    parseFloat(String(route.distance || "180").replace(/[^0-9.]/g, "")) || 180;
  const calculatedFare = Math.round(distNum * 1.5 * ratePerKm + 500);

  const cleanSlug = (route.canonicalSlug || route.slug).replace(/^(route[-/])+/g, "");
  const url = `https://www.noidacab.com/route/${cleanSlug}`;

  const faqs = [
    {
      q: `How many passengers can travel in a 12 Seater Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `The 12 Seater Tempo Traveller features 12 individual pushback luxury seats (2x1 seating layout) plus 1 dedicated commercial chauffeur, providing spacious legroom and walk-in center aisle.`,
    },
    {
      q: `What is the outstation rental rate for a 12 Seater Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `Billed at flat ${vehicleData.price} for outstation travel. The estimated trip fare is calculated transparently with a 250 km daily minimum running limit. Driver allowances and vehicle rent are included.`,
    },
    {
      q: `How much luggage can fit in the 12 Seater Tempo Traveller?`,
      a: `It features a spacious rear luggage boot that accommodates ${vehicleData.luggage} large trolley suitcases, along with full-length overhead cabin racks for backpacks and hand luggage. Waterproof rooftop luggage carriers are also provided.`,
    },
    {
      q: `Does the 12 Seater Tempo Traveller have dual high-capacity air conditioning?`,
      a: `Yes, it is equipped with high-capacity dual AC blowers with individual directional vents over every seat row, ensuring uniform cooling even in peak summer.`,
    },
    {
      q: `Can I hire a 12 Seater Tempo Traveller for a one-way drop from ${route.from} to ${route.to}?`,
      a: `Yes! We offer point-to-point one-way outstation transfers from ${route.from} to ${route.to} with zero return kilometer fees.`,
    },
    {
      q: `How is round-trip billing handled for family vacations, weddings, or corporate tours?`,
      a: `For round trips, the tempo stays exclusively with your group for local travel in ${route.to}, sightseeing stops, and return travel, billed at the flat ${vehicleData.price} rate with standard 250 km/day billing.`,
    },
    {
      q: `Are highway FASTag tolls, parking fees, and state border taxes included in the fare?`,
      a: `Vehicle rental, fuel charges, and driver daily allowances are included. Highway toll taxes (FASTag) and state border commercial entry permits are paid at actual government booth receipts.`,
    },
    {
      q: `Are the chauffeurs certified and experienced on inter-state highways?`,
      a: `All drivers possess commercial transport badges, extensive hill and expressway experience, and undergo regular background and police verification.`,
    },
    {
      q: `Can we arrange multiple doorstep pickups in ${route.from}?`,
      a: `Yes, we accommodate multiple residential, society gate, or office pickup stops across sectors in ${route.from} prior to departure.`,
    },
    {
      q: `What amenities are included inside the 12 Seater Tempo Traveller?`,
      a: `Amenities include 2x1 pushback recliners, mobile charging ports for every row, LED TV, Bluetooth sound system, first aid kit, and ambient night reading lamps.`,
    },
  ];

  // Comprehensive corridor intelligence for route indexing
  const routeIntelligence = getComprehensiveRouteData(
    route.from,
    route.to,
    "12-seater-tempo-traveller",
    "12 Seater Tempo Traveller"
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
            {route.from} to {route.to} 12 Seater Tempo Traveller
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <HeroSection
        location={location}
        vehicle={vehicleData}
        fare={calculatedFare}
        tagline={`Spacious 12 Seater Tempo Traveller hire from ${route.from} to ${route.to}. Ideal for comfortable outstation travel, family gatherings and corporate tours with verified highway chauffeurs.`}
      />

      {/* 3. FARE ESTIMATE */}
      <FareEstimate location={location} vehicle={vehicleData} />

      {/* 4. VEHICLE FEATURES */}
      <VehicleFeatures
        vehicle={vehicleData}
        highlights={[
          "12 individual pushback seats",
          "Waterproof boot space & roof carrier",
          "Dual high-ton AC blowers",
          "Verified highway chauffeurs",
        ]}
      />

      {/* COMPREHENSIVE ROUTE DETAILS (Overview, Milestones, Major Stops, Road Condition, Cab Comparison, Localities, Policies) */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="12-seater-tempo-traveller"
      />

      {/* 14. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="12-seater-tempo-traveller"
        vehicleName="12 Seater Tempo Traveller"
      />

      

      {/* 15b. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="12-seater-tempo-traveller"
        vehicleName="12 Seater Tempo Traveller"
      />

      {/* 15. TESTIMONIALS */}
      <CabTestimonials />

      {/* 16. FAQ SECTION */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              12 Seater Tempo Traveller FAQs ({route.from} to {route.to})
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
        vehicleSlug="12-seater-tempo-traveller"
        vehicleName="12 Seater Tempo Traveller"
      />

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default Route12SeaterTempoPage;
