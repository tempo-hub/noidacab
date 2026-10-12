import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const default16Seater: Vehicle = {
  name: "16-Seater Tempo Traveller",
  slug: "16-seater-tempo-traveller",
  image: "/cabs/tempofirst.webp",
  price: "₹25/km",
  seats: 16,
  doors: 4,
  luggage: 14,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Tempo Traveller",
};

export default function Dynamic16SeaterTempoPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "16-seater-tempo-traveller") || default16Seater;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "16-Seater Tempo Traveller",
      }}
      customTitle={`16-Seater Tempo Traveller in ${city.name}`}
      customSubtitle={`Book a 16-Seater Tempo Traveller in ${city.name} for wedding parties, pilgrimage yatra, and corporate team outings. Reclining 2x1 pushback seats, dual AC, and spacious rear luggage carrier starting @ ₹25/km.`}
    />
  );
}
