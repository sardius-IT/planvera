// components/UsaUniversities.js
import { GraduationCap, Award } from "lucide-react";
import Image from "next/image";

const universities = [
  {
    name: "Harvard University",
    logo: "/Harvard University logo.png",
   
    ranking: 17,
  },
  {
    name: "Princeton University",
    logo: "/Princeton University logo.png",
   
    ranking: 28,
  },
  {
    name: "stanford university",
    logo: "/stanford university logo.webp",
   
    ranking: 38,
  },
  {
    name: "University of Michigan",
    logo: "/University of Michigan.jpg",
   
    ranking: 52,
  },
  {
    name: "Brown University",
    logo: "/Brown University.png",
    
    ranking: 11,
  },
  {
    name: "columbia unversity",
    logo: "/columbia unversity.png",
  
    ranking: 23,
  },
  // Duplicate to ensure smooth loop
  {
    name: "NYUniversity",
    logo: "/NYUniversity.png",
   
    ranking: 17,
  },
];

export default function UsaUniversities() {
  return (
    <section className="bg-[#eaf0f9] py-16 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="underline decoration-red-500 decoration-4 underline-offset-4">
            List Of Universities
          </span>{" "}
          In The USA
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          The USA is a top choice for international students seeking a prestigious education.
          <br />
          Here are some <strong>top universities in usa</strong> where we have successfully placed students.
        </p>

        {/* Scroll Animation */}
        <div className="mt-12 overflow-hidden relative ">
          <div className="whitespace-nowrap animate-scroll flex gap-8">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="inline-block bg-white p-10 rounded-2xl shadow hover:shadow-xl transition min-w-[300px] max-w-[300px]"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                 
                </div>
                 <h3 className="text-lg font-semibold text-left">{uni.name}</h3>
                <hr className="mb-4" />
                <div className="text-left text-gray-700 space-y-2">
                 
                  <p className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-800" />
                    QS World Ranking <br />
                    <span className="font-semibold text-black">{uni.ranking}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
