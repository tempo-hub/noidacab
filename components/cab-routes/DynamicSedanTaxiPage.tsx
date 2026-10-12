import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultSedan: Vehicle = {
  name: "Sedan Taxi",
  slug: "sedan-taxi",
  image: "/cabs/dzire.webp",
  price: "₹10/km",
  seats: 4,
  doors: 4,
  luggage: 3,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Sedan",
};

export default function DynamicSedanTaxiPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "sedan-taxi" || v.slug === "dzire") || defaultSedan;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Sedan Taxi",
        slug: "sedan-taxi",
      }}
      customTitle={`Sedan Taxi in ${city.name}`}
      customSubtitle={`Book a comfortable, air-conditioned Sedan taxi (Dzire, Etios, Amaze) in ${city.name}. Ideal for local city travel, airport drops, and outstation trips with flat per-km rates starting @ ₹10/km.`}
    />
  );
}
