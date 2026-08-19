import {
  CheckCircle2,
  Car,
  CreditCard,
  MapPin,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

type Props = {
  route: {
    fromName: string;
    toName: string;
  };
  vehicle: {
    name: string;
  };
};

export function WhatsIncluded({
  route,
  vehicle,
}: Props) {
  const included = [
    {
      icon: Car,
      title: vehicle.name,
      description: "The vehicle selected for your journey.",
    },
    {
      icon: UserCheck,
      title: "Professional Driver",
      description:
        "Experienced driver focused on a smooth and comfortable journey.",
    },
    {
      icon: MapPin,
      title: "Pickup & Drop",
      description: `Pickup from ${route.fromName} and drop at ${route.toName}.`,
    },
    {
      icon: ShieldCheck,
      title: "Comfortable Journey",
      description:
        "Clean and well-maintained vehicle for a comfortable trip.",
    },
    {
      icon: CreditCard,
      title: "Transparent Fare",
      description:
        "View your estimated fare before confirming the booking.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <CheckCircle2 className="h-4 w-4" />
            WHAT&apos;S INCLUDED
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            What&apos;s Included With Your Booking?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Book a {vehicle.name} from{" "}
            <span className="font-semibold text-slate-950">
              {route.fromName}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-slate-950">
              {route.toName}
            </span>{" "}
            with the essentials you need for a comfortable journey.
          </p>
        </div>

        {/* Included Grid */}
        <div className="mx-auto mt-10 max-w-6xl">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {included.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    relative
                    overflow-hidden
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
                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-amber-100">
                      <Icon className="h-5 w-5 text-slate-700 transition-colors group-hover:text-amber-600" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-950 sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Included indicator */}
                  <div className="mt-5 flex items-center gap-1.5 border-t border-slate-100 pt-4">
                    <CheckCircle2 className="h-4 w-4 text-amber-500" />

                    <span className="text-xs font-semibold text-slate-500">
                      Included in your booking
                    </span>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Booking Summary */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-amber-200 bg-amber-50">

            <div className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:justify-between">

              {/* Route */}
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                  Your Journey
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-sm font-bold text-slate-950 sm:text-base">
                    {vehicle.name}
                  </span>

                  <span className="text-slate-400">·</span>

                  <span className="text-sm font-medium text-slate-700">
                    {route.fromName}
                  </span>

                  <span className="text-amber-500">→</span>

                  <span className="text-sm font-medium text-slate-700">
                    {route.toName}
                  </span>
                </div>
              </div>

              {/* Included */}
              <div className="flex shrink-0 items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400">
                  <CheckCircle2
                    className="h-4 w-4 text-slate-950"
                    strokeWidth={2.5}
                  />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-950">
                    Everything included
                  </p>

                  <p className="text-[11px] text-slate-600">
                    Ready for your journey
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