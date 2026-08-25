// src/components/routes/noida-delhi-sedan/NoidaDelhiSedanComparison.tsx

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Luggage,
  Users,
} from "lucide-react";

const sedanComparison = [
  {
    name: "Dzire",
    bestFor: "Budget travel",
    passengers: "Up to 4 passengers",
    luggage: "2 bags 1 cabin bag",
    comfort: "Good",
    description:
      "The Dzire is the standard sedan on this route, and it works well for small groups who want comfort without paying for an SUV.",
    href: "/noida-to-delhi-dzire-taxi",
  },
  {
    name: "Etios",
    bestFor: "Everyday travel",
    passengers: "Up to 4 passengers",
    luggage: "2 bags 1 cabin bag",
    comfort: "Good",
    description:
      "A reliable sedan for family trips, business travel and regular journeys between Noida and Delhi.",
    href: "/noida-to-delhi-etios-taxi",
  },
  {
    name: "Amaze",
    bestFor: "Comfortable travel",
    passengers: "Up to 4 passengers",
    luggage: "2 bags 1 cabin bag",
    comfort: "Good",
    description:
      "A comfortable sedan option for passengers who want a smooth and convenient private journey.",
    href: "/noida-to-delhi-amaze-taxi",
  },
];

export default function NoidaDelhiSedanComparison() {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Which Sedan Is Best for Your Noida to Delhi Journey?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Compare popular sedan options based on passengers, luggage,
            comfort and the type of journey you are planning.
          </p>
        </div>

        {/* Comparison */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {sedanComparison.map((sedan) => (
            <article
              key={sedan.name}
              className="
                flex
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-amber-300
                hover:shadow-lg
                sm:p-6
              "
            >
              {/* Vehicle Name */}
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {sedan.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-amber-600">
                  Best for: {sedan.bestFor}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="mt-5 space-y-3">
                <ComparisonItem
                  icon={<Users size={17} />}
                  label={sedan.passengers}
                />

                <ComparisonItem
                  icon={<Luggage size={17} />}
                  label={`Luggage: ${sedan.luggage}`}
                />

                <ComparisonItem
                  icon={<BriefcaseBusiness size={17} />}
                  label={`Comfort: ${sedan.comfort}`}
                />
              </div>

              {/* Description */}
              <p className="mt-5 flex-1 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-600">
                {sedan.description}
              </p>

              {/* Features */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check
                    size={16}
                    className="text-emerald-600"
                  />
                  Air-conditioned vehicle
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check
                    size={16}
                    className="text-emerald-600"
                  />
                  Private journey
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check
                    size={16}
                    className="text-emerald-600"
                  />
                  Suitable for Noida to Delhi travel
                </div>
              </div>

              {/* CTA */}
              <Link
                href={sedan.href}
                className="
                  mt-6
                  inline-flex
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
                View {sedan.name}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function ComparisonItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5">
      <span className="text-slate-500">
        {icon}
      </span>

      <span className="text-sm font-medium text-slate-700">
        {label}
      </span>
    </div>
  );
}