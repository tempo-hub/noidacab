import {
  HeroSection,
  FareEstimate,
  VehicleFeatures,
  RouteInfo,
  FAQSection,
  BookingCTA,
} from "@/components/cab-page";
import type { CabTemplateProps } from "./types";
import { StructuredData } from "@/components/cab-page/StructuredData";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import { PickupDropLocations } from "@/components/cab-page/PickupDropLocations";
import { JourneyInfo } from "@/components/cab-page/JourneyInfo";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";

export function AmazeTemplate({ location, vehicle, url }: CabTemplateProps) {
  return (
    <>

      <HeroSection location={location} vehicle={vehicle} tagline="Spacious sedan, ideal for comfortable city and outstation travel" />

      <FareEstimate location={location} vehicle={vehicle} />
      <VehicleFeatures vehicle={vehicle} highlights={["Extra legroom", "Boot space for luggage", "AC"]} />
      <RouteInfo
        location={location}
        vehicle={vehicle}
      />
      <VehicleSummary location={location} vehicle={vehicle} />
      <JourneyInfo location={location} vehicle={vehicle} />
      <PickupDropLocations
        location={location}
        vehicle={vehicle}
      />
      <WhyChooseUs
       location={location}
        vehicle={vehicle}
    />
      <WhatsIncluded
      location={location}
        vehicle={vehicle}
    />
      <BookingProcess
      location={location}
        vehicle={vehicle}
    />
      {/* <ServiceAreas
      route={{
        fromName: route.fromName,
        toName: route.toName,
      }}
      vehicle={{
        name: vehicle.name,
      }}
    /> */}

      <TravelTips
      location={location}
        vehicle={vehicle}
    />
      <TravelPlanning
         location={location}
        vehicle={vehicle}
        />
      {/* <StructuredData
      route={{
        fromName: route.fromName,
        toName: route.toName,
      }}
      vehicle={{
        name: vehicle.name,
      }}
      url={url}
    /> */}
      <FAQSection location={location} vehicle={vehicle} />
      <BookingCTA location={location} vehicle={vehicle} url={url} />
    </>
  );
}