"use client";

import {
  Calendar,
  Clock3,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { routes } from "@/data/routes/taxiroutes";
import { noidaLocalities } from "@/data/routes/noida";

const tripTypes = [
  "Local",
  
  "Outstation",
  "Airport",
  "Hourly Rental",
];

const WHATSAPP_NUMBER = "+918377809809";

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingCard() {
  const [activeTrip, setActiveTrip] = useState("Local");

  const [pickup, setPickup] = useState("Noida");
  const [destination, setDestination] = useState("");

  const [journeyDate, setJourneyDate] =
    useState(getTodayDate());

  const [journeyTime, setJourneyTime] =
    useState("10:00");

  // New state: show customer form
  const [showBookingForm, setShowBookingForm] =
    useState(false);

  // Customer details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const outstationDestinations = routes.filter(
    (route) => route.from.slug === "noida"
  );

  const isOutstation =
    activeTrip === "Outstation";

  /*
   * Change trip type
   */
  const handleTripChange = (trip: string) => {
    setActiveTrip(trip);

    if (trip === "Outstation") {
      setPickup("Noida");
      setDestination("");
    }

    if (
      trip === "Local" ||
      trip === "Airport"
    ) {
      setDestination("");
    }

    if (trip === "Hourly Rental") {
      setPickup("Noida");
      setDestination("");
    }
  };

  /*
   * First step:
   * Show customer booking form
   */
  const handleSearch = () => {
    setShowBookingForm(true);
  };

  /*
   * Final step:
   * Send everything to WhatsApp
   */
  const handleWhatsApp = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const message = `
Hello NoidaCab, I want to book a cab.

Name: ${name}
Mobile: ${phone}

Trip Type: ${activeTrip}
Pickup: ${pickup}
Destination: ${destination || "N/A"}
Journey Date: ${journeyDate}
Journey Time: ${journeyTime}
`.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      "_blank"
    );
  };

  /*
   * ============================
   * CUSTOMER BOOKING FORM
   * ============================
   */
  if (showBookingForm) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.15)] sm:rounded-[32px]">

        <div className="p-5 sm:p-8">

          {/* Header */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setShowBookingForm(false)
              }
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Complete Your Booking
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Enter your details to continue.
              </p>
            </div>
          </div>

          {/* Selected Journey */}
          <div className="mt-6 rounded-xl bg-slate-100 p-4">
            <div className="grid gap-3 text-sm sm:grid-cols-2">

              <div>
                <span className="text-slate-500">
                  Trip Type
                </span>

                <p className="font-semibold text-slate-900">
                  {activeTrip}
                </p>
              </div>

              <div>
                <span className="text-slate-500">
                  Pickup
                </span>

                <p className="font-semibold text-slate-900">
                  {pickup}
                </p>
              </div>

              {destination && (
                <div>
                  <span className="text-slate-500">
                    Destination
                  </span>

                  <p className="font-semibold text-slate-900">
                    {destination}
                  </p>
                </div>
              )}

              <div>
                <span className="text-slate-500">
                  Journey
                </span>

                <p className="font-semibold text-slate-900">
                  {journeyDate} · {journeyTime}
                </p>
              </div>

            </div>
          </div>

          {/* Customer Form */}
          <form
            onSubmit={handleWhatsApp}
            className="mt-6 space-y-4"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Enter your name"
                required
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-amber-500 sm:h-14"
              />
            </div>

            {/* Phone */}
            {/* <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mobile Number
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-700 outline-none transition focus:border-amber-500 sm:h-14"
              />
            </div> */}

            {/* Additional Requirement */}
            {/* <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Additional Requirement
                <span className="ml-1 font-normal text-slate-400">
                  (Optional)
                </span>
              </label>

              <textarea
                placeholder="Any special requirement..."
                rows={3}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-amber-500"
              />
            </div> */}

            {/* WhatsApp */}
            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#ffb300] px-6 text-base font-semibold text-white transition hover:bg-amber-600 sm:h-14"
            >
              Continue on WhatsApp
            </button>

          </form>
        </div>
      </div>
    );
  }

  /*
   * ============================
   * FIRST BOOKING FORM
   * ============================
   */

  return (
    <div className="overflow-hidden rounded-2xl bg-white/95 shadow-[0_25px_80px_rgba(0,0,0,0.15)] sm:rounded-[32px]">

      {/* Trip Type */}
      <div className="grid grid-cols-2 border-b bg-gray-50 sm:flex">
        {tripTypes.map((trip) => (
          <button
            key={trip}
            type="button"
            onClick={() =>
              handleTripChange(trip)
            }
            className={`whitespace-nowrap px-3 py-3.5 text-xs font-semibold transition-all duration-300 sm:flex-1 sm:px-6 sm:py-5 sm:text-sm ${
              activeTrip === trip
                ? "bg-amber-600 text-white"
                : "text-gray-600 hover:bg-red-50 hover:text-amber-400"
            }`}
          >
            {trip}
          </button>
        ))}
      </div>

      {/* Main Form */}
      <div
        className={`grid grid-cols-1 gap-4 p-5 sm:gap-6 sm:p-8 ${
          isOutstation
            ? "sm:grid-cols-2 lg:grid-cols-5"
            : "sm:grid-cols-2 lg:grid-cols-4"
        }`}
      >

        {/* Pickup */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MapPin className="h-4 w-4 text-amber-400" />
            Pickup
          </label>

          {isOutstation ? (
            <input
              type="text"
              value="Noida"
              readOnly
              className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-700 outline-none sm:h-14"
            />
          ) : (
            <select
              value={pickup}
              onChange={(e) =>
                setPickup(e.target.value)
              }
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
            >
              <option value="Noida">
                Noida
              </option>

              {noidaLocalities.map(
                (locality) => (
                  <option
                    key={locality.slug}
                    value={locality.name}
                  >
                    {locality.name}
                  </option>
                )
              )}
            </select>
          )}
        </div>

        {/* Destination */}
        {isOutstation && (
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
              <MapPin className="h-4 w-4 text-amber-400" />
              Destination
            </label>

            <select
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
            >
              <option value="">
                Select Destination
              </option>

              {outstationDestinations.map(
                (route) => (
                  <option
                    key={route.to.slug}
                    value={route.to.name}
                  >
                    {route.to.name}
                  </option>
                )
              )}
            </select>
          </div>
        )}

        {/* Date */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Calendar className="h-4 w-4 text-amber-400" />
            Journey Date
          </label>

          <input
            type="date"
            value={journeyDate}
            min={getTodayDate()}
            onChange={(e) =>
              setJourneyDate(e.target.value)
            }
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
          />
        </div>

        {/* Time */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Clock3 className="h-4 w-4 text-amber-400" />
            {activeTrip === "Hourly Rental"
              ? "Start Time"
              : "Journey Time"}
          </label>

          <input
            type="time"
            value={journeyTime}
            onChange={(e) =>
              setJourneyTime(e.target.value)
            }
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition focus:border-amber-400 sm:h-14"
          />
        </div>

        {/* Search */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={handleSearch}
            className="h-12 w-full rounded-xl bg-amber-600 text-base font-semibold text-white transition hover:bg-amber-500 sm:h-14 sm:text-lg"
          >
            {activeTrip === "Hourly Rental"
              ? "Book Hourly Cab"
              : "Book Cabs"}
          </button>
        </div>

      </div>
    </div>
  );
}