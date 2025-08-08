// components/EuropeUniversities.js
import { Award } from "lucide-react";
import Image from "next/image";

const universities = [
  {
    name: "ETH_Zurich",
    logo: "/eroupe/ETH_Zurich.webp",
    ranking: 1,
  },
  {
    name: "Heidelberg University",
    logo: "/eroupe/Heidelberg University.jpeg",
    ranking: 2,
  },
  {
    name: "Karolinska Institute",
    logo: "/eroupe/Karolinska Institute.png",
    ranking: 3,
  },
  {
    name: "Lund University",
    logo: "/eroupe/Lund University.png",
    ranking: 5,
  },
  {
    name: "University of Copenhagen",
    logo: "/eroupe/University of Copenhagen.png",
    ranking: 6,
  },
  {
    name: "university of oxford",
    logo: "/eroupe/university of oxford.png",
    ranking: 7,
  },
  {
    name: "university of amsterdam",
    logo: "/eroupe/university of amsterdam.png",
    ranking: 10,
  },
 
];

export default function EuropeUniversities() {
  return (
    <section className="bg-[#f0f7f4] py-16 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="underline decoration-blue-500 decoration-4 underline-offset-4">
            Top Universities
          </span>{" "}
          In Europe
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Europe hosts a diverse array of world-class universities with rich academic traditions.
          <br />
          Here are some <strong>top European universities</strong> students can choose from.
        </p>

        {/* Scrolling Cards */}
        <div className="mt-12 overflow-hidden relative">
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
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-left">{uni.name}</h3>
                <hr className="mb-4" />
                <div className="text-left text-gray-700 space-y-2">
                  <p className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-800" />
                    QS Europe Ranking <br />
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
