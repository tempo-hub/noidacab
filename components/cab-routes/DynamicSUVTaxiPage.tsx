import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultSUV: Vehicle = {
  name: "SUV Taxi",
  slug: "suv",
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

export default function DynamicSUVTaxiPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "ertiga" || v.category === "SUV") || defaultSUV;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "SUV Taxi",
        slug: "suv",
      }}
      customTitle={`SUV Taxi in ${city.name}`}
      customSubtitle={`Book a spacious, high-comfort SUV taxi (Maruti Ertiga / Innova) in ${city.name}. Generous 6-seater capacity, ample boot space, dual AC, and experienced highway chauffeurs starting @ ₹13/km.`}
    />
  );
}
