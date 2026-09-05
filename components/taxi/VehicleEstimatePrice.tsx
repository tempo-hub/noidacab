"use client";

import React, { useState, useId } from "react";
import type { Vehicle } from "@/data/vehicles";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

interface VehicleEstimatePriceProps {
  vehicle: Vehicle;
}

const PRESET_DISTANCES = [40, 100, 250, 500, 750, 1000];
const MIN_DISTANCE = 40;
const MAX_DISTANCE = 2000;

export default function VehicleEstimatePrice({ vehicle }: VehicleEstimatePriceProps) {
  const [distance, setDistance] = useState<number>(40);
  const sliderId = useId();

  // Extract base numerical value from vehicle.price (e.g., "₹12/km" or "12" -> 12)
  const numericPrice = (() => {
    if (typeof vehicle.price === "number") return vehicle.price;
    const matched = String(vehicle.price || "").match(/\d+(\.\d+)?/);
    return matched ? parseFloat(matched[0]) : 12; // Fallback to 12 if not found
  })();

  // Formula: (distance * 1.5 * vehicle.price) + 500
  const estimatedFare = Math.round(distance * 1.5 * numericPrice + 500);

  const handleBookingRedirect = () => {
    const message = `*Fare Estimate Inquiry - Noida Cab*
--------------------------------
*Vehicle:* ${vehicle.name}
*Selected Distance:* ${distance} km
*Estimated Trip Cost:* ₹${estimatedFare.toLocaleString("en-IN")}
*Base Rate:* ₹${numericPrice}/km
--------------------------------`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918377809809?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-white/95 border-b border-slate-200 py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header Badge & Title */}
        <div className="max-w-2xl mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 border border-amber-200">
            <Calculator size={13} className="text-amber-600" />
            Calculate Fare
          </span>

          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-4xl tracking-tight">
            Estimate Your {vehicle.name} Fare
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Slide to select distance and get an instant transparent price estimate.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Control Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Distance Slider Header */}
              <div className="flex items-center justify-between">
                <label htmlFor={sliderId} className="text-sm font-bold text-slate-700">
                  Distance (in km)
                </label>
                <span className="text-2xl font-black text-amber-600">
                  {distance} km
                </span>
              </div>

              {/* Slider Input */}
              <div>
                <input
                  id={sliderId}
                  type="range"
                  min={MIN_DISTANCE}
                  max={MAX_DISTANCE}
                  step={10}
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-2">
                  <span>0 km</span>
                  <span>500 km</span>
                  <span>1000 km</span>
                  <span>1500 km</span>
                  <span>2000 km</span>
                </div>
              </div>

              {/* Quick Distance Select Pills */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                {PRESET_DISTANCES.map((km) => (
                  <button
                    key={km}
                    type="button"
                    onClick={() => setDistance(km)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                      distance === km
                        ? "bg-amber-600 text-white border-amber-600 shadow-md scale-[1.02]"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {km} km
                  </button>
                ))}
              </div>

              {/* Additional Rate Guidance */}
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200/80 text-xs text-slate-500">
                <span className="font-bold text-slate-700">Tip:</span> For long-distance trips above 2000 km or multi-day custom tours, customized fixed package rates apply.
              </div>
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 text-center flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Estimated Distance
                  </p>
                  <p className="text-3xl font-black text-amber-600 mt-1">
                    {distance}{" "}
                    <span className="text-base font-bold text-slate-700">KM</span>
                  </p>
                </div>

                <div className="my-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Estimated Trip Cost
                  </p>
                  <p className="text-4xl sm:text-5xl font-black text-amber-600 tracking-tight mt-1">
                    ₹{estimatedFare.toLocaleString("en-IN")}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    * Estimated Package Price
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-b border-slate-200/80 py-3 text-xs">
                  <div>
                    <span className="block text-slate-400 font-semibold">MIN</span>
                    <span className="font-bold text-slate-800">{MIN_DISTANCE} KM</span>
                  </div>
                  <span className="text-slate-300 font-bold">&rarr;</span>
                  <div>
                    <span className="block text-slate-400 font-semibold">MAX</span>
                    <span className="font-bold text-slate-800">{MAX_DISTANCE} KM</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  *Includes driver allowance & base tax | Tolls & state border tax extra
                </p>

                <button
                  type="button"
                  onClick={handleBookingRedirect}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:bg-amber-700 active:scale-[0.98]"
                >
                  Book at this price
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}