import {
  CalendarCheck,
  CheckCircle2,
  Car,
  ClipboardCheck,
} from "lucide-react";

type Props = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: {
    name: string;
  };
};

export function BookingProcess({
  location,
  vehicle,
}: Props) {
  const steps = [
    {
      number: "01",
      icon: Car,
      title: "Choose Your Cab",
      description: `Select the ${vehicle.name} that fits your travel needs.`,
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Enter Travel Details",
      description: `Add your pickup location in ${location.name} and your destination.`,
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Confirm Booking",
      description:
        "Select your travel date and confirm your booking details.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Start Your Journey",
      description:
        "Meet your driver at the pickup point and enjoy a comfortable journey.",
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <CalendarCheck className="h-4 w-4" />
            HOW IT WORKS
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            How to Book a {vehicle.name} Cab
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Booking your cab from{" "}
            <span className="font-semibold text-slate-950">
              {location.name}
            </span>{" "}
            takes just a few simple steps.
          </p>

        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 max-w-6xl">

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {/* Desktop connecting line */}
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-slate-200 lg:block" />

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    group
                    relative
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-300
                    hover:shadow-lg
                    sm:p-6
                  "
                >

                  {/* Step icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-amber-400 shadow-md">

                    <Icon
                      className="h-5 w-5 text-slate-950"
                      strokeWidth={2}
                    />

                  </div>

                  {/* Step label */}
                  <div className="mt-5">

                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
                      Step {step.number}
                    </span>

                    <h3 className="mt-1.5 text-base font-bold text-slate-950 sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Booking Summary */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50">

            <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Booking */}
              <div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                  Your Booking
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">

                  <span className="text-sm font-bold text-slate-950 sm:text-base">
                    {vehicle.name}
                  </span>

                  <span className="text-slate-400">
                    ·
                  </span>

                  <span className="text-sm font-bold text-slate-950 sm:text-base">
                    {location.name}
                  </span>

                </div>

                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Simple and convenient local cab booking
                </p>

              </div>

              {/* Ready indicator */}
              <div className="flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400">

                  <CheckCircle2
                    className="h-4 w-4 text-slate-950"
                    strokeWidth={2.5}
                  />

                </div>

                <div>

                  <p className="text-xs font-bold text-slate-950">
                    Ready to book
                  </p>

                  <p className="text-[10px] text-slate-500">
                    Just a few simple steps
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}