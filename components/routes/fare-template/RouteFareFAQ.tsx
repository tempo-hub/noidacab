"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

import { vehicles } from "@/data/vehicles";
import { RouteData } from "@/data/routes/taxiroutes";

/**
 * Calculates fare using: (distance * 1.5 * vehicle_price) + 500
 */
function calculateStartingFare(distanceStr: string): number {
  const dist = parseFloat(distanceStr.replace(/[^0-9.]/g, "")) || 0;
  const baseRate = 10; // Entry vehicle rate (₹10/km)
  return Math.round(dist * 1.5 * baseRate + 500);
}

export default function RouteFareFAQ({ route }: { route: RouteData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const startingFare = calculateStartingFare(route.distance);
  const formattedPrice = `₹${startingFare.toLocaleString("en-IN")}`;

  const faqs = [
    {
      question: `What is the taxi fare from ${route.from.name} to ${route.to.name}?`,
      answer: `The one-way taxi fare from ${route.from.name} to ${route.to.name} starts at ${formattedPrice} for an AC Sedan (Dzire/Etios) and scales based on vehicle choice (e.g., ₹13/km for Ertiga, ₹16/km for Innova Crysta, and ₹20/km for Tempo Travellers). All basic fares include vehicle rental, fuel, and driver allowance.`,
    },
    {
      question: `What is the total road distance and travel time to ${route.to.name}?`,
      answer: `The driving distance between ${route.from.name} and ${route.to.name} is approximately ${route.distance}. Typical travel duration is around ${route.duration}, though timing can vary depending on departure time, expressway access points, and peak highway traffic.`,
    },
    {
      question: `Can I book a round-trip cab from ${route.from.name} to ${route.to.name}?`,
      answer: `Yes, NoidaCab offers cost-effective round-trip packages. You get the same dedicated cab and commercial driver for both legs of the trip, complete with local waiting time and flexible return schedules.`,
    },
    {
      question: `Are state entry taxes and toll charges included in the fare?`,
      answer: `State border entry permits, MCD toll taxes (for crossings into Delhi/Haryana), and parking fees are charged at actuals based on government regulations. Driver allowances and standard fuel are already included in your quoted base fare.`,
    },
    {
      question: `Which vehicles can I choose for this route?`,
      answer: `You can choose from our verified fleet: 4-seater Sedans (Swift Dzire, Etios, Amaze), 6-seater SUVs (Maruti Ertiga), premium 6/7-seater SUVs (Innova Crysta), and 12-to-26 seater luxury Tempo Travellers for group journeys.`,
    },
    {
      question: `Can I schedule a doorstep pickup anywhere in ${route.from.name}?`,
      answer: `Yes, NoidaCab provides verified doorstep pickups across all sectors, metro stations, residential high-rises, and corporate IT corridors in ${route.from.name} with arrival guaranteed 15 minutes before departure.`,
    },
    {
      question: `How do I confirm my ${route.from.name} to ${route.to.name} taxi booking?`,
      answer: `You can book instantly by messaging our dispatch coordinator on WhatsApp or dialing our 24x7 helpline at 8377809809 with your pickup address, date, and preferred vehicle class.`,
    },
  ];

  // FAQ Schema for SEO Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Got Questions?
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {route.from.name} to {route.to.name} Taxi Fare FAQs
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Find quick answers to common questions about route distances, tolls, cab models, and transparent billing.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-colors hover:border-amber-400/60"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left transition-colors hover:bg-slate-50/60"
                >
                  <span className="text-sm font-extrabold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
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
                    <p className="border-t border-slate-100 px-6 pb-5 pt-3.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
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