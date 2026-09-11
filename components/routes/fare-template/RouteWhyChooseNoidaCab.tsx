import {
  ShieldCheck,
  IndianRupee,
  Clock3,
  CarFront,
  UserCheck,
  Headphones,
  Sparkles,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { RouteData } from "@/data/routes/taxiroutes";

export default function RouteWhyChooseNoidaCab({
  route,
}: {
  route: RouteData;
}) {
  const benefits = [
    {
      title: "Transparent Pricing",
      description: `Know the exact flat fare before confirming your ${route.from.name} to ${route.to.name} booking with zero hidden charges or peak surges.`,
      icon: IndianRupee,
    },
    {
      title: "Verified Drivers",
      description:
        "Travel with commercial license-holding chauffeurs experienced in state highways and major Delhi-NCR corridors.",
      icon: UserCheck,
    },
    {
      title: "Well-Maintained Cabs",
      description: `Choose from clean, sanitized Hatchbacks, Sedans, Ertiga, Innova Crysta, and Tempo Travellers tailored for your ${route.distance} journey.`,
      icon: CarFront,
    },
    {
      title: "Punctual Service",
      description: `Guaranteed doorstep arrival across ${route.from.name} 15 minutes before your scheduled departure time.`,
      icon: Clock3,
    },
    {
      title: "Safe & Comfortable",
      description:
        "Every vehicle features dual air conditioning, real-time GPS tracking, and ample luggage space for stress-free travel.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Helpline Support",
      description:
        "Dedicated local dispatch desk ready to assist with route coordination, schedule modifications, and billing queries.",
      icon: Headphones,
    },
  ];

  const waMessage = encodeURIComponent(
    `Hello NoidaCab, I would like to book a taxi from ${route.from.name} to ${route.to.name}. Please confirm availability and driver details.`
  );

  return (
    <section className="border-b border-slate-200 bg-white/95 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles size={13} className="text-amber-600" />
            Why NoidaCab
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Why Choose NoidaCab for Your {route.from.name} to {route.to.name} Taxi?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            From upfront pricing to vetted highway chauffeurs, we make your {route.distance} journey between {route.from.name} and {route.to.name} dependable, comfortable, and hassle-free.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 rounded-3xl bg-slate-900 px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-12">
          <h3 className="text-2xl font-black text-white sm:text-3xl">
            Ready to Book Your {route.from.name} to {route.to.name} Taxi?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
            Select your travel date, pickup location, and preferred vehicle to get an instant quote and confirmed cab allocation.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/918377809809?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-amber-700 active:scale-[0.98]"
            >
              Book Your Cab
              <ArrowRight size={16} />
            </a>

            <a
              href="tel:8377809809"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              <PhoneCall size={16} />
              Call Helpline: 8377809809
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}