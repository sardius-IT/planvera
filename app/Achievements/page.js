"use client";
import { motion } from "framer-motion";

const achievements = [
  {
    number: "11,000+",
    label: "Admitted Students",
  },
  {
    number: "20+",
    label: "Years of Expertise",
  },
  {
    number: "200+",
    label: "Partner Universities",
  },
  {
    number: "50+",
    label: "Crores worth of Scholarships",
  },
  {
    number: "5,000+",
    label: "Admissions in World Top 500",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Achievements() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-center relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-purple-700">Achievements</span>
        </h2>
        <p className="text-gray-700 mb-12 text-lg">
          Advising students the best possible guidance who intend to study abroad, based on their geographic
          and financial consideration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="bg-white shadow-md rounded-xl py-10 px-4 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-3xl font-bold text-purple-800 mb-2">{item.number}</h3>
              <p className="text-gray-800 text-lg font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
