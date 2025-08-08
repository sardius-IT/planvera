"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["fullName"].includes(name)) {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
      if (value.length > 40) return;
    }

    if (name === "mobile") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }

    const alpha40 = /^[a-zA-Z\s]{1,40}$/;
    if (!alpha40.test(form.fullName)) {
      alert("Full Name must contain only alphabets and be max 40 characters.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (result.success) {
        alert("Your enquiry has been submitted successfully!");
        setForm({
          fullName: "",
          email: "",
          mobile: "",
          comments: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 space-y-10">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-3xl font-bold text-center text-[#2954A2]">
          Contact Planvera Consultancy
        </h2>
        <p className="text-gray-700 text-center">
          Whether you’re planning to study abroad or explore the right career path, we’re here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-800 font-medium">
          <span className="bg-blue-100 px-4 py-2 rounded-full">Expert Guidance</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">Top Universities</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">Visa & Travel Help</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">Career Counselling</span>
          <span className="bg-blue-100 px-4 py-2 rounded-full">Free Support</span>
        </div>
      </div>

      {/* Unified Section */}
      <div className="bg-white max-w-6xl mx-auto rounded-2xl shadow-xl p-6 md:p-12 space-y-8">
        {/* Section Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#2954A2]">Get in Touch with Us</h2>
          <p className="text-gray-700">We’d love to hear from you. Reach out or submit your enquiry below.</p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Info + Map */}
          <div className="space-y-6 text-gray-800">
            <div>
              <p className="font-semibold text-lg">📞 Phone</p>
              <p>
                <a href="tel:+919666903211" className="text-blue-700 hover:underline">
                  +91 9666903211
                </a>
              </p>
            </div>

            <div>
              <p className="font-semibold text-lg">✉️ Email</p>
              <p>
                <a href="mailto:planveraconsultancy@gmail.com" className="text-blue-700 hover:underline">
                  planveraconsultancy@gmail.com
                </a>
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9688200141524!2d80.4490869!3d16.3281484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b001881e1c1%3A0x579cfbd91c3d7566!2sInner%20Stop!5e0!3m2!1sen!2sin!4v1699176871709!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Planvera Location"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-blue-100 p-4 rounded-2xl">
            <div>
              <label className="block text-sm font-medium text-black">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-lg p-3 text-sm shadow focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg p-3 text-sm shadow focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                Mobile Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="w-full rounded-lg p-3 text-sm shadow focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Additional Comments</label>
              <textarea
                name="comments"
                rows="3"
                value={form.comments}
                onChange={handleChange}
                className="w-full rounded-lg p-3 text-sm shadow focus:outline-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#2954A2] text-white font-semibold py-3 px-8 rounded-xl shadow hover:bg-blue-900"
              >
                SUBMIT ENQUIRY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
