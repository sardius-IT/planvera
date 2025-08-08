"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import UkUniversities from "../../UkUniversities/page";
const countryIntakes = {
  UK: ["January", "September"],
};

export default function UkPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedIntake, setSelectedIntake] = useState("");

  const resetModal = () => {
    setModalOpen(false);
    setStep(1);
    setSelectedCountry("");
    setSelectedIntake("");
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
  return (
    <>
      <div
        className="bg-no-repeat bg-cover min-h-screen px-4 py-10"
        style={{ backgroundImage: `url('/12182.jpg')` }}
      >
        <div className="bg-white/70 backdrop-blur-sm rounded-xl md:p-12 p-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
              <span className="underline decoration-red-500 decoration-4 underline-offset-4">
                UK:
              </span>{" "}
              A world-class education system and diverse global student
              community
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
              >
                Free Expert Consultation
              </button>
            </div>
          </div>

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl">
            <Image
              src="/redhead-young-lady-holding-book-head.jpg"
              alt="UK Student"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 animate-fade-in">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Free Expert Consultation
                </h2>
                <button
                  onClick={resetModal}
                  className="text-gray-600 hover:text-red-500 text-2xl leading-none font-bold"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>

              {/* Step 1: Country Selection */}
              {step === 1 && (
                <>
                  <p className="text-gray-700 mb-3 font-medium">
                    Select a Country:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(countryIntakes).map((country) => (
                      <button
                        key={country}
                        onClick={() => {
                          setSelectedCountry(country);
                          setSelectedIntake("");
                        }}
                        className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                          selectedCountry === country
                            ? "bg-blue-900 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                  {selectedCountry && (
                    <button
                      onClick={() => setStep(2)}
                      className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded-lg font-semibold transition"
                    >
                      Next
                    </button>
                  )}
                </>
              )}

              {/* Step 2: Intake Selection */}
              {step === 2 && (
                <>
                  <p className="text-gray-700 mb-1 font-medium">
                    Selected Country:{" "}
                    <span className="text-black font-semibold">
                      {selectedCountry}
                    </span>
                  </p>
                  <p className="text-gray-700 mb-3 font-medium">
                    Select an Intake:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {countryIntakes[selectedCountry]?.map((intake) => (
                      <button
                        key={intake}
                        onClick={() => setSelectedIntake(intake)}
                        className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                          selectedIntake === intake
                            ? "bg-green-700 text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {intake}
                      </button>
                    ))}
                  </div>
                  {selectedIntake && (
                    <button
                      onClick={() => {
                        alert(
                          `You selected:\nCountry: ${selectedCountry}\nIntake: ${selectedIntake}`
                        );
                        resetModal();
                      }}
                      className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                    >
                      Submit
                    </button>
                  )}
                  <button
                    onClick={() => setStep(1)}
                    className="mt-3 w-full text-blue-700 hover:underline text-sm font-medium"
                  >
                    ← Back
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="bg-[#eaeef5] mt-16 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8 shadow-sm max-w-7xl mx-auto">
          <StatCard value="100+" label="Universities" />
          <StatCard value="£10k–£30k" label="Annual tuition fees" />
          <StatCard value="600k+" label="International Students" />
          <StatCard value="2 Years" label="Post-Study Work" />
        </div>

        {/* Why Study in UK Section */}
        <div className="max-w-7xl mx-auto mt-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
            Why Study in the UK?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "🎓 Prestigious Institutions",
                "Home to globally ranked universities like Oxford, Cambridge, and Imperial College.",
              ],
              [
                "⌛ Shorter Course Duration",
                "Finish your bachelor's in 3 years and master's in 1 year.",
              ],
              [
                "🌐 Internationally Recognized",
                "A UK degree is valued by employers and institutions around the world.",
              ],
              [
                "🧑‍🏫 Research Excellence",
                "Strong research-based education in all fields.",
              ],
              [
                "💬 Language Advantage",
                "Study in English without language barriers for most students.",
              ],
              ["🛫 PSW Visa", "2-year post-study work visa after graduation."],
            ].map(([title, description], i) => (
              <div key={i} className="bg-blue-100 p-5 rounded-xl shadow">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-700 mt-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <UkUniversities />
      <motion.div
        className="max-w-6xl mx-auto p-6 max-h-[80vh] overflow-y-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">UK Testfolio</h1>
        <p className="text-center text-gray-900 mb-10">
          Here’s how Planvera has helped students successfully prepare for their
          tests and study in the UK.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Riya Testimonial */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 border border-gray-200"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-[#2954A2] mb-2">
              Riya Sharma
            </h3>
            <p className="text-sm text-gray-500 mb-1">IELTS: 7.5 Band</p>
            <p className="text-sm text-gray-500 mb-1">
              Admitted to: University of Manchester
            </p>
            <p className="text-gray-700 text-sm mt-2">
              “The mock tests and personal guidance at Planvera helped me exceed
              my expectations.”
            </p>
          </motion.div>

          {/* Arjun Testimonial */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 border border-gray-200"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-[#2954A2] mb-2">
              Arjun P.
            </h3>
            <p className="text-sm text-gray-500 mb-1">PTE: 84</p>
            <p className="text-sm text-gray-500 mb-1">
              Admitted to: University of Leeds
            </p>
            <p className="text-gray-700 text-sm mt-2">
              “The structured training helped me crack the PTE exam and get
              admission into my dream UK university.”
            </p>
          </motion.div>

          {/* Meera Testimonial */}
          <motion.div
            className="bg-white rounded-xl shadow p-4 border border-gray-200"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-xl font-semibold text-[#2954A2] mb-2">
              Meera K.
            </h3>
            <p className="text-sm text-gray-500 mb-1">IELTS: 8.0</p>
            <p className="text-sm text-gray-500 mb-1">
              Admitted to: King's College London
            </p>
            <p className="text-gray-700 text-sm mt-2">
              “Planvera helped me refine my English and interview skills to
              confidently secure a UK student visa.”
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

// ✅ Plain JavaScript version of StatCard component
function StatCard(props) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-900">{props.value}</h2>
      <p className="text-lg font-medium text-black mt-2">{props.label}</p>
    </div>
  );
}
