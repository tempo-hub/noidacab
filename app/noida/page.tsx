import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  CarFront,
} from "lucide-react";

import { noidaLocalities } from "@/data/routes/noida";

export const metadata = {
  title:
    "Taxi & Tempo Traveller Locations in Noida | NoidaCab",
  description:
    "Explore Noida localities and book taxis, Tempo Travellers, Luxury Tempo Travellers and Urbania rentals from your preferred location.",
};

const vehicleSections = [
  // =====================================================
  // TAXIS
  // =====================================================
  {
    name: "Innova Crysta",
    slug: "innova-crysta",
    basePath: "",
    type: "Taxi",
    description:
      "Book an Innova Crysta from your Noida locality for family trips, airport transfers and comfortable travel.",
  },
  {
    name: "Maruti Ertiga",
    slug: "ertiga",
    basePath: "",
    type: "Taxi",
    description:
      "Book an Ertiga from your Noida locality for comfortable family and group travel.",
  },
  {
    name: "Dzire",
    slug: "dzire",
    basePath: "",
    type: "Taxi",
    description:
      "Book a Dzire from your Noida locality for affordable local and outstation taxi travel.",
  },
  {
    name: "Honda Amaze",
    slug: "amaze",
    basePath: "",
    type: "Taxi",
    description:
      "Book an Amaze from your Noida locality for comfortable everyday and airport travel.",
  },

  // =====================================================
  // TEMPO TRAVELLER
  // =====================================================
  {
    name: "Luxury Tempo Traveller",
    slug: "luxury-tempo-traveller",
    basePath: "tempo",
    type: "Tempo Traveller",
    description:
      "Book a Luxury Tempo Traveller from your Noida locality for premium group travel, weddings, corporate trips and outstation journeys.",
  },
  {
    name: "12 Seater Tempo Traveller",
    slug: "12-seater-tempo-traveller",
    basePath: "tempo",
    type: "Tempo Traveller",
    description:
      "Book a 12 Seater Tempo Traveller from your Noida locality for comfortable family and group travel.",
  },
  {
    name: "16 Seater Tempo Traveller",
    slug: "16-seater-tempo-traveller",
    basePath: "tempo",
    type: "Tempo Traveller",
    description:
      "Book a 16 Seater Tempo Traveller from your Noida locality for group tours, family trips and corporate travel.",
  },
  {
    name: "20 Seater Tempo Traveller",
    slug: "20-seater-tempo-traveller",
    basePath: "tempo",
    type: "Tempo Traveller",
    description:
      "Book a 20 Seater Tempo Traveller from your Noida locality for large groups, events and outstation journeys.",
  },
  {
    name: "24 Seater Tempo Traveller",
    slug: "24-seater-tempo-traveller",
    basePath: "tempo",
    type: "Tempo Traveller",
    description:
      "Book a 24 Seater Tempo Traveller from your Noida locality for large family groups, corporate trips and tours.",
  },
];

export default function NoidaLocationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 sm:py-20">
      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* PAGE HEADER */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
            <MapPin className="h-3.5 w-3.5" />
            Noida Travel Locations
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Book a Taxi or Tempo Traveller from Your Location in Noida
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Select your preferred vehicle and Noida locality to find
            location-specific taxi and Tempo Traveller services. Choose
            from comfortable cars and group vehicles for local,
            airport and outstation journeys.
          </p>
        </div>

        {/* VEHICLE SECTIONS */}
        <div className="space-y-14">

          {vehicleSections.map((vehicle, index) => (
            <section
              key={vehicle.slug}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
            >

              {/* SECTION HEADER */}
              <div className="flex flex-col gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-end sm:justify-between">

                <div className="max-w-3xl">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <CarFront className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                        {index + 1}. {vehicle.type}
                      </p>

                      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        {vehicle.name} in Noida
                      </h2>
                    </div>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {vehicle.description}
                  </p>

                </div>

                {/* Vehicle main page */}
                <Link
                  href={
                    vehicle.basePath
                      ? `taxi/${vehicle.slug}`
                      : `/taxi/${vehicle.slug}`
                  }
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
                >
                  View {vehicle.name}

                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              {/* LOCATIONS */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

                {noidaLocalities.map((location) => {

                  const href = vehicle.basePath
                    ? `/noida/${location.slug}/${vehicle.slug}`
                    : `/noida/${location.slug}/${vehicle.slug}`;

                  return (
                    <Link
                      key={`${vehicle.slug}-${location.slug}`}
                      href={href}
                      className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-md"
                    >

                      {/* Icon */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-amber-500 shadow-sm transition group-hover:bg-amber-500 group-hover:text-white">
                        <MapPin className="h-4 w-4" />
                      </div>

                      {/* Location */}
                      <h3 className="mt-3 text-sm font-bold text-slate-900">
                        {location.name}
                      </h3>

                      {/* Vehicle */}
                      <p className="mt-1 text-xs text-slate-500">
                        {vehicle.name}
                      </p>

                      {/* CTA */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-semibold text-amber-600">
                          Book Now
                        </span>

                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-600" />
                      </div>

                    </Link>
                  );
                })}

              </div>

            </section>
          ))}

        </div>

      </section>
    </main>
  );
}