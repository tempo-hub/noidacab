import { notFound } from "next/navigation";

import { vehicles } from "@/data/vehicles";

import VehicleHero from "@/components/taxi/VehicleHero";
import VehicleOverview from "@/components/taxi/VehicleOverview";
import VehicleSpecifications from "@/components/taxi/VehicleSpecifications";
import VehicleFare from "@/components/taxi/VehicleFare";
import VehicleFeatures from "@/components/taxi/VehicleFeatures";
import VehicleRoute from "@/components/taxi/VehicleRoute";
import VehicleUseCases from "@/components/taxi/VehicleUseCases";
import VehicleBooking from "@/components/taxi/VehicleBooking";
import VehicleFAQ from "@/components/taxi/VehicleFAQ";
import VehicleCTA from "@/components/taxi/VehicleCTA";

type PageProps = {
  params: Promise<{
    vehicle: string;
  }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    vehicle: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { vehicle: slug } = await params;

  const vehicle = vehicles.find(
    (item) => item.slug === slug
  );

  if (!vehicle) {
    return {
      title: "Taxi Not Found | NoidaCab",
    };
  }

  const title = `${vehicle.name} Taxi in Noida | Fare, Booking & Details`;

  const description = `Book ${vehicle.name} taxi in Noida. ${vehicle.name} offers ${vehicle.seats} seats, ${vehicle.luggage} luggage capacity and ${vehicle.airCondition ? "air conditioning" : "non-AC travel"}. Check fare and book your ride with NoidaCab.`;

  return {
    title,
    description,

    keywords: [
      `${vehicle.name} taxi Noida`,
      `${vehicle.name} cab Noida`,
      `${vehicle.name} taxi booking`,
      `${vehicle.name} on rent Noida`,
      `${vehicle.name} fare Noida`,
    ],

    alternates: {
      canonical: `/taxi/${vehicle.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `/taxi/${vehicle.slug}`,
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

export default async function VehiclePage({
  params,
}: PageProps) {
  const { vehicle: slug } = await params;

  const vehicle = vehicles.find(
    (item) => item.slug === slug
  );

  if (!vehicle) {
    notFound();
  }

  return (
    <main>
      <VehicleHero vehicle={vehicle} />

      <VehicleOverview vehicle={vehicle} />

      <VehicleSpecifications vehicle={vehicle} />

      <VehicleFare vehicle={vehicle} />

      <VehicleFeatures vehicle={vehicle} />

      <VehicleRoute vehicle={vehicle} />

      <VehicleUseCases vehicle={vehicle} />

      <VehicleBooking vehicle={vehicle} />

      <VehicleFAQ vehicle={vehicle} />

      <VehicleCTA vehicle={vehicle} />
    </main>
  );
}