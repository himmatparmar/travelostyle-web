"use client";

import { X, Plus } from "lucide-react";

export default function FindJourneyMobile({onClose}) {
  return (
    <div className=" max-w-[280px]  h-[580px]  bg-[#f5f5f5]  p-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[24px] font-semibold text-[#1A1A1A] leading-tight">
          Find Your Journey
        </h2>

        <button onClick={onClose}>
          <X size={22} className="text-[#333]" />
        </button>
      </div>

      <div className="space-y-4">
        {[
          "How do you want to travel?",
          "Where do you want to go?",
          "When do you want to travel?",
        ].map((item, index) => (
          <button
            key={index}
            className="w-full h-[40px] flex items-center justify-between px-3 border border-[#8B8178] bg-white rounded text-[12px] text-[#7B7B7B]"
          >
            <span>{item}</span>
            <Plus
              size={16}
              className="text-[#8B8178] flex-shrink-0"
            />
          </button>
        ))}
      </div>

      <button className="mt-6 h-[36px] px-6 bg-[#2F2E8B] text-white text-[14px] font-medium rounded-full">
        Find Journey
      </button>
    </div>
  );
}