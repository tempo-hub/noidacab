"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What taxi services are available in Noida?",
    answer:
      "You can book taxis in Noida for local travel, airport transfers, railway station transfers, sightseeing, corporate travel and outstation journeys. Sedan, SUV and larger vehicles can be selected according to your travel requirements.",
  },
  {
    question: "Can I book a taxi from any sector in Noida?",
    answer:
      "Yes. Taxi pickup can be arranged from major sectors, residential areas, offices, hotels and other locations across Noida. Share your pickup location while making your booking.",
  },
  {
    question: "Do you provide airport taxi service from Noida?",
    answer:
      "Yes. Airport transfer services are available for travel between Noida and Delhi Airport. You can book a taxi for airport pickup or drop according to your flight schedule.",
  },
  {
    question: "Can I book a taxi from Noida to Delhi?",
    answer:
      "Yes. Noida to Delhi taxi service is available for local and point-to-point travel. You can choose a suitable vehicle based on the number of passengers and your luggage.",
  },
  {
    question: "Do you provide outstation taxi service from Noida?",
    answer:
      "Yes. Outstation taxis can be booked from Noida for destinations such as Agra, Jaipur, Haridwar, Mathura, Vrindavan, Lucknow and other cities. One-way and round-trip options may be available depending on the route.",
  },
  {
    question: "Which cars can I book for taxi service in Noida?",
    answer:
      "Vehicle options can include sedans such as Dzire, larger vehicles such as Ertiga and Innova Crysta, and Tempo Travellers for group travel. Vehicle availability depends on your selected date, route and passenger requirement.",
  },
  {
    question: "Can I book a taxi for full-day sightseeing in Delhi NCR?",
    answer:
      "Yes. You can enquire about full-day local taxi bookings for sightseeing, shopping, meetings, family trips and multiple-stop journeys across Noida and Delhi NCR.",
  },
  {
    question: "How can I book a taxi in Noida?",
    answer:
      "You can enquire through the booking option on the website or call the booking team. Provide your pickup location, destination, travel date, time and passenger count so the appropriate taxi can be arranged.",
  },
  {
    question: "Do you provide railway station pickup and drop service?",
    answer:
      "Yes. Taxi transfers can be arranged between Noida and major railway stations such as New Delhi Railway Station, Anand Vihar Railway Station and Ghaziabad Railway Station.",
  },
  {
    question: "How early should I book a taxi?",
    answer:
      "For planned airport, railway station and outstation journeys, advance booking is recommended so that the preferred vehicle can be arranged. For urgent requirements, you can contact the booking team to check availability.",
  },
];

export default function TaxiServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="bg-white/95 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Taxi Service in Noida — FAQs
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Find quick answers about taxi booking, airport transfers,
            outstation travel, vehicle options and local cab services in
            Noida.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-3 lg:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-slate-300 bg-slate-50/70"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`text-sm font-semibold sm:text-base ${
                      isOpen
                        ? "text-slate-900"
                        : "text-slate-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 border-slate-300 bg-white"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 text-slate-600" />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 px-5 pb-5 pt-4 sm:px-6">
                      <p className="max-w-3xl text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center sm:p-6">
          <p className="text-sm font-semibold text-slate-900">
            Still have a question?
          </p>

          <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
            Contact us with your pickup location, destination and travel
            requirements.
          </p>

          <a
            href="tel:8377809809"
            className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Call 8377809809
          </a>
        </div>
      </div>
    </section>
  );
}