const steps = [
  {
    number: "01",
    title: "Choose Your Taxi",
    description:
      "Select a vehicle based on your passengers, luggage and comfort requirements.",
  },
  {
    number: "02",
    title: "Enter Your Route",
    description:
      "Provide your pickup location, destination and preferred travel date.",
  },
  {
    number: "03",
    title: "Review Your Fare",
    description:
      "Check the available fare and trip details before confirming your booking.",
  },
  {
    number: "04",
    title: "Confirm Your Ride",
    description:
      "Confirm your taxi and get ready for a comfortable journey.",
  },
];

export default function TaxiBookingGuide() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How to Choose and Book a Taxi
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <span className="text-sm font-bold text-amber-600">
                {step.number}
              </span>

              <h3 className="mt-3 font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}