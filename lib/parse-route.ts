import {
  cityPairRoutes,
  type CityPairSlug,
} from "@/data/routes";

import {
  vehicles,
  type Vehicle,
} from "@/data/vehicles";

import urlRoutes from "@/data/urlroute.json";

export type ParsedRoute = {
  cityPair: string;

  fromSlug: string;
  fromName: string;

  toSlug: string;
  toName: string;

  distanceKm: number;

  vehicle: Vehicle;

  template: string;
};

export type ParsedLocalRoute = {
  city: string;

  locationSlug: string;
  locationName: string;

  vehicle: Vehicle;

  template: string;
};

export function getAllUrlSlugs(): { slug: string[] }[] {
  return urlRoutes.map((entry) => ({
    slug: entry.url.split("/").filter(Boolean),
  }));
}

/**
 * Local URLs:
 *
 * /noida/sector-18/dzire
 * /noida/sector-62/innova
 * /noida/sector-75/ertiga
 */
export function parseLocalRouteUrl(
  url: string
): ParsedLocalRoute | null {
  const parts = url.split("/").filter(Boolean);

  if (parts.length !== 3) {
    return null;
  }

  const [city, locationSlug, vehicleSlug] = parts;

  // Check city
  if (!(city in cityPairRoutes)) {
    return null;
  }

  const locations =
    cityPairRoutes[city as CityPairSlug];

  // Find location
  const location = locations.find(
    (item) => item.slug === locationSlug
  );

  if (!location) {
    return null;
  }

  // Find vehicle
  const matchedVehicle = vehicles.find(
    (vehicle) => vehicle.slug === vehicleSlug
  );

  if (!matchedVehicle) {
    return null;
  }

  return {
    city,

    locationSlug: location.slug,
    locationName: location.name,

    vehicle: matchedVehicle,

    template: matchedVehicle.slug,
  };
}