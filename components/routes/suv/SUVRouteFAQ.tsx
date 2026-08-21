import type { ParsedRoute } from "@/lib/parse-route";

type Props = {
  route: ParsedRoute;
};

export function SUVRouteFAQ({ route }: Props) {
  const faqs = [
    {
      question: `Which SUV taxis are available from ${route.fromName} to ${route.toName}?`,
      answer: `You can choose from SUV taxi options such as Ertiga and Innova for travel from ${route.fromName} to ${route.toName}.`,
    },
    {
      question: `How far is ${route.fromName} from ${route.toName}?`,
      answer: `The approximate road distance from ${route.fromName} to ${route.toName} is ${route.distance}.`,
    },
    {
      question: `How long does it take to travel from ${route.fromName} to ${route.toName}?`,
      answer: `The estimated travel time is around ${route.travelTime}, depending on traffic, pickup location and road conditions.`,
    },
    {
      question: `Is an SUV suitable for family travel from ${route.fromName} to ${route.toName}?`,
      answer: `Yes. SUVs such as Ertiga and Innova provide additional seating and luggage space, making them suitable for family and group travel.`,
    },
    {
      question: `Can I book an Ertiga or Innova for this route?`,
      answer: `Yes. Both Ertiga and Innova SUV options can be selected for this route, subject to availability.`,
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            {route.fromName} to {route.toName} SUV Taxi FAQ
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Common questions about booking an SUV taxi for this route.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-slate-900">
                <span>{faq.question}</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg text-orange-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 pr-10 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}