const comparison = [
  {
    vehicle: "Hatchback",
    passengers: "1–4",
    luggage: "1–2 bags",
    bestFor: "Solo trips and quick city travel",
  },
  {
    vehicle: "Sedan",
    passengers: "1–4",
    luggage: "2–3 bags",
    bestFor: "Business and airport transfers",
  },
  {
    vehicle: "SUV",
    passengers: "6–7",
    luggage: "3–4 bags",
    bestFor: "Families and small groups",
  },
  {
    vehicle: "Innova Crysta",
    passengers: "6–7",
    luggage: "3–4 bags",
    bestFor: "Premium family and corporate travel",
  },
  {
    vehicle: "Tempo Traveller",
    passengers: "9–24",
    luggage: "Large capacity",
    bestFor: "Groups, events and tours",
  },
];

export default function TaxiComparison() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Compare Taxi Types
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Compare seating, luggage capacity and ideal use before choosing
            your taxi.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Vehicle
                  </th>
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Passengers
                  </th>
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Luggage
                  </th>
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Best For
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((item) => (
                  <tr
                    key={item.vehicle}
                    className="border-t border-slate-200"
                  >
                    <th className="px-5 py-4 text-left font-semibold text-slate-900">
                      {item.vehicle}
                    </th>

                    <td className="px-5 py-4 text-slate-600">
                      {item.passengers}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.luggage}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}