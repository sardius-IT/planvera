"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Achievements from "../Achievements/page";
import TopDestinations from "../TopDestinations/page";
import Link from "next/link";
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-16 py-12 space-y-20">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center gap-10"
      >
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            About <span className="text-blue-700">Planvera</span> Consultancy
          </h2>
          <p className="text-base sm:text-lg">
            Planvera is a premier overseas education consultancy dedicated to
            guiding students in their journey to study abroad. We specialize in
            helping students choose the right country, university, and program
            that fits their academic goals and career ambitions.
          </p>
          <p className="text-base sm:text-lg">
            With a presence in multiple countries and a team of experienced
            counselors, we ensure a smooth and transparent admission process,
            from applications to visa and post-arrival support.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            src="/v9j8_ky1g_211101.jpg"
            alt="Our team"
            width={600}
            height={400}
            className=" w-full h-auto object-cover"
          />
        </div>
      </motion.div>

      {/* Our Mission Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="relative w-full md:w-1/2 h-64 sm:h-72 md:h-96 overflow-hidden ">
            <Image
              src="/ourmission.png"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Mission Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
              At <span className="font-semibold text-blue-800">Planvera</span>,
              our mission is to empower students to achieve their global
              academic and career aspirations by providing expert guidance,
              personalized counseling, and end-to-end support for overseas
              education.
            </p>
            <ul className="text-gray-700 space-y-2 text-left text-sm sm:text-base">
              <li>🌐 Connecting students with top global universities</li>
              <li>🎓 Offering ethical, personalized, and transparent advice</li>
              <li>
                📑 Simplifying applications, visas, and pre-departure steps
              </li>
              <li>💼 Preparing students for success in global careers</li>
              <li>🌱 Inspiring future-ready global citizens</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <div>
        <Achievements />
      </div>

      {/* Top Destinations Section */}
      <div>
        <TopDestinations />
      </div>

      {/* Success Stories Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <Image
          src="/low-angle-graduated-students.jpg"
          alt="Success Stories"
          width={600}
          height={400}
          className="rounded-xl shadow-md w-full h-auto object-cover"
        />
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Student Success Stories
          </h3>
          <p className="text-base sm:text-sm">
             At our core, we believe that every student&apos;s dream deserves a
            place on the global stage. Over the years, our alumni have secured
            admissions to some of the world &apos;s most prestigious universities and
            have gone on to build thriving careers at leading international
            companies. Their journeys are a testament to the power of
            determination, the right guidance, and a vision that goes beyond
            borders. Each success story inspires us to continue empowering
            students to achieve more, dream bigger, and create a future without
            limits.
          </p>
          <Link href="/student-success-stories">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base">
              Student Success
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
