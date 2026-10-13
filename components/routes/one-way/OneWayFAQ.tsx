"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
    fare?: string;
  };
};

export function OneWayFAQ({ route }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      question: `How does one-way taxi fare calculation work from ${route.from} to ${route.to}?`,
      answer: `When you book a one-way cab from ${route.from} to ${route.to}, you only pay for the distance travelled on that single drop. There are zero return toll charges, no empty return fuel costs, and no driver return allowances, saving up to 40% to 50% compared to round-trip billing.`,
    },
    {
      question: `What is the road distance and travel time between ${route.from} and ${route.to}?`,
      answer: `The approximate driving distance from ${route.from} to ${route.to} is ${route.distance}, and it typically takes ${route.travelTime} under normal traffic conditions. Doorstep pickup and drop are provided.`,
    },
    {
      question: `Which cab categories are available for ${route.from} to ${route.to} one-way drops?`,
      answer: `We provide clean, sanitized AC Sedan cabs (Maruti Dzire, Honda Amaze, Toyota Etios @ ₹10/km), 6-seater MUVs (Maruti Ertiga @ ₹13/km), premium 7-seater SUVs (Innova Crysta @ ₹16/km), and 12-24 seater Tempo Travellers for larger group journeys.`,
    },
    {
      question: `Are toll charges, FASTag tolls and driver allowances included?`,
      answer: `Our base tariffs include vehicle rental, fuel charges, and driver allowances. Toll receipts and state border entry taxes are charged transparently based on actual usage with zero extra markup.`,
    },
    {
      question: `Can I schedule an early morning or late-night pickup from ${route.from}?`,
      answer: `Yes, NoidaCab provides 24x7 cab service from ${route.from} to ${route.to}. You can schedule your pickup for any hour, day or night, with guaranteed on-time doorstep arrival.`,
    },
    {
      question: `How can I confirm my ${route.from} to ${route.to} one-way cab booking?`,
      answer: `You can confirm your booking instantly via WhatsApp or by calling our 24x7 helpline at +91-8377809809. We assign your driver and vehicle details right away.`,
    },
  ];

  return (
    <section className="bg-white/95 py-14 sm:py-18 border-b border-gray-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
            <HelpCircle className="h-3.5 w-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {route.from} to {route.to} One Way Cab FAQs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Everything you need to know about booking, fare calculation, and route details.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xs transition"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-gray-900 hover:bg-gray-50/80 cursor-pointer text-sm sm:text-base"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}