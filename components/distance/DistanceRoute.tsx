import DistanceHero from "@/components/distance/DistanceHero";
import DistanceOverview from "./DistanceOverview";
import RouteInformation from "./RouteInformation";
import RecommendedCab from "./RecommendedCab";

import { getNearbyDistanceRoutes, type ParsedDistanceRoute } from "@/lib/parse-route";
import AvailableCabs from "./AvailableCabs";
import TravelDetails from "./TravelDetails";
import HowToTravel from "./HowToTravel";
import PopularNearbyRoutes from "./PopularNearbyRoutes";
import WhyChooseNoidaCab from "./WhyChooseNoidaCab";
import DistanceBookingCTA from "./DistanceBookingCTA";

interface DistanceRouteProps {
  route: ParsedDistanceRoute;
}

export default function DistanceRoute({
  route,
}: DistanceRouteProps) {
  const nearbyRoutes = getNearbyDistanceRoutes(
    route.slug
  );
  return (
    <main>
      <DistanceHero route={route} />

      <DistanceOverview route={route} />

      <RouteInformation
        routes={route.routes}
      />

      <RecommendedCab
  cab={route.recommendedCab}
  from={route.from}
  to={route.to}
/>

<AvailableCabs
  cabs={route.cabs}
  from={route.from}
  to={route.to}
/>

<TravelDetails
  route={route}
/>
<HowToTravel
  route={route}
/>
<WhyChooseNoidaCab
  from={route.from.name}
  to={route.to.name}
/>

      <PopularNearbyRoutes
        currentSlug={route.slug}
        routes={nearbyRoutes}
      />

      <DistanceBookingCTA
  route={route}
/>
    </main>
  );
}