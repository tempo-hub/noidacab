import {
  MapPinned,
  Route,
  Clock3,
  CarFront,
} from "lucide-react";

const travelInfo = [
  {
    title: "Approximate Distance",
    value: "45–55 KM",
    description:
      "The distance between Noida and Delhi depends on your exact pickup and drop-off locations.",
    icon: Route,
  },
  {
    title: "Travel Time",
    value: "1–2 Hours",
    description:
      "Travel time can vary depending on traffic, route, weather and your destination in Delhi.",
    icon: Clock3,
  },
  {
    title: "Pickup Locations",
    value: "Across Noida",
    description:
      "Book a cab from popular Noida sectors, residential areas, business hubs and nearby locations.",
    icon: MapPinned,
  },
  {
    title: "Comfortable Travel",
    value: "AC Cabs",
    description:
      "Choose from multiple vehicle categories according to your group size and travel requirements.",
    icon: CarFront,
  },
];

export default function DistanceTravelTime() {
  return (
    <section className="bg-[#FFFDF5] py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Route Information
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Noida to Delhi Distance & Travel Time
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Planning a journey from Noida to Delhi? Check the approximate
            distance, expected travel time and cab options before booking your
            ride.
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
            How Long Does a Noida to Delhi Taxi Take?
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            The journey time from Noida to Delhi depends on your starting
            location, destination, selected route and traffic conditions.
            During busy hours, travel may take longer than usual. Booking a
            cab in advance can help you plan your journey more comfortably.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Since Noida and Delhi have multiple pickup and drop-off points, the
            actual distance and travel time will be determined by the specific
            locations entered during booking.
          </p>
        </div>
      </div>
    </section>
  );
}