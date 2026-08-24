"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the Noida to Delhi taxi fare?",
    answer:
      "The Noida to Delhi taxi fare depends on the selected vehicle, journey type, pickup and drop location, travel date, and applicable charges. Check the available cab options during booking for the applicable fare.",
  },
  {
    question: "How much does a one-way taxi from Noida to Delhi cost?",
    answer:
      "One-way fares vary by vehicle category. NoidaCab offers multiple options including hatchbacks, sedans and SUVs. The applicable fare is shown based on the vehicle selected for your journey.",
  },
  {
    question: "What is the distance from Noida to Delhi?",
    answer:
      "The distance depends on your exact pickup location in Noida and destination in Delhi. Different routes can have different distances, so the actual distance is determined by the locations entered during booking.",
  },
  {
    question: "How long does a taxi take from Noida to Delhi?",
    answer:
      "Travel time depends on the exact route, destination and traffic conditions. During peak traffic hours, the journey may take longer than usual.",
  },
  {
    question: "Which cars are available from Noida to Delhi?",
    answer:
      "Depending on availability, you can choose from vehicles such as Swift Dzire, WagonR, Swift, Ertiga, Innova Crysta, Toyota Innova and other available cab options.",
  },
  {
    question: "Can I book an AC taxi from Noida to Delhi?",
    answer:
      "Yes. AC vehicles are available among the cab options. You can select a suitable vehicle based on your travel requirements and availability.",
  },
  {
    question: "Can I book a round-trip taxi from Noida to Delhi?",
    answer:
      "Yes. NoidaCab offers round-trip booking options. Select the round-trip option and provide your departure and return details while booking.",
  },
  {
    question: "Can I book a taxi from any location in Noida?",
    answer:
      "You can enter your pickup location during booking. NoidaCab serves multiple residential, commercial and popular pickup areas across Noida.",
  },
  {
    question: "Are taxes included in the taxi fare?",
    answer:
      "Applicable taxes and charges depend on the selected vehicle and fare. The applicable amount is displayed during the booking process.",
  },
  {
    question: "Are there extra charges for additional distance or time?",
    answer:
      "Additional distance, waiting time or other applicable charges may apply depending on the selected vehicle and fare terms. Check the vehicle details before confirming your booking.",
  },
  {
    question: "How can I book a Noida to Delhi taxi?",
    answer:
      "Enter your pickup location, destination, travel date and pickup time in the booking form. Then select an available vehicle and continue with the booking.",
  },
  {
    question: "Can I choose the type of vehicle for my journey?",
    answer:
      "Yes. You can choose from available vehicle categories according to your passenger count, luggage requirements and travel preferences.",
  },
];

export default function NoidaDelhiFareFAQ() {
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
            Noida to Delhi Taxi Fare FAQs
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Find answers to common questions about Noida to Delhi taxi fares,
            vehicles, travel time and cab booking.
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