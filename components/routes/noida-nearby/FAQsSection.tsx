"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";
import { faqs } from "@/data/faqs";

type FAQsSectionProps = {
  route: RouteData;
};

export default function FAQsSection({
  route,
}: FAQsSectionProps) {
  const [active, setActive] = useState<number | null>(0);

  const routeName = `${route.from.name} to ${route.to.name}`;

  const toggle = (index: number) => {
    setActive((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="bg-[#FFFDF5] py-6">
      <div className="mx-auto max-w-5xl px-5">

        {/* Heading */}
        <div className="mb-6 text-center">
          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked
            <span className="px-4 text-amber-600">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know before booking
            your {routeName.toLowerCase()} cab with
            NoidaCabs.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl bg-white shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-5 p-7 text-left transition hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    {open ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-8 text-gray-600">
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