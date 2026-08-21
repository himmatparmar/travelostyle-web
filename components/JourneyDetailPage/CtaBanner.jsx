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
  // "card" is the standalone boxed CTA used on the mobile journey menu:
  // fixed-width bordered panel with centred copy stacked above the button.
  // Default keeps the inline banner used inside the tab content.
  variant = "banner",
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (variant === "card") {
    return (
      <div className="mx-auto flex h-[216px] w-[336px] max-w-full flex-col items-center justify-center gap-5 rounded-[5px] border-2 border-[#1A1A1A] bg-[#F2E2DA] px-6">
        <p className="text-center text-[16px] font-bold leading-[24px] text-ink">
          Love the itinerary, but need something different? Make this journey
          yours!
        </p>

        <button
          onClick={formType === "none" ? undefined : () => setIsFormOpen(true)}
          className="h-10 rounded-full bg-[#2D3482] px-6 text-[15px] font-bold text-white transition hover:bg-[#252b78] active:scale-95"
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
            label="Inspirational Itineraries Form"
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
          label="Inspirational Itineraries Form"
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
