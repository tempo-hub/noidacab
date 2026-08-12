// src/components/routes/noida-delhi-sedan/NoidaDelhiSedanCabs.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Fuel,
  Users,
} from "lucide-react";

import { noidaDelhiCabs } from "@/data/routes/noida-delhi-cabs";

export default function NoidaDelhiSedanCabs() {
  // Get only Sedan vehicles from the central data file
  const sedanCabs = noidaDelhiCabs.filter(
    (cab) => cab.category === "Sedan"
  );

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Available Sedan Cars for Noida to Delhi
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose a sedan according to your passenger count,
            comfort and travel requirements. Popular options include
            Dzire, Etios and Amaze.
          </p>
        </div>

        {/* Sedan Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sedanCabs.map((cab) => (
            <article
              key={cab.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-amber-300
                hover:shadow-lg
              "
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-50">
                <Image
                  src={cab.image}
                  alt={`${cab.name} sedan taxi from Noida to Delhi`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-sm">
                  {cab.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Name */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {cab.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Noida → Delhi
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Users size={18} />
                  </div>
                </div>

                {/* Specs */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <Spec
                    icon={<Users size={16} />}
                    label={`${cab.seats} Seats`}
                  />

                  <Spec
                    icon={<Fuel size={16} />}
                    label={cab.fuelType}
                  />

                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-slate-600">
                  {cab.description}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">

                  {cab.ac && (
                    <Feature text="Air Conditioning" />
                  )}

                  <Feature text="Private Cab" />

                  <Feature text={`${cab.seats} Comfortable Seats`} />

                </div>

                {/* Price */}
                <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-xs text-slate-500">
                      Starting from
                    </p>

                    <p className="text-xl font-extrabold text-slate-900">
                      ₹{cab.price}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">
                      Extra km
                    </p>

                    <p className="text-sm font-semibold text-slate-700">
                      {cab.extraKmFare}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={cab.href || "#"}
                  className="
                    mt-6
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-900
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-amber-500
                    hover:text-slate-950
                  "
                >
                  View {cab.name}
                  <ArrowRight size={17} />
                </Link>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}


/* Spec */
function Spec({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-600">
      <span className="text-amber-500">
        {icon}
      </span>

      {label}
    </div>
  );
}


/* Feature */
function Feature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <Check
        size={16}
        className="shrink-0 text-emerald-600"
      />

      {text}
    </div>
  );
}