"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AustraliaUniversities from "../../AustraliaUniversities/page"; // <-- create this component

const countryIntakes = {
  Australia: ["February", "July", "November"],
};

export default function AustraliaPage() {
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

  return (
    <>
      <div
        className="bg-no-repeat bg-cover min-h-screen px-4 py-10"
        style={{ backgroundImage: `url('/f3xg_dsif_220804.jpg')` }}
      >
        {/* Hero Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl md:p-12 p-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
              <span className="underline decoration-red-500 decoration-4 underline-offset-4">
                Australia:
              </span>{" "}
              A globally respected education system with a vibrant lifestyle.
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
              src="/pretty-happy-woman-using-laptop-while-sitting-cafe-young-woman-sitting-coffee-shop-working-laptop.jpg"
              alt="Australia Student"
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
                  <p className="text-gray-700 mb-3 font-medium">Select a Country:</p>
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
                    <span className="text-black font-semibold">{selectedCountry}</span>
                  </p>
                  <p className="text-gray-700 mb-3 font-medium">Select an Intake:</p>
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
                        alert(`You selected:\nCountry: ${selectedCountry}\nIntake: ${selectedIntake}`);
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

        {/* Stats */}
        <div className="bg-[#eaeef5] mt-16 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8 shadow-sm max-w-7xl mx-auto">
          <StatCard value="40+" label="Top Ranked Universities" />
          <StatCard value="$20k–$45k" label="Annual Tuition Fees" />
          <StatCard value="500k+" label="International Students" />
          <StatCard value="2–4 Years" label="Post-Study Work Rights" />
        </div>

        {/* Why Study in Australia Section */}
        <div className="max-w-7xl mx-auto mt-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
            Why Study in Australia?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["🌏 Globally Recognized Degrees", "Australian universities are ranked among the top in the world."],
              ["🌤️ Vibrant Lifestyle", "Enjoy an active lifestyle, friendly people, and stunning natural beauty."],
              ["👨‍🎓 Post-Study Work Visa", "Up to 4 years of post-study work opportunities."],
              ["🎓 Quality Education", "Focus on practical learning and industry alignment."],
              ["💼 Employment Prospects", "Australia has a strong economy and job market for graduates."],
              ["🛡️ Safe Environment", "A safe and welcoming environment for international students."]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-blue-100 p-5 rounded-xl shadow">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-700 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Universities Carousel Section */}
      <AustraliaUniversities />
    </>
  );
}

// ✅ Basic StatCard
function StatCard(props) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-900">{props.value}</h2>
      <p className="text-lg font-medium text-black mt-2">{props.label}</p>
    </div>
  );
}
