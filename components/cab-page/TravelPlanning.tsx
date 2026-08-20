import {
  CalendarDays,
  CloudSun,
  Clock3,
  IndianRupee,
  Snowflake,
  Sun,
  Thermometer,
  Umbrella,
} from "lucide-react";

type Props = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: {
    name: string;
  };
};

export function TravelPlanning({
  location,
  vehicle,
}: Props) {
  const seasons = [
    {
      icon: Snowflake,
      title: "Winter",
      months: "October – February",
      temperature: "10–25°C",
      crowd: "Popular Season",
      pricing: "Moderate Pricing",
      description:
        "Pleasant weather makes this a comfortable time for local and outstation cab travel.",
      iconClass: "bg-blue-50 text-blue-600",
      tagClass: "bg-amber-50 text-amber-700",
    },
    {
      icon: Sun,
      title: "Summer",
      months: "March – June",
      temperature: "25–42°C",
      crowd: "Lower Crowd",
      pricing: "Budget Friendly",
      description:
        "Hot afternoons are common, so early morning or evening travel can be more comfortable.",
      iconClass: "bg-amber-50 text-amber-600",
      tagClass: "bg-green-50 text-green-700",
    },
    {
      icon: Umbrella,
      title: "Monsoon",
      months: "July – September",
      temperature: "25–35°C",
      crowd: "Lower Crowd",
      pricing: "Budget Friendly",
      description:
        "Rain can affect road conditions, so allow some extra travel time during heavy showers.",
      iconClass: "bg-cyan-50 text-cyan-600",
      tagClass: "bg-green-50 text-green-700",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <CalendarDays className="h-4 w-4" />
            TRAVEL PLANNING
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Best Time to Travel in{" "}
            <span className="text-amber-500">
              {location.name}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Plan your {vehicle.name} journey around the weather,
            traffic and travel season for a more comfortable trip
            from {location.name}.
          </p>

        </div>

        {/* Quick Planning Info */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">

          {/* Best Season */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
              <Sun className="h-5 w-5 text-amber-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Best Season
              </p>

              <p className="text-sm font-bold text-slate-950">
                October – March
              </p>
            </div>

          </div>

          {/* Travel Conditions */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <CloudSun className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Travel Conditions
              </p>

              <p className="text-sm font-bold text-slate-950">
                Generally Comfortable
              </p>
            </div>

          </div>

          {/* Duration */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <Clock3 className="h-5 w-5 text-slate-700" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Trip Planning
              </p>

              <p className="text-sm font-bold text-slate-950">
                Plan Extra Time
              </p>
            </div>

          </div>

        </div>

        {/* Seasonal Cards */}
        <div className="mx-auto mt-6 grid max-w-6xl gap-4 md:grid-cols-3">

          {seasons.map((season) => {
            const Icon = season.icon;

            return (
              <div
                key={season.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-300
                  hover:shadow-lg
                  sm:p-6
                "
              >

                {/* Title */}
                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${season.iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>

                      <h3 className="text-base font-bold text-slate-950">
                        {season.title}
                      </h3>

                      <p className="text-[11px] text-slate-500">
                        {season.months}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Temperature */}
                <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-3">

                  <div className="flex items-center gap-2">

                    <Thermometer className="h-4 w-4 text-rose-500" />

                    <span className="text-xs text-slate-600">
                      Temperature
                    </span>

                  </div>

                  <span className="text-xs font-bold text-slate-950">
                    {season.temperature}
                  </span>

                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${season.tagClass}`}
                  >
                    {season.crowd}
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${season.tagClass}`}
                  >
                    {season.pricing}
                  </span>

                </div>

                {/* Description */}
                <p className="mt-4 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                  {season.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Planning Note */}
        <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:px-6">

          <div className="flex items-start gap-3 sm:items-center">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400">

              <IndianRupee className="h-4 w-4 text-slate-950" />

            </div>

            <div>

              <p className="text-sm font-bold text-slate-950">
                Travel planning tip
              </p>

              <p className="mt-0.5 text-xs leading-5 text-slate-600 sm:text-sm">
                For a smoother journey from {location.name},
                consider booking your {vehicle.name} in advance
                during weekends, holidays and peak travel periods.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}