import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  CheckCircle2,
  Gauge,
  Snowflake,
  Users,
} from "lucide-react";

import type { ParsedRoute } from "@/lib/parse-route";
import type { Vehicle } from "@/data/vehicles";

type Props = {
  vehicle: Vehicle;
  route: ParsedRoute;
};

export function SUVVehicleCard({
  vehicle,
  route,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} taxi from ${route.fromName} to ${route.toName}`}
          fill
          className="object-contain p-8 transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white">
          SUV
        </div>

        <div className="absolute right-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-900 backdrop-blur">
          {vehicle.price}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-950">
              {vehicle.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {route.fromName} to {route.toName} SUV Taxi
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
            <CarFront className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          Book a {vehicle.name} taxi from {route.fromName} to{" "}
          {route.toName}. A comfortable SUV option for families,
          groups, airport transfers and outstation journeys.
        </p>

        {/* SPECS */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Spec
            icon={<Users />}
            label="Seats"
            value={vehicle.seats}
          />

          <Spec
            icon={<BriefcaseBusiness />}
            label="Luggage"
            value={`${vehicle.luggage} Bags`}
          />

          <Spec
            icon={<CarFront />}
            label="Doors"
            value={vehicle.doors}
          />

          <Spec
            icon={<Snowflake />}
            label="AC"
            value={vehicle.airCondition ? "Yes" : "No"}
          />
        </div>

        {/* FEATURES */}
        <div className="mt-5 flex flex-wrap gap-2">
          {vehicle.airCondition && (
            <Badge text="Air Conditioned" />
          )}

          {vehicle.gps && (
            <Badge text="GPS" />
          )}

          {vehicle.driverChoice && (
            <Badge text="Driver Choice" />
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/${route.fromSlug}-to-${route.toSlug}-${vehicle.slug}-taxi`}
          className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-semibold text-white transition hover:bg-orange-600"
        >
          Book {vehicle.name}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="flex items-center gap-2 text-orange-500">
        {icon}

        <span className="text-xs text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-1 text-sm font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
      <CheckCircle2 className="h-3.5 w-3.5" />
      {text}
    </span>
  );
}