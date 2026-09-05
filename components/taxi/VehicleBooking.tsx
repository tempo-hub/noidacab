import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  CalendarCheck2,
  Sparkles,
  Zap,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleBooking({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const steps = [
    {
      step: "01",
      title: "Share Route & Timing",
      desc: "Provide your pickup point in Noida, destination, date, and preferred time.",
    },
    {
      step: "02",
      title: "Instant All-Inclusive Quote",
      desc: `Get fixed transparent rates for ${vehicle.name} with zero surge pricing.`,
    },
    {
      step: "03",
      title: "Confirmed Driver Details",
      desc: "Receive cab number and chauffeur contact details 2 hours prior to pickup.",
    },
  ];

  const benefits = [
    `${vehicle.seats} Pushback Comfort Seats`,
    `${vehicle.luggage} Bags Luggage Boot Space`,
    vehicle.airCondition ? "Chilled Dual-Zone Climate Control" : "Standard Air System",
    "Verified Commercial Chauffeur",
    "Door-to-Door Pickup & Drop",
    "Live GPS Monitored Transit",
  ];

  const waMessage = encodeURIComponent(
    `Hello, I would like to book a ${vehicle.name} Taxi from Noida. Please share availability and best fare details.`
  );

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 text-white shadow-xl">
          <div className="relative p-6 sm:p-10 lg:p-14">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl" />

            {/* Header */}
            <div className="relative max-w-3xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 border border-amber-500/20 mb-3">
                <Zap size={13} className="text-amber-400" />
                Fast Confirmation
              </div>
              <h2 className="text-2xl font-black text-white sm:text-4xl tracking-tight">
                How to Book Your {vehicle.name} Taxi in Noida
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                Skip complicated forms. Book your ride directly in under 60 seconds with our 24x7 Noida dispatch desk.
              </p>
            </div>

            {/* 3 Step Process */}
            <div className="relative mt-10 grid gap-6 md:grid-cols-3 border-b border-slate-800 pb-10">
              {steps.map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 backdrop-blur-sm">
                  <span className="text-2xl font-black text-amber-500 block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Inclusions Grid & Action Buttons */}
            <div className="relative mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  Guaranteed With This Booking
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Box */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                <a
                  href={`https://wa.me/918377809809?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-amber-500 active:scale-[0.99]"
                >
                  <MessageSquare size={17} />
                  Book Instantly on WhatsApp
                  <ArrowRight size={15} />
                </a>

                <a
                  href="tel:8377809809"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-bold text-slate-200 transition hover:bg-slate-800 hover:text-white"
                >
                  <PhoneCall size={17} className="text-amber-400" />
                  Call 24/7 Helpline (8377809809)
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}