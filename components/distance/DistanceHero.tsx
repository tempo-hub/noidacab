import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
} from "lucide-react";

interface DistanceHeroProps {
  route: {
    from: {
      name: string;
    };
    to: {
      name: string;
    };
    distance: number;
    travelTime: string;
  };
}

export default function DistanceHero({
  route,
}: DistanceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-18 sm:py-16 lg:py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
     
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-wider text-orange-900">
          {route.from.name} to {route.to.name}
        </p>

        <h1 className="mt-3 max-w-4xl text-4xl text-slate-900 font-bold tracking-tight sm:text-5xl">
          {route.from.name} to {route.to.name} Distance & Travel Time
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-slate-700">
          Find the distance, travel time, route information and cab options
          for travelling from {route.from.name} to {route.to.name}.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4">
            <MapPin className="h-5 w-5 text-orange-400" />

            <div>
              <p className="text-xs text-slate-800">
                Distance
              </p>

              <p className="font-semibold text-slate-600">
                {route.distance} km
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4">
            <Clock3 className="h-5 w-5 text-orange-400" />

            <div>
              <p className="text-xs text-slate-800">
                Travel Time
              </p>

              <p className="font-semibold text-slate-600">
                {route.travelTime}
              </p>
            </div>
          </div>

        </div>

        <Link
          href="/noida-to-delhi-taxi"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
        >
          Book a Taxi
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>
    </section>
  );
}