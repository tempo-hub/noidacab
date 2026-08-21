import { OneWayHero } from "./OneWayHero";
import { OneWayVehicles } from "./OneWayVehicles";
import { OneWayWhyChoose } from "./OneWayWhyChoose";

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
    <main>
      <OneWayHero route={route} />

      <OneWayVehicles />

      <OneWayWhyChoose />

      {/* Add route information */}
      {/* Add FAQ */}
      {/* Add Booking CTA */}
    </main>
  );
}