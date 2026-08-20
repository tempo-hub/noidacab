import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  CarFront,
} from "lucide-react";
import { noidaLocalities } from "@/data/routes/noida";


export const metadata = {
  title: "Top Locations in Noida | NoidaCab",
  description:
    "Explore popular locations and localities in Noida and book reliable cabs with NoidaCab.",
};

export default function NoidaLocationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <section className="mx-auto max-w-7xl px-5  sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white">
            <MapPin className="h-5 w-5" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Top Locations in Noida
          </h1>
        </div>

        {/* Locations */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {noidaLocalities.map((location) => (
            <Link
              key={location.slug}
              href={`/noida/${location.slug}/innova`}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-white">
                <CarFront className="h-5 w-5" />
              </div>

              {/* Location */}
              <h2 className="mt-4 text-sm font-bold text-slate-900">
                {location.name}
              </h2>

              {/* Vehicle */}
              <p className="mt-1 text-xs text-slate-400">
                Innova Crysta
              </p>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-amber-600">
                  Book Now
                </span>

                <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber-600" />
              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}