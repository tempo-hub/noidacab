import { notFound } from "next/navigation";

import {
  getNoidaOneWayRoute,
  noidaOneWayRoutes,
} from "@/data/routes/noida-one-way";
import { OneWayHero } from "@/components/routes/one-way/OneWayHero";
import { OneWayVehicles } from "@/components/routes/one-way/OneWayVehicles";
import { OneWayWhyChoose } from "@/components/routes/one-way/OneWayWhyChoose";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return noidaOneWayRoutes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const route = getNoidaOneWayRoute(slug);

  if (!route) {
    return {};
  }

  return {
    title: `${route.from} to ${route.to} One Way Cab | NoidaCab`,
    description: `Book ${route.from} to ${route.to} one way cab at affordable fares. ${route.distance} distance with comfortable cars and professional drivers.`,
  };
}

export default async function OneWayPage({ params }: Props) {
  const { slug } = await params;

  const route = getNoidaOneWayRoute(slug);

  if (!route) {
    notFound();
  }

  return (
    <main>
      <OneWayHero route={route} />

      <OneWayVehicles />

      <OneWayWhyChoose />

      {/* Add FAQ / route information / CTA here */}
    </main>
  );
}