"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const WHATSAPP_NUMBER = "918377809809";

// 1. Move your main form logic here
function BookingFormContent() {
  const searchParams = useSearchParams();

  const [tripType, setTripType] = useState(searchParams.get("tripType") || "Local");
  const [pickup, setPickup] = useState(searchParams.get("pickup") || "Noida");
  const [destination, setDestination] = useState(searchParams.get("destination") || "");
  const [date, setDate] = useState(searchParams.get("date") || "");
  const [time, setTime] = useState(searchParams.get("time") || "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
Hello NoidaCab, I want to book a cab.

Name: ${name}
Mobile: ${phone}

Trip Type: ${tripType}
Pickup: ${pickup}
Destination: ${destination || "N/A"}
Journey Date: ${date}
Journey Time: ${time}
`.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(message);
    window.location.href = whatsappUrl;
  };

  return (
    <section className="bg-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Complete Your Booking</h1>
            <p className="mt-2 text-sm text-slate-600">Check your journey details and continue on WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Trip Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Trip Type</label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="h-12 w-full rounded-xl text-slate-700 border border-slate-200 bg-slate-100 px-4 text-sm outline-none focus:border-amber-500"
              >
                <option value="Local">Local</option>
                <option value="Airport">Airport</option>
                <option value="Outstation">Outstation</option>
                <option value="Hourly Rental">Hourly Rental</option>
              </select>
            </div>

            {/* Pickup */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Pickup Location</label>
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter pickup location"
                required
                className="h-12 w-full rounded-xl text-slate-700 border border-slate-200 px-4 text-sm outline-none focus:border-amber-500"
              />
            </div>

            {/* Destination */}
            {tripType !== "Local" && tripType !== "Hourly Rental" && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Destination</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination"
                  required
                  className="h-12 w-full rounded-xl text-slate-700 border border-slate-200 px-4 text-sm outline-none focus:border-amber-500"
                />
              </div>
            )}

            {/* Date */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Journey Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="h-12 w-full rounded-xl text-slate-700 border border-slate-200 px-4 text-sm outline-none focus:border-amber-500"
              />
            </div>

            {/* Time */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Journey Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="h-12 w-full rounded-xl text-slate-700 border border-slate-200 px-4 text-sm outline-none focus:border-amber-500"
              />
            </div>

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="h-12 w-full rounded-xl border text-slate-700 border-slate-200 px-4 text-sm outline-none focus:border-amber-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Your Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
                className="h-12 w-full rounded-xl border text-slate-700 border-slate-200 px-4 text-sm outline-none focus:border-amber-500"
              />
            </div>

            {/* WhatsApp Button */}
            <button
              type="submit"
              className="h-13 w-full rounded-xl bg-amber-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-700"
            >
              Continue on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// 2. Export a wrapper wrapped in a Suspense boundary
// You can replace the fallback with a loading skeleton if needed
export default function BookingForm() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading booking details...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}
