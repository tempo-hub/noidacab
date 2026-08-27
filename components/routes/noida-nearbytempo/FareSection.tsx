import Link from "next/link";
import { ArrowRight, BadgeIndianRupee } from "lucide-react";

import type { RouteData } from "@/data/routes/taxiroutes";

type FareSectionProps = {
  route: RouteData;
};

export default function FareSection({
  route,
}: FareSectionProps) {
  const routeName = `${route.from.name} to ${route.to.name}`;

  /*
   * Example:
   * noida-to-delhi-taxi
   *        ↓
   * noida-to-delhi-tempo-fare
   */
  const farePageSlug = `${route.slug}`;

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">

        {/* ================================================================ */}
        {/* Heading */}
        {/* ================================================================ */}

        <div className="max-w-4xl">

          <div className="mb-3 flex items-center gap-2 text-amber-600">
            <BadgeIndianRupee size={20} />

            <span className="text-sm font-semibold">
              Tempo Traveller Pricing
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {routeName} Tempo Traveller Fare
          </h2>

          {/* ============================================================ */}
          {/* Description */}
          {/* ============================================================ */}

          <p className="mt-3 text-base leading-7 text-slate-600">
            Your {routeName.toLowerCase()} Tempo Traveller
            fare depends on the seating capacity and
            vehicle you choose, your exact pickup and
            drop-off locations, travel distance, and the
            type of trip you book. Whether you need a
            one-way journey or a round trip, you can get
            clear pricing before confirming your booking.
          </p>

        </div>

        {/* ================================================================ */}
        {/* Fare CTA */}
        {/* ================================================================ */}

        <div className="mt-7 flex flex-col gap-4 rounded-xl border border-amber-100 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          {/* Content */}

          <div>

            <h3 className="text-lg font-semibold text-slate-900">
              Want detailed{" "}
              {routeName.toLowerCase()} Tempo Traveller
              fare information?
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              View seating-wise pricing, vehicle options,
              fare details and applicable charges on our
              dedicated Tempo Traveller fare page.
            </p>

          </div>

          {/* CTA */}

          <Link
            href={`/${farePageSlug}`}
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