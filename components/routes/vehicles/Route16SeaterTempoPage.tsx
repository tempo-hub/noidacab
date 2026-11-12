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

export function Route16SeaterTempoPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch 16 seater tempo vehicle data from data/vehicles.ts
  const rawVehicle =
    vehicles.find((v) => v.slug === "16-seater-tempo-traveller") ||
    vehicles.find((v) => v.slug === route.vehicleSlug);

  const vehicleData: Vehicle = {
    name: "16 Seater Tempo Traveller",
    slug: "16-seater-tempo-traveller",
    image: rawVehicle?.image || "/cabs/tempofirst.webp",
    price: "₹25/km",
    seats: 16,
    doors: 4,
    luggage: 14,
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
    parseFloat(vehicleData.price?.replace(/[^0-9.]/g, "") || "25") || 25;
  const distNum =
    parseFloat(String(route.distance || "180").replace(/[^0-9.]/g, "")) || 180;
  const calculatedFare = Math.round(distNum * 1.5 * ratePerKm + 500);

  const cleanSlug = (route.canonicalSlug || route.slug).replace(/^(route[-/])+/g, "");
  const url = `https://www.noidacab.com/route/${cleanSlug}`;

  const faqs = [
    {
      q: `How many passengers can travel in a 16 Seater Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `The 16 Seater Tempo Traveller accommodates 16 passengers plus 1 professional driver. It features 1x2 or 2x1 luxury pushback bucket seats with wide central walking aisle.`,
    },
    {
      q: `What is the tariff for 16 Seater Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `Billed at flat ${vehicleData.price} for outstation travel with a standard 250 km daily running minimum. Fuel and chauffeur services are included in the base quote.`,
    },
    {
      q: `How much luggage capacity does the 16 Seater Tempo Traveller offer?`,
      a: `It is equipped with a large rear boot compartment accommodating ${vehicleData.luggage} full-size suitcases, overhead racks for backpacks, and a sturdy rooftop carrier for overflow baggage.`,
    },
    {
      q: `Is the 16 Seater Tempo Traveller fully air-conditioned?`,
      a: `Yes, it features high-tonnage dual roof-mounted AC units with individual blower louvers for every passenger row, maintaining uniform temperature throughout the cabin.`,
    },
    {
      q: `Can we book a 16 Seater Tempo Traveller for a one-way trip to ${route.to}?`,
      a: `Yes! We provide point-to-point one-way outstation transfers from ${route.from} to ${route.to} with zero return kilometer fees.`,
    },
    {
      q: `How is round-trip billing structured for multi-day group tours?`,
      a: `Round trips are billed at flat ${vehicleData.price} with a 250 km/day minimum. The tempo remains with your party for local transit, temple visits, and sightseeing in ${route.to}.`,
    },
    {
      q: `Are toll charges, state entry permits, and parking included in the fare?`,
      a: `Base fare covers the vehicle and driver expenses. Inter-state passenger permit taxes and FASTag highway tolls are billed at actual government receipts.`,
    },
    {
      q: `What safety features are present in the 16 Seater Tempo Traveller?`,
      a: `All vehicles are AIS-052 compliant with speed governors, seatbelts on all seats, emergency exit doors, GPS live tracking, and first aid kits.`,
    },
    {
      q: `Can we schedule doorstep boarding across multiple locations in ${route.from}?`,
      a: `Yes, we accommodate multiple residential society and office pickups in ${route.from} so your entire group can board conveniently.`,
    },
    {
      q: `What entertainment and comfort amenities are provided on board?`,
      a: `Features include individual pushback recliners, mobile charging points for each seat row, LED screen, stereo music system, and ambient reading lights.`,
    },
  ];

  // Comprehensive corridor intelligence for route indexing
  const routeIntelligence = getComprehensiveRouteData(
    route.from,
    route.to,
    "16-seater-tempo-traveller",
    "16 Seater Tempo Traveller"
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
            {route.from} to {route.to} 16 Seater Tempo Traveller
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <HeroSection
        location={location}
        vehicle={vehicleData}
        fare={calculatedFare}
        tagline={`Spacious 16 Seater Tempo Traveller hire from ${route.from} to ${route.to}. Ideal for larger group tours, family vacations and corporate outings with verified highway chauffeurs.`}
      />

      {/* 3. FARE ESTIMATE */}
      <FareEstimate location={location} vehicle={vehicleData} />

      {/* 4. VEHICLE FEATURES */}
      <VehicleFeatures
        vehicle={vehicleData}
        highlights={[
          "16 pushback luxury seats",
          "Expansive rear luggage boot & carrier",
          "Dual overhead high-ton AC units",
          "Experienced highway chauffeurs",
        ]}
      />

      {/* COMPREHENSIVE ROUTE DETAILS (Overview, Milestones, Major Stops, Road Condition, Cab Comparison, Localities, Policies) */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="16-seater-tempo-traveller"
      />

      {/* 14. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="16-seater-tempo-traveller"
        vehicleName="16 Seater Tempo Traveller"
      />

      

      {/* 15b. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="16-seater-tempo-traveller"
        vehicleName="16 Seater Tempo Traveller"
      />

      {/* 15. TESTIMONIALS */}
      <CabTestimonials />

      {/* 16. FAQ SECTION */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              16 Seater Tempo Traveller FAQs ({route.from} to {route.to})
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
        vehicleSlug="16-seater-tempo-traveller"
        vehicleName="16 Seater Tempo Traveller"
      />

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default Route16SeaterTempoPage;
