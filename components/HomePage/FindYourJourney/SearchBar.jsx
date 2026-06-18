"use client";
import Image from "next/image";
import { useState } from "react";
import FindJourneyMobile from "./FindYourJourneyMobile";
import TravelForm from "./TravelForm";

export default function SearchBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFindJourneyMobile, setShowFindJourneyMobile] = useState(false);
  return (
    <section className="w-full overflow-hidden border border-[#7C4DFF]">

      <div className="flex items-center justify-between bg-[#2E2787] px-4 md:px-14 py-2 text-[10px] md:text-[11px] text-white">
        <p className="truncate">
          Speak to our travel advisor (773) 983-8067 | open 10am-7pm CST
        </p>

        <div className="flex items-center gap-4 md:gap-6">
          <button>FAQs</button>
          <button className="hidden md:block">Contact Us</button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0  w-[65%] max-w-[240px] bg-[#2E2787] text-white p-6 flex flex-col justify-between transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white hover:opacity-80 text-2xl focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Menu Links */}
            <div className="mt-3 flex flex-col gap-[12px] text-[15px] font-medium tracking-wide">
              <button className="text-left hover:underline">About</button>
              <button className="text-left hover:underline">
                Group Journeys
              </button>
              <button className="text-left hover:underline">
                Private Journeys
              </button>
              <button className="text-left hover:underline">
                Tailor-Made Journeys
              </button>
              <button className="text-left hover:underline">Offers</button>
              <button className="text-left hover:underline">FAQs</button>
            </div>

            {/* Main Action Button */}
            <div className="mt-8">
              <button className="rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-[#2E2787] tracking-wide shadow-sm active:scale-95 transition-transform">
                Explore All Journeys
              </button>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4 items-center">
              <Image src="/Facebook.svg" alt="Menu" width={34} height={32} />
              <Image src="/Instagram.svg" alt="Menu" width={34} height={32} />
            </div>

            <div className="mt-8 text-[13px] text-white/90 space-y-1 tracking-wide">
              <p className="text-white/70 text-[12px]">
                Talk to Our Travel Advisor
              </p>
              <p className="font-semibold">+1 773 983 8067</p>
              <p className="text-white/80">info@travelostyle.com</p>
            </div>
          </div>

          <div className="w-full pb-4 mt-auto">
            <div className="flex items-center justify-between gap-2 mt-10">
              <div className="h-[1px] bg-white/30 flex-1" />
              <span className="text-[9px] tracking-widest text-white/60 whitespace-nowrap px-1">
                ESTD. 2020
              </span>
              <div className="h-[1px] bg-white/30 flex-1" />
            </div>

            <div className="text-center py-3">
              <Image
                src="/travelostyle-logo.svg"
                alt="Menu"
                width={200}
                height={200}
              />
            </div>

            <div className="flex items-center justify-between gap-2 mt-1">
              <div className="h-[1px] bg-white/30 flex-1" />
              <span className="text-[8px] tracking-[0.25em] text-white/50 whitespace-nowrap px-1">
                JOURNEY BEYOND
              </span>
              <div className="h-[1px] bg-white/30 flex-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#F6F6F6] px-4 md:px-14 py-2">
        <div className="relative flex items-center justify-between border-b border-gray-300 pb-4">
          <button onClick={() => setMenuOpen(true)} className="block md:hidden">
            <Image src="/MenuToggle.svg" alt="Menu" width={20} height={20} />
          </button>
          <img
            src="/TravelOStyleBlack.svg"
            alt="TravelOStyle"
            className="h-auto w-[140px] md:w-[309px] md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9 text-[14px] font-medium text-[#1E1E1E]">
            <button>About</button>
            <button>Group Journeys</button>
            <button>Private Journeys</button>
            <button>Tailor-made Journeys</button>
            <button>Destinations</button>
            <button>Offers</button>
          </div>

          {/* Mobile Search */}
          <Image
            src="/Search.svg"
            alt="Search"
            width={16}
            height={16}
            className="block md:hidden"
          />
          <button
            onClick={() => {
              setShowFindJourneyMobile(true);
            }}
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

        {/* Desktop Form Only */}
        <div className="hidden md:block">
          <TravelForm />
        </div>
      </div>

      <div className="relative md:h-[700px]">
        {/* Mobile Design */}
        <div className="block md:hidden px-3 py-3 bg-[#F6F6F6]">
          <div className="relative overflow-hidden">
            <img
              src="italy.svg"
              alt="travel"
              className="h-[600px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="absolute top-16 left-5 right-5 z-10">
              <h2 className="text-white text-[24px] leading-[30px] font-bold max-w-[220px]">
                Your Next Journey Awaits
              </h2>

              <p className="mt-4 text-white text-[14px] leading-[22px] max-w-[260px]">
                We have mapped the route, sourced the stays, and scaled the
                details — all you have to do is show up.
              </p>

              <p className="mt-4 text-white text-[14px] leading-[22px] max-w-[250px]">
                Live your next story with TravelOStyle.
              </p>

              <button className="mt-5 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#2E2787]">
                View Group Journeys
              </button>
            </div>

            {/* Bottom Location */}
            <div className="absolute bottom-12 left-5 right-5 z-10 flex flex-col gap-3">
              <p className="text-[12px] text-white">Italy, Europe</p>

              <div className="h-[1px] w-full bg-white/80" />
            </div>

            {/* Bottom Arrows */}
            <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between">
              <button>
                <Image
                  src="/WhiteLeftArrow.svg"
                  alt="Previous"
                  width={34}
                  height={34}
                />
              </button>

              <button>
                <Image
                  src="/WhiteRightArrow.svg"
                  alt="Next"
                  width={34}
                  height={34}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative h-[720px]">
          <img
            src="italy.svg"
            alt="travel"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="hidden md:block relative h-[700px]">
            <img
              src="italy.svg"
              alt="travel"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div className="absolute top-[170px] left-[70px] z-10 max-w-[560px]">
              <h1 className="text-white text-[54px] font-semibold leading-[60px]">
                Experience the worlds most loved destinations; without the
                guesswork.
              </h1>

              <p className="mt-6 text-white/90 text-[14px] leading-[24px] max-w-[500px]">
                From the spice-laced alleyways of Marrakech to the art-rich
                museums of Rome—choose from the journeys that our travelers come
                home raving about.
              </p>

              <button className="mt-8 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#2E2787]">
                Explore Popular Destinations
              </button>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-[80px] left-[70px] right-[70px] z-10">
              <p className="text-white text-[14px] mb-4">Venice, Italy</p>

              <div className="h-[1px] w-full bg-white/70" />
            </div>
            <div className="absolute bottom-[40px] left-[70px] z-10 flex items-center gap-4">
              <button>
                <Image
                  src="/WhiteLeftArrow.svg"
                  alt="Previous"
                  width={42}
                  height={42}
                />
              </button>

              <button>
                <Image
                  src="/WhiteRightArrow.svg"
                  alt="Next"
                  width={42}
                  height={42}
                />
              </button>
            </div>

            <div className="absolute bottom-[-15px] right-[70px] z-10 flex flex-col items-end gap-3">
              <p className="text-[11px] text-white/70">
                Images are only for representation purposes
              </p>

              <button className="mb-5 hidden md:flex items-center justify-center h-[36px] px-5 rounded-[6px] bg-[#2E2787] text-white text-[14px] font-semibold border border-white hover:bg-[#3B33A0] transition-colors">
                Compare Trips
              </button>
            </div>
          </div>
        </div>
      </div>
      {showFindJourneyMobile && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
          <FindJourneyMobile onClose={() => setShowFindJourneyMobile(false)} />
        </div>
      )}
    </section>
  );
}
