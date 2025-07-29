"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Achievements from "../Achievements/page";
import TopDestinations from "../TopDestinations/page";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-black px-6 md:px-16 py-12 space-y-20">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center gap-10"
      >
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            About <span className="text-blue-700">Planvera</span> Consultancy
          </h2>
          <p className="text-lg">
            Planvera is a premier overseas education consultancy dedicated to guiding students in their journey to study abroad. We specialize in helping students choose the right country, university, and program that fits their academic goals and career ambitions.
          </p>
          <p className="text-lg">
            With a presence in multiple countries and a team of experienced counselors, we ensure a smooth and transparent admission process, from applications to visa and post-arrival support.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/aboutteam.jpg"
            alt="Our team"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="space-y-6 text-center max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-semibold">Our Mission</h3>
        <p className="text-lg">
          To provide ethical, reliable, and personalized guidance to students aspiring to study abroad, ensuring they are placed in the best institutions that align with their goals.
        </p>
        <Image
          src="/mission-vision.jpg"
          alt="Mission"
          width={800}
          height={400}
          className="mx-auto rounded-lg"
        />
      </motion.div>

      {/* Achievements Section */}
      <div>
        <Achievements />
      </div>

      {/* Top Destinations Section */}
      <div>
        <TopDestinations />
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-gray-100 rounded-xl p-10 space-y-6"
      >
        <h3 className="text-3xl font-bold text-center">Why Choose Us?</h3>
        <ul className="list-disc text-lg space-y-2 pl-6">
          <li>✅ 1000+ Successful Student Placements</li>
          <li>🌍 Partnerships with 50+ International Universities</li>
          <li>📈 98% Visa Success Rate</li>
          <li>💼 Pre-Departure and Post-Arrival Assistance</li>
          <li>🤝 Personalized Counselling & Career Mapping</li>
        </ul>
      </motion.div>

      {/* Additional Highlights */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <Image
          src="/student-success.jpg"
          alt="Success Stories"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Student Success Stories</h3>
          <p className="text-lg">
            Our alumni are placed in top universities and are now working at leading global companies. We believe every student&apos;s dream deserves a global stage.
          </p>
        </div>
      </motion.div>
    </div>
  );
}




