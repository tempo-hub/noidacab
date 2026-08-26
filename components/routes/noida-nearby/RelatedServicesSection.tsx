import Link from "next/link";

import {
  nearbyNoidaTaxiServices,
  cabsFromNoida,
  ourAirportCabs,
} from "@/data/routes/noida-delhi-related";

type LinkItem = {
  title: string;
  href: string;
};

type LinkGroupProps = {
  title: string;
  links: LinkItem[];
};

function LinkGroup({
  title,
  links,
}: LinkGroupProps) {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-semibold text-slate-900 sm:text-3xl">
        {title}
      </h2>

      <div className="rounded-lg border border-slate-200 bg-white">
        <ul className="divide-y divide-slate-100 px-5 py-2 sm:px-6">
          {links.map((link) => (
            <li key={link.href}>
              <div
                
                className="
                  block
                  py-3.5
                  text-base
                  text-slate-700
                  transition-colors
                  hover:text-amber-600
                  hover:underline
                  sm:py-4
                "
              >
                {link.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function RelatedServicesSection() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Taxi Services */}
        <div className="grid gap-8 lg:grid-cols-2">
          <LinkGroup
            title="Other Taxi Services near Noida"
            links={nearbyNoidaTaxiServices}
          />

          <LinkGroup
            title="Cab Services From Noida"
            links={cabsFromNoida}
          />
        </div>

        {/* Airport Cabs */}
        <div className="mt-10">
          <LinkGroup
            title="Our Airport Cabs"
            links={ourAirportCabs}
          />
        </div>

      </div>
    </section>
  );
}