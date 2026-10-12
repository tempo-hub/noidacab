import {
  BadgeCheck,
  Clock3,
  Headphones,
  MapPin,
  Sparkles,
  Wallet,
} from "lucide-react";

const reasons = [
  {
    title: "Transparent Fares",
    description:
      "Your fare is confirmed before you ride. Clarify any applicable extra charges before booking.",
    icon: Wallet,
  },
  {
    title: "24x7 Availability",
    description:
      "Arrange cabs for early flights, late arrivals and journeys at different hours.",
    icon: Clock3,
  },
  {
    title: "A Wide Fleet",
    description:
      "Choose from hatchbacks, sedans, SUVs, Innova Crysta and Tempo Travellers.",
    icon: Sparkles,
  },
  {
    title: "Local Route Experience",
    description:
      "Travel across Noida sectors, expressways and Delhi-NCR routes with local route knowledge.",
    icon: MapPin,
  },
  {
    title: "Convenient Pickups",
    description:
      "Coordinate your pickup details with the driver before your scheduled journey.",
    icon: Clock3,
  },
  {
    title: "Easy Booking",
    description:
      "Arrange your cab with a simple phone call or WhatsApp message.",
    icon: Headphones,
  },
  {
    title: "Customer-Focused Service",
    description:
      "Get clear booking information and discuss your travel requirements before confirming.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseNoidaCab() {
  return (
    <div className="mt-12 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-12">
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Why People Choose NoidaCab
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
          Convenient booking, vehicle choices and clear fare information
          for local rides, airport transfers and outstation journeys.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="flex items-start gap-3 border-b border-gray-200 pb-5"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 sm:text-base">
                {title}
              </h4>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}