"use client";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "USA",
    flag: "/flag-united-states-america.jpg",
    link: "/countries/usa",
  },
  {
    name: "Canada",
    flag: "/flag-canada.jpg",
    link: "/countries/canada",
  },
  {
    name: "UK",
    flag: "/union-jack-flag-background.jpg",
    link: "/countries/uk",
  },
  {
    name: "Australia",
    flag: "/closeup-shot-waving-flag-australia-with-interesting-textures.jpg",
    link: "/countries/australia",
  },
 
];

export default function TopDestinations() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 py-20 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/airplane-runway-night.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Top Destinations
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {destinations.map((item, i) => (
            <Link key={i} href={item.link} className="flex flex-col items-center group transition-transform hover:scale-105">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-yellow-300">
                <Image
                  src={item.flag}
                  alt={`${item.name} Flag`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-3 text-white italic text-lg group-hover:text-yellow-300">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
