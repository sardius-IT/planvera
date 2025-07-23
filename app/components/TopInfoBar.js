'use client';

import { FaWhatsapp, FaFacebookF, FaYoutube, FaLinkedinIn, FaXTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa6';

export default function TopInfoBar() {
  return (
    <div className="bg-white text-blue-950 text-sm px-4 md:px-20 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
      {/* Left - Email with Icon */}
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-red-600" />
        <a
          href="mailto:info@snycosmos.com"
          className="hover:underline"
        >
          planveraconsultancy.com
        </a>
      </div>

      {/* Center - Phone Numbers */}
      <div className="text-center">
        Call: <span className="font-medium">+91 9666903211</span> (Guntur) 
       
      </div>

      {/* Right - Social Icons */}
      <div className="flex items-center gap-4">
        <a href="https://wa.me/9666903211" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-400" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-blue-400" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-red-500" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-blue-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="hover:text-gray-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-400" />
        </a>
      </div>
    </div>
  );
}
