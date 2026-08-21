import type { ParsedRoute } from "@/lib/parse-route";
import { getSUVVehicles } from "@/lib/parse-route";
import { SUVVehicleCard } from "./SUVVehicleCard";


type Props = {
  route: ParsedRoute;
};

export function SUVVehicleList({ route }: Props) {
  const vehicles = getSUVVehicles();

  return (
    <section
      id="suv-vehicles"
      className="scroll-mt-20 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Choose Your SUV
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {route.fromName} to {route.toName} SUV Options
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Select a vehicle based on your passenger count, luggage
            requirements and preferred travel experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {vehicles.map((vehicle) => (
            <SUVVehicleCard
              key={vehicle.slug}
              vehicle={vehicle}
              route={route}
            />
          ))}
        </div>
      </div>
    </section>
  );
}