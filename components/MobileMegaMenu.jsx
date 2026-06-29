"use client";

import Image from "next/image";

export default function MobileMegaMenu({
  menuOpen,
  setMenuOpen,
}) {
  const menuItems = [
    "About",
    "Group Journeys",
    "Private Journeys",
    "Tailor-Made Journeys",
    "Offers",
    "FAQs",
  ];

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
        menuOpen ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={() => setMenuOpen(false)}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute left-0 top-0 h-screen w-[78%] max-w-[300px]
          bg-[#2F2F87] px-6 py-8 flex flex-col
          transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div>
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-[32px] leading-none"
            >
              ×
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            {menuItems.map((item) => (
              <button
                key={item}
                className="text-left text-white text-[18px] font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="mt-10 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#2F2F87]">
            Explore All Journeys
          </button>

          <div className="mt-10 flex items-center gap-5">
            <Image
              src="/Facebook.svg"
              alt="Facebook"
              width={28}
              height={28}
            />

            <Image
              src="/Instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
            />
          </div>

          <div className="mt-8 text-white">
            <p className="text-[15px] font-medium">
              Talk to Our Travel Advisor
            </p>

            <p className="mt-2 text-[15px]">
              +1 773 983 8067
            </p>

            <p className="mt-2 text-[15px]">
              info@travelostyle.com
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pb-4">
          <div className="flex items-center gap-2">
            <div className="h-[1px] flex-1 bg-white/30" />

            <span className="text-[10px] tracking-[0.2em] text-white/70">
              ESTD. 2026
            </span>

            <div className="h-[1px] flex-1 bg-white/30" />
          </div>
          <div className="flex justify-center py-5">
            <Image
              src="/travelostyle-logo.svg"
              alt="Travelostyle"
              width={170}
              height={50}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[1px] flex-1 bg-white/30" />

            <span className="text-[9px] tracking-[0.25em] text-white/60">
              JOURNEY BEYOND
            </span>

            <div className="h-[1px] flex-1 bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}