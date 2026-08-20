const routeOptions = [
  {
    route: "Noida Sector 18 to South Delhi",
    via: "DND Flyway",
    distance: "25 to 30 km",
    time: "45 min to 1 hour",
  },
  {
    route: "Noida Sector 62 to Central Delhi",
    via: "Noida-Greater Noida Expressway then DND",
    distance: "30 to 35 km",
    time: "1 hour to 1 hour 15 min",
  },
  {
    route: "Noida to Old Delhi",
    via: "Outer Ring Road",
    distance: "40 to 47 km",
    time: "1 hour to 1 hour 20 min",
  },
  {
    route: "Noida to East Delhi",
    via: "Mayur Vihar link road",
    distance: "20 to 25 km",
    time: "35 to 50 min",
  },
];

export default function NoidaDelhiRouteInfo() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Route Information: Noida to Delhi
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Your driver picks the fastest path based on your pickup sector and
            drop point inside Delhi, current traffic, and time of day.
          </p>
        </div>

        {/* Route Table */}
        <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Route
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Via
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Approx Distance
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Approx Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {routeOptions.map((item) => (
                  <tr
                    key={item.route}
                    className="border-t border-slate-200"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-semibold text-slate-900"
                    >
                      {item.route}
                    </th>

                    <td className="px-5 py-4 text-slate-600">
                      {item.via}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.distance}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Landmarks */}
        <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
          <p className="text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold text-slate-900">
              Landmarks along the way:
            </span>{" "}
            Okhla Bird Sanctuary, Akshardham Temple, and Yamuna Biodiversity
            Park on the Outer Ring Road path, and Lotus Temple near the DND
            route into South Delhi.
          </p>
        </div>
      </div>
    </section>
  );
}