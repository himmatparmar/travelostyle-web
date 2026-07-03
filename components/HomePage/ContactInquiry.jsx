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
    <section className="w-full px-[1vw] py-[1vw] max-md:px-0 max-md:py-0 mt-8">
      <div
        className="relative mx-auto h-[39vw] max-w-[95vw] overflow-hidden
        max-md:h-auto
        max-w-full
        max-md:min-h-screen"
      >
        <Image
          src="/Australia.svg"
          alt="Australia"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0" />
        <div className="absolute inset-0 " />
        
        <div
          className="relative z-10
          flex h-full gap-[5vw]
          px-[4.5vw] py-[2vw]
          text-[#FAFAFA]

          max-md:flex-col
          max-md:px-6
          max-md:py-8
          max-md:gap-6"
        >
          <div className="w-[28%] pt-[1vw] max-md:w-full max-md:pt-0">
            <h2
              className="max-w-[18vw]
              text-[2.1vw]
              font-semibold
              leading-[1.05]
              tracking-[-0.08vw]
              text-[#FAFAFA]

              max-md:max-w-full
              max-md:text-[34px]
              max-md:leading-[38px]"
            >
              Not sure where to begin? Talk to us!
            </h2>

            <p
              className="mt-[1.1vw]
              max-w-[16vw]
              text-[0.9vw]
              leading-[1.7]
              text-[#FAFAFA]/80
              font-Nohemi

              max-md:max-w-full
              max-md:mt-3
              max-md:text-[14px]
              max-md:leading-6"
            >
              We’re here to design the kind of travel that actually gives
              something back.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex-1 pt-[0.1vw] max-md:pt-0">
            <div
              className="grid grid-cols-2
              gap-x-[4vw]
              gap-y-[1.6vw]

              max-md:grid-cols-1
              max-md:gap-y-5"
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
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] max-md:pb-2 max-md:text-[13px] text-white placeholder:text-white/45 focus:outline-none"
                />
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
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] max-md:pb-2 max-md:text-[13px] text-white placeholder:text-white/45 focus:outline-none"
                />
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
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] max-md:pb-2 max-md:text-[13px] text-white placeholder:text-white/45 focus:outline-none"
                />
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
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.7vw] max-md:pb-2 max-md:text-[13px] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-[0.25vw] block text-[0.9vw] max-md:text-[14px] text-[#FAFAFA]">
                  Contact Number/ WhatsApp*
                </label>
                <div className="flex items-center gap-[0.6vw] border-b border-white/70 pb-[0.45vw] max-md:pb-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-transparent text-[0.72vw] max-md:text-[13px] text-white outline-none"
                  >
                    <option className="text-black" value="+1">+1</option>
                    <option className="text-black" value="+91">+91</option>
                  </select>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Number"
                    className="w-full bg-transparent text-[0.72vw] max-md:text-[13px] text-white placeholder:text-white/45 focus:outline-none"
                  />
                </div>
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
                className="h-[7vw] min-h-[120px] w-full resize-none rounded-[0.7vw] max-md:rounded-md bg-white px-[1vw] py-[0.9vw] max-md:px-3 max-md:py-3 text-[0.7vw] max-md:text-[13px] text-[#222] placeholder:text-[#8d8d8d] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-[1vw] rounded-full bg-white px-[1.5vw] py-[0.55vw] text-[1.05vw] font-semibold text-[#2f2d89] max-md:mt-5 max-md:px-5 max-md:py-2 max-md:text-[14px]"
            >
              Submit Inquiry
            </button>

            <div className="mt-5 flex items-start gap-3 max-md:mt-5">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-[0.2vw] h-[1.6vw] w-[1.6vw] max-md:h-4 max-md:w-4 cursor-pointer accent-white"
              />
              <div className="flex-1 text-white/90">
                <p className="text-[12px] leading-5 md:text-[0.9vw] md:leading-[1.7]">
                  I consent to being contacted on the above provided details by TravelOStyle.
                </p>
                <p className="mt-2 text-[12px] leading-5 md:mt-[0.3vw] md:text-[0.9vw] md:leading-[1.7] text-white/70">
                  TravelOStyle typically responds within 48 hours. Your details are never shared with third parties.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}