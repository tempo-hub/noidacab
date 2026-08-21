import {
  IndianRupee,
  ShieldCheck,
  ReceiptText,
} from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
  };
};

const items = [
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    text: "Choose from multiple vehicle options according to your budget.",
  },
  {
    icon: ReceiptText,
    title: "Clear Pricing",
    text: "Understand your booking cost before confirming your trip.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    text: "Travel with experienced drivers and comfortable vehicles.",
  },
];

export function OneWayFareHighlights({ route }: Props) {
  return (
    <section className="bg-amber-50/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            One Way Fare
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {route.from} to {route.to} Cab Fare
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Your one-way cab fare can vary based on the vehicle selected,
            pickup location, travel date and other booking requirements.
            Choose the vehicle that best suits your journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100">
                  <Icon className="h-5 w-5 text-amber-600" />
                </div>

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