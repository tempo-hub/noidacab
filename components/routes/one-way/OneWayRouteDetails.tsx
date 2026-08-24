import {
  Clock3,
  MapPinned,
  Navigation,
} from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
  };
};

export function OneWayRouteDetails({ route }: Props) {
  return (
    <section className="bg-white/95 py-16 sm:py-20 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Route Information
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {route.from} to {route.to} Travel Information
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              The {route.from} to {route.to} route is suitable for
              business travel, family trips, airport transfers and
              intercity journeys. You can select a sedan, MUV or SUV
              depending on your comfort and passenger requirements.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Booking a one-way taxi is convenient when you only need
              transportation to your destination and do not require the
              same cab for the return journey.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-amber-600" />

                <div>
                  <p className="text-xs text-gray-500">
                    Approx. Distance
                  </p>

                  <p className="font-bold text-gray-900">
                    {route.distance}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-amber-600" />

                <div>
                  <p className="text-xs text-gray-500">
                    Approx. Travel Time
                  </p>

                  <p className="font-bold text-gray-900">
                    {route.travelTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <Navigation className="h-5 w-5 text-amber-600" />

                <div>
                  <p className="text-xs text-gray-500">
                    Trip Type
                  </p>

                  <p className="font-bold text-gray-900">
                    One Way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}