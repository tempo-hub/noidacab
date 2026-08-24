import type { Vehicle } from "@/data/vehicles";

export default function VehicleOverview({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const categoryText = {
    Hatchback:
      "compact and economical city travel",
    Sedan:
      "comfortable city, business and airport travel",
    SUV:
      "family trips and spacious travel",
    Urbania:
      "premium group transportation",
    "Tempo Traveller":
      "large group travel and tours",
  };

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-amber-600">
            {vehicle.category} Taxi
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {vehicle.name} Taxi in Noida
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {vehicle.name} is a {vehicle.category.toLowerCase()} taxi
            suitable for {categoryText[vehicle.category]}. With seating
            capacity for {vehicle.seats} passengers and space for around{" "}
            {vehicle.luggage} luggage items, it is a practical option for
            travellers looking for a comfortable ride in Noida.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            The vehicle comes with air conditioning
            {vehicle.gps ? ", GPS navigation" : ""}
            {vehicle.driverChoice ? " and professional driver service" : ""}.
            You can choose this vehicle according to your passenger count,
            luggage requirements and travel plans.
          </p>
        </div>
      </div>
    </section>
  );
}