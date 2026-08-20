import {
  Clock3,
  MapPin,
  Route,
  TrafficCone,
} from "lucide-react";

const routeDetails = [
  {
    route: "Central Noida to Central Delhi",
    distance: "18–20 km",
    time: "25–35 minutes",
  },
  {
    route: "Central Noida to Central Delhi",
    distance: "18–20 km",
    time: "45–75 minutes",
  },
  {
    route: "Greater Noida to Delhi",
    distance: "Approx. 42 km",
    time: "70–90 minutes",
  },
];

const travelFactors = [
  "Exact pickup location in Noida",
  "Final destination within Delhi",
  "Traffic during peak hours",
  "Road and weather conditions",
  "Route selected based on current traffic",
];

export default function NoidaDelhiSedanRoute() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-amber-600">
            Route Information
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Noida to Delhi Route, Distance & Travel Time
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            The direct route from Noida to Delhi commonly passes through the
            DND Flyway, a toll-free crossing over the Yamuna that connects
            Noida with southeast Delhi. From there, the journey can continue
            towards central Delhi locations such as Connaught Place,
            Lajpat Nagar and India Gate.
          </p>
        </div>

        {/* Route Path */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Route className="h-5 w-5 text-amber-600" />

            <h3 className="font-bold text-slate-900">
              Common Route
            </h3>
          </div>

          {/* Desktop Route */}
          <div className="hidden items-center justify-between lg:flex">

            <RoutePoint
              title="Noida Sectors"
              subtitle="Pickup"
              first
            />

            <RouteLine label="DND Flyway" />

            <RoutePoint
              title="DND Flyway"
              subtitle="Yamuna Crossing"
            />

            <RouteLine label="Maharani Bagh" />

            <RoutePoint
              title="Maharani Bagh"
              subtitle="Southeast Delhi"
            />

            <RouteLine label="Ring Road" />

            <RoutePoint
              title="Ring Road"
              subtitle="Delhi"
            />

            <RouteLine label="Central Delhi" />

            <RoutePoint
              title="Central Delhi"
              subtitle="Drop-off"
              last
            />

          </div>

          {/* Mobile Route */}
          <div className="space-y-4 lg:hidden">

            <MobileRoutePoint
              title="Noida Sectors"
              subtitle="Pickup"
            />

            <MobileRouteLine label="DND Flyway" />

            <MobileRoutePoint
              title="DND Flyway"
              subtitle="Yamuna Crossing"
            />

            <MobileRouteLine label="Maharani Bagh" />

            <MobileRoutePoint
              title="Maharani Bagh"
              subtitle="Southeast Delhi"
            />

            <MobileRouteLine label="Ring Road" />

            <MobileRoutePoint
              title="Ring Road"
              subtitle="Delhi"
            />

            <MobileRouteLine label="Central Delhi" />

            <MobileRoutePoint
              title="Central Delhi"
              subtitle="Drop-off"
            />

          </div>

          {/* Route Text */}
          <div className="mt-7 rounded-xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm leading-6 text-slate-700">
              <span className="font-semibold text-slate-900">
                Route Map:
              </span>{" "}
              Noida Sectors → DND Flyway → Maharani Bagh → Ring Road →
              Central Delhi
            </p>
          </div>
        </div>

        {/* Route Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Route
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Distance
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Approx. Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {routeDetails.map((item, index) => (
                  <tr
                    key={`${item.route}-${index}`}
                    className="border-t border-slate-200"
                  >
                    <th
                      scope="row"
                      className="px-5 py-5 text-left font-semibold text-slate-900"
                    >
                      {item.route}

                      {index === 1 && (
                        <span className="ml-2 rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-700">
                          PEAK HOURS
                        </span>
                      )}
                    </th>

                    <td className="px-5 py-5 text-slate-600">
                      {item.distance}
                    </td>

                    <td className="px-5 py-5 font-semibold text-slate-900">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Route Summary Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <RouteSummary
            icon={<MapPin size={20} />}
            label="Central Noida → Central Delhi"
            value="18–20 km"
            description="Via DND Flyway"
          />

          <RouteSummary
            icon={<Clock3 size={20} />}
            label="Normal Traffic"
            value="25–35 min"
            description="Typical travel time"
          />

          <RouteSummary
            icon={<TrafficCone size={20} />}
            label="Peak Hours"
            value="45–75 min"
            description="Allow additional travel time"
          />

        </div>

        {/* Travel Time Factors */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <TrafficCone size={20} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                What Can Affect Travel Time?
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
              Travel Tip for Noida to Delhi
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              If you have a flight, train, meeting or another
              time-sensitive appointment, allow extra travel time during
              peak hours. The journey can take around 25–35 minutes in
              lighter traffic but may increase to 45–75 minutes during
              busy periods.
            </p>

            <div className="mt-5 flex items-start gap-3 rounded-lg border border-amber-200 bg-white/60 p-4">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

              <p className="text-sm leading-6 text-slate-700">
                <span className="font-semibold text-slate-900">
                  Greater Noida:
                </span>{" "}
                Travel from Greater Noida to Delhi is approximately 42 km
                and can take around 70–90 minutes depending on traffic.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* -------------------------------------------------
   Desktop Route Components
------------------------------------------------- */

function RoutePoint({
  title,
  subtitle,
  first,
  last,
}: {
  title: string;
  subtitle: string;
  first?: boolean;
  last?: boolean;
}) {
  return (
    <div className="flex min-w-[110px] flex-col items-center text-center">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${
          first || last
            ? "bg-amber-500 text-white"
            : "bg-amber-100 text-amber-700"
        }`}
      >
        <MapPin size={21} />
      </div>

      <p className="mt-3 text-sm font-bold text-slate-900">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

function RouteLine({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex flex-1 items-center px-2">
      <div className="relative w-full">
        <div className="border-t border-dashed border-slate-300" />

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-500">
          {label}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------
   Mobile Route Components
------------------------------------------------- */

function MobileRoutePoint({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        <MapPin size={20} />
      </div>

      <div>
        <p className="text-sm font-bold text-slate-900">
          {title}
        </p>

        <p className="text-xs text-slate-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function MobileRouteLine({
  label,
}: {
  label: string;
}) {
  return (
    <div className="ml-5 flex items-center gap-3">
      <div className="h-7 border-l border-dashed border-slate-300" />

      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-medium text-slate-500">
        {label}
      </span>
    </div>
  );
}

/* -------------------------------------------------
   Summary Card
------------------------------------------------- */

function RouteSummary({
  icon,
  label,
  value,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
        {icon}
      </div>

      <p className="mt-4 text-sm font-medium text-slate-500">
        {label}
      </p>

      <h3 className="mt-1 text-xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}