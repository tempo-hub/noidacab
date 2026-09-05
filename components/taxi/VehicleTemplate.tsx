// components/templates/VehicleTemplate.tsx
import React from "react";
import { vehicles, Vehicle } from "@/data/vehicles";

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
import VehicleShowcaseSpecs from "./VehicleShowcaseSpecs";
import VehicleEstimatePrice from "./VehicleEstimatePrice";
import VehicleLocalSectors from "./VehicleLocalSectors";

interface VehicleTemplateProps {
  vehicle: Vehicle;
}

export default function VehicleTemplate({ vehicle }: VehicleTemplateProps) {
  const numericPrice = (() => {
    if (typeof vehicle.price === "number") return vehicle.price;
    const match = String(vehicle.price || "").match(/\d+/);
    return match ? match[0] : "12";
  })();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} Taxi Rental in Noida`,
    description: `Book ${vehicle.name} taxi in Noida with ${vehicle.seats} seats, AC, and GPS. Reliable airport, local, and outstation cab services.`,
    brand: {
      "@type": "Brand",
      name: "Noida Cab",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: numericPrice,
      price: numericPrice,
      offerCount: "1",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
    },
  };
  return (
    <main>
      <VehicleHero vehicle={vehicle} />
      <VehicleOverview vehicle={vehicle} />
      <VehicleShowcaseSpecs vehicle={vehicle} />
      <VehicleSpecifications vehicle={vehicle} />
      <VehicleEstimatePrice vehicle={vehicle} />
      <VehicleFare vehicle={vehicle} />
      <VehicleFeatures vehicle={vehicle} />
      <VehicleRoute vehicle={vehicle} />
      <VehicleLocalSectors vehicle={vehicle} />
      <VehicleUseCases vehicle={vehicle} />
      <VehicleBooking vehicle={vehicle} />
      <VehicleFAQ vehicle={vehicle} />
      <VehicleCTA vehicle={vehicle} />
    </main>
  );
}