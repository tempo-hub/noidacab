import Link from "next/link";
import { ArrowRight, CarFront, PhoneCall, ShieldCheck } from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";


export default function RouteFareCTA({ route }: { route: RouteData }) {
  const waMessage = encodeURIComponent(
    `Hello NoidaCab, I want to book a taxi from ${route.from.name} to ${route.to.name}. Please confirm cab availability and instant booking.`
  );

  return (
    <section className="bg-white px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-12 text-center shadow-xl sm:px-10 sm:py-16 lg:px-16">
          {/* Decorative Background Accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

          <div className="relative mx-auto max-w-3xl">
            {/* Top Icon Badge */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm shadow-inner">
              <CarFront size={28} />
            </div>

            {/* Dynamic Headline */}
            <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl lg:text-4xl tracking-tight">
              Ready to Book Your {route.from.name} to {route.to.name} Taxi?
            </h2>

            {/* Dynamic Description */}
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-amber-50">
              Lock in your {route.distance} trip ({route.duration}) with verified commercial chauffeurs, doorstep pickup across {route.from.name}, and flat, all-inclusive pricing.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href={`https://wa.me/918377809809?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-xs sm:text-sm font-extrabold text-amber-700 shadow-md transition-all hover:bg-amber-50 active:scale-[0.98] sm:w-auto"
              >
                Book Cab on WhatsApp
                <ArrowRight size={17} />
              </Link>

              <a
                href="tel:8377809809"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98] sm:w-auto"
              >
                <PhoneCall size={16} />
                Call 8377809809
              </a>

              <a
                href="#available-cabs"
                className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-xs sm:text-sm font-semibold text-amber-100 underline-offset-4 hover:underline sm:w-auto"
              >
                View Fare Chart
              </a>
            </div>

            {/* Trust Assurance Points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-amber-100">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-white" />
                Transparent Fare Calculation
              </span>

              <span className="hidden h-3 w-px bg-white/40 sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <CarFront size={16} className="text-white" />
                Sanitized Hatchbacks, Sedans & SUVs
              </span>

              <span className="hidden h-3 w-px bg-white/40 sm:block" />

              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-white" />
                Zero Cancellation Fee (2 hrs prior)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}