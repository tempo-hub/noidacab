import {
  CarFront,
  IndianRupee,
  Luggage,
  ShieldCheck,
  UserRound,
  Wind,
} from "lucide-react";

const reasons = [
  {
    icon: IndianRupee,
    title: "Practical for Small Groups",
    description:
      "A sedan is a suitable choice when you are travelling with up to four passengers and want a practical private cab.",
  },
  {
    icon: Wind,
    title: "Comfortable AC Travel",
    description:
      "Air-conditioned sedans provide a comfortable environment for travelling between Noida and Delhi.",
  },
  {
    icon: Luggage,
    title: "Useful Luggage Space",
    description:
      "Sedans offer boot space for normal luggage, making them suitable for everyday and business trips.",
  },
  {
    icon: UserRound,
    title: "Good for Business Travel",
    description:
      "A sedan offers a convenient private travel option for office visits, meetings and business journeys.",
  },
  {
    icon: ShieldCheck,
    title: "Private Door-to-Door Journey",
    description:
      "Travel directly from your pickup location in Noida to your destination in Delhi without sharing the cab.",
  },
  {
    icon: CarFront,
    title: "Multiple Sedan Options",
    description:
      "Choose between popular models such as Dzire, Etios and Amaze based on availability and your requirements.",
  },
];

export default function NoidaDelhiSedanWhyChoose() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Choose a Sedan for Noida to Delhi Travel?
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Sedans are a practical choice for passengers who want
            comfortable private transportation without needing the
            additional space of a larger SUV or tempo traveller.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-amber-300
                  hover:shadow-sm
                  sm:p-6
                "
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom Comparison */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Is a sedan right for your journey?
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Choice
              title="Choose a Sedan"
              text="Up to 4 passengers with normal luggage."
              active
            />

            <Choice
              title="Choose an SUV"
              text="Better suited for larger families or additional space."
            />

            <Choice
              title="Choose a Tempo Traveller"
              text="Better for larger groups travelling together."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function Choice({
  title,
  text,
  active = false,
}: {
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        active
          ? "border-amber-300 bg-amber-50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <h4 className="font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-1 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}