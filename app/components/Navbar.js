'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const countriesRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (countriesRef.current && !countriesRef.current.contains(event.target)) {
        setCountriesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href) => {
    router.push(href);
    setMenuOpen(false);
    setCountriesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-blue-950 px-5 relative  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/planveralogo.png" alt="Logo" width={150} height={90} className="rounded-full" />
        </Link>

        {/* Hamburger - Mobile Only */}
        <button
          className="md:hidden text-white"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setCountriesOpen(false);
          }}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-base items-center text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className="relative" ref={countriesRef}>
            <button onClick={() => setCountriesOpen(!countriesOpen)} className="flex items-center gap-1">
              Countries
              <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 7l4.5 4 4.5-4h-9z" />
              </svg>
            </button>
            {countriesOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black rounded shadow-md z-50 min-w-[150px]">
                <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/usa">USA</Link></li>
                <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/uk">UK</Link></li>
                <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/canada">Canada</Link></li>
                <li className="px-4 py-2 hover:bg-blue-100"><Link href="/countries/australia">Australia</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/booking">Enquiry Now</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 py-4 rounded shadow-md text-sm bg-blue-950 text-white space-y-3">
          <ul className="space-y-2">
            <li><button onClick={() => handleNavClick('/')}>Home</button></li>
            <li><button onClick={() => handleNavClick('/about')}>About</button></li>
            <li>
              <button
                onClick={() => setCountriesOpen(!countriesOpen)}
                className="w-full flex justify-between items-center"
              >
                Countries
                <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.5 7l4.5 4 4.5-4h-9z" />
                </svg>
              </button>
              {countriesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li><button onClick={() => handleNavClick('/countries/usa')}>USA</button></li>
                  <li><button onClick={() => handleNavClick('/countries/uk')}>UK</button></li>
                  <li><button onClick={() => handleNavClick('/countries/canada')}>Canada</button></li>
                  <li><button onClick={() => handleNavClick('/countries/australia')}>Australia</button></li>
                </ul>
              )}
            </li>
            <li><button onClick={() => handleNavClick('/contact')}>Contact</button></li>
            <li><button onClick={() => handleNavClick('/booking')}>Enquiry Now</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
