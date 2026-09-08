import {
  ArrowRight,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Clock,
  CarFront,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleCTA({
  vehicle,
}: {
  vehicle: Vehicle;
}) {
  const waMessage = encodeURIComponent(
    `Hello Noida Cab, I would like to book the ${vehicle.name} (${vehicle.category}) taxi. Please share current availability and quick fare details.`
  );

  return (
    <section className="relative overflow-hidden bg-white/95 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500 bg-gradient-to-br from-amber-600 via-amber-600 to-amber-600 px-6 py-12 text-center text-white shadow-2xl sm:px-12 sm:py-16">
          {/* Subtle Ambient Decorative Circles */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-100 backdrop-blur-md">
            <Sparkles size={13} className="text-amber-200" />
            Instant Booking Confirmation
          </div>

          {/* Heading */}
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
            Ready to Travel in a {vehicle.name}?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-amber-50 sm:text-base">
            Book verified {vehicle.name} cabs in Noida starting from{" "}
            <strong className="font-extrabold text-white">{vehicle.price}</strong>. 
            Clean AC vehicles, experienced chauffeurs, and zero surge pricing.
          </p>

          {/* Key Assurance Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-amber-100">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-amber-200" />
              Sanitized & Inspected Fleet
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-amber-200" />
              24x7 Doorstep Pickup
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5">
              <CarFront size={16} className="text-amber-200" />
              {vehicle.seats} Pushback Seats Available
            </span>
          </div>

          {/* Dual Action CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href={`https://wa.me/918377809809?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-900 active:scale-[0.98]"
            >
              <MessageSquare size={17} className="text-amber-400" />
              Book on WhatsApp
              <ArrowRight size={15} />
            </a>

            <a
              href="tel:8377809809"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-amber-800"
            >
              <PhoneCall size={17} />
              Call Now: 8377809809
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}