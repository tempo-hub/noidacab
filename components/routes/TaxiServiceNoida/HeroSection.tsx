"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleWhatsApp = () => {
    const message = `Hi, I want to book a taxi from Noida.

Pickup Location: ${pickup || "Not provided"}
Drop Location: ${drop || "Not provided"}
Pickup Date: ${date || "Not provided"}
Pickup Time: ${time || "Not provided"}

Please share the fare and booking details.`;

    const whatsappUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-300 to-amber-100 py-12 sm:py-12 lg:py-12">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left Content */}
          <div>
            {/* Trust Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-50">
                <ShieldCheck className="h-4 w-4 text-amber-600" />
              </span>

              <span className="text-sm font-medium text-slate-700">
                Trusted Taxi Service in Noida
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Reliable Taxi Service
              <span className="block text-amber-600">
                in Noida
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Book comfortable and reliable taxis in Noida for local travel,
              airport transfers, outstation trips, corporate travel and
              sightseeing. Choose from a wide range of well-maintained cars
              with professional drivers.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/918377809809"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Book a Taxi
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:8377809809"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                Call 8377809809
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
              <TrustPoint
                icon={ShieldCheck}
                title="Verified Drivers"
              />

              <TrustPoint
                icon={Clock3}
                title="24/7 Availability"
              />

              <TrustPoint
                icon={CheckCircle2}
                title="Transparent Fare"
              />
            </div>
          </div>

          {/* Right Booking Card */}
          <div
            id="booking"
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] sm:p-6">

              {/* Card Header */}
              <div className="border-b border-slate-100 pb-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-amber-600">
                      Quick Booking
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-slate-900">
                      Book Your Taxi
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Enter your trip details to get started.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50">
                    <MapPin className="h-5 w-5 text-amber-600" />
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4 pt-5">
                <LocationInput
                  label="Pickup Location"
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />

                <LocationInput
                  label="Drop Location"
                  placeholder="Enter destination"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Pickup Date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />

                  <InputField
                    label="Pickup Time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
                >
                  Get Fare Estimate
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Rating */}
              <div className="mt-5 flex items-center justify-center gap-2 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Trusted by thousands of travellers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Trust Point
--------------------------------- */

function TrustPoint({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
        <Icon className="h-4 w-4 text-slate-700" />
      </div>

      <span className="text-sm font-medium text-slate-700">
        {title}
      </span>
    </div>
  );
}

/* --------------------------------
   Location Input
--------------------------------- */

function LocationInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
        />
      </div>
    </div>
  );
}

/* --------------------------------
   Input Field
--------------------------------- */

function InputField({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
      />
    </div>
  );
}