"use client";

import { motion } from "framer-motion";
import { FaUserGraduate, FaUniversity, FaRegClock } from "react-icons/fa";

const achievements = [
  {
    number: "3,000+",
    label: "Admitted Students",
    icon: <FaUserGraduate className="text-4xl mb-3 text-purple-600" />,
  },
  {
    number: "10+",
    label: "Years of Expertise",
    icon: <FaRegClock className="text-4xl mb-3 text-purple-600" />,
  },
  {
    number: "50+",
    label: "Partner Universities",
    icon: <FaUniversity className="text-4xl mb-3 text-purple-600" />,
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
    <section
      className="bg-white py-16 px-6 md:px-20 text-center relative"
      role="region"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="achievements-heading"
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          Our <span className="text-purple-700">Achievements</span>
        </h2>
        <p className="text-gray-700 mb-12 text-lg">
          Advising students with the best possible guidance for studying abroad,
          tailored to their geographic and financial goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="bg-white shadow-md rounded-2xl py-10 px-6 hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              {item.icon}
              <h3 className="text-3xl font-bold text-purple-800 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-800 text-lg font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
