"use client";

import { useState } from "react";
import BuildYourJourneyForm from "@/components/BuildYourJourneyForm";

export default function CraftJourneyButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="bg-white hover:bg-gray-100 text-[#1C355E] text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-95"
      >
        Craft Your Journey
      </button>

      {isFormOpen && (
        <BuildYourJourneyForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={(data) =>
            console.log("Journey inquiry submitted:", data)
          }
        />
      )}
    </>
  );
}