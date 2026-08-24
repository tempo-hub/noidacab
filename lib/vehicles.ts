import { RouteData } from "@/data/routes/taxiroutes";
import { vehicles } from "@/data/vehicles";

export function getSUVVehicles() {
  return vehicles.filter(
    (vehicle) => vehicle.category?.toLowerCase() === "suv"
  );
}

export function getVehicleRouteSlug(
  route: RouteData  ,
  vehicleSlug: string
) {
  return `${route.from.slug}-to-${route.to.slug}-${vehicleSlug}-taxi`;
}