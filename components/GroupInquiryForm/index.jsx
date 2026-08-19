"use client";

import { useState } from "react";
import { X } from "lucide-react";
import GroupSummaryCard from "./GroupSummaryCard";

const initialFormData = {
  firstName: "",
  lastName: "",
  title: "",
  countryCode: "+1",
  phone: "",
  email: "",
  guests: "",
  travelingWithChildren: "No",
  flightAssistance: "Yes",
  message: "",
  consent: false,
};

function RadioOption({ name, value, checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-1.5">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 cursor-pointer accent-[#2D3482]"
      />
      <span className="text-[12px] text-[#1A1A1A]">{label}</span>
    </label>
  );
}

// Single-step "Group Trip Inquiry" form, opened from the "Enquire For This
// Date" action on a journey's Dates & Pricing tab. Always tied to one
// specific confirmed departure (unlike PrivateInquiryForm, which is
// multi-step and may or may not have a fixed date) — kept as its own
// component rather than folded into PrivateInquiryForm.
export default function GroupInquiryForm({ isOpen, onClose, onSubmit, journey, trip }) {
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
    onSubmit?.({ ...formData, journey, trip });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[900px]">
        <p className="mb-2 pl-1 text-[13px] font-medium text-gray-400">
          Group Trip Inquiry
        </p>

        <div className="flex max-h-[90vh] w-full flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
          <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-6 py-4 sm:px-8">
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

          <div className="overflow-y-auto px-6 py-6 sm:px-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <h3 className="text-lg font-semibold text-[#1A1A1A]">
                  Thank you! Your inquiry has been received.
                </h3>
                <p className="max-w-md text-sm text-gray-500">
                  Our travel specialists will get back to you within 48 hours
                  with everything you need for this journey.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-4 rounded-full bg-[#2D3482] px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-8 sm:flex-row"
              >
                <div className="w-full sm:sticky sm:top-0 sm:w-auto">
                  <GroupSummaryCard journey={journey} trip={trip} />
                </div>

                <div className="w-full flex-1">
                  <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
                    Guest Details
                  </h3>

                  <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your First Name"
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
                        placeholder="Your Last Name"
                        required
                        className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                        Title*
                      </label>
                      <select
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select your title
                        </option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Dr.">Dr.</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                        Number/ WhatsApp
                      </label>
                      <div className="flex items-center gap-2 border-b border-gray-400 pb-2">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="appearance-none bg-transparent text-[13px] text-[#1A1A1A] focus:outline-none"
                        >
                          <option value="+1">+1</option>
                          <option value="+91">+91</option>
                          <option value="+44">+44</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your Mobile Number"
                          className="w-full bg-transparent text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                        />
                      </div>
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
                        placeholder="Your Email ID"
                        required
                        className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                        No.of Guests*
                      </label>
                      <input
                        type="number"
                        min="1"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="Enter no.of Guests"
                        required
                        className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-[13px] font-medium text-[#1A1A1A]">
                        Are you traveling with children?* (under 14yrs)
                      </p>
                      <div className="flex items-center gap-6">
                        <RadioOption
                          name="travelingWithChildren"
                          value="Yes"
                          checked={formData.travelingWithChildren === "Yes"}
                          onChange={handleChange}
                          label="Yes"
                        />
                        <RadioOption
                          name="travelingWithChildren"
                          value="No"
                          checked={formData.travelingWithChildren === "No"}
                          onChange={handleChange}
                          label="No"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-[13px] font-medium text-[#1A1A1A]">
                        Do you require assistance with flight bookings?
                      </p>
                      <div className="flex items-center gap-6">
                        <RadioOption
                          name="flightAssistance"
                          value="Yes"
                          checked={formData.flightAssistance === "Yes"}
                          onChange={handleChange}
                          label="Yes"
                        />
                        <RadioOption
                          name="flightAssistance"
                          value="No"
                          checked={formData.flightAssistance === "No"}
                          onChange={handleChange}
                          label="No"
                        />
                        <RadioOption
                          name="flightAssistance"
                          value="Not sure yet"
                          checked={formData.flightAssistance === "Not sure yet"}
                          onChange={handleChange}
                          label="Not sure yet"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
                        Your Message*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Do you have questions or considerations that you would like us to know?"
                        className="w-full resize-none rounded-md border border-gray-300 bg-transparent p-3 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <label className="flex items-center gap-2 text-[12px] text-[#1A1A1A]">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="h-3.5 w-3.5 cursor-pointer accent-[#2D3482]"
                      />
                      I agree to be contacted by TravelOStyle regarding my inquiry.
                    </label>

                    <button
                      type="submit"
                      className="w-full shrink-0 rounded-full bg-[#2D3482] px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78] sm:w-auto"
                    >
                      Submit Inquiry
                    </button>
                  </div>

                  <p className="mt-3 text-[11px] text-gray-500">
                    TravelOStyle typically responds within 48 hours. Your
                    details are never shared with third parties.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
