import { notFound, redirect } from "next/navigation";

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
  parseContactRouteUrl,
  parseRouteFareUrl,
  parseAirportTaxiRouteUrl,
  parseServiceRoute,
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
import NoidaTaxiContactPage from "@/components/templates/NoidaTaxiContactPage";
import RouteFareTemplate from "@/components/routes/fare-template/RouteFareTemplate";
import TaxiServiceNoidaTemplate from "@/components/routes/TaxiServiceNoida/TaxiServiceNoidaTemplate";
import { getCityDetails } from "@/lib/cityData";
import DynamicTaxiServicePage from "@/components/cab-routes/DynamicTaxiServicePage";
import DynamicTaxiFarePage from "@/components/cab-routes/DynamicTaxiFarePage";
import DynamicAirportServicePage from "@/components/cab-routes/DynamicAirportServicePage";
import DynamicLocalSightseeingPage from "@/components/cab-routes/DynamicLocalSightseeingPage";
import DynamicOneWayTaxiPage from "@/components/cab-routes/DynamicOneWayTaxiPage";
import DynamicCityContactPage from "@/components/cab-routes/DynamicCityContactPage";
import DynamicCityVehiclePage from "@/components/cab-routes/DynamicCityVehiclePage";
import { parseDynamicRouteSlug } from "@/data/popularRoutesData";

export function generateStaticParams() {
  return getAllUrlSlugs();
}

type Params = Promise<{
  slug: string[];
}>;

function parseDynamicCityVehicleUrl(url: string) {
  const cleanPath = url.replace(/^\/|\/$/g, "").toLowerCase();

  if (
    cleanPath.includes("/") ||
    cleanPath.startsWith("taxi-service-in-") ||
    cleanPath.startsWith("taxi-fare-in-") ||
    cleanPath.endsWith("-taxi-fare") ||
    cleanPath.startsWith("airport-service-in-") ||
    cleanPath.startsWith("airport-taxi-in-") ||
    cleanPath.startsWith("airport-taxi-service-in-") ||
    cleanPath.startsWith("local-sightseeing-in-") ||
    cleanPath.startsWith("local-sightseeing-routes-in-") ||
    cleanPath.startsWith("one-way-taxi-in-") ||
    cleanPath.startsWith("one-way-cab-in-")
  ) {
    return null;
  }

  const vehicleRules: { pattern: RegExp; vehicleSlug: string }[] = [
    { pattern: /^luxury-tempo-traveller(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "luxury-tempo-traveller" },
    { pattern: /^12-seater-tempo-traveller(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "12-seater-tempo-traveller" },
    { pattern: /^16-seater-tempo-traveller(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "16-seater-tempo-traveller" },
    { pattern: /^20-seater-tempo-traveller(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "20-seater-tempo-traveller" },
    { pattern: /^24-seater-tempo-traveller(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "24-seater-tempo-traveller" },
    { pattern: /^tempo-traveller(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "12-seater-tempo-traveller" },
    { pattern: /^urbania(?:-rental)?(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "urbania" },
    { pattern: /^innova-crysta(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "innova-crysta" },
    { pattern: /^dzire(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "dzire" },
    { pattern: /^etios(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "etios" },
    { pattern: /^amaze(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "amaze" },
    { pattern: /^ertiga(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "ertiga" },
    { pattern: /^suv(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "ertiga" },
    { pattern: /^sedan(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "sedan-taxi" },
    { pattern: /^wagonr(?:-taxi)?-in-([a-z0-9-]+)$/, vehicleSlug: "wagonr" },
  ];

  for (const rule of vehicleRules) {
    const match = cleanPath.match(rule.pattern);
    if (match) {
      const citySlug = match[1];
      const cityInfo = getCityDetails(citySlug);
      const matched = vehicles.find((v) => v.slug === rule.vehicleSlug) || vehicles[0];
      const vehicle = { ...matched };

      if (cleanPath.startsWith("tempo-traveller")) {
        vehicle.name = "Tempo Traveller";
        vehicle.slug = "tempo-traveller";
      } else if (cleanPath.startsWith("suv")) {
        vehicle.name = "SUV Taxi";
        vehicle.slug = "suv-taxi";
      } else if (cleanPath.startsWith("sedan")) {
        vehicle.name = "Sedan Taxi";
        vehicle.slug = "sedan-taxi";
      } else if (cleanPath.startsWith("urbania")) {
        vehicle.name = "Force Urbania";
        vehicle.slug = "urbania";
      }

      return {
        vehicle,
        cityInfo,
      };
    }
  }

  return null;
}

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
  // DYNAMIC ONE-WAY TAXI IN CITY METADATA
  // ============================================
  if (url.startsWith("/one-way-taxi-in-") || url.startsWith("/one-way-cab-in-")) {
    const citySlug = url.replace(/^(\/one-way-taxi-in-|\/one-way-cab-in-)/, "").toLowerCase();
    if (citySlug === "noida") {
      return {
        title: "One Way Cab from Noida | Affordable One Way Taxi Service - NoidaCab",
        description:
          "Book affordable one-way cab service from Noida to Delhi, Gurgaon, Agra, Jaipur, Lucknow and other cities. Pay only one-side fare. Call 8377809809.",
        alternates: { canonical: "https://www.noidacab.com/one-way-taxi-in-noida" },
      };
    }
    const cityInfo = getCityDetails(citySlug);
    return {
      title: `One Way Taxi in ${cityInfo.name} | Verified Outstation Cabs Starting @ ₹10/km - NoidaCab`,
      description: `Book reliable one-way taxi in ${cityInfo.name}. Pay only for one-side travel with zero return tolls and no hidden charges. Sedan, SUV, and Innova cabs available across ${cityInfo.localities.slice(0, 3).join(", ")}. Call 8377809809.`,
      alternates: { canonical: `https://www.noidacab.com/one-way-taxi-in-${cityInfo.slug}` },
      openGraph: {
        title: `One Way Taxi in ${cityInfo.name} | NoidaCab`,
        description: `Book one-way cabs in ${cityInfo.name} with fixed per-km tariffs and verified drivers.`,
        url: `https://www.noidacab.com/one-way-taxi-in-${cityInfo.slug}`,
      },
    };
  }

  // ============================================
  // DYNAMIC CITY TAXI, AIRPORT & SIGHTSEEING METADATA
  // ============================================
  if (url.startsWith("/taxi-fare-in-")) {
    const citySlug = url.replace("/taxi-fare-in-", "").toLowerCase();
    if (citySlug === "noida") {
      return {
        title: "Taxi Fare in Noida Cabs Starting @ ₹1100 + 10% OFF - Book Now",
        description:
          "Check affordable taxi fares in Noida. Book Hatchbacks, Sedans starting from ₹1100 and SUVs starting from ₹1280. Transparent pricing, no hidden costs. Call 8377809809.",
        alternates: { canonical: "https://www.noidacab.com/noida-taxi-fare" },
      };
    }
    const cityInfo = getCityDetails(citySlug);
    return {
      title: `Taxi Fare in ${cityInfo.name} | Transparent Cabs Starting @ ₹10/km - NoidaCab`,
      description: `Check affordable taxi fares in ${cityInfo.name}. Flat per-km fares starting from ₹10/km for Sedans, ₹13/km for Ertiga, and ₹16/km for Innova Crysta. Doorstep pickup across ${cityInfo.localities.slice(0, 3).join(", ")}. Call 8377809809.`,
      alternates: { canonical: `https://www.noidacab.com/taxi-fare-in-${cityInfo.slug}` },
      openGraph: {
        title: `Taxi Fare in ${cityInfo.name} | NoidaCab`,
        description: `Check transparent taxi fares in ${cityInfo.name}. Flat ₹10/km sedan fares, verified drivers, zero surge.`,
        url: `https://www.noidacab.com/taxi-fare-in-${cityInfo.slug}`,
      },
    };
  }

  if (url.endsWith("-taxi-fare") && !url.includes("-to-")) {
    const citySlug = url.replace(/^\/|\/$/g, "").replace(/-taxi-fare$/, "").toLowerCase();
    if (citySlug === "noida") {
      return {
        title: "Taxi Fare in Noida Cabs Starting @ ₹1100 + 10% OFF - Book Now",
        description:
          "Check affordable taxi fares in Noida. Book Hatchbacks, Sedans starting from ₹1100 and SUVs starting from ₹1280. Transparent pricing, no hidden costs. Call 8377809809.",
        alternates: { canonical: "https://www.noidacab.com/noida-taxi-fare" },
      };
    }
    const cityInfo = getCityDetails(citySlug);
    return {
      title: `Taxi Fare in ${cityInfo.name} | Transparent Cabs Starting @ ₹10/km - NoidaCab`,
      description: `Check affordable taxi fares in ${cityInfo.name}. Flat per-km fares starting from ₹10/km for Sedans, ₹13/km for Ertiga, and ₹16/km for Innova Crysta. Doorstep pickup across ${cityInfo.localities.slice(0, 3).join(", ")}. Call 8377809809.`,
      alternates: { canonical: `https://www.noidacab.com/taxi-fare-in-${cityInfo.slug}` },
    };
  }

  if (url.startsWith("/taxi-service-in-")) {
    const citySlug = url.replace("/taxi-service-in-", "").toLowerCase();
    const cityInfo = getCityDetails(citySlug);
    return {
      title: `Taxi Service in ${cityInfo.name} | Reliable Cabs & Outstation Routes - NoidaCab`,
      description: `Book reliable taxi service in ${cityInfo.name} for local travel, airport transfers, and outstation trips. Flat per-km fares, clean AC cabs, and verified drivers across ${cityInfo.localities.slice(0, 3).join(", ")}.`,
      alternates: { canonical: `https://www.noidacab.com/taxi-service-in-${cityInfo.slug}` },
      openGraph: {
        title: `Taxi Service in ${cityInfo.name} | NoidaCab`,
        description: `Book cabs in ${cityInfo.name} with fixed per-km pricing starting at ₹10/km.`,
        url: `https://www.noidacab.com/taxi-service-in-${cityInfo.slug}`,
      },
    };
  }

  if (
    url.startsWith("/airport-service-in-") ||
    url.startsWith("/airport-taxi-in-") ||
    url.startsWith("/airport-taxi-service-in-")
  ) {
    const citySlug = url
      .replace(/^(\/airport-service-in-|\/airport-taxi-in-|\/airport-taxi-service-in-)/, "")
      .toLowerCase();
    const cityInfo = getCityDetails(citySlug);
    return {
      title: `Airport Taxi Service in ${cityInfo.name} | 24×7 Cab Transfers to ${cityInfo.airportName}`,
      description: `Book 24/7 airport taxi transfers in ${cityInfo.name} to ${cityInfo.airportName}. Real-time flight tracking, 15-min early arrival, and zero waiting surcharges.`,
      alternates: { canonical: `https://www.noidacab.com/airport-service-in-${cityInfo.slug}` },
      openGraph: {
        title: `Airport Taxi in ${cityInfo.name} | NoidaCab`,
        description: `Guaranteed flight catching transfers to ${cityInfo.airportName} from anywhere in ${cityInfo.name}.`,
        url: `https://www.noidacab.com/airport-service-in-${cityInfo.slug}`,
      },
    };
  }

  if (url.startsWith("/local-sightseeing-in-") || url.startsWith("/local-sightseeing-routes-in-")) {
    const citySlug = url.replace(/^(\/local-sightseeing-in-|\/local-sightseeing-routes-in-)/, "").toLowerCase();
    const cityInfo = getCityDetails(citySlug);
    return {
      title: `Local Sightseeing Taxi in ${cityInfo.name} | City Tour Packages & Heritage Cabs`,
      description: `Book full-day sightseeing taxi in ${cityInfo.name}. Visit ${cityInfo.attractions.slice(0, 3).join(", ")} in comfortable AC cabs with courteous local chauffeurs.`,
      alternates: { canonical: `https://www.noidacab.com/local-sightseeing-in-${cityInfo.slug}` },
      openGraph: {
        title: `Local Sightseeing & Heritage Tour in ${cityInfo.name} | NoidaCab`,
        description: `Explore ${cityInfo.name} at your own pace with 8hr/80km full-day packages.`,
        url: `https://www.noidacab.com/local-sightseeing-in-${cityInfo.slug}`,
      },
    };
  }

  // ============================================
  // DYNAMIC CITY VEHICLE METADATA (Dzire, Sedan, Innova, etc.)
  // ============================================
  const dynamicCityVehicle = parseDynamicCityVehicleUrl(url);
  if (dynamicCityVehicle) {
    const { vehicle, cityInfo } = dynamicCityVehicle;
    return {
      title: `${vehicle.name} Taxi in ${cityInfo.name} | Reliable Cabs @ ${vehicle.price} - NoidaCab`,
      description: `Book ${vehicle.name} cab in ${cityInfo.name} for local sightseeing, airport transfers, and outstation trips. Clean AC vehicles, verified chauffeurs, and 24/7 on-time pickup.`,
      alternates: { canonical: `https://www.noidacab.com${url}` },
      openGraph: {
        title: `${vehicle.name} Taxi in ${cityInfo.name} | NoidaCab`,
        description: `Book ${vehicle.name} in ${cityInfo.name} starting from ${vehicle.price}.`,
        url: `https://www.noidacab.com${url}`,
      },
    };
  }

  /* ====================================
  local cabs outstation corportate
  ========================================*/
  const serviceRoute = parseServiceRoute(url);

  if (serviceRoute) {
    // Format slug e.g. "airport-transfer" -> "Airport Transfer Taxi"
    const serviceTitle = serviceRoute.serviceSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      title: `${serviceTitle} in Noida | Best Rates & 24x7 Cab Service - NoidaCab`,
      description: `Book reliable ${serviceTitle.toLowerCase()} in Noida with NoidaCab. Verified drivers, clean AC cabs, on-time pickups for local, outstation, & airport travel. Call 8377809809.`,
    };
  }

  // ============================================
  // AIRPORT & NOIDA TAXI SERVICE METADATA
  // (noida-to-delhi-airport, airport-to-noida, airport-drop-taxi)
  // ============================================
  const airportTaxiRoute = parseAirportTaxiRouteUrl(url);
  if (airportTaxiRoute) {
    return {
      title: airportTaxiRoute.title,
      description: `Book 24x7 ${airportTaxiRoute.serviceName} with NoidaCab. Doorstep pickup across Noida sectors to IGI Terminal 1, 2, and 3. Clean AC Sedans & SUVs. Call 8377809809.`,
      alternates: {
        canonical: `https://www.noidacab.com${url}`,
      },
      openGraph: {
        title: airportTaxiRoute.title,
        description: `Book 24x7 ${airportTaxiRoute.serviceName} with NoidaCab. On-time doorstep pickup, professional drivers, and zero hidden charges.`,
        url: `https://www.noidacab.com${url}`,
        siteName: "Noida Cab",
        type: "website",
      },
    };
  }

  // ============================================
  // ROUTE FARE METADATA (e.g., noida-to-delhi-taxi-fare)
  // ============================================
  const routeFare = parseRouteFareUrl(url);

  if (routeFare) {
    const { route } = routeFare;

    const distance = parseFloat(
      String(route.distance).replace(/,/g, "")
    );

    const calculatedPrice = Math.round(
      distance * 1.5 * 10 + 500
    );

    const title = `${route.from.name} to ${route.to.name} Taxi Fare started @ ₹${calculatedPrice} - Noida Cab | Book Now`;

    const description = `Check ${route.from.name} to ${route.to.name} cab fare starting from ₹${calculatedPrice}. Distance: ${route.distance} (${route.duration}). Sedan, SUV & Tempo Traveller options available. Call 8377809809.`;

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
      },
    };
  }

  // ============================================
  // VEHICLE TEMPLATE ROUTE (Locality + Vehicle)
  // ============================================
  const directVehicles = parseVehicleTemplateUrl(url);

  if (directVehicles) {
    const { vehicle } = directVehicles;

    const title = `${vehicle.name} in Noida - NoidaCab @ ${vehicle.price} | Book Now`;

    const description = `Book ${vehicle.name} taxi in Noida. Features ${vehicle.seats} pushback seats, dual AC, space for ${vehicle.luggage} bags, and verified commercial drivers. Call 8377809809.`;

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
      title: `${vehicle.name} Taxi in Noida - NoidaCab @ ${vehicle.price} | Book Now`,
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

  /* =========================================================
    Contact Route Metadata
    ========================================================= */
  const contactRoute = parseContactRouteUrl(url);
  if (contactRoute) {
    const cityInfo = getCityDetails(contactRoute.citySlug);
    return {
      title: `${cityInfo.name} Taxi Contact Number | 24x7 Cab Booking Helpline: 8377809809`,
      description: `Call ${cityInfo.name} Taxi Contact Number +91-8377809809 for immediate cab booking in ${cityInfo.name}. Clean Sedans, SUVs, Innova Crysta, and Tempo Travellers across ${cityInfo.localities.slice(0, 3).join(", ")}. Instant quotation, zero surge pricing.`,
      alternates: {
        canonical: `https://www.noidacab.com${url}`,
      },
      openGraph: {
        title: `${cityInfo.name} Taxi Contact Number - 24x7 Booking Helpline`,
        description: `Instant cab booking in ${cityInfo.name}. Call or WhatsApp +91-8377809809. Verified drivers, sanitized cars, fast doorstep arrival.`,
        url: `https://www.noidacab.com${url}`,
        siteName: "NoidaCab",
        type: "website",
      },
    };
  }

  // ============================================
  // DISTANCE & TRAVEL TIME
  // ============================================

  const distanceRoute = parseDistanceRouteUrl(url);

  if (distanceRoute) {
    return {
      title: `${distanceRoute.from.name} to ${distanceRoute.to.name} Distance, Travel Time & Route | NoidaCab`,

      description:
        `Check ${distanceRoute.from.name} to ${distanceRoute.to.name} distance, travel time and route details. Get estimated journey time, cab options and travel information with NoidaCab.`,
    };
  }

  // ============================================
  // ONE WAY
  // ============================================

  const oneWayRoute = parseOneWayRouteUrl(url);

  if (oneWayRoute) {
    return {
      title: `${oneWayRoute.from} to ${oneWayRoute.to} One Way Cab | NoidaCab | Book Now`,

      description:
        `Book a reliable one-way cab from ${oneWayRoute.from} to ${oneWayRoute.to} with NoidaCab. Choose Sedan, SUV and Innova cabs with professional drivers, comfortable rides and affordable fares. Call 8448445504 to book now.`,
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
    const distance = parseFloat(
      String(nearbyTempoRoute.distance).replace(/,/g, "")
    );

    const calculatedPrice = Math.round(
      distance * 1.5 * 20 + 500
    );

    return {
      title: `${nearbyTempoRoute.from.name} to ${nearbyTempoRoute.to.name} Tempo Traveller on Rent - NoidaCab @ ₹${calculatedPrice} | Book Now`,

      description:
        `Book a Tempo Traveller from ${nearbyTempoRoute.from.name} to ${nearbyTempoRoute.to.name} from ₹${calculatedPrice}. Choose comfortable Tempo Traveller options for family trips, office groups, events and group travel. Call 8448445504 to book now.`,
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
      title: `${nearbyRoute.from.name} to ${nearbyRoute.to.name} Taxi, NoidaCab - @ ₹${calculatedPrice} + 10% OFF | Book Now`,

      description:
        `Book a reliable taxi from ${nearbyRoute.from.name} to ${nearbyRoute.to.name} with NoidaCab. Compare cab fares, vehicle options and comfortable travel choices. Call 8448445504 to book now.`,
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
    const cleanPath = url.replace(/^\/|\/$/g, "").toLowerCase();
    if (cleanPath.includes("-to-")) {
      const dynamicRoute = parseDynamicRouteSlug(cleanPath);
      if (dynamicRoute && dynamicRoute.canonicalSlug) {
        return {
          title: dynamicRoute.title,
          description: dynamicRoute.description,
          alternates: {
            canonical: `https://www.noidacab.com/route/${dynamicRoute.canonicalSlug}`,
          },
        };
      }
    }
    return {};
  }

  // Check vehicle category or slug/name for Tempo Traveller or Urbania
  const isTempo =
    parsed.vehicle.category?.toLowerCase() === "tempo-traveller" ||
    parsed.vehicle.slug?.toLowerCase().includes("tempo") ||
    parsed.vehicle.slug?.toLowerCase().includes("urbania") ||
    parsed.vehicle.name?.toLowerCase().includes("tempo") ||
    parsed.vehicle.name?.toLowerCase().includes("urbania");

  const title = isTempo
    ? `${parsed.vehicle.name} in ${parsed.locationName}, Noida - Noida Cab @ ${parsed.vehicle.price} | Book Now`
    : `${parsed.vehicle.name} Taxi in ${parsed.locationName}, Noida - Noida Cab @ ${parsed.vehicle.price} | Book Now`;

  const description = isTempo
    ? `Hire a ${parsed.vehicle.name} in ${parsed.locationName} for group tours, corporate events, outstation trips & weddings. Verified drivers, pushback seats & AC luxury. Call 8377809809.`
    : `Book a ${parsed.vehicle.name} cab in ${parsed.locationName} for local travel, airport transfers & outstation journeys. Verified drivers, clean AC cars & zero surge. Call 8377809809.`;

  return {
    title,
    description,
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
  const cleanPath = url.replace(/^\/|\/$/g, "").toLowerCase();

  // ============================================
  // DYNAMIC INTERCITY ROUTE REDIRECT
  // Handles routes like:
  // - /noida-to-delhi-contact-number
  // - /noida-to-delhi-12-seater-tempo-traveller
  // - /noida-to-delhi-16-seater-tempo-traveller, etc.
  // Redirects dynamically to canonical /route/[slug]
  // ============================================
  const isDynamicRouteDirect =
    cleanPath.includes("-to-") &&
    (cleanPath.includes("contact") ||
      cleanPath.includes("helpline") ||
      cleanPath.includes("12-seater") ||
      cleanPath.includes("16-seater") ||
      cleanPath.includes("20-seater") ||
      cleanPath.includes("24-seater"));

  if (isDynamicRouteDirect) {
    const dynamicRoute = parseDynamicRouteSlug(cleanPath);
    if (dynamicRoute && dynamicRoute.canonicalSlug) {
      redirect(`/route/${dynamicRoute.canonicalSlug}`);
    }
  }

  // ============================================
  // DYNAMIC CITY TAXI, AIRPORT & SIGHTSEEING PAGES
  // ============================================
  if (url.startsWith("/taxi-fare-in-")) {
    const citySlug = url.replace("/taxi-fare-in-", "").toLowerCase();
    if (citySlug === "noida") {
      redirect("/noida-taxi-fare");
    }
    const cityInfo = getCityDetails(citySlug);
    return <DynamicTaxiFarePage city={cityInfo} />;
  }

  if (url.endsWith("-taxi-fare") && !url.includes("-to-")) {
    const citySlug = url.replace(/^\/|\/$/g, "").replace(/-taxi-fare$/, "").toLowerCase();
    if (citySlug === "noida") {
      redirect("/noida-taxi-fare");
    }
    const cityInfo = getCityDetails(citySlug);
    return <DynamicTaxiFarePage city={cityInfo} />;
  }

  if (url.startsWith("/taxi-service-in-")) {
    const citySlug = url.replace("/taxi-service-in-", "").toLowerCase();
    const cityInfo = getCityDetails(citySlug);
    return <DynamicTaxiServicePage city={cityInfo} />;
  }

  if (
    url.startsWith("/airport-service-in-") ||
    url.startsWith("/airport-taxi-in-") ||
    url.startsWith("/airport-taxi-service-in-")
  ) {
    const citySlug = url
      .replace(/^(\/airport-service-in-|\/airport-taxi-in-|\/airport-taxi-service-in-)/, "")
      .toLowerCase();
    const cityInfo = getCityDetails(citySlug);
    return <DynamicAirportServicePage city={cityInfo} />;
  }

  if (url.startsWith("/local-sightseeing-in-") || url.startsWith("/local-sightseeing-routes-in-")) {
    const citySlug = url.replace(/^(\/local-sightseeing-in-|\/local-sightseeing-routes-in-)/, "").toLowerCase();
    const cityInfo = getCityDetails(citySlug);
    return <DynamicLocalSightseeingPage city={cityInfo} />;
  }

  if (url.startsWith("/one-way-taxi-in-") || url.startsWith("/one-way-cab-in-")) {
    const citySlug = url.replace(/^(\/one-way-taxi-in-|\/one-way-cab-in-)/, "").toLowerCase();
    if (citySlug === "noida") {
      redirect("/one-way-taxi-in-noida");
    }
    const cityInfo = getCityDetails(citySlug);
    return <DynamicOneWayTaxiPage city={cityInfo} />;
  }

  // ============================================
  // DYNAMIC CITY VEHICLE PAGES (Dzire, Sedan, Innova, etc.)
  // ============================================
  const dynamicCityVehicle = parseDynamicCityVehicleUrl(url);
  if (dynamicCityVehicle) {
    return (
      <DynamicCityVehiclePage
        city={dynamicCityVehicle.cityInfo}
        vehicle={dynamicCityVehicle.vehicle}
      />
    );
  }

  // ============================================
  // SERVICE PAGES -> TAXI SERVICE NOIDA TEMPLATE
  // (local-cab, airport-transfer, outstation-cab, etc.)
  // ============================================
  const serviceRoute = parseServiceRoute(url);
  if (serviceRoute) {
    return (
      <TaxiServiceNoidaTemplate
        serviceName={serviceRoute.serviceSlug}
        url={url}
      />
    );
  }


  // ============================================
  // AIRPORT & NOIDA TAXI SERVICE TEMPLATE
  // (noida-to-delhi-airport, airport-to-noida, airport-drop-taxi)
  // ============================================
  const airportTaxiRoute = parseAirportTaxiRouteUrl(url);
  if (airportTaxiRoute) {
    return (
      <TaxiServiceNoidaTemplate
        serviceName={airportTaxiRoute.serviceName}
        url={url}
      />
    );
  }

  // ============================================
  // ROUTE FARE COMPONENT
  // ============================================
  const routeFare = parseRouteFareUrl(url);

  if (routeFare) {
    return (
      <RouteFareTemplate
        route={routeFare.route}
      />
    );
  }

  /* =========================================================
    Content Routing Logic
  ========================================================= */
  const contactRoute = parseContactRouteUrl(url);
  if (contactRoute) {
    const cityInfo = getCityDetails(contactRoute.citySlug);
    return <DynamicCityContactPage city={cityInfo} />;
  }

  // ============================================
  // vehicle template route (locality + vehicle)
  // ============================================
  const directVehicles = parseVehicleTemplateUrl(url);

  if (directVehicles) {
    return <VehicleTemplate vehicle={directVehicles.vehicle} cityName="Noida" />;
  }



  // ============================================

  // ============================================
  // DIRECT VEHICLE PROFILE (TEMPO TRAVELLER / CABS)
  // ============================================
  const directVehicle = parseDirectVehicleUrl(url);

  if (directVehicle) {
    return <VehicleTemplate vehicle={directVehicle.vehicle} cityName="Noida" />;
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

  // Fallback for any other intercity route with "-to-" not caught by static templates
  if (cleanPath.includes("-to-")) {
    const dynamicRoute = parseDynamicRouteSlug(cleanPath);
    if (dynamicRoute && dynamicRoute.canonicalSlug) {
      redirect(`/route/${dynamicRoute.canonicalSlug}`);
    }
  }

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