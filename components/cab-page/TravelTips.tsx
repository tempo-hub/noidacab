import {
  Clock3,
  Luggage,
  MapPinned,
  Navigation,
  ShieldCheck,
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

export function TravelTips({
  location,
  vehicle,
}: Props) {
  const tips = [
    {
      icon: Clock3,
      title: "Plan Your Pickup Time",
      description: `Choose a pickup time that gives you enough flexibility when booking your ${vehicle.name} from ${location.name}.`,
    },
    {
      icon: Navigation,
      title: "Share the Exact Location",
      description:
        "Providing the exact pickup location helps the driver reach you easily and avoids unnecessary delays.",
    },
    {
      icon: Luggage,
      title: "Check Your Luggage",
      description: `Make sure your luggage fits comfortably in the selected ${vehicle.name} before starting your journey.`,
    },
    {
      icon: MapPinned,
      title: "Keep Destination Details Ready",
      description: `Keep your destination details handy when booking your ${vehicle.name} cab from ${location.name}.`,
    },
    {
      icon: ShieldCheck,
      title: "Confirm Driver Details",
      description:
        "Before starting your trip, verify the vehicle and driver details provided with your booking.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <Navigation className="h-4 w-4" />
            TRAVEL TIPS
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Tips for Booking a {vehicle.name} in {location.name}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A few simple tips can make your {vehicle.name} journey
            smoother, more comfortable and convenient.
          </p>

        </div>

        {/* Tips Grid */}
        <div className="mx-auto mt-10 max-w-6xl">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {tips.map((tip, index) => {
              const Icon = tip.icon;

              return (
                <div
                  key={tip.title}
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

                  {/* Number */}
                  <span className="absolute right-5 top-5 text-xs font-bold text-slate-200 transition-colors group-hover:text-amber-200">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 transition-colors duration-300 group-hover:bg-amber-100">
                    <Icon className="h-5 w-5 text-slate-700 transition-colors group-hover:text-amber-600" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 pr-8 text-base font-bold text-slate-950 sm:text-lg">
                    {tip.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {tip.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-5 h-0.5 w-8 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-14" />

                </div>
              );
            })}

          </div>

          {/* Quick Reminder */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:items-center sm:px-6">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400">

              <ShieldCheck
                className="h-4 w-4 text-slate-950"
                strokeWidth={2.5}
              />

            </div>

            <div>

              <p className="text-sm font-bold text-slate-950">
                Quick reminder
              </p>

              <p className="mt-0.5 text-xs leading-5 text-slate-600 sm:text-sm">
                Keep your booking confirmation, pickup location and
                driver details handy before starting your journey from{" "}
                {location.name}.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}