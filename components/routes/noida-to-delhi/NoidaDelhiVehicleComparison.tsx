// src/components/routes/noida-delhi/NoidaDelhiVehicleComparison.tsx

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
} from "lucide-react";

const vehicles = [
  {
    name: "Dzire",
    category: "Sedan",
    passengers: "Up to 4",
    bestFor: "Budget-friendly travel",
    description:
      "A practical choice for individuals, couples and small families looking for an economical Noida to Delhi taxi.",
    href: "/noida-to-delhi-dzire-taxi",
  },
  {
    name: "Ertiga",
    category: "MPV / SUV",
    passengers: "Up to 6",
    bestFor: "Families & small groups",
    description:
      "A spacious option for families and groups who need additional seating and luggage space.",
    href: "/noida-to-delhi-ertiga-taxi",
  },
  {
    name: "Innova Crysta",
    category: "Premium SUV",
    passengers: "Up to 6",
    bestFor: "Comfort & premium travel",
    description:
      "A comfortable premium option for families, business travellers and passengers carrying more luggage.",
    href: "/noida-to-delhi-innova-crysta-taxi",
  },
  {
    name: "Etios",
    category: "Sedan",
    passengers: "Up to 4",
    bestFor: "Everyday travel",
    description:
      "A comfortable sedan option for small groups travelling between Noida and Delhi.",
    href: "/noida-to-delhi-etios-taxi",
  },
  {
    name: "Amaze",
    category: "Sedan",
    passengers: "Up to 4",
    bestFor: "Comfortable sedan travel",
    description:
      "Suitable for passengers who prefer a comfortable sedan for their Noida to Delhi journey.",
    href: "/noida-to-delhi-amaze-taxi",
  },
];

export default function NoidaDelhiVehicleComparison() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Which Taxi Is Best for Your Noida to Delhi Journey?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose your vehicle based on the number of passengers,
            luggage, comfort requirements and type of journey. Here
            are some popular taxi options available for travel from
            Noida to Delhi.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="
                group
                flex
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-amber-200
                hover:shadow-md
                sm:p-6
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link
                    href={vehicle.href}
                    className="text-xl font-bold text-slate-900 hover:text-amber-600 hover:underline"
                  >
                    {vehicle.name}
                  </Link>

                  <p className="mt-1 text-sm text-slate-500">
                    {vehicle.category}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                  <Users size={14} />
                  {vehicle.passengers}
                </div>
              </div>

              {/* Best For */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Best for
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {vehicle.bestFor}
                </p>
              </div>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {vehicle.description}
              </p>

              {/* Features */}
              <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check
                    size={16}
                    className="text-emerald-600"
                  />
                  Private cab option
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check
                    size={16}
                    className="text-emerald-600"
                  />
                  Suitable for Noida to Delhi travel
                </div>
              </div>

              {/* Link */}
              <Link
                href={vehicle.href}
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-amber-600
                  hover:text-amber-700
                "
              >
                View {vehicle.name} Taxi
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-6 text-slate-600">
            Travelling with a larger group? Explore our{" "}
            <Link
              href="/noida-to-delhi-tempo-traveller"
              className="font-semibold text-amber-600 hover:underline"
            >
              Noida to Delhi Tempo Traveller
            </Link>{" "}
            options for group transportation.
          </p>
        </div>

      </div>
    </section>
  );
}