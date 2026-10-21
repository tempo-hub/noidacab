
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
} from "lucide-react";

type RouteFAQsProps = {
  route: {
    from: string;
    to: string;
    distance: string | number;
    duration: string;
    fare: string | number;
    vehicle: string;
  };
};

export default function RouteFAQs({ route }: RouteFAQsProps) {
  const { from, to, distance, duration, fare, vehicle } = route;

  const faqs = [
    {
      question: `What is the distance from ${from} to ${to}?`,
      answer: `The road distance from ${from} to ${to} is approximately ${distance}. The journey usually takes around ${duration}, depending on traffic and road conditions.`,
    },
    {
      question: `What is the taxi fare from ${from} to ${to}?`,
      answer: `The starting fare for a ${vehicle} from ${from} to ${to} is ${fare}. The final price depends on the selected vehicle, trip type, and applicable additional charges. Confirm the complete fare before booking.`,
    },
    {
      question: `How can I book a taxi from ${from} to ${to}?`,
      answer: `Contact NoidaCab by phone or WhatsApp. Share your pickup location, destination, travel date, pickup time, and passenger count to check the fare and vehicle availability.`,
    },
    {
      question: `Can I book a one-way taxi from ${from} to ${to}?`,
      answer: `You can enquire about a one-way taxi for this route. Confirm the applicable fare, vehicle availability, and any minimum-kilometre or trip-specific conditions before booking.`,
    },
    {
      question: `Can I book a round-trip taxi from ${from} to ${to}?`,
      answer: `You can enquire about a round-trip booking. Share your return date, expected waiting time, and travel plan to receive a suitable quote.`,
    },
    {
      question: "Are toll charges included in the taxi fare?",
      answer: `Toll charges, parking fees, and state entry taxes may be additional depending on your booking package. Confirm which charges are included in your final quote.`,
    },
    {
      question: `Which vehicle can I book for the ${from} to ${to} journey?`,
      answer: `You can enquire about a ${vehicle} for this route. The most suitable vehicle depends on passenger count, luggage requirements, travel date, and availability.`,
    },
    {
      question: `Can I book a taxi in advance from ${from} to ${to}?`,
      answer: `Yes, you can request an advance booking by sharing your preferred travel date and pickup time. Your booking is confirmed once availability and fare are agreed upon.`,
    },
    {
      question: "How much luggage can I carry?",
      answer: `Luggage capacity depends on the vehicle, passenger count, and bag size. Share your luggage requirements when booking so the team can help you choose an appropriate vehicle.`,
    },
    {
      question: `How long does the ${from} to ${to} journey take?`,
      answer: `The estimated journey time is around ${duration}. Actual travel time can vary depending on traffic, weather, road conditions, and stops along the way.`,
    },
  ];

  const whatsappUrl = `https://wa.me/919818022687?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${vehicle} from ${from} to ${to}. Please confirm the fare and availability.`
  )}`;

  return (
    <section
      className="border-b border-gray-200 bg-white/95 py-12 sm:py-12"
      aria-labelledby="route-faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-7xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
            <HelpCircle className="h-4 w-4" />
            Travel Help
          </span>

          <h2
            id="route-faq-heading"
            className="mt-4 text-2xl font-black tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
          >
            {from} to {to} Taxi FAQs
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            Everything you need to know about taxi fares, travel time,
            vehicle options, and booking your journey.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors open:border-amber-300"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-semibold text-gray-900 sm:p-5 sm:text-base">
                <span>{faq.question}</span>

                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>

              <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                <p className="border-t border-gray-100 pt-3 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
