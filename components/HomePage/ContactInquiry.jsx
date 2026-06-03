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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form Submitted!");
  };

  return (
    <section className="w-full px-[1vw] py-[1vw]">
      <div className="relative mx-auto h-[39vw] max-w-[95vw] overflow-hidden">
        <Image
          src="/Australia.svg"
          alt="Australia"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#000]/30" />

        <div className="relative z-10 flex h-full gap-[5vw] px-[4.5vw] py-[2vw] text-[#F9F9F980]">
       
          <div className="w-[28%] pt-[1vw]">
            <h2 className="max-w-[18vw] text-[2.1vw] font-semibold leading-[1.05] tracking-[-0.08vw] text-[#FAFAFA]">
              Not sure where to begin? Talk to us!
            </h2>

            <p className="mt-[1.1vw] max-w-[16vw] text-[0.9vw] leading-[1.7] text-[#FAFAFA] font-Nohemi">
              We’re here to design the kind of travel that actually gives
              something back.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex-1 pt-[0.1vw]">
            <div className="grid grid-cols-2 gap-x-[4vw] gap-y-[1.6vw]">
              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] text-[#FAFAFA]">
                  First Name*
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] text-[#FAFAFA]">
                  Last Name*
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              {/* TITLE */}
              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] text-[#FAFAFA]">
                  Title*
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Your title"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] text-[#FAFAFA]">
                  Email ID*
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email ID"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] text-[#FAFAFA]">
                  Contact Number*
                </label>

                <div className="flex items-center gap-[0.6vw] border-b border-white/70 pb-[0.45vw]">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-transparent text-[0.72vw] text-white outline-none"
                  >
                    <option className="text-black">+1</option>
                    <option className="text-black">+91</option>
                  </select>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter number"
                    className="w-full bg-transparent text-[0.72vw] text-white placeholder:text-white/45 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-[1.7vw]">
              <label className="mb-[0.45vw] block text-[0.9vw] text-[#FAFAFA]">
                Your Message*
              </label>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
                className="h-[7vw] w-full resize-none rounded-[0.7vw] bg-white px-[1vw] py-[0.9vw] text-[0.7vw] text-[#222] placeholder:text-[#8d8d8d] focus:outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-[1vw] rounded-full bg-white px-[1.5vw] py-[0.55vw] text-[1.05vw] font-semibold text-[#2f2d89] transition-all duration-300 hover:bg-[#f5f5f5]"
            >
              Submit Inquiry
            </button>

            {/* CHECKBOX */}
            <div className="mt-[1vw] flex items-start gap-[0.7vw]">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-[0.2vw] h-[1.6vw] w-[1.6vw] cursor-pointer accent-white"
              />

              <div className="space-y-[0.2vw] text-[0.9vw] leading-[1.7] text-[#FAFAFA]">
                <p>
                  I consent to being contacted on the above provided details by
                  TravelOStyle.
                </p>

                <p>
                  TravelOStyle typically responds within 48 hours. Your details
                  are never shared with third parties.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}