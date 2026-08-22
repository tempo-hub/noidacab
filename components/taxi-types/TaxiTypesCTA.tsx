import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TaxiTypesCTA() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-[#ffb300]">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-slate-950 px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white">
                Ready to Book Your Taxi?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Choose the right vehicle for your journey and book a
                comfortable taxi from Noida.
              </p>
            </div>

            <Link
              href="https://wa.me/918448445504"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Book a Taxi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}