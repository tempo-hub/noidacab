"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Phone, ArrowRight } from "lucide-react";
import { cityCabServicesData } from "@/data/cityCabServices";

export default function CabServicesByCity() {
  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCities = cityCabServicesData.filter((group) => {
    const matchesCity =
      selectedCity === "All" || group.city.toLowerCase() === selectedCity.toLowerCase();
    
    if (!matchesCity) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const cityMatches = group.city.toLowerCase().includes(query);
    const itemMatches = group.items.some((item) =>
      item.name.toLowerCase().includes(query)
    );

    return cityMatches || itemMatches;
  });

  return (
    <section className="bg-white/95 py-12 sm:py-12 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Exact matching to reference image */}
        <div className="mx-auto max-w-7xl text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Cab Services by City
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed mx-auto">
            Explore our complete range of taxi and tempo traveller services
            across top pilgrimage destinations.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Quick City Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setSelectedCity("All")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCity === "All"
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Cities ({cityCabServicesData.length})
            </button>
            {cityCabServicesData.map((group) => (
              <button
                key={group.city}
                type="button"
                onClick={() => setSelectedCity(group.city)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCity === group.city
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {group.city}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search city or cab type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 bg-white"
            />
          </div>
        </div>

        {/* City Cards Stack - Styled exactly like the reference image */}
        <div className="space-y-8 sm:space-y-10">
          {filteredCities.map((group) => (
            <div
              key={group.city}
              id={group.city.toLowerCase()}
              className="rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition hover:shadow-md"
            >
              {/* City Title Header with badge */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {group.city}
                  </h3>
                  {group.tagline && (
                    <span className="hidden sm:inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200/50">
                      {group.tagline}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:+918377809809"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60 transition"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Book {group.city} Cab</span>
                  </a>
                </div>
              </div>

              {/* Horizontal Divider Line matching screenshot */}
              <div className="my-5 border-t border-gray-100" />

              {/* 3-Column Services List matching screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5 sm:gap-y-4">
                {group.items.map((item, idx) => {
                  const isPhone = item.isPhone;

                  return (
                    <div key={`${group.city}-${idx}`}>
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-2.5 text-[15px] sm:text-base transition-colors ${
                          isPhone
                            ? "font-semibold text-amber-700 hover:text-amber-800"
                            : "text-gray-700 hover:text-amber-600"
                        }`}
                      >
                        {/* Amber arrow like in the image */}
                        <span className="text-amber-600 font-bold transition-transform duration-200 group-hover:translate-x-1 shrink-0">
                          →
                        </span>
                        <span className="group-hover:underline underline-offset-2 leading-relaxed">
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredCities.length === 0 && (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <MapPin className="mx-auto h-10 w-10 text-gray-400 mb-3" />
              <p className="text-lg font-semibold text-gray-800">
                No matching city or cab service found
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Try searching for another city like Lucknow, Varanasi, or Ayodhya.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCity("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-xl text-sm font-semibold hover:bg-amber-500 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 rounded-2xl bg-amber-50/70 border border-amber-200/70 p-5 sm:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-base font-bold text-gray-900">
              Need a custom pilgrimage tour or corporate cab package?
            </p>
            <p className="text-sm text-gray-600 mt-0.5">
              We provide tailored round-trip packages for Kashi Vishwanath, Ayodhya Ram Mandir, Triveni Sangam, and Chardham Yatra.
            </p>
          </div>
          <a
            href="https://wa.me/918377809809?text=Hi%2C%20I%20need%20a%20custom%20cab%20package%20for%20pilgrimage%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-amber-500 transition shrink-0"
          >
            Get Custom Package Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
