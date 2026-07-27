"use client";

import React from "react";
import Image from "next/image";
import img from "./img.png";

export default function ExploreAllJourneys() {
  return (
<section className="w-full border-t border-[#D9D9D9]">
  <div className="max-w-[1920px] mx-auto">
<div className="grid lg:grid-cols-[45%_55%] items-center gap-12 px-10 lg:px-20">
<div className="max-w-[776px]">  {/* Heading */}
  <div className="w-[776px]">
    <div className="font-[Taprom] font-normal text-[64px] leading-[80px] tracking-[0.05em] text-[#1A1A1A]">
      <div className="mb-1">
        <span className="bg-[#F1E7E2] px-2">
          There’s a version of the
        </span>
      </div>

      <div className="mb-1">
        <span className="bg-[#F1E7E2] px-2">
          world out there with your
        </span>
      </div>

      <div>
        <span className="bg-[#F1E7E2] px-2">
          name on it
        </span>
      </div>
    </div>
  </div>

  {/* Paragraph */}
  <p className="mt-[56px] w-[573px] font-[Nohemi] font-normal text-[18px] leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
    TravelOStyle plans journeys across regions, travel styles, and
    budget points – from the sun-scorched temples of Rajasthan to the
    drama of Patagonia. If you’re drawn towards it, it’s a journey
    worth taking.
  </p>

  {/* Button */}
  <button className="mt-[48px] w-[240px] h-[56px] rounded-[100px] px-6 bg-[#2C3078] flex items-center justify-center">
    <span className="font-[Nohemi] font-semibold text-[18px] leading-[32px] tracking-[0.05em] text-[#FAFAFA]">
      Explore All Journeys
    </span>
  </button>
</div>
 <div className="relative">
 <Image
  src={img}
  alt="Barcelona Spain"
  width={948}
  height={888}
  className="w-full max-w-[948px] h-auto object-cover"
/>

  <div className="absolute inset-0 bg-black/20" />

  <div className="absolute bottom-8 left-8 z-10">
    <p className="font-[Nohemi] text-white text-[18px] font-medium">
      Barcelona, Spain
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}