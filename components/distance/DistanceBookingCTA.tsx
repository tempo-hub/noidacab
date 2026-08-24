import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

interface DistanceBookingCTAProps {
  route: {
    from: {
      name: string;
      slug: string;
    };
    to: {
      name: string;
      slug: string;
    };
    distance: number;
    travelTime: string;
  };
}

export default function DistanceBookingCTA({
  route,
}: DistanceBookingCTAProps) {
  return (
    <section className="bg-white/95 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-10 shadow-xl sm:px-10 sm:py-14 lg:px-14">

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* Content */}
            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
                <CarFront className="h-4 w-4" />
                Ready to Travel?
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Book Your Cab from{" "}
                <span className="text-orange-500">
                  {route.from.name}
                </span>{" "}
                to{" "}
                <span className="text-orange-500">
                  {route.to.name}
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                Choose a comfortable cab and enjoy convenient
                door-to-door travel with NoidaCab.
              </p>

              {/* Route Stats */}
              <div className="mt-8 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <MapPin className="h-4 w-4 text-orange-500" />

                  <span className="text-sm font-medium text-zinc-300">
                    {route.distance} KM
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <Clock3 className="h-4 w-4 text-orange-500" />

                  <span className="text-sm font-medium text-zinc-300">
                    {route.travelTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <CarFront className="h-4 w-4 text-orange-500" />

                  <span className="text-sm font-medium text-zinc-300">
                    Multiple Cabs
                  </span>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="lg:min-w-[230px]">

              <Link
                href={`/noida-to-${route.to.slug}-taxi`}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 sm:w-auto"
              >
                Book Your Cab

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" />

                Easy & convenient booking
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}