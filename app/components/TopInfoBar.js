'use client';

import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa6';

export default function TopInfoBar() {
  return (
    <div className="bg-white text-blue-950 text-sm px-4 md:px-20 py-2">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        {/* Left - Email with Icon */}
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <FaEnvelope className="text-red-600" />
          <a
            href="mailto:planveraconsultancy@gmail.com"
            className="hover:underline break-all"
          >
            planveraconsultancy@gmail.com
          </a>
        </div>

        {/* Center - Phone Numbers */}
        <div className="text-center">
          Call: <span className="font-medium">+91 9666903211</span> (Guntur)
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center justify-center md:justify-end gap-4">
          <a
            href="https://wa.me/9666903211"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-400 hover:scale-110 transition" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-blue-400 hover:scale-110 transition" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-500 hover:scale-110 transition" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-blue-300 hover:scale-110 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-gray-300 hover:scale-110 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-400 hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
