"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import CanadaUniversities from "../../CanadaUniversities/page";

const countryIntakes = {
  Canada: ["January", "May", "September"],
};

export default function CanadaPage() {
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
        style={{ backgroundImage: `url('/canada-day-celebration-with-maple-leaf-symbol.jpg')` }}
      >
        <div className="bg-white/70 backdrop-blur-sm rounded-xl md:p-12 p-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
              <span className="underline decoration-red-500 decoration-4 underline-offset-4">
                Canada:
              </span>{" "}
              High-quality education and vibrant multicultural communities
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
              src="/9093665.jpg"
              alt="Canada Student"
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
          <StatCard value="200+" label="Designated Institutions" />
          <StatCard value="CA$15k–CA$40k" label="Annual tuition fees" />
          <StatCard value="800k+" label="International Students" />
          <StatCard value="3 Years" label="Post-Study Work" />
        </div>

        {/* Why Study in Canada Section */}
        <div className="max-w-7xl mx-auto mt-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
            Why Study in Canada?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              [
                "🇨🇦 World-Class Education",
                "Canada's universities consistently rank among the best globally.",
              ],
              [
                "🧊 Affordable Living",
                "Lower cost of living compared to the US and UK.",
              ],
              [
                "🛡️ Safety & Quality of Life",
                "Ranked among the safest and most livable countries.",
              ],
              [
                "🌎 Immigration Friendly",
                "Easier pathways to permanent residency for international graduates.",
              ],
              [
                "💬 English & French Options",
                "Bilingual education and cultural exposure.",
              ],
              [
                "🛫 3-Year PSW Visa",
                "Stay and work in Canada after graduation.",
              ],
            ].map(([title, description], i) => (
              <div key={i} className="bg-blue-100 p-5 rounded-xl shadow">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-700 mt-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CanadaUniversities />
      <motion.div
      className="max-w-6xl mx-auto p-6 max-h-[80vh] overflow-y-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">
        Canada Testfolio
      </h1>
      <p className="text-center text-gray-900 mb-10">
        Here’s how Planvera has helped students achieve their study goals in Canada.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student 1 */}
        <motion.div
          className="bg-white rounded-xl shadow p-4 border border-gray-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-semibold text-[#2954A2] mb-2">
            Neha R.
          </h3>
          <p className="text-sm text-gray-500 mb-1">IELTS: 7.0</p>
          <p className="text-sm text-gray-500 mb-1">
            Admitted to: University of British Columbia
          </p>
          <p className="text-gray-700 text-sm mt-2">
            “Planvera made the entire application journey stress-free and guided me with perfect test strategies.”
          </p>
        </motion.div>

        {/* Student 2 */}
        <motion.div
          className="bg-white rounded-xl shadow p-4 border border-gray-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-semibold text-[#2954A2] mb-2">
            Aarav S.
          </h3>
          <p className="text-sm text-gray-500 mb-1">PTE: 85</p>
          <p className="text-sm text-gray-500 mb-1">
            Admitted to: University of Toronto
          </p>
          <p className="text-gray-700 text-sm mt-2">
            “With Planvera’s coaching and support, I secured my dream admit in Canada. Their SOP and visa prep was amazing.”
          </p>
        </motion.div>

        {/* Student 3 */}
        <motion.div
          className="bg-white rounded-xl shadow p-4 border border-gray-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-semibold text-[#2954A2] mb-2">
            Simran J.
          </h3>
          <p className="text-sm text-gray-500 mb-1">IELTS: 8.0</p>
          <p className="text-sm text-gray-500 mb-1">
            Admitted to: McGill University
          </p>
          <p className="text-gray-700 text-sm mt-2">
            “Huge thanks to Planvera for their expert mentorship — from test prep to college selection and visa interviews.”
          </p>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
}

// Reusable StatCard
function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-900">{value}</h2>
      <p className="text-lg font-medium text-black mt-2">{label}</p>
    </div>
  );
}
