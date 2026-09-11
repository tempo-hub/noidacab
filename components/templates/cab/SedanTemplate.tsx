import {
  HeroSection,
  FareEstimate,
  VehicleFeatures,
  RouteInfo,
  FAQSection,
  BookingCTA,
} from "@/components/cab-page";
import type { CabTemplateProps } from "./types";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import { PickupDropLocations } from "@/components/cab-page/PickupDropLocations";
import { JourneyInfo } from "@/components/cab-page/JourneyInfo";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";
import { SedanFleetSection } from "@/components/cab-page/SedanFleetSection";

export function SedanTemplate({ location, vehicle, url }: CabTemplateProps) {
  return (
    <>
      <HeroSection
        location={location}
        vehicle={vehicle}
        tagline="Spacious AC Sedan (Dzire / Etios / Amaze) for local and outstation travel"
      />
      <FareEstimate location={location} vehicle={vehicle} />
      {/* Render all sedans matching category === "Sedan" */}
      <SedanFleetSection location={location} currentVehicleSlug={vehicle.slug} />
      <VehicleFeatures
        vehicle={vehicle}
        highlights={[
          "Comfortable 4-passenger seating",
          "Dedicated boot space for 2-3 bags",
          "Chilled climate control AC",
          "Experienced city & highway chauffeur",
        ]}
      />
      <RouteInfo location={location} vehicle={vehicle} />
      {/* <VehicleSummary location={location} vehicle={vehicle} /> */}
      <JourneyInfo location={location} vehicle={vehicle} />
      <PickupDropLocations location={location} vehicle={vehicle} />
      <WhyChooseUs location={location} vehicle={vehicle} />
      <WhatsIncluded location={location} vehicle={vehicle} />
      <BookingProcess location={location} vehicle={vehicle} />
      <TravelTips location={location} vehicle={vehicle} />
      <TravelPlanning location={location} vehicle={vehicle} />
      <FAQSection location={location} vehicle={vehicle} />
      <BookingCTA location={location} vehicle={vehicle} url={url} />
    </>
  );
}