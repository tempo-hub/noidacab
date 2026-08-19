import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Route as RouteIcon,
} from "lucide-react";

type Props = {
  route: {
    fromName: string;
    toName: string;
    distanceKm: number;
  };
};

export function RouteInfo({ route }: Props) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <RouteIcon className="h-4 w-4" />
            ROUTE INFORMATION
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {route.fromName} to {route.toName}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Check the approximate distance and route details before booking
            your cab from {route.fromName} to {route.toName}.
          </p>
        </div>

        {/* Route Card */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Desktop / Tablet */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_180px_1fr] lg:items-center">

            {/* Pickup */}
            <div className="p-8 xl:p-10">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <MapPin className="h-6 w-6 text-amber-600" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-amber-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Pickup
                  </p>

                  <h3 className="mt-1 truncate text-xl font-bold text-slate-950">
                    {route.fromName}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Starting location
                  </p>
                </div>
              </div>
            </div>

            {/* Distance */}
            <div className="flex h-full flex-col items-center justify-center border-x border-slate-100 bg-slate-50/70 px-5 py-8">
              <div className="flex w-full items-center justify-center gap-2">
                <span className="h-px flex-1 bg-slate-200" />

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 shadow-sm">
                  <ArrowRight
                    className="h-4 w-4 text-slate-950"
                    strokeWidth={2.5}
                  />
                </div>

                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Approx. Distance
              </p>

              <p className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
                {route.distanceKm}
                <span className="ml-1 text-sm font-bold text-slate-500">
                  km
                </span>
              </p>
            </div>

            {/* Destination */}
            <div className="p-8 xl:p-10">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  <MapPin className="h-6 w-6 text-slate-700" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-slate-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Destination
                  </p>

                  <h3 className="mt-1 truncate text-xl font-bold text-slate-950">
                    {route.toName}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Drop-off location
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="lg:hidden">

            {/* Pickup */}
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <MapPin className="h-5 w-5 text-amber-600" />

                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Pickup
                  </p>

                  <h3 className="mt-0.5 truncate text-lg font-bold text-slate-950">
                    {route.fromName}
                  </h3>
                </div>
              </div>
            </div>

            {/* Route Connector */}
            <div className="relative flex items-center gap-4 border-y border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-7">

              <div className="ml-1 flex h-11 w-11 shrink-0 items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                  <ArrowDown
                    className="h-4 w-4 text-slate-950"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Approx. Distance
                </p>

                <p className="text-xl font-extrabold text-slate-950">
                  {route.distanceKm}
                  <span className="ml-1 text-sm font-bold text-slate-500">
                    km
                  </span>
                </p>
              </div>
            </div>

            {/* Destination */}
            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  <MapPin className="h-5 w-5 text-slate-700" />

                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Destination
                  </p>

                  <h3 className="mt-0.5 truncate text-lg font-bold text-slate-950">
                    {route.toName}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Route Summary */}
        <div className="mx-auto mt-5 max-w-5xl">
          <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 sm:px-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400">
              <RouteIcon
                className="h-4 w-4 text-slate-950"
                strokeWidth={2}
              />
            </div>

            <p className="text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
              The approximate road distance from{" "}
              <span className="font-semibold text-slate-950">
                {route.fromName}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-slate-950">
                {route.toName}
              </span>{" "}
              is{" "}
              <span className="font-semibold text-slate-950">
                {route.distanceKm} km
              </span>
              . Actual distance may vary depending on the selected route and
              traffic conditions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}