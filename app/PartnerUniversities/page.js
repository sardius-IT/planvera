"use client";
import Image from "next/image";

const universityLogos = [
  "/Harvard University logo.png",
  "/Princeton University logo.png",
  "/stanford university logo.webp",
  "/Brown University.png",
  "/columbia unversity.png",
  "/NYUniversity.png",
];

export default function PartnerUniversities() {
  return (
    <section className="py-16 px-6 bg-white text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Our Partner Universities Across Globally
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-12">
        Realize Your Academic Dreams: Access Elite Universities across Europe through SNY COSMOS.
        Your Pathway to Top Universities and Business Schools in Europe.
      </p>

      {/* Marquee animation */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-12">
          {universityLogos.concat(universityLogos).map((logo, index) => (
            <div key={index} className="min-w-[120px] h-16 relative">
              <Image
                src={logo}
                alt={`University Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="px-6 py-3 border border-blue-800 text-blue-800 font-medium rounded-md hover:bg-blue-800 hover:text-white transition">
          Explore More Universities
        </button>
      </div>
    </section>
  );
}
