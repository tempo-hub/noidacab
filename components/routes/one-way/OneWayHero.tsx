import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
  };
};

export function OneWayHero({ route }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-white to-amber-500">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
              <CarFront className="h-4 w-4" />
              One Way Cab Service
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {route.from} to {route.to}{" "}
              <span className="text-amber-600">One Way Cab</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Book a reliable one-way taxi from {route.from} to {route.to}
              with comfortable cars, professional drivers and transparent
              fares.
            </p>

            {/* */}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                One-way pricing
              </span>

              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Verified drivers
              </span>

              <span className="flex items-center gap-2">
                <CarFront className="h-4 w-4 text-green-600" />
                Clean cars
              </span>
            </div>
          </div>

          {/* Booking Card */}
          <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-xl backdrop-blur">
            <h2 className="text-xl font-bold text-gray-900">
              Book Your One Way Cab
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {route.from} → {route.to}
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Pickup Location</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {route.from}
                </p>
              </div>

              <div className="rounded-xl border bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Drop Location</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {route.to}
                </p>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-amber-500 px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-amber-600"
              >
                Book One Way Cab
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}