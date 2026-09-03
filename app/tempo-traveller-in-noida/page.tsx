import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  CheckCircle2,
  Clock3,
  Headphones,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WalletCards,
} from "lucide-react";

import urlRoutes from "@/data/urlroute.json";
import Image from "next/image";
import { noidaLocalities } from "@/data/routes/noida";

type Service = {
  title: string;
  url: string;
};

type RouteGroup = {
  route: string;
  from: string;
  to: string;
  services: Service[];
};

const tempoFleet = [
  {
    name: "Luxury Tempo Traveller",
    slug: "luxury-tempo-traveller",
    image: "/cabs/tempofirst.webp",
    price: "₹25/km",
    seats: 12,
    doors: 4,
    luggage: 10,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Tempo Traveller",
  },
  {
    name: "12 Seater Tempo Traveller",
    slug: "12-seater-tempo-traveller",
    image: "/cabs/tempofirst.webp",
    price: "₹20/km",
    seats: 12,
    doors: 4,
    luggage: 10,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Tempo Traveller",
  },
  {
    name: "16 Seater Tempo Traveller",
    slug: "16-seater-tempo-traveller",
    image: "/cabs/tempofirst.webp",
    price: "₹20/km",
    seats: 16,
    doors: 4,
    luggage: 14,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Tempo Traveller",
  },
  {
    name: "20 Seater Tempo Traveller",
    slug: "20-seater-tempo-traveller",
    image: "/cabs/tempofirst.webp",
    price: "₹20/km",
    seats: 20,
    doors: 4,
    luggage: 18,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Tempo Traveller",
  },
  {
    name: "24 Seater Tempo Traveller",
    slug: "24-seater-tempo-traveller",
    image: "/cabs/tempofirst.webp",
    price: "₹20/km",
    seats: 24,
    doors: 4,
    luggage: 20,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Tempo Traveller",
  },
  {
    name: "Urbania",
    slug: "urbania",
    image: "/cabs/urbaniafirst.webp",
    price: "₹20/km",
    seats: 12,
    doors: 4,
    luggage: 8,
    airCondition: true,
    gps: true,
    driverChoice: true,
    category: "Urbania",
  },
];

export default function TempoTravellerPage() {
  const services: Service[] = urlRoutes
    .map((item) => item.url)
    .filter(
      (url) =>
        url.endsWith("-tempo-traveller") ||
        url.endsWith("-luxury-tempo-traveller") ||
        url.endsWith("-urbania-rental")
    )
    .map((url) => {
      let title = "";

      if (url.endsWith("-luxury-tempo-traveller")) {
        title = "Luxury Tempo Traveller";
      } else if (url.endsWith("-urbania-rental")) {
        title = "Urbania Rental";
      } else {
        title = "Tempo Traveller";
      }

      return {
        title,
        url,
      };
    });

  const routeGroups: RouteGroup[] = [];

  for (const service of services) {
    let routeName = service.url
      .replace(/^\//, "")
      .replace("-luxury-tempo-traveller", "")
      .replace("-urbania-rental", "")
      .replace("-tempo-traveller", "");

    const parts = routeName.split("-to-");

    if (parts.length !== 2) {
      continue;
    }

    const from = parts[0]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const to = parts[1]
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const route = `${from} → ${to}`;

    let group = routeGroups.find((item) => item.route === route);

    if (!group) {
      group = {
        route,
        from,
        to,
        services: [],
      };

      routeGroups.push(group);
    }

    group.services.push(service);
  }

  const totalRoutes = routeGroups.length;

  const stats = [
    {
      icon: Route,
      value: `${totalRoutes}+`,
      label: "Popular Routes",
    },
    {
      icon: BusFront,
      value: "3",
      label: "Travel Options",
    },
    {
      icon: Users,
      value: "12–26",
      label: "Seating Options",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Verified Service",
    },
  ];

  const benefits = [
    {
      icon: WalletCards,
      title: "Transparent Pricing",
      description:
        "Get clear rental options without confusing charges or hidden surprises.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Vehicles",
      description:
        "Choose comfortable and well-maintained vehicles for your group journey.",
    },
    {
      icon: Clock3,
      title: "Flexible Timings",
      description:
        "Plan your departure according to your trip schedule and convenience.",
    },
    {
      icon: Headphones,
      title: "Booking Assistance",
      description:
        "Get quick assistance when selecting the right vehicle for your journey.",
    },
  ];

  const vehicleTypes = [
    {
      title: "Tempo Traveller",
      seats: "12–26 Seater",
      description:
        "A practical group travel option for family trips, tours, weddings and corporate journeys.",
      icon: BusFront,
    },
    {
      title: "Luxury Tempo Traveller",
      seats: "Premium Seating",
      description:
        "A more comfortable travel experience with premium interiors for longer journeys.",
      icon: Sparkles,
    },
    {
      title: "Urbania Rental",
      seats: "Premium Group Travel",
      description:
        "Choose Urbania when you want a modern, spacious and premium group travel experience.",
      icon: Star,
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* =====================================================
          1. HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-gray-300 bg-amber-400">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-500/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Premium Group Travel
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Tempo Traveller & Urbania Rental
                <span className="block">
                  for Every Journey
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-800 sm:text-lg">
                Book comfortable Tempo Travellers, Luxury Tempo Travellers
                and Urbania rentals for family trips, group tours, weddings,
                corporate travel and outstation journeys.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#routes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Explore Routes
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:+918377809809"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-900/20 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-white"
                >
                  Call for Booking
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-900/10 bg-white/75 p-6 shadow-2xl backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Group Travel Made Simple
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Find the right vehicle for your group
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "12 to 26 seater options",
                  "Outstation & intercity travel",
                  "Luxury group transportation",
                  "Family & corporate bookings",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          2. STATS
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-300 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center px-4 py-7 text-center sm:py-9"
              >
                <Icon className="h-6 w-6 text-amber-500" />

                <p className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          3. INTRODUCTION
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Group Transportation
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Comfortable travel for families and groups
              </h2>
            </div>

            <div className="text-base leading-8 text-slate-600">
              <p>
                Travelling with a large group becomes easier when everyone can
                travel together. Our Tempo Traveller and Urbania rental options
                are suitable for local sightseeing, weekend trips, weddings,
                religious tours, corporate outings and long-distance travel.
              </p>

              <p className="mt-4">
                Explore available routes below and choose the service that
                best matches your group and travel requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          4. VEHICLE TYPES
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Choose Your Vehicle
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Travel your way
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Select a vehicle category according to your group size,
              comfort requirements and journey type.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {vehicleTypes.map((vehicle) => {
              const Icon = vehicle.icon;

              return (
                <div
                  key={vehicle.title}
                  className="group rounded-2xl border border-gray-300 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {vehicle.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-amber-600">
                    {vehicle.seats}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {vehicle.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
    TEMPO TRAVELLER FLEET
===================================================== */}
<section className="border-b border-gray-300 bg-white/95">
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">

    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
        <BusFront className="h-4 w-4" />
        Our Fleet
      </div>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        Choose the right Tempo Traveller for your group
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-600">
        From 12-seater Tempo Travellers to larger 24-seater vehicles,
        choose a comfortable group travel option according to your
        passenger count and luggage requirements.
      </p>
    </div>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tempoFleet.map((vehicle) => (
        <article
          key={vehicle.slug}
          className="group overflow-hidden rounded-3xl border border-gray-300 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
            <Image
              src={vehicle.image}
              alt={`${vehicle.name} rental`}
              fill
              className="object-contain transition duration-500 group-hover:scale-105"
              // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow">
              {vehicle.category}
            </div>

            <div className="absolute bottom-4 right-4 rounded-xl bg-amber-600 px-3 py-2 text-sm font-black text-white">
              {vehicle.price}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">

            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-black text-slate-950">
                  {vehicle.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Comfortable group travel option
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <BusFront className="h-5 w-5 text-amber-600" />
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-gray-300 rounded-xl border border-gray-300 bg-slate-50">
              <div className="px-2 py-3 text-center">
                <Users className="mx-auto h-4 w-4 text-amber-600" />
                <p className="mt-1 text-sm font-bold">
                  {vehicle.seats}
                </p>
                <p className="text-[11px] text-slate-500">
                  Seats
                </p>
              </div>

              <div className="px-2 py-3 text-center">
                <BusFront className="mx-auto h-4 w-4 text-amber-600" />
                <p className="mt-1 text-sm font-bold">
                  {vehicle.doors}
                </p>
                <p className="text-[11px] text-slate-500">
                  Doors
                </p>
              </div>

              <div className="px-2 py-3 text-center">
                <WalletCards className="mx-auto h-4 w-4 text-amber-600" />
                <p className="mt-1 text-sm font-bold">
                  {vehicle.luggage}
                </p>
                <p className="text-[11px] text-slate-500">
                  Bags
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              {vehicle.airCondition && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-amber-500" />
                  Air Conditioned
                </div>
              )}

              {vehicle.gps && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-amber-500" />
                  GPS Enabled
                </div>
              )}

              {vehicle.driverChoice && (
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-amber-500" />
                  Driver Support
                </div>
              )}

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-amber-500" />
                Outstation Ready
              </div>
            </div>

            <Link
              href={`/tempo-traveller/${vehicle.slug}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-500 hover:text-slate-950"
            >
              View Vehicle
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </article>
      ))}
    </div>

  </div>
</section>

      {/* =====================================================
          5. WHY CHOOSE US
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Built around your journey
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-300 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="h-7 w-7 text-amber-500" />

                  <h3 className="mt-4 font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          6. ROUTE DIRECTORY
      ====================================================== */}
      <section
        id="routes"
        className="border-b border-gray-300 bg-white/95"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Route Directory
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Explore Tempo Traveller routes
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Browse available routes and select Tempo Traveller, Luxury
                Tempo Traveller or Urbania rental services.
              </p>
            </div>

            <div className="rounded-xl border border-gray-300 bg-slate-50 px-4 py-3 text-sm font-semibold">
              {totalRoutes}+ Routes
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {routeGroups.map((group) => (
              <section
                key={group.route}
                className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm"
              >
                <div className="border-b border-gray-300 bg-slate-50 p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        Travel Route
                      </p>

                      <h3 className="mt-1 text-xl font-black sm:text-2xl">
                        {group.route}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      {group.from} to {group.to}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-3">
                  {group.services.map((service) => (
                    <Link
                      key={service.url}
                      href={service.url}
                      className="group rounded-xl border border-gray-300 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                          <BusFront className="h-5 w-5 text-amber-600" />
                        </div>

                        <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-500" />
                      </div>

                      <h4 className="mt-5 font-bold text-slate-900">
                        {service.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {group.route} {service.title.toLowerCase()} booking
                        options.
                      </p>

                      <span className="mt-4 inline-block text-sm font-bold text-amber-600">
                        View Details
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
    NOIDA LOCATIONS
===================================================== */}
<section className="border-b border-gray-300 bg-white/95">
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">

    <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">

      <div className="lg:sticky lg:top-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
          <MapPin className="h-4 w-4" />
          Service Areas
        </div>

        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
          Tempo Traveller available across Noida
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Book a Tempo Traveller from popular Noida sectors and
          localities for airport transfers, outstation trips,
          weddings, corporate travel and group tours.
        </p>

        <div className="mt-6 rounded-2xl border border-gray-300 bg-slate-50 p-5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-amber-500" />

            <div>
              <p className="font-bold text-slate-900">
                Local Noida Coverage
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Pickup support across major Noida areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {noidaLocalities.map((locality) => (
            <Link
              key={locality.slug}
              href={`/noida/${locality.slug}/12-seater-tempo-traveller`}
              className="group flex items-center gap-3 rounded-xl border border-gray-300 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                <MapPin className="h-4 w-4 text-amber-600" />
              </div>

              <span className="min-w-0 text-sm font-semibold text-slate-800">
                {locality.name}
              </span>

              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-500" />
            </Link>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-slate-50 p-4 text-center text-sm text-slate-500">
          Tempo Traveller pickup available from multiple Noida
          sectors and nearby areas.
        </div>
      </div>

    </div>

  </div>
</section>

      {/* =====================================================
          7. TRAVEL OCCASIONS
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Perfect For
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                One vehicle for the whole group
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Family Vacations",
                "Wedding Transportation",
                "Corporate Outings",
                "Weekend Trips",
                "Religious Tours",
                "School & College Trips",
                "Airport Transfers",
                "Multi-City Tours",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-300 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* =====================================================
    HOW TO BOOK
===================================================== */}
<section className="border-b border-gray-300 bg-white/95">
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">

    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
        <Sparkles className="h-4 w-4" />
        Easy Booking
      </div>

      <h2 className="mt-4 text-3xl font-black sm:text-4xl">
        How to book a Tempo Traveller
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Plan your group journey in just a few simple steps.
      </p>
    </div>

    <div className="relative mt-12 grid gap-5 md:grid-cols-3">

      {[
        {
          number: "01",
          icon: MapPin,
          title: "Share Your Route",
          text: "Tell us your pickup location, destination and travel date.",
        },
        {
          number: "02",
          icon: BusFront,
          title: "Choose Your Vehicle",
          text: "Select the seating capacity and vehicle that suits your group.",
        },
        {
          number: "03",
          icon: CheckCircle2,
          title: "Confirm Booking",
          text: "Confirm your vehicle and travel details with our booking team.",
        },
      ].map((step) => {
        const Icon = step.icon;

        return (
          <div
            key={step.number}
            className="relative rounded-2xl border border-gray-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400">
                <Icon className="h-6 w-6 text-slate-950" />
              </div>

              <span className="text-4xl font-black text-slate-100">
                {step.number}
              </span>
            </div>

            <h3 className="mt-6 text-xl font-black">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {step.text}
            </p>
          </div>
        );
      })}

    </div>

    <div className="mt-8 flex justify-center">
      <a
        href="tel:+918377809809"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 sm:w-auto"
      >
        <Phone className="h-4 w-4" />
        Talk to Booking Team
      </a>
    </div>

  </div>
</section>

      {/* =====================================================
          8. HOW IT WORKS
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Simple Booking
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Book your group ride in 3 steps
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose Your Route",
                text: "Select your preferred travel route from the available destinations.",
              },
              {
                number: "02",
                title: "Select Vehicle",
                text: "Compare Tempo Traveller, Luxury Tempo Traveller and Urbania options.",
              },
              {
                number: "03",
                title: "Confirm Your Trip",
                text: "Connect with the booking team and finalize your travel plan.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-300 bg-white p-7"
              >
                <span className="text-4xl font-black text-amber-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          9. COMFORT & SAFETY
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-300 bg-slate-950 p-6 text-white sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
                  Travel With Confidence
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Comfort matters on every kilometre
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-slate-300">
                  Group journeys can involve long hours on the road. Choose
                  a vehicle category that gives your passengers enough space,
                  comfort and convenience throughout the trip.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Spacious seating",
                  "Group-friendly interiors",
                  "Suitable for long journeys",
                  "Multiple seating capacities",
                  "Outstation travel",
                  "Dedicated booking assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          10. POPULAR ROUTES
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Popular Choices
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Popular group travel routes
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routeGroups.slice(0, 8).map((group) => (
              <Link
                key={group.route}
                href={group.services[0]?.url ?? "#"}
                className="group rounded-2xl border border-gray-300 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Route className="h-5 w-5 text-amber-500" />

                <h3 className="mt-4 font-bold">
                  {group.from} to {group.to}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Explore group travel options
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-amber-600">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          11. PRICING / VALUE
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Better Value
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                A practical choice for group travel
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Instead of arranging multiple smaller vehicles, travelling
                together in a group vehicle can make the journey easier to
                coordinate and more convenient for everyone.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-300 bg-slate-50 p-6 sm:p-8">
              <div className="space-y-4">
                {[
                  "Everyone travels together",
                  "Simpler trip coordination",
                  "Multiple seating capacities",
                  "Suitable for local & outstation trips",
                  "Ideal for families and larger groups",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-amber-500" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          12. FAQ
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-gray-300 rounded-2xl border border-gray-300 bg-white">
            {[
              {
                q: "What is a Tempo Traveller?",
                a: "A Tempo Traveller is a group transportation vehicle designed for travelling together with family, friends, colleagues or larger groups.",
              },
              {
                q: "What seating capacities are available?",
                a: "Depending on the vehicle and route, group travel options can include different seating capacities, including 12 to 26 seater configurations.",
              },
              {
                q: "Can I book a Tempo Traveller for an outstation trip?",
                a: "Yes. Tempo Travellers and Urbania vehicles are commonly suitable for intercity and outstation group journeys.",
              },
              {
                q: "What is the difference between Tempo Traveller and Urbania?",
                a: "Both are designed for group travel, while Urbania is positioned as a more premium and modern option for passengers looking for additional comfort.",
              },
              {
                q: "Can I book a vehicle for a wedding or corporate event?",
                a: "Yes. Group vehicles can be useful for weddings, corporate outings, events, family functions and multi-day tours.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group p-5 sm:p-6"
              >
                <summary className="cursor-pointer list-none pr-8 font-bold">
                  {faq.q}
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          13. INTERNAL LINKING
      ====================================================== */}
      <section className="border-b border-gray-300 bg-white/95">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-300 bg-slate-50 p-6 sm:p-10">

            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                Explore More
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Find the right travel service
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Explore related group transportation options and find a
                vehicle that fits your journey.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Tempo Traveller",
                  href: "/tempo-traveller",
                },
                {
                  title: "Luxury Tempo Traveller",
                  href: "/luxury-tempo-traveller",
                },
                {
                  title: "Urbania Rental",
                  href: "/urbania-rental",
                },
                {
                  title: "Taxi Services",
                  href: "/taxi-services",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl border border-gray-300 bg-white p-4 font-semibold transition hover:border-amber-400 hover:shadow-md"
                >
                  {item.title}

                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-amber-500" />
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          14. FINAL CTA
      ====================================================== */}
      <section className="bg-amber-400">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">

          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">

            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-800">
                Plan Your Journey
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Ready to travel together?
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-800">
                Explore your route, choose a vehicle and get started with
                your group travel plans.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="tel:+918377809809"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918377809809"
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/20 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
              >
                WhatsApp Us
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}