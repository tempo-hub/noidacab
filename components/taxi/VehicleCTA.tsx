import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleCTA({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  return (
    <section className="bg-[#ffb400] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-amber-100 bg-amber-50 px-6 py-9 text-center sm:px-10">
          <p className="text-sm font-semibold text-amber-700">
            NoidaCab
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Ready to Book a {vehicle.name}?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Book a {vehicle.name} taxi in Noida for local travel, airport
            transfers and outstation journeys.
          </p>

          <Link
            href="https://wa.me/918377809809"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            Book {vehicle.name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}