"use client";

import { useState } from "react";

export default function FooterNewsletterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubscribe = () => {
    if (!firstName || !email) {
      alert("Please enter first name and email");
      return;
    }

    if (!agree) {
      alert("Please accept the checkbox");
      return;
    }

    alert("Subscribed Successfully");
  };

  return (
    <div className="min-w-0 mt-4 md:mt-0">
      <label className="block text-[14px] font-medium mb-2 md:mb-3">First Name*</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Your First Name"
        className="w-full max-w-[708px] bg-transparent border-b border-white/60 focus:border-white outline-none pb-2 placeholder:text-white/40 text-[14px]"
      />

      <label className="block text-[14px] font-medium mt-6 md:mt-8 mb-2 md:mb-3">
        Last Name*
      </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Your Last Name"
        className="w-full max-w-[708px] bg-transparent border-b border-white/60 focus:border-white outline-none pb-2 placeholder:text-white/40 text-[14px]"
      />

      <div className="hidden md:block">
        <label className="block font-medium mt-8 mb-3">Email ID*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email ID"
          className="w-full max-w-[708px] bg-transparent border-b border-white/60 focus:border-white outline-none pb-2 placeholder:text-white/40 text-[14px]"
        />
      </div>

      <div className="flex items-start gap-3 mt-8 max-w-[290px] md:max-w-none">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="w-5 h-5 md:w-8 md:h-8 cursor-pointer mt-0.5 shrink-0 rounded"
        />
        <span className="text-[11px] md:text-[14px] leading-tight text-white/90">
          I agree to receive news, updates and more from TravelOStyle
        </span>
      </div>
      <button
        onClick={handleSubscribe}
        className="overflow-hidden mt-8 md:mt-10 w-full md:w-[366px] h-[44px] rounded-[100px] bg-[#FAFAFA] text-[#2C3078] text-[13px] md:text-[14px] font-bold md:font-semibold tracking-wide active:scale-95 transition-transform"
      >
        Subscribe To Our Newsletter
      </button>
    </div>
  );
}
