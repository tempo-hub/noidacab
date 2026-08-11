// src/components/routes/noida-delhi/NoidaDelhiFare.tsx

import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CircleHelp,
  IndianRupee,
} from "lucide-react";

const fareOptions = [
  {
    vehicle: "Hatchback",
    suitableFor: "1–4 passengers",
    startingFare: "₹XXX",
    examples: "WagonR, Swift",
  },
  {
    vehicle: "Sedan",
    suitableFor: "1–4 passengers",
    startingFare: "₹XXX",
    examples: "Dzire, Etios, Amaze",
  },
  {
    vehicle: "SUV",
    suitableFor: "4–6 passengers",
    startingFare: "₹XXX",
    examples: "Ertiga, Innova",
  },
  {
    vehicle: "Innova Crysta",
    suitableFor: "6–7 passengers",
    startingFare: "₹XXX",
    examples: "Innova Crysta",
  },
  {
    vehicle: "Tempo Traveller",
    suitableFor: "Large groups",
    startingFare: "₹XXX",
    examples: "12–24 Seater",
  },
];

export default function NoidaDelhiFare() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Noida to Delhi Taxi Fare
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Taxi fares from Noida to Delhi vary depending on the vehicle,
            pickup and drop location, travel requirements and applicable
            charges. Compare the available vehicle options below before
            booking your cab.
          </p>
        </div>

        {/* Fare Table */}
        <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Vehicle
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Suitable For
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Starting Fare
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Examples
                  </th>
                </tr>
              </thead>

              <tbody>
                {fareOptions.map((item) => (
                  <tr
                    key={item.vehicle}
                    className="border-t border-slate-200"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-semibold text-slate-900"
                    >
                      {item.vehicle}
                    </th>

                    <td className="px-5 py-4 text-slate-600">
                      {item.suitableFor}
                    </td>

                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {item.startingFare}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.examples}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fare Information */}
       
        {/* CTA */}
        <div className="mt-7 flex flex-col gap-4 rounded-xl border border-amber-100 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Want detailed Noida to Delhi taxi fare information?
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              View vehicle-wise pricing, fare details and applicable
              charges on our dedicated fare page.
            </p>
          </div>

          <Link
            href="/noida-to-delhi-taxi-fare"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            View Detailed Fare
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}

function FareInfo({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
        {icon}
      </div>

      <h3 className="mt-4 text-base font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}