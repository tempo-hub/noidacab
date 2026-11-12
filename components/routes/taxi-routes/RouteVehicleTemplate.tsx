import RouteHero from "./RouteHero";
import RouteCabListing from "./RouteCabListing";

import type { RouteVehicleProps } from "./type";
import RouteVehicleDescription from "./RouteVehicleDescription";
import RouteFare from "./RouteFare";
import RouteVehicleFeatures from "./RouteVehicleFeatures";
import RouteBookingOptions from "./RouteBookingOptions";
import RouteFAQs from "./RouteFAQs";
import RouteVehicleOptions from "./RouteVehicleOptions";
import RouteBenefits from "./RouteBenefits";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RouteComprehensiveDetails from "@/components/routes/vehicles/RouteComprehensiveDetails";
import { getComprehensiveRouteData } from "@/data/masterRoutes";

export default function RouteVehicleTemplate({
  route,
}: RouteVehicleProps) {
  const vehicle = route.vehicle;

  if (!vehicle) {
    return null;
  }

  const routeIntelligence = getComprehensiveRouteData(
    route.fromName,
    route.toName,
    vehicle.slug,
    vehicle.name
  );

  return (
    <main>
      <RouteHero route={route} />

      <RouteVehicleDescription route={route} />

      <RouteFare route={route} />

      <RouteVehicleFeatures route={route} />

      <RouteVehicleOptions route={route} />

      <RouteCabListing
        route={route}
        currentVehicleSlug={vehicle.slug}
      />

      <RouteBookingOptions route={route} />
      <RouteBenefits route = {route} />

      {/* Comprehensive Route Corridor Intelligence */}
      <RouteComprehensiveDetails
        details={routeIntelligence}
        activeVehicleSlug={vehicle.slug}
      />

      {/* Popular City Routes */}
      <PopularCityRoutes
        cityName={route.fromName || "Noida"}
        vehicleSlug={vehicle.slug}
        vehicleName={vehicle.name}
      />

      <RouteFAQs route={route} />
    </main>
  );
}