"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Achievements from "./Achievements/page";
import TopDestinations from "./TopDestinations/page";
import Destinations from "./Destinations/page";
import PartnerUniversities from "./PartnerUniversities/page";
import OurServices from "./OurServices/page";

const contentData = [
  {
    id: 1,
    title: "Your Trusted Overseas Education Consultants in Guntur –",
    highlight: "Free MS Admission Consultation",
    suffix: "from Planvera Experts.",
    description:
      "As Guntur’s best abroad consultancy, we guide students to top universities in the USA, UK, Canada, Germany, and Australia. From choosing the right course to securing your visa, our study abroad consultancy in Guntur is with you every step.",
    image: "/homepageimage.png",
  },
  {
    id: 2,
    title: "Best Consultancy for USA in Guntur with",
    highlight: "End-to-End MS Application Support",
    suffix: "tailored to your career goals.",
    description:
      "We shortlist universities, craft strong SOPs, prepare for interviews, and provide visa guidance. As a leading foreign education consultancy, we ensure your profile shines globally.",
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

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentContent = contentData[currentIndex];

  return (
    <>
      {/* ✅ SEO HEAD SECTION */}
      <Head>
        <title>Best Overseas Education Consultants in Guntur | Planvera</title>
        <meta
          name="description"
          content="Plan your study abroad with Guntur’s top overseas consultancy with expert guidance for USA, UK, Canada, Germany and Australia which offers free counseling and guidance."
        />
        <meta
          name="keywords"
          content="overseas education consultants in Guntur, best abroad consultancy in Guntur, study abroad consultancy Guntur, foreign education consultancy, best consultancy for USA in Guntur"
        />
        <meta property="og:title" content="Best Overseas Education Consultants in Guntur | Planvera" />
        <meta
          property="og:description"
          content="Plan your study abroad with Guntur’s top overseas consultancy with expert guidance for USA, UK, Canada, Germany and Australia which offers free counseling and guidance."
        />
        <meta property="og:image" content="/planvera-og-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      {/* ✅ HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12 overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/home1.png"
            alt="Planvera – Best Overseas Education Consultants in Guntur"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/20 -z-10" />
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
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-black">
                {animateText(currentContent.title)}{" "}
                <span className="text-black font-extrabold underline decoration-red-500 underline-offset-4">
                  {animateText(currentContent.highlight)}
                </span>{" "}
                {animateText(currentContent.suffix)}
              </h1>

              <p className="text-white/90 text-base sm:text-lg mb-8">
                {currentContent.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-center md:justify-start">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-orange-400 to-yellow-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:opacity-90 transition">
                    Book Free Consultation
                  </button>
                </Link>

                <a
                  href="https://wa.me/9666903211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-800 text-blue-800 bg-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 justify-center hover:bg-blue-50 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
              <Image
                src={currentContent.image}
                alt={`Image for ${currentContent.title}`}
                width={400}
                height={400}
                className="rounded-lg object-contain w-full max-w-[90%] sm:max-w-[400px]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Other sections */}
      <Achievements />
      <TopDestinations />
      <OurServices />
      <Destinations />
      <PartnerUniversities />
    </>
  );
}

