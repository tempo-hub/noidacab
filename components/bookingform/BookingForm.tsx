"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Image from "next/image";
import { CalendarDays, CarFront, Clock3, MapPin, PhoneCall, ShieldCheck } from "lucide-react";

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

  const tripTypes = ["Local", "Outstation", "Airport", "Hourly Rental"];

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
    <>
      <section className="relative overflow-visible bg-white/95 border-b border-gray-300">
        <div className="relative min-h-[500px] overflow-hidden bg-white/95 pb-28 pt-20 sm:min-h-[560px] sm:pb-32 sm:pt-24 lg:min-h-[610px] lg:pb-36 lg:pt-28">
          <div className="absolute inset-y-0 right-0 hidden w-full md:block md:w-[65%] lg:w-[58%] xl:w-[55%]">
            <Image
              src="/hero1.webp"
              alt="NoidaCab vehicles ready for your journey"
              fill
              priority
              sizes="(min-width: 1280px) 55vw, (min-width: 1024px) 58vw, 65vw"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-lg">
              <div className="mb-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-gray-900">
                <span className="flex items-center gap-2"><Clock3 className="h-5 w-5 text-amber-600" />24x7 booking</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-amber-600" />Verified drivers</span>
                <span className="flex items-center gap-2"><CarFront className="h-5 w-5 text-amber-600" />Multiple cab options</span>
              </div>

              <h1 className="text-3xl font-black leading-[1.05] text-gray-900 sm:text-4xl lg:text-5xl">
                Complete Your Booking
                <span className="mt-1 block text-amber-600">Ride with NoidaCab</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Review your trip details, add your contact information, and continue securely with our booking team on WhatsApp.
              </p>

              <a
                href="tel:+918377809809"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                Call 8377809809
              </a>

              <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl md:hidden">
                <Image
                  src="/hero1.webp"
                  alt="NoidaCab vehicles ready for your journey"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-30 mx-auto -mt-20 w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.15)] sm:rounded-[32px]">
            <div className="grid grid-cols-2 border-b bg-gray-50 sm:flex">
              {tripTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTripType(type)}
                  aria-pressed={tripType === type}
                  className={`whitespace-nowrap px-3 py-3.5 text-xs font-semibold transition-all sm:flex-1 sm:px-6 sm:py-5 sm:text-sm ${
                    tripType === type
                      ? "bg-amber-600 text-white"
                      : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:grid-cols-4">
              <div>
                <label htmlFor="booking-pickup" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <MapPin className="h-4 w-4 text-amber-600" />Pickup Location
                </label>
                <input
                  id="booking-pickup"
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Enter pickup location"
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-500 sm:h-14"
                />
              </div>

              {tripType !== "Local" && tripType !== "Hourly Rental" && (
                <div>
                  <label htmlFor="booking-destination" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <MapPin className="h-4 w-4 text-amber-600" />Destination
                  </label>
                  <input
                    id="booking-destination"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter destination"
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-500 sm:h-14"
                  />
                </div>
              )}

              <div>
                <label htmlFor="booking-date" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <CalendarDays className="h-4 w-4 text-amber-600" />Journey Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-500 sm:h-14"
                />
              </div>

              <div>
                <label htmlFor="booking-time" className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Clock3 className="h-4 w-4 text-amber-600" />Journey Time
                </label>
                <input
                  id="booking-time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-500 sm:h-14"
                />
              </div>

              <div>
                <label htmlFor="booking-name" className="mb-2 block text-sm font-semibold text-gray-700">Your Name</label>
                <input
                  id="booking-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-500 sm:h-14"
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="mb-2 block text-sm font-semibold text-gray-700">Your Phone Number</label>
                <input
                  id="booking-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-500 sm:h-14"
                />
              </div>

              <div className="flex items-end lg:col-span-2">
                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-amber-600 px-6 text-base font-semibold text-white shadow-lg shadow-amber-600/20 transition hover:bg-amber-500 sm:h-14"
                >
                  Continue on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
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
