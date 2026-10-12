import SafetyFeatures from "./SafetyFeatures";
import WhyChooseNoidaCab from "./WhyChooseNoidaCab";

export default function WhyChooseCards() {
  return (
    <section
      className="border-b border-gray-300 bg-white/95 py-10 sm:py-12 lg:py-12"
      aria-labelledby="why-choose-heading"
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold text-amber-700 sm:text-sm">
            Safe, Clean and Verified
          </span>

          <h2
            id="why-choose-heading"
            className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Why People Choose NoidaCab
            <span className="mt-1 block text-amber-600">
              For Travel Across Noida and Delhi-NCR
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Explore vehicle options, get fare information before booking
            and arrange local rides, airport transfers or outstation trips
            with convenient booking support.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <SafetyFeatures />
          <WhyChooseNoidaCab />
        </div>
      </div>
    </section>
  );
}