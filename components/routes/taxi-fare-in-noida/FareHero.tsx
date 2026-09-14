import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  PhoneCall,
  Sparkles,
  Car,
  CheckCircle2,
  Clock,
  BadgePercent,
} from "lucide-react";

export default function FareHero() {
  const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    "Hello NoidaCab, I would like to book a taxi. Please confirm rates and driver dispatch."
  )}`;

  const taxiRates = [
    {
      category: "Sedan",
      models: "Dzire / Etios / Amaze",
      rate: "₹10",
      specs: "4 Seats • 2 Luggage • AC",
    },
    {
      category: "Ertiga",
      models: "Maruti Ertiga (SUV)",
      rate: "₹13",
      specs: "6 Seats • 3 Luggage • Dual AC",
    },
    {
      category: "Innova",
      models: "Toyota Innova Crysta",
      rate: "₹16",
      specs: "7 Seats • Executive Comfort",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-500 via-amber-300 to-white/95 py-16 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-300">
      {/* Background Soft Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-3.5 py-1.5 text-xs font-bold tracking-wide text-amber-900 shadow-xs backdrop-blur-md">
              <Calculator className="h-3.5 w-3.5 text-amber-700" />
              Direct Kilometer Rates • Zero Surge
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Taxi Fare in Noida
              <span className="mt-2 block text-amber-600">
                Starting at ₹1,100
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Transparent per-kilometer fares for local travel, airport drops, and outstation trips. Clean commercial AC cabs with verified chauffeurs and zero hidden charges.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 text-slate-800 shadow-xs backdrop-blur-sm">
                <Clock className="h-4 w-4 text-amber-600" />
                10–15 Min Pickup
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 text-slate-800 shadow-xs backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Verified Drivers
              </span>
              <span className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2 text-slate-800 shadow-xs backdrop-blur-sm">
                <BadgePercent className="h-4 w-4 text-amber-600" />
                No Peak Hour Surge
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-800"
              >
                <Car className="h-4 w-4 text-amber-400" />
                Book Taxi on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:918377809809"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-xs transition hover:border-amber-400 hover:bg-amber-50/50"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                Call +91 83778 09809
              </a>
            </div>
          </div>

          {/* ================= RIGHT Price CARD ================= */}
          <div className="w-full lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl shadow-amber-900/5 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    Official Rate Card
                  </p>
                  <h3 className="mt-0.5 text-lg font-black text-slate-950">
                    Taxi Per-Km Rates
                  </h3>
                </div>
                <span className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                  <Sparkles size={12} /> Fixed Prices
                </span>
              </div>

              {/* Sedan, Ertiga & Innova Rate Blocks */}
              <div className="mt-4 space-y-3">
                {taxiRates.map((item) => (
                  <div
                    key={item.category}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 text-xs transition hover:border-amber-300 hover:bg-amber-50/40"
                  >
                    <div>
                      <p className="text-sm font-extrabold text-slate-950">{item.category}</p>
                      <p className="text-[11px] font-medium text-slate-500">{item.models}</p>
                      <p className="mt-1 text-[10px] text-slate-400">{item.specs}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-slate-950">{item.rate}</p>
                      <p className="text-[10px] font-semibold text-slate-500">/ km</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inclusions & Terms */}
              <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Chilled AC & commercial carrier permit included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Toll tax & state parking billed as per actual FASTag</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Zero cancellation fee & instant driver assignment</span>
                </div>
              </div>

              {/* Bottom WhatsApp Action */}
              {/* <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-xs font-bold text-slate-950 shadow-xs transition hover:bg-amber-300"
              >
                Inquire & Book on WhatsApp
                <ArrowRight size={14} />
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}