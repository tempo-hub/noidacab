import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const default20Seater: Vehicle = {
  name: "20-Seater Tempo Traveller",
  slug: "20-seater-tempo-traveller",
  image: "/cabs/tempofirst.webp",
  price: "₹27/km",
  seats: 20,
  doors: 4,
  luggage: 18,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Tempo Traveller",
};

export default function Dynamic20SeaterTempoPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "20-seater-tempo-traveller") || default20Seater;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "20-Seater Tempo Traveller",
      }}
      customTitle={`20-Seater Tempo Traveller in ${city.name}`}
      customSubtitle={`Hire a 20-Seater luxury Tempo Traveller in ${city.name}. Generous seating capacity, individual AC vents, heavy luggage carrier, and certified expressway chauffeurs starting @ ₹27/km.`}
    />
  );
}
