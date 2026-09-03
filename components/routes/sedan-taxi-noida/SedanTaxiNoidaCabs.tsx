import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  Check,
  Gauge,
  Snowflake,
  Users,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";

export default function SedanTaxiNoidaCabs() {
  const sedanVehicles = vehicles.filter(
    (vehicle) => vehicle.category === "Sedan"
  );

  return (
    <section className="bg-white/95 border-b border-slate-200 py-8 sm:py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-600">
            <CarFront className="h-4 w-4" />
            Our Sedan Fleet
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sedan Taxis Available in Noida
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Choose a comfortable and well-maintained sedan for local travel,
            airport transfers, corporate trips or outstation journeys from
            Noida.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sedanVehicles.map((vehicle) => (
            <div
              key={vehicle.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Vehicle Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100 sm:h-56">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} taxi in Noida`}
                  fill
                  className="object-cover p-5 transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Category */}
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                  Sedan
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-amber-600 px-3 py-2 text-sm font-bold text-white shadow-lg">
                  {vehicle.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {vehicle.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Comfortable 4+1 seater sedan
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                    <CarFront className="h-5 w-5 text-amber-600" />
                  </div>
                </div>

                {/* Specifications */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
                    <Users className="h-4 w-4 text-amber-500" />
                    <div>
                      <p className="text-[11px] text-slate-400">Seats</p>
                      <p className="text-sm font-semibold text-slate-700">
                        {vehicle.seats}+1
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
                    <BriefcaseBusiness className="h-4 w-4 text-amber-500" />
                    <div>
                      <p className="text-[11px] text-slate-400">Luggage</p>
                      <p className="text-sm font-semibold text-slate-700">
                        {vehicle.luggage} Bags
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
                    <Gauge className="h-4 w-4 text-amber-500" />
                    <div>
                      <p className="text-[11px] text-slate-400">Doors</p>
                      <p className="text-sm font-semibold text-slate-700">
                        {vehicle.doors} Doors
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3">
                    <Snowflake className="h-4 w-4 text-amber-500" />
                    <div>
                      <p className="text-[11px] text-slate-400">Comfort</p>
                      <p className="text-sm font-semibold text-slate-700">
                        AC
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {vehicle.airCondition && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-green-600" />
                      Air conditioned
                    </div>
                  )}

                  {vehicle.gps && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-green-600" />
                      GPS enabled
                    </div>
                  )}

                  {vehicle.driverChoice && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-green-600" />
                      Professional driver
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/taxi/${vehicle.slug}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
                >
                  Book {vehicle.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50/60 p-5 text-center">
          <p className="text-sm leading-6 text-slate-700">
            Need a different car? Explore our complete fleet for SUVs, Urbania
            and Tempo Traveller options for larger groups.
          </p>
        </div>
      </div>
    </section>
  );
}

