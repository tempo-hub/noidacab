import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";
import type { RouteVehicleProps } from "./type";

export default function RouteVehicleOptions({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  /*
   * Get vehicles from the same category
   */
  const categoryVehicles = vehicles.filter(
    (item) => item.category === vehicle.category
  );

  /*
   * Don't render the section if there are
   */
  if (categoryVehicles.length <= 1) {
    return null;
  }

  const categoryName = vehicle.category;

  const getBestFor = (vehicleName: string) => {
    const name = vehicleName.toLowerCase();

    if (name.includes("dzire")) {
      return "Couples, families and business travel";
    }

    if (name.includes("amaze")) {
      return "Families, airport transfers and city travel";
    }

    if (name.includes("etios")) {
      return "Business trips, families and comfortable travel";
    }

    if (name.includes("ertiga")) {
      return "Small families and group travel";
    }

    if (name.includes("innova crysta")) {
      return "Corporate travel and long-distance comfort";
    }

    if (name.includes("innova")) {
      return "Groups and airport transfers with luggage";
    }

    if (name.includes("wagonr")) {
      return "Budget city travel and small groups";
    }

    if (name.includes("swift")) {
      return "Economical city and short-distance travel";
    }

    return "Comfortable travel for families and groups";
  };

  return (
    <section className="px-4 py-14 sm:py-16 bg-white/95 border-b border-gray-300">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            <CarFront className="h-4 w-4" />

            {categoryName} Cab Options
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {categoryName} Options for{" "}
            {route.fromName} to {route.toName} Cab Booking
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Not every trip needs the same vehicle. Choose a{" "}
            {categoryName.toLowerCase()} cab from{" "}
            {route.fromName} to {route.toName} based on your
            group size, luggage and comfort requirements.
          </p>
        </div>

        {/* VEHICLE TABLE */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* HEADER */}
          <div className="hidden grid-cols-[1.4fr_1fr_1fr_1.5fr_auto] border-b border-gray-200 bg-gray-50 px-6 py-4 text-sm font-semibold text-gray-900 md:grid">
            <div>Vehicle</div>
            <div>Seating</div>
            <div>Luggage</div>
            <div>Best For</div>
            <div></div>
          </div>

          {categoryVehicles.map((item) => {
            const isCurrent =
              item.slug === vehicle.slug;

            const href = `/${route.fromSlug}-to-${route.toSlug}-${item.slug}-taxi`;

            return (
              <div
                key={item.slug}
                className={`grid gap-4 border-b border-gray-100 px-5 py-5 last:border-b-0 md:grid-cols-[1.4fr_1fr_1fr_1.5fr_auto] md:items-center md:px-6 ${
                  isCurrent
                    ? "bg-orange-50/40"
                    : "bg-white"
                }`}
              >
                {/* VEHICLE */}
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-50">
                    <Image
                      src={item.image}
                      alt={`${item.name} taxi from ${route.fromName} to ${route.toName}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-orange-600">
                      {item.price}
                    </p>

                    {isCurrent && (
                      <span className="mt-1 inline-block text-[11px] font-medium text-gray-500">
                        Current vehicle
                      </span>
                    )}
                  </div>
                </div>

                {/* SEATING */}
                <div>
                  <p className="text-xs text-gray-500 md:hidden">
                    Seating
                  </p>

                  <p className="text-sm text-gray-700">
                    {item.seats} passengers
                  </p>
                </div>

                {/* LUGGAGE */}
                <div>
                  <p className="text-xs text-gray-500 md:hidden">
                    Luggage
                  </p>

                  <p className="text-sm text-gray-700">
                    {item.luggage} bags
                  </p>
                </div>

                {/* BEST FOR */}
                <div>
                  <p className="text-xs text-gray-500 md:hidden">
                    Best For
                  </p>

                  <p className="text-sm leading-6 text-gray-600">
                    {getBestFor(item.name)}
                  </p>
                </div>

                {/* LINK */}
                <div>
                  <Link
                    href={href}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      isCurrent
                        ? "bg-gray-200 text-gray-500"
                        : "bg-gray-950 text-white hover:bg-orange-600"
                    }`}
                  >
                    {isCurrent ? (
                      <>
                        Selected
                        <CheckCircle2 className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        View
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}