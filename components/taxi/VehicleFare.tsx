import Link from "next/link";
import {
  ArrowRight,
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Clock,
  Plane,
  Milestone,
} from "lucide-react";

import type { Vehicle } from "@/data/vehicles";

export default function VehicleFare({ vehicle }: { vehicle: Vehicle }) {
  // Extract numerical base rate (e.g., "₹12/km" or 12 -> 12)
  const baseRate = (() => {
    if (typeof vehicle.price === "number") return vehicle.price;
    const matched = String(vehicle.price || "").match(/\d+(\.\d+)?/);
    return matched ? parseFloat(matched[0]) : 12;
  })();

  // Dynamic pricing package approximations based on base rate
  const localPackagePrice = Math.round(baseRate * 80 + 800);
  const airportTransferPrice = Math.round(baseRate * 45 + 500);

  return (
    <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200/80 mb-3">
            <IndianRupee size={13} className="text-amber-600" />
            Transparent Billing
          </div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            {vehicle.name} Taxi Fare in Noida & NCR
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Standard pricing model for {vehicle.name}. We guarantee no hidden midnight surge pricing or surprise convenience fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {/* Outstation Card */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-amber-600 bg-white p-6 shadow-lg">
            <span className="absolute -top-3 right-5 rounded-full bg-amber-600 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
              Most Popular
            </span>
            <div>
              <div className="flex items-center gap-2 text-amber-600 mb-2">
                <Milestone size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Outstation Travel</span>
              </div>
              <p className="text-3xl font-black text-slate-900 mt-2">
                {vehicle.price}
              </p>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">Per Kilometer Base Rate</p>
              <ul className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>250 km / day minimum average</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>Outstation round trip & one-way</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>Well-maintained commercial fleet</span>
                </li>
              </ul>
            </div>
            <a
              href={`https://wa.me/918377809809?text=Hi,%20I%20want%20to%20book%20an%20outstation%20trip%20with%20${encodeURIComponent(vehicle.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-xs font-bold text-white transition hover:bg-amber-700"
            >
              Book Outstation
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Local Rental Package */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm hover:shadow-md transition">
            <div>
              <div className="flex items-center gap-2 text-slate-700 mb-2">
                <Clock size={18} className="text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Local 8Hr / 80Km</span>
              </div>
              <p className="text-3xl font-black text-slate-900 mt-2">
                ₹{localPackagePrice.toLocaleString("en-IN")}
              </p>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">Full Day City Rental</p>
              <ul className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>8 Hours & 80 KM usage included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>Extra km charged at {vehicle.price}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>Ideal for business & multiple stops</span>
                </li>
              </ul>
            </div>
            <a
              href={`https://wa.me/918377809809?text=Hi,%20I%20want%20to%20book%20an%208hr/80km%20rental%20for%20${encodeURIComponent(vehicle.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 transition hover:border-amber-600 hover:text-amber-600"
            >
              Book Local Rental
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Airport Transfer */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm hover:shadow-md transition">
            <div>
              <div className="flex items-center gap-2 text-slate-700 mb-2">
                <Plane size={18} className="text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Airport Transfer</span>
              </div>
              <p className="text-3xl font-black text-slate-900 mt-2">
                ₹{airportTransferPrice.toLocaleString("en-IN")}
              </p>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">Noida to IGI Airport (T1/T2/T3)</p>
              <ul className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>Dedicated door-to-door pickup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>Flight tracking & zero cancellation fee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                  <span>Spacious luggage accommodation</span>
                </li>
              </ul>
            </div>
            <a
              href={`https://wa.me/918377809809?text=Hi,%20I%20want%20an%20Airport%20drop/pickup%20in%20${encodeURIComponent(vehicle.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-2.5 text-xs font-bold text-slate-800 transition hover:border-amber-600 hover:text-amber-600"
            >
              Book Airport Cab
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Fare Inclusions and Transparency Banner */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Fare Policy & Transparency</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Base fare covers vehicle rent, fuel, and chauffeur charges. State border taxes, highway tolls, and parking tickets are payable as per actual receipts.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:8377809809"
                className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm hover:border-amber-600 hover:text-amber-600 transition"
              >
                <PhoneCall size={14} />
                Call Helpline
              </a>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-amber-700 transition"
              >
                Get Custom Quote
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}