"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Clock3,
  Fuel,
  ShieldCheck,
  HandCoins,
} from "lucide-react";

const packages = [
  {
    id: "4hr",
    label: "4 hr 40 kms",
    hours: 4,
    km: 40,
  },
  {
    id: "6hr",
    label: "6 hr 60 kms",
    hours: 6,
    km: 60,
  },
  {
    id: "8hr",
    label: "8 hr 80 kms",
    hours: 8,
    km: 80,
  },
  {
    id: "12hr",
    label: "12 hr 120 kms",
    hours: 12,
    km: 120,
  },
];

const vehicles = [
  {
    id: "dzire",
    name: "Dzire",
    modelType: "Or Similar",
    image: "/cabs/dzirefirst.webp",
    fuelType: "CNG",
    price: {
      "4hr": 1600,
      "6hr": 2100,
      "8hr": 2700,
      "12hr": 3500,
    },
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    modelType: "Exact Model",
    image: "/cabs/innovafirst.webp",
    fuelType: "Diesel",
    price: {
      "4hr": 2200,
      "6hr": 3000,
      "8hr": 3800,
      "12hr": 5000,
    },
  },
];

export default function HourlyCabPackages() {
  const [selectedPackage, setSelectedPackage] = useState("4hr");

  const currentPackage =
    packages.find((pkg) => pkg.id === selectedPackage) ?? packages[0];

  return (
    <section className="bg-[#f8fafc] py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Hourly Cab Packages in Noida
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-lg font-semibold text-gray-600">
              Select package
            </span>

            {packages.map((pkg) => {
              const active = selectedPackage === pkg.id;

              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "border-gray-900 bg-blue-600 text-white shadow-sm"
                      : "border-gray-200 bg-gray-100 text-gray-700 hover:border-gray-400 hover:bg-white"
                  }`}
                >
                  {pkg.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="grid gap-7 lg:grid-cols-3">
          {vehicles.map((vehicle) => {
            const price =
              vehicle.price[
                selectedPackage as keyof typeof vehicle.price
              ];

            return (
              <div
                key={vehicle.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Vehicle Image */}
                <div className="relative h-64 bg-white">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} hourly cab in Noida`}
                    fill
                    className="object-contain p-5"
                  />
                </div>

                {/* Card Content */}
                <div className="px-6 pb-0">

                  {/* Vehicle Name */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {vehicle.name}
                    </h3>

                    <span className="text-sm text-gray-500">
                      {vehicle.modelType}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">

                    {/* Included */}
                    <div className="flex items-start gap-3">
                      <Clock3
                        size={22}
                        strokeWidth={1.8}
                        className="shrink-0 text-gray-700"
                      />

                      <div>
                        <p className="text-xs font-medium text-gray-500">
                          INCLUDED
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {currentPackage.hours} hrs |{" "}
                          {currentPackage.km} kms
                        </p>
                      </div>
                    </div>

                    {/* Cancellation */}
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        size={23}
                        strokeWidth={1.8}
                        className="shrink-0 text-green-500"
                      />

                      <div>
                        <p className="text-xs font-medium text-gray-500">
                          CANCELLATION
                        </p>

                        <p className="mt-1 text-sm font-semibold text-green-600">
                          Free Up To 1 Hrs
                        </p>
                      </div>
                    </div>

                    {/* Fuel */}
                    <div className="flex items-start gap-3">
                      <Fuel
                        size={22}
                        strokeWidth={1.8}
                        className="shrink-0 text-gray-700"
                      />

                      <div>
                        <p className="text-xs font-medium text-gray-500">
                          FUEL TYPE
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          {vehicle.fuelType}
                        </p>
                      </div>
                    </div>

                    {/* Payment */}
                    <div className="flex items-start gap-3">
                      <HandCoins
                        size={23}
                        strokeWidth={1.8}
                        className="shrink-0 text-gray-700"
                      />

                      <div>
                        <p className="text-xs font-medium text-gray-500">
                          PART PAYMENT
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          Pay 20% Now, Rest To Driver
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price + Button */}
                  <div className="mt-7 flex items-center justify-between gap-5 pb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{price.toLocaleString("en-IN")}
                      </span>

                      <span className="ml-1 text-xs text-gray-500">
                        + Taxes & Charges
                      </span>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl bg-red-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-700"
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Bottom Note */}
                <div className="bg-gray-100 px-5 py-2.5 text-center text-xs font-medium text-gray-700">
                  After {currentPackage.km} km: charges apply • Tolls &
                  parking at actuals
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}