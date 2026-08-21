import {
  ArrowRight,
  CalendarDays,
  CarFront,
  MapPin,
} from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
  };
};

export function OneWayBookingBar({ route }: Props) {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:-mt-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:p-5">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-medium text-gray-500">
                Pickup
              </p>

              <div className="mt-1 flex items-center gap-2 font-semibold text-gray-900">
                <MapPin className="h-4 w-4 text-amber-500" />
                {route.from}
              </div>
            </div>

            <ArrowRight className="hidden h-5 w-5 text-gray-400 md:block" />

            <div>
              <p className="text-xs font-medium text-gray-500">
                Destination
              </p>

              <div className="mt-1 flex items-center gap-2 font-semibold text-gray-900">
                <MapPin className="h-4 w-4 text-amber-500" />
                {route.to}
              </div>
            </div>

            <div className="flex gap-5">
              <div>
                <p className="text-xs text-gray-500">Distance</p>
                <p className="font-semibold text-gray-900">
                  {route.distance}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-semibold text-gray-900">
                  {route.travelTime}
                </p>
              </div>
            </div>

            {/* <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
            >
              <CalendarDays className="h-4 w-4" />
              Book Now
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}