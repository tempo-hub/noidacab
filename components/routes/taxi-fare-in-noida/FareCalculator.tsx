"use client";

import { useMemo, useState } from "react";
import {
  CarFront,
  IndianRupee,
  Route,
  ShieldCheck,
} from "lucide-react";

type Vehicle = {
  name: string;
  slug: string;
  category: "Hatchback" | "Sedan" | "SUV";
  pricePerKm: number;
};

type FareCalculatorProps = {
  vehicles: Vehicle[];
};

const distances = [50, 100, 250, 500, 750, 1000];

export default function FareCalculator({
  vehicles,
}: FareCalculatorProps) {
  const [distance, setDistance] = useState(50);
  const [selectedVehicle, setSelectedVehicle] = useState(
    vehicles[0]?.slug || ""
  );

  const vehicle =
    vehicles.find((item) => item.slug === selectedVehicle) ||
    vehicles[0];

  const fare = useMemo(() => {
    if (!vehicle) return 0;

    return Math.round(
      distance * 1.5 * vehicle.pricePerKm + 500
    );
  }, [distance, vehicle]);

  return (
    <section className="border-y border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">
            Fare Calculator
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            Estimate Your Cab Fare
          </h2>

          <p className="mt-3 text-base text-gray-600">
            Select your travel distance and vehicle to get an instant
            one-way fare estimate.
          </p>
        </div>

        {/* Calculator */}
        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* Left */}
            <div className="p-5 sm:p-8 lg:p-10">

              {/* Distance heading */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Distance (in km)
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Adjust your approximate travel distance
                  </p>
                </div>

                <div className="text-2xl font-extrabold text-red-600 sm:text-3xl">
                  {distance} km
                </div>
              </div>

              {/* Range */}
              <div className="mt-7">
                <input
                  type="range"
                  min={50}
                  max={2000}
                  step={10}
                  value={distance}
                  onChange={(e) =>
                    setDistance(Number(e.target.value))
                  }
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-red-600"
                />

                <div className="mt-3 flex justify-between text-xs text-gray-500">
                  <span>0 km</span>
                  <span>500 km</span>
                  <span>1000 km</span>
                  <span>1500 km</span>
                  <span>2000 km</span>
                </div>
              </div>

              {/* Quick distances */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {distances.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setDistance(item)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                      distance === item
                        ? "bg-red-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {item} km
                  </button>
                ))}
              </div>

              {/* Vehicle */}
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">
                    Select Vehicle
                  </p>

                  {vehicle && (
                    <span className="text-xs text-gray-500">
                      ₹{vehicle.pricePerKm}/km
                    </span>
                  )}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {vehicles.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() =>
                        setSelectedVehicle(item.slug)
                      }
                      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                        selectedVehicle === item.slug
                          ? "border-red-500 bg-red-50 ring-1 ring-red-500"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          selectedVehicle === item.slug
                            ? "bg-red-100"
                            : "bg-gray-100"
                        }`}
                      >
                        <CarFront
                          className={`h-5 w-5 ${
                            selectedVehicle === item.slug
                              ? "text-red-600"
                              : "text-gray-600"
                          }`}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-gray-900">
                          {item.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {item.category} · ₹
                          {item.pricePerKm}/km
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Formula note */}
              <div className="mt-7 flex gap-3 rounded-xl bg-gray-50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                <p className="text-xs leading-5 text-gray-600">
                  Estimated fare is calculated using distance × 1.5 ×
                  vehicle price per km + ₹500. Final fare may vary based
                  on the actual trip requirements.
                </p>
              </div>
            </div>

            {/* Right result */}
            <div className="border-t border-gray-200 bg-gray-50 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

              <div className="flex h-full flex-col justify-center text-center">

                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  Estimated Distance
                </p>

                <div className="mt-2 flex items-end justify-center gap-2">
                  <span className="text-6xl font-black leading-none text-red-600 sm:text-7xl">
                    {distance}
                  </span>

                  <span className="mb-1 text-lg font-bold text-gray-900">
                    KM
                  </span>
                </div>

                <div className="mx-auto my-8 h-px w-full max-w-xs bg-gray-200" />

                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  Your Estimated Fare
                </p>

                <div className="mt-2 flex items-center justify-center">
                  <IndianRupee className="h-9 w-9 text-red-600 sm:h-11 sm:w-11" />

                  <span className="text-5xl font-black text-red-600 sm:text-6xl">
                    {fare.toLocaleString("en-IN")}
                  </span>
                </div>

                {vehicle && (
                  <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <CarFront className="h-5 w-5 text-amber-600" />

                    <span className="text-sm font-semibold text-gray-800">
                      {vehicle.name}
                    </span>

                    <span className="text-xs text-gray-500">
                      ₹{vehicle.pricePerKm}/km
                    </span>
                  </div>
                )}

                <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Route className="h-4 w-4" />
                  One-way estimated fare
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}