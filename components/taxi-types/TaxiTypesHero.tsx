import Link from "next/link";
import { ArrowRight, CarFront, MapPin, ShieldCheck } from "lucide-react";

export default function TaxiTypesHero() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero3.webp')",
        }}
      />

      {/* Dark + Amber Overlay */}
      <div className="absolute inset-0" />

      <div className="absolute inset-0 bg-gradient-to-r from-amber-300/90 via-amber-500/75 to-amber-500/60" />

      <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-yellow-300/30 blur-3xl" />
                <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-500/15 px-4 py-2 text-sm font-medium text-amber-900 backdrop-blur-sm">
            <CarFront className="h-4 w-4" />
            Taxi Services in Noida
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Taxi Types for Every
            <span className="block text-amber-900">
              Journey in Noida
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-black sm:text-lg">
            Choose the right taxi based on your group size, luggage,
            destination and travel requirements. From economical hatchbacks
            and comfortable sedans to SUVs, Innova Crysta and Tempo Travellers,
            find a cab that fits your journey.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://wa.me/918448445504"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-400"
            >
              Book a Taxi
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/route/noida-to-delhi-taxi"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-black backdrop-blur-md transition hover:bg-white/15"
            >
              Noida to Delhi Taxi
            </Link>
          </div>
        </div>
       
      </div>
    </section>
  );
}