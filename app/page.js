"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Achievements from "./Achievements/page";
import TopDestinations from "./TopDestinations/page";
import Destinations from "./Destinations/page";
import PartnerUniversities from "./PartnerUniversities/page";
import OurServices from "./OurServices/page";

const contentData = [
  {
    id: 1,
    title: "Unlock Global Career Opportunities with a",
    highlight: "Free MS Admission Consultation",
    suffix: "by Planvera Experts.",
    description:
      "Our counselors help you choose the right course, country, and university for your Master's program, tailored to your goals and background.",
    image: "/homepageimage.png",
  },
  {
    id: 2,
    title: "Secure Admission in Top Universities with",
    highlight: "End-to-End MS Application Support",
    suffix: "from Planvera’s Expert Team.",
    description:
      "From shortlisting the best universities to crafting strong SOPs and preparing for interviews, we ensure your MS application stands out globally.",
    image: "/homeabroadconsultants.webp",
  },
];

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const animateText = (text) => (
  <motion.span className="inline-block" initial="initial" animate="animate">
    {text.split("").map((char, idx) => (
      <motion.span
        key={idx}
        variants={letterVariants}
        transition={{ delay: idx * 0.03 }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentContent = contentData[currentIndex];

  return (
    <>
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden">
        {/* ✅ Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/home1.png" // make sure this is in your /public directory
            alt="Background"
            fill
            className="object-contain object-center opacity-60"
            priority
          />
        </div>

        {/* ✅ Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20 -z-10" />

        {/* ✅ Optional decorative gradient */}
        <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-200 via-green-100 to-white rounded-full opacity-40 blur-2xl z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentContent.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between w-full z-20"
          >
            {/* Left Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-6 text-black">
                {animateText(currentContent.title)}{" "}
                <span className="text-black font-extrabold underline decoration-red-500 underline-offset-4">
                  {animateText(currentContent.highlight)}
                </span>{" "}
                {animateText(currentContent.suffix)}
              </h1>
              <p className="text-white/90 text-lg mb-8">
                {currentContent.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {/* Gradient Button: Book a free consultation */}
                <Link href="/contact">
                  <button
                    aria-label="Book a free consultation"
                    className="bg-gradient-to-r from-orange-400 to-yellow-600  text-white px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition"
                  >
                    Book Free Consultation
                  </button>
                </Link>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/9666903211"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="border border-blue-800 text-blue-800 bg-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-blue-50 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
              <Image
                src={currentContent.image}
                alt={`Image for ${currentContent.title}`}
                width={500}
                height={500}
                className="mx-auto rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
      {/* Other Sections */}
      <Achievements />
      <TopDestinations />
      <OurServices />
      <Destinations />
      <PartnerUniversities />
    </>
  );
}
