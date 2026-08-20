import type { Vehicle } from "@/data/vehicles";

export default function VehicleFAQ({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const faqs = [
    {
      question: `What is the price of ${vehicle.name} taxi in Noida?`,
      answer: `The listed starting rate for ${vehicle.name} is ${vehicle.price}. The final fare can vary depending on the route, distance, trip type and applicable charges.`,
    },
    {
      question: `How many passengers can travel in a ${vehicle.name}?`,
      answer: `${vehicle.name} has a seating capacity of ${vehicle.seats} passengers.`,
    },
    {
      question: `How much luggage can ${vehicle.name} carry?`,
      answer: `${vehicle.name} can accommodate approximately ${vehicle.luggage} luggage items. Actual luggage capacity may depend on luggage size and passenger requirements.`,
    },
    {
      question: `Does the ${vehicle.name} have air conditioning?`,
      answer: vehicle.airCondition
        ? `Yes. The ${vehicle.name} listed in our fleet comes with air conditioning.`
        : `The listed ${vehicle.name} does not include air conditioning.`,
    },
    {
      question: `Does the ${vehicle.name} have GPS?`,
      answer: vehicle.gps
        ? `Yes. GPS navigation is available with this vehicle.`
        : `GPS is not listed as an available feature for this vehicle.`,
    },
    {
      question: `Can I book a ${vehicle.name} with a driver?`,
      answer: vehicle.driverChoice
        ? `Yes. Driver service is available with the ${vehicle.name}.`
        : `Driver service is not listed as an available option for this vehicle.`,
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-amber-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {vehicle.name} Taxi FAQs
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Find answers to common questions about booking a{" "}
            {vehicle.name} taxi in Noida.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-slate-900">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}