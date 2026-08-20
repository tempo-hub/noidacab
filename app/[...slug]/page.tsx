import { notFound } from "next/navigation";

import {
  parseLocalRouteUrl,
  getAllUrlSlugs,
} from "@/lib/parse-route";

import { cabTemplates } from "@/components/templates/cab";

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