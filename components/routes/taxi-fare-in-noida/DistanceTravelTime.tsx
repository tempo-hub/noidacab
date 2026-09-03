
import {
  MapPinned,
  Route,
  Clock3,
  CarFront,
} from "lucide-react";

const travelInfo = [
  {
    title: "Flexible Routes",
    value: "Multiple Routes",
    description:
      "Taxi fares can vary depending on the selected pickup location, destination and route.",
    icon: Route,
  },
  {
    title: "Travel Time",
    value: "Route Based",
    description:
      "Journey time depends on traffic, weather, route conditions and the selected destination.",
    icon: Clock3,
  },
  {
    title: "Pickup Locations",
    value: "Multiple Locations",
    description:
      "Cabs can be booked from various residential areas, business hubs, transport points and nearby locations.",
    icon: MapPinned,
  },
  {
    title: "Vehicle Options",
    value: "AC Cabs",
    description:
      "Choose from different vehicle categories based on your group size, comfort and travel requirements.",
    icon: CarFront,
  },
];

export default function DistanceTravelTime() {
  return (
    <section className="bg-white/95 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Travel Information
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Taxi Travel Information
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Understand the factors that can affect your taxi fare, travel time
            and vehicle selection before booking your ride.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travelInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-2xl font-bold text-amber-600">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Explanation */}
        <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
          <h3 className="text-2xl font-bold text-gray-900">
            What Can Affect Your Taxi Fare?
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            Taxi fares can depend on several factors, including the selected
            vehicle, journey type, travel distance, route, waiting time and
            applicable taxes or charges. The final fare may therefore vary
            depending on the details of your booking.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            For the most accurate price, select your preferred vehicle and
            journey details during booking. The applicable fare will be shown
            before you confirm your ride.
          </p>
        </div>

      </div>
    </section>
  );
}
