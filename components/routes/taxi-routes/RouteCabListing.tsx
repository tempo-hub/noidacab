import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import type { ParsedCityToCityVehicleRoute } from "@/lib/parse-route";

type Props = {
  route: ParsedCityToCityVehicleRoute;
  currentVehicleSlug?: string;
};

export default function RouteCabListing({
  route,
  currentVehicleSlug,
}: Props) {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Choose Your Cab
          </h2>

          <p className="mt-2 text-gray-600">
            Select a vehicle for your journey from{" "}
            {route.fromName} to {route.toName}.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.slice(0,6).map((vehicle) => {
            const href = `/${route.fromSlug}-to-${route.toSlug}-${vehicle.slug}-taxi`;

            const isActive =
              currentVehicleSlug === vehicle.slug;

            return (
              <Link
                key={vehicle.slug}
                href={href}
                className={`rounded-2xl border p-5 transition ${
                  isActive
                    ? "border-orange-500 shadow-md"
                    : "border-gray-200 hover:border-orange-300 hover:shadow-md"
                }`}
              >
                <div className="mb-4">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} taxi`}
                    className="h-38 w-full object-cover"
                  />
                </div>

                <h3 className="font-semibold text-gray-900">
                  {vehicle.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {vehicle.category}
                </p>

                <p className="mt-3 font-semibold text-orange-600">
                  {vehicle.price}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}