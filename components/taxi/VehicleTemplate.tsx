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

interface VehicleTemplateProps {
  vehicle: Vehicle;
}

export default function VehicleTemplate({ vehicle }: VehicleTemplateProps) {
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