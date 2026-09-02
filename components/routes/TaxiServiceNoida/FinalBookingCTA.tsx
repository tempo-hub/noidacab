"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import BookingForm from "@/components/bookingform/BookingForm";

const bookingSteps = [
  {
    icon: MapPin,
    title: "Share Your Route",
    description: "Tell us your pickup and destination.",
  },
  {
    icon: CalendarDays,
    title: "Choose Your Date",
    description: "Select your travel date and pickup time.",
  },
  {
    icon: CarFront,
    title: "Choose a Vehicle",
    description: "Select a car based on your requirements.",
  },
];

export default function FinalBookingCTA() {
    const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
    <section className="bg-white/95 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80">

          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left Content */}
            <div className="p-6 sm:p-8 lg:p-12">

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
                <CarFront className="h-3.5 w-3.5" />
                Book Your Taxi
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.12]">
                Ready to Book a Taxi in Noida?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Tell us your route and travel requirements. Choose from
                comfortable sedans, SUVs and group vehicles for local,
                airport and outstation travel.
              </p>

              {/* Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Highlight text="Local & outstation bookings" />
                <Highlight text="Airport & railway transfers" />
                <Highlight text="Multiple vehicle options" />
                <Highlight text="Flexible pickup locations" />
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                 <button
          type="button"
          onClick={() => setBookingOpen(true)}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800"
        >
          Book a Taxi
          <ArrowRight className="h-4 w-4" />
        </button>

                <a
                  href="tel:8377809809"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4" />
                  8377809809
                </a>
              </div>

              {/* Trust */}
              <div className="mt-7 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-slate-600" />

                <span>
                  Share your travel details to get suitable booking options.
                </span>
              </div>
            </div>

            {/* Right Steps */}
            <div className="border-t border-slate-200 bg-white/70 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  How It Works
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Book Your Journey in Three Steps
                </h3>
              </div>

              <div className="mt-7 space-y-4">
                {bookingSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      {/* Connector */}
                      {index < bookingSteps.length - 1 && (
                        <div className="absolute left-[31px] top-[55px] h-5 w-px bg-slate-200" />
                      )}

                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                        <Icon className="h-4.5 w-4.5 text-slate-700" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-slate-400">
                            0{index + 1}
                          </span>

                          <h4 className="text-sm font-semibold text-slate-900">
                            {step.title}
                          </h4>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Card */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                    <Phone className="h-4 w-4 text-slate-700" />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Booking Helpline
                    </p>

                    <a
                      href="tel:8377809809"
                      className="mt-0.5 block text-sm font-bold text-slate-900 hover:text-amber-600"
                    >
                      8377809809
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Service Links */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <QuickLink
            href="/noida-to-delhi-taxi"
            title="Noida to Delhi Taxi"
          />

          <QuickLink
            href="/noida/airport-taxi"
            title="Noida Airport Taxi"
          />

          <QuickLink
            href="/noida/outstation-taxi"
            title="Outstation Taxi"
          />

          <QuickLink
            href="/noida/fleet"
            title="View Taxi Fleet"
          />
        </div>
      </div>
    </section>
    {/* Booking Modal */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setBookingOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
              aria-label="Close booking form"
            >
              ×
            </button>

            <BookingForm />
          </div>
        </div>
      )}

    </>
  );
}

/* --------------------------------
   Highlight
--------------------------------- */

function Highlight({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-slate-600" />

      <span className="text-sm text-slate-700">
        {text}
      </span>
    </div>
  );
}

/* --------------------------------
   Quick Link
--------------------------------- */

function QuickLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition hover:border-slate-300 hover:bg-slate-50"
    >
      <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-900">
        {title}
      </span>

      <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-slate-700" />
    </Link>
  );

}