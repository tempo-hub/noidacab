"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#FFFDF5] py-12">
      <div className="mx-auto max-w-5xl px-5">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked
            <span className="block text-red-600">
              Questions
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know before booking your ride with NoidaCab.
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
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-7 text-left transition hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
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