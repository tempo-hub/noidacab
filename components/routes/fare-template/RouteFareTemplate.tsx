import { RouteData } from "@/data/routes/taxiroutes";
import RouteFareHero from "./RouteFareHero";
import RouteFareAvailableCabs from "./RouteFareAvailableCabs";
import RouteTripFareComparison from "./RouteTripFareComparison";
import RouteFareTable from "./RouteFareTable";
import VehicleTrust from "@/components/taxi/VehicleTrust";
import { vehicles } from "@/data/vehicles";
import RouteFareInclusions from "./RouteFareInclusions";
import RouteFareBreakdown from "./RouteFareBreakdown";
import RouteFareFAQ from "./RouteFareFAQ";
import RouteFareCTA from "./RouteFareCTA";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RouteComprehensiveDetails from "@/components/routes/vehicles/RouteComprehensiveDetails";
import { getComprehensiveRouteData } from "@/data/masterRoutes";

export default function RouteFareTemplate({ route }: { route: RouteData }) {
  const routeIntelligence = getComprehensiveRouteData(
    route.from.name,
    route.to.name,
    "taxi-fare",
    "Taxi Fare"
  );

  // Schema for Route Fare / Service SEO
  const routeSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${route.from.name} to ${route.to.name} Taxi Service`,
    provider: {
      "@type": "LocalBusiness",
      name: "Noida Cab",
      telephone: "+91-8377809809",
    },
    areaServed: [route.from.name, route.to.name],
    description: `Affordable and reliable taxi service from ${route.from.name} to ${route.to.name}. Distance: ${route.distance}, duration: ${route.duration}.`,
  };

  return (
    <main className="min-h-screen bg-white/95">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />
      
      {/* 1. Hero Section */}
      <RouteFareHero route={route} />

      {/* 2. Available Cabs List with Exact Pricing Formula */}
      <RouteFareAvailableCabs route={route} />

      {/* 3. One-Way vs Round-Trip Comparison */}
      <RouteTripFareComparison route={route} />

      {/* 4. Complete Fleet Fare Comparison Table */}
      <RouteFareTable route={route} />

      {/* 5. Fare Inclusions */}
      <RouteFareInclusions route={route} />

      {/* 6. Fare Breakdown */}
      <RouteFareBreakdown route={route} />

      {/* 7. Comprehensive Route Corridor Intelligence */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug="taxi-fare"
      />

      {/* 8. Popular City Routes */}
      <PopularCityRoutes
        cityName={route.from.name}
        vehicleSlug="taxi-fare"
        vehicleName="Taxi Fare"
      />

      {/* 9. Route-Specific FAQs + Schema.org */}
      <RouteFareFAQ route={route} />

      {/* 10. Trust & Reliability Section */}
      <VehicleTrust vehicle={vehicles[0]} />

      {/* 11. Final Booking CTA Bar */}
      <RouteFareCTA route={route} />
    </main>
  );
}
