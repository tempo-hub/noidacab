import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
} from "lucide-react";

interface Cab {
  name: string;
  slug: string;
  category: string;
  pricePerKm: number;
}

interface AvailableCabsProps {
  cabs: Cab[];

  from: {
    name: string;
    slug: string;
  };

  to: {
    name: string;
    slug: string;
  };
}

export default function AvailableCabs({
  cabs,
  from,
  to,
}: AvailableCabsProps) {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our Fleet
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Choose Your{" "}
            <span className="text-orange-500">
              Cab for {from.name} to {to.name}
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Select from our range of comfortable and reliable cabs.
            Compare vehicle types and starting per-kilometre rates
            before booking your journey.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cabs.map((cab) => {
            const cabUrl = `/${from.slug}-to-${to.slug}-${cab.slug}-taxi`;

            return (
              <div
                key={cab.slug}
                className="group overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50/95 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >
                {/* Vehicle Top */}
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-zinc-100">
                  <div className="absolute right-5 top-5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-500 shadow-sm">
                    {cab.category}
                  </div>

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-100 bg-orange-50 text-orange-500 transition-transform duration-300 group-hover:scale-105">
                    <CarFront className="h-10 w-10" />
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-zinc-950">
                    {cab.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />

                    <span className="text-sm text-zinc-600">
                      Comfortable AC cab
                    </span>
                  </div>

                  <div className="mt-6 flex items-end justify-between border-t border-zinc-200 pt-5">

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                        Starting From
                      </p>

                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-zinc-950">
                          ₹{cab.pricePerKm}
                        </span>

                        <span className="text-sm text-zinc-500">
                          / km
                        </span>
                      </div>
                    </div>

                    <Link
                      href={cabUrl}
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
                    >
                      View

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}