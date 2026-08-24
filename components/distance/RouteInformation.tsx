import { ArrowRight, MapPinned } from "lucide-react";

interface RouteInformationProps {
  routes: string[];
  from?: string;
  to?: string;
}

export default function RouteInformation({
  routes,
  from,
  to,
}: RouteInformationProps) {
  return (
    <section className="bg-white/95 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Route Information
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Popular Routes
            {from && to && (
              <>
                {" "}
                <span className="text-orange-500">
                  {from} to {to}
                </span>
              </>
            )}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Explore the commonly used roads and routes for a smooth journey.
            Choose the route that best suits your travel needs.
          </p>
        </div>

        {/* Routes */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => (
            <div
              key={route}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/95 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <MapPinned className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Route {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-1 font-semibold leading-6 text-zinc-900">
                    {route}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-4 w-4 shrink-0 text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}