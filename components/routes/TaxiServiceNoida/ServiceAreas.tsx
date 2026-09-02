import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MapPin,
  Navigation,
} from "lucide-react";
import { serviceAreas } from "@/data/serviceAreas";

export default function ServiceAreas() {
  return (
    <section className="bg-white/95 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
              <MapPin className="h-3.5 w-3.5" />
              Service Areas
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Taxi Service Across Noida
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:ml-auto sm:text-lg">
            Our taxi service covers major sectors, residential areas,
            commercial hubs and nearby destinations across Noida and Greater
            Noida. Book a cab for local travel, airport transfers or
            outstation journeys.
          </p>
        </div>

        {/* Area Grid */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4">
          {serviceAreas.map((area) => (
            <AreaCard
              key={area.name}
              area={area}
            />
          ))}
        </div>

        {/* Coverage Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:mt-10 sm:p-6 lg:p-7">
          
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-slate-200" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full border border-slate-200" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <Navigation className="h-5 w-5 text-amber-600" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Don't see your area?
                </h3>

                <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
                  We also serve many nearby sectors and localities in Noida.
                  Contact us with your pickup location and we'll help you
                  arrange your taxi.
                </p>
              </div>
            </div>

            <a
              href="tel:8377809809"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white transition hover:bg-amber-700"
            >
              Call for Availability
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Area Card
--------------------------------- */

function AreaCard({
  area,
}: {
  area: {
    name: string;
    description: string;
    href: string;
  };
}) {
  return (
    <Link
      href={area.href}
      className="group flex h-full items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.22)]"
    >
      {/* Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-amber-50">
        <Building2 className="h-4 w-4 text-slate-600 transition-colors group-hover:text-amber-600" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-slate-900">
            {area.name}
          </h3>

          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-amber-600" />
        </div>

        <p className="mt-1.5 text-xs leading-5 text-slate-500">
          {area.description}
        </p>
      </div>
    </Link>
  );
}