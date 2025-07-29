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
    enquiryType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

    const res = await fetch("/api/send", {
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
        enquiryType: "",
        message: "",
      });
    }
  };

  const showScoreField = Object.values(form.testTypes).some(Boolean);

  return (
    <div className="relative min-h-screen flex  p-6 overflow-hidden ">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover  filter blur-xs scale-110 z-0 rounded-2xl"
        style={{ backgroundImage: "url('/airplane-aircraft-travel-trip.jpg')" }}
      ></div>

      {/* Foreground Form */}
      <div className="relative z-10 w-full max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="  bg-white/30 backdrop-blur-md   p-8 rounded-xl shadow-md w-full space-y-4"
        >
          <h2 className="text-3xl font-bold mb-2 text-center ">Master Applications Form</h2>

          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="mobile" type="tel" placeholder="Mobile Number" value={form.mobile} onChange={handleChange} required className="w-full p-2 border rounded" />

          <select name="country" value={form.country} onChange={handleChange} required className="w-full p-2 border rounded  ">
            <option value="">Select Country of Interest</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Ireland">Ireland</option>
            <option value="Others">Others</option>
          </select>

          <select name="intake" value={form.intake} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Intended Intake</option>
            <option value="Spring 2025">Spring 2025</option>
            <option value="Fall 2025">Fall 2025</option>
          </select>

          <select name="course" value={form.course} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Preferred Course / Stream</option>
            <option value="Computer Science & IT">MS in Computer Science, AI, Cybersecurity, Data Science</option>
            <option value="Engineering">MS in Mechanical, Electrical, Civil, Aerospace, Robotics</option>
            <option value="Business & Management">MS in Management, Business Analytics, Marketing</option>
            <option value="Finance & Economics">MS in Finance, Economics, Financial Engineering</option>
            <option value="Life Sciences & Health">MS in Biotechnology, Biomedical Engineering, Public Health</option>
            <option value="Design & Architecture">MS in UX/UI Design, Architecture, Urban Planning</option>
            <option value="Social Sciences">MS in Psychology, Sociology, International Relations</option>
            <option value="Environmental & Energy">MS in Environmental Science, Renewable Energy</option>
            <option value="Law & Public Policy">MS in International Law, Public Administration</option>
            <option value="Education">MS in Educational Leadership, Higher Education</option>
          </select>

          <select name="qualification" value={form.qualification} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Highest Qualification</option>
            <option value="B.Tech / B.E.">B.Tech / B.E. - Engineering</option>
            <option value="B.Sc">B.Sc - Science</option>
            <option value="BCA">BCA - Computer Applications</option>
            <option value="BBA">BBA - Business Administration</option>
            <option value="B.Com">B.Com - Commerce / Finance</option>
            <option value="MBBS">MBBS - Medicine & Surgery</option>
            <option value="Pharmacy (B.Pharm)">B.Pharm - Pharmacy</option>
            <option value="BA (Honours)">BA (Honours)</option>
            <option value="Integrated M.Sc / M.Tech">Integrated M.Sc / M.Tech</option>
            <option value="Others">Others</option>
          </select>

          <select name="graduationYear" value={form.graduationYear} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Year of Graduation</option>
            {[...Array(10)].map((_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>

          <input name="cgpa" type="text" placeholder="CGPA / Percentage" value={form.cgpa} onChange={handleChange} required className="w-full p-2 border rounded" />

          <select name="workExperience" value={form.workExperience} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Do you have Work Experience?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {form.workExperience === "Yes" && (
            <input name="workYears" type="number" placeholder="Years of Experience" value={form.workYears} onChange={handleChange} className="w-full p-2 border rounded" />
          )}

          <div className="flex gap-4 flex-wrap">
            {["IELTS", "TOEFL", "GRE"].map((test) => (
              <label key={test} className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={form.testTypes[test]} onChange={() => handleTestToggle(test)} />
                {test}
              </label>
            ))}
          </div>

          {showScoreField && (
            <input
              name="scores"
              placeholder="IELTS / TOEFL / GRE Scores"
              value={form.scores}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          )}

          <input name="city" placeholder="City / State" value={form.city} onChange={handleChange} required className="w-full p-2 border rounded" />

          <select name="referral" value={form.referral} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">How did you hear about us?</option>
            <option value="Social Media">Social Media</option>
            <option value="Friends">Friends</option>
            <option value="Website">Website</option>
            <option value="Seminar">Seminar</option>
          </select>

          <select name="enquiryType" value={form.enquiryType} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Enquiry Type</option>
            <option value="General Info">General Info</option>
            <option value="Application Help">Application Help</option>
            <option value="Visa Guidance">Visa Guidance</option>
            <option value="SOP/LOR Support">SOP/LOR Support</option>
          </select>

          <textarea name="message" placeholder="Additional Notes (Optional)" value={form.message} onChange={handleChange} className="w-full p-2 border rounded" />

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Submit
          </button>

          {status && <p className="text-green-600 text-sm mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
}
