import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface RecommendedCabProps {
  cab: {
    name: string;
    slug: string;
    category: string;
    pricePerKm: number;
  };

  from: {
    name: string;
    slug: string;
  };

  to: {
    name: string;
    slug: string;
  };
}

export default function RecommendedCab({
  cab,
  from,
  to,
}: RecommendedCabProps) {
  const cabUrl = `/${from.slug}-to-${to.slug}-${cab.slug}-taxi`;

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Recommended Cab
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            A Comfortable Cab for Your{" "}
            <span className="text-orange-500">
              {from.name} to {to.name} Journey
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Choose a reliable cab with comfortable seating, professional
            service and transparent per-kilometre pricing.
          </p>
        </div>

        {/* Recommendation Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50/95 shadow-sm">

          {/* Orange Accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-orange-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Cab Information */}
              <div className="flex min-w-0 items-start gap-5">

                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-500 shadow-sm">
                  <CarFront className="h-8 w-8" />
                </div>

                <div className="min-w-0">

                  {/* Badge */}
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    <Sparkles className="h-3.5 w-3.5" />
                    Best Choice
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                    {cab.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-zinc-500">
                    {cab.category} Cab
                  </p>

                  {/* Features */}
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" />
                      Comfortable ride
                    </div>

                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" />
                      Professional driver
                    </div>

                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" />
                      AC cab
                    </div>
                  </div>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex flex-col gap-5 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between lg:min-w-[360px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Starting Rate
                  </p>

                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-zinc-950">
                      ₹{cab.pricePerKm}
                    </span>

                    <span className="text-sm font-medium text-zinc-500">
                      / km
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-zinc-400">
                    Cab fare may vary by trip
                  </p>
                </div>

                <Link
                  href={cabUrl}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  View Cab

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}