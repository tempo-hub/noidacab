import {
  cityPairRoutes,
  type CityPairSlug,
} from "@/data/routes";

import {
  vehicles,
  type Vehicle,
} from "@/data/vehicles";

import urlRoutes from "@/data/urlroute.json";

import {
  getNoidaOneWayRoute,
  type OneWayRoute,
} from "@/data/routes/noida-one-way";

import {
  getNoidaCityRoute,
} from "@/data/routes/noida-city-routes";

/* =========================================================
   TYPES
========================================================= */

export type VehicleCategory =
  | "sedan"
  | "suv"
  | "tempo-traveller";

export type ParsedRoute = {
  cityPair: string;

  fromSlug: string;
  fromName: string;

  toSlug: string;
  toName: string;

  distance: string;
  travelTime: string;

  vehicle?: Vehicle;

  vehicleCategory?: VehicleCategory;

  template: string;

  description?: string;
};

export type ParsedLocalRoute = {
  city: string;

  locationSlug: string;
  locationName: string;

  vehicle: Vehicle;

  template: string;
};

/**
 * One Way Route
 */
export type ParsedOneWayRoute = OneWayRoute;


/* =========================================================
   ALL URL SLUGS
========================================================= */

export function getAllUrlSlugs(): { slug: string[] }[] {
  return urlRoutes.map((entry) => ({
    slug: entry.url
      .split("/")
      .filter(Boolean),
  }));
}


/* =========================================================
   NORMAL CITY ROUTES
========================================================= */

export function parseRouteUrl(
  url: string
): ParsedRoute | null {
  const slug = url
    .split("/")
    .filter(Boolean)
    .join("-")
    .toLowerCase();

  /*
   * Check SUV route first.
   */
  const suvMatch = slug.match(
    /^(.+)-to-(.+)-suv-taxi$/
  );

  if (suvMatch) {
    const [, fromSlug, toSlug] = suvMatch;

    const cityPair = `${fromSlug}-to-${toSlug}`;

    const route = getNoidaCityRoute(cityPair);

    if (!route) {
      return null;
    }

    return {
      cityPair,

      fromSlug,
      fromName: route.from,

      toSlug,
      toName: route.to,

      distance: route.distance,
      travelTime: route.travelTime,

      vehicleCategory: "suv",

      template: "suv",

      description: route.description,
    };
  }

  return null;
}


/* =========================================================
   ONE WAY URLs
========================================================= */

export function parseOneWayRouteUrl(
  url: string
): ParsedOneWayRoute | null {
  const slug = url
    .split("/")
    .filter(Boolean)
    .join("-");

  return getNoidaOneWayRoute(slug) ?? null;
}


/* =========================================================
   LOCAL URLs
========================================================= */

export function parseLocalRouteUrl(
  url: string
): ParsedLocalRoute | null {
  const parts = url
    .split("/")
    .filter(Boolean)
    .map((part) => part.toLowerCase());

  /* =======================================================
     EXISTING LOCAL URL
  ======================================================= */

  if (parts.length === 3) {
    const [
      city,
      locationSlug,
      vehicleSlug,
    ] = parts;

    /*
     * Check city
     */
    if (!(city in cityPairRoutes)) {
      return null;
    }

    const locations =
      cityPairRoutes[
        city as CityPairSlug
      ];

    /*
     * Find location
     */
    const location = locations.find(
      (item) =>
        item.slug === locationSlug
    );

    if (!location) {
      return null;
    }

    /*
     * Find vehicle
     */
    const matchedVehicle =
      vehicles.find(
        (vehicle) =>
          vehicle.slug === vehicleSlug
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

  /* =======================================================
     NEW SEO VEHICLE URL
  ======================================================= */

  if (parts.length === 1) {
    const slug = parts[0];

    /*
     * Find matching URL from JSON
     */
    const matchedUrl = urlRoutes.find(
      (entry) =>
        entry.url
          .replace(/^\/+/, "")
          .toLowerCase() === slug
    );

    if (!matchedUrl) {
      return null;
    }

    /*
     * Extract vehicle slug
     */
    const vehicleMatch = slug.match(
      /^(.+)-to-(.+)-(dzire|ertiga|innova|amaze|etios|innova-crysta)-taxi$/
    );

    if (!vehicleMatch) {
      return null;
    }

    const [
      ,
      fromSlug,
      toSlug,
      vehicleSlugFromUrl,
    ] = vehicleMatch;

      const vehicleSlug =
    vehicleSlugFromUrl === "innova-crysta"
      ? "innova"
      : vehicleSlugFromUrl;
    /*
     * Find vehicle
     */
    const matchedVehicle =
      vehicles.find(
        (vehicle) =>
          vehicle.slug.toLowerCase() ===
          vehicleSlug
      );

    if (!matchedVehicle) {
      return null;
    }

    return {
      city: fromSlug,

      locationSlug: toSlug,
      locationName: toSlug
        .split("-")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" "),

      vehicle: matchedVehicle,

      template: matchedVehicle.slug,
    };
  }

  return null;
}


/* =========================================================
   VEHICLE HELPERS
========================================================= */

/**
 * Get vehicles by category.
 */
export function getVehiclesByCategory(
  category: VehicleCategory
): Vehicle[] {
  return vehicles.filter(
    (vehicle) =>
      vehicle.category?.toLowerCase() ===
      category
  );
}


/**
 * Get SUV vehicles.
 */
export function getSUVVehicles(): Vehicle[] {
  return getVehiclesByCategory("suv");
}


/**
 * Get vehicle by slug.
 */
export function getVehicleBySlug(
  slug: string
): Vehicle | null {
  return (
    vehicles.find(
      (vehicle) =>
        vehicle.slug === slug
    ) ?? null
  );
}