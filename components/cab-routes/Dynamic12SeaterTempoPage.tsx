import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const default12Seater: Vehicle = {
  name: "12-Seater Tempo Traveller",
  slug: "12-seater-tempo-traveller",
  image: "/cabs/tempofirst.webp",
  price: "₹20/km",
  seats: 12,
  doors: 4,
  luggage: 10,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Tempo Traveller",
};

export default function Dynamic12SeaterTempoPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "12-seater-tempo-traveller") || default12Seater;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "12-Seater Tempo Traveller",
      }}
      customTitle={`12-Seater Tempo Traveller in ${city.name}`}
      customSubtitle={`Book a 12-Seater luxury Tempo Traveller in ${city.name}. 1x1 / 2x1 pushback seats, individual reading lamps, high-roof comfort, and licensed highway chauffeurs starting @ ₹20/km.`}
    />
  );
}
