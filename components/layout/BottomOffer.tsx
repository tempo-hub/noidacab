"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function BottomOffer() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // At top
      if (currentScrollY <= 10) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Scrolling down → hide
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      }

      // Scrolling up → show
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (closed) return null;

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-[100]
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="mx-auto max-w-full px-3 pb-0 sm:px-4">
        <div className="relative flex items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-white/95 px-4 py-3 shadow-2xl sm:px-5">

          {/* Offer */}
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500 sm:text-sm">
              Limited Time Offer
            </p>

            <p className="text-sm font-bold text-slate-900 sm:text-base">
              Noida to Delhi Cab
              <span className="ml-2 text-amber-600">
                From ₹1,100 + 10% OFF
              </span>
            </p>
          </div>

          {/* Book */}
          <a
            href="https://wa.me/918448445504"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-500 sm:px-5"
          >
            Book Now
          </a>

          {/* Close */}
          {/* <button
            type="button"
            onClick={() => setClosed(true)}
            aria-label="Close offer"
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-slate-900"
          >
            <X className="h-3.5 w-3.5" />
          </button> */}

        </div>
      </div>
    </div>
  );
}