"use client";
import Image from "next/image";

const services = [
  { title: "Career Counselling", icon: "career.png" },
  { title: "Free IELTS Training", icon: "ielts.png" },
  { title: "Application Process (within 24 hours)", icon: "application.png" },
  { title: "Scholarship and Assistantship Guidance", icon: "scholarship.png" },
  { title: "Education loan Assistance", icon: "loan.png" },
  { title: "VISA Process Assistance", icon: "visa.png" },
  { title: "Unlimited VISA Mock Interviews", icon: "mock-interview.png" },
  { title: "Pre Departure Guidance", icon: "pre-departure.png" },
];

export default function OurServices() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 text-center border rounded-xl border-orange-300">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">How We Make It Easy For You</h2>
      <p className="text-xl font-semibold text-blue-800 border-b-4 inline-block border-yellow-500 mb-12">Our Services</p>

      <div className="relative flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center max-w-[150px]">
            <div className="w-24 h-24 mb-3 rounded-full bg-orange-500 p-4 flex items-center justify-center shadow-md">
              <Image
                src={`/icons/${service.icon}`}
                alt={service.title}
                width={48}
                height={48}
              />
            </div>
            <p className="text-sm md:text-base font-medium text-gray-800">{service.title}</p>
          </div>
        ))}

        {/* Optional connecting dotted path (visual effect) */}
        <div className="absolute top-16 left-0 right-0 h-0.5 border-t-2 border-dotted border-blue-500 z-[-1]"></div>
      </div>

      <div className="mt-12">
        <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base">
          BOOK MY FREE ONLINE COUNSELLING
        </button>
      </div>
    </section>
  );
}
