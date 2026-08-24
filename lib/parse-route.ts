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

import {
  noidaRoutes,
  type RouteData,
} from "@/data/routes/noidaRoutes";

/* =========================================================
   TYPES
========================================================= */

export type VehicleCategory =
  | "sedan"
  | "suv"
  | "tempo-traveller";

/* =========================================================
   NORMAL / CITY ROUTE
========================================================= */

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

/* =========================================================
   LOCAL ROUTE
========================================================= */

export type ParsedLocalRoute = {
  city: string;

  locationSlug: string;
  locationName: string;

  vehicle: Vehicle;

  template: string;
};

/* =========================================================
   CITY → CITY + VEHICLE ROUTE
========================================================= */

export type ParsedCityToCityVehicleRoute = {
  cityPair: string;

  fromSlug: string;
  fromName: string;

  toSlug: string;
  toName: string;

  distance: string;
  travelTime: string;

  vehicle: Vehicle;

  template: string;

  description?: string;
};

/* =========================================================
   ONE WAY ROUTE
========================================================= */

export type ParsedOneWayRoute = OneWayRoute;

/* =========================================================
   DISTANCE & TRAVEL TIME ROUTE
========================================================= */

export type ParsedDistanceRoute = RouteData & {
  template: "distance";
};

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
   DISTANCE & TRAVEL TIME URLs
========================================================= */

export function parseDistanceRouteUrl(
  url: string
): ParsedDistanceRoute | null {
  const slug = url
    .split("/")
    .filter(Boolean)
    .join("-")
    .toLowerCase();

  // Check distance URL
  if (!slug.endsWith("-distance-travel-time")) {
    return null;
  }

  const normalizedUrl = `/${slug}`;

  const urlExists = urlRoutes.some(
    (entry) =>
      entry.url
        .replace(/\/+$/, "")
        .toLowerCase() === normalizedUrl
  );

  if (!urlExists) {
    return null;
  }


  const routeSlug = slug.replace(
    "-distance-travel-time",
    ""
  );
  const route = noidaRoutes[routeSlug];

  if (!route) {
    return null;
  }

  return {
    ...route,
    template: "distance",
  };
}

export function getNearbyDistanceRoutes(
  currentSlug: string
): RouteData[] {
  return Object.values(noidaRoutes).filter(
    (route) => route.slug !== currentSlug
  );
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
   CITY → CITY + VEHICLE URLs
========================================================= */
export function parseCityToCityVehicleUrl(
  url: string
): ParsedCityToCityVehicleRoute | null {
  const slug = url
    .split("/")
    .filter(Boolean)
    .join("-")
    .toLowerCase();
  const matchedVehicle = vehicles.find(
    (vehicle) =>
      slug.endsWith(
        `-${vehicle.slug.toLowerCase()}-taxi`
      )
  );

  if (!matchedVehicle) {
    return null;
  }
  const vehicleSuffix =
    `-${matchedVehicle.slug.toLowerCase()}-taxi`;

  const cityPair = slug.slice(
    0,
    -vehicleSuffix.length
  );
  const route = getNoidaCityRoute(cityPair);

  if (!route) {
    return null;
  }
  const routeParts = cityPair.split("-to-");

  if (routeParts.length !== 2) {
    return null;
  }

  const [fromSlug, toSlug] = routeParts;

  return {
    cityPair,

    fromSlug,
    fromName: route.from,

    toSlug,
    toName: route.to,

    distance: route.distance,
    travelTime: route.travelTime,

    vehicle: matchedVehicle,

    template: "route-vehicle",

    description: route.description,
  };
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
  if (parts.length === 3) {
    const [
      city,
      locationSlug,
      vehicleSlug,
    ] = parts;
    if (!(city in cityPairRoutes)) {
      return null;
    }

    const locations =
      cityPairRoutes[
        city as CityPairSlug
      ];
    const location = locations.find(
      (item) =>
        item.slug === locationSlug
    );

    if (!location) {
      return null;
    }
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
     EXISTING SEO VEHICLE URL
  ======================================================= */

  if (parts.length === 1) {
    const slug = parts[0];
    const matchedUrl = urlRoutes.find(
      (entry) =>
        entry.url
          .replace(/^\/+/, "")
          .toLowerCase() === slug
    );

    if (!matchedUrl) {
      return null;
    }
    const vehicleMatch = slug.match(
      /^(.+)-to-(.+)-(dzire|ertiga|amaze|etios|innova-crysta)-taxi$/
    );

    if (!vehicleMatch) {
      return null;
    }

    const [
      ,
      fromSlug,
      toSlug,
      vehicleSlug,
    ] = vehicleMatch;
    const matchedVehicle =
      vehicles.find(
        (vehicle) =>
          vehicle.slug.toLowerCase() ===
          vehicleSlug.toLowerCase()
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
export function getVehiclesByCategory(
  category: VehicleCategory
): Vehicle[] {
  return vehicles.filter(
    (vehicle) =>
      vehicle.category?.toLowerCase() ===
      category
  );
}
export function getSUVVehicles(): Vehicle[] {
  return getVehiclesByCategory("suv");
}
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