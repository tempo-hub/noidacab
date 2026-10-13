"use client";

import Link from "next/link";
import {
  HeroSection,
  FareEstimate,
  VehicleFeatures,
  RouteInfo,
  FAQSection,
  BookingCTA,
} from "@/components/cab-page";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import { PickupDropLocations } from "@/components/cab-page/PickupDropLocations";
import { JourneyInfo } from "@/components/cab-page/JourneyInfo";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RelatedCityRoutes from "./RelatedCityRoutes";
import CabTestimonials from "@/components/cab/CabTestimonials";
import VehicleRouteSeoGuide from "./VehicleRouteSeoGuide";
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import { vehicles, type Vehicle } from "@/data/vehicles";

export function RouteTempoTravellerPage({ route }: { route: ParsedRouteDetail }) {
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

  const url = `https://www.noidacab.com/route/${route.canonicalSlug || route.slug}`;

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

      {/* 5. ROUTE INFO */}
      <RouteInfo location={location} vehicle={vehicleData} />

      {/* 6. VEHICLE SUMMARY */}
      {/* <VehicleSummary location={location} vehicle={vehicleData} /> */}

      {/* 7. JOURNEY INFO */}
      {/* <JourneyInfo location={location} vehicle={vehicleData} /> */}

      {/* 8. PICKUP & DROP LOCATIONS */}
      <PickupDropLocations location={location} vehicle={vehicleData} />

      {/* 9. WHY CHOOSE US */}
      <WhyChooseUs location={location} vehicle={vehicleData} />

      {/* 10. WHAT'S INCLUDED */}
      <WhatsIncluded location={location} vehicle={vehicleData} />

      {/* 11. BOOKING PROCESS */}
      <BookingProcess location={location} vehicle={vehicleData} />

      {/* 12. TRAVEL TIPS */}
      <TravelTips location={location} vehicle={vehicleData} />

      {/* 13. TRAVEL PLANNING */}
      <TravelPlanning location={location} vehicle={vehicleData} />

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
      <FAQSection location={location} vehicle={vehicleData} />

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
