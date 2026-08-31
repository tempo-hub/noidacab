import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  CarFront,
  CheckCircle2,
  Clock3,
  Gauge,
  MapPin,
  ShieldCheck,
  Snowflake,
  Users,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";
import { noidaLocalities } from "@/data/routes/noida";

export const metadata: Metadata = {
  title: "SUV Taxi in Noida | From ₹1,650 + 10% OFF | Book Now",

  description:
    "Check Noida SUV cab fare. Complete rate options with Ertiga, Innova & SUV pricing. No hidden charges. Book now or call 8448445504.",
};
const suvVehicles = vehicles.filter(
  (vehicle) => vehicle.category?.toLowerCase() === "suv"
);

export default function SUVPage() {
  return (
    <main className="bg-slate-50">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden py-20 bg-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 ">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                <CarFront className="h-4 w-4" />
                Noida SUV Taxi Service
              </div>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                SUV Taxi in Noida
                <span className="block text-orange-500">
                  Ertiga &amp; Innova
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Book comfortable SUV taxis in Noida for local travel,
                airport transfers, family trips and outstation journeys.
                Choose from our Ertiga and Innova taxi options.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/noida-to-delhi-suv-taxi"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
                >
                  Noida to Delhi SUV Taxi
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#suv-fleet"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  View SUV Fleet
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Ertiga
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Innova
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  AC Vehicles
                </div>
              </div>
            </div>

            {/* HERO VEHICLES */}
            <div className="grid grid-cols-2 gap-4">
              {suvVehicles.slice(0, 2).map((vehicle) => (
                <div
                  key={vehicle.slug}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
                >
                  <div className="relative h-40 w-full overflow-hidden rounded-xl sm:h-44">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} SUV taxi in Noida`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="border-t border-slate-200 bg-white p-4">
                    <h2 className="font-bold text-slate-900">
                      {vehicle.name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      SUV Taxi
                    </p>

                    <p className="mt-3 font-bold text-orange-600">
                      {vehicle.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST BAR
      ===================================================== */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          <TrustItem
            icon={<CarFront />}
            title="SUV Fleet"
            text="Ertiga & Innova"
          />

          <TrustItem
            icon={<Snowflake />}
            title="AC Vehicles"
            text="Comfortable travel"
          />

          <TrustItem
            icon={<ShieldCheck />}
            title="Reliable Service"
            text="Local & outstation"
          />

          <TrustItem
            icon={<Clock3 />}
            title="Flexible Booking"
            text="One way & round trip"
          />
        </div>
      </section>

      {/* =====================================================
          SUV FLEET
      ===================================================== */}
      <section id="suv-fleet" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our SUV Fleet
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Ertiga &amp; Innova SUV Taxi in Noida
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Choose a spacious SUV taxi based on your seating,
              luggage and travel requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {suvVehicles.map((vehicle) => (
              <SUVCard
                key={vehicle.slug}
                vehicle={vehicle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOIDA TO DELHI SUV
      ===================================================== */}
      <section className="bg-[#ffb300] py-20 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-900">
                Popular Route
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Noida to Delhi SUV Taxi
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-900">
                Travel comfortably from Noida to Delhi with an Ertiga
                or Innova SUV taxi. SUV cabs are a practical choice
                for families, business travellers, airport transfers
                and passengers carrying additional luggage.
              </p>

              <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 ">
                <RouteFeature text="Ertiga" />
                <RouteFeature text="Innova" />
                <RouteFeature text="AC Cab" />
                <RouteFeature text="One Way" />
              </div>

              <Link
                href="/noida-to-delhi-suv-taxi"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Book Noida to Delhi SUV Taxi
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold">
                Available SUV Models
              </h3>

              <div className="mt-5 space-y-3">
                {suvVehicles.map((vehicle) => (
                  <Link
                    key={vehicle.slug}
                    href={`/noida-to-delhi-${vehicle.slug}-taxi`}
                    className="group flex items-center justify-between rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
                  >
                    <div>
                      <p className="font-semibold">
                        {vehicle.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-900">
                        {vehicle.seats} seats • {vehicle.luggage} bags
                      </p>
                    </div>

                    <ArrowRight className="h-5 w-5 text-orange-400 transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NOIDA LOCATION SECTION
      ===================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              SUV Taxi Locations
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Book SUV Taxi from Popular Noida Locations
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Book an Ertiga or Innova taxi from popular sectors and
              localities across Noida for Delhi, airport and
              outstation travel.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {noidaLocalities.map((location) => {
              const locationName =
                location.name ?? location.slug;

              const locationSlug = location.slug;

              return (
                <Link
                  key={locationSlug}
                  href={`/noida/${locationSlug}/innova-crysta`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                        <MapPin className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 font-semibold text-slate-900">
                        SUV Taxi from {locationName}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Ertiga &amp; Innova available
                      </p>
                    </div>

                    <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-orange-500 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY SUV
      ===================================================== */}
      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Why Choose SUV Taxi
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Comfortable Travel with More Space
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              SUV taxis are suitable for families, airport transfers,
              business trips and longer journeys from Noida.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Benefit
              icon={<Users />}
              title="Spacious Seating"
              text="Comfortable seating for family and group travel."
            />

            <Benefit
              icon={<BriefcaseBusiness />}
              title="Luggage Space"
              text="Carry more luggage for airport and outstation trips."
            />

            <Benefit
              icon={<Snowflake />}
              title="Air Conditioned"
              text="Enjoy comfortable AC travel during your journey."
            />

            <Benefit
              icon={<Gauge />}
              title="Local & Outstation"
              text="Suitable for Noida travel and longer routes."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SUV FEATURES
      ===================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              SUV Features
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Features Available with Our SUV Cabs
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Air Conditioning"
              description="Travel comfortably with air-conditioned SUV taxis."
              enabled={suvVehicles.some(
                (vehicle) => vehicle.airCondition
              )}
            />

            <FeatureCard
              title="GPS"
              description="GPS-enabled vehicles for reliable navigation."
              enabled={suvVehicles.some(
                (vehicle) => vehicle.gps
              )}
            />

            <FeatureCard
              title="Driver Choice"
              description="Driver choice option available with selected vehicles."
              enabled={suvVehicles.some(
                (vehicle) => vehicle.driverChoice
              )}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR ROUTES
      ===================================================== */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Popular SUV Routes
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Popular Routes from Noida
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore SUV taxi options for popular destinations from
              Noida.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <RouteCard
              title="Noida to Delhi SUV Taxi"
              href="/noida-to-delhi-suv-taxi"
            />

            <RouteCard
              title="Noida to Gurgaon SUV Taxi"
              href="/noida-to-gurgaon-suv-taxi"
            />

            <RouteCard
              title="Noida to Agra SUV Taxi"
              href="/noida-to-agra-suv-taxi"
            />

            <RouteCard
              title="Noida to Jaipur SUV Taxi"
              href="/noida-to-jaipur-suv-taxi"
            />

            <RouteCard
              title="Noida to Delhi Airport SUV Taxi"
              href="/noida-to-delhi-airport-suv-taxi"
            />

            <RouteCard
              title="Noida Outstation SUV Taxi"
              href="/noida-outstation-suv-taxi"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              SUV Taxi Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <FAQ
              question="Which SUV taxis are available in Noida?"
              answer="NoidaCab offers SUV taxi options such as Ertiga and Innova for local travel, airport transfers and outstation journeys."
            />

            <FAQ
              question="Can I book an SUV taxi from Noida to Delhi?"
              answer="Yes. You can book an Ertiga or Innova SUV taxi from Noida to Delhi for one-way or other available travel requirements."
            />

            <FAQ
              question="How many passengers can travel in an Ertiga?"
              answer="The available Ertiga taxi configuration on NoidaCab provides seating for up to 6 passengers."
            />

            <FAQ
              question="Can I book an SUV taxi from Noida locations?"
              answer="Yes. SUV taxi services can be booked from multiple Noida sectors and localities."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Need an SUV Taxi from Noida?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Choose Ertiga or Innova for comfortable local travel,
            airport transfers, Delhi trips and outstation journeys.
          </p>

          <Link
            href="/noida-to-delhi-suv-taxi"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
          >
            Book Noida to Delhi SUV Taxi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   SUV CARD
============================================================= */

function SUVCard({
  vehicle,
}: {
  vehicle: (typeof suvVehicles)[number];
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Vehicle image */}
      <div className="relative aspect-[16/9] bg-slate-50">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} SUV taxi in Noida`}
          fill
          className="object-cover h-12"
        />

        <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          SUV
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-950">
              {vehicle.name} Taxi in Noida
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Comfortable SUV for local and outstation travel
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-500">
              Starting
            </p>

            <p className="text-lg font-bold text-orange-600">
              {vehicle.price}
            </p>
          </div>
        </div>

        <p className="mt-5 leading-7 text-slate-600">
          Book a {vehicle.name} taxi in Noida for family trips,
          airport transfers, local travel and outstation journeys.
          This SUV provides comfortable seating and useful luggage
          capacity for your journey.
        </p>

        {/* Specifications */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Spec
            icon={<Users />}
            label="Seats"
            value={vehicle.seats}
          />

          <Spec
            icon={<BriefcaseBusiness />}
            label="Luggage"
            value={`${vehicle.luggage} Bags`}
          />

          <Spec
            icon={<CarFront />}
            label="Doors"
            value={vehicle.doors}
          />

          <Spec
            icon={<Snowflake />}
            label="AC"
            value={vehicle.airCondition ? "Yes" : "No"}
          />
        </div>

        {/* Features */}
        <div className="mt-6 flex flex-wrap gap-2">
          {vehicle.airCondition && (
            <FeatureBadge text="Air Conditioned" />
          )}

          {vehicle.gps && (
            <FeatureBadge text="GPS" />
          )}

          {vehicle.driverChoice && (
            <FeatureBadge text="Driver Choice" />
          )}
        </div>

        {/* CTA */}
        <div className="mt-7 border-t border-slate-100 pt-5">
          <Link
            href={`/noida-to-delhi-${vehicle.slug}-taxi`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            View {vehicle.name} Taxi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =============================================================
   SPEC
============================================================= */

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="flex items-center gap-2 text-orange-500">
        {icon}

        <span className="text-xs font-medium text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-1 text-sm font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}

/* =============================================================
   TRUST ITEM
============================================================= */

function TrustItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-orange-50 p-2 text-orange-600">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900">
          {title}
        </p>

        <p className="text-xs text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

/* =============================================================
   ROUTE FEATURE
============================================================= */

function RouteFeature({
  text,
}: {
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-sm font-medium text-slate-900">
      {text}
    </div>
  );
}

/* =============================================================
   BENEFIT
============================================================= */

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex justify-between item-center rounded-2xl border border-slate-200 bg-white p-6">
      

      <div className="">
        <h3 className="mt-4 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {text}
      </p>
      </div>

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
        {icon}
      </div>
    </div>
  );
}

/* =============================================================
   FEATURE CARD
============================================================= */

function FeatureCard({
  title,
  description,
  enabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
          <CheckCircle2 className="h-5 w-5" />
        </div>

        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {enabled ? description : "Availability may vary by vehicle."}
      </p>
    </div>
  );
}

/* =============================================================
   FEATURE BADGE
============================================================= */

function FeatureBadge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
      <CheckCircle2 className="h-3.5 w-3.5" />
      {text}
    </span>
  );
}

/* =============================================================
   ROUTE CARD
============================================================= */

function RouteCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
    >
      <div>
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Ertiga &amp; Innova available
        </p>
      </div>

      <ArrowRight className="h-5 w-5 text-orange-500 transition group-hover:translate-x-1" />
    </Link>
  );
}

/* =============================================================
   FAQ
============================================================= */

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5">
      <summary className="cursor-pointer list-none font-semibold text-slate-900">
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>

          <span className="text-xl text-orange-500 transition group-open:rotate-45">
            +
          </span>
        </div>
      </summary>

      <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">
        {answer}
      </p>
    </details>
  );
}