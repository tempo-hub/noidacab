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
  parseDirectVehicleUrl,
  parseVehicleTemplateUrl,
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
import VehicleTemplate from "@/components/taxi/VehicleTemplate";

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
// VEHICLE TEMPLATE ROUTE (Locality + Vehicle)
// ============================================
const directVehicles = parseVehicleTemplateUrl(url);

if (directVehicles) {
  const { vehicle } = directVehicles;

  const title = `${vehicle.name} in Noida Starting @ ${vehicle.price} | Noida Cab`;
  
  const description = `Book ${vehicle.name} (${vehicle.category}) taxi in Noida. Features ${vehicle.seats} pushback seats, dual AC, space for ${vehicle.luggage} bags, and verified commercial drivers. Call 8377809809.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://noidacab.com${url}`,
    },
    openGraph: {
      title,
      description,
      url: `https://noidacab.com${url}`,
      siteName: "Noida Cab",
      type: "website",
      images: [
        {
          url: vehicle.image.startsWith("http")
            ? vehicle.image
            : `https://noidacab.com${vehicle.image}`,
          width: 1200,
          height: 630,
          alt: `${vehicle.name} Taxi Service in Noida`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        vehicle.image.startsWith("http")
          ? vehicle.image
          : `https://noidacab.com${vehicle.image}`,
      ],
    },
    keywords: [
      `${vehicle.name} in Noida`,
      `${vehicle.name} taxi Noida`,
      `${vehicle.name} rental Noida`,
      `${vehicle.category.toLowerCase()} cab Noida`,
      "Noida taxi contact number",
      "outstation cab from Noida",
    ],
  };
}

  // ============================================
  // DIRECT VEHICLE PROFILE (TEMPO TRAVELLER / CABS)
  // ============================================
  const directVehicle = parseDirectVehicleUrl(url);

  if (directVehicle) {
    const { vehicle } = directVehicle;
    return {
      title: `${vehicle.name} Taxi in Noida Starting @ ${vehicle.price} – Book Now`,
      description: `Book a ${vehicle.name} in Noida. Features ${vehicle.seats} seats, AC travel, spacious luggage capacity & transparent billing. Call 8377809809.`,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: `${vehicle.name} Taxi in Noida | NoidaCab`,
        description: `Book a ${vehicle.name} in Noida. Features ${vehicle.seats} seats. Call 8377809809.`,
        url,
        type: "website",
        images: [
          {
            url: vehicle.image,
            alt: `${vehicle.name} taxi`,
          },
        ],
      },
    };
  }

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
  // vehicle template route (locality + vehicle)
  // ============================================
  const directVehicles = parseVehicleTemplateUrl(url);

  if (directVehicles) {
    return <VehicleTemplate vehicle={directVehicles.vehicle} />;
  }
  


  // ============================================

  // ============================================
  // DIRECT VEHICLE PROFILE (TEMPO TRAVELLER / CABS)
  // ============================================
  const directVehicle = parseDirectVehicleUrl(url);

  if (directVehicle) {
    return <VehicleTemplate vehicle={directVehicle.vehicle} />;
  }

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