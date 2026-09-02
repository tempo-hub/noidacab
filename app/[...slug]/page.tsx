import { notFound } from "next/navigation";

import {
  parseLocalRouteUrl,
  parseOneWayRouteUrl,
  parseRouteUrl,
  parseCityToCityVehicleUrl,
  parseNoidaNearbyRouteUrl,
  parseNoidaNearbyTempoRouteUrl,
  getAllUrlSlugs,
  parseDistanceRouteUrl,
} from "@/lib/parse-route";

import { cabTemplates } from "@/components/templates/cab";
import { OneWayRoutePage } from "@/components/routes/one-way/OneWayRoutePage";
import { SUVRoutePage } from "@/components/routes/suv/SUVRoutePage";
import RouteVehicleTemplate from "@/components/routes/taxi-routes/RouteVehicleTemplate";
import DistanceRoute from "@/components/distance/DistanceRoute";
import NoidaNearbyTemplate from "@/components/routes/noida-nearby/NoidaNearbyTemplate";

import {
  vehicles,
} from "@/data/vehicles";
import NearbyTempoTemplate from "@/components/routes/noida-nearbytempo/NearbyTempoTemplate";

export function generateStaticParams() {
  return getAllUrlSlugs();
}

type Params = Promise<{
  slug: string[];
}>;

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const url = "/" + slug.join("/");

  // ============================================
  // DISTANCE & TRAVEL TIME
  // ============================================

  const distanceRoute = parseDistanceRouteUrl(url);

  if (distanceRoute) {
    return {
      title: `${distanceRoute.from.name} to ${distanceRoute.to.name} Distance & Travel Time | NoidaCab`,

      description:
        `Check ${distanceRoute.from.name} to ${distanceRoute.to.name} distance, travel time, route information and cab options.`,
    };
  }

  // ============================================
  // ONE WAY
  // ============================================

  const oneWayRoute = parseOneWayRouteUrl(url);

  if (oneWayRoute) {
    return {
      title: `${oneWayRoute.from} to ${oneWayRoute.to} One Way Cab | NoidaCab`,

      description: oneWayRoute.description,
    };
  }

  // ============================================
  // CITY → CITY + VEHICLE
  // IMPORTANT: Check BEFORE nearby route
  // ============================================

  const cityToCityVehicle =
    parseCityToCityVehicleUrl(url);

  if (cityToCityVehicle) {
    return {
      title: `${cityToCityVehicle.fromName} to ${cityToCityVehicle.toName} ${cityToCityVehicle.vehicle.name} Taxi | NoidaCab`,

      description:
        cityToCityVehicle.description ??
        `Book a ${cityToCityVehicle.vehicle.name} taxi from ${cityToCityVehicle.fromName} to ${cityToCityVehicle.toName}. Comfortable and reliable cab service.`,
    };
  }

// ============================================
// NOIDA → NEARBY TEMPO TRAVELLER
// ============================================

const nearbyTempoRoute =
  parseNoidaNearbyTempoRouteUrl(url);

if (nearbyTempoRoute) {
  return {
    title: `${nearbyTempoRoute.from.name} to ${nearbyTempoRoute.to.name} Tempo Traveller | NoidaCab`,

    description:
      nearbyTempoRoute.description ??
      `Book a Tempo Traveller from ${nearbyTempoRoute.from.name} to ${nearbyTempoRoute.to.name}. Choose comfortable Tempo Traveller options for family trips, office groups, events and group travel.`,
  };
}
  // ============================================
  // NOIDA → NEARBY CITY
  // ============================================

  const nearbyRoute =
    parseNoidaNearbyRouteUrl(url);

  if (nearbyRoute) {
    const distance = parseFloat(
    String(nearbyRoute.distance).replace(/,/g, "")
  );

  const calculatedPrice = Math.round(distance * 15 + 500);
  
    return {
      title: `${nearbyRoute.from.name} to ${nearbyRoute.to.name} Taxi | From ${calculatedPrice} + 15% OFF | NoidaCab`,

      description:
        nearbyRoute.description ??
        `Book a taxi from ${nearbyRoute.from.name} to ${nearbyRoute.to.name}. Compare comfortable cabs, fares and travel options with NoidaCab.`,
    };
  }

  // ============================================
  // CATEGORY / CITY ROUTE
  // ============================================

  const route = parseRouteUrl(url);

  if (route) {
    if (route.vehicleCategory === "suv") {
      return {
        title: `${route.fromName} to ${route.toName} SUV Taxi | Ertiga & Innova | NoidaCab`,

        description:
          `Book ${route.fromName} to ${route.toName} SUV taxi with Ertiga and Innova. Comfortable AC SUV cabs for family, airport and outstation travel.`,
      };
    }
  }

  // ============================================
  // LOCALITY ROUTE
  // ============================================

  const parsed = parseLocalRouteUrl(url);
  
  if (!parsed) {
    
    return {};
  }

  return {
    title: `${parsed.vehicle.name} Cab in ${parsed.locationName}, ${parsed.city} @ ${parsed.vehicle.price} | Book Now`,

    description:
      `Book a ${parsed.vehicle.name} cab in ${parsed.locationName} for local sightseeing, airport transfers & corporate travel. City-expert drivers, clean AC cars. Call 8377809809.`,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function CabPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const url = "/" + slug.join("/");

  // ============================================
  // DISTANCE & TRAVEL TIME
  // ============================================

  const distanceRoute =
    parseDistanceRouteUrl(url);

  if (distanceRoute) {
    return (
      <DistanceRoute
        route={distanceRoute}
      />
    );
  }

  // ============================================
  // ONE WAY
  // ============================================

  const oneWayRoute =
    parseOneWayRouteUrl(url);

  if (oneWayRoute) {
    return (
      <OneWayRoutePage
        route={oneWayRoute}
      />
    );
  }

  // ============================================
  // CITY → CITY + VEHICLE
  // IMPORTANT: BEFORE NEARBY ROUTE
  // ============================================

  const cityToCityVehicle =
    parseCityToCityVehicleUrl(url);

  if (cityToCityVehicle) {
    return (
      <RouteVehicleTemplate
        route={cityToCityVehicle}
      />
    );
  }

  // ============================================
// NOIDA → NEARBY TEMPO TRAVELLER
// ============================================

const nearbyTempoRoute =
  parseNoidaNearbyTempoRouteUrl(url);

if (nearbyTempoRoute) {
  return (
    <NearbyTempoTemplate
      route={nearbyTempoRoute}
      vehicles={vehicles}
      url={url}
    />
  );
}

  // ============================================
  // NOIDA → NEARBY CITY
  // ============================================

  const nearbyRoute =
    parseNoidaNearbyRouteUrl(url);

  if (nearbyRoute) {
    return (
      <NoidaNearbyTemplate
        route={nearbyRoute}
        vehicles={vehicles}
      />
    );
  }

  // ============================================
  // SUV
  // ============================================

  const route = parseRouteUrl(url);

  if (route) {
    if (route.vehicleCategory === "suv") {
      return (
        <SUVRoutePage
          route={route}
        />
      );
    }
  }

  // ============================================
  // LOCALITY
  // ============================================

  const parsed =
    parseLocalRouteUrl(url);

  if (!parsed) {
    notFound();
  }

  const Template =
    cabTemplates[
      parsed.template as keyof typeof cabTemplates
    ];

  if (!Template) {
    notFound();
  }

  return (
    <Template
      location={{
        slug: parsed.locationSlug,
        name: parsed.locationName,
      }}
      vehicle={parsed.vehicle}
      url={url}
    />
  );
}