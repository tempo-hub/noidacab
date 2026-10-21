import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
    distance: string;
    travelTime: string;
    fare?: string;
    highway?: string;
  };
};

export function OneWayHero({ route }: Props) {
  const whatsappUrl = `https://wa.me/919818022687?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a one-way cab from ${route.from} to ${route.to} (${route.distance}, ${route.travelTime}). Please confirm availability and fare details.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 border-b border-slate-300 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/90 px-3.5 py-1 text-xs font-bold text-amber-900 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-700" />
              <span>One Way Cab Service • Pay Only One Side</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
              {route.from} to {route.to}{" "}
              <span className="text-amber-600">One Way Cab</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-700">
              Book a comfortable, hassle-free one-way taxi from {route.from} to {route.to}
              {route.highway ? ` via ${route.highway}` : ""}. Enjoy zero return toll charges, verified commercial chauffeurs, doorstep pickup, and fixed transparent per-km billing.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-xl">
              <div className="rounded-2xl border border-gray-200 bg-white/95 p-3.5 text-center shadow-xs">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Distance</p>
                <p className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">{route.distance}</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white/95 p-3.5 text-center shadow-xs">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Travel Time</p>
                <p className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">{route.travelTime}</p>
              </div>

              <div className="rounded-2xl border border-amber-400 bg-amber-100/90 p-3.5 text-center shadow-xs">
                <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">Starting Fare</p>
                <p className="text-lg sm:text-xl font-black text-amber-900 mt-0.5">{route.fare || "₹10/km"}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition hover:bg-gray-800"
              >
                <Send className="h-4 w-4 text-amber-400" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href="tel:+918377809809"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-900/20 bg-white/80 px-6 py-3.5 text-sm sm:text-base font-bold text-gray-900 shadow-xs backdrop-blur-sm transition hover:bg-white"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                <span>Call: 8377809809</span>
              </a>
            </div>

            {/* Key Trust Points */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-gray-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Pay Only For One Side
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Verified Commercial Drivers
              </span>
              <span className="flex items-center gap-1.5">
                <CarFront className="h-4 w-4 text-emerald-600" />
                Clean & Sanitized AC Cabs
              </span>
            </div>
          </div>

          {/* Right Booking Card */}
          <div className="rounded-3xl border border-white/80 bg-white/95 p-6 sm:p-7 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Doorstep Pickup</span>
                <h2 className="text-xl font-black text-gray-900 mt-0.5">One Way Booking Card</h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                Instant Confirmation
              </span>
            </div>

            <div className="mt-5 space-y-3.5">
              <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Pickup Location</p>
                </div>
                <p className="mt-1 font-bold text-gray-900 pl-4.5">{route.from}</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-gray-500 bg-white" />
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Drop Destination</p>
                </div>
                <p className="mt-1 font-bold text-gray-900 pl-4.5">{route.to}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-3">
                  <p className="font-semibold text-gray-500">Route Type</p>
                  <p className="font-bold text-amber-900 mt-0.5">Point-to-Point Drop</p>
                </div>
                <div className="rounded-xl bg-amber-50 border border-amber-100 p-3">
                  <p className="font-semibold text-gray-500">Return Toll</p>
                  <p className="font-bold text-emerald-700 mt-0.5">₹0 (Zero Charges)</p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 font-bold text-gray-950 shadow-md transition hover:bg-amber-400"
              >
                <span>Book This Cab on WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+918377809809"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                <span>Call Helpline: 8377809809</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}