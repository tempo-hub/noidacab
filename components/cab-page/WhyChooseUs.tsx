import {
  BadgeCheck,
  Car,
  Clock3,
  IndianRupee,
  ShieldCheck,
  UserCheck,
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

export function WhyChooseUs({
  location,
  vehicle,
}: Props) {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Safe & Reliable Journey",
      description: `Travel confidently from ${location.name} with a professional driver and a well-maintained ${vehicle.name}.`,
      points: [
        "Professional drivers",
        "Well-maintained vehicles",
        "Comfortable journey",
        "Reliable service",
      ],
      featured: true,
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description:
        "Know your estimated fare before booking with simple and transparent pricing.",
      points: [
        "Clear fare estimate",
        "No complicated pricing",
      ],
      featured: false,
    },
    {
      icon: Car,
      title: "Comfortable Fleet",
      description: `Enjoy a clean and comfortable ${vehicle.name} for your local travel.`,
      points: [
        "Clean vehicles",
        "Regular maintenance",
      ],
      featured: false,
    },
    {
      icon: Clock3,
      title: "Convenient Pickup",
      description: `Choose a convenient pickup time and location in ${location.name} according to your travel plans.`,
      points: [
        "Flexible pickup",
        "Easy scheduling",
      ],
      featured: false,
    },
    {
      icon: UserCheck,
      title: "Professional Drivers",
      description:
        "Experienced drivers focused on providing a smooth and comfortable journey.",
      points: [
        "Experienced drivers",
        "Customer focused",
      ],
      featured: false,
    },
    {
      icon: BadgeCheck,
      title: "Easy Booking",
      description:
        "Book your cab with a simple process and get ready for your journey.",
      points: [
        "Simple booking",
        "Quick confirmation",
      ],
      featured: false,
    },
  ];

  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <ShieldCheck className="h-4 w-4" />
            WHY CHOOSE NOIDACAB
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Why Choose Our Taxi Service?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Enjoy a comfortable{" "}
            <span className="font-semibold text-slate-950">
              {vehicle.name}
            </span>{" "}
            cab service in{" "}
            <span className="font-semibold text-slate-950">
              {location.name}
            </span>{" "}
            with reliable drivers, comfortable vehicles and transparent
            pricing.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="mx-auto mt-10 max-w-6xl">

          <div className="grid gap-4 lg:grid-cols-3">

            {/* Featured Card */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-amber-400
                p-6
                sm:p-7
                lg:col-span-2
                lg:min-h-[270px]
              "
            >

              {/* Decorative shapes */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-300/50" />

              <div className="absolute -bottom-20 right-20 h-36 w-36 rounded-full bg-amber-500/30" />

              <div className="relative z-10 flex h-full flex-col">

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/25">

                  <ShieldCheck
                    className="h-6 w-6 text-slate-950"
                    strokeWidth={2}
                  />

                </div>

                <div className="mt-6 max-w-xl">

                  <h3 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                    {benefits[0].title}
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-800">
                    {benefits[0].description}
                  </p>

                </div>

                {/* Points */}
                <div className="mt-auto flex flex-wrap gap-2 pt-6">

                  {benefits[0].points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full bg-white/30 px-3 py-1.5 text-[11px] font-semibold text-slate-900"
                    >
                      {point}
                    </span>
                  ))}

                </div>

              </div>
            </div>

            {/* Transparent Pricing */}
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-amber-300
                hover:shadow-lg
                sm:p-7
                lg:min-h-[270px]
              "
            >

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100">

                <IndianRupee className="h-5 w-5 text-amber-600" />

              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {benefits[1].title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {benefits[1].description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-amber-600">

                <BadgeCheck className="h-4 w-4" />

                Clear fare estimate

              </div>

            </div>

            {/* Bottom Cards */}
            {benefits.slice(2).map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    group
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

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 transition-colors group-hover:bg-amber-100">

                    <Icon className="h-5 w-5 text-amber-600" />

                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-950 sm:text-lg">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {benefit.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">

                    <BadgeCheck className="h-4 w-4 text-amber-500" />

                    {benefit.points[0]}

                  </div>

                </div>
              );
            })}

          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div>

              <p className="text-sm font-bold text-slate-950 sm:text-base">
                Ready to travel with {vehicle.name}?
              </p>

              <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">
                Comfortable cab service available in {location.name}.
              </p>

            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">

              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">

                <ShieldCheck className="h-4 w-4 text-amber-600" />

                Safe

              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">

                <BadgeCheck className="h-4 w-4 text-amber-600" />

                Reliable

              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">

                <IndianRupee className="h-4 w-4 text-amber-600" />

                Transparent

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}