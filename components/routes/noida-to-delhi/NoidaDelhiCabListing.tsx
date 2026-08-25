// src/components/routes/noida-delhi/NoidaDelhiCabListing.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CarFront,
  Clock3,
  Fuel,
  MapPin,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import {
  noidaDelhiCabs,
  type NoidaDelhiCab,
} from "@/data/routes/noida-delhi-cabs";

type FilterType =
  | "cabType"
  | "cabModel"
  | "fuelType";

const dates = [
  {
    day: "Sat, 08 Aug",
    active: false,
  },
  {
    day: "Sun, 09 Aug",
    active: false,
  },
  {
    day: "Mon, 10 Aug",
    active: false,
  },
  {
    day: "Tue, 11 Aug",
    active: true,
  },
  {
    day: "Wed, 12 Aug",
    active: false,
  },
  {
    day: "Thu, 13 Aug",
    active: false,
  },
];

const cabTypes = [
  {
    label: "SEDAN",
    value: "Sedan",
  },
  {
    label: "HATCHBACK",
    value: "Hatchback",
  },
  {
    label: "SUV",
    value: "SUV",
  },
  {
    label: "TEMPOTRAVELLER",
    value: "Tempo Traveller",
  },
];

const cabModels = [
  "Swift Dzire",
  "Maruti Suzuki Ertiga",
  "MG ZS",
  "Innova Crysta",
  "Toyota Innova",
  "Toyota Innova Hycross",
];

const fuelTypes = [
  "CNG",
  "DIESEL",
  "ELECTRIC",
  "PETROL",
];

export default function NoidaDelhiCabListing() {
  const [selectedCabTypes, setSelectedCabTypes] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleFilter = (
    type: FilterType,
    value: string
  ) => {
    if (type === "cabType") {
      setSelectedCabTypes((current) =>
        current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value]
      );
    }

    if (type === "cabModel") {
      setSelectedModels((current) =>
        current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value]
      );
    }

    if (type === "fuelType") {
      setSelectedFuelTypes((current) =>
        current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value]
      );
    }
  };

  const filteredCabs = useMemo(() => {
    return noidaDelhiCabs.filter((cab) => {
      const typeMatch =
        selectedCabTypes.length === 0 ||
        selectedCabTypes.includes(cab.category);

      const modelMatch =
        selectedModels.length === 0 ||
        cab.models.some((model) =>
          selectedModels.includes(model)
        );

      const fuelMatch =
        selectedFuelTypes.length === 0 ||
        selectedFuelTypes.includes(cab.fuelType);

      return typeMatch && modelMatch && fuelMatch;
    });
  }, [
    selectedCabTypes,
    selectedModels,
    selectedFuelTypes,
  ]);

  const clearFilters = () => {
    setSelectedCabTypes([]);
    setSelectedModels([]);
    setSelectedFuelTypes([]);
  };

  return (
    <section id="available-cabs"
      className="bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-12 border-b border-gray-300">
      <div className="mx-auto max-w-7xl">

        {/* Mobile Filter Button */}
        <div className="mb-5 flex items-center justify-between lg:hidden">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Available Cabs
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredCabs.length} vehicles available
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowMobileFilters(true)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700"
          >
            <CarFront size={17} />
            Filters
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">

          {/* Desktop Filters */}
          <aside className="hidden self-start lg:sticky lg:top-6 lg:block">
            <FilterPanel
              selectedCabTypes={selectedCabTypes}
              selectedModels={selectedModels}
              selectedFuelTypes={selectedFuelTypes}
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Main Listing */}
          <div className="min-w-0">

            {/* Date Navigation */}
            {/* <DateSelector /> */}

            {/* Heading */}
            <div className="">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Noida to New Delhi Taxi
              </h2>

              <p className="mt-1 text-sm text-gray-500 pb-2">
                Choose from comfortable cabs for your
                one-way journey from Noida to Delhi.
              </p>
            </div>

            {/* Active Filters */}
            {(selectedCabTypes.length > 0 ||
              selectedModels.length > 0 ||
              selectedFuelTypes.length > 0) && (
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-600">
                    Filters:
                  </span>

                  {[
                    ...selectedCabTypes,
                    ...selectedModels,
                    ...selectedFuelTypes,
                  ].map((filter) => (
                    <span
                      key={filter}
                      className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600"
                    >
                      {filter}
                    </span>
                  ))}

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-xs font-semibold text-red-500 hover:underline"
                  >
                    Clear all
                  </button>
                </div>
              )}

            {/* Cab Cards */}
            <div className="space-y-4">
              {filteredCabs.map((cab) => (
                <CabCard
                  key={cab.id}
                  cab={cab}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredCabs.length === 0 && (
              <div className="rounded-xl border border-gray-200 p-10 text-center">
                <CarFront
                  className="mx-auto text-gray-400"
                  size={40}
                />

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  No cabs found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing or clearing your filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowMobileFilters(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Select Filters
              </h2>

              <button
                type="button"
                onClick={() => setShowMobileFilters(false)}
                aria-label="Close filters"
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <FilterPanel
              selectedCabTypes={selectedCabTypes}
              selectedModels={selectedModels}
              selectedFuelTypes={selectedFuelTypes}
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
            />

            <button
              type="button"
              onClick={() => setShowMobileFilters(false)}
              className="mt-7 w-full rounded-lg bg-amber-500 py-3 font-semibold text-white"
            >
              Show {filteredCabs.length} Cabs
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Filter Panel */
/* -------------------------------------------------------------------------- */

function FilterPanel({
  selectedCabTypes,
  selectedModels,
  selectedFuelTypes,
  toggleFilter,
  clearFilters,
}: {
  selectedCabTypes: string[];
  selectedModels: string[];
  selectedFuelTypes: string[];
  toggleFilter: (
    type: FilterType,
    value: string
  ) => void;
  clearFilters: () => void;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          Select Filters
        </h2>

        {(selectedCabTypes.length > 0 ||
          selectedModels.length > 0 ||
          selectedFuelTypes.length > 0) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-amber-500"
            >
              Clear
            </button>
          )}
      </div>

      {/* Cab Type */}
      <FilterGroup title="Cab Type">
        {cabTypes.map((item) => (
          <CheckboxRow
            key={item.value}
            label={item.label}
            checked={selectedCabTypes.includes(item.value)}
            count={
              item.value === "Sedan"
                ? 2
                : item.value === "Hatchback"
                  ? 1
                  : item.value === "SUV"
                    ? 8
                    : 1
            }
            onChange={() =>
              toggleFilter(
                "cabType",
                item.value
              )
            }
          />
        ))}
      </FilterGroup>

      {/* Cab Model */}
      <FilterGroup title="Cab Model">
        {cabModels.map((model) => (
          <CheckboxRow
            key={model}
            label={model}
            checked={selectedModels.includes(model)}
            count={
              model === "Swift Dzire"
                ? 1
                : model === "Maruti Suzuki Ertiga"
                  ? 1
                  : model === "MG ZS"
                    ? 1
                    : model === "Innova Crysta"
                      ? 2
                      : model === "Toyota Innova"
                        ? 1
                        : 1
            }
            onChange={() =>
              toggleFilter(
                "cabModel",
                model
              )
            }
          />
        ))}
      </FilterGroup>

      {/* Fuel Type */}
      <FilterGroup title="Fuel Type">
        {fuelTypes.map((fuel) => (
          <CheckboxRow
            key={fuel}
            label={fuel}
            checked={selectedFuelTypes.includes(fuel)}
            count={
              fuel === "CNG"
                ? 4
                : fuel === "DIESEL"
                  ? 6
                  : fuel === "ELECTRIC"
                    ? 1
                    : 1
            }
            onChange={() =>
              toggleFilter(
                "fuelType",
                fuel
              )
            }
          />
        ))}
      </FilterGroup>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Filter Helpers */
/* -------------------------------------------------------------------------- */

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-4 text-base font-semibold text-gray-800">
        {title}
      </h3>

      <div className="space-y-3.5">
        {children}
      </div>
    </div>
  );
}

function CheckboxRow({
  label,
  checked,
  count,
  onChange,
}: {
  label: string;
  checked: boolean;
  count: number;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-[18px] w-[18px] rounded border-gray-300 accent-amber-500"
      />

      <span className="flex-1">
        {label}
      </span>

      <span className="text-xs text-gray-400">
        ({count})
      </span>
    </label>
  );
}

/* -------------------------------------------------------------------------- */
/* Date Selector */
/* -------------------------------------------------------------------------- */

function DateSelector() {
  return (
    <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <button
        type="button"
        aria-label="Previous dates"
        className="hidden w-10 shrink-0 items-center justify-center border-r border-gray-200 text-gray-400 hover:bg-gray-50 sm:flex"
      >
        <ArrowLeft size={18} />
      </button>

      <div className="flex min-w-0 flex-1 overflow-x-auto">
        {dates.map((date) => (
          <button
            type="button"
            key={date.day}
            className={`
              min-w-[115px]
              flex-1
              border-r
              border-gray-200
              px-3
              py-4
              text-sm
              font-semibold
              whitespace-nowrap
              transition
              last:border-r-0
              ${date.active
                ? "border-b-2 border-b-amber-500 bg-amber-50/30 text-amber-500"
                : "text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            {date.day}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next dates"
        className="flex w-10 shrink-0 items-center justify-center text-amber-500 hover:bg-gray-50"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Cab Card */
/* -------------------------------------------------------------------------- */

function CabCard({
  cab,
}: {
  cab: NoidaDelhiCab;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
      <div className="grid gap-5 p-5 lg:grid-cols-[135px_minmax(0,1fr)_150px] lg:items-center">

        {/* Vehicle Image */}
        <div className="flex h-[100px] items-center justify-center rounded-lg bg-amber-50">
          <div className="relative h-[75px] w-[115px]">
            <Image
              src={cab.image}
              alt={`${cab.name} taxi from Noida to Delhi`}
              fill
              sizes="115px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="min-w-0">

          {/* Name + Rating */}
          <div className="flex flex-wrap items-center gap-2">
            {cab.href ? (
              <Link
                href={cab.href}
                className="text-xl font-bold text-gray-900 hover:text-amber-600 hover:underline"
              >
                {cab.name}
              </Link>
            ) : (
              <h3 className="text-xl font-bold text-gray-900">
                {cab.name}
              </h3>
            )}

            <span className="text-xs text-gray-600">
              specific model
            </span>

            <span className="inline-flex items-center gap-1 rounded-sm bg-emerald-500 px-1.5 py-0.5 text-xs font-bold text-white">
              <Star
                size={11}
                fill="currentColor"
              />
              {cab.rating}/5
            </span>

            <span className="text-xs text-gray-400">
              {cab.ratingsCount} ratings
            </span>
          </div>

          {/* Basic Specs */}
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-700">
            <span>{cab.category}</span>
            <span>•</span>
            <span>{cab.ac ? "AC" : "Non AC"}</span>
            <span>•</span>
            <span>{cab.seats} Seats</span>
          </div>

          {/* Description */}
          <h4 className="mt-5 text-sm font-bold text-gray-900">
            {cab.description}
          </h4>

          {/* Features */}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">

            <Feature
              icon={<MapPin size={17} />}
              label="Extra km fare"
              value={cab.extraKmFare}
            />

            <Feature
              icon={<Clock3 size={17} />}
              label="Extra time fare"
              value={cab.extraTimeFare}
            />

            <Feature
              icon={<Fuel size={17} />}
              label="Fuel Type"
              value={
                cab.fuelType === "CNG"
                  ? "CNG with refill breaks"
                  : cab.fuelType
              }
            />

            <Feature
              icon={<ShieldCheck size={17} />}
              label="Cancellation"
              value={cab.cancellation}
              valueClassName="text-emerald-600"
            />
          </div>
        </div>

        {/* Price */}
        <div className="border-t pt-5 text-center lg:border-t-0 lg:pt-0 lg:text-right">

          <p className="text-2xl font-bold text-gray-950">
            ₹ {cab.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            + ₹{cab.taxes} (Taxes & Charges)
          </p>

          <a
            href="tel:+918448445504"
            className="mt-5 inline-flex items-center justify-center w-full rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600 sm:w-auto"
          >
            BOOK NOW
          </a>

        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Feature */
/* -------------------------------------------------------------------------- */

function Feature({
  icon,
  label,
  value,
  valueClassName = "text-slate-700",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className="mt-0.5 shrink-0 text-amber-500">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="font-medium text-gray-900">
          {label}
        </span>

        <span className="mx-2 text-gray-900">
          |
        </span>

        <span className={valueClassName}>
          {value}
        </span>
      </span>
    </div>
  );
}