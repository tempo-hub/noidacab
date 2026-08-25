import {
  BadgeIndianRupee,
  CarFront,
  ReceiptText,
} from "lucide-react";

const benefits = [
  {
    title: "Easy & Flexible Booking",
    description:
      "Choose your cab, trip type and pickup time with a simple booking process.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Clear Pricing",
    description:
      "Pay 25% now & rest to driver or pay full amount online.",
    icon: CarFront,
  },
  {
    title: "Trusted Cab Service",
    description:
      "Verified drivers, comfortable vehicles and dependable service across Noida.",
    icon: ReceiptText,
  },
];

export default function NoidaDelhiWhyBook() {
  return (
    <section className="bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-10 border-b border-gray-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Why Book with Us
        </h2>

        {/* Benefits */}
        <div className="rounded-lg border border-slate-200 bg-white">
          <div className="grid md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`
                    flex
                    items-center
                    gap-5
                    px-6
                    py-6
                    sm:px-7
                    lg:py-7
                    ${
                      index !== benefits.length - 1
                        ? "border-b border-slate-200 md:border-b-0 md:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffb300] text-amber-700">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-600 sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}