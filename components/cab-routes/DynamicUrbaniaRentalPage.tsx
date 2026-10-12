import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultUrbania: Vehicle = {
  name: "Force Urbania",
  slug: "urbania",
  image: "/cabs/urbaniafirst.webp",
  price: "₹20/km",
  seats: 12,
  doors: 4,
  luggage: 8,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Urbania",
};

export default function DynamicUrbaniaRentalPage({ city }: Props) {
  const vehicle = vehicles.find((v) => v.slug === "urbania") || defaultUrbania;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Force Urbania",
        slug: "urbania",
      }}
      customTitle={`Urbania Rental in ${city.name}`}
      customSubtitle={`Book state-of-the-art Force Urbania luxury van rental in ${city.name}. Modern Mercedes-inspired aerodynamic body, whisper-quiet cabin, individual panoramic windows, and supreme VIP highway comfort starting @ ₹20/km.`}
    />
  );
}
