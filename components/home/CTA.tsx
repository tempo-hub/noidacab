import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-6">
      {/* Background Glow */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-600 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-500 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-amber-600 to-amber-500 p-10 lg:p-16 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              Trusted by 15,000+ Riders
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Ready To Book
              <span className="block">
                Your Next Ride?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-red-50">
              Whether it&apos;s a local ride, airport transfer or an outstation
              journey, we&apos;ve got a premium cab waiting for you.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-amber-600 transition hover:scale-105">
                Book Your Ride
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                <Phone size={20} />
                Call Now
              </button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-red-100">
              <span>✓ Fixed Fare</span>
              <span>✓ No Hidden Charges</span>
              <span>✓ 24×7 Support</span>
              <span>✓ Verified Drivers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}