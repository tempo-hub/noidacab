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

export function RouteUrbaniaPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Force Urbania vehicle data from data/vehicles.ts
  const rawVehicle =
    vehicles.find((v) => v.slug === "urbania") ||
    vehicles.find((v) => v.category === "Urbania") ||
    vehicles.find((v) => v.slug === route.vehicleSlug);

  const vehicleData: Vehicle = {
    name: "Force Urbania",
    slug: "urbania",
    image: rawVehicle?.image || "/cabs/urbaniafirst.webp",
    price: "₹20/km",
    seats: 12,
    doors: 4,
    luggage: 8,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Urbania",
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
      q: `What advantages does the Force Urbania offer over standard Tempo Travellers for ${route.from} to ${route.to}?`,
      a: `Force Urbania features European monocoque architecture, independent front suspension, exceptionally quiet NVH insulation, aircraft-style luggage compartments, and reclining luxury bucket seats for superior ride comfort.`,
    },
    {
      q: `What seating capacities are available for Force Urbania rentals?`,
      a: `Our Force Urbania fleet includes 10-seater, 13-seater, and 17-seater luxury configurations, all outfitted with individual bucket recliners, ample walkway room, and dedicated armrests.`,
    },
    {
      q: `What is the per-kilometer rental rate for Force Urbania on this route?`,
      a: `Force Urbania rentals start from ${vehicleData.price} for outstation itineraries with a 250 km daily running minimum. The quotation includes vehicle rent, fuel, and chauffeur day allowances.`,
    },
    {
      q: `How much luggage capacity does the Force Urbania provide?`,
      a: `It offers a cavernous rear boot holding ${vehicleData.luggage}+ large travel suitcases, supplemented by overhead closed aircraft-style cabin bins for backpacks and accessories.`,
    },
    {
      q: `Can we reserve a Force Urbania for a one-way trip from ${route.from} to ${route.to}?`,
      a: `Yes, point-to-point one-way outstation luxury transfers from ${route.from} to ${route.to} are available without empty return trip charges.`,
    },
    {
      q: `How quiet and comfortable is the air conditioning and suspension?`,
      a: `The Urbania boasts dual-zone digital climate control with individual roof louvers, advanced sound dampening for whispering cabin conversations, and compliant parabolic springs that absorb highway bumps.`,
    },
    {
      q: `Are highway FASTag tolls, state border permits, and parking covered?`,
      a: `The base quote includes vehicle rental and fuel. Inter-state commercial taxes, FASTag expressway tolls, and parking fees are charged at actuals with receipts provided.`,
    },
    {
      q: `Can the Force Urbania be hired for multi-day weddings or corporate tours?`,
      a: `Yes, multi-day charters are available for corporate retreats, VIP events, and destination weddings, keeping the Urbania on 24/7 dedicated disposal in ${route.to}.`,
    },
    {
      q: `Can door-to-door pickups be scheduled across multiple sectors in ${route.from}?`,
      a: `Yes, we coordinate multi-stop door-to-door pickups across residential sectors, corporate offices, or transit junctions across ${route.from} before entering the highway.`,
    },
    {
      q: `What safety systems and chauffeur experience are guaranteed?`,
      a: `Built with European crash-tested monocoque body, ABS with EBD, rollover compliance, and dual airbags. Chauffeurs are senior highway specialists with extensive expressway driving backgrounds.`,
    },
  ];

  // Comprehensive corridor intelligence for route indexing
  const routeIntelligence = getComprehensiveRouteData(
    route.from,
    route.to,
    "urbania",
    "Force Urbania"
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
            {route.from} to {route.to} Force Urbania Rental
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <HeroSection
        location={location}
        vehicle={vehicleData}
        fare={calculatedFare}
        tagline={`Ultra-premium Force Urbania van rental from ${route.from} to ${route.to}. Experience European-style comfort, reclining bucket seats, panoramic windows, and smooth highway cruising.`}
      />

      {/* 3. FARE ESTIMATE */}
      <FareEstimate location={location} vehicle={vehicleData} />

      {/* 4. VEHICLE FEATURES */}
      <VehicleFeatures
        vehicle={vehicleData}
        highlights={[
          "Luxury reclining individual bucket seats",
          "Panoramic windows & soundproof cabin",
          "Dual digital climate control",
          "Elite verified highway chauffeurs",
        ]}
      />

      {/* COMPREHENSIVE ROUTE DETAILS (Overview, Milestones, Major Stops, Road Condition, Cab Comparison, Localities, Policies) */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="urbania"
      />

      {/* 14. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="urbania"
        vehicleName="Force Urbania"
      />

      {/* 15. POPULAR CITY ROUTES */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug="urbania"
        vehicleName="Force Urbania"
      />

      {/* 15b. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="urbania"
        vehicleName="Force Urbania"
      />

      {/* 15. TESTIMONIALS */}
      <CabTestimonials />

      {/* 16. FAQ SECTION */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Force Urbania FAQs ({route.from} to {route.to})
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

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default RouteUrbaniaPage;
