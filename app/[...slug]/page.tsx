import { notFound } from "next/navigation";
import {
  parseRouteUrl,
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

  const parsed = parseRouteUrl(url);

  if (!parsed) return {};

  return {
    title: `${parsed.vehicle.name} Cab: ${parsed.fromName} to ${parsed.toName} | NoidaCab`,
    description: `Book a ${parsed.vehicle.name} cab from ${parsed.fromName} to ${parsed.toName}. Comfortable and reliable cab service.`,
  };
}

export default async function CabPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const url = "/" + slug.join("/");

  const parsed = parseRouteUrl(url);

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
      route={{
        fromSlug: parsed.fromSlug,
        fromName: parsed.fromName,
        toSlug: parsed.toSlug,
        toName: parsed.toName,
        distanceKm: parsed.distanceKm,
      }}
      vehicle={parsed.vehicle}
      url={url}
    />
  );
}