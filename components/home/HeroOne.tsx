// Hero.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const tripTypes = ["Local", "Outstation", "Airport", "Hourly"];

export default function Hero() {
  const [trip, setTrip] = useState("Local");

  return (
    <section className="relative overflow-hidden bg-white/95">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-amber-200/40 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-200/40 blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#000 1px,transparent 1px),linear-gradient(to bottom,#000 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-18 pb-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur">
              ⭐ Trusted by 15,000+ Happy Riders
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl xl:text-7xl">
              Book Premium
              <span className="block text-amber-600">Cabs in Noida</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Affordable airport transfers, local rides and outstation trips
              with verified chauffeurs, fixed pricing and 24×7 support.
            </p>

            <div className="mt-10 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-wrap rounded-full bg-slate-100 p-1">
                {tripTypes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setTrip(item)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${trip === item
                        ? "bg-white text-amber-600 shadow"
                        : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input className="h-12 rounded-xl border px-4" placeholder="Pickup Location" />
                <input className="h-12 rounded-xl border px-4" placeholder="Destination" />
                <input className="h-12 rounded-xl border px-4" type="date" />
                <input className="h-12 rounded-xl border px-4" type="time" />
              </div>

              <button className="mt-6 h-14 w-full rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-lg font-semibold text-white transition hover:scale-[1.02]">
                Reserve Your Ride →
              </button>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
                <span>✓ Free Cancellation</span>
                <span>✓ Fixed Pricing</span>
                <span>✓ 24×7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[720px]">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100 blur-[100px]" />
            <div className="absolute bottom-8 left-1/2 h-10 w-80 -translate-x-1/2 rounded-full bg-black/20 blur-3xl" />

            <Image
              src="/hero1.webp"
              alt="Premium Cab"
              width={1100}
              height={1100}
              priority
              className="relative z-10 h-full w-full max-w-[700px] object-contain drop-shadow-[0_40px_30px_rgba(0,0,0,.25)]"
            />

            <div className="absolute left-0 top-32 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur">
              <div className="text-2xl font-bold text-amber-600">250+</div>
              <p className="text-sm text-slate-600">Vehicles</p>
            </div>

            <div className="absolute right-0 top-32 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur">
              <div className="text-2xl font-bold text-amber-600">4.9★</div>
              <p className="text-sm text-slate-600">Rating</p>
            </div>

            <div className="absolute bottom-16 left-1/2 w-full max-w-xl -translate-x-1/2 rounded-3xl border border-white/40 bg-white/90 p-6 shadow-2xl backdrop-blur">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  ["15K+", "Happy Riders"],
                  ["5+", "Years"],
                  ["24×7", "Support"],
                  ["100%", "Verified"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-3xl font-black text-slate-900">{v}</div>
                    <div className="text-sm text-slate-500">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}