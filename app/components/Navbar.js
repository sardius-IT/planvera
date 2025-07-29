'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/planveralogo.png"
            alt="Planvera Consultants Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base relative">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>

          {/* Countries Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1">
              Countries
              <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 7l4.5 4 4.5-4h-9z" />
              </svg>
            </button>
            <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-md hidden group-hover:block z-50 min-w-[150px]">
              <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/usa">USA</Link></li>
              <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/uk">UK</Link></li>
              <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/canada">Canada</Link></li>
              <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/australia">Australia</Link></li>
            </ul>
          </li>

          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/booking">Enquiry</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 mt-3 space-y-3 bg-blue-600 py-3 rounded">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>

          {/* Toggle Countries Dropdown */}
          <li>
            <button
              onClick={() => setCountriesOpen(!countriesOpen)}
              className="w-full text-left flex items-center justify-between"
            >
              Countries
              <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.5 7l4.5 4 4.5-4h-9z" />
              </svg>
            </button>
            {countriesOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li><Link href="/countries/usa" onClick={() => setMenuOpen(false)}>USA</Link></li>
                <li><Link href="/countries/uk" onClick={() => setMenuOpen(false)}>UK</Link></li>
                <li><Link href="/countries/canada" onClick={() => setMenuOpen(false)}>Canada</Link></li>
                <li><Link href="/countries/australia" onClick={() => setMenuOpen(false)}>Australia</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link href="/booking" onClick={() => setMenuOpen(false)}>ENQUIRY FORM</Link></li>
        </ul>
      )}
    </nav>
  );
}
