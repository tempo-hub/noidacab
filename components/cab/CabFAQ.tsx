"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, PhoneCall } from "lucide-react";

const cabFaqs = [
  {
    question: "How are cab fares calculated for local and outstation journeys?",
    answer:
      "For outstation rides, fares are calculated based on transparent per-kilometer rates (e.g. ₹10/km for sedans, ₹13/km for SUVs, ₹20/km for tempo travellers) with standard minimum daily running distance (typically 250 km/day). For local rides within cities like Noida or Lucknow, we provide hourly rental packages (e.g., 4hrs/40km or 8hrs/80km) or direct point-to-point fares with zero hidden charges.",
  },
  {
    question: "Are toll taxes, parking fees, and state border taxes included in the fare?",
    answer:
      "Our base per-km quotes cover the vehicle rental, fuel, and experienced chauffeur allowance. Highway toll taxes, state border entry taxes (e.g. crossing UP to Delhi or Haryana), and destination parking charges are either paid on actuals or can be bundled into an all-inclusive fixed package upon request before your trip.",
  },
  {
    question: "Can I book a one-way taxi from Lucknow, Varanasi, or Noida?",
    answer:
      "Yes, absolutely! We offer dedicated one-way cab drops on popular routes like Lucknow to Ayodhya, Varanasi to Prayagraj, Noida to Agra, and Delhi Airport to Noida. You only pay for one-way distance with no mandatory return fare on designated one-way corridors.",
  },
  {
    question: "What vehicle is best suited for family pilgrimage tours to Ayodhya and Varanasi?",
    answer:
      "For a family of 4 to 6 people, Toyota Innova Crysta or Maruti Ertiga provides ample luggage room and superior highway comfort. For larger families or extended pilgrim groups of 9 to 24 members, our 12, 16, 20, or 24-seater luxury Tempo Travellers and Force Urbanias offer individual pushback reclining seats, large luggage compartments, and dual-zone air conditioning.",
  },
  {
    question: "How early in advance should I book a Tempo Traveller or Luxury Van?",
    answer:
      "During peak pilgrimage seasons (such as Ram Navami, Kumbh Mela, Dev Deepawali, or wedding seasons), we recommend booking at least 2 to 4 days in advance to reserve your preferred seating capacity and vehicle model. For city sedans and SUVs, bookings can be confirmed with as little as 1 to 2 hours notice.",
  },
  {
    question: "Are NoidaCab drivers background verified, and is late-night travel safe?",
    answer:
      "Yes, 100%. All our chauffeurs undergo thorough police verification and background screening. They are licensed commercial drivers experienced in highway night driving, expressway navigation, and defensive driving. All vehicles are equipped with GPS tracking for rider safety.",
  },
  {
    question: "What is your cancellation and booking rescheduling policy?",
    answer:
      "We provide zero-cancellation fees for bookings cancelled up to 4 hours prior to scheduled departure. You can easily reschedule your travel date or time by calling our 24/7 helpdesk or texting us on WhatsApp without any penalty fees.",
  },
  {
    question: "How do I get an instant booking or connect with customer support?",
    answer:
      "You can instantly book by filling the form on this page, tapping the 'Book via WhatsApp' button, or calling our 24×7 customer assistance number directly at +91 8377809809.",
  },
];

export default function CabFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white/95 py-12 sm:py-12 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-7xl mx-auto">
            Find answers to commonly asked questions about booking, fares,
            pilgrimage tours, and safety.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {cabFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 bg-white shadow-xs transition hover:border-amber-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-6 sm:p-7 text-left transition hover:bg-gray-50/50 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base leading-relaxed text-gray-600 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 rounded-3xl bg-white border border-amber-200/80 p-6 sm:p-8 text-center shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-900">
              Still have questions about your route or vehicle?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Our travel specialists are available 24/7 to assist with quotes and custom itineraries.
            </p>
          </div>

          <a
            href="tel:+918377809809"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-500 transition shrink-0"
          >
            <PhoneCall className="h-4 w-4" />
            Call +91 8377809809
          </a>
        </div>
      </div>
    </section>
  );
}
