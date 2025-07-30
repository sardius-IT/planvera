"use client";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    intake: "",
    course: "",
    qualification: "",
    graduationYear: "",
    cgpa: "",
    workExperience: "",
    workYears: "",
    scores: "",
    testTypes: { IELTS: false, TOEFL: false, GRE: false },
    city: "",
    referral: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation rules
    const alphabetRegex = /^[A-Za-z\s]{0,40}$/;
    const mobileRegex = /^[0-9]{0,10}$/;
    const cgpaRegex = /^[0-9]{0,4}$/;
    const scoreRegex = /^[0-9]{0,4}$/;
    const workYearsRegex = /^[0-9]{0,2}$/;

    if (name === "name" || name === "course" || name === "city") {
      if (!alphabetRegex.test(value)) return;
    }

    if (name === "mobile") {
      if (!mobileRegex.test(value)) return;
    }

    if (name === "cgpa") {
      if (!cgpaRegex.test(value)) return;
    }

    if (name === "scores") {
      if (!scoreRegex.test(value)) return;
    }

    if (name === "workYears") {
      if (!workYearsRegex.test(value) || parseInt(value) > 15) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleTestToggle = (testName) => {
    setForm({
      ...form,
      testTypes: {
        ...form.testTypes,
        [testName]: !form.testTypes[testName],
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const payload = {
      ...form,
      testTypes: Object.entries(form.testTypes)
        .filter(([_, checked]) => checked)
        .map(([test]) => test)
        .join(", "),
    };

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setStatus(data.message);

    if (res.ok) {
      setForm({
        name: "",
        email: "",
        mobile: "",
        country: "",
        intake: "",
        course: "",
        qualification: "",
        graduationYear: "",
        cgpa: "",
        workExperience: "",
        workYears: "",
        scores: "",
        testTypes: { IELTS: false, TOEFL: false, GRE: false },
        city: "",
        referral: "",
      });
    }
  };

  const showScoreField = Object.values(form.testTypes).some(Boolean);

  return (
    <div className="relative min-h-screen flex p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover filter blur-xs scale-110 z-0 rounded-2xl"
        style={{ backgroundImage: "url('/airplane-aircraft-travel-trip.jpg')" }}
      ></div>

      <div className="relative z-10 w-full max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-md w-full space-y-4"
        >
          <h2 className="text-3xl font-bold mb-2 text-center">
            Master Applications Form
          </h2>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <input
            name="mobile"
            type="tel"
            placeholder="Mobile Number (10 digits)"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Country of Interest</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Ireland">Ireland</option>
            <option value="Others">Others</option>
          </select>

          <select
            name="intake"
            value={form.intake}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Intended Intake</option>
            <option value="Spring Intake">Spring Intake</option>
            <option value="Fall Intake">Fall Intake</option>
            <option value="Summer Intake">Summer Intake</option>
          </select>

          <input
            name="course"
            type="text"
            placeholder="Preferred Course / Stream"
            value={form.course}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <select
            name="qualification"
            value={form.qualification}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Highest Qualification</option>
            <option value="B.Tech / B.E.">B.Tech / B.E. - Engineering</option>
            <option value="B.Sc">B.Sc - Science</option>
            <option value="BCA">BCA - Computer Applications</option>
            <option value="BBA">BBA - Business Administration</option>
            <option value="B.Com">B.Com - Commerce / Finance</option>
            <option value="BA (Honours)">BA (Honours)</option>
            <option value="Integrated M.Sc / M.Tech">
              Integrated M.Sc / M.Tech
            </option>
            <option value="Others">Others</option>
          </select>

          <select
            name="graduationYear"
            value={form.graduationYear}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select Year of Graduation</option>
            {[...Array(10)].map((_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>

          <input
            name="cgpa"
            type="text"
            placeholder="CGPA / Percentage "
            value={form.cgpa}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <select
            name="workExperience"
            value={form.workExperience}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Do you have Work Experience?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {form.workExperience === "Yes" && (
            <input
              name="workYears"
              type="number"
              placeholder="Years of Experience "
              value={form.workYears}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          )}

          <div className="flex gap-4 flex-wrap">
            {["IELTS", "TOEFL", "GRE"].map((test) => (
              <label key={test} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.testTypes[test]}
                  onChange={() => handleTestToggle(test)}
                />
                {test}
              </label>
            ))}
          </div>

          {showScoreField && (
            <input
              name="scores"
              placeholder="Enter Test Score "
              value={form.scores}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          )}

          <input
            name="city"
            placeholder="City / State"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          <select
            name="referral"
            value={form.referral}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">How did you hear about us?</option>
            <option value="Social Media">Social Media</option>
            <option value="Friends">Friends</option>
            <option value="Website">Website</option>
            <option value="Seminar">Seminar</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>

          {status && <p className="text-red-600 text-sm mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
}
