import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

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

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.22),transparent_35%)]" />

        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              <MessageCircle className="h-4 w-4" />
              Chiku Cabs Support
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Need help with a taxi booking, route, fare or vehicle?
              Get in touch with the Chiku Cabs support team. We are
              available 24/7 to assist with your travel requirements.
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
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
                  We're Here to Help
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Contact us for taxi bookings, vehicle availability,
                  route information, fare queries or general assistance.
                </p>
              </div>

              {/* Contact Items */}
              <div className="mt-8 space-y-5">

                {/* Address */}
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  title="Office Address"
                >
                  <p>
                    Noida Sector 2,
                    <br />
                    Noida, Uttar Pradesh - 201301
                  </p>
                </ContactItem>

                {/* Phone */}
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone"
                >
                  <a
                    href="tel:+918377809809"
                    className="font-semibold text-slate-800 transition hover:text-amber-600"
                  >
                    +91-8377809809
                  </a>
                </ContactItem>

                {/* Email */}
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                >
                  <a
                    href="mailto:info@chikucabs.com"
                    className="font-semibold text-slate-800 transition hover:text-amber-600"
                  >
                    info@chikucabs.com
                  </a>
                </ContactItem>

                {/* Support */}
                <ContactItem
                  icon={<Clock3 className="h-5 w-5" />}
                  title="Customer Support"
                >
                  <p>
                    24/7 Customer Support
                  </p>
                </ContactItem>

              </div>

              {/* Trust */}
              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-amber-600 shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Verified Service
                    </p>

                    <p className="mt-0.5 text-xs text-slate-600">
                      ⭐ 4.9 Rated
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT - QUICK CONTACT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <p className="text-sm font-semibold text-amber-600">
                Quick Support
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                How Can We Help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Choose the easiest way to reach our team. For urgent
                booking assistance, calling or WhatsApp is recommended.
              </p>

              {/* Call */}
              <a
                href="tel:+918377809809"
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
                      +91-8377809809
                    </p>
                  </div>

                </div>

                <ArrowRight className="h-5 w-5 text-slate-400" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918377809809"
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
                      Chat with our support team
                    </p>
                  </div>

                </div>

                <ArrowRight className="h-5 w-5 text-slate-400" />
              </a>

              {/* Email */}
              <a
                href="mailto:info@chikucabs.com"
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
                      info@chikucabs.com
                    </p>
                  </div>

                </div>

                <ArrowRight className="h-5 w-5 text-slate-400" />
              </a>

              {/* Booking CTA */}
              <div className="mt-8 rounded-xl bg-slate-950 p-5">
                <h3 className="font-bold text-white">
                  Ready to Book a Taxi?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Choose your vehicle and book a comfortable taxi for
                  your next journey.
                </p>

                <Link
                  href="/taxi"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
                >
                  Explore Taxi Options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SOCIAL */}
      <section className="border-t border-slate-100 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-xl font-bold text-slate-900">
            Follow Chiku Cabs
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Stay connected with us on social media for updates and
            travel information.
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
   Contact Item
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