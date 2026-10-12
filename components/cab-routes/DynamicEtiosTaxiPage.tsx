import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultEtios: Vehicle = {
  name: "Toyota Etios",
  slug: "etios",
  image: "/cabs/etios.webp",
  price: "₹10/km",
  seats: 4,
  doors: 4,
  luggage: 3,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Sedan",
};

export default function DynamicEtiosTaxiPage({ city }: Props) {
  const vehicle = vehicles.find((v) => v.slug === "etios") || defaultEtios;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Etios Taxi",
      }}
      customTitle={`Etios Taxi in ${city.name}`}
      customSubtitle={`Book a reliable and spacious Toyota Etios sedan taxi in ${city.name}. Renowned highway suspension, huge luggage trunk, dual AC, and experienced commercial chauffeurs starting @ ₹10/km.`}
    />
  );
}
