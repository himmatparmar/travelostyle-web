"use client";

import { useState } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
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

  const handleLinkClick = (linkName) => {
    alert(`${linkName} clicked`);
  };

  return (
    <footer
      className="w-full overflow-hidden bg-[#2C3078] text-[#FAFAFA] px-6 md:px-[110px] py-12 md:py-[24px]"
      style={{ fontFamily: "Nohemi" }}
    >
     
      <div className="flex flex-col items-center pt-2 max-w-xl mx-auto md:max-w-none">
    
        <div className="flex items-center gap-4 md:gap-10 w-full justify-center">
          <div className="w-[40px] md:w-[140px] h-[1px] bg-[#FAFAFA]" />
          <span className="text-[14px] md:text-[18px] tracking-[0.05em] whitespace-nowrap">
            ESTD. 2026
          </span>
          <div className="w-[40px] md:w-[140px] h-[1px] bg-[#FAFAFA]" />
        </div>

        <div className="mt-4 md:mt-6 flex justify-center w-full px-4">
          <img
            src="/travelostyle-logo.svg"
            alt="TravelOStyle"
            className="w-full max-w-[280px] md:max-w-[520px] h-auto"
          />
        </div>

    
        <div className="flex items-center gap-4 md:gap-10 mt-4 w-full justify-center">
          <div className="w-[40px] md:w-[140px] h-[1px] bg-[#FAFAFA]" />
          <span className="text-[14px] md:text-[18px] tracking-[0.05em] whitespace-nowrap">
            JOURNEY BEYOND
          </span>
          <div className="w-[40px] md:w-[140px] h-[1px] bg-[#FAFAFA]" />
        </div>
      </div>

<div className="flex flex-col md:grid md:grid-cols-[120px_120px_180px_180px_minmax(0,1fr)] gap-10 md:gap-16 mt-16 md:mt-24 max-w-[340px] md:max-w-none mx-auto min-w-0">        
   
        <div className="grid grid-cols-2 gap-6 md:contents">
      
          <div>
            <h3 className="text-[16px] md:text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-4 md:mb-6">Company</h3>
            <div className="space-y-3 text-[13px] md:text-[14px] font-light text-white/90">
              <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("About Us")}>About Us</p>
              <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("General FAQs")}>General FAQs</p>
              <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("Write To Us")}>Write To Us</p>
              <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("Travel Journal")}>Travel Journal</p>
            </div>
          </div>

          <div>
            <h3 className="text-[16px] md:text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-4 md:mb-6">Travel</h3>
            <div className="space-y-3 text-[13px] md:text-[14px] font-light text-white/90">
              <p className="cursor-pointer hover:underline">All Journeys</p>
              <p className="cursor-pointer hover:underline">Group Journeys</p>
              <p className="cursor-pointer hover:underline">Private Journeys</p>
              <p className="cursor-pointer hover:underline">Tailor-Made Journey</p>
              <p className="cursor-pointer hover:underline">Offers</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] md:text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-4 md:mb-6">Legal</h3>
          <div className="space-y-3 text-[13px] md:text-[14px] font-light text-white/90">
            <p className="cursor-pointer tracking-[0.05em] leading-[17px]">Booking Terms & Conditions</p>
            <p className="cursor-pointer tracking-[0.05em] leading-[17px]">Cookie Preferences</p>
            <p className="cursor-pointer tracking-[0.05em] leading-[17px]">Website Terms Of Use</p>
            <p className="cursor-pointer tracking-[0.05em] leading-[17px]">Privacy Policy</p>
            <p className="cursor-pointer tracking-[0.05em] leading-[17px]">Data Sharing Policy</p>
            <p className="cursor-pointer tracking-[0.05em] leading-[17px]">Email Opt-Out</p>
            <p className="cursor-pointer tracking-[0.05em] leading-[17px]">Site Map</p>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] md:text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-4 md:mb-6">
            Connect With Us
          </h3>
          <div className="flex gap-4 mb-4">
            <FaFacebookSquare className="text-[24px] md:text-[26px] text-white cursor-pointer" />
            <FaInstagram className="text-[24px] md:text-[26px] text-white cursor-pointer" />
          </div>
          <p className="text-[13px] md:text-[14px] font-light">+1773 983 8067</p>
          <p className="text-[13px] md:text-[14px] font-light mt-1 md:mt-2">
            info@travelostyle.com
          </p>
        </div>

    
        <div className="min-w-0 mt-4 md:mt-0">
          
   
          <label className="block text-[14px] font-medium mb-2 md:mb-3">
            First Name*
          </label>
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
            <label className="block font-medium mt-8 mb-3">
              Email ID*
            </label>
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

      </div>
      <div className="mt-16 md:mt-20 border-t border-white/10 pt-6 text-center md:text-left text-[11px] md:text-[16px] font-medium tracking-[0.05em] md:tracking-[0.16em] text-white/70">
        <span>
          © TravelOStyle 2026 | Designed by Eunoia Design House
        </span>
      </div>
    </footer>
  );
}