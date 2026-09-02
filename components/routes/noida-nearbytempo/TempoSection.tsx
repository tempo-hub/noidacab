"use client";

import Image from "next/image";
import {
  BusFront,
  Check,
  Luggage,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import type { Vehicle } from "@/data/vehicles";
import type { RouteData } from "@/data/routes/taxiroutes";

type TempoSectionProps = {
  route: RouteData;
  vehicles: Vehicle[];
};

type FilterType = "seater" | "model";

/* -------------------------------------------------------------------------- */
/* Component */
/* -------------------------------------------------------------------------- */

export default function TempoSection({
  route,
  vehicles,
}: TempoSectionProps) {
  const [selectedSeaters, setSelectedSeaters] =
    useState<string[]>([]);

  const [selectedModels, setSelectedModels] =
    useState<string[]>([]);

  const [showMobileFilters, setShowMobileFilters] =
    useState(false);

  /* ------------------------------------------------------------------------ */
  /* Only Tempo Traveller vehicles */
  /* ------------------------------------------------------------------------ */

  const availableTempos = useMemo(() => {
    return vehicles.filter(
      (vehicle) =>
        vehicle.category === "Tempo Traveller"
    );
  }, [vehicles]);

  /* ------------------------------------------------------------------------ */
  /* Available seater options */
  /* ------------------------------------------------------------------------ */

  const availableSeaters = useMemo(() => {
    const seaters = availableTempos.map(
      (vehicle) => `${vehicle.seats} Seater`
    );

    return Array.from(new Set(seaters)).sort(
      (a, b) => {
        const aNumber = parseInt(a);
        const bNumber = parseInt(b);

        return aNumber - bNumber;
      }
    );
  }, [availableTempos]);

  /* ------------------------------------------------------------------------ */
  /* Available models */
  /* ------------------------------------------------------------------------ */

  const availableModels = useMemo(() => {
    return availableTempos.map(
      (vehicle) => vehicle.name
    );
  }, [availableTempos]);

  /* ------------------------------------------------------------------------ */
  /* Toggle Filters */
  /* ------------------------------------------------------------------------ */

  const toggleFilter = (
    type: FilterType,
    value: string
  ) => {
    if (type === "seater") {
      setSelectedSeaters((current) =>
        current.includes(value)
          ? current.filter(
              (item) => item !== value
            )
          : [...current, value]
      );
    }

    if (type === "model") {
      setSelectedModels((current) =>
        current.includes(value)
          ? current.filter(
              (item) => item !== value
            )
          : [...current, value]
      );
    }
  };

  /* ------------------------------------------------------------------------ */
  /* Clear Filters */
  /* ------------------------------------------------------------------------ */

  const clearFilters = () => {
    setSelectedSeaters([]);
    setSelectedModels([]);
  };

  /* ------------------------------------------------------------------------ */
  /* Filtered Tempos */
  /* ------------------------------------------------------------------------ */

  const filteredTempos = useMemo(() => {
    return availableTempos.filter(
      (vehicle) => {
        const seaterMatch =
          selectedSeaters.length === 0 ||
          selectedSeaters.includes(
            `${vehicle.seats} Seater`
          );

        const modelMatch =
          selectedModels.length === 0 ||
          selectedModels.includes(vehicle.name);

        return (
          seaterMatch &&
          modelMatch
        );
      }
    );
  }, [
    availableTempos,
    selectedSeaters,
    selectedModels,
  ]);

  return (
    <section
      id="available-tempos"
      className="border-b border-gray-300 bg-white/95 px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* ---------------------------------------------------------------- */}
        {/* Mobile Header */}
        {/* ---------------------------------------------------------------- */}

        <div className="mb-5 flex items-center justify-between lg:hidden">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Available Tempo Travellers
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredTempos.length} tempos
              available
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setShowMobileFilters(true)
            }
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-amber-400 hover:text-amber-600"
          >
            <BusFront size={17} />

            Filters
          </button>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Main Grid */}
        {/* ---------------------------------------------------------------- */}

        <div className="grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">

          {/* ============================================================ */}
          {/* Desktop Filters */}
          {/* ============================================================ */}

          <aside className="hidden self-start lg:sticky lg:top-6 lg:block">
            <TempoFilterPanel
              seaters={availableSeaters}
              models={availableModels}
              selectedSeaters={selectedSeaters}
              selectedModels={selectedModels}
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
            />
          </aside>

          {/* ============================================================ */}
          {/* Main Listing */}
          {/* ============================================================ */}

          <div
            id="tempo-listing"
            className="min-w-0"
          >

            {/* Heading */}

            <div className="mb-5">

              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Tempo Traveller from{" "}
                {route.from.name} to{" "}
                {route.to.name}
              </h2>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Choose from our comfortable and
                spacious Tempo Travellers for your
                journey from{" "}
                {route.from.name} to{" "}
                {route.to.name}.
              </p>
            </div>

            {/* ---------------------------------------------------------- */}
            {/* Active Filters */}
            {/* ---------------------------------------------------------- */}

            {(selectedSeaters.length > 0 ||
              selectedModels.length > 0) && (
              <div className="mb-5 flex flex-wrap items-center gap-2">

                <span className="text-sm font-medium text-gray-600">
                  Filters:
                </span>

                {[
                  ...selectedSeaters,
                  ...selectedModels,
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

            {/* ---------------------------------------------------------- */}
            {/* Tempo Cards */}
            {/* ---------------------------------------------------------- */}

            <div className="space-y-4">

              {filteredTempos.map(
                (vehicle) => (
                  <TempoCard
                    key={vehicle.slug}
                    vehicle={vehicle}
                    route={route}
                  />
                )
              )}

            </div>

            {/* ---------------------------------------------------------- */}
            {/* Empty State */}
            {/* ---------------------------------------------------------- */}

            {filteredTempos.length === 0 && (
              <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">

                <BusFront
                  className="mx-auto text-gray-400"
                  size={40}
                />

                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  No Tempo Travellers found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try changing or clearing your
                  filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
                >
                  Clear Filters
                </button>

              </div>
            )}

          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* Mobile Filter Drawer */}
      {/* ================================================================== */}

      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">

          {/* Overlay */}

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() =>
              setShowMobileFilters(false)
            }
          />

          {/* Drawer */}

          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">

            {/* Drawer Header */}

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-xl font-bold text-gray-900">
                Select Filters
              </h2>

              <button
                type="button"
                onClick={() =>
                  setShowMobileFilters(false)
                }
                aria-label="Close filters"
                className="rounded-full bg-slate-700 p-2 text-white transition hover:bg-gray-800"
              >
                <X size={20} />
              </button>

            </div>

            {/* Filters */}

            <TempoFilterPanel
              seaters={availableSeaters}
              models={availableModels}
              selectedSeaters={selectedSeaters}
              selectedModels={selectedModels}
              toggleFilter={toggleFilter}
              clearFilters={clearFilters}
            />

            {/* Apply */}

            <button
              type="button"
              onClick={() =>
                setShowMobileFilters(false)
              }
              className="mt-7 w-full rounded-lg bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-600"
            >
              Show{" "}
              {filteredTempos.length} Tempos
            </button>

          </div>
        </div>
      )}
    </section>
  );
}

/* ========================================================================= */
/* Filter Panel */
/* ========================================================================= */

function TempoFilterPanel({
  seaters,
  models,
  selectedSeaters,
  selectedModels,
  toggleFilter,
  clearFilters,
}: {
  seaters: string[];
  models: string[];
  selectedSeaters: string[];
  selectedModels: string[];
  toggleFilter: (
    type: FilterType,
    value: string
  ) => void;
  clearFilters: () => void;
}) {
  const hasFilters =
    selectedSeaters.length > 0 ||
    selectedModels.length > 0;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-lg font-bold text-gray-900">
          Select Filters
        </h2>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-semibold text-amber-500 hover:underline"
          >
            Clear
          </button>
        )}

      </div>

      {/* =============================================================== */}
      {/* Seater Filter */}
      {/* =============================================================== */}

      <FilterGroup title="Seater">

        {seaters.map((seater) => (
          <CheckboxRow
            key={seater}
            label={seater}
            checked={selectedSeaters.includes(
              seater
            )}
            onChange={() =>
              toggleFilter(
                "seater",
                seater
              )
            }
          />
        ))}

      </FilterGroup>

      {/* =============================================================== */}
      {/* Model Filter */}
      {/* =============================================================== */}

      <FilterGroup title="Tempo Model">

        {models.map((model) => (
          <CheckboxRow
            key={model}
            label={model}
            checked={selectedModels.includes(
              model
            )}
            onChange={() =>
              toggleFilter(
                "model",
                model
              )
            }
          />
        ))}

      </FilterGroup>

    </div>
  );
}

/* ========================================================================= */
/* Filter Group */
/* ========================================================================= */

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

/* ========================================================================= */
/* Checkbox */
/* ========================================================================= */

function CheckboxRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
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

    </label>
  );
}

/* ========================================================================= */
/* Tempo Card */
/* ========================================================================= */

function TempoCard({
  vehicle,
  route,
}: {
  vehicle: Vehicle;
  route: RouteData;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:shadow-md">

      <div className="p-5">

        {/* =============================================================== */}
        {/* Main Card Grid */}
        {/* =============================================================== */}

        <div className="grid grid-cols-[minmax(0,1fr)_120px] gap-4 lg:grid-cols-[135px_minmax(0,1fr)_150px] lg:items-center">

          {/* ============================================================= */}
          {/* Vehicle Image */}
          {/* ============================================================= */}

          <div className="order-2 flex h-[100px] items-center justify-center rounded-lg bg-amber-50 lg:order-1">

            <div className="relative h-[75px] w-[115px]">

              <Image
                src={vehicle.image}
                alt={`${vehicle.name} Tempo Traveller from ${route.from.name} to ${route.to.name}`}
                fill
                sizes="115px"
                className="object-contain"
              />

            </div>

          </div>

          {/* ============================================================= */}
          {/* Vehicle Details */}
          {/* ============================================================= */}

          <div className="order-1 min-w-0 lg:order-2">

            <h3 className="text-xl font-bold text-gray-900">
              {vehicle.name}
            </h3>

            {/* Basic Information */}

            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-700">

              <span>
                Tempo Traveller
              </span>

              <span>•</span>

              <span>
                {vehicle.airCondition
                  ? "AC"
                  : "Non AC"}
              </span>

              <span>•</span>

              <span>
                {vehicle.seats} Seats
              </span>

            </div>

            {/* Features */}

            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:mt-5 lg:gap-3">

              <VehicleFeature
                icon={<Users size={17} />}
                label="Seats"
                value={`${vehicle.seats} passengers`}
              />

              <VehicleFeature
                icon={<Luggage size={17} />}
                label="Luggage"
                value={`${vehicle.luggage} bags`}
              />

              <VehicleFeature
                icon={<Check size={17} />}
                label="GPS"
                value={
                  vehicle.gps
                    ? "Available"
                    : "Not available"
                }
              />

              <VehicleFeature
                icon={<Check size={17} />}
                label="Driver"
                value={
                  vehicle.driverChoice
                    ? "Driver included"
                    : "Not included"
                }
              />

            </div>

          </div>

          {/* ============================================================= */}
          {/* Desktop Price */}
          {/* ============================================================= */}

          <div className="hidden lg:order-3 lg:block lg:text-right">

            <p className="text-2xl font-bold text-gray-950">
              {vehicle.price}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Starting fare
            </p>

            <a
              href="tel:+918377809809"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
            >
              BOOK NOW
            </a>

          </div>

        </div>

        {/* =============================================================== */}
        {/* Mobile Booking */}
        {/* =============================================================== */}

        <div className="mt-5 border-t border-gray-100 pt-5 lg:hidden">

          <div className="flex items-center justify-between gap-4">

            <div>

              <p className="text-2xl font-bold text-gray-950">
                {vehicle.price}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Starting fare
              </p>

            </div>

            <a
              href="tel:+918377809809"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-600"
            >
              BOOK NOW
            </a>

          </div>

        </div>

      </div>

    </article>
  );
}

/* ========================================================================= */
/* Vehicle Feature */
/* ========================================================================= */

function VehicleFeature({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2 text-sm">

      <span className="mt-0.5 shrink-0 text-amber-500">
        {icon}
      </span>

      <span>

        <span className="font-medium text-gray-900">
          {label}
        </span>

        <span className="mx-2 text-gray-900">
          |
        </span>

        <span className="text-slate-700">
          {value}
        </span>

      </span>

    </div>
  );
}