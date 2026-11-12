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

export function RouteTempoTravellerPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch tempo traveller vehicle data from data/vehicles.ts
  const rawVehicle =
    vehicles.find((v) => v.slug === route.vehicleSlug && v.slug !== "luxury-tempo-traveller") ||
    vehicles.find((v) => v.slug === "12-seater-tempo-traveller") ||
    vehicles.find((v) => v.category === "Tempo Traveller");

  const vehicleData: Vehicle = {
    name: "Tempo Traveller",
    slug: "tempo-traveller",
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
      q: `What Tempo Traveller seating configurations are available for ${route.from} to ${route.to}?`,
      a: `We provide 9, 12, 16, 20, and 24-seater standard Tempo Travellers as well as Maharaja luxury editions and 12-16 seater Force Urbania vans, tailored to your group size.`,
    },
    {
      q: `What is the per-kilometer outstation rental rate from ${route.from} to ${route.to}?`,
      a: `Standard Tempo Traveller rentals start from ${vehicleData.price} for outstation trips, with a 250 km daily running minimum. The rate covers vehicle rent, fuel, and chauffeur allowances.`,
    },
    {
      q: `How much luggage can fit into the Tempo Traveller?`,
      a: `It includes a generous rear boot holding up to ${vehicleData.luggage} bags, interior overhead baggage racks, and an exterior rooftop luggage carrier with rainproof tarpaulin.`,
    },
    {
      q: `Is the Tempo Traveller fitted with effective air conditioning?`,
      a: `Yes, all Tempo Travellers are equipped with heavy-duty dual AC blowers and separate roof-mounted cooling vents above each passenger seat.`,
    },
    {
      q: `Can we book a Tempo Traveller for a one-way trip to ${route.to}?`,
      a: `Yes, point-to-point one-way outstation transfers from ${route.from} to ${route.to} are available without paying for return dead-mileage.`,
    },
    {
      q: `How does round-trip or weekend tour rental work?`,
      a: `On round-trip rentals, the vehicle remains exclusively with your group for local travel, hotel transfers, and sightseeing across ${route.to} billed at ${vehicleData.price} with standard 250 km/day minimums.`,
    },
    {
      q: `Are interstate permit taxes, FASTag tolls, and parking included in the quotation?`,
      a: `Base rent and fuel are covered. Inter-state commercial permits, state border entry taxes, and FASTag expressway toll charges are billed at actuals with receipts.`,
    },
    {
      q: `Are the drivers experienced with highway routes and hill terrain?`,
      a: `Yes, our drivers possess heavy passenger commercial vehicle licenses and have 8+ years of highway driving experience with zero-accident safety track records.`,
    },
    {
      q: `Can multiple passenger pickups be scheduled in ${route.from}?`,
      a: `Yes, we coordinate convenient pickups across residential sectors, corporate offices, or transit junctions across ${route.from} before heading toward ${route.to}.`,
    },
    {
      q: `What is the cancellation and itinerary modification policy?`,
      a: `Bookings can be rescheduled or cancelled free of charge up to 24 hours prior to scheduled departure time with no hidden penalty fees.`,
    },
  ];

  // Comprehensive corridor intelligence for route indexing
  const routeIntelligence = getComprehensiveRouteData(
    route.from,
    route.to,
    "tempo-traveller",
    "Tempo Traveller"
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
            {route.from} to {route.to} Tempo Traveller
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <HeroSection
        location={location}
        vehicle={vehicleData}
        fare={calculatedFare}
        tagline={`Spacious ${vehicleData.name} hire from ${route.from} to ${route.to}. Ideal for comfortable outstation travel, family gatherings and corporate tours with verified highway chauffeurs.`}
      />

      {/* 3. FARE ESTIMATE */}
      <FareEstimate location={location} vehicle={vehicleData} />

      {/* 4. VEHICLE FEATURES */}
      <VehicleFeatures
        vehicle={vehicleData}
        highlights={[
          "Extra legroom & pushback seats",
          "Waterproof boot space & roof carrier",
          "Dual high-ton AC blowers",
          "Verified highway chauffeurs",
        ]}
      />

      {/* COMPREHENSIVE ROUTE DETAILS (Overview, Milestones, Major Stops, Road Condition, Cab Comparison, Localities, Policies) */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="tempo-traveller"
      />

      {/* 14. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="tempo-traveller"
        vehicleName="Tempo Traveller"
      />

      

      {/* 15b. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="tempo-traveller"
        vehicleName="Tempo Traveller"
      />

      {/* 15. TESTIMONIALS */}
      <CabTestimonials />

      {/* 16. FAQ SECTION */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Tempo Traveller FAQs ({route.from} to {route.to})
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
        vehicleSlug="tempo-traveller"
        vehicleName="Tempo Traveller"
      />

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default RouteTempoTravellerPage;
