import { HelpCircle, ChevronDown, PhoneCall, MessageSquare, Sparkles } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";

export default function VehicleFAQ({ vehicle }: { vehicle: Vehicle }) {
  const faqs = [
    {
      question: `What is the per-km taxi fare for ${vehicle.name} in Noida?`,
      answer: `The base fare for ${vehicle.name} starts at ${vehicle.price}. For outstation trips, billing is calculated on an average minimum run of 250 km/day. Local 8-hour/80-km packages and fixed airport drop fares are also available.`,
    },
    {
      question: `How many passengers and bags can fit in ${vehicle.name}?`,
      answer: `${vehicle.name} comfortably accommodates up to ${vehicle.seats} adult passengers with dedicated boot space for approximately ${vehicle.luggage} medium-sized bags or suitcases.`,
    },
    {
      question: `Are toll taxes, state border fees, and parking included in the fare?`,
      answer: `Base quotes cover the vehicle, fuel, and commercial driver charges. Fastag highway tolls, MCD/state entry permits (e.g., Delhi, Haryana, UP), and airport parking are charged at actual government receipt rates.`,
    },
    {
      question: `Is the ${vehicle.name} air-conditioned during outstation & hill trips?`,
      answer: vehicle.airCondition
        ? `Yes, the ${vehicle.name} is equipped with powerful dual-zone air conditioning. As per transport regulations, AC is kept on throughout plain highways and can be adjusted as per passenger comfort.`
        : `Air conditioning is subject to vehicle configuration. Please check your trip preferences during booking.`,
    },
    {
      question: `How far in advance should I book a ${vehicle.name} in Noida?`,
      answer: `While instant dispatch is available within 30 to 45 minutes across Noida sectors, we recommend pre-booking at least 2 to 4 hours in advance for early morning airport pickups and 24 hours prior for long outstation tours.`,
    },
    {
      question: `Can I book ${vehicle.name} with a commercial driver?`,
      answer: vehicle.driverChoice
        ? `Yes. All bookings include an experienced, background-verified commercial chauffeur trained in route navigation, defensive highway driving, and polite passenger handling.`
        : `Yes, dedicated commercial driver service is provided with standard fleet reservations.`,
    },
  ];

  // Structured Data for Google FAQ Rich Snippets SEO
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

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200/80 mb-3">
            <HelpCircle size={13} className="text-amber-600" />
            Got Questions?
          </div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            Frequently Asked Questions about {vehicle.name}
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Everything you need to know about pricing, baggage capacity, toll policies, and chauffeur standards in Noida.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:border-amber-600/40 open:border-amber-600/40 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm sm:text-base font-bold text-slate-900 focus:outline-none">
                <span>{faq.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 group-open:rotate-180 group-open:bg-amber-50 group-open:text-amber-600 transition-transform duration-200">
                  <ChevronDown size={16} />
                </span>
              </summary>

              <div className="mt-3.5 pt-3.5 border-t border-slate-100 text-xs sm:text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Help Banner CTA */}
        <div className="mt-10 rounded-2xl border border-amber-200/70 bg-amber-50/60 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Have a specific route or pricing question?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Our 24x7 Noida booking desk is available to assist you with custom quotes.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="tel:8377809809"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 shadow-xs hover:border-amber-600 hover:text-amber-600 transition"
            >
              <PhoneCall size={14} className="text-amber-600" />
              8377809809
            </a>
            <a
              href={`https://wa.me/918377809809?text=Hi,%20I%20have%20a%20question%20about%20booking%20a%20${encodeURIComponent(vehicle.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-amber-700 transition"
            >
              <MessageSquare size={14} />
              WhatsApp Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}