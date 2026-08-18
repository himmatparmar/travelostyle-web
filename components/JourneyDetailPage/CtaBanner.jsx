"use client";

import { useState } from "react";
import BuildYourJourneyForm from "@/components/BuildYourJourneyForm";

export default function CtaBanner() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="mx-[5.5vw] mb-[3vw] flex items-center justify-between rounded-[0.6vw] bg-[#F2E5DE] px-[2.5vw] py-[1.6vw]">
      <div>
        <p className="text-[1vw] font-semibold text-ink">
          Love the itinerary, but need more?
        </p>
        <p className="mt-[0.2vw] text-[0.82vw] text-[#555]">
          Make this journey yours!
        </p>
      </div>
      <button
        onClick={() => setIsFormOpen(true)}
        className="h-[2.5vw] rounded-full bg-[#2D3482] px-[2vw] text-[0.82vw] font-semibold text-white transition hover:bg-[#252b78]"
      >
        Craft Your Journey
      </button>

      <BuildYourJourneyForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={(data) => console.log("Journey inquiry submitted:", data)}
      />
    </div>
  );
}
