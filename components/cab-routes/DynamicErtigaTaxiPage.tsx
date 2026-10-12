import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultErtiga: Vehicle = {
  name: "Maruti Ertiga",
  slug: "ertiga",
  image: "/cabs/ertiga.webp",
  price: "₹13/km",
  seats: 6,
  doors: 4,
  luggage: 4,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "SUV",
};

export default function DynamicErtigaTaxiPage({ city }: Props) {
  const vehicle = vehicles.find((v) => v.slug === "ertiga") || defaultErtiga;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Ertiga Taxi",
      }}
      customTitle={`Ertiga Taxi in ${city.name}`}
      customSubtitle={`Book a reliable 6-seater Maruti Suzuki Ertiga SUV in ${city.name}. Perfect for family airport runs, city sightseeing, and outstation pilgrimages with rear AC vents and flat ₹13/km tariffs.`}
    />
  );
}
