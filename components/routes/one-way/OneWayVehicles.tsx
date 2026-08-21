import { CarFront, Users } from "lucide-react";

const vehicles = [
  {
    name: "Dzire",
    type: "Sedan",
    seats: 4,
    description: "Affordable and comfortable for small groups.",
  },
  {
    name: "Ertiga",
    type: "MUV",
    seats: 6,
    description: "Spacious option for families and groups.",
  },
  {
    name: "Innova Crysta",
    type: "SUV",
    seats: 6,
    description: "Premium and comfortable for long-distance journeys.",
  },
  {
    name: "Amaze",
    type: "Sedan",
    seats: 4,
    description: "Comfortable sedan for economical one-way travel.",
  },
];

export function OneWayVehicles() {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Our Fleet
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Choose Your One Way Cab
          </h2>

          <p className="mt-3 text-gray-600">
            Select a vehicle according to your comfort, group size and travel
            requirements.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                <CarFront className="h-6 w-6 text-amber-600" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {vehicle.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-amber-600">
                {vehicle.type}
              </p>

              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                {vehicle.seats} passengers
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {vehicle.description}
              </p>

              <button
                type="button"
                className="mt-5 w-full rounded-lg border border-amber-500 px-4 py-2.5 text-sm font-semibold text-amber-600 transition hover:bg-amber-500 hover:text-white"
              >
                Choose Cab
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}