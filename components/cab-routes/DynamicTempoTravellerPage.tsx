import { CityInfo } from "@/lib/cityData";
import { vehicles, Vehicle } from "@/data/vehicles";
import DynamicCityVehiclePage from "./DynamicCityVehiclePage";

interface Props {
  city: CityInfo;
}

const defaultTempo: Vehicle = {
  name: "Tempo Traveller",
  slug: "tempo-traveller",
  image: "/cabs/tempofirst.webp",
  price: "₹20/km",
  seats: 12,
  doors: 4,
  luggage: 10,
  airCondition: true,
  gps: true,
  driverChoice: true,
  category: "Tempo Traveller",
};

export default function DynamicTempoTravellerPage({ city }: Props) {
  const vehicle =
    vehicles.find((v) => v.slug === "12-seater-tempo-traveller" || v.category === "Tempo Traveller") || defaultTempo;

  return (
    <DynamicCityVehiclePage
      city={city}
      vehicle={{
        ...vehicle,
        name: "Tempo Traveller",
        slug: "tempo-traveller",
      }}
      customTitle={`Tempo Traveller in ${city.name}`}
      customSubtitle={`Rent a luxury Force Tempo Traveller in ${city.name} for group tours, family pilgrimages, and outstation trips. Pushback reclining seats, large luggage compartments, and dual-zone air conditioning starting @ ₹20/km.`}
    />
  );
}
