import Link from "next/link";
import { ArrowRight, Phone, Send, ShieldCheck, CheckCircle2 } from "lucide-react";

const PHONE_NUMBER = "+918377809809";
const WHATSAPP_NUMBER = "+918377809809";

export default function CabCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-10 sm:py-10">
      {/* Background ambient lighting */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-amber-600/30 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl sm:rounded-[40px] border border-white/10 bg-gradient-to-br from-amber-600 via-amber-600 to-amber-700 p-8 sm:p-14 lg:p-16 shadow-2xl text-center">
          {/* Trust Badge */}
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-semibold text-white mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span>Serving Lucknow, Varanasi, Ayodhya, Noida & North India</span>
          </div> */}

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Experience a Better Way to Travel?
          </h2>

          {/* <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-amber-100 leading-relaxed">
            Whether it&apos;s an urgent airport transfer, a relaxing outstation family
            trip, or a sacred temple pilgrimage, our verified chauffeurs are ready to drive you safely.
          </p> */}

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20with%20NoidaCab.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:bg-white/25 hover:border-white"
            >
              <Send className="h-5 w-5" />
              <span>WhatsApp Booking</span>
            </a>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur px-8 py-4 text-base font-extrabold text-white transition-all duration-200 hover:bg-white/25 hover:border-white"
            >
              <Phone className="h-5 w-5" />
              <span>Call +91 8377809809</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-white/90 border-t border-white/20 pt-8 max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-white" /> Fixed Transparent Fares
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-white" /> Zero Cancellation Charges
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-white" /> 24×7 Roadside Assistance
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-white" /> Commercial Verified Drivers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
