import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  Car,
  CarFront,
  Users,
} from "lucide-react";

const taxiTypes = [
  {
    name: "Hatchback Taxi",
    description:
      "Affordable and compact taxis for solo travellers, couples and quick city trips.",
    capacity: "Up to 4 passengers",
    examples: "WagonR, Swift",
    href: "/taxi-types/hatchback",
    icon: Car,
  },
  {
    name: "Sedan Taxi",
    description:
      "Comfortable taxis suitable for business travel, airport transfers and everyday journeys.",
    capacity: "Up to 4 passengers",
    examples: "Dzire, Etios, Amaze",
    href: "/route/noida-to-delhi-sedan-taxi",
    icon: CarFront,
  },
  {
    name: "SUV Taxi",
    description:
      "Spacious vehicles for families and small groups travelling with additional luggage.",
    capacity: "6 to 7 passengers",
    examples: "Ertiga, Innova",
    href: "/route/suv",
    icon: Users,
  },
  {
    name: "Innova Crysta Taxi",
    description:
      "Premium and spacious option for comfortable family, corporate and long-distance travel.",
    capacity: "6 to 7 passengers",
    examples: "Innova Crysta",
    href: "/taxi-types/innova-crysta",
    icon: CarFront,
  },
  {
    name: "Tempo Traveller",
    description:
      "Large-capacity vehicle for weddings, events, office groups and family tours.",
    capacity: "9 to 17+ passengers",
    examples: "12, 16, 17, 20, 24 Seater",
    href: "/taxi-types/tempo-traveller",
    icon: BusFront,
  },
];

export default function TaxiTypesGrid() {
  return (
    <section className="bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-b border-gray-300">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Taxi Types Available in Noida
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Select a vehicle according to your passenger count, luggage and
            travel requirements.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {taxiTypes.map((taxi) => {
            const Icon = taxi.icon;

            return (
              <Link
                key={taxi.name}
                href={taxi.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex item-center gap-8">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {taxi.name}
                </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {taxi.description}
                </p>
                

                <div className="mt-2 border-t border-slate-100 pt-4">
                  <p className="text-xs text-slate-500">Capacity</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {taxi.capacity}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">Examples</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {taxi.examples}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-amber-600">
                  Explore Taxi
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}