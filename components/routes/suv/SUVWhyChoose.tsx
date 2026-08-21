import {
  BriefcaseBusiness,
  CarFront,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { ParsedRoute } from "@/lib/parse-route";

type Props = {
  route: ParsedRoute;
};

export function SUVWhyChoose({ route }: Props) {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Why Choose an SUV
          </span>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Why Choose an SUV Taxi from {route.fromName} to{" "}
            {route.toName}?
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            SUV taxis are ideal when you want more passenger space,
            additional luggage capacity and a comfortable travel
            experience.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Benefit
            icon={<Users />}
            title="Spacious Seating"
            text="Comfortable seating makes SUVs suitable for family and group travel."
          />

          <Benefit
            icon={<BriefcaseBusiness />}
            title="More Luggage"
            text="Additional luggage space is useful for airport and outstation journeys."
          />

          <Benefit
            icon={<CarFront />}
            title="Ertiga & Innova"
            text="Choose between practical Ertiga and spacious Innova options."
          />

          <Benefit
            icon={<ShieldCheck />}
            title="Comfortable Travel"
            text="A convenient option for longer journeys between cities."
          />
        </div>
      </div>
    </section>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-slate-400">
        {text}
      </p>
    </div>
  );
}