import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import LegalHero from "@/components/legal/LegalHero";

export const metadata: Metadata = {
  title: "About NoidaCab | Taxi Service in Noida",
  description:
    "Learn about NoidaCab, a Noida-focused taxi service offering local cabs, Noida to Delhi taxis, airport transfers, outstation travel and group transportation.",
  alternates: {
    canonical: "/about-us",
  },
};

const services = [
  {
    icon: CarFront,
    title: "Local Taxi Service",
    description:
      "Convenient taxi services for travel within Noida and nearby areas.",
  },
  {
    icon: MapPin,
    title: "Noida to Delhi Taxi",
    description:
      "Private one-way and round-trip taxi options between Noida and Delhi.",
  },
  {
    icon: ShieldCheck,
    title: "Airport Transfers",
    description:
      "Pre-booked pickup and drop services for airport travel.",
  },
  {
    icon: Users,
    title: "Group Travel",
    description:
      "SUVs, Urbania and Tempo Travellers for families and larger groups.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <LegalHero
        type="about"
        title="About NoidaCab"
        description="A Noida-focused taxi service helping individuals, families, businesses and groups find convenient cab options for local and nearby travel."
      />

      {/* Introduction */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold text-amber-600">
            About Us
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Making Taxi Travel from Noida Simple
          </h2>

          <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
            <p>
              NoidaCab is a taxi service platform focused on making cab
              travel from Noida simple and convenient. We provide information
              and booking options for different vehicle categories based on
              passenger count, luggage requirements, route and type of
              journey.
            </p>

            <p>
              Our services are designed for everyday local travel as well as
              popular routes such as Noida to Delhi. Customers can choose
              from hatchbacks, sedans, SUVs, Urbania and Tempo Traveller
              options depending on their requirements.
            </p>

            <p>
              We aim to make the booking process straightforward by presenting
              vehicle information, route details, estimated fares and travel
              information before a customer proceeds with a booking.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-amber-600">
              Our Services
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Taxi Options for Different Travel Needs
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600">
              From short local journeys to group travel, our vehicle
              categories are designed to cover different travel requirements.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Taxi Fleet
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Depending on availability and travel requirements, NoidaCab
            provides access to different vehicle categories including
            hatchbacks, sedans, SUVs, Urbania and Tempo Travellers.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Hatchback",
              "Sedan",
              "SUV",
              "Urbania",
              "Tempo Traveller",
            ].map((category) => (
              <div
                key={category}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-semibold text-slate-800"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ffb400] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-amber-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Looking for a Taxi from Noida?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Explore our taxi options or book a cab for your next journey.
          </p>

          <Link
            href="/taxi"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700"
          >
            Explore Taxi Options
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}