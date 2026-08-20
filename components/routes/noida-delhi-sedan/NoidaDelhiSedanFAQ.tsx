"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqsedan = [
  {
    question: "How much does a Noida to Delhi Sedan Taxi cost?",
    answer:
      "The fare for Noida to Delhi starts from ₹9 per km for the sedan taxi. The actual fare depends on the exact pickup point and drop location. Everything is revealed upfront before you book the taxi.",
  },
  {
    question: "How can I book a Noida to Delhi Sedan Taxi?",
    answer:
      "Call us or reach out on WhatsApp to lock in your sedan cab from Noida to Delhi. Share your pickup point, timing, and let us know if you need a one way cab or a round trip cab, and we confirm the fare before the driver is assigned.",
  },
  {
    question: "How long does a Noida to Delhi Sedan Taxi take?",
    answer:
      "On a normal day, the drive from Noida to Delhi takes between 25 and 35 minutes via the DND Flyway. During peak weekday hours, expect closer to 45 to 75 minutes, so it helps to plan your pickup time around traffic.",
  },
  {
    question: "Can I book a Noida to Delhi Sedan Taxi for Delhi Airport?",
    answer:
      "Yes, our sedan cab from Noida to Delhi covers direct drops and pickups at the Delhi airport. Just mention your flight timing while booking, and the driver plans the route to get you there with time to spare.",
  },
  {
    question: "Does Noida to Delhi Sedan Taxi fare include toll charges?",
    answer:
      "Yes, the base fare covers fuel and driver charges, and toll on the route is factored into most quotes. Parking charges at specific pickup or drop points may apply separately depending on the location.",
  },
];

export default function NoidaDelhiSedanFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="bg-[#FFFDF5] py-20">
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
          {faqsedan.map((faq, index) => {
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