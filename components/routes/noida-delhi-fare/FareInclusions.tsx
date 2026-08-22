import {
  CarFront,
  UserRound,
  Fuel,
  ReceiptText,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const fareDetails = [
  {
    title: "Vehicle",
    description:
      "Your selected cab is provided for the Noida to Delhi journey.",
    icon: CarFront,
  },
  {
    title: "Professional Driver",
    description:
      "Travel with a professional driver assigned to your booking.",
    icon: UserRound,
  },
  {
    title: "Fuel",
    description:
      "Fuel charges are considered according to the applicable fare for the selected vehicle and trip.",
    icon: Fuel,
  },
  {
    title: "Applicable Taxes",
    description:
      "Applicable taxes and charges are shown with the fare wherever required.",
    icon: ReceiptText,
  },
  {
    title: "Safe & Reliable Travel",
    description:
      "Choose from multiple vehicle options according to your travel requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Additional Time",
    description:
      "Additional waiting or usage charges may apply according to the selected fare terms.",
    icon: Clock3,
  },
];

export default function FareInclusions() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Fare Details
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Is Included in Your Noida to Delhi Taxi Fare?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Understand the main components of your taxi fare before booking
            your journey from Noida to Delhi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fareDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-[#FFFDF5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>
                </div>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p className="text-sm leading-6 text-gray-700">
            <strong>Fare note:</strong> The final amount can vary based on the
            selected vehicle, journey type, additional distance, waiting time,
            taxes, and other applicable charges. Check the fare shown during
            booking for the applicable amount.
          </p>
        </div>
      </div>
    </section>
  );
}