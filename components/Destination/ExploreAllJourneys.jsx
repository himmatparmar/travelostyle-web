"use client";

import React from "react";
import Image from "next/image";
import img from "./img.png";

export default function ExploreAllJourneys() {
  return (
    <section className="w-full border-t border-[#D9D9D9] bg-white">
      <div className="max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-[50%_50%]">
  {/* LEFT SIDE */}
<div className="flex items-center justify-center px-6 py-10 lg:min-h-[888px] lg:px-10">
     <div className="w-full max-w-[776px]">

              {/* Heading */}
  {/* Desktop Heading */}
<h2 className="hidden lg:block font-[Taprom] text-[54px] leading-[1.2] text-ink">
  <span className="block w-fit bg-[#F1E7E2] mb-4">
    There’s a version of the
  </span>

  <span className="block w-fit bg-[#F1E7E2] mb-4">
    world out there with your
  </span>

  <span className="block w-fit bg-[#F1E7E2]">
    name on it
  </span>
</h2>

{/* Mobile Heading */}
<h2 className="block lg:hidden font-[Taprom] text-[40px] leading-[48px] tracking-[0.05em] text-ink text-center">
  <span className="block w-fit mx-auto bg-[#F2E2DA]  mb-[15px]">
    There’s a version of
  </span>

  <span className="block w-fit mx-auto bg-[#F2E2DA] mb-[15px]">
    the world out there
  </span>

  <span className="block w-fit mx-auto bg-[#F2E2DA]  mb-[15px]">
    that has your name
  </span>

  <span className="block w-fit mx-auto bg-[#F2E2DA]">
    on it.
  </span>
</h2>

              {/* Paragraph */}
            <p className="hidden lg:block mt-[56px] max-w-[573px] font-normal text-[17px] leading-[32px] tracking-[0.05em] text-ink">
                TravelOStyle plans journeys across regions, travel styles,and
               budget points – from the sun-scorched temples of Rajasthan
                to the drama of Patagonia. If you’re drawn towards it, it’s a
                journey worth taking.
              </p>

              {/* Button */}
<button className="hidden lg:flex mt-[48px] w-[240px] h-[56px] rounded-full bg-[#2C3078] items-center justify-center">                <span className="font-semibold text-[18px] leading-[32px] tracking-[0.05em] text-[#FAFAFA]">
                  Explore All Journeys
                </span>
              </button>

            </div>
          </div>

     {/* RIGHT */}
          <div className="relative">
            <Image
              src={img}
              alt="Barcelona Spain"
              width={948}
              height={888}
              className="w-full h-[390px] lg:h-[888px] object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-[38px] left-[26px] z-10 lg:bottom-8 lg:left-8">
              <p className="text-[#FAFAFA] text-[18px] font-semibold leading-[28px] tracking-[0.05em]">
                Barcelona, Spain
              </p>
            </div>
         
          </div>
   <div className="flex md:justify-center ml-7 md:ml-0 mt-5 md:mt-8 lg:hidden">
  <button className="h-[37px] w-[224px] px-4 rounded-full bg-[#2C3078] flex items-center justify-center">
    <span className="font-semibold text-[18px] leading-[32px] tracking-[0.05em] text-[#FAFAFA] whitespace-nowrap">
      Explore All Journeys
    </span>
  </button>
</div>
        </div>
      </div>
    </section>
  );
}