import { Award } from "lucide-react";
import Image from "next/image";

const universities = [
  {
    name: "University of Toronto",
    logo: "/canada/toronto.png",
    ranking: 21,
  },
  {
    name: " University  of alberta ",
    logo: "/canada/university of alberta.jpg",
    ranking: 30,
  },
  {
    name: "University of Calgary",
    logo: "/canada/University of Calgary.png",
    ranking: 34,
  },
  {
    name: "University of Guelph",
    logo: "/canada/University of Guelph.png",
    ranking: 96,
  },
  {
    name: "University of Ottawa",
    logo: "/canada/University of Ottawa.png",
    ranking: 103,
  },
   {
    name: "york unviersity",
    logo: "/canada/york unviersity.png",
    ranking: 103,
  },
   {
    name: "Northeastern University",
    logo: "/canada/Northeastern University.png",
    ranking: 103,
  },
];

export default function CanadaUniversities() {
  return (
    <section className="bg-[#f0f7f4] py-16 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="underline decoration-blue-500 decoration-4 underline-offset-4">
            Top Universities
          </span>{" "}
          In Canada
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Canada offers top-notch higher education and research opportunities.
          <br />
          Here's a list of <strong>top Canadian universities</strong> for international students.
        </p>

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
                    width={60}
                    height={60}
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
