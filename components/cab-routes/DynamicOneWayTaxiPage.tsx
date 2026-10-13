"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  CarTaxiFront,
  CheckCircle2,
  Clock3,
  IndianRupee,
  MapPin,
  Minus,
  PhoneCall,
  Plus,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { CityInfo } from "@/lib/cityData";
import { vehicles } from "@/data/vehicles";
import AvailableVehicles from "@/components/routes/one-way/AvailableVehicles";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import WhyChooseCards from "@/components/home/WhyChooseCards";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTA";
import { getCityPairInfo } from "@/data/popularRoutesData";

interface Props {
  city: CityInfo;
}

const benefits = [
  {
    icon: IndianRupee,
    title: "Pay for One Way",
    description:
      "No need to pay for the return journey when you only need a cab for one side.",
  },
  {
    icon: Clock3,
    title: "Flexible Pickup",
    description:
      "Choose a convenient pickup time and travel according to your schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Travel with professional and experienced drivers familiar with intercity routes.",
  },
  {
    icon: CarFront,
    title: "Comfortable Cars",
    description:
      "Choose from comfortable sedan, SUV and larger vehicles according to your group size.",
  },
];

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
    examples: "Premium SUV",
    passengers: "Up to 6–7 passengers",
    luggage: "4–5 bags",
  },
  {
    name: "Tempo Traveller",
    examples: "12–20+ Seater",
    passengers: "Large groups",
    luggage: "Based on vehicle",
  },
];

const bookingSteps = [
  {
    number: "01",
    icon: Route,
    title: "Choose Your Route",
    description:
      "Select your pickup location, destination and travel date to get started.",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Book Your Cab",
    description:
      "Choose your preferred vehicle and confirm your booking with our team.",
  },
  {
    number: "03",
    icon: CarTaxiFront,
    title: "Enjoy Your Ride",
    description:
      "Your cab arrives at the scheduled pickup point and takes you safely to your destination.",
  },
];

export default function DynamicOneWayTaxiPage({ city }: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const topDestinations = city.popularOutstation.slice(0, 5).join(", ");
  const citySlug = city.slug;

  // Build dynamic popular one-way routes
  const dynamicOneWayRoutes = city.popularOutstation.slice(0, 6).map((dest) => {
    const destSlug = dest.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const pair = getCityPairInfo(city.name, dest);
    return {
      from: city.name,
      to: dest,
      slug: `/route/${citySlug}-to-${destSlug}-one-way-taxi`,
      distance: `${pair.distanceKm} km`,
      time: pair.duration,
    };
  });

  const oneWayFaqs = [
    {
      question: `How does one-way taxi fare calculation work from ${city.name}?`,
      answer: `When you book a one-way cab from ${city.name}, you only pay for the distance travelled on that single drop. There are zero return toll charges, no empty return fuel costs, and no return driver allowances, saving you up to 40% to 50% compared to round-trip fares.`,
    },
    {
      question: `Can I schedule a one-way cab from ${city.name} for early morning or late night?`,
      answer: `Yes, NoidaCab provides 24x7 one-way cab services from ${city.name}. You can schedule your pickup for any time, day or night, with guaranteed on-time doorstep arrival.`,
    },
    {
      question: `Which vehicle types are available for one-way drops from ${city.name}?`,
      answer: `We provide clean, sanitized AC Sedan cabs (Maruti Dzire, Toyota Etios, Honda Amaze), 6-seater MUVs (Maruti Ertiga), premium 7-seater SUVs (Innova Crysta), and 12-to-24 seater Tempo Travellers for larger group journeys.`,
    },
    {
      question: `Are toll taxes and state permits included in the fare?`,
      answer: `Our upfront fare estimates cover vehicle rental, fuel charges, and driver allowances. State border entry taxes and highway toll receipts are charged transparently based on actual usage with zero extra markups.`,
    },
    {
      question: `How can I book a one-way cab from ${city.name}?`,
      answer: `You can book instantly online or call our 24x7 booking helpline at +91-8377809809 or chat with our team on WhatsApp. We provide instant booking confirmation with driver and vehicle details.`,
    },
  ];

  const schemaTaxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `One Way Taxi in ${city.name} - NoidaCab`,
    serviceType: "One Way Outstation Taxi",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
      telephone: "+91-8377809809",
      url: "https://www.noidacab.com",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    description: `Book affordable one-way cab service from ${city.name} to ${topDestinations}. Pay only one-side fare with verified chauffeurs.`,
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: oneWayFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTaxiService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      {/* =====================================================
          1. HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-100">
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
              {city.name} One Way Cab Service
            </p>

            {/* Heading */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              One Way Cab from {city.name}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-800 sm:text-lg sm:leading-8">
              Book a comfortable and reliable one-way taxi from {city.name} to {topDestinations} and
              other popular destinations with professional drivers and transparent fares.
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
                  {city.popularOutstation[0] || "Select Your City"}
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#available-vehicles"
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
      <section className="py-12 sm:py-12 border-b border-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Simple & Convenient
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                A convenient one-way taxi for your next trip from {city.name}
              </h2>
              <p className="mt-5 leading-7 text-gray-600">
                Whether you are travelling for work, a family vacation, airport transfer, or an
                intercity drop, a one-way cab from {city.name} gives you the flexibility to travel
                without paying for an unnecessary return journey.
              </p>

              {/* Points */}
              <div className="mt-6 space-y-3">
                {[
                  `Door-to-door pickup across all ${city.name} localities`,
                  "Comfortable, clean & sanitized AC vehicles",
                  "Experienced local drivers with route expertise",
                  "Transparent one-way pricing with zero return tolls",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefit cards */}
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
                    <p className="mt-2 text-sm leading-6 text-gray-600">{benefit.description}</p>
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
      <section id="available-vehicles" className="scroll-mt-20">
        <AvailableVehicles vehicles={vehicles} />
      </section>


      

      {/* =====================================================
          7. OUR FLEET
      ====================================================== */}
      <section className="border-y border-gray-200 bg-white/95 py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
              Our Fleet
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Choose a car that fits your journey
            </h2>
            <p className="mt-3 text-gray-600">
              From economical sedans to spacious SUVs and tempo travellers, choose the vehicle according
              to your travel requirements.
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
          8. ONE WAY VS ROUND TRIP
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
                If you only need transportation from {city.name} to your destination and do not require
                the same vehicle for the return journey, a one-way taxi saves you up to 50% compared to
                round-trip billing.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-2 bg-white/10">
                <div className="p-4 text-sm font-bold text-amber-300">One Way Cab</div>
                <div className="p-4 text-sm font-bold text-white">Round Trip</div>
              </div>

              {[
                ["Single destination journey", "Return journey included"],
                ["Ideal for relocation & drop", "Ideal for return travel"],
                ["Pay for one-way travel", "Designed for both directions"],
                ["Flexible destination drop", "Vehicle retained for return"],
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
          9. SERVICE COVERAGE
      ====================================================== */}
      <section className="bg-white/95 py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Destinations
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
                One-way taxi service from {city.name} to major cities
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                We provide prompt one-way taxi options from {city.name} to destinations across Delhi NCR,
                Uttar Pradesh, Rajasthan, Haryana, Uttarakhand and other nearby regions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {city.popularOutstation.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-amber-600" />
                  <span className="text-sm font-semibold text-gray-800">
                    {city.name} to {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          10. SERVICE AREAS (LOCALITIES)
      ====================================================== */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">
              Service Areas
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              One Way Taxi Service from All Areas of {city.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Book a one-way taxi from your locality in {city.name} to {topDestinations} and other popular
              destinations.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {city.localities.map((locality) => (
                <div
                  key={locality}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm transition group-hover:bg-amber-100">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="min-w-0 text-sm font-semibold text-gray-800 transition group-hover:text-amber-700">
                    {locality}
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-amber-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom information banner */}
          <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
                  <CarFront className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-950 sm:text-base">
                    Taxi pickup available across {city.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
                    From residential sectors and business hubs to metro stations and airport terminals,
                    book a one-way cab from your nearby area.
                  </p>
                </div>
              </div>

              <a
                href="#popular-city-routes"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                View Routes
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          11. BOOK YOUR RIDE IN 3 SIMPLE STEPS
      ====================================================== */}
      <section
        id="how-it-works"
        className="scroll-mt-20 border-t border-gray-200 bg-white/95 py-12 sm:py-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">
              Simple Booking
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Book Your Ride in 3 Simple Steps
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
              Booking a one-way taxi from {city.name} is quick and easy. Choose your route, confirm your
              cab, and enjoy a comfortable journey.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-gray-200 lg:block" />

            <div className="grid gap-6 lg:grid-cols-3">
              {bookingSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg sm:p-8"
                  >
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-amber-50 shadow-sm">
                      <Icon className="h-7 w-7 text-amber-600" />
                    </div>
                    <div className="mt-5">
                      <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold tracking-wider text-gray-500">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-950">{step.title}</h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Quick confirmation
            </div>
            <div className="hidden h-4 w-px bg-gray-300 sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShieldCheck className="h-5 w-5 text-amber-600" />
              Reliable cab service
            </div>
            <div className="hidden h-4 w-px bg-gray-300 sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CarFront className="h-5 w-5 text-amber-600" />
              Comfortable vehicles
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          12. WHY CHOOSE NOIDACAB CARDS
      ====================================================== */}
      <section className="">
        <WhyChooseCards />
      </section>

      {/* =====================================================
          13. TESTIMONIALS & REVIEWS
      ====================================================== */}
      <section className="">
        <Testimonials />
      </section>

      {/* =====================================================
          14. FREQUENTLY ASKED QUESTIONS
      ====================================================== */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl">
              Frequently Asked Questions About One Way Cabs in {city.name}
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Everything you need to know before booking your one-way ride with NoidaCab.
            </p>
          </div>

          <div className="space-y-4">
            {oneWayFaqs.map((faq, index) => {
              const open = activeFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl bg-white shadow-xs border border-gray-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition hover:bg-gray-50 cursor-pointer"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 shrink-0 ml-3">
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {open && (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-3">
                      <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          6. POPULAR CITY ROUTES SECTION (USER REQUESTED)
      ====================================================== */}
      <PopularCityRoutes
        cityName={city.name}
        vehicleSlug="one-way-taxi"
        vehicleName="One Way Taxi"
        title={`Popular One Way Routes from ${city.name}`}
        subtitle={`Explore top-rated one-way routes from ${city.name} with transparent per-km billing and verified drivers.`}
        badgeText={`${city.name.toUpperCase()} ONE WAY CORRIDORS`}
      />

      {/* =====================================================
          15. FINAL CTA SECTION
      ====================================================== */}
      <section>
        <CTASection />
      </section>
    </main>
  );
}
