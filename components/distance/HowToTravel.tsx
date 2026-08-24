import {
  CarFront,
  CheckCircle2,
  MapPin,
  Navigation,
} from "lucide-react";

interface HowToTravelProps {
  route: {
    from: {
      name: string;
    };
    to: {
      name: string;
    };
  };
}

export default function HowToTravel({
  route,
}: HowToTravelProps) {
  const steps = [
    {
      number: "01",
      icon: MapPin,
      title: `Choose your pickup location`,
      description: `Select your preferred pickup point in ${route.from.name}.`,
    },
    {
      number: "02",
      icon: CarFront,
      title: "Select your cab",
      description:
        "Choose a comfortable vehicle that suits your travel requirements.",
    },
    {
      number: "03",
      icon: Navigation,
      title: "Start your journey",
      description: `Your cab will pick you up from ${route.from.name} and begin the journey.`,
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: `Reach ${route.to.name}`,
      description: `Enjoy a convenient door-to-door journey and reach your destination comfortably.`,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Travel Guide
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              How to Travel from{" "}
              <span className="text-orange-500">
                {route.from.name} to {route.to.name}
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-zinc-600 lg:justify-self-end">
            Booking a private cab is a convenient way to travel between{" "}
            <span className="font-medium text-zinc-900">
              {route.from.name}
            </span>{" "}
            and{" "}
            <span className="font-medium text-zinc-900">
              {route.to.name}
            </span>
            . Follow these simple steps to plan your journey.
          </p>

        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-bold tracking-wider text-zinc-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-zinc-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-14" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h3 className="font-bold text-zinc-950">
              Ready to travel from {route.from.name} to{" "}
              {route.to.name}?
            </h3>

            <p className="mt-1 text-sm text-zinc-600">
              Choose your preferred cab and plan your journey with ease.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
            <CheckCircle2 className="h-4 w-4" />
            Simple & convenient booking
          </div>
        </div>

      </div>
    </section>
  );
}