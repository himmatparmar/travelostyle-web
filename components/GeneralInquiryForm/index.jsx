"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { countryCodes } from "../utils/country";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. CSRF Token Fetch
      const csrfRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/session/token`
      );

      if (!csrfRes.ok) {
        throw new Error("Failed to fetch CSRF token");
      }

      const csrfToken = await csrfRes.text();

      const credentials = btoa(
        `${process.env.NEXT_PUBLIC_DRUPAL_USER}:${process.env.NEXT_PUBLIC_DRUPAL_PASS}`
      );

      // 2. Exact Drupal Webform REST Payload
      const payload = {
        webform_id: "contact_inquiry",
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        title: formData.title.trim(),
        email_id: formData.email.trim(),
        country_code: formData.countryCode,
        phone: `${formData.countryCode} ${formData.phone.trim()}`,
        message: formData.message.trim(),
        consent: formData.consent ? "1" : "0",
      };

      // 3. API Request
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/webform_rest/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${credentials}`,
            "X-CSRF-Token": csrfToken,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Submission Error:", data);
        alert(data.message || data.error?.message || "Something went wrong.");
        setIsSubmitting(false);
        return;
      }

      console.log("Success Response:", data);
      onSubmit?.(formData);
      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Form Submission Error:", error);
      alert("Unable to submit the form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-y-auto antialiased">
      <div className="bg-[#fafafa] p-[1px] w-full max-w-[1100px] rounded-[12px]">
        <div className="relative my-auto rounded-[12px] flex flex-col border border-[#262626] shadow-2xl overflow-hidden">
          
          <div className="flex shrink-0 items-center justify-between border-b border-[#262626] px-6 sm:px-10 py-3.5">
            <h2 className="text-[16px] sm:text-[19px] font-[500] leading-tight tracking-[0.04em] text-[#000000]">
              Inquire With Us
            </h2>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="cursor-pointer p-1 text-[#262626] transition-opacity hover:opacity-60 focus:outline-none"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="px-6 py-5 sm:px-10 sm:py-6">
            {submitted ? (
              <div className="py-6">
                <h3 className="text-[17px] font-semibold text-[#000000]">
                  Inquiry Submitted!
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#555555]">
                  Your inquiry has been received by team TravelOStyle. We
                  typically respond within 48hrs. Your details are never shared
                  with third parties.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 flex h-[35px] w-[130px] items-center justify-center rounded-[30px] bg-[#2C3078] text-[14px] font-medium text-[#FAFAFA] transition hover:opacity-90 cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 sm:gap-y-5">
                <div className="grid grid-cols-1 gap-x-12 gap-y-3.5 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="text-[13px] sm:text-[14px] font-medium leading-normal tracking-[0.02em] text-[#000000]">
                      First Name<span className="text-[10px] align-top text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      required
                      className="w-full border-b border-[#262626] bg-transparent pb-1 pt-0.5 text-[13px] sm:text-[14px] tracking-[0.04em] text-[#000000] placeholder:text-[#757575] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[13px] sm:text-[14px] font-medium leading-normal tracking-[0.02em] text-[#000000]">
                      Last Name<span className="text-[10px] align-top text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      required
                      className="w-full border-b border-[#262626] bg-transparent pb-1 pt-0.5 text-[13px] sm:text-[14px] tracking-[0.04em] text-[#000000] placeholder:text-[#757575] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-12 gap-y-3.5 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="text-[13px] sm:text-[14px] font-medium leading-normal tracking-[0.02em] text-[#000000]">
                      Title<span className="text-[10px] align-top text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Your title"
                      required
                      className="w-full border-b border-[#262626] bg-transparent pb-1 pt-0.5 text-[13px] sm:text-[14px] tracking-[0.04em] text-[#000000] placeholder:text-[#757575] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[13px] sm:text-[14px] font-medium leading-normal tracking-[0.02em] text-[#000000]">
                      Email ID<span className="text-[10px] align-top text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email ID"
                      required
                      className="w-full border-b border-[#262626] bg-transparent pb-1 pt-0.5 text-[13px] sm:text-[14px] tracking-[0.04em] text-[#000000] placeholder:text-[#757575] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="text-[13px] sm:text-[14px] font-medium leading-normal tracking-[0.02em] text-[#000000]">
                      Contact Number<span className="text-[10px] align-top text-red-500">*</span>
                    </label>
                    <div className="flex items-end gap-3 pt-0.5">
                      <div className="relative min-w-[55px] shrink-0 border-b border-[#262626] pb-1">
                        <span className="pointer-events-none text-[13px] sm:text-[14px] text-[#000000]">
                          {formData.countryCode}
                        </span>
                        <span className="pointer-events-none absolute right-0.5 top-1/2 -translate-y-1/2 text-[8px] text-[#262626]">
                          ▼
                        </span>
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="absolute inset-0 w-full h-full cursor-pointer opacity-0 text-[13px]"
                        >
                          {countryCodes.map((item, index) => (
                            <option key={`${item.code}-${index}`} value={item.code} className="text-[#000000] bg-white">
                              {item.code} ({item.country})
                            </option>
                          ))}
                        </select>
                      </div>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your number"
                        required
                        className="w-full border-b border-[#262626] bg-transparent pb-1 text-[13px] sm:text-[14px] leading-tight tracking-[0.04em] text-[#000000] placeholder:text-[#757575] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="mb-1.5 text-[13px] sm:text-[14px] font-medium leading-normal tracking-[0.02em] text-[#000000]">
                    Your Message<span className="text-[10px] align-top text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
                    required
                    className="w-full resize-none rounded-[10px] border border-[#262626] bg-transparent p-3 text-[13px] leading-relaxed tracking-[0.03em] text-[#000000] placeholder:text-[#757575] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex max-w-[320px] cursor-pointer items-start gap-2.5 select-none">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-[3px] h-[16px] w-[16px] shrink-0 rounded-[4px] border border-[#262626] accent-[#2C3078] cursor-pointer"
                    />
                    <span className="text-[12px] sm:text-[12.5px] leading-[1.35] text-[#000000]">
                      I agree to be contacted by TravelOStyle regarding
                      <br className="hidden sm:inline" /> my inquiry.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-[37px] w-[172px] shrink-0 rounded-[30px] bg-[#2C3078] text-[15px] font-medium tracking-[0.03em] text-[#FAFAFA] transition hover:opacity-90 cursor-pointer flex items-center justify-center self-end sm:self-auto disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </div>

                <p className="pt-2 text-[12px] sm:text-[13px] tracking-[0.02em] text-[#555555] sm:whitespace-nowrap">
                  TravelOStyle typically responds within 48 hours. Your details are never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}