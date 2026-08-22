import {
  CarFront,
  MapPinned,
  Route,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: "4+",
    label: "Vehicle Options",
    description: "Sedan, MUV and SUV choices",
    icon: CarFront,
  },
  {
    value: "24/7",
    label: "Booking Assistance",
    description: "Plan your ride at your convenience",
    icon: ShieldCheck,
  },
  {
    value: "Local",
    label: "Noida Coverage",
    description: "Pickup across popular Noida areas",
    icon: MapPinned,
  },
  {
    value: "One Way",
    label: "Outstation Routes",
    description: "Convenient intercity travel",
    icon: Route,
  },
];

export default function TaxiStats() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-slate-600 shadow-xl">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

          <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            {/* Heading */}
            <div className="mb-8 text-center sm:mb-10">
              <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                NoidaCab at a Glance
              </span>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Taxi Service Built Around Your Journey
              </h2>

              <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Flexible vehicle options and convenient routes for local,
                one-way and outstation travel from Noida.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:grid-cols-4 lg:divide-y-0">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="group p-5 transition-colors duration-300 hover:bg-white/[0.05] sm:p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 ring-1 ring-amber-400/20">
                        <Icon className="h-5 w-5 text-amber-400" />
                      </div>

                      <span className="text-2xl font-bold text-amber-400 sm:text-3xl">
                        {stat.value}
                      </span>
                    </div>

                    <h3 className="mt-5 text-sm font-semibold text-white sm:text-base">
                      {stat.label}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-slate-400">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom line */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 sm:justify-start">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Local Taxi
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                One Way Taxi
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Outstation Taxi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}