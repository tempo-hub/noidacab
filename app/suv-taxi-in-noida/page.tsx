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
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";
import { noidaLocalities } from "@/data/routes/noida";

export const metadata: Metadata = {
  title: "SUV Taxi in Noida - NoidaCab ₹13–₹16/km | Book Now",
  description:
    "Check Noida SUV cab fare. Complete rate options with Ertiga, Innova & SUV pricing. No hidden charges. Book now or call 8377809809.",
};

const suvVehicles = vehicles.filter(
  (vehicle) => vehicle.category?.toLowerCase() === "suv"
);

export default function SUVPage() {
  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    "Hello NoidaCab, I want to book an SUV taxi (Ertiga / Innova) in Noida. Please share immediate availability and fare details."
  )}`;

  return (
    <main className="bg-white/95 text-slate-900">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left Hero Content */}
            <div>
              {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/75 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                6 & 7-Seater Chauffeur Driven Cabs
              </div> */}

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                SUV Taxi in Noida
                <span className="mt-1 block text-amber-700">
                  Ertiga &amp; Innova Crysta
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-800 sm:text-lg">
                Spacious SUV taxi bookings in Noida for airport drops, Delhi NCR office commutes, family road trips, and outstation tours. Clean AC cabins, ample luggage boot space, and verified drivers.
              </p>

              {/* Primary Call to Action */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  <CarFront className="h-4 w-4 text-amber-400" />
                  Book SUV on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:918377809809"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-xs transition hover:border-amber-400 hover:bg-amber-50"
                >
                  <PhoneCall className="h-4 w-4 text-amber-600" />
                  Call 8377809809
                </a>
              </div>


            </div>

            {/* Right Hero Vehicle Preview Grid */}
            <div>


              <div className="grid grid-cols-2 gap-4">
                {suvVehicles.slice(0, 2).map((vehicle) => (
                  <div
                    key={vehicle.slug}
                    className="group overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-3.5 shadow-xl shadow-amber-900/5 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-44">
                      <Image
                        src={vehicle.image || "/cabs/ertiga.webp"}
                        alt={`${vehicle.name} SUV taxi in Noida`}
                        fill
                        sizes="(max-width: 640px) 50vw, 30vw"
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs index-100">
                        {vehicle.name}
                      </span>
                    </div>

                    <div className="mt-3 px-1">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {vehicle.seats} Seater AC
                      </p>
                      <p className="mt-0.5 text-base font-black text-slate-950">
                        {vehicle.price}
                      </p>
                    </div>
                  </div>
                ))}


              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-800 sm:text-sm">
                {/* Rating */}
                <div className="flex items-center gap-1.5 font-bold text-slate-950">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>4.9/5 Rating</span>
                  <span className="font-normal text-slate-600">(1,250+ Reviews)</span>
                </div>

                <span className="text-slate-400">•</span>

                {/* Active / Happy Users */}
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <Users className="h-4 w-4 text-amber-700" />
                  <span>15,000+ Happy Commuters</span>
                </div>

                <span className="text-slate-400">•</span>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST BAR
      ===================================================== */}
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-3 lg:px-8">
          <TrustItem
            icon={<Snowflake className="h-5 w-5" />}
            title="Chilled AC"
            text="Dual climate control"
          />
          <TrustItem
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Verified Chauffeurs"
            text="Polite commercial drivers"
          />
          <TrustItem
            icon={<Clock3 className="h-5 w-5" />}
            title="Swift 10–15 Min Pickup"
            text="Doorstep Noida arrival"
          />
        </div>
      </section>

      {/* =====================================================
          DETAILED SUV FLEET CARDS
      ===================================================== */}
      <section id="suv-fleet" className="border-b border-slate-200 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              Our SUV Fleet
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Ertiga &amp; Innova Crysta Fleet in Noida
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Choose the ideal SUV based on group size, boot space needs, and travel comfort.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {suvVehicles.map((vehicle) => (
              <SUVCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOIDA TO DELHI SUV SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Route Details */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                <span>High-Frequency Transit Corridor</span>
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Noida to Delhi <span className="text-amber-700">SUV Taxi</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-800">
                Direct point-to-point drops from Noida to IGI Airport (T3/T1), New Delhi Railway Station (NDLS), CP, and Gurgaon. Travel with family and bulk luggage without cramping.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { title: "Maruti Ertiga", sub: "6 Passenger AC" },
                  { title: "Innova Crysta", sub: "Executive Class" },
                  { title: "Dual AC Vents", sub: "Instant Cooling" },
                  { title: "Zero Surge", sub: "Flat Meter Rates" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xs backdrop-blur-xs"
                  >
                    <p className="text-xs font-black text-slate-950">{item.title}</p>
                    <p className="text-[11px] font-medium text-slate-600">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={`https://wa.me/918377809809?text=${encodeURIComponent(
                    "Hello NoidaCab, I want to book a Noida to Delhi SUV Taxi. Please share availability."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
                >
                  <CarFront className="h-4 w-4 text-amber-400" />
                  Book Delhi SUV on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:918377809809"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-xs transition hover:bg-amber-50"
                >
                  <PhoneCall className="h-4 w-4 text-amber-600" />
                  Call Dispatch
                </a>
              </div>
            </div>

            {/* Right Quick Fleet List */}
            <div className="w-full lg:col-span-5">
              <div className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-xl shadow-amber-900/10 backdrop-blur-md sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      Fleet Options
                    </p>
                    <h3 className="text-lg font-black text-slate-950">
                      Noida to Delhi SUVs
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-900">
                    Metered Billing
                  </span>
                </div>

                <div className="mt-5 space-y-3.5">
                  {suvVehicles.map((vehicle) => (
                    <div
                      key={vehicle.slug}
                      className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition hover:border-amber-400 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-black text-slate-950">
                            {vehicle.name}
                          </h4>
                          <p className="mt-1 text-xs text-slate-600">
                            {vehicle.seats} Seats • {vehicle.luggage} Bags • Chilled AC
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-black text-slate-950">{vehicle.price}</p>
                          <p className="text-[10px] font-semibold text-slate-400">Base Meter</p>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 size={13} /> Available in 15 mins
                        </span>

                        <a
                          href={`https://wa.me/918377809809?text=${encodeURIComponent(
                            `Hello NoidaCab, I want to book a ${vehicle.name} from Noida to Delhi.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-amber-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-amber-300"
                        >
                          Book Now
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl bg-amber-50 p-3 text-xs text-amber-950 border border-amber-200/70">
                  <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Doorstep pickup across Sector 15, 18, 62, 137, Expressway & Greater Noida.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR NOIDA LOCATIONS MATRIX
      ===================================================== */}
      <section className="border-b border-slate-200 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <MapPin className="h-3.5 w-3.5 text-amber-600" />
              Locality Dispatch
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Book SUV Taxi Across Noida Localities
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Stationed Ertiga and Innova Crysta cabs available for pickup across major sectors, business parks, and residential hubs.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {noidaLocalities.map((location) => {
              const locationName = location.name ?? location.slug;
              const locationSlug = location.slug;

              return (
                <div
                  key={locationSlug}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 shadow-2xs">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-extrabold text-slate-900 truncate">
                        SUV Cab in {locationName}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Doorstep arrival in 10–15 mins
                      </p>
                    </div>
                  </div>

                  {/* Vehicle Buttons */}
                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    <Link
                      href={`/noida/${locationSlug}/ertiga`}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition hover:border-amber-300 hover:bg-amber-50"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900">Ertiga</p>
                        <p className="text-[10px] text-slate-500">6 Seater</p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                    </Link>

                    <Link
                      href={`/noida/${locationSlug}/innova-crysta`}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition hover:border-amber-300 hover:bg-amber-50"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900">Innova</p>
                        <p className="text-[10px] text-slate-500">7 Seater</p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-amber-700" />
                    </Link>
                  </div>

                  {/* Route CTA */}
                  <a
                    href={`https://wa.me/918377809809?text=${encodeURIComponent(
                      `Hello NoidaCab, I want to book an SUV taxi from ${locationName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-between rounded-xl bg-amber-50/80 px-3.5 py-2.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100"
                  >
                    <span>Instant WhatsApp Booking</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE SUV SECTION
      ===================================================== */}
      <section className="border-b border-slate-200 bg-slate-50/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
              Travel Advantages
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Why Book an SUV with NoidaCab?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Experience comfortable seating, generous legroom, and reliable road handling for local runs and expressways.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Benefit
              icon={<Users className="h-5 w-5" />}
              title="6 & 7-Seater Comfort"
              text="Ample space for large families, corporate delegations, and group outings."
            />
            <Benefit
              icon={<BriefcaseBusiness className="h-5 w-5" />}
              title="Expansive Luggage Space"
              text="Carry 3–4 large suitcases without compromising passenger legroom."
            />
            <Benefit
              icon={<Snowflake className="h-5 w-5" />}
              title="Dual Zone AC"
              text="Roof-mounted rear blower vents ensure fast, uniform cabin cooling."
            />
            <Benefit
              icon={<Gauge className="h-5 w-5" />}
              title="Long-Distance Touring"
              text="Heavy-chassis stability and high ground clearance for highway runs."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR INTERCITY ROUTES
      ===================================================== */}
      <section className="border-b border-slate-200 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <CarFront className="h-3.5 w-3.5 text-amber-600" />
              Outstation & Transfers
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Popular SUV Routes from Noida
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Fixed, metered Price options for round-trips and one-way drops across North India.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <RouteCard
              title="Noida to Delhi SUV Taxi"
              route="Delhi Airport T3 / Railway"
              rate="From ₹13/km"
              href="/noida-to-delhi-suv-taxi"
            />
            <RouteCard
              title="Noida to Gurgaon SUV Taxi"
              route="Cyber City / Golf Course Rd"
              rate="From ₹13/km"
              href="/noida-to-gurgaon-suv-taxi"
            />
            <RouteCard
              title="Noida to Agra SUV Taxi"
              route="Taj Expressway One-Way"
              rate="From ₹13/km"
              href="/noida-to-agra-suv-taxi"
            />
            <RouteCard
              title="Noida to Jaipur SUV Taxi"
              route="Delhi-Mumbai Expressway"
              rate="From ₹13/km"
              href="/noida-to-jaipur-suv-taxi"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}
      <section className="border-b border-slate-200 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              Help Center
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-3.5">
            <FAQ
              question="Which SUV cabs can I book in Noida?"
              answer="NoidaCab offers 6-seater Maruti Ertiga and 7-seater Toyota Innova Crysta commercial cabs for city commutes, airport runs, and outstation trips."
            />
            <FAQ
              question="What are the per-kilometer rates for SUV taxis in Noida?"
              answer="Our standard metered rates start at ₹13/km for Maruti Ertiga and ₹16/km for Toyota Innova Crysta. Toll taxes and state entry permits are billed transparently per actual receipts."
            />
            <FAQ
              question="Can I book an Ertiga for an IGI Delhi Airport drop?"
              answer="Yes. We provide 24x7 doorstep airport transfers from all Noida & Greater Noida sectors directly to Indira Gandhi International Airport (Terminals 1, 2, and 3)."
            />
            <FAQ
              question="How much luggage can an Innova Crysta accommodate?"
              answer="Toyota Innova Crysta comfortably carries up to 4 large suitcases alongside passenger carry-ons with foldable rear seating flexibility."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CONVERSION CTA BANNER
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 text-white">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-300">
            <Zap className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            Instant Doorstep Dispatch
          </span>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Need an SUV Taxi in Noida Right Now?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300">
            Reserve your sanitized Ertiga or Innova Crysta in under 60 seconds on WhatsApp. Guaranteed zero cancellation fees and fixed meter pricing.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-black text-slate-950 shadow-lg transition hover:bg-amber-300"
            >
              <CarFront className="h-4 w-4" />
              Book via WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="tel:918377809809"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
            >
              <PhoneCall className="h-4 w-4 text-amber-400" />
              Call +91 83778 09809
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   SUV CARD COMPONENT
============================================================= */

function SUVCard({
  vehicle,
}: {
  vehicle: (typeof suvVehicles)[number];
}) {
  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${vehicle.name} SUV in Noida. Please share immediate availability and fare.`
  )}`;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl">
      {/* Vehicle image with contain framing */}
      <div className="relative aspect-[16/9] w-full border-b border-slate-100 bg-slate-50 p-4">
        <div className="relative h-full w-full">
          <Image
            src={vehicle.image || "/cabs/ertiga.webp"}
            alt={`${vehicle.name} SUV taxi in Noida`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-xs">
          {vehicle.name}
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950 shadow-xs">
          {vehicle.price}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-950">
              {vehicle.name} Cab in Noida
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Comfortable 6 &amp; 7-seater fleet for city &amp; outstation tours
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-right">
            <span className="text-[11px] font-bold text-emerald-700">No Surge</span>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
          Book a clean, sanitized {vehicle.name} in Noida. Ideal for family outings, airport runs, wedding logistics, and highway stretches with full air conditioning.
        </p>

        {/* Vehicle Specs Matrix */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Spec
            icon={<Users className="h-4 w-4" />}
            label="Seating"
            value={`${vehicle.seats} Seats`}
          />
          <Spec
            icon={<BriefcaseBusiness className="h-4 w-4" />}
            label="Luggage"
            value={`${vehicle.luggage} Bags`}
          />
          <Spec
            icon={<CarFront className="h-4 w-4" />}
            label="Doors"
            value={`${vehicle.doors || 4} Doors`}
          />
          <Spec
            icon={<Snowflake className="h-4 w-4" />}
            label="Climate"
            value={vehicle.airCondition ? "Chilled AC" : "Standard"}
          />
        </div>

        {/* Feature Badges */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          <FeatureBadge text="Verified Chauffeur" />
          <FeatureBadge text="GPS Metered Ride" />
          <FeatureBadge text="Sanitized Vehicle" />
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-col items-center gap-3 border-t border-slate-100 pt-5 sm:flex-row">
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 sm:flex-1"
          >
            Book {vehicle.name} on WhatsApp
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </a>

          <a
            href="tel:918377809809"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-800 transition hover:bg-slate-50 sm:w-auto"
          >
            <PhoneCall className="h-4 w-4 text-amber-600" />
            Call Now
          </a>
        </div>
      </div>
    </article>
  );
}

/* =============================================================
   HELPER SCAFFOLDING COMPONENTS
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
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-2.5">
      <div className="flex items-center gap-1.5 text-amber-700">
        {icon}
        <span className="text-[10px] font-medium text-slate-500 uppercase">
          {label}
        </span>
      </div>
      <p className="mt-1 text-xs font-extrabold text-slate-900">{value}</p>
    </div>
  );
}

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
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
        {icon}
      </div>
      <div>
        <p className="text-sm font-extrabold text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{text}</p>
      </div>
    </div>
  );
}

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
    <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-amber-300 hover:shadow-md">
      <div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
          {icon}
        </div>
        <h3 className="mt-4 text-base font-extrabold text-slate-900">{title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function FeatureBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200">
      <CheckCircle2 className="h-3 w-3" />
      {text}
    </span>
  );
}

function RouteCard({
  title,
  route,
  rate,
  href,
}: {
  title: string;
  route: string;
  rate: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
            {rate}
          </span>
          <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-amber-600" />
        </div>
        <h3 className="mt-2 text-sm font-extrabold text-slate-950">{title}</h3>
        <p className="mt-0.5 text-xs text-slate-500">{route}</p>
      </div>
    </Link>
  );
}

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-4.5 transition hover:border-amber-300">
      <summary className="cursor-pointer list-none font-bold text-slate-950 text-sm sm:text-base">
        <div className="flex items-center justify-between gap-4">
          <span>{question}</span>
          <span className="text-amber-700 transition duration-200 group-open:rotate-45 font-light text-xl">
            +
          </span>
        </div>
      </summary>
      <p className="mt-3 pr-6 text-xs sm:text-sm leading-relaxed text-slate-600">
        {answer}
      </p>
    </details>
  );
}