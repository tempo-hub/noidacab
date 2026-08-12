import {
  Clock3,
  MapPin,
  Route,
  TrafficCone,
} from "lucide-react";

const routeDetails = [
  {
    icon: MapPin,
    label: "Pickup",
    value: "Noida",
    description: "Choose your pickup location anywhere in Noida.",
  },
  {
    icon: MapPin,
    label: "Destination",
    value: "Delhi",
    description: "Drop-off can be selected according to your destination.",
  },
  {
    icon: Route,
    label: "Distance",
    value: "Approx. 25–45 km",
    description:
      "The distance depends on the exact pickup and destination.",
  },
  {
    icon: Clock3,
    label: "Travel Time",
    value: "Around 1–2 hours",
    description:
      "Travel time may change depending on traffic and route.",
  },
];

const travelFactors = [
  "Exact pickup location in Noida",
  "Destination within Delhi",
  "Traffic during peak hours",
  "Road and weather conditions",
  "Stops requested during the journey",
];

export default function NoidaDelhiSedanRoute() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Noida to Delhi Sedan Route, Distance & Travel Time
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            A sedan provides a convenient private option for travelling
            from Noida to Delhi. The actual distance and travel time
            depend on your pickup location, destination and traffic
            conditions.
          </p>
        </div>

        {/* Route Visual */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">

            {/* Noida */}
            <div className="flex min-w-[140px] flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <MapPin size={25} />
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                Noida
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Pickup
              </p>
            </div>

            {/* Desktop Route */}
            <div className="my-5 flex items-center sm:mx-5 sm:my-0">
              <div className="hidden h-px w-24 border-t border-dashed border-slate-300 sm:block lg:w-40" />

              <Route
                size={20}
                className="text-amber-600"
              />

              <div className="hidden h-px w-24 border-t border-dashed border-slate-300 sm:block lg:w-40" />
            </div>

            {/* Delhi */}
            <div className="flex min-w-[140px] flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <MapPin size={25} />
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                Delhi
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Drop-off
              </p>
            </div>

          </div>
        </div>

        {/* Route Details */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routeDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={20} />
                </div>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  {item.label}
                </p>

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Travel Time Factors */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <TrafficCone size={20} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                What can affect travel time?
              </h3>
            </div>

            <ul className="mt-5 space-y-3">
              {travelFactors.map((factor) => (
                <li
                  key={factor}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />

                  <span className="text-sm leading-6 text-slate-600">
                    {factor}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Tip */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Travel Tip
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              If you have a flight, train, meeting or other
              time-sensitive appointment, allow additional travel time
              during busy hours. Your exact journey time can vary based
              on traffic and the final destination in Delhi.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}