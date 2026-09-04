import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CarTaxiFront,
  MapPinned,
  Plane,
  Route,
} from "lucide-react";
import { serviceAreas } from "@/data/serviceAreas";
import { services } from "@/data/services";



export default function TaxiServices() {
  return (
    <section className="border-b border-slate-200 bg-white/95 py-8 sm:py-12 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
              Our Services
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Taxi Services in Noida
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Choose the right taxi service for your journey. From short
              local rides to airport transfers and long-distance travel,
              we have options for every requirement.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href="/"
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

        {/* Mobile CTA */}
        <div className="mt-7 sm:hidden">
          <Link
            href="/noida/taxi-booking"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Book a Taxi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />

          <p className="text-xs font-medium text-slate-500 sm:text-sm">
            Local, airport, outstation and corporate taxi services available
            from Noida.
          </p>

          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        </div>
      </div>
    </section>
  );
}