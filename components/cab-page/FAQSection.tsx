"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type Props = {
  route: {
    fromName: string;
    toName: string;
    distanceKm?: number;
  };
  vehicle: {
    name: string;
  };
};

export function FAQSection({
  route,
  vehicle,
}: Props) {
  const faqs = [
    {
      question: `How much does a ${vehicle.name} cost from ${route.fromName} to ${route.toName}?`,
      answer: `The estimated fare for a ${vehicle.name} from ${route.fromName} to ${route.toName} is calculated based on the total route distance and the applicable per-kilometre rate. You can check the estimated fare in the fare section above.`,
    },
    {
      question: `Can I book a ${vehicle.name} from ${route.fromName} to ${route.toName}?`,
      answer: `Yes. You can book a ${vehicle.name} cab for travel from ${route.fromName} to ${route.toName}. The vehicle is suitable for comfortable local and outstation journeys.`,
    },
    {
      question: `How far is ${route.toName} from ${route.fromName}?`,
      answer: route.distanceKm
        ? `The approximate road distance from ${route.fromName} to ${route.toName} is ${route.distanceKm} km. Actual distance may vary depending on the selected route and traffic conditions.`
        : `The distance may vary depending on the selected route and traffic conditions.`,
    },
    {
      question: `Is the ${vehicle.name} suitable for family travel?`,
      answer: `Yes. The ${vehicle.name} is a comfortable option for family travel. You can select the vehicle based on your group size and luggage requirements.`,
    },
    {
      question: `Can I get pickup from ${route.fromName}?`,
      answer: `Yes. Pickup can be arranged from ${route.fromName}. Enter your preferred pickup location and travel details while booking your cab.`,
    },
    {
      question: `Can I book a cab from ${route.toName} to ${route.fromName}?`,
      answer: `Yes. You can also book a return journey from ${route.toName} to ${route.fromName}, subject to cab availability.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8">
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
            {vehicle.name} from {route.fromName} to {route.toName}.
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