import {
  Clock3,
  IndianRupee,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const benefits = [
  {
    title: "Transparent Fare",
    description: "Know your one-way fare before booking.",
    icon: IndianRupee,
  },
  {
    title: "Professional Drivers",
    description: "Experienced drivers for comfortable journeys.",
    icon: UserRoundCheck,
  },
  {
    title: "On-Time Pickup",
    description: "Reliable pickup for your scheduled trip.",
    icon: Clock3,
  },
  {
    title: "Safe Journey",
    description: "Comfortable and dependable cab service.",
    icon: ShieldCheck,
  },
];

export function OneWayWhyChoose() {
  return (
    <section className="bg-white/95 py-14 sm:py-16 border-b border-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Why NoidaCab
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Reliable One Way Cab Service
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
                  <Icon className="h-6 w-6 text-amber-600" />
                </div>

                <h3 className="mt-4 font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}