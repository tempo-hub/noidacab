"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";
import { faqs, luxuryTempoTravellerFaqs, tempoTravellerFaqs, urbaniaRentalFaqs } from "@/data/faqs";


type FAQsSectionProps = {
  route: RouteData;
  url?: string;
};

export default function FAQsSection({
  route,
  url = "",
}: FAQsSectionProps) {
  const [active, setActive] = useState<number | null>(0);

  const routeName = `${route.from.name} to ${route.to.name}`;
  const routeNameLower = routeName.toLowerCase();

  /*
   * Select FAQ dataset based on URL
   */
  const faqData = url.includes("luxury-tempo-traveller")
    ? luxuryTempoTravellerFaqs
    : url.includes("urbania-rental")
      ? urbaniaRentalFaqs
      : url.includes("tempo-traveller")
        ? tempoTravellerFaqs
        : faqs;

  const toggle = (index: number) => {
    setActive((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="bg-[#FFFDF5] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Frequently Asked
            <span className="px-2 text-amber-600 sm:px-3">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            Everything you need to know before booking
            your {routeNameLower} with NoidaCabs.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4 sm:space-y-5">
          {faqData.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 sm:rounded-3xl"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-gray-50 sm:gap-5 sm:p-7"
                >
                  <h3 className="text-base font-semibold leading-6 text-gray-900 sm:text-lg sm:leading-7">
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-amber-100
                      text-amber-600
                      sm:h-10
                      sm:w-10
                    "
                  >
                    {open ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-gray-600 sm:px-7 sm:pb-7 sm:text-base sm:leading-8">
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