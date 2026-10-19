"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { CityInfo } from "@/lib/cityData";
import PopularCityRoutes from "@/components/cab/PopularCityRoutes";
import RelatedCityRoutes from "@/components/cab/RelatedCityRoutes";

const PHONE_NUMBER = "8377809809";
const DISPLAY_PHONE = "+91-8377809809";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/chikucabs/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/chikucabs1/",
  },
  {
    name: "X",
    href: "https://x.com/chiku_cabs",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@chikucabs",
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/chikucabs/",
  },
];

const otherCityContactList = [
  { name: "Noida", slug: "noida", href: "/noida-taxi-contact-number" },
  { name: "Delhi", slug: "delhi", href: "/delhi-taxi-contact-number" },
  { name: "Agra", slug: "agra", href: "/agra-taxi-contact-number" },
  { name: "Lucknow", slug: "lucknow", href: "/lucknow-taxi-contact-number" },
  { name: "Varanasi", slug: "varanasi", href: "/varanasi-taxi-contact-number" },
  { name: "Ayodhya", slug: "ayodhya", href: "/ayodhya-taxi-contact-number" },
  { name: "Prayagraj", slug: "prayagraj", href: "/prayagraj-taxi-contact-number" },
  { name: "Haridwar", slug: "haridwar", href: "/haridwar-taxi-contact-number" },
  { name: "Mathura", slug: "mathura", href: "/mathura-taxi-contact-number" },
];

interface Props {
  city: CityInfo;
}

export default function DynamicCityContactPage({ city }: Props) {
  const cleanSlug = city.slug.toLowerCase().trim();
  const cleanName = city.name.toLowerCase().trim();
  const isRegionalContactPage =
    city.name.toLowerCase() === city.state.toLowerCase() ||
    [
      "punjab",
      "uttarakhand",
      "uttrakhand",
      "uttar-pradesh",
      "uttarpradesh",
      "haryana",
      "rajasthan",
    ].includes(cleanSlug) ||
    [
      "punjab",
      "uttarakhand",
      "uttar pradesh",
      "haryana",
      "rajasthan",
    ].includes(cleanName) ||
    cleanSlug.includes("uttar-pradesh") ||
    cleanSlug.includes("uttarpradesh") ||
    cleanName.includes("uttar pradesh");
  const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
    `Hi NoidaCab, I need an immediate taxi booking / assistance in ${city.name}. Please share vehicle availability and fares.`
  )}`;

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `https://www.noidacab.com/${city.slug}-taxi-contact-number#webpage`,
        url: `https://www.noidacab.com/${city.slug}-taxi-contact-number`,
        name: `${city.name} Taxi Contact Number | 24/7 Helpline`,
        description: `24x7 Cab booking helpline and customer support contact number for ${city.name}. Call +91-8377809809 for immediate driver dispatch.`,
      },
      {
        "@type": "TaxiService",
        "@id": `https://www.noidacab.com/${city.slug}-taxi-contact-number#service`,
        name: `NoidaCab - 24/7 ${city.name} Taxi Booking Helpline`,
        telephone: DISPLAY_PHONE,
        url: `https://www.noidacab.com/${city.slug}-taxi-contact-number`,
        areaServed: [city.name, city.state, "North India"],
        priceRange: "₹₹",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is the 24/7 taxi booking contact number in ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `You can reach NoidaCab in ${city.name} at ${DISPLAY_PHONE} anytime 24/7. Immediate doorstep cab dispatch is available across ${city.name}.`,
            },
          },
          {
            "@type": "Question",
            name: `Can I book a cab in ${city.name} via WhatsApp?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, you can directly WhatsApp us at +91-${PHONE_NUMBER} with your pickup locality, destination, and travel date for instant fare quotations and driver allocation.`,
            },
          },
          {
            "@type": "Question",
            name: `How quickly does a taxi arrive in ${city.name} after calling?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Our commercial drivers are stationed near key sectors and hubs in ${city.name}, ensuring doorstep pickup within 15 to 25 minutes of booking confirmation.`,
            },
          },
        ],
      },
    ],
  };

  const otherCities = otherCityContactList.filter(
    (c) => c.slug.toLowerCase() !== city.slug.toLowerCase()
  );

  return (
    <main className="bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* 1. HERO - Exact style matching ContactPage.tsx */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_35%)]" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              <MessageCircle className="h-4 w-4" />
              {city.name} Cab Support
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {city.name} Taxi Contact Number
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Need help with a taxi booking, route, fare or vehicle in {city.name}?
              Get in touch with the Noida Cab support team. We are
              available 24/7 to assist with your travel requirements.
            </p>

            {/* Direct Action CTAs in Hero */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" />
                Call: {DISPLAY_PHONE}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-base font-bold text-white shadow-xs transition hover:bg-slate-800 hover:border-slate-600"
              >
                <MessageCircle className="h-5 w-5 text-emerald-400" />
                Instant WhatsApp Booking
              </a>
            </div>

            {/* Quick Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>24×7 Cab Dispatch Desk</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>15–20 Min Doorstep Pickup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero Surge Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CONTENT - Exact 2-Column layout matching ContactPage.tsx file */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">

            {/* LEFT - CONTACT DETAILS */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold text-amber-600">
                  Get in Touch
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  We're Here to Help in {city.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Contact us for taxi bookings, vehicle availability,
                  route information, fare queries or general assistance across {city.name}.
                </p>
              </div>

              {/* Contact Items */}
              <div className="mt-8 space-y-5">
                {/* Operations Hub / Address */}
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  title={`${city.name} Dispatch Desk & Hub`}
                >
                  <p>
                    {city.localities[0] || "City Center"}, {city.name},
                    <br />
                    {city.state} - 24/7 Operations Desk
                  </p>
                </ContactItem>

                {/* Phone */}
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone & 24/7 Helpline"
                >
                  <a
                    href={`tel:+91${PHONE_NUMBER}`}
                    className="font-semibold text-slate-800 transition hover:text-amber-600"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </ContactItem>

                {/* Email */}
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                >
                  <a
                    href="mailto:info@noidacabs.com"
                    className="font-semibold text-slate-800 transition hover:text-amber-600"
                  >
                    info@noidacabs.com
                  </a>
                </ContactItem>

                {/* Support */}
                <ContactItem
                  icon={<Clock3 className="h-5 w-5" />}
                  title="Customer Support"
                >
                  <p>
                    24/7 Live Cab Booking & Support Desk
                  </p>
                </ContactItem>
              </div>

              {/* Trust Box */}
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Verified {city.name} Taxi Service
                    </p>

                    <p className="mt-0.5 text-xs text-slate-600">
                      ⭐ 4.9 Rated • Doorstep Pickup in 15–20 Mins
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - QUICK SUPPORT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-amber-600">
                Quick Support
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                How Can We Help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Choose the easiest way to reach our team in {city.name}. For urgent
                booking assistance, calling or WhatsApp is recommended.
              </p>

              {/* Call */}
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="mt-8 flex items-center justify-between rounded-xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {DISPLAY_PHONE}
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-slate-400" />
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      WhatsApp Us
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Chat with our {city.name} support team
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-slate-400" />
              </a>

              {/* Email */}
              <a
                href="mailto:info@noidacabs.com"
                className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Email Us
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      info@noidacabs.com
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-slate-400" />
              </a>

              {/* Booking CTA Card */}
              <div className="mt-8 rounded-xl bg-slate-950 p-5">
                <h3 className="font-bold text-white">
                  Ready to Book a Taxi in {city.name}?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Instant cab allocation across {city.name} with verified chauffeurs, sanitised vehicles, and zero surge pricing.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`tel:+91${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
                  >
                    <Phone className="h-4 w-4" />
                    Call {DISPLAY_PHONE}
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOCAL COVERAGE HOTSPOTS IN THIS CITY */}
      <section className="bg-slate-50 py-12 sm:py-16 border-t border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              {city.name} Local Hubs
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Taxi Pickup Hotspots Across {city.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Stationed near key residential sectors, railway stations, and airport terminals in {city.name} for 15–20 minute doorstep pickup.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {city.localities.map((locality, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 hover:border-amber-300 hover:bg-amber-50/50 transition shadow-2xs"
              >
                <MapPin className="h-4 w-4 text-amber-600 shrink-0" />
                <span>{locality}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR ROUTES HELPLINES - Configured to point directly to route contact pages */}
      {isRegionalContactPage ? (
        <RelatedCityRoutes
          destinationCity={city.name}
          vehicleSlug="contact-number"
          vehicleName="Taxi Contact Number"
          title={`Popular Taxi Contact Numbers in ${city.name}`}
          subtitle={`Browse regional routes with direct 24/7 driver dispatch and taxi contact details for ${city.name}.`}
          buttonText="CONTACT"
        />
      ) : (
        <PopularCityRoutes
          cityName={city.name}
          vehicleSlug="contact-number"
          vehicleName="Taxi Contact Number"
          title={`Popular Taxi Contact Numbers from ${city.name}`}
          subtitle={`Direct 24/7 driver dispatch and helpline contact numbers for top routes originating from ${city.name}. Click to view route contact and dispatch details.`}
          badgeText={`${city.name.toUpperCase()} TAXI HELPLINES`}
          buttonText="CONTACT"
        />
      )}

      {/* 5. OTHER CITIES TAXI CONTACT NUMBERS */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-600">
              ALL INDIA HELPLINES
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Taxi Contact Numbers for Other Cities
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Need cab dispatch in other destinations? Access 24/7 helpline desks for major North India corridors:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-amber-300 hover:bg-amber-50 shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white transition">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition">
                      {c.name} Taxi Helpline
                    </p>
                    <p className="text-xs text-slate-500">24/7 Contact Desk</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-50 py-12 sm:py-16 border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions - {city.name} Taxi Helpline
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900">
                What is the official taxi booking phone number for {city.name}?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Our round-the-clock booking helpline in {city.name} is{" "}
                <a href={`tel:+91${PHONE_NUMBER}`} className="font-bold text-amber-600 hover:underline">
                  {DISPLAY_PHONE}
                </a>
                . You can call or WhatsApp anytime to receive an instant vehicle quotation and driver confirmation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900">
                How can I book an urgent airport or outstation cab from {city.name}?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                For urgent airport drops or late-night outstation travel, tap the "Call Us" or "WhatsApp Us" button. Our {city.name} dispatch coordinator will assign the nearest driver to arrive at your pickup address in 15–20 minutes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900">
                Are fares fixed or subject to peak hour surge pricing?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                All fares quoted over call or WhatsApp are completely transparent and follow fixed per-km rates with zero surge pricing, even during peak rush hours, festivals, and late nights.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900">
                What vehicle options can I book through the {city.name} contact number?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We provide 4-seater Sedans (Dzire, Etios), 6-seater SUVs (Ertiga), premium 7-seater Innova Crysta, and 12–24 seater Tempo Travellers for group travel originating from {city.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL LINKS - Identical to ContactPage.tsx */}
      <section className="border-t border-slate-100 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-slate-900">
            Follow Noida Cabs
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Stay connected with us on social media for updates and travel information across {city.name}.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:text-amber-600"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------
   Contact Item Sub-component (exact match to ContactPage.tsx)
------------------------------------------------- */

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">
          {title}
        </p>

        <div className="mt-1 text-sm leading-6 text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
}
