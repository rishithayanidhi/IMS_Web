"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import IIMSLogo from "./IIMSLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar if mouse is in the top 80px of the screen
      if (e.clientY < 80) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-1/2 z-50 w-[95%] -translate-x-1/2 transition-all duration-500 lg:w-auto ${
        scrolled ? "top-4" : "top-6"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0 pointer-events-none"}`}
    >
      <nav 
        onMouseEnter={() => setVisible(true)}
        className="relative flex min-h-[60px] items-center justify-between rounded-full border border-slate-200/60 bg-white/90 py-2 pr-4 pl-[88px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl lg:gap-14 lg:pr-8"
        style={{
          boxShadow: "0 0 0 1px rgba(255,255,255,0.5) inset, 0 8px 30px rgba(0,0,0,0.06), 0 4px 10px rgba(99,102,241,0.05)",
        }}
      >
        {/* Logo (Left overlapping circle) */}
        <Link 
          href="/" 
          className="absolute -left-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-1 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-105"
        >
          <IIMSLogo className="h-[76px] w-[76px]" />
        </Link>

        {/* Desktop links (Right) */}
        <ul className="hidden items-center gap-8 pr-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="group relative px-1 py-3 text-sm font-bold tracking-wide text-slate-600 transition-colors duration-300 hover:text-indigo-600"
              >
                {link.label}
                {/* Indigo dot hover effect underneath */}
                <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 scale-0 rounded-full bg-indigo-500 opacity-0 shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full bg-slate-50 transition-colors hover:bg-indigo-50 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-5 rounded-full bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-3xl transition-all duration-400 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border border-slate-200/60 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-center text-sm font-bold tracking-wide text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
