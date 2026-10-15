"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftRight,
  BadgeIndianRupee,
  Building2,
  CalendarDays,
  Car,
  CarFront,
  Check,
  CheckCircle2,
  CircleIcon,
  Clock3,
  Edit3,
  Fuel,
  Map,
  MapPin,
  Medal,
  Minus,
  Moon,
  Phone,
  Plane,
  Plus,
  ReceiptText,
  Route as RouteIcon,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  TrafficCone,
  TrainFront,
  Users,
  X,
} from "lucide-react";

import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import type { ParsedRouteDetail } from "@/data/popularRoutesData";
import { parseDistanceKm } from "@/data/popularRoutesData";

export interface DynamicTaxiRoutePageProps {
  route: ParsedRouteDetail;
}

type BookingType = "oneWay" | "roundTrip" | "hourly" | "airport";
type FilterType = "cabType" | "cabModel" | "fuelType";

interface DynamicCabItem {
  id: string;
  name: string;
  category: "Sedan" | "Hatchback" | "SUV" | "Tempo Traveller";
  models: string[];
  seats: number;
  ac: boolean;
  rating: number;
  ratingsCount: number;
  description: string;
  price: number;
  taxes: number;
  extraKmFare: string;
  extraTimeFare: string;
  fuelType: "CNG" | "DIESEL" | "ELECTRIC" | "PETROL";
  cancellation: string;
  image: string;
  href?: string;
}

const bookingTabs = [
  { id: "oneWay" as BookingType, label: "Outstation One Way" },
  { id: "roundTrip" as BookingType, label: "Outstation Round Trip" },
  { id: "hourly" as BookingType, label: "Hourly" },
  { id: "airport" as BookingType, label: "Airport Transfer" },
];

const cabTypes = [
  { label: "SEDAN", value: "Sedan" },
  { label: "HATCHBACK", value: "Hatchback" },
  { label: "SUV", value: "SUV" },
  { label: "TEMPO TRAVELLER", value: "Tempo Traveller" },
];

const fuelTypes = ["CNG", "DIESEL", "ELECTRIC", "PETROL"];

export default function DynamicTaxiRoutePage({ route }: DynamicTaxiRoutePageProps) {
  const fromCity = route.from;
  const toCity = route.to;
  const fromSlug = fromCity.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const toSlug = toCity.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const distKm = parseDistanceKm(route.distance, 45);

  // --------------------------------------------------------------------------
  // Dynamic Cab Catalog calculation
  // --------------------------------------------------------------------------
  const dynamicCabs: DynamicCabItem[] = useMemo(() => {
    // Dynamic base prices based on distance and standard commercial rates
    const sedanBase = Math.max(1100, Math.round(distKm * 10 * 1.5 + 400));
    const hatchbackBase = Math.max(1000, Math.round(distKm * 9 * 1.5 + 350));
    const ertigaBase = Math.max(1280, Math.round(distKm * 13 * 1.5 + 450));
    const innovaBase = Math.max(1460, Math.round(distKm * 16 * 1.5 + 500));
    const tempoBase = Math.max(2600, Math.round(distKm * 20 * 1.5 + 600));
    const urbaniaBase = Math.max(2800, Math.round(distKm * 25 * 1.5 + 800));

    return [
      {
        id: "dzire",
        name: "Dzire",
        category: "Sedan",
        models: ["Swift Dzire"],
        seats: 4,
        ac: true,
        rating: 4.8,
        ratingsCount: 467,
        description: `Affordable and spacious sedan for comfortable ${fromCity} to ${toCity} travel.`,
        price: sedanBase,
        taxes: Math.round(sedanBase * 0.08),
        extraKmFare: "₹10/km after base",
        extraTimeFare: "₹166 per hr after 4hr",
        fuelType: "CNG",
        cancellation: "Free till 6 hours of departure",
        image: "/cabs/dzirefirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-dzire-taxi`,
      },
      {
        id: "etios",
        name: "Etios",
        category: "Sedan",
        models: ["Toyota Etios"],
        seats: 4,
        ac: true,
        rating: 4.7,
        ratingsCount: 312,
        description: `Reliable sedan with comfortable seating for ${fromCity} to ${toCity} journeys.`,
        price: sedanBase,
        taxes: Math.round(sedanBase * 0.08) + 5,
        extraKmFare: "₹10/km after base",
        extraTimeFare: "₹175 per hr after 4hr",
        fuelType: "DIESEL",
        cancellation: "Free till 6 hours of departure",
        image: "/cabs/etiosfirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-etios-taxi`,
      },
      {
        id: "amaze",
        name: "Amaze",
        category: "Sedan",
        models: ["Honda Amaze"],
        seats: 4,
        ac: true,
        rating: 4.8,
        ratingsCount: 289,
        description: `Comfortable premium sedan with large boot space for ${fromCity} to ${toCity} rides.`,
        price: sedanBase,
        taxes: Math.round(sedanBase * 0.08) + 10,
        extraKmFare: "₹10/km after base",
        extraTimeFare: "₹180 per hr after 4hr",
        fuelType: "PETROL",
        cancellation: "Free till 6 hours of departure",
        image: "/cabs/amazefirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-amaze-taxi`,
      },
      {
        id: "wagonr",
        name: "WagonR",
        category: "Hatchback",
        models: ["WagonR"],
        seats: 4,
        ac: true,
        rating: 4.6,
        ratingsCount: 1520,
        description: `Economical compact hatchback for affordable everyday ${fromCity} to ${toCity} travel.`,
        price: hatchbackBase,
        taxes: Math.round(hatchbackBase * 0.08),
        extraKmFare: "₹9/km after base",
        extraTimeFare: "₹150 per hr after 4hr",
        fuelType: "CNG",
        cancellation: "Free till 6 hours of departure",
        image: "/cabs/dzirefirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-taxi`,
      },
      {
        id: "ertiga",
        name: "Ertiga",
        category: "SUV",
        models: ["Maruti Suzuki Ertiga"],
        seats: 6,
        ac: true,
        rating: 4.8,
        ratingsCount: 820,
        description: `Spacious 6-seater family SUV with roof AC vents for group travel from ${fromCity} to ${toCity}.`,
        price: ertigaBase,
        taxes: Math.round(ertigaBase * 0.08),
        extraKmFare: "₹13/km after base",
        extraTimeFare: "₹200 per hr after 4hr",
        fuelType: "CNG",
        cancellation: "Free till 6 hours of departure",
        image: "/cabs/ertigafirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-ertiga-taxi`,
      },
      {
        id: "innova-crysta",
        name: "Innova Crysta",
        category: "SUV",
        models: ["Innova Crysta"],
        seats: 7,
        ac: true,
        rating: 4.9,
        ratingsCount: 1120,
        description: `Premium spacious SUV for family, business, and long-distance travel from ${fromCity} to ${toCity}.`,
        price: innovaBase,
        taxes: Math.round(innovaBase * 0.08),
        extraKmFare: "₹16/km after base",
        extraTimeFare: "₹250 per hr after 4hr",
        fuelType: "DIESEL",
        cancellation: "Free till 6 hours of departure",
        image: "/cabs/innovafirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-innova-crysta-taxi`,
      },
      {
        id: "12-seater-tempo",
        name: "12 Seater Tempo Traveller",
        category: "Tempo Traveller",
        models: ["12 Seater Tempo Traveller"],
        seats: 12,
        ac: true,
        rating: 4.8,
        ratingsCount: 340,
        description: `Comfortable 12-seater pushback Tempo Traveller for group trips from ${fromCity} to ${toCity}.`,
        price: tempoBase,
        taxes: Math.round(tempoBase * 0.08),
        extraKmFare: "₹20/km after base",
        extraTimeFare: "₹280 per hr after 4hr",
        fuelType: "DIESEL",
        cancellation: "Free till 12 hours of departure",
        image: "/cabs/tempofirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-12-seater-tempo-traveller`,
      },
      {
        id: "force-urbania",
        name: "Force Urbania",
        category: "Tempo Traveller",
        models: ["Force Urbania"],
        seats: 12,
        ac: true,
        rating: 4.9,
        ratingsCount: 180,
        description: `Ultra-luxury Force Urbania with reclining captain seats from ${fromCity} to ${toCity}.`,
        price: urbaniaBase,
        taxes: Math.round(urbaniaBase * 0.08),
        extraKmFare: "₹25/km after base",
        extraTimeFare: "₹300 per hr after 4hr",
        fuelType: "DIESEL",
        cancellation: "Free till 12 hours of departure",
        image: "/cabs/urbaniafirst.webp",
        href: `/route/${fromSlug}-to-${toSlug}-urbania-rental`,
      },
    ];
  }, [fromCity, toCity, fromSlug, toSlug, distKm]);

  // Cab filter models
  const cabModels = useMemo(() => {
    return Array.from(new Set(dynamicCabs.flatMap((c) => c.models)));
  }, [dynamicCabs]);

  // --------------------------------------------------------------------------
  // 1. Hero State
  // --------------------------------------------------------------------------
  const [bookingType, setBookingType] = useState<BookingType>("oneWay");
  const [fromLoc, setFromLoc] = useState(fromCity);
  const [toLoc, setToLoc] = useState(toCity);
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState("");

  const getToday = () => new Date().toISOString().split("T")[0];

  const handleSwap = () => {
    const temp = fromLoc;
    setFromLoc(toLoc);
    setToLoc(temp);
  };

  const handleTabChange = (type: BookingType) => {
    setBookingType(type);
    if (type !== "roundTrip") setReturnDate("");
    if (type === "airport") {
      setFromLoc(fromCity);
      setToLoc(`${toCity} Airport`);
    } else {
      setFromLoc(fromCity);
      setToLoc(toCity);
    }
  };

  const handleSearch = () => {
    document.getElementById("available-cabs")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // --------------------------------------------------------------------------
  // 2. Listing Filter State
  // --------------------------------------------------------------------------
  const [selectedCabTypes, setSelectedCabTypes] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleFilter = (type: FilterType, value: string) => {
    if (type === "cabType") {
      setSelectedCabTypes((cur) =>
        cur.includes(value) ? cur.filter((i) => i !== value) : [...cur, value]
      );
    }
    if (type === "cabModel") {
      setSelectedModels((cur) =>
        cur.includes(value) ? cur.filter((i) => i !== value) : [...cur, value]
      );
    }
    if (type === "fuelType") {
      setSelectedFuelTypes((cur) =>
        cur.includes(value) ? cur.filter((i) => i !== value) : [...cur, value]
      );
    }
  };

  const clearFilters = () => {
    setSelectedCabTypes([]);
    setSelectedModels([]);
    setSelectedFuelTypes([]);
  };

  const filteredCabs = useMemo(() => {
    return dynamicCabs.filter((cab) => {
      const typeMatch =
        selectedCabTypes.length === 0 || selectedCabTypes.includes(cab.category);
      const modelMatch =
        selectedModels.length === 0 ||
        cab.models.some((m) => selectedModels.includes(m));
      const fuelMatch =
        selectedFuelTypes.length === 0 || selectedFuelTypes.includes(cab.fuelType);
      return typeMatch && modelMatch && fuelMatch;
    });
  }, [dynamicCabs, selectedCabTypes, selectedModels, selectedFuelTypes]);

  // --------------------------------------------------------------------------
  // FAQs State
  // --------------------------------------------------------------------------
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const dynamicFaqs = [
    {
      question: `What is the taxi fare from ${fromCity} to ${toCity}?`,
      answer: `The taxi fare from ${fromCity} to ${toCity} starts from ₹${dynamicCabs[0].price.toLocaleString(
        "en-IN"
      )} for a Sedan (Dzire / Etios), ₹${dynamicCabs[4].price.toLocaleString(
        "en-IN"
      )} for a 6-seater SUV (Ertiga), and ₹${dynamicCabs[5].price.toLocaleString(
        "en-IN"
      )} for a luxury Innova Crysta. All fares include clean AC vehicle, fuel, and experienced highway chauffeur.`,
    },
    {
      question: `How long does it take by cab from ${fromCity} to ${toCity}?`,
      answer: `The approximate driving distance between ${fromCity} and ${toCity} is ${route.distance}, and the journey typically takes around ${route.duration} via ${route.highway}. Actual travel time may vary based on traffic conditions and your exact pickup sector.`,
    },
    {
      question: `Can I book a one-way taxi from ${fromCity} to ${toCity}?`,
      answer: `Yes! NoidaCab provides 100% verified one-way cabs from ${fromCity} to ${toCity}. You only pay for the distance travelled on that single drop, with zero return fare charges.`,
    },
    {
      question: `Are toll taxes and parking charges included in the fare?`,
      answer: `Our fares include vehicle rental, fuel charges, and driver allowances. Highway toll taxes and state road taxes are transparently charged as per actual receipts, ensuring complete honesty with zero hidden charges.`,
    },
    {
      question: `How do I book a cab from ${fromCity} to ${toCity}?`,
      answer: `You can book instantly online using the booking form above, or call our 24x7 customer helpline at +91-8377809809, or message us directly on WhatsApp for an immediate booking confirmation.`,
    },
    {
      question: `Is doorstep pickup available in ${fromCity}?`,
      answer: `Yes, we offer doorstep pickup across all residential sectors, commercial complexes, hotels, railway stations, and airport terminals in ${fromCity}, with direct drop at your doorstep in ${toCity}.`,
    },
  ];

  // --------------------------------------------------------------------------
  // Schema.org JSON-LD for SEO
  // --------------------------------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `${fromCity} to ${toCity} Taxi Service`,
    description: route.description,
    url: `https://www.noidacab.com/route/${route.canonicalSlug}`,
    telephone: "+918377809809",
    provider: {
      "@type": "LocalBusiness",
      name: "NoidaCab",
    },
    areaServed: [
      { "@type": "City", name: fromCity },
      { "@type": "City", name: toCity },
    ],
  };

  const whatsappBookingUrl = `https://wa.me/918377809809?text=${encodeURIComponent(
    `Hello NoidaCab, I want to book a taxi from ${fromCity} to ${toCity} (${route.distance}, Starting ${route.fare}). Please confirm fare & availability.`
  )}`;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH SEARCH & BOOKING BAR */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 py-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,white_1px,transparent_1px)] [background-size:18px_18px]" />
        </div>

        <div className="relative mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
          {/* Top Row: Service Tabs + Heading */}
          <div className="mb-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Service Tabs */}
            <div className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-4 gap-1 rounded-full bg-gray-100 p-1">
              {bookingTabs.map((tab) => {
                const active = bookingType === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`min-w-0 rounded-full px-3 py-2 text-center text-xs font-semibold leading-tight transition sm:px-5 sm:py-2 sm:text-sm 
                      ${
                        active
                          ? "bg-[#ffb300] text-white shadow-sm"
                          : "text-gray-600 hover:bg-amber-50 hover:text-amber-600"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Heading */}
            <h1 className="text-center text-2xl font-black text-white sm:text-3xl lg:text-right tracking-tight">
              {fromCity} To {toCity} Cab Booking
            </h1>
          </div>

          {/* Interactive Booking Search Bar */}
          <div className="overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="grid lg:grid-cols-[1.2fr_1.2fr_1fr_1fr_255px]">
              {/* From */}
              <div className="relative border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-amber-500" />
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">From</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleSwap}
                    aria-label="Swap pickup and destination"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition hover:bg-amber-100"
                    title="Swap locations"
                  >
                    <ArrowLeftRight size={14} />
                  </button>
                </div>
                <input
                  value={fromLoc}
                  onChange={(e) => setFromLoc(e.target.value)}
                  placeholder="Pickup location"
                  className="mt-1 w-full bg-transparent text-xl sm:text-2xl font-bold text-gray-900 outline-none"
                />
                <p className="mt-1 truncate text-xs font-medium text-gray-500">
                  Doorstep pickup across all localities
                </p>
              </div>

              {/* To */}
              <div className="border-b border-gray-200 bg-amber-50/40 p-5 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-amber-500" />
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">To</p>
                </div>
                <input
                  value={toLoc}
                  onChange={(e) => setToLoc(e.target.value)}
                  placeholder="Destination"
                  className="mt-1 w-full bg-transparent text-xl sm:text-2xl font-bold text-gray-900 outline-none"
                />
                <p className="mt-1 truncate text-xs font-medium text-gray-500">
                  Direct drop at residence, hotel, or station
                </p>
              </div>

              {/* Departure Date */}
              <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-amber-500" />
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Departure</p>
                </div>
                <label className="mt-1 block cursor-pointer">
                  <input
                    type="date"
                    min={getToday()}
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full cursor-pointer bg-transparent text-base sm:text-xl font-bold text-gray-900 outline-none"
                  />
                </label>
              </div>

              {/* Time */}
              <div className="border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-2">
                  <Clock3 size={18} className="text-amber-500" />
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Pickup Time</p>
                </div>
                <select
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                  className="mt-1 w-full cursor-pointer appearance-none bg-transparent text-base sm:text-xl font-bold text-gray-900 outline-none"
                >
                  {Array.from({ length: 48 }, (_, index) => {
                    const hour = Math.floor(index / 2);
                    const minute = index % 2 === 0 ? "00" : "30";
                    const value = `${String(hour).padStart(2, "0")}:${minute}`;
                    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                    const period = hour >= 12 ? "PM" : "AM";
                    return (
                      <option key={value} value={value}>
                        {String(displayHour).padStart(2, "0")}:{minute} {period}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Search Button */}
              <button
                type="button"
                onClick={handleSearch}
                className="flex min-h-[90px] lg:min-h-full items-center justify-center gap-2 bg-orange-500 px-6 text-xl font-bold text-white transition hover:bg-orange-600 shadow-md cursor-pointer"
              >
                <Search size={22} />
                <span>SEARCH</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. AVAILABLE CABS LISTING GRID WITH INTERACTIVE FILTERS */}
      {/* ========================================================================= */}
      <section
        id="available-cabs"
        className="bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-12 border-b border-gray-300"
      >
        <div className="mx-auto max-w-7xl">
          {/* Mobile Filter Button */}
          <div className="mb-5 flex items-center justify-between lg:hidden">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Available Cabs</h2>
              <p className="mt-1 text-sm text-gray-500">
                {filteredCabs.length} vehicles available for {fromCity} → {toCity}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 bg-white"
            >
              <CarFront size={17} />
              Filters
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden self-start lg:sticky lg:top-6 lg:block">
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
                <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-3">
                  <h2 className="text-base font-bold text-gray-900">Select Filters</h2>
                  {(selectedCabTypes.length > 0 ||
                    selectedModels.length > 0 ||
                    selectedFuelTypes.length > 0) && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="text-xs font-semibold text-amber-600 hover:underline"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Cab Type Filter */}
                <div className="mb-6">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Cab Type
                  </h3>
                  <div className="space-y-2.5">
                    {cabTypes.map((item) => (
                      <label
                        key={item.value}
                        className="flex cursor-pointer items-center gap-3 text-sm text-gray-700 hover:text-amber-600"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCabTypes.includes(item.value)}
                          onChange={() => toggleFilter("cabType", item.value)}
                          className="h-4 w-4 rounded border-gray-300 accent-amber-500"
                        />
                        <span className="flex-1">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cab Model Filter */}
                <div className="mb-6">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Cab Model
                  </h3>
                  <div className="space-y-2.5">
                    {cabModels.map((model) => (
                      <label
                        key={model}
                        className="flex cursor-pointer items-center gap-3 text-sm text-gray-700 hover:text-amber-600"
                      >
                        <input
                          type="checkbox"
                          checked={selectedModels.includes(model)}
                          onChange={() => toggleFilter("cabModel", model)}
                          className="h-4 w-4 rounded border-gray-300 accent-amber-500"
                        />
                        <span className="flex-1">{model}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fuel Type Filter */}
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Fuel Type
                  </h3>
                  <div className="space-y-2.5">
                    {fuelTypes.map((fuel) => (
                      <label
                        key={fuel}
                        className="flex cursor-pointer items-center gap-3 text-sm text-gray-700 hover:text-amber-600"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFuelTypes.includes(fuel)}
                          onChange={() => toggleFilter("fuelType", fuel)}
                          className="h-4 w-4 rounded border-gray-300 accent-amber-500"
                        />
                        <span className="flex-1">{fuel}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Listing Area */}
            <div className="min-w-0">
              {/* Header */}
              <div className="mb-5 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight sm:text-3xl">
                  {fromCity} to {toCity} Taxi
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Choose from comfortable, verified cabs for your one-way or round trip journey from{" "}
                  {fromCity} to {toCity}. Distance: {route.distance} ({route.duration}).
                </p>
              </div>

              {/* Active Filter Pills */}
              {(selectedCabTypes.length > 0 ||
                selectedModels.length > 0 ||
                selectedFuelTypes.length > 0) && (
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">Active Filters:</span>
                  {[...selectedCabTypes, ...selectedModels, ...selectedFuelTypes].map((filter) => (
                    <span
                      key={filter}
                      className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700"
                    >
                      {filter}
                    </span>
                  ))}
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-bold text-red-500 hover:underline ml-2"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Cab Cards */}
              <div className="space-y-4">
                {filteredCabs.map((cab) => (
                  <article
                    key={cab.id}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-amber-400 hover:shadow-md"
                  >
                    <div className="grid gap-5 p-5 lg:grid-cols-[140px_minmax(0,1fr)_160px] lg:items-center">
                      {/* Vehicle Image */}
                      <div className="flex h-[110px] items-center justify-center rounded-xl bg-amber-50/60 p-2 border border-amber-100">
                        <div className="relative h-[85px] w-[125px]">
                          <Image
                            src={cab.image}
                            alt={`${cab.name} taxi from ${fromCity} to ${toCity}`}
                            fill
                            sizes="125px"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Details */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          {cab.href ? (
                            <Link
                              href={cab.href}
                              className="text-xl font-bold text-gray-900 hover:text-amber-600 hover:underline"
                            >
                              {cab.name}
                            </Link>
                          ) : (
                            <h3 className="text-xl font-bold text-gray-900">{cab.name}</h3>
                          )}
                          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                            {cab.category}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-600 px-1.5 py-0.5 text-xs font-bold text-white">
                            <Star size={11} fill="currentColor" />
                            {cab.rating}/5
                          </span>
                          <span className="text-xs text-gray-400">({cab.ratingsCount} reviews)</span>
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-600">
                          <span>{cab.category}</span>
                          <span>•</span>
                          <span>{cab.ac ? "Dual AC" : "Non AC"}</span>
                          <span>•</span>
                          <span>{cab.seats} Seats</span>
                          <span>•</span>
                          <span className="text-emerald-700 font-bold">Doorstep Pickup</span>
                        </div>

                        <p className="mt-3 text-xs sm:text-sm text-gray-600">{cab.description}</p>

                        {/* Specs Grid */}
                        <div className="mt-3 grid gap-2 sm:grid-cols-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-amber-500 shrink-0" />
                            <span>Extra km: <strong>{cab.extraKmFare}</strong></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock3 size={14} className="text-amber-500 shrink-0" />
                            <span>Extra time: <strong>{cab.extraTimeFare}</strong></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Fuel size={14} className="text-amber-500 shrink-0" />
                            <span>Fuel: <strong>{cab.fuelType}</strong></span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                            <span className="text-emerald-700 font-medium">{cab.cancellation}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price & Booking Action */}
                      <div className="border-t border-gray-100 pt-4 text-center lg:border-t-0 lg:pt-0 lg:text-right">
                        <p className="text-2xl sm:text-3xl font-black text-gray-950">
                          ₹ {cab.price.toLocaleString("en-IN")}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          + ₹{cab.taxes} (Taxes & Tolls as actual)
                        </p>

                        <div className="mt-4 flex flex-col gap-2">
                          <a
                            href={`https://wa.me/918377809809?text=${encodeURIComponent(
                              `Hello NoidaCab, I want to book a ${cab.name} from ${fromCity} to ${toCity} (₹${cab.price}). Please confirm availability.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
                          >
                            <Send size={14} />
                            BOOK NOW
                          </a>
                          <a
                            href="tel:+918377809809"
                            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50"
                          >
                            <Phone size={13} className="text-amber-600" />
                            Call 8377809809
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Empty State */}
              {filteredCabs.length === 0 && (
                <div className="rounded-2xl border border-gray-200 p-10 text-center bg-gray-50">
                  <CarFront className="mx-auto text-gray-400" size={40} />
                  <h3 className="mt-4 text-lg font-bold text-gray-900">No cabs matched your filters</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Please try clearing filters to view all available vehicles.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-4 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-600"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowMobileFilters(false)}
            />
            <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">
              <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-3">
                <h2 className="text-lg font-bold text-gray-900">Filter Vehicles</h2>
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cab Types */}
              <div className="mb-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Cab Type
                </h3>
                <div className="space-y-2.5">
                  {cabTypes.map((item) => (
                    <label key={item.value} className="flex items-center gap-3 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={selectedCabTypes.includes(item.value)}
                        onChange={() => toggleFilter("cabType", item.value)}
                        className="h-4 w-4 rounded border-gray-300 accent-amber-500"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Models */}
              <div className="mb-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Cab Model
                </h3>
                <div className="space-y-2.5">
                  {cabModels.map((model) => (
                    <label key={model} className="flex items-center gap-3 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(model)}
                        onChange={() => toggleFilter("cabModel", model)}
                        className="h-4 w-4 rounded border-gray-300 accent-amber-500"
                      />
                      <span>{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuel */}
              <div className="mb-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  Fuel Type
                </h3>
                <div className="space-y-2.5">
                  {fuelTypes.map((fuel) => (
                    <label key={fuel} className="flex items-center gap-3 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={selectedFuelTypes.includes(fuel)}
                        onChange={() => toggleFilter("fuelType", fuel)}
                        className="h-4 w-4 rounded border-gray-300 accent-amber-500"
                      />
                      <span>{fuel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowMobileFilters(false)}
                className="mt-4 w-full rounded-xl bg-amber-500 py-3 font-bold text-white"
              >
                Show {filteredCabs.length} Cabs
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 3. STEP-BY-STEP BOOKING GUIDE */}
      {/* ========================================================================= */}
      <section className="bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-10 border-b border-gray-300">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-7 lg:p-8">
          <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            {fromCity} to {toCity} Cab Booking Guide
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            {[
              {
                title: "Multi-City Trip Options",
                description: `Customize your journey with multiple stops between ${fromCity} and ${toCity}.`,
                icon: Map,
              },
              {
                title: "Choosing the Right Cab Type",
                description: `Select the ideal cab for your journey from ${fromCity} to ${toCity} (Sedan, SUV, or Tempo).`,
                icon: CarFront,
              },
              {
                title: "Driver Quality and Experience",
                description: `Understand the professionalism of verified chauffeurs driving along ${route.highway || "NH expressways"}.`,
                icon: Medal,
              },
              {
                title: "Modifying Your Booking",
                description: "Learn how to easily adjust your cab booking details, pickup time, or vehicle.",
                icon: Edit3,
              },
              {
                title: "Night Travel Policies",
                description: `Guidelines for 24x7 late-night journeys and safe travel between ${fromCity} and ${toCity}.`,
                icon: Moon,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex min-h-[86px] items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4 transition hover:border-slate-300 hover:shadow-xs sm:px-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-amber-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-slate-600">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RATINGS & RIDER TRUST METRICS */}
      {/* ========================================================================= */}
      <section className="bg-white/95 py-6 sm:py-12 border-b border-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              What Travellers Say About {fromCity} to {toCity} Cabs on NoidaCab
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="grid lg:grid-cols-[280px_1fr]">
              {/* Rating Card */}
              <div className="relative overflow-hidden bg-slate-900 p-7 text-white sm:p-8">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-slate-300">Rider Rating</span>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-5xl font-black tracking-tight">4.9</span>
                    <span className="mb-1 text-sm text-slate-400">/ 5</span>
                  </div>
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={17} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-400">
                    Consistently rated for dependable service, comfortable vehicles, and professional drivers.
                  </p>
                </div>
              </div>

              {/* Service Points */}
              <div className="grid divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  {
                    icon: Clock3,
                    title: "On-Time Pickups",
                    description: `Drivers arrive on schedule so your ${fromCity} to ${toCity} journey starts without delays.`,
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trusted Drivers",
                    description: "Travel with experienced, verified drivers focused on safety and highway comfort.",
                  },
                  {
                    icon: Sparkles,
                    title: "Clean & Comfortable",
                    description: "Well-maintained sanitized cars with chilled AC for smooth long-distance rides.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-6 transition hover:bg-amber-50/40 sm:p-7">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                        <Icon size={21} />
                      </div>
                      <h3 className="mt-5 text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Quote Banner */}
            <div className="border-t border-slate-100 bg-gradient-to-r from-amber-50/70 via-white to-white px-6 py-5 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <ThumbsUp size={17} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Built around everyday riders</p>
                    <p className="mt-0.5 text-xs text-slate-600">
                      Whether heading to {toCity} for business, family, or sightseeing, our focus is seamless travel.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-sm font-bold text-amber-600">
                  {fromCity} → {toCity}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY BOOK WITH US */}
      {/* ========================================================================= */}
      <section className="bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-10 border-b border-gray-300">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Book with Us
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white">
            <div className="grid md:grid-cols-3">
              {[
                {
                  title: "Easy & Flexible Booking",
                  description: "Choose your cab, trip type and pickup time with a simple 2-minute booking process.",
                  icon: BadgeIndianRupee,
                },
                {
                  title: "Clear Pricing",
                  description: "Transparent per-km rate, pay 25% advance or full fare online with zero hidden costs.",
                  icon: CarFront,
                },
                {
                  title: "Trusted Cab Service",
                  description: `Verified drivers, comfortable vehicles and dependable coverage across ${fromCity} & ${toCity}.`,
                  icon: ReceiptText,
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className={`flex items-center gap-4 px-6 py-6 sm:px-7 ${
                      index !== 2 ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffb300] text-amber-900 shadow-xs">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 sm:text-lg">{benefit.title}</h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ABOUT THE TAXI SERVICE */}
      {/* ========================================================================= */}
      <section className="bg-white/95 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-gray-300">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            About {fromCity} to {toCity} Taxi Service
          </h2>

          <div className="mt-5 max-w-5xl space-y-4 text-base leading-7 text-slate-600">
            <p>
              Our {fromCity} to {toCity} cab service gives you a fixed, upfront fare before you step into
              the car, so you know exactly what you are paying. Choose from hatchbacks, sedans, SUVs, and
              tempo travellers depending on your group size, luggage, and journey requirements.
            </p>
            <p>
              Need a taxi from {fromCity} to {toCity} for a single one-way drop, or a round trip cab that
              waits and brings you back home? Both are available with zero surge pricing. We also handle
              direct airport and railway station pickups and drops.
            </p>
            <p>
              Our experienced highway drivers know the fastest routes, including {route.highway || "major expressways"},
              which keeps your travel swift and pleasant even during peak commuting periods.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Flexible Pickup",
                description: `Pickup available from all residential and commercial localities across ${fromCity}.`,
              },
              {
                icon: Car,
                title: "Multiple Cab Options",
                description: "Choose from hatchbacks, sedans, SUVs, and tempo travellers based on group size.",
              },
              {
                icon: Clock3,
                title: "Convenient Travel",
                description: "Book your cab according to your preferred pickup date and exact departure time.",
              },
              {
                icon: ShieldCheck,
                title: "Comfortable Journey",
                description: "Travel in a private AC cab with a verified driver dedicated solely to your party.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Internal Links Card */}
          <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50/50 p-5 sm:p-6">
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Explore {fromCity} to {toCity} Taxi Options
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link
                href={`/route/${fromSlug}-to-${toSlug}-taxi-fare`}
                className="font-medium text-amber-600 hover:underline"
              >
                {fromCity} to {toCity} Taxi Fare
              </Link>
              <Link
                href={`/route/${fromSlug}-to-${toSlug}-one-way-taxi`}
                className="font-medium text-amber-600 hover:underline"
              >
                {fromCity} to {toCity} One Way Taxi
              </Link>
              <Link
                href={`/route/${fromSlug}-to-${toSlug}-sedan-taxi`}
                className="font-medium text-amber-600 hover:underline"
              >
                {fromCity} to {toCity} Sedan Taxi
              </Link>
              <Link
                href={`/route/${fromSlug}-to-${toSlug}-suv-taxi`}
                className="font-medium text-amber-600 hover:underline"
              >
                {fromCity} to {toCity} SUV Taxi
              </Link>
              <Link
                href={`/route/${fromSlug}-to-${toSlug}-innova-crysta-taxi`}
                className="font-medium text-amber-600 hover:underline"
              >
                {fromCity} to {toCity} Innova Crysta Taxi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TAXI FARE OVERVIEW */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {fromCity} to {toCity} Taxi Fare
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Your {fromCity} to {toCity} taxi fare depends on the vehicle you pick, the distance ({route.distance}),
              and trip type (one-way or round trip). Every fare quote comes with a transparent breakdown with zero
              hidden extras at the end of the trip.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-4 rounded-xl border border-amber-100 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Want detailed {fromCity} to {toCity} taxi fare information?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                View vehicle-wise pricing, per-km rates, toll policy, and applicable charges on our dedicated fare page.
              </p>
            </div>

            <Link
              href={`/route/${fromSlug}-to-${toSlug}-taxi-fare`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-700 shadow-sm"
            >
              View Detailed Fare
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TAXI OPTIONS COMPARISON TABLE */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Taxi Options for {fromCity} to {toCity}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Pick a cab based on how many passengers are travelling and how much luggage you are carrying.
              Couples and solo travelers usually prefer a Sedan, while families and groups choose an SUV or Tempo Traveller.
            </p>
          </div>

          <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-5 py-4 font-bold text-slate-700">Vehicle</th>
                    <th className="px-5 py-4 font-bold text-slate-700">Seating Capacity</th>
                    <th className="px-5 py-4 font-bold text-slate-700">Luggage Capacity</th>
                    <th className="px-5 py-4 font-bold text-slate-700">Best Suited For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { vehicle: "Hatchback (WagonR)", seating: "4 passengers", luggage: "1 to 2 bags", suitedFor: "Solo trips, quick city drops, budget travel" },
                    { vehicle: "Sedan (Dzire / Etios / Amaze)", seating: "4 passengers", luggage: "2 to 3 bags", suitedFor: "Couples, small families, business transfers" },
                    { vehicle: "SUV (Ertiga / Innova)", seating: "6 to 7 passengers", luggage: "3 to 4 bags", suitedFor: "Families, extra luggage, group highway comfort" },
                    { vehicle: "Tempo Traveller", seating: "9 to 17 passengers", luggage: "Large capacity", suitedFor: "Large family trips, weddings, corporate group tours" },
                  ].map((item) => (
                    <tr key={item.vehicle} className="border-t border-slate-200">
                      <th scope="row" className="px-5 py-4 text-left font-bold text-slate-900">
                        {item.vehicle}
                      </th>
                      <td className="px-5 py-4 text-slate-600">{item.seating}</td>
                      <td className="px-5 py-4 text-slate-600">{item.luggage}</td>
                      <td className="px-5 py-4 text-slate-600">{item.suitedFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. VEHICLE COMPARISON CARDS */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Which Taxi Is Best for Your {fromCity} to {toCity} Journey?
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Choose your vehicle based on seating, luggage, comfort requirements, and journey budget.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Dzire",
                category: "Sedan",
                passengers: "Up to 4",
                bestFor: "Budget-friendly travel",
                description: `A practical choice for individuals and small families looking for an economical ${fromCity} to ${toCity} taxi.`,
                href: `/route/${fromSlug}-to-${toSlug}-dzire-taxi`,
              },
              {
                name: "Ertiga",
                category: "MPV / SUV",
                passengers: "Up to 6",
                bestFor: "Families & small groups",
                description: `A spacious option for families and groups needing flexible seating and luggage space on the ${fromCity} to ${toCity} highway.`,
                href: `/route/${fromSlug}-to-${toSlug}-ertiga-taxi`,
              },
              {
                name: "Innova Crysta",
                category: "Premium SUV",
                passengers: "Up to 7",
                bestFor: "Comfort & executive travel",
                description: `A premium option with unmatched highway stability and plush interiors for travel between ${fromCity} and ${toCity}.`,
                href: `/route/${fromSlug}-to-${toSlug}-innova-crysta-taxi`,
              },
              {
                name: "Etios",
                category: "Sedan",
                passengers: "Up to 4",
                bestFor: "Spacious legroom",
                description: `Comfortable sedan with large 592L boot space, ideal for passenger luggage between ${fromCity} and ${toCity}.`,
                href: `/route/${fromSlug}-to-${toSlug}-etios-taxi`,
              },
              {
                name: "Amaze",
                category: "Sedan",
                passengers: "Up to 4",
                bestFor: "Smooth premium drive",
                description: `Comfortable sedan with class-leading cabin refinement for comfortable commuting between ${fromCity} and ${toCity}.`,
                href: `/route/${fromSlug}-to-${toSlug}-amaze-taxi`,
              },
            ].map((v) => (
              <article
                key={v.name}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={v.href}
                      className="text-xl font-bold text-slate-900 hover:text-amber-600 hover:underline"
                    >
                      {v.name}
                    </Link>
                    <p className="mt-1 text-xs text-slate-500">{v.category}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                    <Users size={13} />
                    {v.passengers}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Best for</p>
                  <p className="mt-1 font-semibold text-slate-800 text-sm">{v.bestFor}</p>
                </div>

                <p className="mt-3 flex-1 text-xs sm:text-sm leading-6 text-slate-600">
                  {v.description}
                </p>

                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600" />
                    Private dedicated cab
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-600" />
                    Certified for {route.highway || "Expressway"}
                  </div>
                </div>

                <Link
                  href={v.href}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700"
                >
                  View {v.name} Taxi
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm leading-6 text-slate-600">
              Travelling with a larger group? Explore our{" "}
              <Link
                href={`/route/${fromSlug}-to-${toSlug}-12-seater-tempo-traveller`}
                className="font-bold text-amber-600 hover:underline"
              >
                {fromCity} to {toCity} Tempo Traveller
              </Link>{" "}
              options for group transportation.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. TRAVEL GUIDE, DISTANCE & ROUTE FACTS */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {fromCity} to {toCity} Route, Distance & Travel Time
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Book a one-way or round-trip cab from {fromCity} to {toCity}. You pay only for the distance
              covered on that journey, with verified highway chauffeurs taking the quickest highway corridor.
            </p>
          </div>

          {/* Visual Route Connector */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <MapPin size={24} />
                </div>
                <h3 className="mt-3 font-bold text-slate-900">{fromCity}</h3>
                <p className="mt-1 text-xs text-slate-500">Pickup</p>
              </div>

              <div className="hidden h-0.5 w-32 bg-slate-300 sm:block lg:w-52" />
              <div className="flex flex-col items-center sm:hidden">
                <div className="h-8 w-0.5 bg-slate-300" />
                <RouteIcon size={20} className="text-amber-500" />
                <div className="h-8 w-0.5 bg-slate-300" />
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <MapPin size={24} />
                </div>
                <h3 className="mt-3 font-bold text-slate-900">{toCity}</h3>
                <p className="mt-1 text-xs text-slate-500">Drop-off</p>
              </div>
            </div>
          </div>

          {/* 4 Route Facts */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Distance",
                value: route.distance,
                description: `Approximate driving distance between ${fromCity} and ${toCity}.`,
              },
              {
                icon: Clock3,
                title: "Travel Time",
                value: route.duration,
                description: "Journey time via the fastest expressway or highway corridor.",
              },
              {
                icon: RouteIcon,
                title: "Primary Highway",
                value: route.highway || "Expressway",
                description: "Selected for smooth driving and minimal city congestion.",
              },
              {
                icon: TrafficCone,
                title: "Traffic Conditions",
                value: "Variable",
                description: "Allow additional travel time during rush hours and festive weekends.",
              },
            ].map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.title} className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Icon size={20} />
                  </div>
                  <p className="mt-3 text-xs font-semibold text-slate-500">{fact.title}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{fact.value}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{fact.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. POPULAR PICKUP LOCATIONS */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Popular Pickup Locations in {fromCity}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              You can book a {fromCity} to {toCity} taxi from all major residential, commercial, and
              industrial areas across {fromCity}.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fromCity.toLowerCase() === "noida"
              ? [
                  { name: "Sector 18", description: "Central commercial & shopping district in Noida.", icon: Building2 },
                  { name: "Sector 62", description: "Major IT & corporate hub near NH 24 / NH 9.", icon: Building2 },
                  { name: "Sector 137", description: "Prime residential sectors along Noida Expressway.", icon: MapPin },
                  { name: "Sector 15 & 16", description: "Direct connectivity to Delhi and metro stations.", icon: Building2 },
                  { name: "Sector 50 & 76", description: "Popular residential localities for family pickups.", icon: MapPin },
                  { name: "Noida Extension", description: "Greater Noida West residential hubs.", icon: MapPin },
                  { name: "Pari Chowk", description: "Major Greater Noida expressway junction point.", icon: MapPin },
                  { name: "Sector 128 / 135", description: "Expressway IT corridors and corporate parks.", icon: Building2 },
                ].map((loc) => {
                  const Icon = loc.icon;
                  return (
                    <div
                      key={loc.name}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-amber-200 hover:bg-amber-50/30"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-amber-600 shadow-xs">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-slate-900">{loc.name}</h3>
                      <p className="mt-1 text-xs text-slate-600">{loc.description}</p>
                    </div>
                  );
                })
              : [
                  { name: `${fromCity} City Center`, description: `Central commercial hub in ${fromCity}.`, icon: Building2 },
                  { name: `${fromCity} Railway Station`, description: `Station pickup with driver meeting point.`, icon: TrainFront },
                  { name: "Expressway Entry Toll", description: `Direct highway boarding for intercity travel.`, icon: MapPin },
                  { name: "Doorstep Home Pickup", description: `Any residence, apartment or hotel in ${fromCity}.`, icon: MapPin },
                ].map((loc) => {
                  const Icon = loc.icon;
                  return (
                    <div
                      key={loc.name}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-amber-200 hover:bg-amber-50/30"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-amber-600 shadow-xs">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-slate-900">{loc.name}</h3>
                      <p className="mt-1 text-xs text-slate-600">{loc.description}</p>
                    </div>
                  );
                })}
          </div>

          {/* Airport & Railway Transfers */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Plane size={21} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Airport Transfers</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                  Our airport taxi service tracks flight timing and adjusts pickup accordingly. Your driver
                  meets you at the terminal exit with no waiting in taxi queues.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <TrainFront size={21} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Railway Station Transfers</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                  Direct doorstep pickup and drop at major railway stations. Your driver arrives before your train
                  scheduled arrival with bags assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. ROUTE INFORMATION TABLE */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Route Information: {fromCity} to {toCity}
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Your driver selects the quickest path based on current GPS traffic and your exact destination sector.
            </p>
          </div>

          <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-5 py-4 font-bold text-slate-700">Route</th>
                    <th className="px-5 py-4 font-bold text-slate-700">Via Highway</th>
                    <th className="px-5 py-4 font-bold text-slate-700">Approx Distance</th>
                    <th className="px-5 py-4 font-bold text-slate-700">Approx Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200">
                    <th scope="row" className="px-5 py-4 text-left font-bold text-slate-900">
                      {fromCity} to {toCity} (Fastest Expressway)
                    </th>
                    <td className="px-5 py-4 text-slate-600">{route.highway || "Expressway / NH Corridor"}</td>
                    <td className="px-5 py-4 text-slate-600">{route.distance}</td>
                    <td className="px-5 py-4 text-slate-600">{route.duration}</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <th scope="row" className="px-5 py-4 text-left font-bold text-slate-900">
                      {fromCity} Outer Bypass to {toCity}
                    </th>
                    <td className="px-5 py-4 text-slate-600">Peripheral Expressway / Link Road</td>
                    <td className="px-5 py-4 text-slate-600">{Math.round(distKm * 1.1)} km</td>
                    <td className="px-5 py-4 text-slate-600">{route.duration}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. POPULAR CITY ROUTES COMPONENT (USER REQUESTED SECTION) */}
      {/* ========================================================================= */}
      <PopularCityRoutes
        cityName={fromCity}
        vehicleSlug="taxi"
        vehicleName="Taxi"
      />

      {/* ========================================================================= */}
      {/* 14. RELATED TRAVEL SERVICES */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">
                Other Taxi Services near {fromCity}
              </h2>
              <div className="rounded-xl border border-slate-200 bg-white">
                <ul className="divide-y divide-slate-100 px-5 py-2">
                  {[
                    { title: `Taxi service in ${fromCity}`, href: `/${fromSlug}-taxi-service` },
                    { title: `Taxi service in ${toCity}`, href: `/${toSlug}-taxi-service` },
                    { title: `Taxi service in Delhi NCR`, href: `/delhi-taxi-service` },
                    { title: `Taxi service in Gurgaon`, href: `/gurgaon-taxi-service` },
                    { title: `Taxi service in Greater Noida`, href: `/greater-noida-taxi-service` },
                    { title: `Taxi service in Ghaziabad`, href: `/ghaziabad-taxi-service` },
                  ].map((link, index) => (
  <li key={`${link.href}-${index}`}>
    <span className="block py-3 text-sm text-slate-700">
      {link.title}
    </span>
  </li>
))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl sm:text-2xl font-bold text-slate-900">
                Outstation Cabs from {fromCity}
              </h2>
              <div className="rounded-xl border border-slate-200 bg-white">
                <ul className="divide-y divide-slate-100 px-5 py-2">
                  {[
                    { title: `${fromCity} to Agra Cab`, href: `/route/${fromSlug}-to-agra-taxi` },
                    { title: `${fromCity} to Jaipur Cab`, href: `/route/${fromSlug}-to-jaipur-taxi` },
                    { title: `${fromCity} to Haridwar Cab`, href: `/route/${fromSlug}-to-haridwar-taxi` },
                    { title: `${fromCity} to Dehradun Cab`, href: `/route/${fromSlug}-to-dehradun-taxi` },
                    { title: `${fromCity} to Chandigarh Cab`, href: `/route/${fromSlug}-to-chandigarh-taxi` },
                    { title: `${fromCity} to Mathura Vrindavan Cab`, href: `/route/${fromSlug}-to-mathura-taxi` },
                  ].map((link, index) => (
  <li key={`${link.href}-${index}`}>
    <span className="block py-3 text-sm text-slate-700">
      {link.title}
    </span>
  </li>
))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="bg-[#FFFDF5] py-12 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Everything you need to know before booking your ride from {fromCity} to {toCity} with NoidaCab.
            </p>
          </div>

          <div className="space-y-4">
            {dynamicFaqs.map((faq, index) => {
              const open = activeFaq === index;
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl bg-white shadow-xs border border-amber-100">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition hover:bg-gray-50 cursor-pointer"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{faq.question}</h3>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600 shrink-0 ml-3">
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {open && (
                    <div className="border-t border-gray-100 px-5 sm:px-6 pb-5 pt-3">
                      <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 16. FINAL BOOKING CTA BANNER */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#ffb300] px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-16 shadow-lg">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white">
                <CarFront size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                Ready to Book Your {fromCity} to {toCity} Taxi?
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-amber-950 sm:text-base font-medium">
                Choose your pickup location, travel time, and preferred vehicle to book a comfortable,
                verified cab from {fromCity} to {toCity} with zero surge pricing.
              </p>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-black sm:w-auto"
                >
                  <Send size={16} />
                  Book Taxi on WhatsApp
                </a>

                <a
                  href="tel:+918377809809"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-amber-800 shadow-md transition hover:bg-amber-50 sm:w-auto"
                >
                  <Phone size={16} className="text-amber-600" />
                  Call +91-8377809809
                </a>
              </div>

              <div className="mt-7 flex flex-col items-center justify-center gap-3 text-xs sm:text-sm text-amber-950 sm:flex-row sm:gap-6 font-semibold">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={16} />
                  Verified Chauffeurs
                </span>
                <span className="hidden h-4 w-px bg-amber-800/40 sm:block" />
                <span className="inline-flex items-center gap-1.5">
                  <CarFront size={16} />
                  Dual AC Clean Vehicles
                </span>
                <span className="hidden h-4 w-px bg-amber-800/40 sm:block" />
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={16} />
                  24x7 Doorstep Pickup
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
