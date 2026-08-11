import Image from "next/image";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";
import BookingCard from "./BookingCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-visible">
      {/* Background Image */}
      <Image
        src="/hero2.webp"
        alt="Noida Cab"
        fill
        priority
        className="object-cover scale-100 blur-[1px]"
      />

      {/* Gradient scrim — depth instead of a flat tint */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/90" /> */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/20 to-black/15" />
      {/* <div className="absolute inset-0 bg-black/15" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />       */}

      {/* Soft amber glow behind the headline — signature touch, not decoration */}
      {/* <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-600/20 blur-[120px]" /> */}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-start pt-24 sm:pt-36 lg:pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Live status badge instead of a static label */}
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-600/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-black-200">
                Cabs available now — Noida &amp; Delhi routes
              </span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Noida to Delhi.
              <span className="block mt-0 bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Noida, sorted daily.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl sm:text-lg leading-8 text-white/90">
              Fixed-fare Noida–Delhi cabs and everyday local rides across
              Noida — verified drivers, upfront pricing, no surge surprises.
            </p>

            {/* Route chips — grounds the hero in the actual service */}
            {/* <div className="mt-5 flex flex-wrap gap-2.5">
              {[
                "Noida → Delhi",
                "Noida → Greater Noida",
                "Noida Local",
                "Noida → IGI Airport",
              ].map((route) => (
                <span
                  key={route}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm text-gray-200 backdrop-blur-sm"
                >
                  {route}
                </span>
              ))}
            </div> */}

            {/* CTAs with clear hierarchy */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="group flex items-center gap-2 rounded-full bg-amber-400 px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-amber-600/30 transition hover:bg-amber-500 hover:shadow-amber-600/50">
                Book Now
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-full px-6 sm:px-7 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white/70 underline decoration-ehite/70 underline-offset-8 transition hover:text-black hover:decoration-black border-2">
                Explore Fleet
              </button>
            </div>

            {/* Social proof instead of generic stat blocks */}
            {/* <div className="mt-6 sm:mt-14 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center -space-x-3">
                {["A", "R", "S", "P"].map((letter, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-amber-500 to-amber-700 text-xs sm:text-sm font-semibold text-white"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div className="flex flex-col ">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-white">
                    4.9
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400">
                  15,000+ riders across Noida
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 border-l border-white/15 pl-6 text-sm text-gray-300">
                <ShieldCheck className="h-5 w-5 text-amber-400" />
                Verified &amp; background-checked drivers
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Booking Card */}
      <div className="absolute flex justify-center bottom-0 left-1/2 z-30 w-full max-w-7xl -translate-x-[48%] translate-y-1/2 px-4 sm:px-6 lg:px-8 sm:pt-4 sm:pb-8 pt-[260px] lg:pt-0 ">
        <BookingCard />
      </div>
    </section>
  );
}