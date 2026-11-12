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

export function Route24SeaterTempoPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch 24 seater tempo vehicle data from data/vehicles.ts
  const rawVehicle =
    vehicles.find((v) => v.slug === "24-seater-tempo-traveller") ||
    vehicles.find((v) => v.slug === route.vehicleSlug);

  const vehicleData: Vehicle = {
    name: "24 Seater Tempo Traveller",
    slug: "24-seater-tempo-traveller",
    image: rawVehicle?.image || "/cabs/tempofirst.webp",
    price: "₹29/km",
    seats: 24,
    doors: 4,
    luggage: 20,
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
    parseFloat(vehicleData.price?.replace(/[^0-9.]/g, "") || "29") || 29;
  const distNum =
    parseFloat(String(route.distance || "180").replace(/[^0-9.]/g, "")) || 180;
  const calculatedFare = Math.round(distNum * 1.5 * ratePerKm + 500);

  const cleanSlug = (route.canonicalSlug || route.slug).replace(/^(route[-/])+/g, "");
  const url = `https://www.noidacab.com/route/${cleanSlug}`;

  const faqs = [
    {
      q: `How many passengers can travel in a 24 Seater Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `The 24 Seater Tempo Traveller is our highest capacity cruiser, accommodating up to 24 passengers comfortably plus 1 commercial chauffeur in a 2x2 pushback seating configuration with a wide central aisle.`,
    },
    {
      q: `What is the per-kilometer outstation rental rate from ${route.from} to ${route.to}?`,
      a: `Our 24 Seater Tempo Traveller is billed at flat ${vehicleData.price} for outstation travel, subject to a 250 km daily running minimum. The quotation covers vehicle rental, fuel charges, and chauffeur allowances.`,
    },
    {
      q: `How much luggage can be accommodated in the 24 Seater Tempo Traveller?`,
      a: `It is engineered with a massive dedicated rear luggage hold carrying ${vehicleData.luggage}+ large suitcases, plus overhead parcel shelves for cabin bags and an exterior roof rack with weatherproof tarpaulin.`,
    },
    {
      q: `Is the 24 Seater Tempo Traveller fully air-conditioned for hot highway drives?`,
      a: `Yes, it is equipped with high-output industrial dual AC compressors delivering cooled airflow to each row through individual directional louvers.`,
    },
    {
      q: `Can we reserve a 24 Seater Tempo Traveller for a one-way trip to ${route.to}?`,
      a: `Yes, point-to-point one-way outstation transfers from ${route.from} to ${route.to} are available without demanding return leg dead-mileage fares.`,
    },
    {
      q: `How does multi-day booking work for college tours, weddings, or corporate delegations?`,
      a: `For multi-day rentals, the vehicle remains dedicated to your group for local travel, hotel transfers, and itinerary sightseeing across ${route.to} at ${vehicleData.price} with transparent standard 250 km daily billing.`,
    },
    {
      q: `Are interstate border taxes, toll plazas, and parking fees included in the fare?`,
      a: `Base rental and fuel are included. Inter-state commercial passenger vehicle entry permits, highway FASTag tolls, and parking tickets are charged at actuals with receipts provided.`,
    },
    {
      q: `What safety features and chauffeur qualifications are provided?`,
      a: `Chauffeurs hold commercial heavy-passenger vehicle licenses with over a decade of highway experience. The vehicle is equipped with speed governors, ABS brakes, emergency exits, and a first-aid kit.`,
    },
    {
      q: `Can the 24 Seater Tempo Traveller pick up passengers from multiple sectors in ${route.from}?`,
      a: `Yes, our logistics team coordinates customized multi-point pickups across ${route.from} residential sectors, office campuses, or metro stations prior to highway departure.`,
    },
    {
      q: `What entertainment and device charging amenities are fitted on board?`,
      a: `Features include individual smartphone USB charging sockets at seating rows, a high-definition LED TV, a public address/microphone system for tour leads, and high-fidelity Bluetooth audio.`,
    },
  ];

  // Comprehensive corridor intelligence for route indexing
  const routeIntelligence = getComprehensiveRouteData(
    route.from,
    route.to,
    "24-seater-tempo-traveller",
    "24 Seater Tempo Traveller"
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
            {route.from} to {route.to} 24 Seater Tempo Traveller
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <HeroSection
        location={location}
        vehicle={vehicleData}
        fare={calculatedFare}
        tagline={`Full-size 24 Seater Tempo Traveller hire from ${route.from} to ${route.to}. Supreme capacity for school/college tours, corporate delegations and family weddings.`}
      />

      {/* 3. FARE ESTIMATE */}
      <FareEstimate location={location} vehicle={vehicleData} />

      {/* 4. VEHICLE FEATURES */}
      <VehicleFeatures
        vehicle={vehicleData}
        highlights={[
          "24 pushback seats with ample legroom",
          "Maximum luggage storage capacity",
          "High-capacity dual AC ventilation",
          "Verified commercial route chauffeurs",
        ]}
      />

      {/* COMPREHENSIVE ROUTE DETAILS (Overview, Milestones, Major Stops, Road Condition, Cab Comparison, Localities, Policies) */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="24-seater-tempo-traveller"
      />

      {/* 14. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="24-seater-tempo-traveller"
        vehicleName="24 Seater Tempo Traveller"
      />

     

      {/* 15b. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="24-seater-tempo-traveller"
        vehicleName="24 Seater Tempo Traveller"
      />

      {/* 15. TESTIMONIALS */}
      <CabTestimonials />

      {/* 16. FAQ SECTION */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              24 Seater Tempo Traveller FAQs ({route.from} to {route.to})
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
        vehicleSlug="24-seater-tempo-traveller"
        vehicleName="24 Seater Tempo Traveller"
      />

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default Route24SeaterTempoPage;
