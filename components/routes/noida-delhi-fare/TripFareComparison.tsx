import {
  ArrowRight,
  Check,
  RefreshCcw,
} from "lucide-react";

const fareOptions = [
  {
    type: "One Way Taxi",
    icon: ArrowRight,
    description:
      "Best for passengers who only need a one-way cab from Noida to Delhi.",
    features: [
      "One-way journey",
      "Professional driver",
      "AC cab",
      "Door-to-door pickup",
      "Transparent fare",
    ],
    highlight: false,
  },
  {
    type: "Round Trip Taxi",
    icon: RefreshCcw,
    description:
      "A convenient option when you need to travel from Noida to Delhi and return.",
    features: [
      "Pickup and return journey",
      "Professional driver",
      "AC cab",
      "Flexible travel",
      "Better value for return trips",
    ],
    highlight: true,
  },
];

export default function TripFareComparison() {
  return (
    <section className="bg-white/95 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Choose Your Trip
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Noida to Delhi One-Way & Round-Trip Taxi Fare
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Choose a one-way or round-trip taxi based on your travel
            requirements. Our cab options are designed for comfortable and
            convenient journeys between Noida and Delhi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {fareOptions.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.type}
                className={`relative rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${option.highlight
                    ? "border-amber-400"
                    : "border-gray-200"
                  }`}
              >
                {/* Recommended */}
                {option.highlight && (
                  <span className="absolute left-6 top-6 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-700">
                    Popular Choice
                  </span>
                )}

                {/* Icon */}
                <div className="flex items-center justify-between">
                  

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {option.type}
                  </h3>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Icon size={27} />
                  </div>
                </div>


                <p className="mt-3 leading-7 text-gray-600">
                  {option.description}
                </p>

                {/* Features */}
                <div className="mt-7 space-y-4">
                  {option.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Check size={13} />
                      </div>

                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {/* <a
                  href="/"
                  className="mt-8 block rounded-xl bg-amber-500 py-3.5 text-center font-bold text-white transition hover:bg-amber-600"
                >
                  Check Fare & Book
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}