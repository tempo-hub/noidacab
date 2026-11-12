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

export function RouteLuxuryTempoPage({ route }: { route: ParsedRouteDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fetch Luxury Tempo vehicle data from data/vehicles.ts
  const rawVehicle =
    vehicles.find((v) => v.slug === "luxury-tempo-traveller") ||
    vehicles.find((v) => v.slug === route.vehicleSlug);

  const vehicleData: Vehicle = {
    name: "Luxury Tempo Traveller",
    slug: "luxury-tempo-traveller",
    image: rawVehicle?.image || "/cabs/tempofirst.webp",
    price: "₹25/km",
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
    parseFloat(vehicleData.price?.replace(/[^0-9.]/g, "") || "25") || 25;
  const distNum =
    parseFloat(String(route.distance || "180").replace(/[^0-9.]/g, "")) || 180;
  const calculatedFare = Math.round(distNum * 1.5 * ratePerKm + 500);

  const cleanSlug = (route.canonicalSlug || route.slug).replace(/^(route[-/])+/g, "");
  const url = `https://www.noidacab.com/route/${cleanSlug}`;

  const faqs = [
    {
      q: `What features distinguish a Luxury Tempo Traveller on the ${route.from} to ${route.to} route?`,
      a: `Our Maharaja Luxury Tempo Travellers feature plush 1x1 and 2x1 leather captain recliners with calf support, ambient LED starlight ceiling, faux-wood interior trims, individual AC louvers, and motorized curtains for supreme privacy.`,
    },
    {
      q: `How many passenger seats are available in the Luxury Tempo Traveller?`,
      a: `Depending on your group size, our luxury fleet offers 9-seater, 10-seater, and 12-seater Maharaja recliner layouts, engineered to ensure massive legroom and zero shoulder-crowding.`,
    },
    {
      q: `What is the per-km billing rate for a Luxury Tempo Traveller from ${route.from} to ${route.to}?`,
      a: `Luxury Tempo Travellers are billed at ${vehicleData.price} for outstation itineraries with a 250 km daily minimum billing. The base quotation includes vehicle hire, fuel costs, and chauffeur allowances.`,
    },
    {
      q: `How much luggage can be carried in the Luxury Tempo Traveller?`,
      a: `The vehicle features an integrated rear luggage section accommodating ${vehicleData.luggage} large trolley suitcases and bags, keeping the passenger salon completely clutter-free.`,
    },
    {
      q: `Can we book the Luxury Tempo Traveller for a one-way transfer to ${route.to}?`,
      a: `Yes, premium one-way outstation transfers from ${route.from} to ${route.to} are available without empty return trip penalties.`,
    },
    {
      q: `Is this vehicle suitable for corporate delegations, VIP guests, and destination weddings?`,
      a: `Yes, it is our top-requested vehicle for corporate executives, wedding bride & groom family transfers, and VIP delegations seeking business-class road comfort.`,
    },
    {
      q: `What onboard entertainment and power amenities are provided?`,
      a: `Equipped with an overhead HD LED TV screen, Bluetooth stereo music system, individual 220V/USB charging sockets beside each seat, and reading lamps.`,
    },
    {
      q: `How are highway tolls, state passenger taxes, and parking fees handled?`,
      a: `Base rent and fuel are covered. Inter-state passenger commercial taxes, FASTag expressway tolls, and destination parking receipts are billed transparently at actual cost.`,
    },
    {
      q: `Can customized door-to-door pickups and mid-way restaurant breaks be arranged?`,
      a: `Yes, door-to-door pickups across ${route.from} sectors and flexible stopovers at top highway food courts en route to ${route.to} can be customized to your group's schedule.`,
    },
    {
      q: `What safety protocols and chauffeur background checks are in place?`,
      a: `Every Luxury Tempo Traveller is fitted with speed limiters, ABS, GPS tracking, and a first-aid kit. Drivers are certified senior chauffeurs with proven highway etiquette and spotless safety records.`,
    },
  ];

  // Comprehensive corridor intelligence for route indexing
  const routeIntelligence = getComprehensiveRouteData(
    route.from,
    route.to,
    "luxury-tempo-traveller",
    "Luxury Tempo Traveller"
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
            {route.from} to {route.to} Luxury Tempo Traveller
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <HeroSection
        location={location}
        vehicle={vehicleData}
        fare={calculatedFare}
        tagline={`Maharaja Luxury Tempo Traveller hire from ${route.from} to ${route.to}. Fitted with plush 1x1 / 2x1 leather recliners, LED ambiance lighting, and premium highway comfort.`}
      />

      {/* 3. FARE ESTIMATE */}
      <FareEstimate location={location} vehicle={vehicleData} />

      {/* 4. VEHICLE FEATURES */}
      <VehicleFeatures
        vehicle={vehicleData}
        highlights={[
          "Maharaja plush leather recliners",
          "Ambient mood lighting & charging points",
          "Chilled dual AC cabin",
          "Top-rated highway chauffeurs",
        ]}
      />

      {/* COMPREHENSIVE ROUTE DETAILS (Overview, Milestones, Major Stops, Road Condition, Cab Comparison, Localities, Policies) */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="luxury-tempo-traveller"
      />

      {/* 14. ROUTE & FLEET INTELLIGENCE SEO GUIDE */}
      <VehicleRouteSeoGuide
        route={route}
        vehicleSlug="luxury-tempo-traveller"
        vehicleName="Luxury Tempo Traveller"
      />

      

      {/* 15b. RELATED REGIONAL CITY ROUTES */}
      <RelatedCityRoutes
        destinationCity={route.to}
        vehicleSlug="luxury-tempo-traveller"
        vehicleName="Luxury Tempo Traveller"
      />

      {/* 15. TESTIMONIALS */}
      <CabTestimonials />

      {/* 16. FAQ SECTION */}
      <section className="bg-white/95 py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Luxury Tempo Traveller FAQs ({route.from} to {route.to})
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
        vehicleSlug="luxury-tempo-traveller"
        vehicleName="Luxury Tempo Traveller"
      />

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default RouteLuxuryTempoPage;
