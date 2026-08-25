// src/components/routes/noida-delhi-sedan/NoidaDelhiSedanFare.tsx

import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  IndianRupee,
  Info,
} from "lucide-react";

const sedanFares = [
  {
    name: "Dzire",
    type: "Sedan",
    passengers: "Up to 4",
    fare: "₹500",
    extraKm: "₹XX/km",
    href: "/noida-to-delhi-dzire-taxi",
  },
  {
    name: "Etios",
    type: "Sedan",
    passengers: "Up to 4",
    fare: "₹800",
    extraKm: "₹XX/km",
    href: "/noida-to-delhi-etios-taxi",
  },
  {
    name: "Amaze",
    type: "Sedan",
    passengers: "Up to 4",
    fare: "₹800",
    extraKm: "₹XX/km",
    href: "/noida-to-delhi-amaze-taxi",
  },
];

export default function NoidaDelhiSedanFare() {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Noida to Delhi Sedan Taxi Fare
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Sedan fares on this route stay low because the distance is short and the drive rarely needs an overnight stop. 
            Every quote breaks down fuel, driver allowance, and applicable toll, 
            so you see what you're paying for before you confirm the Noida to Delhi sedan cab fare.
          </p>
        </div>

        {/* Fare Cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sedanFares.map((sedan) => (
            <article
              key={sedan.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Card Header */}
              <div className="border-b border-slate-100 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={sedan.href}
                      className="text-lg font-bold text-slate-900 hover:text-amber-600 hover:underline"
                    >
                      {sedan.name}
                    </Link>

                    <p className="mt-1 text-sm text-slate-500">
                      {sedan.type} • {sedan.passengers}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <CarFront size={20} />
                  </div>
                </div>
              </div>

              {/* Fare */}
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Starting Fare
                </p>

                <div className="mt-2 flex items-center gap-1">
                  <IndianRupee
                    size={20}
                    className="text-slate-700"
                  />

                  <span className="text-2xl font-extrabold text-slate-900">
                    {sedan.fare}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
                  <span className="text-sm text-slate-500">
                    Extra distance
                  </span>

                  <span className="text-sm font-bold text-slate-800">
                    {sedan.extraKm}
                  </span>
                </div>

                <Link
                  href={sedan.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                >
                  View {sedan.name} details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Fare Note */}
        <div className="mt-7 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <Info
            size={20}
            className="mt-0.5 shrink-0 text-amber-600"
          />

          <div>
            <h3 className="text-sm font-bold text-slate-900">
              About the sedan fare
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              The final fare may vary depending on the exact pickup
              and drop location, selected vehicle, travel requirements
              and applicable toll, parking or other charges. Check the
              fare shown during booking before confirming your journey.
            </p>
          </div>
        </div>

        {/* Internal Link */}
        <div className="mt-7 text-center">
          <Link
            href="/route/noida-to-delhi-taxi-fare"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-amber-400 hover:text-amber-600"
          >
            View Complete Noida to Delhi Taxi Fare
            <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}