"use client";

import Link from "next/link";
import { CityInfo } from "@/lib/cityData";
import { vehicles } from "@/data/vehicles";
import AvailableVehicles from "@/components/routes/one-way/AvailableVehicles";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import WhyChooseCab from "@/components/cab/WhyChooseCab";
import CabTestimonials from "@/components/cab/CabTestimonials";
import {
  ArrowRight,
  PhoneCall,
  MapPin,
  Route,
  Clock3,
  IndianRupee,
  ShieldCheck,
  CarFront,
  CheckCircle2,
  Sparkles,
  Users,
  BadgeCheck,
  CarTaxiFront,
  HelpCircle,
} from "lucide-react";

interface Props {
  city: CityInfo;
}

const carTypes = [
  {
    name: "Sedan",
    examples: "Dzire, Etios, Amaze",
    passengers: "Up to 4 passengers",
    luggage: "2–3 bags",
  },
  {
    name: "SUV",
    examples: "Ertiga, Innova",
    passengers: "Up to 6–7 passengers",
    luggage: "3–5 bags",
  },
  {
    name: "Innova Crysta",
    examples: "Premium Luxury SUV",
    passengers: "Up to 6–7 passengers",
    luggage: "4–5 bags",
  },
  {
    name: "Tempo Traveller",
    examples: "12–24 Seater",
    passengers: "Large family & group",
    luggage: "Ample luggage space",
  },
];

const benefits = [
  {
    icon: IndianRupee,
    title: "Pay Only for One Way",
    description: "No need to pay for the return journey when you only need a cab for a single-side drop.",
  },
  {
    icon: Clock3,
    title: "Flexible Doorstep Pickup",
    description: "Choose your preferred pickup time and doorstep address anywhere in the city.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Highway Chauffeurs",
    description: "Travel with polite, background-verified drivers experienced in intercity routes.",
  },
  {
    icon: CarFront,
    title: "Clean AC Vehicles",
    description: "Choose from clean, sanitized Sedans, SUVs, and luxury Tempo Travellers.",
  },
];

export default function DynamicOneWayTaxiPage({ city }: Props) {
  const oneWayFaqs = [
    {
      q: `How does one-way taxi billing work from ${city.name}?`,
      a: `When you book a one-way cab from ${city.name}, you only pay for the distance travelled to your destination. There are zero return toll charges and no return driver allowances.`,
    },
    {
      q: `Can I book a one-way cab from ${city.name} for late night or early morning travel?`,
      a: `Yes, our one-way taxi service from ${city.name} operates 24x7. You can schedule your pickup for any time, day or night.`,
    },
    {
      q: `Which vehicles are available for one-way drops from ${city.name}?`,
      a: `We offer Maruti Dzire, Toyota Etios, Honda Amaze (Sedan), Maruti Ertiga, Toyota Innova Crysta (SUV), and 12-24 seater Tempo Travellers for one-way journeys.`,
    },
    {
      q: `Are toll taxes and state permits included in the fare?`,
      a: `Toll taxes, state entry taxes, and parking fees are charged as per actual receipts unless included in a dedicated all-inclusive package confirmed at the time of booking.`,
    },
    {
      q: `How do I confirm my one-way cab booking from ${city.name}?`,
      a: `You can instantly book by calling +91-8377809809 or messaging us on WhatsApp. Our customer support team will send you driver details and trip confirmation immediately.`,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          1. HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <CarFront className="h-7 w-7 text-amber-600" />
            </div>

            {/* Label */}
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
              {city.name} One Way Cab Service • {city.tagline}
            </p>

            {/* Heading */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              One Way Cab from {city.name}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-800 sm:text-lg sm:leading-8">
              Book a comfortable and reliable one-way taxi from {city.name} to{" "}
              {city.popularOutstation.slice(0, 4).join(", ")} and other destinations
              with verified chauffeurs, zero return toll charges, and flat per-km fares.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`https://wa.me/918377809809?text=${encodeURIComponent(
                  `Hello NoidaCab, I want to book a one-way cab from ${city.name}. Please confirm route availability and fare details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-gray-800"
              >
                Book on WhatsApp
                <ArrowRight className="h-4 w-4 text-amber-400" />
              </a>

              <a
                href="tel:918377809809"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-900/20 bg-white/70 px-6 py-3.5 text-sm font-bold text-gray-900 shadow-xs backdrop-blur-sm transition hover:bg-white"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                Call 8377809809
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          2. QUICK BOOKING STRIP
      ====================================================== */}
      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto] md:items-end">
            {/* Pickup */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                Pickup From
              </label>
              <div className="flex h-12 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4">
                <MapPin className="h-5 w-5 text-amber-600" />
                <span className="font-semibold text-gray-900">{city.name}</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden items-center justify-center pb-2 md:flex">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>

            {/* Destination */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                Destination
              </label>
              <div className="flex h-12 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4">
                <Route className="h-5 w-5 text-amber-600" />
                <span className="font-semibold text-gray-900">
                  {city.popularOutstation[0] || "Select Destination"}
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#popular-routes"
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 text-sm font-bold text-gray-950 transition hover:bg-amber-400"
            >
              View Cabs
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. INTRO / BENEFITS
      ====================================================== */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Simple & Convenient
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                A convenient one-way taxi for your journey from {city.name}
              </h2>
              <p className="mt-5 leading-7 text-gray-600">
                Whether you are travelling for business, a pilgrimage circuit, airport
                transfer, or family relocation, a one-way cab from {city.name} gives
                you the ultimate flexibility to travel without paying for an
                unnecessary return trip.
              </p>

              {/* Points */}
              <div className="mt-6 space-y-3">
                {[
                  `Doorstep pickup across all ${city.name} localities`,
                  "Comfortable, clean & sanitized AC vehicles",
                  "Verified highway chauffeurs with route expertise",
                  "Transparent one-way pricing with zero hidden charges",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefit Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                      <Icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <h3 className="mt-4 font-bold text-gray-950">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. AVAILABLE VEHICLES
      ====================================================== */}
      <AvailableVehicles vehicles={vehicles} />

      {/* =====================================================
          5. POPULAR ROUTES FROM THIS CITY (Dynamically sourced from masterRoutes)
      ====================================================== */}
      <div id="popular-routes">
        <PopularCityRoutes
          cityName={city.name}
          vehicleSlug="one-way-taxi"
          vehicleName="One Way Taxi"
          title={`Popular One Way ${city.name} Taxi Routes`}
          subtitle={`Fixed per-km tariffs for the most booked one-way routes from ${city.name}. Zero return charges, verified drivers.`}
          badgeText={`${city.name.toUpperCase()} ONE WAY ROUTES`}
        />
      </div>

      {/* =====================================================
          6. OUR FLEET GUIDE
      ====================================================== */}
      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
              Our Fleet
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Choose a car that fits your one-way journey
            </h2>
            <p className="mt-3 text-gray-600">
              From economical sedans to spacious SUVs and luxury tempo travellers,
              choose the vehicle that best fits your group and luggage size.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {carTypes.map((car) => (
              <div
                key={car.name}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  <CarFront className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-950">{car.name}</h3>
                <p className="mt-1 text-sm font-medium text-amber-600">{car.examples}</p>
                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span>{car.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-gray-400" />
                    <span>{car.luggage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          7. ONE WAY VS ROUND TRIP COMPARISON
      ====================================================== */}
      <section className="bg-amber-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Travel Smarter
              </p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Is a one-way cab right for you?
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-gray-200">
                If you only need transportation from {city.name} to your destination
                and do not require the cab for the return leg, a one-way taxi saves you
                up to 50% compared to round-trip billing.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-2 bg-white/10">
                <div className="p-4 text-sm font-bold text-amber-300">One Way Cab</div>
                <div className="p-4 text-sm font-bold text-white">Round Trip</div>
              </div>

              {[
                ["Single destination drop", "Return journey included"],
                ["Ideal for relocation & airport drop", "Ideal for same-day return"],
                ["Pay only for one-way distance", "Billed for minimum daily km"],
                ["No return toll charges", "Return toll charges apply"],
                ["Flexible destination stay", "Vehicle retained on daily tariff"],
              ].map(([oneWay, roundTrip]) => (
                <div key={oneWay} className="grid grid-cols-2 border-t border-white/10">
                  <div className="p-4 text-sm text-gray-100">{oneWay}</div>
                  <div className="border-l border-white/10 p-4 text-sm text-gray-300">
                    {roundTrip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          8. DOORSTEP PICKUP LOCALITIES IN THIS CITY
      ====================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              {city.name.toUpperCase()} COVERAGE
            </span>
            <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
              Doorstep Pickup Across {city.name}
            </h2>
            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              We provide prompt, on-time doorstep cab pickup from all major sectors,
              railway stations, hotels, and residential hubs in {city.name}.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {city.localities.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50/80 p-3 text-sm font-semibold text-gray-800 transition hover:border-amber-300 hover:bg-amber-50/50"
              >
                <MapPin className="h-4 w-4 shrink-0 text-amber-600" />
                <span className="truncate">{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* =====================================================
          10. WHY CHOOSE US & TESTIMONIALS
      ====================================================== */}
      <WhyChooseCab />
      <CabTestimonials />

      {/* =====================================================
          9. ONE WAY FAQS
      ====================================================== */}
      <section className="bg-white/95 py-12 sm:py-12 border-b border-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              One Way Cab FAQs for {city.name}
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Everything you need to know about booking one-way cabs with NoidaCab.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {oneWayFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xs"
              >
                <h3 className="text-base font-bold text-gray-900 flex items-start gap-2.5">
                  <span className="text-amber-600 font-extrabold shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2.5 pl-6 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          11. FINAL BOOKING CTA
      ====================================================== */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-950 to-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Book Your One Way Cab from {city.name}?
          </h2>
          <p className="mt-4 text-base text-gray-300 max-w-2xl mx-auto">
            Book now with zero advance payment on select routes. Clean cars, transparent
            per-km fares, and 24x7 customer support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918377809809"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-base font-bold text-gray-950 hover:bg-amber-400 transition shadow-lg"
            >
              <PhoneCall className="h-5 w-5" />
              Call +91-8377809809
            </a>
            <a
              href={`https://wa.me/918377809809?text=${encodeURIComponent(
                `Hi, I want to book a one-way cab from ${city.name}. Please share rates and available cars.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800/80 px-7 py-3.5 text-base font-bold text-white hover:bg-gray-800 transition"
            >
              Book via WhatsApp
              <ArrowRight className="h-5 w-5 text-amber-400" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
