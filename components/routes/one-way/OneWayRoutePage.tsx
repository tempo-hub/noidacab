import { OneWayHero } from "./OneWayHero";

import { OneWayVehicles } from "./OneWayVehicles";

import { OneWayTravelInfo } from "./OneWayTravelInfo";

import { OneWayWhyChoose } from "./OneWayWhyChoose";
import { OneWayBookingBar } from "./OneWayBookingBar";
import { OneWayRouteOverview } from "./OneWayRouteOverview";
import { OneWayFareHighlights } from "./OneWayFareHighlights";
import { OneWayRouteDetails } from "./OneWayRouteDetails";
import { OneWayPickupAreas } from "./OneWayPickupAreas";
import { OneWayFAQ } from "./OneWayFAQ";
import { OneWayCTA } from "./OneWayCTA";


type Props = {
  route: {
    slug: string;
    from: string;
    to: string;
    distance: string;
    travelTime: string;
    description: string;
  };
};

export function OneWayRoutePage({ route }: Props) {
  return (
    <main className="">
      {/* 1. Hero */}
      <OneWayHero route={route} />

      {/* 2. Quick booking / route summary */}
      <OneWayBookingBar route={route} />

      {/* 3. SEO route introduction */}
      <OneWayRouteOverview route={route} />

      {/* 4. Fleet */}
      <OneWayVehicles />

      {/* 5. Fare information */}
      <OneWayFareHighlights route={route} />

      {/* 6. Detailed route information */}
      <OneWayRouteDetails route={route} />

      {/* 7. Travel information */}
      <OneWayTravelInfo route={route} />

      {/* 8. Pickup locations */}
      <OneWayPickupAreas route={route} />

      {/* 9. Why choose NoidaCab */}
      <OneWayWhyChoose />

      {/* 10. FAQ */}
      <OneWayFAQ route={route} />

      {/* 11. Final conversion section */}
      <OneWayCTA route={route} />
    </main>
  );
}