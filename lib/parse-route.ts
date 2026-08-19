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

export function getAllUrlSlugs(): { slug: string[] }[] {
  return urlRoutes.map((entry) => ({
    slug: entry.url.split("/").filter(Boolean),
  }));
}

export function parseRouteUrl(
  url: string
): ParsedRoute | null {
  const parts = url.split("/").filter(Boolean);

  if (parts.length !== 2) {
    return null;
  }

  const [cityPair, combinedSlug] = parts;

  if (!(cityPair in cityPairRoutes)) {
    return null;
  }

  const routes =
    cityPairRoutes[cityPair as CityPairSlug];

  // Find vehicle from the end of the URL
  const matchedVehicle = [...vehicles]
    .sort((a, b) => b.slug.length - a.slug.length)
    .find((vehicle) =>
      combinedSlug.endsWith(`-${vehicle.slug}`)
    );

  if (!matchedVehicle) {
    return null;
  }

  // Remove vehicle slug
  const routeSlug = combinedSlug.slice(
    0,
    combinedSlug.length -
      matchedVehicle.slug.length -
      1
  );

  // Find route in the correct route file
  const matchedRoute = routes.find(
    (route) =>
      `${route.fromSlug}-to-${route.toSlug}` ===
      routeSlug
  );

  if (!matchedRoute) {
    return null;
  }

  return {
    cityPair,

    fromSlug: matchedRoute.fromSlug,
    fromName: matchedRoute.fromName,

    toSlug: matchedRoute.toSlug,
    toName: matchedRoute.toName,

    distanceKm: matchedRoute.distanceKm,

    vehicle: matchedVehicle,

    template: matchedVehicle.slug,
  };
}