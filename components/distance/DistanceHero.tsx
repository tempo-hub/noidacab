import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Compass,
  MapPin,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

interface DistanceHeroProps {
  route: {
    from: {
      name: string;
    };
    to: {
      name: string;
    };
    distance: number;
    travelTime: string;
  };
  bookingUrl?: string;
  phoneNumber?: string;
}

export default function DistanceHero({
  route,
  bookingUrl,
  phoneNumber = "918377809809",
}: DistanceHeroProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello NoidaCab, I want to inquire about distance, routes, and cab fares from ${route.from.name} to ${route.to.name} (${route.distance} km). Please share details.`
  )}`;

  const targetBookingHref =
    bookingUrl ||
    `/${route.from.name.toLowerCase().replace(/\s+/g, "-")}-to-${route.to.name.toLowerCase().replace(/\s+/g, "-")}-taxi`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-16 text-slate-900 border-b border-slate-300 sm:py-20 lg:py-24">
      {/* Background Soft Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-7">
            {/* Top Micro-Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-950/15 bg-white/70 px-3.5 py-1 text-xs font-bold text-slate-950 shadow-2xs backdrop-blur-md">
                <Compass className="h-3.5 w-3.5 text-amber-700" />
                Verified Road Distance
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur-md">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                4.9/5 Rating (1250 Reviews)
              </div>
            </div>

            {/* Headline */}
            <h1 className="mt-5 text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {route.from.name} to {route.to.name}{" "}
              <span className="block text-slate-900">Distance &amp; Travel Time</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-800 sm:text-base sm:leading-7 font-medium">
              Real-time driving distance, highway driving duration, toll transit, and door-to-door cab options from{" "}
              <strong className="text-slate-950">{route.from.name}</strong> to{" "}
              <strong className="text-slate-950">{route.to.name}</strong>. Book verified sedans, spacious SUVs, and luxury Tempo Travellers with transparent billing.
            </p>

            {/* Route Feature Checks */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Expressway routing with zero hidden charges</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Verified commercial green/yellow plate fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Police-vetted highway chauffeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Direct doorstep pickup across all sectors</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={targetBookingHref}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Book Cab on this Route
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-900/20 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xs backdrop-blur-xs transition hover:bg-white"
              >
                <Zap className="h-4 w-4 text-amber-700 fill-amber-700" />
                Quick WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* ================= RIGHT METRIC CARD ================= */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-amber-950/10 backdrop-blur-xl sm:p-7">
              {/* Soft Ambient Card Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/25 blur-2xl" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    Route Intelligence
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">
                    Transit Matrix Overview
                  </p>
                </div>
                <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-800">
                  Expressway Route
                </span>
              </div>

              {/* Waypoints Visualizer */}
              <div className="mt-5 space-y-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    <MapPin className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Departure: </span>
                    <span className="text-slate-700">{route.from.name}</span>
                    <p className="text-[10px] text-slate-500">
                      Doorstep reporting at designated location
                    </p>
                  </div>
                </div>

                <div className="ml-2.5 h-4 border-l-2 border-dashed border-slate-300" />

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Navigation className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Destination: </span>
                    <span className="text-slate-700">{route.to.name}</span>
                    <p className="text-[10px] text-slate-500">
                      Direct point-to-point drop-off
                    </p>
                  </div>
                </div>
              </div>

              {/* Dual Metric Counters */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <MapPin className="h-4 w-4 text-amber-700" />
                    <span>Total Distance</span>
                  </div>
                  <p className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                    {route.distance} <span className="text-sm font-bold text-slate-600">km</span>
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500">Shortest highway transit</p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <Clock3 className="h-4 w-4 text-amber-700" />
                    <span>Driving Time</span>
                  </div>
                  <p className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                    {route.travelTime}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500">Standard traffic conditions</p>
                </div>
              </div>

              {/* Quick Call Action Strip */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4 text-xs font-medium text-slate-600">
                <span>Instant dispatch assistance</span>
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-1 font-bold text-amber-800 hover:text-amber-900 hover:underline"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-amber-700" />
                  Call 8377809809
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}