import { ChevronDown, HelpCircle } from "lucide-react";

import type { RouteVehicleProps } from "./type";

export default function RouteFAQs({
  route,
}: RouteVehicleProps) {
  const { vehicle } = route;

  const faqs = [
    {
      question: `How much does a ${route.fromName} to ${route.toName} ${vehicle.name} Taxi cost?`,
      answer: `The fare depends on whether you choose a one-way or round-trip journey. The starting ${vehicle.name} fare is ${vehicle.price}. Applicable toll and parking charges are billed separately at actuals and are communicated before your trip.`,
    },

    {
      question: `How can I book a ${route.fromName} to ${route.toName} ${vehicle.name} Taxi?`,
      answer: `You can book your ${route.fromName} to ${route.toName} ${vehicle.name} taxi by calling or messaging us on WhatsApp. Share your pickup point, travel date and preferred travel time. We will confirm the vehicle, driver details and applicable fare for your booking.`,
    },

    {
      question: `How long does a ${route.fromName} to ${route.toName} ${vehicle.name} Taxi take?`,
      answer: `The usual travel time from ${route.fromName} to ${route.toName} is around ${route.travelTime}. Actual journey time can vary depending on your exact pickup location, destination and traffic conditions on the day of travel.`,
    },

    {
      question: `How many passengers can travel in a ${route.fromName} to ${route.toName} ${vehicle.name} Taxi?`,
      answer: `The ${vehicle.name} is designed to comfortably accommodate up to ${vehicle.seats} passengers. It also provides approximately ${vehicle.luggage} luggage spaces, making it suitable for families, small groups and travellers with luggage.`,
    },

    {
      question: `Does the ${route.fromName} to ${route.toName} ${vehicle.name} Taxi fare include toll and parking?`,
      answer: `Toll and parking charges are not included in the base fare and are charged separately at actuals. The applicable fare, along with any additional charges, is communicated before your ${vehicle.name} taxi booking is confirmed.`,
    },
  ];

  return (
    <section className="bg-white/95 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600">
            <HelpCircle className="h-6 w-6" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            FAQs About {route.fromName} to{" "}
            {route.toName} {vehicle.name} Taxi
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Find answers to common questions about booking a{" "}
            {vehicle.name} taxi from {route.fromName} to{" "}
            {route.toName}.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-gray-200 bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-gray-900 sm:px-6">
                <span>{faq.question}</span>

                <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-6 text-gray-600 sm:px-6">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}