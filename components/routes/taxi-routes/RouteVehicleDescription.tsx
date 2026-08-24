import Image from "next/image";
import {
  CarFront,
  CheckCircle2,
  MapPin,
  Users,
} from "lucide-react";

import type { RouteVehicleProps } from "./type";

export default function RouteVehicleDescription({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-14">
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              <CarFront className="h-4 w-4" />
              {vehicle.name} Taxi Service
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {route.fromName} to {route.toName}{" "}
              {vehicle.name} Taxi Service
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
              <p>
                Our {vehicle.name} taxi from{" "}
                {route.fromName} to {route.toName} gives you
                comfortable space and a reliable travel option
                for your journey. Whether you are travelling with
                family, colleagues or extra luggage, the{" "}
                {vehicle.name} offers a practical and comfortable
                way to travel between the two cities.
              </p>

              <p>
                We keep fares upfront, with applicable tolls and
                parking charges shown separately so there are no
                surprises at drop-off. You can book a one-way{" "}
                {route.fromName} to {route.toName}{" "}
                {vehicle.name} taxi or choose a same-day round
                trip according to your travel plan.
              </p>

              <p>
                We also provide direct airport and railway station
                pickup and drop services. Our drivers regularly
                travel the{" "}
                {route.fromName} to {route.toName} route and are
                familiar with the major roads, traffic conditions
                and commonly busy stretches, helping make your
                journey smoother and more convenient.
              </p>
            </div>

            {/* FEATURES */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {vehicle.seats} Seater
                  </p>

                  <p className="text-xs text-gray-500">
                    Comfortable seating
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Direct Route
                  </p>

                  <p className="text-xs text-gray-500">
                    {route.fromName} to {route.toName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Professional Drivers
                  </p>

                  <p className="text-xs text-gray-500">
                    Experienced route drivers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <CarFront className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    AC {vehicle.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    Clean and comfortable cab
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VEHICLE IMAGE */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
            <div className="relative aspect-[4/3]">
              <Image
                src={vehicle.image}
                alt={`${route.fromName} to ${route.toName} ${vehicle.name} taxi`}
                fill
                className="object-cover p-6"
              />
            </div>

            {/* Image bottom information */}
            <div className="border-t border-gray-200 bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {vehicle.name}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {route.fromName} → {route.toName}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    Starting from
                  </p>

                  <p className="text-lg font-bold text-orange-600">
                    {vehicle.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}