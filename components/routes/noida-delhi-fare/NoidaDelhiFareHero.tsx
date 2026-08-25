import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NoidaDelhiFareHero() {
  return (
    <section className="relative overflow-hidden bg-amber-950">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,179,0,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-12 lg:px-8 lg:py-16">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_400px]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-3xl">

            {/* <span className="inline-flex rounded-full bg-amber-500/10 px-5 py-2 text-sm font-semibold text-amber-400">
              Noida → Delhi Taxi Fare
            </span> */}

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Noida to Delhi Taxi Fare

              <span className="mt-2 block text-amber-400">
                Starting From ₹1,100
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Check Noida to Delhi taxi fares for one-way and round-trip
              journeys. Choose from comfortable sedans, SUVs and other
              vehicles with transparent pricing.
            </p>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="w-full lg:justify-self-end">

            <div className="space-y-5">

              {/* Benefit 1 */}
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-amber-400"
                />

                <span className="text-base sm:text-lg">
                  Transparent taxi fares
                </span>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-amber-400"
                />

                <span className="text-base sm:text-lg">
                  Multiple vehicle options
                </span>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-amber-400"
                />

                <span className="text-base sm:text-lg">
                  Professional drivers
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="https://wa.me/918448445504"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-amber-500/20 transition hover:bg-amber-600 hover:shadow-amber-500/30"
              >
                Book Your Cab

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="tel:+918448445504"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Call Now
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}