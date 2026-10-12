import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const default24Seater: Vehicle = {
  name: "24-Seater Tempo Traveller",
  slug: "24-seater-tempo-traveller",
  image: "/cabs/tempofirst.webp",
  price: "₹29/km",
  seats: 24,
  doors: 4,
  luggage: 20,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Tempo Traveller",
};

export default function Dynamic24SeaterTempoPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "24-seater-tempo-traveller") || default24Seater;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "24-Seater Tempo Traveller",
      }}
      customTitle={`24-Seater Tempo Traveller in ${city.name}`}
      customSubtitle={`Book a 24-Seater Tempo Traveller in ${city.name} for large family pilgrimages, marriage functions, and educational tours. Maximum passenger comfort with dual AC and verified highway drivers starting @ ₹29/km.`}
    />
  );
}
