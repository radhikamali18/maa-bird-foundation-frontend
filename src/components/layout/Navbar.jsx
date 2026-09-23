"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Bird Care", href: "/bird-care" },
  { name: "Gallery", href: "/gallery" },
  { name: "Social Media", href: "/social-media" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white shadow-sm">

      <div className="flex h-24 w-full items-center justify-between px-6 md:px-10 lg:px-12">

        {/* ================= LOGO - LEFT ================= */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-4"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Maa Foundation Logo"
            className="h-20 w-20 object-contain"
          />

          <div className="leading-tight">
            <p className="text-2xl font-bold text-green-950">
              Maa Foundation
            </p>

            <p className="mt-1 text-xl font-medium text-green-700">
              Caring for Birds
            </p>
          </div>
        </Link>


        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="whitespace-nowrap px-1 text-xl font-semibold text-gray-700 transition hover:text-green-700"
            >
              {link.name}
            </Link>
          ))}

          {/* Report Button */}
          <Link
            href="/report"
            className="ml-2 whitespace-nowrap rounded-full bg-green-700 px-7 py-3.5 text-xl font-semibold text-white shadow-sm transition hover:bg-green-800"
          >
            Report a Bird
          </Link>

          {/* Support Button */}
          <Link
            href="/donate"
            className="whitespace-nowrap rounded-full border-2 border-green-700 px-7 py-3.5 text-xl font-semibold text-green-700 transition hover:bg-green-50"
          >
            Support Us
          </Link>

        </nav>


        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-200 text-2xl text-green-800 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="border-t border-green-100 bg-white px-6 py-6 lg:hidden">

          <nav className="flex flex-col gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-5 py-4 text-base font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/report"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-green-800"
            >
              <img
                src="/images/icons/release.png"
                alt="Bird"
                className="h-5 w-5 object-contain"
              />
              Report an Injured Bird
            </Link>

            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-green-700 px-6 py-4 text-center text-base font-semibold text-green-700 transition hover:bg-green-50"
            >
              <img
                src="/images/icons/support 1.jpg"
                alt="Support"
                className="h-5 w-5 object-contain"
              />
              Support Us
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}