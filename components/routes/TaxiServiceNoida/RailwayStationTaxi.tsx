import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  ShieldCheck,
  TrainFront,
} from "lucide-react";

const railwayStations = [
  {
    name: "New Delhi Railway Station",
    shortName: "NDLS",
    description:
      "Book a comfortable taxi from Noida to New Delhi Railway Station for early-morning or late-night train travel.",
    href: "/noida-to-new-delhi-railway-station-taxi",
  },
  {
    name: "Anand Vihar Railway Station",
    shortName: "ANVR",
    description:
      "Convenient taxi service from Noida to Anand Vihar Railway Station with flexible pickup options.",
    href: "/noida-to-anand-vihar-railway-station-taxi",
  },
  {
    name: "Ghaziabad Railway Station",
    shortName: "GZB",
    description:
      "Travel from Noida to Ghaziabad Railway Station with a reliable cab for individual and family journeys.",
    href: "/noida-to-ghaziabad-railway-station-taxi",
  },
];

const features = [
  {
    icon: Clock3,
    title: "24/7 Service",
    description: "Book taxis for trains at any time.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description: "Travel with experienced drivers.",
  },
  {
    icon: Navigation,
    title: "Flexible Pickup",
    description: "Pickup from your preferred location.",
  },
];

export default function RailwayStationTaxi() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
              <TrainFront className="h-3.5 w-3.5" />
              Railway Transfers
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Railway Station Taxi Service from Noida
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-600 lg:ml-auto sm:text-lg">
            Need to catch a train or pick someone up from the railway
            station? Book a reliable taxi from Noida with convenient pickup
            and drop-off options.
          </p>
        </div>

        {/* Main Route Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/60 lg:mt-12">
          <div className="grid lg:grid-cols-[1fr_0.8fr]">

            {/* Left Route Content */}
            <div className="p-5 sm:p-7 lg:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                  <TrainFront className="h-5 w-5 text-amber-600" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Popular Transfer
                  </p>

                  <h3 className="mt-0.5 text-lg font-bold text-slate-900 sm:text-xl">
                    Noida Railway Station Taxi
                  </h3>
                </div>
              </div>

              {/* Route */}
              <div className="mt-8">
                <RouteRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Pickup"
                  value="Your location in Noida"
                />

                <div className="ml-[17px] h-8 border-l border-dashed border-slate-300" />

                <RouteRow
                  icon={<TrainFront className="h-4 w-4" />}
                  label="Drop"
                  value="New Delhi / Anand Vihar / Ghaziabad"
                />
              </div>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-sm leading-6 text-slate-600">
                Whether you have an early morning train or a late-night
                arrival, pre-book your taxi and avoid the hassle of finding
                transportation at the last minute.
              </p>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/noida/railway-station-taxi"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 text-sm font-semibold text-white transition hover:bg-amber-800"
                >
                  Book Railway Taxi
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="tel:8377809809"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-amber-500"
                >
                  Call for Booking
                </a>
              </div>
            </div>

            {/* Right Benefits */}
            <div className="border-t border-slate-200 bg-white p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-9">
              <p className="text-sm font-semibold text-slate-900">
                Designed for hassle-free train travel
              </p>

              <div className="mt-5 space-y-4">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex gap-3.5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                        <Icon className="h-4.5 w-4.5 text-slate-700" />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          {feature.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />

                  <span className="text-xs font-medium text-slate-600">
                    Door-to-door pickup and drop available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Railway Station Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {railwayStations.map((station) => (
            <StationCard
              key={station.name}
              station={station}
            />
          ))}
        </div>

        {/* Bottom Information */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-600" />

            <div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Pickup from any Noida locality
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                We can arrange railway station transfers from residential
                areas, offices, hotels and major sectors across Noida.
              </p>
            </div>
          </div>

          <Link
            href="/noida/taxi-service"
            className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-amber-600"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Route Row
--------------------------------- */

function RouteRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-amber-600 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium text-amber-600">
          {label}
        </p>

        <p className="mt-0.5 text-sm font-semibold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

/* --------------------------------
   Station Card
--------------------------------- */

function StationCard({
  station,
}: {
  station: {
    name: string;
    shortName: string;
    description: string;
    href: string;
  };
}) {
  return (
    <Link
      href={station.href}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.22)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-amber-50">
          <TrainFront className="h-5 w-5 text-slate-700 transition-colors group-hover:text-amber-600" />
        </div>

        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold tracking-wide text-slate-500">
          {station.shortName}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        {station.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {station.description}
      </p>

      <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-700 transition-colors group-hover:text-amber-600">
        View Taxi Service
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}