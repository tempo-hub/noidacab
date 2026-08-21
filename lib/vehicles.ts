import { vehicles } from "@/data/vehicles";

export function getSUVVehicles() {
  return vehicles.filter(
    (vehicle) => vehicle.category?.toLowerCase() === "suv"
  );
}