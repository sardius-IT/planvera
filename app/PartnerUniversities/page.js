"use client";
import Image from "next/image";

const universityLogos = [
  "lund.png",
  "uppsala.png",
  "chalmers.png",
  "linkoping.png",
  "aalto.png",
  "helsinki.png",
  "politecnico.png",
  "aarhus.png",
  "padova.png",
  "turku.png",
  "southern-denmark.png",
  "tum-asia.png",
  
];

export default function PartnerUniversities() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Our Partner Universities Across Globally
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-12">
        Realize Your Academic Dreams: Access Elite Universities across Europe through SNY COSMOS.
        Your Pathway to Top Universities and Business Schools in Europe.
      </p>

      {/* Logos grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {universityLogos.map((logo, index) => (
          <div key={index} className="w-32 h-20 relative">
            <Image
              src={`/universities/${logo}`}
              alt={`University Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
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
