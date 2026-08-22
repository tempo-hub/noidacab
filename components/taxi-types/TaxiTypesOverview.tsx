import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, BriefcaseBusiness } from "lucide-react";

const vehicles = [
  {
    name: "Dzire",
    type: "Compact Sedan",
    description:
      "A comfortable and economical choice for couples, small families and everyday travel from Noida to Delhi.",
    passengers: "4 Passengers",
    luggage: "2–3 Bags",
    image: "/cabs/dziremain.webp",
    href: "/taxi/dzire",
  },
  {
    name: "Amaze",
    type: "Comfortable Amaze",
    description:
      "A practical choice for business travel, airport transfers and comfortable city-to-city journeys.",
    passengers: "4 Passengers",
    luggage: "2–3 Bags",
    image: "/cabs/amazemain.webp",
    href: "/taxi/amaze",
  },
  {
    name: "Ertiga",
    type: "Premium MPV",
    description:
      "Spacious seating and extra luggage room make Ertiga suitable for families and small groups.",
    passengers: "6–7 Passengers",
    luggage: "3–4 Bags",
    image: "/cabs/ertigamain.webp",
    href: "/taxi/ertiga",
  },
  {
    name: "Innova Crysta",
    type: "Premium SUV",
    description:
      "Enjoy a spacious and premium ride for family trips, corporate travel and longer journeys.",
    passengers: "6–7 Passengers",
    luggage: "3–4 Bags",
    image: "/cabs/innovamain.webp",
    href: "/taxi/innova",
  },
];

export default function TaxiTypesOverview() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-700">
            Noida to Delhi Cabs
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Choose the Right Taxi for Your Journey
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Choose from comfortable and reliable cabs for your Noida to Delhi
            journey. Select a vehicle based on your passengers, luggage and
            travel requirements.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.name}
              href={vehicle.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56  overflow-hidden bg-slate-100">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} taxi from Noida to Delhi`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Vehicle Type */}
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
                  {vehicle.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {vehicle.name}
                  </h3>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </div>

                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">
                  {vehicle.description}
                </p>

                {/* Vehicle Details */}
                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-amber-600" />

                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-slate-400">
                        Capacity
                      </p>

                      <p className="text-xs font-semibold text-slate-800">
                        {vehicle.passengers}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-4 w-4 text-amber-600" />

                    <div>
                      <p className="text-[10px] uppercase tracking-wide text-slate-400">
                        Luggage
                      </p>

                      <p className="text-xs font-semibold text-slate-800">
                        {vehicle.luggage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-semibold text-amber-600">
                    View Taxi Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}