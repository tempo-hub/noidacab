import {
  ArrowRight,
  Check,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";

interface FareOption {
  type: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  highlight?: boolean;
}

const fareOptions: FareOption[] = [
  {
    type: "One Way Taxi",
    icon: ArrowRight,
    description:
      "A convenient option for passengers who only need a cab for a one-way journey.",
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
      "A convenient option when you need a taxi for both your onward and return journey.",
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

interface TripFareComparisonProps {
  options?: FareOption[];
  title?: string;
  description?: string;
}

export default function TripFareComparison({
  options = fareOptions,
  title = "One-Way & Round-Trip Taxi Fare",
  description = "Choose a one-way or round-trip taxi based on your travel requirements. Our cab options are designed for comfortable, convenient and reliable journeys.",
}: TripFareComparisonProps) {
  return (
    <section className="bg-white/95 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Choose Your Trip
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.type}
                className={`relative rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  option.highlight
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

                {/* Icon + Title */}
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl font-bold text-gray-900 ${
                      option.highlight ? "mt-10" : "mt-0"
                    }`}
                  >
                    {option.type}
                  </h3>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <Icon size={27} />
                  </div>
                </div>

                {/* Description */}
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
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <Check size={13} />
                      </div>

                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

