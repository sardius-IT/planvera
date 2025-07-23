'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo + Text */}
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
        <ul className="hidden md:flex gap-6 text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/countries">Countries</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/booking">Booking</Link></li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 mt-3 space-y-3 bg-blue-600 py-3 rounded">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/countries" onClick={() => setMenuOpen(false)}>Countries</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link href="/booking" onClick={() => setMenuOpen(false)}>Booking</Link></li>
        </ul>
      )}
    </nav>
  );
}
