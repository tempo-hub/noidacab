"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calculator,
  CheckCircle2,
  CarFront,
  ArrowRight,
  PhoneCall,
  Clock,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Select Journey & Vehicle",
    description:
      "Choose your pickup location, drop destination, travel date, and preferred vehicle—from budget sedans like Dzire/Etios to 24-seater luxury tempo travellers.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Get Instant Transparent Fare",
    description:
      "Receive fixed per-kilometer pricing with zero surge charges. We provide upfront clarity on tolls, parking, and driver allowances with no hidden fees.",
    icon: Calculator,
  },
  {
    step: "03",
    title: "Confirm in 60 Seconds",
    description:
      "Confirm your booking instantly via our website, WhatsApp, or a quick phone call. Receive driver and vehicle details right on your mobile.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "Doorstep Pickup & Relax",
    description:
      "Your verified chauffeur arrives 10 minutes prior to pickup time in a spotless, sanitized vehicle. Enjoy a peaceful and comfortable ride.",
    icon: CarFront,
  },
];

export default function HowToBook() {
  return (
    <section className="bg-white/95 py-12 sm:py-12 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            Booking Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            How to Book Your Cab in{" "}
            <span className="text-amber-600">4 Easy Steps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Booking a taxi or tempo traveller with NoidaCab is effortless, transparent,
            and takes less than 2 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-amber-600/30">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Graphic Banner */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to embark on your journey?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-amber-100">
              Speak directly with our 24/7 dispatch desk for immediate cab allocation,
              route customization, or multi-city pilgrimage itineraries.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href="https://wa.me/919818022687?text=Hi%2C%20I%20would%20like%20to%20book%20a%20cab%20now."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm sm:text-base font-bold text-amber-700 shadow-md hover:bg-amber-50 transition"
            >
              Book via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="tel:+918377809809"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 bg-transparent px-6 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-white/10 transition"
            >
              <PhoneCall className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
