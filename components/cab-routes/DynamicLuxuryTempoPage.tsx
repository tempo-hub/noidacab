import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultLuxuryTempo: Vehicle = {
  name: "Luxury Tempo Traveller",
  slug: "luxury-tempo-traveller",
  image: "/cabs/tempofirst.webp",
  price: "₹25/km",
  seats: 12,
  doors: 4,
  luggage: 10,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Tempo Traveller",
};

export default function DynamicLuxuryTempoPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "luxury-tempo-traveller") || defaultLuxuryTempo;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Luxury Tempo Traveller",
      }}
      customTitle={`Luxury Tempo Traveller in ${city.name}`}
      customSubtitle={`Experience Maharaja-class luxury Tempo Traveller rental in ${city.name}. 1x1 ultra-wide pushback leatherette seats, LED mood lighting, charging ports, chiller box, and elite chauffeur service starting @ ₹25/km.`}
    />
  );
}
