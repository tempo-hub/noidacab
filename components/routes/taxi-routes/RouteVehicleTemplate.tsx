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

export default function RouteVehicleTemplate({
  route,
}: RouteVehicleProps) {
  const vehicle = route.vehicle;

  if (!vehicle) {
    return null;
  }

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

      <RouteFAQs route={route} />

      
    </main>
  );
}