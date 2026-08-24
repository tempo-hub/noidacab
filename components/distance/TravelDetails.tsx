import {
  CalendarDays,
  CarFront,
  Clock3,
  MapPin,
  Route,
} from "lucide-react";

interface TravelDetailsProps {
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

export default function TravelDetails({
  route,
}: TravelDetailsProps) {
  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Travel Details
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            {route.from.name} to {route.to.name}{" "}
            <span className="text-orange-500">
              Journey Details
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Get a quick overview of the important travel details
            before booking your cab from{" "}
            <span className="font-medium text-zinc-900">
              {route.from.name}
            </span>{" "}
            to{" "}
            <span className="font-medium text-zinc-900">
              {route.to.name}
            </span>
            .
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Distance */}
          <div className="group rounded-2xl border border-zinc-200 bg-zinc-50/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <MapPin className="h-5 w-5" />
              </div>

              <span className="text-xs font-semibold text-zinc-300">
                01
              </span>
            </div>

            <p className="mt-6 text-sm font-medium text-zinc-500">
              Road Distance
            </p>

            <p className="mt-1 text-2xl font-bold text-zinc-950">
              {route.distance} KM
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Approximate road distance between the two locations.
            </p>
          </div>

          {/* Travel Time */}
          <div className="group rounded-2xl border border-zinc-200 bg-zinc-50/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Clock3 className="h-5 w-5" />
              </div>

              <span className="text-xs font-semibold text-zinc-300">
                02
              </span>
            </div>

            <p className="mt-6 text-sm font-medium text-zinc-500">
              Travel Time
            </p>

            <p className="mt-1 text-2xl font-bold text-zinc-950">
              {route.travelTime}
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Estimated time under normal traffic conditions.
            </p>
          </div>

          {/* Route Type */}
          <div className="group rounded-2xl border border-zinc-200 bg-zinc-50/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Route className="h-5 w-5" />
              </div>

              <span className="text-xs font-semibold text-zinc-300">
                03
              </span>
            </div>

            <p className="mt-6 text-sm font-medium text-zinc-500">
              Route Type
            </p>

            <p className="mt-1 text-2xl font-bold text-zinc-950">
              Intercity
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Convenient point-to-point cab travel.
            </p>
          </div>

          {/* Travel Mode */}
          <div className="group rounded-2xl border border-zinc-200 bg-zinc-50/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <CarFront className="h-5 w-5" />
              </div>

              <span className="text-xs font-semibold text-zinc-300">
                04
              </span>
            </div>

            <p className="mt-6 text-sm font-medium text-zinc-500">
              Travel Mode
            </p>

            <p className="mt-1 text-2xl font-bold text-zinc-950">
              Cab
            </p>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Private cab with convenient door-to-door travel.
            </p>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-orange-100 bg-orange-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-orange-500 shadow-sm">
              <CalendarDays className="h-4 w-4" />
            </div>

            <div>
              <p className="font-semibold text-zinc-950">
                Planning your journey?
              </p>

              <p className="mt-1 text-sm leading-6 text-zinc-600">
                Travel time can vary depending on traffic,
                weather and your exact pickup and drop location.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-orange-600">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Plan ahead for a smoother journey
          </div>
        </div>

      </div>
    </section>
  );
}