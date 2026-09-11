"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Fuel,
  MapPin,
  ShieldCheck,
  Star,
  Users,
  Briefcase,
  Snowflake,
} from "lucide-react";
import { vehicles, type Vehicle } from "@/data/vehicles";
import { RouteData } from "@/data/routes/taxiroutes";

/**
 * Calculates fare using: (distance * 1.5 * vehicle_price) + 500
 */
function calculateFare(distanceStr: string, vehiclePriceStr: string): number {
  const distance = parseFloat(distanceStr.replace(/[^0-9.]/g, "")) || 0;
  const ratePerKm = parseFloat(vehiclePriceStr.replace(/[^0-9.]/g, "")) || 0;
  return Math.round(distance * 1.5 * ratePerKm + 500);
}

export default function RouteFareAvailableCabs({
  route,
}: {
  route: RouteData;
}) {
  return (
    <section
      id="available-cabs"
      className="border-b border-slate-200 bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Dynamic Heading */}
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            {route.from.name} to {route.to.name} One-Way & Round-Trip Cabs
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
            Choose from our sanitized fleet for your {route.distance} journey
            ({route.duration}). All prices include driver allowance and fuel.
          </p>
        </div>

        {/* All Dynamically Calculated Cab Cards */}
        <div className="space-y-4">
  {vehicles
    .filter(
      (vehicle) =>
        vehicle.category !== "Tempo Traveller" &&
      vehicle.slug !== "sedan-taxi" &&
        vehicle.category !== "Urbania"
    )
    .map((vehicle) => (
      <DynamicCabCard
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

/* -------------------------------------------------------------------------- */
/* Dynamic Cab Card */
/* -------------------------------------------------------------------------- */

function DynamicCabCard({
  vehicle,
  route,
}: {
  vehicle: Vehicle;
  route: RouteData;
}) {
  const totalFare = calculateFare(route.distance, vehicle.price);
  const estimatedTaxes = Math.round(totalFare * 0.05); // Standard 5% GST estimate

  // Deep-link to the vehicle's specific SEO landing page
  const vehicleHref = `/${vehicle.slug}${
    vehicle.slug === "innova-crysta"
    // vehicle.category === "Tempo Traveller" ||
    // vehicle.category === "Urbania"
      ? "-in-noida"
      : "-taxi-in-noida"
  }`;

  const bookingMsg = encodeURIComponent(
    `Hello NoidaCab, I want to book a ${vehicle.name} from ${route.from.name} to ${route.to.name}. Estimated Fare: ₹${totalFare.toLocaleString("en-IN")}. Please confirm booking.`
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition hover:border-amber-400/50 hover:shadow-md">
      <div className="grid gap-5 lg:grid-cols-[160px_minmax(0,1fr)_200px] lg:items-center">
        {/* Vehicle Image Container */}
        <div className="flex h-[115px] items-center justify-center rounded-xl bg-amber-50/70 p-2 border border-amber-100/60">
          <div className="relative h-[85px] w-[140px]">
            <Image
              src={vehicle.image}
              alt={`${vehicle.name} taxi from ${route.from.name} to ${route.to.name}`}
              fill
              sizes="(max-width: 640px) 120px, 140px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="min-w-0">
          {/* Header Row: Name + Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href={vehicleHref}
              className="text-lg font-extrabold text-slate-900 transition hover:text-amber-600 hover:underline sm:text-xl"
            >
              {vehicle.name}
            </Link>

            <span className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
              {vehicle.category}
            </span>

            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white shadow-2xs">
              <Star size={11} fill="currentColor" />
              4.9/5
            </span>

            <span className="text-xs text-slate-400">(Verified Fleet)</span>
          </div>

          {/* Quick Specs Badges */}
          <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1">
              <Users size={14} className="text-amber-600" />
              {vehicle.seats} Seater
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Briefcase size={14} className="text-amber-600" />
              {vehicle.luggage} Bags
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Snowflake size={14} className="text-amber-600" />
              {vehicle.airCondition ? "AC Climate Control" : "Non-AC"}
            </span>
          </div>

          {/* Extra Info Grid */}
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <Feature
              icon={<MapPin size={15} />}
              label="Base Route Fare"
              value={vehicle.price}
            />

            <Feature
              icon={<Clock3 size={15} />}
              label="Trip Duration"
              value={route.duration}
            />

            <Feature
              icon={<Fuel size={15} />}
              label="Fuel & Chauffeur"
              value="Included"
            />

            <Feature
              icon={<ShieldCheck size={15} />}
              label="Cancellation"
              value="Free before 2 hrs"
              valueClassName="text-emerald-600 font-semibold"
            />
          </div>
        </div>

        {/* Pricing & Booking CTA */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4 lg:border-t-0 lg:pt-0 lg:flex-col lg:items-end">
          <div className="text-left lg:text-right">
            <span className="text-[11px] font-semibold uppercase text-slate-400 block">
              Estimated Total
            </span>
            <p className="text-2xl font-black text-slate-900 sm:text-3xl">
              ₹{totalFare.toLocaleString("en-IN")}
            </p>
            <p className="whitespace-nowrap text-[11px] text-slate-500">
              + ₹{estimatedTaxes} (Est. GST & Tolls)
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href={`https://wa.me/918377809809?text=${bookingMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-amber-700 active:scale-[0.98]"
            >
              Book Now
            </a>
            <a
              href="tel:8377809809"
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Feature Pill */
/* -------------------------------------------------------------------------- */

function Feature({
  icon,
  label,
  value,
  valueClassName = "text-slate-800",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <span className="shrink-0 text-amber-600">{icon}</span>
      <span className="text-slate-500">{label}:</span>
      <span className={valueClassName}>{value}</span>
    </div>
  );
}