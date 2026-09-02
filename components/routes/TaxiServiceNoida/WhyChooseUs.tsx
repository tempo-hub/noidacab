import {
  BadgeCheck,
  CarFront,
  Clock3,
  IndianRupee,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified & Professional Drivers",
    description:
      "Travel with experienced and verified drivers who know Noida, Delhi NCR and popular outstation routes.",
  },
  {
    icon: CarFront,
    title: "Clean & Well-Maintained Cars",
    description:
      "Choose from a range of clean, comfortable and regularly maintained cars for every type of journey.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "Get clear and competitive taxi fares with no unnecessary surprises at the time of your journey.",
  },
  {
    icon: Clock3,
    title: "Available 24/7",
    description:
      "Book a taxi in Noida at any time for early-morning airport transfers, late-night trips or urgent travel.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is available to help with bookings, trip details and other travel-related requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Service",
    description:
      "From pickup to drop-off, we focus on providing a smooth, comfortable and dependable travel experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Better Way to Travel Around Noida
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            We make taxi booking simple with reliable cars, experienced
            drivers and transparent service for local and outstation travel.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_-20px_rgba(15,23,42,0.22)] sm:p-6"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-amber-50">
                  <Icon className="h-5 w-5 text-slate-700 transition-colors duration-300 group-hover:text-amber-600" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:mt-10 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">

            <TrustItem
              value="24/7"
              label="Taxi Availability"
            />

            <TrustItem
              value="Local"
              label="Noida Route Experts"
            />

            <TrustItem
              value="100%"
              label="Customer Focused"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center sm:px-5">
      <span className="text-xl font-bold text-slate-900 sm:text-2xl">
        {value}
      </span>

      <span className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
        {label}
      </span>
    </div>
  );
}