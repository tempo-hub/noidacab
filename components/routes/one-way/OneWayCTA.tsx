import { ArrowRight, CarFront, ShieldCheck } from "lucide-react";

type Props = {
  route: {
    from: string;
    to: string;
  };
};

export function OneWayCTA({ route }: Props) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="relative p-8 sm:p-12">
          <div className="relative max-w-3xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500">
              <CarFront className="h-6 w-6 text-white" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to Travel from {route.from} to {route.to}?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Book your one-way cab with a comfortable vehicle and
              professional driver. Start your journey with NoidaCab.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-600"
              >
                Book One Way Cab
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm text-gray-300">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                Reliable Cab Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}