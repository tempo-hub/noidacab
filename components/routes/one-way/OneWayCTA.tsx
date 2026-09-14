import { ArrowRight, CarFront, PhoneCall, ShieldCheck } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
  };
};

export function OneWayCTA({ route }: Props) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white/95 ">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 to-amber-300">
        <div className="relative p-8 sm:p-12">
          <div className="relative max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500">
              <CarFront className="h-6 w-6 text-white" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to Travel from {route.from} to {route.to}?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-700">
              Book your one-way cab with a comfortable vehicle and
              professional driver. Start your journey with NoidaCab.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
  {/* WhatsApp Direct Booking */}
  <a
    href={`https://wa.me/918377809809?text=${encodeURIComponent(
      "Hello NoidaCab, I want to book a one-way cab. Please share available vehicles and fare estimates."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition hover:bg-amber-400"
  >
    Book One Way Cab
    <ArrowRight className="h-4 w-4" />
  </a>

  {/* Call Now */}
  <a
    href="tel:918377809809"
    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white shadow-xs backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
  >
    <PhoneCall className="h-4 w-4 text-amber-400" />
    Call 8377809809
  </a>
  
</div>
          </div>
        </div>
      </div>
    </section>
  );
}