"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Cabs",
    dropdown: [
      { label: "Dzire", href: "/taxi/dzire" },
      { label: "Amaze", href: "/taxi/amaze" },
      { label: "Ertiga", href: "/taxi/ertiga" },
      { label: "Innova Crysta", href: "/taxi/innova-crysta" },
      
    ],
  },
  
  { label: "Taxi fare", href: "/route/noida-to-delhi-taxi-fare" },
  { label: "Route", dropdown: [
      { label: "Noida to Delhi", href: "/route/noida-to-delhi-taxi" },
      { label: "Noida to Delhi Sedan", href: "/route/noida-to-delhi-sedan-taxi" },
      { label: "Noida to Delhi Fare", href: "/route/noida-to-delhi-taxi-fare" },
    ], },
  
  { label: "About", href: "/about-us" },
  { label: "One Way", href: "/one-way" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-[#ffb300] backdrop-blur-xl transition-all duration-300 ${isScrolled ? "py-2 shadow-lg" : "py-3 shadow-sm"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <div className="relative h-10 w-32 sm:h-12 sm:w-40 bg-white rounded-2xl">
            <Image
              src="/noidacab.png"
              alt="NoidaCab"
              fill
              priority
              sizes="(max-width: 640px) 128px, 160px"
              className="object-contain rounded-3xl "
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((item) => (
            <div key={item.label} className="group relative ">
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1 font-semibold text-gray-700 transition hover:text-white/80">
                    {item.label}
                    <span className="text-xs">▼</span>
                  </button>

                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 mt-3 w-52 rounded-xl bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-amber-50 hover:text-amber-500"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="font-semibold text-gray-700 transition hover:text-white/80"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex">
          <Link
            href="https://wa.me/918448445504"
            className="inline-flex items-center gap-2 rounded-full bg-[white] px-5 xl:px-6 py-2.5 xl:py-3 font-semibold text-black transition hover:bg-amber-500"
          >
            <Phone size={18} />
            Call Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="text-gray-900 lg:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu — always mounted, animated open/closed */}
      <div
        className={`grid overflow-hidden bg-white shadow-xl transition-[grid-template-rows,opacity] duration-300 lg:hidden ${menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className={`min-h-0 space-y-1 overflow-y-auto transition-all duration-300 ${menuOpen ? "p-4 sm:p-6" : "p-2"
          }`}>
          {navLinks.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div className="rounded-lg">
                  <div className="px-3 py-2.5 font-semibold text-gray-800">
                    {item.label}
                  </div>

                  <div className="ml-3 space-y-1 border-l-2 border-amber-300 pl-3">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block rounded-lg px-3 py-2 font-medium text-gray-600 transition hover:bg-amber-100 hover:text-amber-500"
                        onClick={() => setMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 font-medium text-gray-700 transition hover:bg-amber-100 hover:text-amber-500"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="https://wa.me/918448445504"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#ffb300] py-3 font-semibold text-white transition hover:bg-amber-500"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={18} />
            Call Now
          </Link>
        </div>
      </div>
    </header>
  );
}