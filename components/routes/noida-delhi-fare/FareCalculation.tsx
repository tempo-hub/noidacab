import {
  CarFront,
  Route,
  Clock3,
  ReceiptText,
  Users,
  Repeat2,
} from "lucide-react";

const fareFactors = [
  {
    title: "Vehicle Type",
    description:
      "The selected vehicle category affects the starting fare. Choose from hatchbacks, sedans, SUVs and larger vehicles.",
    icon: CarFront,
  },
  {
    title: "Distance",
    description:
      "The total journey distance between your pickup point in Noida and destination in Delhi can affect the applicable fare.",
    icon: Route,
  },
  {
    title: "Travel Time",
    description:
      "Additional usage or waiting time may attract charges according to the selected vehicle and fare terms.",
    icon: Clock3,
  },
  {
    title: "Applicable Taxes",
    description:
      "Applicable taxes and other charges are included or displayed according to the fare applicable to your booking.",
    icon: ReceiptText,
  },
  {
    title: "Passenger Requirement",
    description:
      "Your group size can determine which vehicle is suitable for your journey and therefore which fare applies.",
    icon: Users,
  },
  {
    title: "Trip Type",
    description:
      "One-way and round-trip journeys can have different pricing structures based on the selected booking.",
    icon: Repeat2,
  },
];

export default function FareCalculation() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Fare Calculation
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            How Is Noida to Delhi Taxi Fare Calculated?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Your Noida to Delhi taxi fare can depend on several factors,
            including the vehicle you select, journey distance, trip type and
            applicable charges.
          </p>
        </div>

        {/* Factors */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fareFactors.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-[#FFFDF5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Content */}
        <div className="mt-10 rounded-3xl bg-gray-950 p-8 text-white sm:p-10">
          <h3 className="text-2xl font-bold">
            Get a Clear Fare Before You Book
          </h3>

          <p className="mt-4 max-w-4xl leading-8 text-gray-300">
            NoidaCab aims to keep the booking process simple and transparent.
            Select your pickup location, destination, travel date, time and
            preferred vehicle to see the applicable fare before confirming your
            ride.
          </p>
        </div>
      </div>
    </section>
  );
}