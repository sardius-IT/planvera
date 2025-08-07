"use client";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    image: "/USA[1].png",
    link: "/countries/usa",
  },
  {
    image: "/PLANVERA (1)[1].png",
    link: "/countries/canada",
  },
  {
    image: "/UK.png",
    link: "/countries/uk",
  },
  {
    image: "/PLANVERA[2].png", // consider fixing wrong flag
    link: "/countries/australia",
  },
];

export default function Destinations() {
  return (
    <section className="bg-purple-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 md:mb-0 py-6 text-center">
          Explore Our Top Study Destinations
        </h2>
        {/* Title & Description */}
        <div className="text-center md:text-left md:flex md:justify-between md:items-start mb-12">
          <p className="text-black max-w-xl text-justify text-sm space-y-2">
            <span className="block">
              Start your global education journey from the comfort of your home.
            </span>
            <span className="block">
              Access top-ranked universities across Russia, Uzbekistan, and
              Georgia.
            </span>
            <span className="block">
              Global Degrees opens the door to world-class academic programs.
            </span>
            <span className="block">
              Immerse yourself in cultures that inspire growth and innovation.
            </span>
            <span className="block">
              Build a future shaped by international exposure and opportunity.
            </span>
            <span className="block">
              Develop skills that make you globally competitive and
              career-ready.
            </span>
            <span className="block">
              Experience personal transformation through education abroad.
            </span>
            <span className="block">
              Graduate with a degree that&apos;s recognized—and respected—worldwide.
            </span>
          </p>
        </div>

        {/* Grid of Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((item, index) => (
            <Link href={item.link} key={index} className="block group">
              <div className="relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition transform group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
