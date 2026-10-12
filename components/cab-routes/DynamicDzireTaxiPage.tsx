import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultDzire: Vehicle = {
  name: "Maruti Dzire",
  slug: "dzire",
  image: "/cabs/dzire.webp",
  price: "₹10/km",
  seats: 4,
  doors: 4,
  luggage: 2,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Sedan",
};

export default function DynamicDzireTaxiPage({ city }: Props) {
  const vehicle = vehicles.find((v) => v.slug === "dzire") || defaultDzire;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Dzire Taxi",
      }}
      customTitle={`Dzire Taxi in ${city.name}`}
      customSubtitle={`Book an affordable and fuel-efficient Maruti Suzuki Dzire taxi in ${city.name}. Spotless cabin, 4-passenger seating, comfortable ride, and transparent per-km billing starting @ ₹10/km.`}
    />
  );
}
