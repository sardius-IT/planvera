'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import UsaUniversities from "../../UsaUniversities/page";

const countryIntakes = {
  USA: ['Spring (Jan)', 'Fall (Sep)', 'Summer (May)'],
  UK: ['January', 'September'],
  Canada: ['January', 'May', 'September'],
  Australia: ['February', 'July', 'November'],
};

export default function UsaPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedIntake, setSelectedIntake] = useState('');

  const resetModal = () => {
    setModalOpen(false);
    setStep(1);
    setSelectedCountry('');
    setSelectedIntake('');
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  return (
    <>
    <div className="bg-no-repeat bg-cover min-h-screen px-4 py-10" style={{ backgroundImage: `url('/m024t0273_f_usa_flag_14nov22.jpg')` }}>
      {/* Hero Section */}
      <div className="backdrop-blur-sm bg-white/70 rounded-xl md:p-12 p-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-gray-900">
            <span className="underline decoration-red-500 decoration-4 underline-offset-4">USA:</span> The ultimate destination for top-tier education and limitless potential
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => setModalOpen(true)} className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition">
              Free Expert Consultation
            </button>
          </div>
        </div>

        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl">
          <Image src="/young-female-friends-waving-american-flag-independence-day.jpg" alt="USA Student" fill className="object-contain" priority />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Free Expert Consultation</h2>
              <button onClick={resetModal} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">&times;</button>
            </div>

            {/* Step 1: Country */}
            {step === 1 && (
              <>
                <p className="mb-2 text-gray-600 font-medium">Select a Country:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(countryIntakes).map((country) => (
                    <button key={country} onClick={() => { setSelectedCountry(country); setSelectedIntake(''); }} className={`px-4 py-2 rounded-full text-sm font-medium border ${selectedCountry === country ? 'bg-blue-800 text-white' : 'bg-gray-100 text-gray-700'}`}>
                      {country}
                    </button>
                  ))}
                </div>

                {selectedCountry && (
                  <button onClick={() => setStep(2)} className="w-full mt-4 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
                    Next
                  </button>
                )}
              </>
            )}

            {/* Step 2: Intake */}
            {step === 2 && (
              <>
                <p className="mb-2 text-gray-600 font-medium">
                  Selected Country: <span className="font-semibold text-black">{selectedCountry}</span>
                </p>
                <p className="mb-2 text-gray-600 font-medium">Select an Intake:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {countryIntakes[selectedCountry].map((intake) => (
                    <button key={intake} onClick={() => setSelectedIntake(intake)} className={`px-4 py-2 rounded-full text-sm font-medium border ${selectedIntake === intake ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700'}`}>
                      {intake}
                    </button>
                  ))}
                </div>

                {selectedIntake && (
                  <button onClick={() => { alert(`You selected:\nCountry: ${selectedCountry}\nIntake: ${selectedIntake}`); resetModal(); }} className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                    Submit
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="bg-[#eaeef5] mt-16 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8 shadow-sm max-w-7xl mx-auto">
        <div className="text-center md:border-r md:pr-8">
          <h2 className="text-4xl font-bold text-blue-900">200+</h2>
          <p className="text-lg font-medium text-black mt-2">Universities</p>
        </div>
        <div className="text-center md:border-r md:px-8">
          <h2 className="text-4xl font-bold text-blue-900">$20k–$60k</h2>
          <p className="text-lg font-medium text-black mt-2">Annual tuition fees</p>
        </div>
        <div className="text-center md:border-r md:px-8">
          <h2 className="text-4xl font-bold text-blue-900">900k+</h2>
          <p className="text-lg font-medium text-black mt-2">International Students</p>
        </div>
        <div className="text-center md:pl-8">
          <h2 className="text-4xl font-bold text-blue-900">1–3 Years</h2>
          <p className="text-lg font-medium text-black mt-2">Post-Study Work</p>
        </div>
      </div>

      {/* Why Study in the USA? */}
      <div className="max-w-7xl mx-auto mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">🌎 Why Study in the USA?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">🎓 World-Class Universities</h3>
            <p className="text-gray-700 mt-2">Home to 8 of the top 10 global universities, including Harvard, MIT, and Stanford.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">💼 Career Opportunities</h3>
            <p className="text-gray-700 mt-2">Access to cutting-edge industries and Optional Practical Training (OPT) for international students.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">🌐 Global Recognition</h3>
            <p className="text-gray-700 mt-2">A U.S. degree holds high prestige and opens doors worldwide.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">🧑‍🔬 Innovative Research</h3>
            <p className="text-gray-700 mt-2">Tremendous funding and research facilities across all disciplines.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">🎯 Flexible Education System</h3>
            <p className="text-gray-700 mt-2">Freedom to choose your major later, switch subjects, and personalize your degree.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">🌍 Cultural Diversity</h3>
            <p className="text-gray-700 mt-2">Study in a multicultural environment with students from every corner of the world.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold text-lg">💡 Entrepreneurial Spirit</h3>
            <p className="text-gray-700 mt-2">Learn in a system that encourages innovation and startups.</p>
          </div>
        </div>
      </div>
       
    </div>
     <UsaUniversities />
     </>
  );
}
