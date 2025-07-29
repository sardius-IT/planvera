"use client";
import { useState } from "react";
import Image from "next/image";

const universityLogos = [
  "/Harvard University logo.png",
  "/Princeton University logo.png",
  "/stanford university logo.webp",
  "/Brown University.png",
  "/columbia unversity.png",
  "/NYUniversity.png",
  "",
  "/Princeton University logo.png",
  "/stanford university logo.webp",
  "/Brown University.png",
  "/columbia unversity.png",
  "/NYUniversity.png",
 
  // Add as many logos as needed
];

export default function PartnerUniversities() {
  const [showAll, setShowAll] = useState(false);

  // Show only first 12 logos (2 rows of 6) unless expanded
  const displayedLogos = showAll ? universityLogos : universityLogos.slice(0, 12);

  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Our Partner Universities Across Europe
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-10">
        Realize Your Academic Dreams: Access Elite Universities across Europe through SNY COSMOS.
        Your Pathway to Top Universities and Business Schools in Europe.
      </p>

      {/* Grid of logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center px-4 md:px-12">
        {displayedLogos.map((logo, index) => (
          <div key={index} className="w-28 h-16 relative">
            <Image
              src={logo}
              alt={`University Logo ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {universityLogos.length > 12 && (
        <div className="mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 border border-blue-800 text-blue-800 font-medium rounded-md hover:bg-blue-800 hover:text-white transition"
          >
            {showAll ? "Show Less" : "Explore More Universities"}
          </button>
        </div>
      )}
    </section>
  );
}
