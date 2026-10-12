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

export function SUVTemplate({ location, vehicle, url }: CabTemplateProps) {
  return (
    <>
      <HeroSection
        location={location}
        vehicle={vehicle}
        tagline="Spacious 6-7 Seater SUV (Ertiga / Innova) for comfortable family and outstation journeys"
      />
      <FareEstimate location={location} vehicle={vehicle} />
      <VehicleFeatures
        vehicle={vehicle}
        highlights={[
          "Spacious 6-7 passenger seating",
          "Dedicated boot space for 3-5 bags",
          "Dual-zone AC with rear blowers",
          "Highway-verified commercial chauffeur",
        ]}
      />
      <RouteInfo location={location} vehicle={vehicle} />
      <VehicleSummary location={location} vehicle={vehicle} />
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
