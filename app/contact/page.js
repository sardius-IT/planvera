'use client';
import { useState } from 'react';

export default function MBBSForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    course: '',
    branch: '',
    comments: '',
    countries: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Limit to 40 characters and alphabets + space for specific fields
    if (['fullName', 'branch', 'course'].includes(name)) {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
      if (value.length > 40) return;
    }

    // Mobile: Only digits, max 10
    if (name === 'mobile') {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updated = [...form.countries];
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((v) => v !== value);
    }
    setForm({ ...form, countries: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final client-side validation
    if (form.mobile.length !== 10) {
      alert('Mobile number must be exactly 10 digits.');
      return;
    }

    const alpha40 = /^[a-zA-Z\s]{1,40}$/;
    if (!alpha40.test(form.fullName)) {
      alert('Full Name must contain only alphabets and be max 40 characters.');
      return;
    }
    if (!alpha40.test(form.branch)) {
      alert('Branch must contain only alphabets and be max 40 characters.');
      return;
    }
    if (!alpha40.test(form.course)) {
      alert('Course must contain only alphabets and be max 40 characters.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (result.success) {
        alert('Form submitted successfully!');
        setForm({
          fullName: '',
          email: '',
          mobile: '',
          course: '',
          branch: '',
          comments: '',
          countries: [],
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 rounded-2xl">
      <div className="bg-blue-100 max-w-4xl w-full p-8 rounded-2xl shadow-lg space-y-6">
        <div className="text-center">
          <h1 className="text-black text-2xl font-bold">Get Your Free Counseling Today!</h1>
        </div>

        {/* Countries */}
        <div className="text-white font-semibold">
          <label className="block mb-1 text-black">
            Country of Interest <span className="text-red-600">*</span>
          </label>
          <div className="flex flex-wrap gap-4 text-sm text-black">
            {['Australia', 'Ireland', 'UK', 'Canada', 'Newzealand', 'France', 'USA', 'Germany', 'Others'].map((country) => (
              <label key={country} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={country}
                  checked={form.countries.includes(country)}
                  onChange={handleCheckboxChange}
                />
                {country}
              </label>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
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
            <div className="flex-1">
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
          </div>

          {/* Mobile + Course */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Enter Mobile Number <span className="text-red-600">*</span>
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
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Course of Interest <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full rounded-lg p-3 text-sm shadow focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Branch */}
          <div>
            <label className="block text-sm font-medium text-black">
              Nearest Branch <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="branch"
              value={form.branch}
              onChange={handleChange}
              className="w-full rounded-lg p-3 text-sm shadow focus:outline-none"
              required
            />
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-black">
              Any Additional Comments
            </label>
            <textarea
              name="comments"
              rows="3"
              value={form.comments}
              onChange={handleChange}
              className="w-full rounded-lg p-3 text-sm shadow focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#2954A2] text-white font-semibold py-3 px-8 rounded-xl shadow hover:bg-blue-900"
            >
              BOOK MY FREE ONLINE COUNSELLING
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
