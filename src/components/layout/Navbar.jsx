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
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Maa Foundation Logo"
            className="h-12 w-12 object-contain"
          />

          <div className="leading-tight">
            <p className="text-lg font-bold text-green-950">
              Maa Foundation
            </p>

            <p className="text-xs text-green-700">
              Caring for Birds
            </p>
          </div>
        </Link>


        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-7 lg:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-green-700"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/report"
            className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Report a Bird
          </Link>

          <Link
            href="/donate"
            className="rounded-full border border-green-700 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-50"
          >
            Support Us
          </Link>

        </nav>


        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-100 text-2xl text-green-800 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="border-t border-green-100 bg-white px-5 py-5 lg:hidden">

          <nav className="mx-auto flex max-w-7xl flex-col gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/report"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-green-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-800"
            >
              🐦 Report an Injured Bird
            </Link>

            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-green-700 px-5 py-3 text-center font-semibold text-green-700 transition hover:bg-green-50"
            >
              💚 Support Us
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}