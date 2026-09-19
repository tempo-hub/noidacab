import {
  Car,
  Clock3,
  IndianRupee,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { RouteVehicleProps } from "./type";

export default function RouteBenefits({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  const benefits = [
    {
      icon: Car,
      title: "Multiple Cab Options",
      description: `Choose from comfortable ${vehicle.name} options for your journey from ${route.fromName} to ${route.toName}.`,
    },

    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: `Get clear and upfront pricing for your ${route.fromName} to ${route.toName} ${vehicle.name} taxi with no unnecessary surprises.`,
    },

    {
      icon: Clock3,
      title: "Flexible Pickup",
      description: `Choose a convenient pickup time for your journey from ${route.fromName} to ${route.toName}.`,
    },

    {
      icon: ShieldCheck,
      title: "Professional Drivers",
      description: `Travel comfortably with experienced drivers familiar with routes between ${route.fromName} and ${route.toName}.`,
    },

    {
      icon: MapPin,
      title: "Door-to-Door Service",
      description: `Get convenient pickup from your location in ${route.fromName} and drop-off at your destination in ${route.toName}.`,
    },

    {
      icon: Users,
      title: "Comfortable for Groups",
      description: `The ${vehicle.name} is suitable for families, business travellers and groups looking for a comfortable ${route.fromName} to ${route.toName} journey.`,
    },
  ];

  return (
    <section className="border-b border-gray-300 bg-gray-50 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-7xl">
          

          <h2 className="text-7xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Book a{" "}
            {route.fromName} to {route.toName}{" "}
            {vehicle.name} Taxi?
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Enjoy a convenient and comfortable journey with reliable
            {` ${vehicle.name}`} taxi service from{" "}
            {route.fromName} to {route.toName}.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}