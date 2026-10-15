import DistanceHero from "@/components/distance/DistanceHero";
import DistanceOverview from "@/components/distance/DistanceOverview";
import RouteInformation from "@/components/distance/RouteInformation";
import AvailableCabs from "@/components/distance/AvailableCabs";
import TravelDetails from "@/components/distance/TravelDetails";
import HowToTravel from "@/components/distance/HowToTravel";
import WhyChooseNoidaCab from "@/components/distance/WhyChooseNoidaCab";
import DistanceBookingCTA from "@/components/distance/DistanceBookingCTA";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import type { ParsedDistanceRoute } from "@/lib/parse-route";
import RelatedCityRoutes from "../cab/RelatedCityRoutes";

interface DynamicDistanceTravelPageProps {
  route: ParsedDistanceRoute;
}

export default function DynamicDistanceTravelPage({
  route,
}: DynamicDistanceTravelPageProps) {
  return (
    <main>
      <DistanceHero route={route} />
      <DistanceOverview route={route} />
      <AvailableCabs from={route.from} to={route.to} />
      <RouteInformation routes={route.routes} />
      <TravelDetails route={route} />
      {/* 4b. Regional Routes matched to this city */}
      <RelatedCityRoutes
        destinationCity={route.to.name}
        vehicleSlug="taxi"
        vehicleName="Taxi"
        distanceTravelTime
      />
      <HowToTravel route={route} />
      <WhyChooseNoidaCab from={route.from.name} to={route.to.name} />
      <PopularCityRoutes
        cityName={route.from.name || "Noida"}
        vehicleSlug="taxi"
        vehicleName="Distance & Travel Cabs"
      />
      <DistanceBookingCTA route={route} />
    </main>
  );
}