import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Phone,
} from "lucide-react";

const benefits = [
  "Multiple vehicle options",
  "Transparent fare",
  "Professional drivers",
  "Easy booking",
];

export default function NoidaDelhiFareCTA() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-500 to-amber-600 px-7 py-12 sm:px-12 sm:py-16">
          {/* Decorative element */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-black/5" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white">
                <CarFront size={28} />
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Book Your Noida to Delhi Taxi?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                Choose your pickup location, travel date and preferred vehicle
                to find a comfortable cab for your journey from Noida to Delhi.
              </p>

              {/* Benefits */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm font-medium text-white"
                  >
                    <CheckCircle2 size={18} />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-gray-900 transition hover:bg-gray-100"
                >
                  Book Your Cab
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Fare highlight */}
            <div className="rounded-3xl bg-white p-7 shadow-xl lg:min-w-[260px]">
              <p className="text-sm font-semibold text-gray-500">
                Route
              </p>

              <p className="mt-2 text-xl font-bold text-gray-900">
                Noida → Delhi
              </p>

              <div className="my-5 border-t border-gray-200" />

              <p className="text-sm font-semibold text-gray-500">
                Starting Fare
              </p>

              <p className="mt-1 text-4xl font-bold text-amber-600">
                ₹1,000
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Fare may vary based on vehicle, journey details and applicable
                charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}