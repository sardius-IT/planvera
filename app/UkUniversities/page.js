// components/UkUniversities.js
import { GraduationCap, Award } from "lucide-react";
import Image from "next/image";

const universities = [
  {
    name: "Brunel University of London",
    logo: "/uk/Brunel University of London.jpg",
    ranking: 1,
  },
  {
    name: "City, University of London",
    logo: "/uk/City, University of London.png",
    ranking: 2,
  },
  {
    name: "Imperial College London",
    logo: "/uk/Imperial College London.jpg",
    ranking: 6,
  },
  {
    name: "queen mary university",
    logo: "/uk/queen mary university.png",
    ranking: 8,
  },
  {
    name: "University College London",
    logo: "/uk/University College London.png",
    ranking: 15,
  },
  {
    name: "University of London",
    logo: "/uk/University of London.png",
    ranking: 28,
  },
  {
    name: "University of Sunderland",
    logo: "/uk/University of Sunderland.jpg",
    ranking: 40,
  },
    {
    name: "Kingston University ",
    logo: "/uk/Kingston University, London.png",
    ranking: 40,
  },
];

export default function UkUniversities() {
  return (
    <section className="bg-[#f0f7f4] py-16 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="underline decoration-blue-500 decoration-4 underline-offset-4">
            Top Universities
          </span>{" "}
          In The UK
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          The UK is known for its world-renowned universities and academic excellence.
          <br />
          Here are some <strong>top UK universities</strong> where students are thriving.
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
