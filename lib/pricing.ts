import type { Vehicle } from "@/data/vehicles";

export function getPerKmRate(vehicle: Vehicle): number {
  if (!vehicle.price) {
    console.error("Vehicle price missing:", vehicle);
    return 0;
  }

  const rate = Number(
    vehicle.price
      .replace("₹", "")
      .replace("/km", "")
      .trim()
  );

  return Number.isFinite(rate) ? rate : 0;
}

export function calculateFare(distanceKm: number, pricePerKm: number): number {
  const fare = distanceKm * 1.5 * pricePerKm + 500;

  return Math.round(fare / 10) * 10;
}