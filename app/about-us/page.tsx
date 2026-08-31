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
import Image from "next/image";

export const metadata: Metadata = {
  title: "About NoidaCab | Taxi Service in Noida",
  description:
    "Learn about NoidaCab, a Noida-focused taxi service offering local cabs, Noida to Delhi taxis, airport transfers, outstation travel and group transportation.",
  alternates: {
    canonical: "/about-us",
  },
};

const leadership = [
  {
    name: "Neha Singh",
    role: "Managing Director",
    image: "/leadership/director-neha.jpg",
    description:
      "Our Managing Director contributes to company through her 16+ years of experience in Human Resources and Strategy. With excellent leadership skills and innovative ideas, she oversees the management of our rapidly growing company.",
  },
  {
    name: "Kumar Sambhav",
    role: "Director, Sales & Marketing",
    image: "/leadership/kumar-sambhav.jpg",
    description:
      "Our sales & marketing director, the reason of our astonishing growth over the years ever since our early days. His keen marketing strategies and 15 years' worth of insights gave us that push to soar high in the mobility sector.",
  },
  {
    name: "Dheena Sonal",
    role: "Director, Operation",
    image: "/leadership/dheena.png",
    description:
      "Our director, a visionary leader who is guiding the company with her strategic insights. She has given her unwavering dedication to the company and brought revolutionary innovations followed by great for the company.",
  },
  {
    name: "Anupama Sinha",
    role: "Director, Admin",
    image: "/leadership/director-anupama.jpg",
    description:
      "Director and Head of Recruitment Department, Anupama Sinha brings her 15+ years of experience and expertise in travels and tourism. Through her guidance, Chiku Cab has extended its services to 250+ cities and covering 1000+ routes.",
  },
];

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
      <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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
      <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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
                  

                  <div className="flex justify-between item-center">
                    <h3 className="mt-5 font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     

            {/* Leadership */}
      <section className="bg-white/95 border-b border-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Meet Our Leadership
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              The experienced visionaries guiding our mission to transform
              driver hiring across India.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="flex min-h-[370px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Profile Image */}
                <div className="flex justify-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full">
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      sizes="112px"
                      className="object-cover object-[center_0%]"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-5 text-center text-base font-bold text-slate-900">
                  {leader.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-center text-sm font-semibold text-red-600">
                  {leader.role}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Vehicle Categories */}
      <section className="bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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