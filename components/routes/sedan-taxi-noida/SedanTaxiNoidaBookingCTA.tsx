
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";

const PHONE = "8377809809";
const WHATSAPP_NUMBER = "918377809809";

export default function SedanTaxiNoidaBookingCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to book a sedan taxi in Noida. Please share the available vehicles and fare."
  );

  return (
    <section
      id="book-sedan"
      className="relative overflow-hidden bg-amber-400 py-14 sm:py-16 lg:py-20"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-amber-500/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-lg shadow-slate-900/20 lg:grid lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
                <CarFront className="h-4 w-4" />
                Book Your Sedan Taxi
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Need a Comfortable Sedan Taxi in Noida?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Book a Dzire, Etios or Amaze for local Noida travel, airport
                transfers, one-way journeys, corporate travel or outstation
                trips.
              </p>

              {/* Benefits */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  Comfortable AC sedans
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  Professional drivers
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  Noida-wide pickup
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400" />
                  Local & outstation trips
                </div>
              </div>
            </div>

            {/* CTA Area */}
            <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="min-w-[240px]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10">
                    <ShieldCheck className="h-5 w-5 text-amber-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Booking Assistance
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Get your fare & availability
                    </p>
                  </div>
                </div>

                {/* Book Now */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
                >
                  Book Sedan Taxi
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Us
                </a>

                {/* Call */}
                <a
                  href={`tel:${PHONE}`}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call {PHONE}
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  Share your pickup location, destination and travel date to
                  confirm your booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

