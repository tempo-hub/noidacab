"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Snowflake,
  MapPinned,
  ShieldCheck,
  ArrowRight,
  Phone,
} from "lucide-react";
import { vehicles, Vehicle } from "@/data/vehicles";

const categories = ["All", "Sedan", "SUV", "Hatchback"] as const;

export default function CabFleet() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredVehicles = vehicles.filter((v) => {
    const isLargeGroupVehicle =
    v.category === "Tempo Traveller" ||
    v.category === "Urbania" ||
    v.category === "" ||
    v.slug.toLowerCase().includes("tempo") ||
    v.slug.toLowerCase().includes("urbania") ||
    v.name.toLowerCase().includes("tempo traveller") ||
    v.name.toLowerCase().includes("urbania");

  if (isLargeGroupVehicle) return false;

  if (selectedCategory === "All") return true;

  if (selectedCategory === "Sedan") {
    return (
      v.category === "Sedan" ||
      v.slug === "sedan-taxi" ||
      v.slug.includes("dzire") ||
      v.slug.includes("etios") ||
      v.slug.includes("amaze")
    );
  }

  if (selectedCategory === "SUV") {
    return (
      v.category === "SUV" ||
      v.slug.includes("ertiga") ||
      v.slug.includes("innova")
    );
  }

  if (selectedCategory === "Hatchback") {
    return (
      v.category === "Hatchback" ||
      v.slug.includes("wagonr")
    );
  }

  return v.category === selectedCategory;
});

  return (
    <section id="fleet" className="bg-white/95 py-12 sm:py-12 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-7xl text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            Our Cab Fleet
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Choose Your Ideal Cab or Tempo Traveller
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            From affordable city sedans to spacious 24-seater luxury tempo travellers,
            we have well-maintained vehicles for solo trips, families, and tour groups.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat === "All" ? "All Fleet" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVehicles.map((vehicle) => {
            const isTempo =
              vehicle.category === "Tempo Traveller" ||
              vehicle.category === "Urbania" ||
              vehicle.slug.includes("tempo") ||
              vehicle.slug.includes("urbania");

            return (
              <div
                key={vehicle.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-xl"
              >
                <div>
                  {/* Vehicle Image Header */}
                  <div className="relative h-56 w-full bg-gradient-to-b from-gray-100 to-gray-50 p-4 overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-gray-800 border border-gray-200">
                      {vehicle.category || "Cab"}
                    </span>

                    <span className="absolute top-4 right-4 z-10 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      Starting {vehicle.price}
                    </span>

                    <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-sm font-extrabold text-amber-600">
                        {vehicle.price}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      {isTempo
                        ? "Perfect for group pilgrimages & outstation tours"
                        : "Ideal for city transfers, corporate rides & family trips"}
                    </p>

                    {/* Specifications grid */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-gray-100 pt-4 text-xs text-gray-700">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-amber-600 shrink-0" />
                        <span>Seats: <strong>{vehicle.seats} Passengers</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-amber-600 shrink-0" />
                        <span>Luggage: <strong>{vehicle.luggage} Bags</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Snowflake className="h-4 w-4 text-amber-600 shrink-0" />
                        <span>AC: <strong>Dual Zone AC</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinned className="h-4 w-4 text-amber-600 shrink-0" />
                        <span>GPS: <strong>Live Tracking</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <a
                    href={`https://wa.me/918377809809?text=${encodeURIComponent(
                      `Hello NoidaCab, I want to book a ${vehicle.name} (${vehicle.price}). Please provide fare and availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-500"
                  >
                    <span>Book {vehicle.name} Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Sanitized Vehicle
                    </span>
                    <a
                      href="tel:+918377809809"
                      className="font-semibold text-gray-700 hover:text-amber-600 flex items-center gap-1"
                    >
                      <Phone className="h-3 w-3" />
                      Call: 8377809809
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
