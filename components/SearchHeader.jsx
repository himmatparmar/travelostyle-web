"use client";

import Image from "next/image";
import MobileMegaMenu from "./MobileMegaMenu";

export default function SearchHeader({
  menuOpen,
  setMenuOpen,
  setShowFindJourneyMobile,
}) {
  return (
    <>
      <div className="flex items-center justify-between bg-[#2E2787] px-4 md:px-14 py-2 text-[10px] md:text-[11px] text-white">
        <p className="truncate">
          Speak to our travel advisor (773) 983-8067 | open 10am-7pm CST
        </p>

        <div className="flex items-center gap-4 md:gap-6">
          <button>FAQs</button>
          <button className="hidden md:block">Contact Us</button>
        </div>
      </div>

      <MobileMegaMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="px-4 md:px-14 py-3">
      <div className="relative flex items-center justify-between border-b border-[#636363] pb-4">
          <button
            onClick={() => setMenuOpen(true)}
            className="block md:hidden"
          >
            <Image
              src="/MenuToggle.svg"
              alt="Menu"
              width={20}
              height={20}
            />
          </button>

          <img
            src="/TravelOStyleBlack.svg"
            alt="TravelOStyle"
            className="h-auto w-[140px] md:w-[309px] md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0"
          />

          <div className="hidden md:flex items-center gap-9 text-[14px] font-medium text-[#1E1E1E]">
            <button>About</button>
            <button>Group Journeys</button>
            <button>Private Journeys</button>
            <button>Tailor-made Journeys</button>
            <button>Destinations</button>
            <button>Offers</button>
          </div>

          <button
            onClick={() => setShowFindJourneyMobile(true)}
          >
            <Image
              src="/Search.svg"
              alt="Search"
              width={16}
              height={16}
              className="block md:hidden"
            />
          </button>
        </div>
      </div>
    </>
  );
}