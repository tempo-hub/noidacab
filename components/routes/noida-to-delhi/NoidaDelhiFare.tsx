import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NoidaDelhiFare() {
  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Noida to Delhi Taxi Fare
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Your Noida to Delhi taxi fare depends on the vehicle you pick, the
            distance from your exact sector to your Delhi destination, and the
            trip type you book, one way or round trip. Every fare quote comes
            with a full breakup before you confirm, so there&apos;s nothing
            hidden in the final bill.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-4 rounded-xl border border-amber-100 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Want detailed Noida to Delhi taxi fare information?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              View vehicle-wise pricing, fare details and applicable charges
              on our dedicated fare page.
            </p>
          </div>

          <Link
            href="/noida-to-delhi-taxi-fare"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            View Detailed Fare
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}