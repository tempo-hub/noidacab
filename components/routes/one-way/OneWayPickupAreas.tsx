import { MapPin } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
  };
};

const pickupAreas = [
  "Noida Sector 18",
  "Noida Sector 62",
  "Noida Sector 63",
  "Noida Sector 75",
  "Noida Sector 76",
  "Noida Extension",
];

export function OneWayPickupAreas({ route }: Props) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 p-7 sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Pickup Locations
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Book Your {route.from} to {route.to} Cab
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Convenient pickup can be arranged from popular areas across
              {route.from}. Enter your exact pickup location while
              booking.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pickupAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200"
              >
                <MapPin className="h-4 w-4 text-amber-400" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}