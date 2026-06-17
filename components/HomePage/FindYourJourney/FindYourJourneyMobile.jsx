"use client";

import { useState } from "react";
import { X, Plus } from "lucide-react";
import TravelTypeMobile from "./TravelTypeMobile";
import DestinationMobile from "./DestinationMobile";
import TravelDateMobile from "./TravelDateMobile";

export default function FindJourneyMobile({ onClose }) {
  const [step, setStep] = useState(0);
  const [selectedJourney, setSelectedJourney] = useState([]);

  if (step === 1) {
    return (
      <TravelTypeMobile
        onClose={() => setStep(0)}
        onNext={() => setStep(2)}
        selectedJourney={selectedJourney}
        setSelectedJourney={setSelectedJourney}
      />
    );
  }

  if (step === 2) {
    return (
      <DestinationMobile
        onClose={() => setStep(0)}
        onNext={() => setStep(3)}
      />
    );
  }

  if (step === 3) {
    return (
      <TravelDateMobile
        onClose={() => setStep(0)}
      />
    );
  }

  return (
    <div className="max-w-[290px] h-[580px] bg-[#f5f5f5] p-5">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-[24px] font-semibold text-[#1A1A1A] leading-tight">
          Find Your Journey
        </h2>

        <button onClick={onClose}>
          <X size={22} className="text-[#333]" />
        </button>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setStep(1)}
          className="w-full h-[40px] flex items-center justify-between px-3 border border-[#8B8178] bg-white rounded text-[12px] text-[#7B7B7B]"
        >
          <span>{selectedJourney.length>0?selectedJourney:'How do you want to travel?'}</span>
          <Plus size={16} className="text-[#8B8178]" />
        </button>

        <button
          onClick={() => setStep(2)}
          className="w-full h-[40px] flex items-center justify-between px-3 border border-[#8B8178] bg-white rounded text-[12px] text-[#7B7B7B]"
        >
          <span>Where do you want to go?</span>
          <Plus size={16} className="text-[#8B8178]" />
        </button>

        <button
          onClick={() => setStep(3)}
          className="w-full h-[40px] flex items-center justify-between px-3 border border-[#8B8178] bg-white rounded text-[12px] text-[#7B7B7B]"
        >
          <span>When do you want to travel?</span>
          <Plus size={16} className="text-[#8B8178]" />
        </button>
      </div>

      <button className="mt-6 h-[36px] px-6 bg-[#2F2E8B] text-white text-[14px] font-medium rounded-full">
        Find Journey
      </button>
    </div>
  );
}