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
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import { vehicles, type Vehicle } from "@/data/vehicles";

export function Route16SeaterTempoPage({ route }: { route: ParsedRouteDetail }) {
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

      {/* 5. ROUTE INFO */}
      <RouteInfo location={location} vehicle={vehicleData} />

      {/* 6. VEHICLE SUMMARY */}
      <VehicleSummary location={location} vehicle={vehicleData} />

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

      {/* 14. POPULAR CITY ROUTES */}
      <PopularCityRoutes
        cityName={route.from}
        vehicleSlug="16-seater-tempo-traveller"
        vehicleName="16 Seater Tempo Traveller"
      />

      {/* 15. FAQ SECTION */}
      <FAQSection location={location} vehicle={vehicleData} />

      {/* 16. BOOKING CTA */}
      <BookingCTA location={location} vehicle={vehicleData} url={url} />
    </main>
  );
}

export default Route16SeaterTempoPage;
