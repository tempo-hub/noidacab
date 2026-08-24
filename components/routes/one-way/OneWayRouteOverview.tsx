import { ArrowRight, CheckCircle2, Route } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
    description: string;
  };
};

export function OneWayRouteOverview({ route }: Props) {
  return (
    <section className="bg-white/95 py-16 sm:py-20 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700">
              <Route className="h-4 w-4" />
              One Way Route
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {route.from} to {route.to} One Way Cab
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              {route.description} Whether you are travelling for work,
              family, an airport transfer or a personal trip, a one-way
              taxi lets you travel directly to {route.to} without paying
              for a return journey.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              NoidaCab offers comfortable cabs from {route.from} to{" "}
              {route.to} with convenient pickup, experienced drivers and
              a range of vehicle options for different group sizes.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "One-way booking",
                "Professional drivers",
                "Comfortable vehicles",
                "Door-to-door pickup",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-amber-500 p-7 text-white shadow-xl">
            <p className="text-sm text-slate-900">
              Route Summary
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="rounded-xl bg-white px-4 py-3 text-center">
                <p className="text-xs text-gray-900">FROM</p>
                <p className="mt-1 font-bold text-black">{route.from}</p>
              </div>

              <ArrowRight className="h-5 w-5 text-amber-400" />

              <div className="rounded-xl bg-white px-4 py-3 text-center">
                <p className="text-xs text-gray-900">TO</p>
                <p className="mt-1 font-bold text-black">{route.to}</p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white p-4">
                <p className="text-xs text-gray-900">Distance</p>
                <p className="mt-1 font-semibold text-black">
                  {route.distance}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-xs text-gray-900">Travel Time</p>
                <p className="mt-1 font-semibold text-black">
                  {route.travelTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}