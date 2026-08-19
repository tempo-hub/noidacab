import {
  HeroSection,
  FareEstimate,
  VehicleFeatures,
  RouteInfo,
  FAQSection,
  BookingCTA,
} from "@/components/cab-page";
import type { CabTemplateProps } from "./types";
import { JourneyInfo } from "@/components/cab-page/JourneyInfo";
import { PickupDropLocations } from "@/components/cab-page/PickupDropLocations";
import { WhyChooseUs } from "@/components/cab-page/WhyChooseUs";
import { WhatsIncluded } from "@/components/cab-page/WhatsIncluded";
import { BookingProcess } from "@/components/cab-page/BookingProcess";
import { ServiceAreas } from "@/components/cab-page/ServiceAreas";
import { TravelTips } from "@/components/cab-page/TravelTips";
import { StructuredData } from "@/components/cab-page/StructuredData";
import { TravelPlanning } from "@/components/cab-page/TravelPlanning";
import { VehicleSummary } from "@/components/cab-page/VehicleSummary";

export function ErtigaTemplate({ route, vehicle, url }: CabTemplateProps) {
  return (
    <>
      
      <HeroSection route={route} vehicle={vehicle} tagline="Spacious MPV, ideal for families up to 6" />
        
      <FareEstimate route={route} vehicle={vehicle} />
      <VehicleFeatures vehicle={vehicle} highlights={["Extra legroom", "Boot space for luggage", "AC"]} />
      <RouteInfo route={route} />
       <VehicleSummary  route={route} vehicle={vehicle} />
      {/* <JourneyInfo route={route} vehicle={vehicle} /> */}
      <PickupDropLocations
  route={{
    fromName: route.fromName,
    toName: route.toName,
  }}
  vehicle={{
    name: vehicle.name,
  }}
/>
<WhyChooseUs
  route={{
    fromName: route.fromName,
    toName: route.toName,
  }}
  vehicle={{
    name: vehicle.name,
  }}
/>
<WhatsIncluded
  route={{
    fromName: route.fromName,
    toName: route.toName,
  }}
  vehicle={{
    name: vehicle.name,
  }}
/>
<BookingProcess
  route={{
    fromName: route.fromName,
    toName: route.toName,
  }}
  vehicle={{
    name: vehicle.name,
  }}
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
  route={{
    fromName: route.fromName,
    toName: route.toName,
  }}
  vehicle={{
    name: vehicle.name,
  }}
/>
 <TravelPlanning
      route={{
        fromName: route.fromName,
        toName: route.toName,
      }}
      vehicle={{
        name: vehicle.name,
      }}
    />
<StructuredData
  route={{
    fromName: route.fromName,
    toName: route.toName,
  }}
  vehicle={{
    name: vehicle.name,
  }}
  url={url}
/>
      <FAQSection route={route} vehicle={vehicle} />
      <BookingCTA route={route} vehicle={vehicle} url={url} />
    </>
  );
}