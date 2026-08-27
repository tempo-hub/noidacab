// app/noida/nearby-tempo/[slug]/page.tsx

import { RouteData } from "@/data/routes/taxiroutes";
import { Vehicle, vehicles } from "@/data/vehicles";
import { notFound } from "next/navigation";
import HeroSection from "./HeroSection";
import TempoSection from "./TempoSection";
import BookingGuideSection from "./BookingGuideSection";
import RatingsSection from "./RatingsSection";
import WhyBookSection from "./WhyBookSection";
import AboutSection from "./AboutSection";
import FareSection from "./FareSection";
import TempoOptionsSection from "./TempoOptionsSection";
import VehicleComparisonSection from "./VehicleComparisonSection";
import TravelGuideSection from "./TravelGuideSection";
import PickupLocationsSection from "./PickupLocationsSection";
import RouteInfoSection from "./RouteInfoSection";
import RelatedServicesSection from "./RelatedServicesSection";
import BookingCTASection from "../noida-nearby/BookingCTASection";
import FAQsSection from "./FAQsSection";


type Props = {
    route: RouteData;
    vehicles: Vehicle[];
    url: string;
};

export default async function NearbyTempoTemplate({
    route,
    vehicles,
    url,
}: Props) {
  return (
    <>
        <HeroSection route={route}
        />


         <TempoSection
      route={route}
      vehicles={vehicles}
    />

    <BookingGuideSection route={route} />

    <RatingsSection route={route} />

    <WhyBookSection route={route} />

    <AboutSection route={route} />

    <FareSection route={route} />

    <TempoOptionsSection
  route={route}
  vehicles={vehicles}
/>

<VehicleComparisonSection
  route={route}
  vehicles={vehicles}
/>

<TravelGuideSection route={route} />

<PickupLocationsSection route={route} />

<RouteInfoSection route={route} />

<RelatedServicesSection />

{/* Section 14 */}
<FAQsSection
  route={route}
  url={url}
/>

{/* Section 15 */}
<BookingCTASection
  route={route}
/>

    </>
  );
}