import {
  MapPin,
  Car,
  MapPinned,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

type Props = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: Vehicle;
};

export function RouteInfo({
  location,
  vehicle,
}: Props) {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <MapPinned className="h-4 w-4" />
            LOCATION INFORMATION
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {vehicle.name} Cab in {location.name}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Book a reliable {vehicle.name} cab from {location.name}
            for local travel, airport transfers, railway stations,
            business trips and nearby destinations.
          </p>

        </div>

        {/* Location Card */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="grid lg:grid-cols-[1fr_180px_1fr] lg:items-center">

            {/* Location */}
            <div className="p-8 xl:p-10">

              <div className="flex items-start gap-4">

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100">

                  <MapPin className="h-6 w-6 text-amber-600" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-amber-400" />

                </div>

                <div className="min-w-0">

                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <h3 className="mt-1 truncate text-xl font-bold text-slate-950">
                    {location.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Local cab service available
                  </p>

                </div>

              </div>

            </div>

            {/* Vehicle */}
            <div className="flex h-full flex-col items-center justify-center border-y border-slate-100 bg-slate-50/70 px-5 py-8 lg:border-x lg:border-y-0">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 shadow-sm">

                <Car
                  className="h-5 w-5 text-slate-950"
                  strokeWidth={2.5}
                />

              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Available Vehicle
              </p>

              <p className="mt-1 text-lg font-extrabold tracking-tight text-slate-950">
                {vehicle.name}
              </p>

            </div>

            {/* Service */}
            <div className="p-8 xl:p-10">

              <div className="flex items-start gap-4">

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100">

                  <MapPinned className="h-6 w-6 text-slate-700" />

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-slate-400" />

                </div>

                <div className="min-w-0">

                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Cab Service
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-950">
                    Local Travel
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Comfortable rides with professional drivers
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Location Summary */}
        <div className="mx-auto mt-5 max-w-5xl">

          <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 sm:px-5">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400">

              <MapPin
                className="h-4 w-4 text-slate-950"
                strokeWidth={2}
              />

            </div>

            <p className="text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">

              Get a comfortable{" "}

              <span className="font-semibold text-slate-950">
                {vehicle.name}
              </span>{" "}

              cab in{" "}

              <span className="font-semibold text-slate-950">
                {location.name}
              </span>{" "}

              for convenient local travel with transparent pricing
              and reliable service.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}