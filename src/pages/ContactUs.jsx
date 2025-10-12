import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success (you can later connect to backend)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl p-8 shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Contact Us
        </h2>

        {submitted ? (
          <div className="text-center text-green-400 font-semibold">
            ✅ Thank you! We’ve received your message.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition font-semibold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Contact Info */}
      <div className="mt-10 text-center text-gray-400">
        <p className="mb-2">📞 Phone: <span className="text-gray-200">+91 98765 43210</span></p>
        <p className="mb-2">📧 Email: <span className="text-gray-200">support@yourapp.com</span></p>
        <p>📍 Address: <span className="text-gray-200">Kochi, Kerala, India</span></p>
      </div>
    </div>
  );
}
