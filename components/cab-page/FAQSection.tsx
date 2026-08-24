"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type Props = {
  location: {
    slug: string;
    name: string;
  };

  vehicle: {
    name: string;
  };
};

export function FAQSection({
  location,
  vehicle,
}: Props) {
  const faqs = [
    {
      question: `How much does a ${vehicle.name} cost in ${location.name}?`,
      answer: `The estimated fare for a ${vehicle.name} from ${location.name} depends on the travel distance and the applicable per-kilometre rate. You can check the estimated fare in the fare section above.`,
    },
    {
      question: `Can I book a ${vehicle.name} from ${location.name}?`,
      answer: `Yes. You can book a ${vehicle.name} cab from ${location.name} for local, airport, railway station and outstation travel, subject to availability.`,
    },
    {
      question: `Can I get pickup from ${location.name}?`,
      answer: `Yes. Pickup can be arranged from ${location.name}. Enter your preferred pickup location and destination while booking your cab.`,
    },
    {
      question: `Is the ${vehicle.name} suitable for family travel?`,
      answer: `Yes. The ${vehicle.name} is a comfortable option for family travel. You can select the vehicle based on your group size and luggage requirements.`,
    },
    {
      question: `Can I book a ${vehicle.name} for local travel in ${location.name}?`,
      answer: `Yes. You can book a ${vehicle.name} for local travel from ${location.name}. Enter your pickup location, destination and travel details while booking.`,
    },
    {
      question: `Can I book a ${vehicle.name} for airport or railway station pickup?`,
      answer: `Yes. You can use a ${vehicle.name} for airport and railway station transfers from ${location.name}. Availability may depend on the selected date and time.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white/95 border-b border-gray-300 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Find answers to common questions about booking a{" "}
            {vehicle.name} in {location.name}.
          </p>

        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-amber-200 shadow-md"
                    : "border-slate-200"
                }`}
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >

                  <span className="font-semibold leading-6 text-slate-900">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6">
                      {faq.answer}
                    </div>

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