// src/components/routes/noida-delhi/NoidaDelhiRouteInfo.tsx

const routeInformation = [
  {
    detail: "Route",
    information: "Noida to New Delhi Cabs",
  },
  {
    detail: "Time Duration",
    information: "1–4 Hours",
  },
  {
    detail: "Extra km fare",
    information: "₹18/km",
  },
  {
    detail: "Distance",
    information: "Approx. 25–45 Km",
  },
  {
    detail: "Car Types",
    information: "Hatchback, Sedan, SUV, Tempo Traveller",
  },
  {
    detail: "Fuel Types",
    information: "Electric, Diesel, Petrol, CNG",
  },
  {
    detail: "Models",
    information:
      "Dzire, Etios, Xcent, Xylo, Ertiga, Innova",
  },
];

export default function NoidaDelhiRouteInfo() {
  return (
    <section className="bg-slate-50 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Information about Noida to New Delhi Route
        </h2>

        {/* Table */}
        <div className="overflow-x-auto border border-slate-300 bg-white">
          <table className="w-full min-w-[650px] border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b border-slate-300">
                <th
                  scope="col"
                  className="w-1/2 px-5 py-3 text-center font-semibold text-slate-600"
                >
                  Journey Details
                </th>

                <th
                  scope="col"
                  className="w-1/2 px-5 py-3 text-center font-semibold text-slate-600"
                >
                  Information
                </th>
              </tr>
            </thead>

            <tbody>
              {routeInformation.map((item) => (
                <tr
                  key={item.detail}
                  className="border-b border-slate-300 last:border-b-0"
                >
                  <th
                    scope="row"
                    className="px-5 py-3 text-center font-normal text-slate-600"
                  >
                    {item.detail}
                  </th>

                  <td className="px-5 py-3 text-center text-slate-600">
                    {item.information}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}