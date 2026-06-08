"use client";
import { useState } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubscribe = () => {
    if (!name || !email) {
      alert("Please enter name and email");
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
        className="w-full overflow-hidden min-h-[872px] bg-[#2C3078] text-[#FAFAFA] px-[110px] py-[24px]"
        style={{ fontFamily: "Nohemi" }}
    >
      {/* Logo Section */}
      <div className="flex flex-col items-center pt-2">
        <div className="flex items-center gap-10">
          <div className="w-[140px] h-[1px] bg-[#FAFAFA]" />
          <span className="text-[18px] tracking-[0.05em]">
            ESTD. 2026
          </span>
          <div className="w-[140px] h-[1px] bg-[#FAFAFA]" />
        </div>

       <div className="mt-6 flex justify-center">
       <img
          src="/travelostyle-logo.svg"
          alt="TravelOStyle"
          className="w-[520px] h-auto"
        />
       </div>

        <div className="flex items-center gap-10 mt-4">
          <div className="w-[140px] h-[1px] bg-[#FAFAFA]" />
          <span className="text-[18px] tracking-[0.05em]">
            JOURNEY BEYOND
          </span>
          <div className="w-[140px] h-[1px] bg-[#FAFAFA]" />
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-[120px_120px_180px_180px_minmax(0,1fr)] gap-16 mt-24">
        {/* Company */}
        <div>
          <h3 className="text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-6">Company</h3>

          <div className="space-y-3 text-[14px] font-light">
            <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("About Us")}>About Us</p>
            <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("General FAQs")}>General FAQs</p>
            <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("Write To Us")}>Write To Us</p>
            <p className="cursor-pointer hover:underline" onClick={() => handleLinkClick("Travel Journal")}>Travel Journal</p>
          </div>
        </div>

        {/* Travel */}
        <div>
          <h3 className="text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-6">Travel</h3>

          <div className="space-y-3 text-[14px] font-light">
            <p className="cursor-pointer hover:underline">All Journeys</p>
            <p className="cursor-pointer hover:underline">Group Journeys</p>
            <p className="cursor-pointer hover:underline">Private Journeys</p>
            <p className="cursor-pointer hover:underline">Tailor-Made Journey</p>
            <p className="cursor-pointer hover:underline">Offers</p>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-6">Legal</h3>

          <div className="space-y-3 text-[14px] font-light">
            <p className="cursor-pointer text-[14px] font-light tracking-[0.05em] leading-[17px]">Booking Terms & Conditions</p>
            <p className="cursor-pointer text-[14px] font-light tracking-[0.05em] leading-[17px]">Cookie Preferences</p>
            <p className="cursor-pointer text-[14px] font-light tracking-[0.05em] leading-[17px]">Website Terms Of Use</p>
            <p className="cursor-pointer text-[14px] font-light tracking-[0.05em] leading-[17px]">Privacy Policy</p>
            <p className="cursor-pointer text-[14px] font-light tracking-[0.05em] leading-[17px]">Data Sharing Policy</p>
            <p className="cursor-pointer text-[14px] font-light tracking-[0.05em] leading-[17px]">Email Opt-Out</p>
            <p className="cursor-pointer text-[14px] font-light tracking-[0.05em] leading-[17px]">Site Map</p>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-[18px] font-medium tracking-[0.05em] leading-[22px] mb-6">
            Connect With Us
          </h3>

          <div className="flex gap-4 mb-4">
            <FaFacebookSquare className="text-[26px] text-white cursor-pointer" />
            <FaInstagram className="text-[26px] text-white cursor-pointer" />
          </div>

          <p className="text-[14px]">+1773 983 8067</p>
          <p className="text-[14px] mt-2">
            info@travelostyle.com
          </p>
        </div>

        {/* Newsletter */}
        <div className="min-w-0">
          <label className="block font-medium mb-3">
            Your Name*
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your first name"
            className="w-full max-w-[708px] bg-transparent border-b border-white outline-none pb-2 placeholder:text-white/60"
          />

          <label className="block font-medium mt-8 mb-3">
            Email ID*
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email ID"
            className="w-full max-w-[708px] bg-transparent border-b border-white outline-none pb-2 placeholder:text-white/60"
          />

          <button
            onClick={handleSubscribe}
            className="mt-10 w-[366px] h-[44px] rounded-[100px] bg-[#FAFAFA] text-[#2C3078] font-semibold"
          >
            Subscribe To Our Newsletter
          </button>

          <div className="flex items-center gap-4 mt-8">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="w-8 h-8 cursor-pointer"
            />

            <span className="text-[14px] whitespace-nowrap">    
              I agree to receive news, updates and more from TravelOStyle
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 text-[16px] font-medium tracking-[0.16em] leading-[24px]">
      <span className="font-medium">
        © TravelOStyle 2026 | Designed by Eunoia Design House
     </span>
     </div>
    </footer>
  );
}