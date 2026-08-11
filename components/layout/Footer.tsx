import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Fleet", href: "/fleet" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Local Cab", href: "/local-cab" },
  { name: "Airport Transfer", href: "/airport-transfer" },
  { name: "Outstation Cab", href: "/outstation-cab" },
  { name: "Corporate Cab", href: "/corporate-cab" },
  { name: "Hourly Rental", href: "/hourly-rental" },
];

const vehicles = [
  "Hatchback",
  "Sedan",
  "Ertiga",
  "Innova Crysta",
  "SUV",
  "Tempo Traveller",
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* Footer */}

      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <h2 className="text-3xl font-black text-amber-600">
              NoidaCab
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Trusted taxi booking platform offering local, airport and
              outstation cabs with professional drivers and transparent pricing.
            </p>

            <div className="mt-6 flex gap-4">
  {socialLinks.map((social, index) => {
    const Icon = social.icon;

    return (
      <a
        key={index}
        href={social.href}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 transition hover:bg-amber-500"
      >
        <Icon size={18} />
      </a>
    );
  })}
</div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-amber-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-amber-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone className="mt-1 text-amber-500" size={18} />
                <span className="text-gray-400">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 text-amber-500" size={18} />
                <span className="text-gray-400">
                  info@noidacab.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-1 text-amber-500" size={18} />
                <span className="text-gray-400">
                  Sector 18, Noida,
                  <br />
                  Uttar Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicles */}

        <div className="mt-14 border-t border-gray-800 pt-10">
          <h3 className="mb-5 text-xl font-semibold">
            Available Vehicles
          </h3>

          <div className="flex flex-wrap gap-3">
            {vehicles.map((vehicle) => (
              <span
                key={vehicle}
                className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-white"
              >
                {vehicle}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-800 pt-8 text-sm text-gray-500 lg:flex-row">
          <p>
            © {new Date().getFullYear()} NoidaCab. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>

            <Link href="/terms-and-conditions">
              Terms & Conditions
            </Link>

            <Link href="/refund-policy">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}