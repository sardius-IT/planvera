import { Award } from "lucide-react";
import Image from "next/image";

const universities = [
  {
    name: "University of Melbourne",
    logo: "/Australia/australian national university.png",
    ranking: 14,
  },
  {
    name: "Australian National University",
    logo: "/Australia/Charles Darwin University Casuarina.jpg",
    ranking: 30,
  },
  {
    name: "University of Sydney",
    logo: "/Australia/Federation University Australia.jpg",
    ranking: 19,
  },
  {
    name: "University of Queensland",
    logo: "/Australia/Monash University.png",
    ranking: 43,
  },
  {
    name: "University of New South Wales",
    logo: "/Australia/the university adelaide.png",
    ranking: 45,
  },
  {
    name: "Monash University",
    logo: "/Australia/University of Melbourne.png",
    ranking: 42,
  },
   {
    name: "Monash University",
    logo: "/Australia/University of Sydney.png",
    ranking: 42,
  },
   {
    name: "Monash University",
    logo: "/Australia/CQUniversity.png",
    ranking: 42,
  },
];

export default function AustraliaUniversities() {
  return (
    <section className="bg-[#f0f7f4] py-16 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="underline decoration-blue-500 decoration-4 underline-offset-4">
            Top Universities
          </span>{" "}
          In Australia
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Australia is home to several prestigious universities offering global education standards.
          <br />
          Here's a look at some <strong>top Australian universities</strong>.
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
