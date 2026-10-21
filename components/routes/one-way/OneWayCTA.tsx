import { ArrowRight, CarFront, PhoneCall, Send, ShieldCheck } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
    distance?: string;
    travelTime?: string;
  };
};

export function OneWayCTA({ route }: Props) {
  const whatsappUrl = `https://wa.me/919818022687?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a one-way cab from ${route.from} to ${route.to}. Please confirm cab availability and fare estimate.`
  )}`;

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white/95">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 shadow-xl">
        <div className="relative p-8 sm:p-12">
          <div className="relative max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950 text-amber-400 shadow-md">
              <CarFront className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold text-gray-950 sm:text-4xl">
              Ready to Travel from {route.from} to {route.to}?
            </h2>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-900 font-medium">
              Book your one-way cab now with instant confirmation. Clean sanitized AC vehicles, professional verified chauffeurs, and zero return toll charges.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {/* WhatsApp Direct Booking */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition hover:bg-gray-800"
              >
                <Send className="h-4 w-4 text-amber-400" />
                <span>Book on WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Call Now */}
              <a
                href="tel:918377809809"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-950/20 bg-white/80 px-6 py-3.5 text-sm sm:text-base font-bold text-gray-950 shadow-xs backdrop-blur-sm transition hover:bg-white"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                <span>Call: 8377809809</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-gray-900">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-gray-900" />
                No Cancellation Fee
              </span>
              <span>•</span>
              <span>Instant Driver Details</span>
              <span>•</span>
              <span>24x7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}