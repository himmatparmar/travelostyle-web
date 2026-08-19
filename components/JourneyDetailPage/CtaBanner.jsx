"use client";

import { useState } from "react";
import BuildYourJourneyForm from "@/components/BuildYourJourneyForm";
import PrivateInquiryForm from "@/components/PrivateInquiryForm";

export default function CtaBanner({
  buttonText = "Craft Your Journey",
  // "build" opens the generic multi-step "Build Your Journey" form.
  // "private" opens the "Request A Private Journey" inquiry form,
  // pre-filled with the journey/departure being viewed.
  // "none" renders a plain, non-functional button (no form wired up).
  formType = "build",
  journey,
  departure,
  // Only relevant when formType === "private". false hides the departure
  // date on the journey card and swaps in a "when do you want to travel"
  // question on Step 1 instead.
  showDepartureDate = true,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="mx-4 mb-6 flex flex-col items-start gap-3 rounded-2xl bg-[#F2E5DE] px-4 py-4 sm:mx-[5.5vw] sm:mb-[3vw] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:rounded-[0.6vw] sm:px-[2.5vw] sm:py-[1.6vw]">
      <div>
        <p className="text-[15px] font-semibold text-ink sm:text-[1vw]">
          Love the itinerary, but need more?
        </p>
        <p className="mt-1 text-[13px] text-[#555] sm:mt-[0.2vw] sm:text-[0.82vw]">
          Make this journey yours!
        </p>
      </div>
      <button
        onClick={formType === "none" ? undefined : () => setIsFormOpen(true)}
        className="h-10 w-full rounded-full bg-[#2D3482] px-6 text-[13px] font-semibold text-white transition hover:bg-[#252b78] sm:h-[2.5vw] sm:w-auto sm:px-[2vw] sm:text-[0.82vw]"
      >
        {buttonText}
      </button>

      {formType === "private" && (
        <PrivateInquiryForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={(data) => console.log("Private journey inquiry submitted:", data)}
          journey={journey}
          departure={departure}
          showDepartureDate={showDepartureDate}
        />
      )}
      {formType === "build" && (
        <BuildYourJourneyForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={(data) => console.log("Journey inquiry submitted:", data)}
        />
      )}
    </div>
  );
}
