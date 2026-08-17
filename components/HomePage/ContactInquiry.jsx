"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactInquiry() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.countryCode.trim()) {
      newErrors.countryCode = "Country code is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required.";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = "Contact number must contain only numbers.";
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid contact number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    if (!formData.consent) {
      newErrors.consent = "Please provide your consent to continue.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
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
          body: JSON.stringify({
            webform_id: "contact_inquiry",
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            title: formData.title.trim(),
            email_id: formData.email.trim(),
            country_code: formData.countryCode,
            phone: formData.phone.trim(),
            message: formData.message.trim(),
            consent: formData.consent,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Submission Error:", data);
        alert(data.message || "Something went wrong.");
        return;
      }

      console.log("Success Response:", data);
      alert("Form Submitted Successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        countryCode: "+1",
        phone: "",
        message: "",
        consent: false,
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      alert("Unable to submit the form. Please try again.");
    }
  };

  return (
    <section className="w-full px-[1vw] py-[1vw] max-md:px-0 max-md:py-0 mt-8">
      <div
        className="relative mx-auto h-[39vw] max-w-[95vw] overflow-hidden
        max-md:h-auto max-w-full max-md:min-h-screen"
      >
        <Image
          src="/Australia.svg"
          alt="Australia"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0" />
        <div className="absolute inset-0" />

        <div
          className="relative z-10 flex h-full gap-[5vw]
          px-[4.5vw] py-[2vw] text-[#FAFAFA]
          max-md:flex-col max-md:px-6 max-md:py-8 max-md:gap-6"
        >
          <div className="w-[28%] pt-[1vw] max-md:w-full max-md:pt-0">
            <h2
              className="max-w-[18vw] text-[2.1vw] font-semibold
              leading-[1.05] tracking-[-0.08vw] text-[#FAFAFA]
              max-md:max-w-full max-md:text-[34px] max-md:leading-[38px]"
            >
              Not sure where to begin? Talk to us!
            </h2>

            <p
              className="mt-[1.1vw] max-w-[16vw] text-[0.9vw]
              leading-[1.7] text-[#FAFAFA]/80 font-Nohemi
              max-md:max-w-full max-md:mt-3 max-md:text-[14px]
              max-md:leading-6"
            >
              We’re here to design the kind of travel that actually gives
              something back.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 pt-[0.1vw] max-md:pt-0"
            noValidate
          >
            <div
              className="grid grid-cols-2 gap-x-[4vw] gap-y-[1.6vw]
              max-md:grid-cols-1 max-md:gap-y-5"
            >
              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] max-md:text-[14px] text-[#FAFAFA]">
                  First Name*
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className={`w-full border-b ${
                    errors.firstName
                      ? "border-red-400"
                      : "border-white/70"
                  } bg-transparent pb-[0.45vw] text-[0.7vw]
                  max-md:pb-2 max-md:text-[13px] text-white
                  placeholder:text-white/45 focus:outline-none`}
                />

                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-300">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] max-md:text-[14px] text-[#FAFAFA]">
                  Last Name*
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className={`w-full border-b ${
                    errors.lastName
                      ? "border-red-400"
                      : "border-white/70"
                  } bg-transparent pb-[0.45vw] text-[0.7vw]
                  max-md:pb-2 max-md:text-[13px] text-white
                  placeholder:text-white/45 focus:outline-none`}
                />

                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-300">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] max-md:text-[14px] text-[#FAFAFA]">
                  Title*
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Your title"
                  className={`w-full border-b ${
                    errors.title
                      ? "border-red-400"
                      : "border-white/70"
                  } bg-transparent pb-[0.45vw] text-[0.7vw]
                  max-md:pb-2 max-md:text-[13px] text-white
                  placeholder:text-white/45 focus:outline-none`}
                />

                {errors.title && (
                  <p className="mt-1 text-xs text-red-300">
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] max-md:text-[14px] text-[#FAFAFA]">
                  Email ID*
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email ID"
                  className={`w-full border-b ${
                    errors.email
                      ? "border-red-400"
                      : "border-white/70"
                  } bg-transparent pb-[0.45vw] text-[0.7vw]
                  max-md:pb-2 max-md:text-[13px] text-white
                  placeholder:text-white/45 focus:outline-none`}
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-300">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] max-md:text-[14px] text-[#FAFAFA]">
                  Contact Number/ WhatsApp*
                </label>

                <div
                  className={`flex items-center gap-[0.6vw] border-b ${
                    errors.phone
                      ? "border-red-400"
                      : "border-white/70"
                  } pb-[0.45vw] max-md:pb-2`}
                >
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-transparent text-[0.72vw]
                    max-md:text-[13px] text-white outline-none"
                  >
                    <option className="text-black" value="+1">
                      +1
                    </option>
                    <option className="text-black" value="+91">
                      +91
                    </option>
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Number"
                    className="w-full bg-transparent text-[0.72vw]
                    max-md:text-[13px] text-white
                    placeholder:text-white/45 focus:outline-none"
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-300">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-[1.7vw]">
              <label className="mb-[0.45vw] block text-[0.9vw] max-md:text-[14px] text-[#FAFAFA]">
                Your Message*
              </label>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
                className={`h-[7vw] min-h-[120px] w-full resize-none
                rounded-[0.7vw] max-md:rounded-md bg-white
                px-[1vw] py-[0.9vw] max-md:px-3 max-md:py-3
                text-[0.7vw] max-md:text-[13px] text-[#222]
                placeholder:text-[#8d8d8d] focus:outline-none
                ${errors.message ? "border-2 border-red-400" : ""}`}
              />

              {errors.message && (
                <p className="mt-1 text-xs text-red-300">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="mt-5 flex items-start gap-3 max-md:mt-5">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className={`mt-[0.2vw] h-[1.6vw] w-[1.6vw]
                max-md:h-4 max-md:w-4 cursor-pointer accent-white
                ${errors.consent ? "outline outline-2 outline-red-400" : ""}`}
              />

              <div className="flex-1 text-white/90">
                <p className="text-[12px] leading-5 md:text-[0.9vw] md:leading-[1.7]">
                  I consent to being contacted on the above provided
                  details by TravelOStyle.
                </p>

                <p
                  className="mt-2 text-[12px] leading-5 md:mt-[0.3vw]
                  md:text-[0.9vw] md:leading-[1.7] text-white/70"
                >
                  TravelOStyle typically responds within 48 hours.
                  Your details are never shared with third parties.
                </p>

                {errors.consent && (
                  <p className="mt-1 text-xs text-red-300">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

           <button
  type="submit"
  className="mt-[1vw] flex h-[40px] w-[200px] items-center justify-center gap-[10px] rounded-[100px] bg-white px-[24px] py-[16px] text-[14px] font-semibold text-[#2f2d89] max-md:mt-5"
>
  Submit Inquiry
</button>
          </form>
        </div>
      </div>
    </section>
  );
}