"use client";

import { useState } from "react";
import { X } from "lucide-react";

const initialFormData = {
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  countryCode: "+1",
  phone: "",
  message: "",
  consent: false,
};

export default function GeneralInquiryForm({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClose = () => {
    onClose?.();
    setFormData(initialFormData);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3 sm:px-8">
          <h2 className="text-md font-semibold text-[#1A1A1A] sm:text-xl">
            Inquire With Us
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="text-gray-400 transition hover:text-gray-700"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8">
          {submitted ? (
            <div>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
                Inquiry Submitted!
              </h3>
              <p className="mt-3 max-w-[420px] text-[13px] leading-6 text-gray-500">
                Your inquiry has been received by team TravelOStyle. We
                typically respond within 48hrs. Your details are never shared
                with third parties.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 rounded-full bg-[#2D3482] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78]"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    required
                    className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    required
                    className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                    Title*
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Your title"
                    required
                    className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                    Email ID*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email ID"
                    required
                    className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                  <div>
                <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                  Contact Number*
                </label>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    {/* Country Code with Bottom Border */}
                    <div className="relative border-b border-gray-400  pb-1">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="appearance-none bg-transparent pr-4 text-xs font-normal text-gray-700 focus:outline-none cursor-pointer"
                      >
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                      </select>
                      {/* Down arrow icon */}
                      <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-gray-600">
                        ▼
                      </span>
                    </div>

                    <div className="flex-1 border-b border-gray-400 pb-1">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your number"
                        required
                        className="bg-transparent text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>

            

              <div className="mt-6">
                <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                  Your Message*
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
                  required
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#2D3482]"
                />
              </div>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex max-w-[420px] cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border-gray-400 accent-[#2D3482]"
                  />
                  <span className="text-[13px] text-[#1A1A1A]">
                    I agree to be contacted by TravelOStyle regarding my
                    inquiry.
                  </span>
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-[#2D3482] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78] sm:shrink-0"
                >
                  Submit Inquiry
                </button>
              </div>

              <p className="mt-4 text-[12px] text-gray-500">
                TravelOStyle typically responds within 48 hours. Your details
                are never shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
