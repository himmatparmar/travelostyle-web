"use client";

import Image from "next/image";
import { useState } from "react";
import bgImage from "./bgimg.png";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    countryCode: "+1",
    contact: "",
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

    localStorage.setItem(
      "travelInquiry",
      JSON.stringify(formData)
    );

    console.log("========== FORM SUBMITTED ==========");
    console.log(formData);

    const storedData = JSON.parse(
      localStorage.getItem("travelInquiry")
    );

    console.log("========== STORED IN LOCALSTORAGE ==========");
    console.log(storedData);
  };
  return (
    <section className="relative min-h-[900px] md:min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-6 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16">
          {/* LEFT SIDE - 40% */}
          <div className="w-full lg:w-[40%]">
            <h2 className="font-[Nohemi] font-semibold text-white text-[25px] md:text-[40px] leading-[24px] md:leading-[48px] max-w-[397px]">
              <span className="block">Can't decide</span>
              <span className="block">where to go?</span>
            </h2>
            <p
              className="mt-3 w-[336px] max-w-full text-white text-[15px] leading-[20px] font-normal tracking-[0.02em] md:max-w-[360px]
    md:text-[18px] md:leading-[32px]">
              Tell us what you're drawn to – your interests, how long
              you have, your budget, your group size and anything else –
              we'll come back with a curated list of destinations and
              journeys that make sense for you!
            </p>
          </div>

          {/* RIGHT SIDE - 60% */}
          <div className="w-full lg:w-[60%]">
            <form onSubmit={handleSubmit} className="text-white">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className=" mb-2 block text-[15px] md:text-[18px] leading-[18px] md:leading-[32px] font-normal tracking-[0.05em] text-white">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    className=" w-full border-b border-white bg-transparent pb-2 md:pb-3 
        text-[15px] md:text-[14px] text-whitecplaceholder:text-white/70 focus:outline-none"
                  />
                </div>

                <div>
                  <label className=" mb-2 block text-[15px] md:text-[18px] leading-[18px] md:leading-[32px]
                                                    font-normal tracking-[0.05em] text-white">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className=" w-full border-b border-white bg-transparent pb-2 md:pb-3
                                                    text-[15px] md:text-[14px] text-white placeholder:text-white/70
                                                    focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label
                    className="mb-2 block text-[15px] md:text-[18px] leading-[18px] md:leading-[32px]
                                                    font-normal tracking-[0.05em]  text-white"
                  >
                    Title*
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Your title"
                    className="w-full border-b border-white bg-transparent pb-2 md:pb-3 text-[15px] md:text-[14px] 
                         text-white placeholder:text-white/70 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-[15px] md:text-[18px] leading-[18px] md:leading-[32px]
                                font-normal tracking-[0.05em]  text-white"
                  >
                    Email Id*
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email Id"
                    className=" w-full pb-2 md:pb-3 text-[15px] md:text-[14px] border-b bg-transparent
                                                     border-white text-white placeholder:text-white/70 focus:outline-none"
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div className="mt-6">
                <label
                  className="mb-2 block font-normal  text-[15px] md:text-[18px] leading-[18px] md:leading-[32px] tracking-[0.05em] text-white">
                  Contact*
                </label>

                <div className="flex gap-2 md:gap-3">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white/70 pb-2 text-sm focus:outline-none"
                  >
                    <option className="text-black">+1</option>
                    <option className="text-black">+91</option>
                    <option className="text-black">+44</option>
                  </select>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Your number"
                    className="flex-1 bg-transparent border-b border-white/70 pb-2 text-sm placeholder:text-white/70 focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-8">
                <label
                  className=" mb-2 block font-normal
   text-[11px] md:text-[18px] leading-[18px] md:leading-[32px] tracking-[0.05em] text-white "
                >
                  Your Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
                  className="h-[200px] md:h-[180px] w-full rounded-[10px] border-2 border-white bg-white p-4 text-black resize-none focus:outline-none md:placeholder-transparent "
                /></div>

              {/* Submit */}
              <button type="submit" className="mt-8 flex h-[35px] md:h-[47px] w-fit text-[#2D3482] text-[16px] font-semibold md:text-base px-4 md:px-6 bg-white rounded-[100px]   items-center justify-center
                whitespace-nowrap">
                Submit Inquiry
              </button>

              {/* Consent */}
              <div className="mt-8">
                {/* Checkbox Row */}
                <div className="flex items-center gap-6">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="  h-[16px] md:h-[32px] w-[16px] md:w-[25px] shrink-0 rounded-[5px] border-white"
                  />    <p
                    className="
    w-[296px] md:w-auto
    h-[59px] md:h-auto
    font-normal
    text-[15px] md:text-[14px]
    leading-[18px] md:leading-[32px]
    tracking-[0.05em]
    text-white
    md:max-w-[685px]
  "
                  >
                    I consent to being contacted on the above provided details by
                    TravelOStyle
                  </p>
                </div>

                {/* Bottom Line */}
                <p
                  className="mt-8 font-normal text-[15px] md:text-[12px] leading-[20px] md:leading-[32px]
                                           max-w-[260px] md:max-w-[1125px] tracking-[0.05em] text-white"
                >
                  TravelOStyle typically responds within 48 hours. Your details are
                  never shared with third parties.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
} 