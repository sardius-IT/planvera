"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// All student stories in one array
const studentStories = [
  {
    name: "Emma Johnson",
    country: "USA",

    story:
      "Planvera helped me secure admission to my dream university in the USA. The guidance on scholarships was invaluable.",
  },
  {
    name: "Arjun Mehta",
    country: "UK",

    story:
      "From application to visa process, Planvera was with me at every step. Now Im pursuing my Masters in London.",
  },
  {
    name: "Sofia Rossi",
    country: "Europe",

    story:
      "Thanks to Planvera, Im studying engineering in Germany with a full scholarship. The process was smooth and stress-free.",
  },
  {
    name: "Liam Brown",
    country: "Australia",

    story:
      "Planvera s team made my transition to Australia seamless. They even helped me find accommodation before I arrived.",
  },
  {
    name: "Olivia Martin",
    country: "Canada",

    story:
      "I got into one of the top universities in Canada. The teams knowledge of the admission process is unmatched.",
  },
  {
    name: "Liam Brown",
    country: "Australia",

    story:
      "Planveras team made my transition to Australia seamless. They even helped me find accommodation before I arrived.",
  },
  {
    name: "Chloe Smith",
    country: "Australia",

    story:
      "The guidance on university selection and scholarship applications was excellent. I'm now in Sydney and thriving.",
  },
  {
    name: "Noah Wilson",
    country: "Australia",
    image: "/students/australia3.jpg",
    story:
      "Their pre-departure orientation really prepared me for life in Australia. I settled in much faster than expected.",
  },

  // Canada
  {
    name: "Olivia Martin",
    country: "Canada",

    story:
      "I got into one of the top universities in Canada. The teams knowledge of the admission process is unmatched.",
  },
  {
    name: "Ethan Brown",
    country: "Canada",
    story:
      "Planveras career counselling sessions helped me land a part-time job right after I arrived in Toronto.",
  },
  {
    name: "Ava Johnson",
    country: "Canada",

    story:
      "Their personalized guidance on SOP writing made my application stand out. Im now studying Business in Vancouver.",
  },
   {
    name: "Michael Lee",
    country: "USA",
    story: "Thanks to Planvera, I got into a top Ivy League university. Their mock interview sessions boosted my confidence.",
  },
];

export default function StudentSuccessStories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Student Success Stories
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {studentStories.map((student, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-blue-200"
          >
            <h3 className="mt-4 text-lg font-semibold">{student.name}</h3>
            <p className="text-sm text-gray-500">{student.country}</p>
            <p className="mt-3 text-gray-700">{student.story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
