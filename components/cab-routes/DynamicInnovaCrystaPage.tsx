import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultInnova: Vehicle = {
  name: "Innova Crysta",
  slug: "innova-crysta",
  image: "/cabs/innova.webp",
  price: "₹16/km",
  seats: 6,
  doors: 4,
  luggage: 4,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "SUV",
};

export default function DynamicInnovaCrystaPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "innova-crysta" || v.slug === "innova") || defaultInnova;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Innova Crysta Taxi",
      }}
      customTitle={`Innova Crysta in ${city.name}`}
      customSubtitle={`Book a luxury Toyota Innova Crysta cab in ${city.name}. Captain seats, supreme highway suspension, dual climate control, and unmatched long-distance comfort starting @ ₹16/km.`}
    />
  );
}
