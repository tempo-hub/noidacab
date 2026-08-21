import {
  Clock3,
  MapPin,
  Route,
  ShieldCheck,
} from "lucide-react";

import type { ParsedRoute } from "@/lib/parse-route";

type Props = {
  route: ParsedRoute;
};

export function SUVRouteInfo({ route }: Props) {
  return (
    <section
      id="route-info"
      className="scroll-mt-20 bg-white py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Route Information
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            {route.fromName} to {route.toName} SUV Taxi
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            icon={<MapPin />}
            title="Route"
            value={`${route.fromName} → ${route.toName}`}
          />

          <InfoCard
            icon={<Route />}
            title="Distance"
            value={route.distance}
          />

          <InfoCard
            icon={<Clock3 />}
            title="Travel Time"
            value={route.travelTime}
          />

          <InfoCard
            icon={<ShieldCheck />}
            title="Vehicle Type"
            value="SUV Taxi"
          />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-slate-950">
            About {route.fromName} to {route.toName} SUV Taxi
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {route.description} For passengers looking for additional
            space, an SUV taxi is a convenient choice. Ertiga and
            Innova provide comfortable seating and useful luggage
            capacity for family trips, airport transfers, business
            travel and longer journeys.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            You can choose the SUV according to your group size and
            luggage requirements. Both vehicle options are designed
            for comfortable travel between {route.fromName} and{" "}
            {route.toName}.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
        {icon}
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}