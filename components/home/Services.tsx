import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-12 bg-white/95 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Cab Services Designed
            <span className="block text-amber-600">
              For Every Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            From local rides to airport transfers and outstation trips, we have
            the perfect cab service for every travel need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href="/route/noida-to-delhi-taxi"
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Floating Icon */}
                  <div className="absolute bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffb300] text-white shadow-lg">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  {/* <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-3 font-semibold text-amber-600 transition group-hover:bg-amber-600 group-hover:text-white">
                    Learn More
                    <ArrowRight size={18} />
                  </div> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}