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
        
          <p className="text-gray-700 max-w-xl text-justify text-base ">
            Begin your journey from the comfort of home to the world&apos;s top
            universities. With <b>Global Degrees</b>, you&apos;ll unlock
            life-changing academic experiences and personal growth in countries
            known for excellence in education. Discover your next chapter across
            borders—with an <b>international degree</b> that sets you apart.
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
