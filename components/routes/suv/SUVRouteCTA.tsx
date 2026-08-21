import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
} from "lucide-react";

import type { ParsedRoute } from "@/lib/parse-route";

type Props = {
  route: ParsedRoute;
};

export function SUVRouteCTA({ route }: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center shadow-xl sm:px-10 sm:py-16">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
              <CarFront className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Book {route.fromName} to {route.toName} SUV Taxi
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Choose a comfortable Ertiga or Innova SUV for your
              journey. Suitable for family trips, airport transfers
              and outstation travel.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <TrustPoint text="Ertiga & Innova" />
              <TrustPoint text="AC Vehicles" />
              <TrustPoint text="More Luggage Space" />
            </div>

            <Link
              href="#suv-vehicles"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Choose Your SUV
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPoint({
  text,
}: {
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-orange-400" />
      {text}
    </span>
  );
}