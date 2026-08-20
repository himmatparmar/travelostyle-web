"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { TOTAL_STEPS, initialFormData } from "./constants";
import JourneySummaryCard from "./JourneySummaryCard";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import SuccessStep from "./SuccessStep";

// Multi-step "Request A Private Journey" inquiry form:
// Step 1 - Guest Details
// Step 2 - How would you like to customize this journey?
// Step 3 - Stopover journeys
// Step 4 - Travel information + submit
export default function PrivateInquiryForm({
  isOpen,
  onClose,
  onSubmit,
  journey,
  departure,
  journeyId,
  departureId,
  // false when there's no specific departure to attach (e.g. the generic
  // "Request A Private Journey" CTA on a journey page, or an "Explore All
  // ... Journeys" CTA not tied to one trip). In that case the card hides
  // the departure-date block and Step 1 asks "when do you want to travel"
  // instead.
  showDepartureDate = true,
  // Optional small label rendered above the modal (e.g. "Inspirational
  // Itineraries Form" for the generic CTA, matching the "Group Trip
  // Inquiry" label above the Group form). Omitted entirely when not set,
  // so existing triggers (e.g. the Dates & Pricing sold-out flow) keep
  // their current label-less look.
  label,
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  if (!isOpen) return null;

  const updateField = (name, value) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const toggleArrayValue = (field, value) =>
    setFormData((prev) => {
      // Defensive fallback: if `prev[field]` is missing (e.g. state was
      // created before this field existed in initialFormData, and a dev
      // Fast Refresh kept the stale value around), treat it as empty
      // instead of crashing on `.includes`.
      const current = Array.isArray(prev[field]) ? prev[field] : [];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });

  const toggleCustomization = (value) =>
    toggleArrayValue("customizations", value);
  const toggleStopover = (value) => toggleArrayValue("stopovers", value);

  const goNext = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const goPrevious = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleClose = () => {
    onClose?.();
    setStep(1);
    setSubmitted(false);
    setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ ...formData, journey, departure });
    setSubmitted(true);
  };
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 font-sans backdrop-blur-[0.5px]">
      <div className="w-full max-w-[1000px]">
        {label && (
          <p className="mb-2 flex items-center gap-1.5 pl-1 text-[13px] font-medium text-[#7C3AED]">
            <span aria-hidden="true">&#10070;</span> {label}
          </p>
        )}
        {/* Modal Outer Box */}
        <div className=" relative flex max-h-[92vh] w-full flex-col rounded-xl border border-[#3A3A3A] bg-[#fafafa] shadow-2xl">
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-[#3A3A3A] px-4 py-4 ">
            <h2 className="text-[15px] font-bold text-[#1A1A1A]">
              Inquire With Us
            </h2>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="text-[#3A3A3A] transition hover:text-black"
            >
              <X size={18} strokeWidth={1.75} />
            </button>
          </div>

          <div className="overflow-y-auto px-6 py-5">
            {submitted ? (
              <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
                <div className="w-full shrink-0 md:w-[210px]">
                  <JourneySummaryCard
                    journey={journey}
                    departure={departure}
                    showDepartureDate={showDepartureDate}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center">
                  <SuccessStep onExplore={handleClose} />
                </div>
              </div>
            ) : (
              <form
                onSubmit={
                  step === TOTAL_STEPS
                    ? handleSubmit
                    : (e) => e.preventDefault()
                }
                className="flex flex-col items-start gap-6 md:flex-row"
              >
                {/* Left Column: Summary Card */}
                <div className="w-full shrink-0 md:w-[215px]">
                  <JourneySummaryCard
                    journey={journey}
                    departure={departure}
                    showDepartureDate={showDepartureDate}
                  />
                </div>

                {/* Right Column: Steps */}
                <div className="flex w-full flex-1 flex-col justify-between self-stretch">
                  <div>
                    {step === 1 && (
                      <StepOne
                        formData={formData}
                        updateField={updateField}
                        showTravelWindow={!showDepartureDate}
                      />
                    )}
                    {step === 2 && (
                      <StepTwo
                        formData={formData}
                        toggleCustomization={toggleCustomization}
                      />
                    )}
                    {step === 3 && (
                      <StepThree
                        formData={formData}
                        toggleStopover={toggleStopover}
                        updateField={updateField}
                      />
                    )}
                    {step === 4 && (
                      <StepFour formData={formData} updateField={updateField} />
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="mt-2 flex items-center justify-end gap-4">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={goPrevious}
                        className="text-[11.5px] font-semibold text-[#6A6A6A] transition hover:text-black"
                      >
                        Previous
                      </button>
                    )}

                    {step < TOTAL_STEPS ? (
                      <button
                        key="nav-next"
                        type="button"
                        onClick={goNext}
                        className="rounded-full bg-[#2B3377] px-7 py-1.5 text-[11.5px] font-bold text-white shadow-sm transition hover:bg-[#202761]"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        key="nav-submit"
                        type="submit"
                        className="rounded-full bg-[#2B3377] px-7 py-1.5 text-[11.5px] font-bold text-white shadow-sm transition hover:bg-[#202761]"
                      >
                        Submit Inquiry
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
