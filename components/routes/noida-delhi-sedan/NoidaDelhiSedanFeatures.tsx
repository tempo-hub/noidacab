import {
  BriefcaseBusiness,
  CarFront,
  CheckCircle2,
  Fuel,
  Luggage,
  Snowflake,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Passenger Capacity",
    value: "Up to 4 passengers",
    description:
      "Sedans are suitable for individuals, couples and small families travelling together.",
  },
  {
    icon: Luggage,
    title: "Luggage Space",
    value: "Approx. 2 bags",
    description:
      "Suitable for normal luggage for a small family or group.",
  },
  {
    icon: Snowflake,
    title: "Air Conditioning",
    value: "AC Sedan",
    description:
      "Travel comfortably with air conditioning throughout your Noida to Delhi journey.",
  },
  {
    icon: Fuel,
    title: "Fuel Options",
    value: "Petrol / Diesel / CNG",
    description:
      "Fuel type depends on the selected sedan model and vehicle availability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Travel",
    value: "Suitable",
    description:
      "A sedan is a practical option for office visits, meetings and business travel.",
  },
  {
    icon: CarFront,
    title: "Private Travel",
    value: "Dedicated Cab",
    description:
      "Travel directly between your pickup and destination without sharing the vehicle.",
  },
];

const sedanModels = [
  {
    model: "Maruti Dzire",
    seats: "4",
    luggage: "2 bags",
    fuel: "Petrol / CNG",
  },
  {
    model: "Toyota Etios",
    seats: "4",
    luggage: "2 bags",
    fuel: "Diesel / Petrol",
  },
  {
    model: "Honda Amaze",
    seats: "4",
    luggage: "2 bags",
    fuel: "Petrol",
  },
];

export default function NoidaDelhiSedanFeatures() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Noida to Delhi Sedan Features & Capacity
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Sedan taxis are a convenient choice for small groups looking
            for a comfortable private journey from Noida to Delhi.
            Check the important features before selecting your vehicle.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-amber-300 hover:bg-amber-50/40"
              >
                
                <div className="flex items-center justify-between">
                <p className="mt-4 text-sm font-medium text-slate-500">
                  {feature.title}
                </p>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
                </div>
                

                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {feature.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Model Comparison */}
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
            <h3 className="text-lg font-bold text-slate-900">
              Popular Sedan Models
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Compare the basic specifications of popular sedan options.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Sedan
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Seats
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Luggage
                  </th>

                  <th className="px-5 py-4 font-semibold text-slate-700">
                    Fuel
                  </th>
                </tr>
              </thead>

              <tbody>
                {sedanModels.map((sedan) => (
                  <tr
                    key={sedan.model}
                    className="border-t border-slate-200"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-semibold text-slate-900"
                    >
                      {sedan.model}
                    </th>

                    <td className="px-5 py-4 text-slate-600">
                      {sedan.seats}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {sedan.luggage}
                    </td>

                    <td className="px-5 py-4 text-slate-600">
                      {sedan.fuel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <CheckCircle2
            size={20}
            className="mt-0.5 shrink-0 text-amber-600"
          />

          <p className="text-sm leading-6 text-slate-600">
            Vehicle models, fuel type and availability may vary
            depending on the booking date and current fleet availability.
            The available vehicle will be shown before you confirm your
            booking.
          </p>
        </div>

      </div>
    </section>
  );
}