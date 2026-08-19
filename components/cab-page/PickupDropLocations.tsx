import {
  ArrowRight,
  MapPin,
  Navigation,
  CircleDot,
} from "lucide-react";

type Props = {
  route: {
    fromName: string;
    toName: string;
  };
  vehicle: {
    name: string;
  };
};

export function PickupDropLocations({
  route,
  vehicle,
}: Props) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <MapPin className="h-4 w-4" />
            PICKUP & DROP
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Pickup & Drop Locations
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Book a {vehicle.name} from{" "}
            <span className="font-semibold text-slate-900">
              {route.fromName}
            </span>{" "}
            and travel comfortably to{" "}
            <span className="font-semibold text-slate-900">
              {route.toName}
            </span>
            .
          </p>
        </div>

        {/* Location Journey */}
        <div className="mx-auto mt-10 max-w-5xl">

          <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">

            {/* Pickup Card */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-300
                hover:shadow-lg
                sm:p-7
              "
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-amber-400" />

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200">
                  <MapPin className="h-5 w-5 text-amber-600" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Pickup From
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">
                    {route.fromName}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Choose a convenient pickup point in {route.fromName} for
                    your {vehicle.name} journey.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="space-y-3">
                  {[
                    "Flexible pickup location",
                    "Professional driver",
                    `Comfortable ${vehicle.name}`,
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <CircleDot className="h-3.5 w-3.5 shrink-0 text-amber-500" />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex items-center justify-center md:px-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200 bg-amber-400 shadow-sm">
                <ArrowRight
                  className="h-4 w-4 text-slate-950"
                  strokeWidth={2.5}
                />
              </div>
            </div>

            {/* Drop Card */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-300
                hover:shadow-lg
                sm:p-7
              "
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-slate-700" />

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-slate-200">
                  <Navigation className="h-5 w-5 text-slate-700" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Drop At
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-950 sm:text-2xl">
                    {route.toName}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Enjoy a direct and convenient drop-off at your destination
                    in {route.toName}.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="space-y-3">
                  {[
                    "Direct destination drop",
                    "Comfortable journey",
                    "Hassle-free travel",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <CircleDot className="h-3.5 w-3.5 shrink-0 text-slate-400" />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Route Summary */}
          <div className="mt-5 flex items-center justify-center">
            <div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-amber-200 bg-amber-50 px-4 py-2.5 shadow-sm sm:gap-3 sm:px-5">
              <MapPin className="h-4 w-4 shrink-0 text-amber-600" />

              <span className="truncate text-xs font-semibold text-slate-700 sm:text-sm">
                {route.fromName}
              </span>

              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-amber-500" />

              <span className="truncate text-xs font-semibold text-slate-700 sm:text-sm">
                {route.toName}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}