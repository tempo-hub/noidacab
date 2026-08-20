const taxiOptions = [
  {
    vehicle: "Hatchback",
    seating: "4 passengers",
    luggage: "1 to 2 bags",
    suitedFor: "Solo trips, quick city drops",
  },
  {
    vehicle: "Sedan",
    seating: "4 passengers",
    luggage: "2 to 3 bags",
    suitedFor: "Couples, business travel, airport transfers",
  },
  {
    vehicle: "SUV",
    seating: "6 to 7 passengers",
    luggage: "3 to 4 bags",
    suitedFor: "Families, small groups, extra luggage",
  },
  {
    vehicle: "Tempo Traveller",
    seating: "9 to 17 passengers",
    luggage: "Large capacity",
    suitedFor: "Office groups, events, bigger families",
  },
];

export default function NoidaDelhiTaxiOptions() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Taxi Options for Noida to Delhi
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Pick a cab from Noida to Delhi based on how many people are
            travelling and how much luggage you&apos;re carrying. Solo
            commuters and couples usually go for a hatchback or sedan, while
            families and office groups prefer an SUV or tempo traveller.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Vehicle
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Seating Capacity
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Luggage Capacity
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Best Suited For
                  </th>
                </tr>
              </thead>

              <tbody>
                {taxiOptions.map((item) => (
                  <tr
                    key={item.vehicle}
                    className="border-t border-slate-200"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-semibold text-slate-900"
                    >
                      {item.vehicle}
                    </th>

                    <td className="px-5 py-4 text-slate-600">
                      {item.seating}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.luggage}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {item.suitedFor}
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