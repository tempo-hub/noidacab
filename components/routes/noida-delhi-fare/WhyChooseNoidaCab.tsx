import {
  ShieldCheck,
  IndianRupee,
  Clock3,
  CarFront,
  UserCheck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    title: "Transparent Pricing",
    description:
      "Know the applicable fare before confirming your Noida to Delhi taxi booking.",
    icon: IndianRupee,
  },
  {
    title: "Verified Drivers",
    description:
      "Travel with professional drivers focused on providing a comfortable and reliable journey.",
    icon: UserCheck,
  },
  {
    title: "Well-Maintained Cabs",
    description:
      "Choose from a range of comfortable vehicles suitable for individuals, families and groups.",
    icon: CarFront,
  },
  {
    title: "Punctual Service",
    description:
      "Plan your journey with convenient pickup scheduling based on your selected travel date and time.",
    icon: Clock3,
  },
  {
    title: "Safe & Comfortable",
    description:
      "Select a vehicle according to your seating requirements and travel preferences.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Support",
    description:
      "Get assistance with your cab booking and travel-related requirements.",
    icon: Headphones,
  },
];

export default function WhyChooseNoidaCab() {
  return (
    <section className="bg-[#FFFDF5] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-600">
            Why NoidaCab
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose NoidaCab for Your Noida to Delhi Taxi?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            From choosing the right vehicle to understanding your fare, we
            make booking a Noida to Delhi taxi simple, convenient and
            comfortable.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-gray-950 px-7 py-10 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Book Your Noida to Delhi Taxi?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            Select your travel date, pickup location and preferred vehicle to
            check the available cab options.
          </p>

          {/* <a
            href="/"
            className="mt-7 inline-flex rounded-full bg-amber-500 px-7 py-3.5 font-bold text-white transition hover:bg-amber-600"
          >
            Book Your Cab
          </a> */}
        </div>
      </div>
    </section>
  );
}