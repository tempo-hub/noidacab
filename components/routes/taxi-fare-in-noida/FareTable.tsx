
import Link from "next/link";

export interface FareTableCab {
  id: string;
  name: string;
  description: string;
  category: string;
  seats: number;
  price: number;
  taxes: number;
}

interface FareTableProps {
  cabs: FareTableCab[];
}

export default function FareTable({ cabs }: FareTableProps) {
  return (
    <section className="bg-white/95 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Taxi Fare
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Taxi Fare
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Compare taxi fares across different vehicle categories and choose
            the cab that best suits your journey.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Vehicle
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Category
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Seats
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Starting Fare
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Taxes
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {cabs.map((cab) => (
                  <tr
                    key={cab.id}
                    className="transition hover:bg-amber-50/50"
                  >
                    <td className="px-6 py-5">
                      <p className="font-bold text-gray-900">
                        {cab.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {cab.description}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {cab.category}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {cab.seats} Seats
                    </td>

                    <td className="px-6 py-5">
                      <span className="font-bold text-gray-900">
                        ₹{cab.price.toLocaleString("en-IN")}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-600">
                      ₹{cab.taxes}
                    </td>

                    <td className="px-6 py-5">
                      <Link
                        href="https://wa.me/+918377809809"
                        className="inline-flex rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
                      >
                        Book Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Note */}
        <p className="mt-5 text-center text-sm text-gray-500">
          * Fares may vary depending on vehicle selection, travel date,
          route, additional distance, waiting time and applicable charges.
        </p>

      </div>
    </section>
  );
}
