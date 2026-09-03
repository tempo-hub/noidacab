
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What determines the taxi fare?",
    answer:
      "The taxi fare depends on factors such as the selected vehicle, journey type, travel distance, travel date, waiting time and applicable taxes or charges.",
  },
  {
    question: "How much does a taxi cost?",
    answer:
      "Taxi prices vary depending on the vehicle category and journey details. Select your pickup location, destination and preferred vehicle to check the applicable fare.",
  },
  {
    question: "Are one-way and round-trip fares different?",
    answer:
      "Yes. One-way and round-trip journeys can have different pricing structures based on the selected vehicle, distance and booking requirements.",
  },
  {
    question: "Which vehicles are available for booking?",
    answer:
      "Depending on availability, you can choose from different vehicle categories such as hatchbacks, sedans, SUVs and larger vehicles for group travel.",
  },
  {
    question: "Can I book an AC taxi?",
    answer:
      "Yes. AC vehicles are available among the available cab options. Vehicle availability may vary depending on the selected journey and travel date.",
  },
  {
    question: "Are taxes included in the taxi fare?",
    answer:
      "Applicable taxes and charges depend on the selected vehicle and fare. Any applicable amount is displayed during the booking process.",
  },
  {
    question: "Are there extra charges for additional distance or time?",
    answer:
      "Additional distance, waiting time or other applicable charges may apply depending on the selected vehicle and fare terms. Check the vehicle details before confirming your booking.",
  },
  {
    question: "Can I choose my preferred vehicle?",
    answer:
      "Yes. You can select an available vehicle according to your passenger count, luggage requirements, comfort preferences and budget.",
  },
  {
    question: "Can I book a taxi for multiple passengers?",
    answer:
      "Yes. Different vehicle categories are available for individuals, families and groups. Choose a vehicle with suitable seating capacity for your passengers.",
  },
  {
    question: "How can I check the exact taxi fare?",
    answer:
      "Enter your pickup location, destination, travel date and pickup time in the booking form. Select an available vehicle to view the applicable fare before confirming your booking.",
  },
  {
    question: "Can I book a taxi in advance?",
    answer:
      "Yes. You can provide your preferred travel date and pickup time during the booking process to schedule your journey in advance.",
  },
  {
    question: "Can the final taxi fare change?",
    answer:
      "The final fare can vary based on changes to the journey details, additional distance, waiting time, vehicle selection, taxes and other applicable charges.",
  },
];

export default function TaxiFareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="bg-white/95 py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Taxi Fare FAQs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Find answers to common questions about taxi fares, vehicles,
            additional charges and cab booking.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-amber-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-gray-100 px-6 pb-6 pt-4 leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

