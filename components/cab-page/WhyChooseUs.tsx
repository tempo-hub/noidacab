"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Car,
  Clock3,
  IndianRupee,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

type Props = {
  location: {
    slug: string;
    name: string;
  };
  vehicle: {
    name: string;
    image?: string;
    price?: string;
  };
};

export function WhyChooseUs({ location, vehicle }: Props) {
  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a ${vehicle.name} cab in ${location.name}. Please confirm driver dispatch details.`
  )}`;

  const secondaryBenefits = [
    {
      icon: IndianRupee,
      title: "Transparent Kilometer Tariff",
      description:
        "No hidden platform fees, late-night multipliers, or unpredictable dynamic surge surges.",
      badge: "Zero Hidden Fees",
    },
    {
      icon: Car,
      title: "Clean & Inspected Fleet",
      description: `Spotless AC interior with scheduled mechanical checks for your ${vehicle.name} ride.`,
      badge: "Sanitized Vehicles",
    },
    {
      icon: Clock3,
      title: "Swift Locality Pickup",
      description: `Dedicated cabs stationed within ${location.name} ensuring swift 10–15 min doorstep arrival.`,
      badge: "On-Time Guarantee",
    },
    {
      icon: UserCheck,
      title: "Vetted Local Chauffeurs",
      description:
        "Police-verified, polite commercial chauffeurs with in-depth knowledge of Delhi NCR bypasses.",
      badge: "4.9/5 Rated Drivers",
    },
  ];

  return (
    <section className="border-b border-gray-300 bg-white/95 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-7xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-700">
            <ShieldCheck className="h-4 w-4 text-amber-600" />
            CUSTOMER COMMITMENT
          </div>

          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Why Book Your {vehicle.name} with NoidaCab?
          </h2>

          <p className="mt-3 max-w-7xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Premium door-to-door cab booking across{" "}
            <span className="font-semibold text-slate-950">{location.name}</span>. 
            Enjoy reliable chauffeurs, immaculate cabs, and transparent billing.
          </p>
        </div>

        {/* ================= BENTO GRID ================= */}
        <div className="mt-10 max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">

            {/* Featured Hero Bento Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-amber-400 p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:p-8 lg:col-span-2 lg:min-h-[320px]">
              
              {/* Soft decorative background glows */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-300/60 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-20 right-28 h-56 w-56 rounded-full bg-amber-500/40 blur-2xl" />

              <div className="relative z-10 grid h-full gap-6 sm:grid-cols-12 sm:items-center">
                
                {/* Left details */}
                <div className="flex flex-col justify-between sm:col-span-7">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-amber-400 shadow-sm">
                      <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
                    </div>

                    <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Safe & Stress-Free Travel
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-900/90 font-medium">
                      Travel safely from {location.name} with commercial green-plate vehicles, verified background checks, and active GPS-monitored routes.
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Verified Chauffeurs",
                      "Clean AC Cabin",
                      "Zero Surge Charges",
                      "GPS Monitored",
                    ].map((point) => (
                      <span
                        key={point}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-950/10 px-3 py-1 text-xs font-bold text-slate-950 backdrop-blur-xs"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-slate-950" />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Real Car Image Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-amber-300/60 bg-white/80 p-2 shadow-inner sm:col-span-5 sm:h-56">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={vehicle.image || "/cabs/amazemain.webp"}
                      alt={`${vehicle.name} cab in ${location.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 260px"
                    />
                    <span className="absolute top-2 left-2 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                      {vehicle.name}
                    </span>
                    <span className="absolute bottom-2 right-2 rounded-md bg-amber-400 px-2 py-0.5 text-[10px] font-black text-slate-950 shadow-xs">
                      {vehicle.price || "Best Rates"}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Booking Bento Card */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />

              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-amber-400">
                  <BadgeCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-black text-white">
                  Instant Cab Booking
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Skip app booking cancellations and waiting queues. Connect directly with our dispatcher for immediate assignment in {location.name}.
                </p>

                <div className="mt-5 space-y-2 rounded-2xl bg-slate-800/80 p-3.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Confirmation</span>
                    <span className="font-bold text-amber-400">Instant on WhatsApp</span>
                  </div>
                  <div className="h-px bg-slate-700/60" />
                  <div className="flex justify-between">
                    <span className="text-slate-400">Cancellation Fee</span>
                    <span className="font-bold text-emerald-400">₹0 Always</span>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-xs font-extrabold text-slate-950 transition hover:bg-amber-300"
              >
                Book via WhatsApp
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Secondary Bento Grid Cards */}
            {secondaryBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 transition-colors group-hover:bg-amber-100">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                        {benefit.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-slate-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Standard with all {vehicle.name} bookings
                  </div>
                </div>
              );
            })}

          </div>

          {/* ================= BOTTOM TRUST BANNER ================= */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-bold shadow-xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950">
                  Ready to travel in {vehicle.name}?
                </p>
                <p className="text-xs text-slate-600">
                  Reliable door-to-door cab pickups available right now across {location.name}.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-slate-800"
              >
                Book {vehicle.name}
                <ArrowRight className="h-3.5 w-3.5 text-amber-400" />
              </a>

              <a
                href="tel:918377809809"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-900 transition hover:bg-slate-100"
              >
                <PhoneCall className="h-3.5 w-3.5 text-amber-600" />
                Call
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}