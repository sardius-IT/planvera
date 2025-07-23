"use client";
import Image from "next/image";

const destinations = [
  {
    name: "USA",
    flag: "/flag-united-states-america.jpg",
  },
   {
    name: "Canada",
    flag: "/flag-canada.jpg",
  },
  {
    name: "UK",
    flag: "/union-jack-flag-background.jpg",
  },
 
  {
    name: "Australia",
    flag: "/closeup-shot-waving-flag-australia-with-interesting-textures.jpg",
  },
  {
    name: "Germany",
    flag: "/flag-germany.jpg",
  },
];

export default function TopDestinations() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat px-6 py-20 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/airplane-runway-night.jpg')` }}
    >
      {/* Optional dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Top Destinations
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {destinations.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full   overflow-hidden shadow-lg">
                <Image
                  src={item.flag}
                  alt={`${item.name} Flag`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-3 text-white italic text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
