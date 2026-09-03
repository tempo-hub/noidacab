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
  PhoneCall,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import WhyChooseCards from "@/components/home/WhyChooseCards";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTA";
import AvailableVehicles from "@/components/routes/one-way/AvailableVehicles";
import { vehicles } from "@/data/vehicles";
import { noidaLocalities } from "@/data/routes/noida";

/* =========================================================
   POPULAR ONE-WAY ROUTES
========================================================= */

const oneWayRoutes = [
  {
    from: "Noida",
    to: "Delhi",
    slug: "/noida-to-delhi-one-way-taxi",
    distance: "35–45 km",
    time: "1–2 Hours",
  },
  {
    from: "Noida",
    to: "Gurgaon",
    slug: "/noida-to-gurgaon-one-way-taxi",
    distance: "55–65 km",
    time: "1.5–2.5 Hours",
  },
  {
    from: "Noida",
    to: "Agra",
    slug: "/noida-to-agra-one-way-taxi",
    distance: "165–180 km",
    time: "3–4 Hours",
  },
  {
    from: "Noida",
    to: "Jaipur",
    slug: "/noida-to-jaipur-one-way-taxi",
    distance: "280–300 km",
    time: "5–6 Hours",
  },
  {
    from: "Noida",
    to: "Lucknow",
    slug: "/noida-to-lucknow-one-way-taxi",
    distance: "500–550 km",
    time: "8–10 Hours",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

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
      "Travel with professional and experienced drivers familiar with Noida and nearby routes.",
  },
  {
    icon: CarFront,
    title: "Comfortable Cars",
    description:
      "Choose from comfortable sedan, SUV and larger vehicles according to your group size.",
  },
];

/* =========================================================
   FLEET
========================================================= */

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

/* =========================================================
   BOOKING STEPS
========================================================= */

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

/* =========================================================
   SERVICE COVERAGE
========================================================= */

const coverageCities = [
  "Delhi",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
  "Agra",
  "Jaipur",
  "Lucknow",
  "Haridwar",
  "Dehradun",
  "Mathura",
  "Vrindavan",
  "Chandigarh",
];

/* =========================================================
   METADATA
========================================================= */

export const metadata = {
  title: "One Way Cab from Noida | Affordable One Way Taxi | NoidaCab",
  description:
    "Book affordable one way cabs from Noida to Delhi, Gurgaon, Agra, Jaipur, Lucknow and other cities. Comfortable cars, professional drivers and transparent fares.",
};

/* =========================================================
   PAGE
========================================================= */

export default function OneWayPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* =====================================================
          1. HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-100">

        {/* Background decoration */}
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
              Noida One Way Cab Service
            </p>

            {/* Heading */}
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              One Way Cab from Noida
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-800 sm:text-lg sm:leading-8">
              Book a comfortable and reliable one-way taxi from Noida to
              Delhi, Gurgaon, Agra, Jaipur, Lucknow and other popular
              destinations with professional drivers and transparent fares.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="#popular-routes"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Explore Routes
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-gray-900/20 bg-white/70 px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:bg-white"
              >
                How It Works
              </Link>

            </div>
          </div>
        </div>
      </section>


      


      {/* =====================================================
          3. QUICK BOOKING STRIP
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

                <span className="font-semibold text-gray-900">
                  Noida
                </span>

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
                  Select Your City
                </span>

              </div>
            </div>


            {/* CTA */}
            <Link
              href="#popular-routes"
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 text-sm font-bold text-gray-950 transition hover:bg-amber-400"
            >
              View Cabs

              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          4. INTRO / BENEFITS
      ====================================================== */}

      <section className="py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* Left content */}
            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Simple & Convenient
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                A convenient one-way taxi for your next trip
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Whether you are travelling for work, a family trip, airport
                transfer or an intercity journey, a one-way cab from Noida
                gives you the flexibility to travel without paying for an
                unnecessary return journey.
              </p>


              {/* Points */}
              <div className="mt-6 space-y-3">

                {[
                  "Door-to-door pickup and drop",
                  "Comfortable AC vehicles",
                  "Experienced local drivers",
                  "Transparent one-way pricing",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
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

                    <h3 className="mt-4 font-bold text-gray-950">
                      {benefit.title}
                    </h3>

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
          5. AVAILABLE VEHICLES
      ====================================================== */}

      <section>
        <AvailableVehicles vehicles={vehicles} />
      </section>


      


      {/* =====================================================
          7. POPULAR ROUTES
      ====================================================== */}

      <section
        id="popular-routes"
        className="scroll-mt-20 bg-white py-16 sm:py-20"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Popular Routes
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
                One Way Taxi Routes from Noida
              </h2>

              <p className="mt-3 max-w-2xl text-gray-600">
                Explore popular one-way routes from Noida and find the right
                taxi for your journey.
              </p>

            </div>


            <div className="hidden items-center gap-2 text-sm font-semibold text-gray-500 sm:flex">

              <Sparkles className="h-4 w-4 text-amber-500" />

              Popular destinations

            </div>

          </div>


          {/* Route cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {oneWayRoutes.map((route) => (

              <Link
                key={route.slug}
                href={route.slug}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >

                {/* Route heading */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                      <MapPin className="h-5 w-5 text-amber-600" />
                    </div>

                    <div>

                      <p className="text-xs font-medium text-gray-500">
                        One Way Cab
                      </p>

                      <h3 className="text-lg font-bold text-gray-950">
                        {route.from}{" "}
                        <span className="text-amber-600">
                          →
                        </span>{" "}
                        {route.to}
                      </h3>

                    </div>
                  </div>


                  <ArrowRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-amber-600" />

                </div>


                {/* Details */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-gray-50 p-3">

                    <div className="flex items-center gap-2">

                      <Route className="h-4 w-4 text-amber-600" />

                      <span className="text-xs text-gray-500">
                        Distance
                      </span>

                    </div>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {route.distance}
                    </p>

                  </div>


                  <div className="rounded-xl bg-gray-50 p-3">

                    <div className="flex items-center gap-2">

                      <Clock3 className="h-4 w-4 text-amber-600" />

                      <span className="text-xs text-gray-500">
                        Travel
                      </span>

                    </div>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {route.time}
                    </p>

                  </div>

                </div>


                {/* CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                  <span className="text-sm font-semibold text-gray-700">
                    View Route
                  </span>

                  <span className="text-sm font-bold text-amber-600">
                    Explore →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          8. OUR FLEET
      ====================================================== */}

      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
              Our Fleet
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Choose a car that fits your journey
            </h2>

            <p className="mt-3 text-gray-600">
              From economical sedans to spacious SUVs and tempo travellers,
              choose the vehicle according to your travel requirements.
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

                <h3 className="mt-5 text-lg font-bold text-gray-950">
                  {car.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-amber-600">
                  {car.examples}
                </p>

                <div className="mt-5 space-y-3 text-sm text-gray-600">

                  <div className="flex items-center gap-2">

                    <Users className="h-4 w-4 text-gray-400" />

                    {car.passengers}

                  </div>

                  <div className="flex items-center gap-2">

                    <BadgeCheck className="h-4 w-4 text-gray-400" />

                    {car.luggage}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          9. ONE WAY VS ROUND TRIP
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

              <p className="mt-4 max-w-xl leading-7 text-gray-300">
                If you only need transportation from Noida to your destination
                and do not require the same vehicle for the return journey, a
                one-way taxi can be a convenient option.
              </p>

            </div>


            {/* Comparison */}
            <div className="overflow-hidden rounded-2xl border border-white/10">

              <div className="grid grid-cols-2 bg-white/5">

                <div className="p-4 text-sm font-bold">
                  One Way Cab
                </div>

                <div className="p-4 text-sm font-bold">
                  Round Trip
                </div>

              </div>


              {[
                [
                  "Single destination journey",
                  "Return journey included",
                ],
                [
                  "Ideal for relocation & drop",
                  "Ideal for return travel",
                ],
                [
                  "Pay for one-way travel",
                  "Designed for both directions",
                ],
                [
                  "Flexible destination drop",
                  "Vehicle retained for return",
                ],
              ].map(([oneWay, roundTrip]) => (

                <div
                  key={oneWay}
                  className="grid grid-cols-2 border-t border-white/10"
                >

                  <div className="p-4 text-sm text-gray-200">
                    {oneWay}
                  </div>

                  <div className="border-l border-white/10 p-4 text-sm text-gray-200">
                    {roundTrip}
                  </div>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          10. SERVICE COVERAGE
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Destinations
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-950 sm:text-4xl">
                One-way taxi service from Noida to major cities
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                We provide one-way taxi options from Noida to destinations
                across Delhi NCR, Uttar Pradesh, Rajasthan, Uttarakhand and
                other nearby regions.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

              {coverageCities.map((city) => (

                <div
                  key={city}
                  className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                >

                  <MapPin className="h-4 w-4 shrink-0 text-amber-600" />

                  <span className="text-sm font-semibold text-gray-800">
                    Noida to {city}
                  </span>

                </div>

              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
    NOIDA ONE-WAY SERVICE AREAS
===================================================== */}
<section className="border-t border-gray-200 bg-white py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">
        Service Areas
      </p>

      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
        One Way Taxi Service from All Areas of Noida
      </h2>

      <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
        Book a one-way taxi from your locality in Noida to Delhi,
        Gurgaon, Agra, Jaipur, Lucknow and other popular destinations.
      </p>
    </div>

    {/* Localities */}
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {noidaLocalities.map((locality) => (
          <Link
            key={locality.slug}
            href={`/noida/${locality.slug}`}
            className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:shadow-sm"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm transition group-hover:bg-amber-100">
              <MapPin className="h-4 w-4 text-amber-600" />
            </div>

            <span className="min-w-0 text-sm font-semibold text-gray-800 transition group-hover:text-amber-700">
              {locality.name}
            </span>

            <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-amber-600" />
          </Link>
        ))}
      </div>
    </div>

    {/* Bottom information */}
    <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white">
            <CarFront className="h-5 w-5 text-amber-600" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-950 sm:text-base">
              Taxi pickup available across Noida
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
              From residential sectors and business hubs to metro stations
              and major landmarks, book a one-way cab from your nearby area.
            </p>
          </div>
        </div>

        <Link
          href="/noida"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
        >
          View Routes
          <ArrowRight className="h-4 w-4" />
        </Link>

      </div>
    </div>

  </div>
</section>


      {/* =====================================================
          11. BOOK YOUR RIDE IN 3 STEPS
          NEW SECTION - BEFORE FAQ
      ====================================================== */}

      <section
        id="how-it-works"
        className="scroll-mt-20 border-t border-gray-200 bg-white py-16 sm:py-20"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">
              Simple Booking
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
              Book Your Ride in 3 Simple Steps
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
              Booking a one-way taxi from Noida is quick and easy. Choose your
              route, confirm your cab and enjoy a comfortable journey.
            </p>

          </div>


          {/* Steps */}
          <div className="relative mt-12">

            {/* Desktop connecting line */}
            <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-gray-200 lg:block" />


            <div className="grid gap-6 lg:grid-cols-3">

              {bookingSteps.map((step) => {

                const Icon = step.icon;

                return (

                  <div
                    key={step.number}
                    className="relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg sm:p-8"
                  >

                    {/* Icon */}
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-amber-50 shadow-sm">

                      <Icon className="h-7 w-7 text-amber-600" />

                    </div>


                    {/* Step */}
                    <div className="mt-5">

                      <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-bold tracking-wider text-gray-500">
                        STEP {step.number}
                      </span>

                    </div>


                    {/* Title */}
                    <h3 className="mt-4 text-xl font-bold text-gray-950">
                      {step.title}
                    </h3>


                    {/* Description */}
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
                      {step.description}
                    </p>

                  </div>

                );

              })}

            </div>
          </div>


          {/* Trust points */}
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
          6. WHY CHOOSE NOIDACAB
      ====================================================== */}

      <section className="border-y border-gray-200 bg-gray-50 py-16 sm:py-20">
        <WhyChooseCards />
      </section>

      {/* =====================================================
          2. REVIEWS
      ====================================================== */}

      <section className="border-b border-gray-200 bg-white py-14 sm:py-16">
        <Testimonials />
      </section>


      {/* =====================================================
          12. FAQ
      ====================================================== */}

      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20">

        <FAQ />

      </section>


      {/* =====================================================
          13. FINAL CTA
      ====================================================== */}

      <section>
        <CTASection />
      </section>

    </main>
  );
}