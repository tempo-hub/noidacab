type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
  };
};

export function OneWayFAQ({ route }: Props) {
  const faqs = [
    {
      question: `How can I book a one-way cab from ${route.from} to ${route.to}?`,
      answer: `Select your preferred vehicle, provide your pickup and destination details, choose your travel date and confirm your ${route.from} to ${route.to} one-way cab booking.`,
    },
    {
      question: `How far is ${route.to} from ${route.from}?`,
      answer: `The approximate road distance from ${route.from} to ${route.to} is ${route.distance}. The exact distance may vary depending on the pickup and drop locations.`,
    },
    {
      question: `How long does it take to travel from ${route.from} to ${route.to}?`,
      answer: `The journey generally takes around ${route.travelTime}, depending on traffic, route conditions and the exact pickup and drop locations.`,
    },
    {
      question: `Which cars are available for a one-way trip?`,
      answer:
        "You can choose from different vehicle categories based on your passenger count, luggage and comfort requirements.",
    },
    {
      question: `Can I book a one-way cab for an early morning trip?`,
      answer:
        "Yes, you can request a pickup according to your travel schedule. Advance booking is recommended for early morning journeys.",
    },
  ];

  return (
    <section className="bg-white/95 py-16 sm:py-20 border-b border-gray-300">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            FAQs
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {route.from} to {route.to} One Way Cab FAQs
          </h2>
        </div>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-gray-900">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}