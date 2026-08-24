import {
  BadgeCheck,
  CarFront,
  CircleDollarSign,
  Headphones,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface WhyChooseNoidaCabProps {
  from: string;
  to: string;
}

export default function WhyChooseNoidaCab({
  from,
  to,
}: WhyChooseNoidaCabProps) {
  const benefits = [
    {
      icon: CarFront,
      title: "Multiple Cab Options",
      description:
        "Choose from comfortable sedans, spacious SUVs and other vehicles based on your travel needs.",
    },
    {
      icon: BadgeCheck,
      title: "Verified Drivers",
      description:
        "Travel with professional drivers focused on a safe, comfortable and reliable journey.",
    },
    {
      icon: CircleDollarSign,
      title: "Transparent Pricing",
      description:
        "View vehicle rates clearly before booking and choose the cab that fits your budget.",
    },
    {
      icon: ShieldCheck,
      title: "Comfortable Travel",
      description:
        "Enjoy clean, air-conditioned cabs designed for convenient city and intercity travel.",
    },
    {
      icon: Headphones,
      title: "Booking Support",
      description:
        "Get assistance with your cab booking and travel requirements when you need it.",
    },
    {
      icon: Sparkles,
      title: "Door-to-Door Service",
      description:
        `Enjoy convenient pickup from ${from} and drop-off at your destination in ${to}.`,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-orange-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Why NoidaCab
            </span>

            <span className="h-px w-10 bg-orange-500" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Travel from {from} to {to}{" "}
            <span className="text-orange-500">
              with Confidence
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            From vehicle selection to your final destination, NoidaCab
            makes your journey simple, comfortable and convenient.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-zinc-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-8 rounded-3xl border border-orange-100 bg-orange-50/70 p-6 sm:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                Your Journey, Our Priority
              </p>

              <h3 className="mt-1 text-xl font-bold text-zinc-950">
                A better way to travel from {from} to {to}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
                Comfortable Cabs
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
                Professional Service
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
                Easy Booking
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}