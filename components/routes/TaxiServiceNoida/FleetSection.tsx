import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  CheckCircle2,
  Users,
} from "lucide-react";

const vehicles = [
  {
    name: "Swift Dzire",
    type: "Sedan",
    seats: "4 Passengers",
    luggage: "2 Bags",
    image: "/images/cars/dzire.png",
    href: "/noida/dzire-on-rent",
    features: ["AC", "Comfortable", "Budget Friendly"],
  },
  {
    name: "Maruti Ertiga",
    type: "SUV / MUV",
    seats: "6 Passengers",
    luggage: "3 Bags",
    image: "/images/cars/ertiga.png",
    href: "/noida/ertiga-on-rent",
    features: ["AC", "Spacious", "Family Friendly"],
  },
  {
    name: "Innova Crysta",
    type: "Premium SUV",
    seats: "6 Passengers",
    luggage: "4 Bags",
    image: "/images/cars/innova-crysta.png",
    href: "/noida/innova-crysta-on-rent",
    features: ["AC", "Premium", "Long Distance"],
  },
  {
    name: "Tempo Traveller",
    type: "Group Travel",
    seats: "12–26 Passengers",
    luggage: "Large Luggage",
    image: "/images/cars/tempo-traveller.png",
    href: "/noida/tempo-traveller",
    features: ["AC", "Group Travel", "Outstation"],
  },
];

export default function FleetSection() {
  return (
    <section className="bg-white/95 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <CarFront className="h-3.5 w-3.5" />
              Our Fleet
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose the Right Taxi for Your Journey
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              From affordable sedans for everyday travel to spacious SUVs and
              Tempo Travellers for groups, choose a vehicle that matches your
              comfort and travel requirements.
            </p>
          </div>

          <Link
            href="/noida/fleet"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
          >
            View Full Fleet
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Fleet Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.name}
              vehicle={vehicle}
            />
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <FeatureItem
            icon={Users}
            title="Multiple Seating Options"
            description="Cars and group vehicles for different passenger sizes."
          />

          <FeatureItem
            icon={BriefcaseBusiness}
            title="Luggage Friendly"
            description="Choose spacious vehicles when carrying more luggage."
          />

          <FeatureItem
            icon={CheckCircle2}
            title="Comfort Focused"
            description="Clean and comfortable vehicles for local and outstation trips."
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Vehicle Card
--------------------------------- */

function VehicleCard({
  vehicle,
}: {
  vehicle: {
    name: string;
    type: string;
    seats: string;
    luggage: string;
    image: string;
    href: string;
    features: string[];
  };
}) {
  return (
    <Link
      href={vehicle.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_-22px_rgba(15,23,42,0.25)]"
    >
      {/* Vehicle Image */}
      <div className="relative h-44 overflow-hidden bg-slate-50 sm:h-48">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} taxi service in Noida`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-5 transition duration-500 group-hover:scale-105"
        />

        {/* Type Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-slate-600 shadow-sm">
            {vehicle.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900">
          {vehicle.name}
        </h3>

        {/* Specs */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-slate-50 px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-slate-500" />

              <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Seats
              </span>
            </div>

            <p className="mt-1 text-xs font-semibold text-slate-700">
              {vehicle.seats}
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 px-2.5 py-2">
            <div className="flex items-center gap-1.5">
              <BriefcaseBusiness className="h-3.5 w-3.5 text-slate-500" />

              <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                Luggage
              </span>
            </div>

            <p className="mt-1 text-xs font-semibold text-slate-700">
              {vehicle.luggage}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {vehicle.features.map((feature) => (
            <span
              key={feature}
              className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-amber-600">
            View Vehicle
          </span>

          <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-amber-600" />
        </div>
      </div>
    </Link>
  );
}

/* --------------------------------
   Feature Item
--------------------------------- */

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
        <Icon className="h-4 w-4 text-slate-700" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}