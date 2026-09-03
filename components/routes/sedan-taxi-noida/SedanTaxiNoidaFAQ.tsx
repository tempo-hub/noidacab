import { ChevronDown, CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "What sedan taxis are available in Noida?",
    answer:
      "Our current sedan fleet includes Dzire, Etios and Amaze. You can choose a vehicle based on your passenger count, luggage requirements and travel needs.",
  },
  {
    question: "How much does a sedan taxi cost in Noida?",
    answer:
      "Our current sedan rate starts from ₹10/km. The final fare can vary depending on the pickup location, destination, trip type, distance and applicable tolls or parking charges. Contact us to confirm the exact fare before booking.",
  },
  {
    question: "Can I book a sedan taxi for local travel in Noida?",
    answer:
      "Yes. Sedan taxis can be booked for local point-to-point travel across Noida, including trips for meetings, shopping, appointments, business travel and other daily requirements.",
  },
  {
    question: "Can I book a sedan from Noida to the airport?",
    answer:
      "Yes. You can book a sedan taxi from Noida for airport pickup and drop services, including travel to Delhi Airport and Jewar Airport.",
  },
  {
    question: "Can I book a one-way sedan taxi from Noida?",
    answer:
      "Yes. One-way sedan taxi service is available from Noida to destinations such as Delhi, Gurgaon, Ghaziabad, Greater Noida, Agra, Mathura, Meerut and other locations.",
  },
  {
    question: "How many passengers can travel in a sedan taxi?",
    answer:
      "Our sedan vehicles are listed as 4+1 vehicles, meaning they can accommodate up to four passengers plus the driver. The available luggage space depends on the selected sedan.",
  },
  {
    question: "Are the sedan taxis air conditioned?",
    answer:
      "Yes. The sedan vehicles currently listed in our fleet are equipped with air conditioning for a more comfortable journey.",
  },
  {
    question: "Can I book a sedan taxi for an outstation trip from Noida?",
    answer:
      "Yes. Sedan taxis can be booked for outstation journeys from Noida, including one-way and round-trip travel. Share your destination and travel date to confirm the applicable fare.",
  },
  {
    question: "How can I book a sedan taxi in Noida?",
    answer:
      "You can book by contacting us directly with your pickup location, destination, travel date and preferred vehicle. Our team can help confirm vehicle availability and the applicable fare.",
  },
];

export default function SedanTaxiNoidaFAQ() {
  return (
    <section className="bg-white/95 border-b border-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200">
            <CircleHelp className="h-4 w-4" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sedan Taxi in Noida – FAQs
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Find answers to common questions about booking sedan taxis in
            Noida, fares, vehicles, airport transfers and outstation trips.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6">
                <span className="pr-2 text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                  {faq.question}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 transition group-open:rotate-180">
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </span>
              </summary>

              <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <p className="text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-amber-100 bg-amber-50 p-5 text-center sm:p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Still have a question?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Contact us with your pickup location and destination to get help
            choosing the right sedan taxi.
          </p>

          <a
            href="tel:8377809809"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
          >
            Call 8377809809
          </a>
        </div>
      </div>
    </section>
  );
}

