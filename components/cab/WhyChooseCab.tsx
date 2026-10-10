import {
  ShieldCheck,
  BadgePercent,
  Clock3,
  Sparkles,
  Headphones,
  Compass,
  CheckCircle2,
  Award,
  Users2,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    icon: BadgePercent,
    title: "Transparent & Fixed Pricing",
    description:
      "No peak hour surges or sudden price jumps. What you see is what you pay—with clear per-kilometer tariffs, upfront toll estimates, and no hidden surprises.",
  },
  {
    icon: Clock3,
    title: "100% On-Time Guarantee",
    description:
      "We respect your schedule. Our drivers report at least 10 minutes prior to scheduled pickup for both city commutes, early morning flights, and outstation trips.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Commercial Chauffeurs",
    description:
      "All drivers are police-verified, experienced on national highways and city roads, courteous, and trained to provide a pleasant, secure experience for families & solo travelers.",
  },
  {
    icon: Sparkles,
    title: "Sanitized & Modern Fleet",
    description:
      "From compact sedans to luxury Force Urbanias and Tempo Travellers, our vehicles undergo regular mechanical maintenance and thorough interior cleaning before every trip.",
  },
  {
    icon: Compass,
    title: "Pilgrimage Route Experts",
    description:
      "Our chauffeurs know every temple darshan timing, ghat access, parking spot, and highway rest area across Varanasi, Ayodhya, Prayagraj, Haridwar, and Mathura.",
  },
  {
    icon: Headphones,
    title: "24/7 Live Support & Tracking",
    description:
      "Travel with complete peace of mind. Our 24/7 dispatch desk monitors rides in real-time, ready to assist whenever you need route changes or assistance.",
  },
];

const stats = [
  { value: "15,000+", label: "Successful Trips", icon: Award },
  { value: "99.8%", label: "On-Time Arrival", icon: Clock3 },
  { value: "4.9 / 5", label: "Customer Rating", icon: Users2 },
  { value: "50+", label: "Cities Connected", icon: MapPin },
];

export default function WhyChooseCab() {
  return (
    <section className="bg-white/95 py-12 sm:py-12 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Why Travelers Across North India{" "}
            <span className="text-amber-600">Trust NoidaCab</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            We combine high vehicle standards, honest per-km rates, and disciplined
            service to ensure every ride is smooth and stress-free.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-600 group-hover:text-white mb-6">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Statistics Counter */}
        <div className="mt-16 rounded-3xl bg-white border border-gray-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 text-center">
            {stats.map((s, index) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className={index > 0 ? "pt-6 lg:pt-0" : ""}>
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-black text-gray-900">
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
