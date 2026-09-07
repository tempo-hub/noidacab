import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  Clock,
  ShieldCheck,
  MapPin,
  Car,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { vehicles } from "@/data/vehicles";
import VehicleTrust from "../taxi/VehicleTrust";

export default function NoidaTaxiContactPage() {
  const phone = "8377809809";
  const displayPhone = "+91 8377809809";
  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    "Hi NoidaCab, I need an urgent taxi booking in Noida. Please share vehicle availability."
  )}`;

  const localHubs = [
    "Sector 18 / Atta Market / Mall of India",
    "Sector 62 / Electronic City / Fortis",
    "Sector 125 / 126 (Amity University Hub)",
    "Sector 135 / 142 (Advant Navis IT Park)",
    "Sector 137 / Paras Tierea / Expressway",
    "Pari Chowk & Greater Noida Knowledge Park",
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "NoidaCab - 24/7 Taxi Booking Helpline",
    telephone: "+91-8377809809",
    url: "https://noidacab.com/noida-taxi-contact-number",
    areaServed: ["Noida", "Greater Noida", "Delhi NCR"],
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <main className="">
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-white/95 relative border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 mb-4">
                <Sparkles size={13} className="text-amber-600" />
                24x7 Cab Dispatch Desk
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Noida Taxi Contact Number
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                Looking for a dependable cab in Noida? Dial our round-the-clock booking helpline for local sector runs, IGI airport transfers, and outstation trips with zero surge pricing.
              </p>

              {/* Direct Dial CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-amber-700 transition active:scale-[0.98]"
                >
                  <PhoneCall size={18} />
                  Call: {displayPhone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 shadow-sm hover:border-amber-600 hover:text-amber-600 transition"
                >
                  <MessageSquare size={18} className="text-emerald-600" />
                  Instant WhatsApp Booking
                </a>
              </div>

              {/* Service Badges */}
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-amber-600" />
                  Pickup within 20–30 Mins
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-amber-600" />
                  Verified Commercial Drivers
                </span>
              </div>
            </div>

            {/* Right Quick Booking Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-slate-900 p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Emergency & Advance Cab Helpline
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Directly connect with our Noida dispatch coordinator for immediate vehicle allocation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-amber-400 block">Primary Helpline</span>
                    <span className="text-base font-extrabold text-white">{displayPhone}</span>
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-500 transition"
                  >
                    Dial Now
                  </a>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-800/80 p-4 border border-slate-700">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-emerald-400 block">WhatsApp Desk</span>
                    <span className="text-base font-extrabold text-white">24x7 Chat Support</span>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Starting Fares */}
      <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6">
            Available Cabs on Call in Noida
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.slice(0, 4).map((veh, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-amber-600">
                      {veh.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {veh.seats} Seats
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-2">
                    {veh.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Starting from {veh.price}</p>
                </div>

                <a
                  href={`tel:${phone}`}
                  className="mt-5 flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 py-2 text-xs font-bold text-slate-800 hover:bg-amber-600 hover:text-white transition"
                >
                  Book on Call <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <VehicleTrust vehicle={vehicles[0]} />

      {/* Local Coverage Sectors */}
      <section className="bg-white/95 border-b border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
            Cab Pickup Hotspots Across Noida
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Our drivers are stationed near key sectors to ensure pickup in under 30 minutes.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localHubs.map((hub, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800"
              >
                <MapPin size={15} className="text-amber-600 shrink-0" />
                <span>{hub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}