import { CalendarCheck, Clock, Luggage, Users } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
  };
};

const information = [
  {
    icon: CalendarCheck,
    title: "Plan Ahead",
    text: "Schedule your cab according to your travel date and pickup time.",
  },
  {
    icon: Clock,
    title: "Flexible Pickup",
    text: "Choose a convenient pickup time for your journey.",
  },
  {
    icon: Users,
    title: "For Individuals & Groups",
    text: "Select a vehicle according to your passenger count.",
  },
  {
    icon: Luggage,
    title: "Travel With Luggage",
    text: "Choose a spacious vehicle when travelling with more luggage.",
  },
];

export function OneWayTravelInfo({ route }: Props) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Plan Your Journey
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Travel from {route.from} to {route.to}  With Ease
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Everything you need for a comfortable one-way intercity cab
            journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {information.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
              >
                <Icon className="h-6 w-6 text-amber-600" />

                <h3 className="mt-5 font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}