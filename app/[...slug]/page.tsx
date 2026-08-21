import { notFound } from "next/navigation";

import {
  parseLocalRouteUrl,
  parseOneWayRouteUrl,
  parseRouteUrl,
  getAllUrlSlugs,
} from "@/lib/parse-route";

import { cabTemplates } from "@/components/templates/cab";
import { OneWayRoutePage } from "@/components/routes/one-way/OneWayRoutePage";
import { SUVRoutePage } from "@/components/routes/suv/SUVRoutePage";

export function generateStaticParams() {
  return getAllUrlSlugs();
}

type Params = Promise<{
  slug: string[];
}>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const url = "/" + slug.join("/");

  // ONE WAY ROUTE
  // --------------------------------

  const oneWayRoute = parseOneWayRouteUrl(url);

  if (oneWayRoute) {
    return {
      title: `${oneWayRoute.from} to ${oneWayRoute.to} One Way Cab | NoidaCab`,

      description: oneWayRoute.description,
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

  // --------------------------------
  // EXISTING ROUTE
  // --------------------------------
  const parsed = parseLocalRouteUrl(url);

  if (!parsed) return {};

  return {
    title: `${parsed.vehicle.name} Cab in ${parsed.locationName} | NoidaCab`,

    description: `Book a ${parsed.vehicle.name} cab in ${parsed.locationName}. Comfortable and reliable cab service.`,
  };
}

export default async function CabPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const url = "/" + slug.join("/");

  // ONE WAY ROUTES
  // ============================================

  const oneWayRoute = parseOneWayRouteUrl(url);

  if (oneWayRoute) {
    return <OneWayRoutePage route={oneWayRoute} />;
  }

  // ============================================
  // SUV ROUTES
  // ============================================

  const route = parseRouteUrl(url);

  if (route) {
    if (route.vehicleCategory === "suv") {
      return <SUVRoutePage route={route} />;
    }
  }

  // ============================================
  // EXISTING  ROUTES

  const parsed = parseLocalRouteUrl(url);

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