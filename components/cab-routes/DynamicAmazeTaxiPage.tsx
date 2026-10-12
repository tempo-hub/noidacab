import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultAmaze: Vehicle = {
  name: "Honda Amaze",
  slug: "amaze",
  image: "/cabs/amaze.webp",
  price: "₹10/km",
  seats: 4,
  doors: 4,
  luggage: 3,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Sedan",
};

export default function DynamicAmazeTaxiPage({ city }: Props) {
  const vehicle = vehicles.find((v) => v.slug === "amaze") || defaultAmaze;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Amaze Taxi",
      }}
      customTitle={`Amaze Taxi in ${city.name}`}
      customSubtitle={`Book a comfortable and stylish Honda Amaze sedan in ${city.name}. Smooth riding dynamics, modern air conditioning, 4-passenger legroom, and flat per-km tariffs starting @ ₹10/km.`}
    />
  );
}
