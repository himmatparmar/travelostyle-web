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
  // false when there's no specific departure to attach (e.g. the generic
  // "Request A Private Journey" CTA on a journey page, or an "Explore All
  // ... Journeys" CTA not tied to one trip). In that case the card hides
  // the departure-date block and Step 1 asks "when do you want to travel"
  // instead.
  showDepartureDate = true,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="flex max-h-[90vh] w-full max-w-[860px] flex-col rounded-2xl border border-gray-200 bg-white shadow-xl">
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-6 py-4 sm:px-8">
          <h2 className="text-md font-semibold text-[#1A1A1A] sm:text-xl">
            Inquire With Us
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="text-gray-400 transition hover:text-gray-700"
          >
            <X size={22} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-8 sm:flex-row">
              <div className="w-full sm:sticky sm:top-0 sm:w-auto">
                <JourneySummaryCard
                  journey={journey}
                  departure={departure}
                  showDepartureDate={showDepartureDate}
                />
              </div>
              <div className="flex-1">
                <SuccessStep onExplore={handleClose} />
              </div>
            </div>
          ) : (
            <form
              onSubmit={
                step === TOTAL_STEPS ? handleSubmit : (e) => e.preventDefault()
              }
              className="flex flex-col items-start gap-8 sm:flex-row"
            >
              <div className="w-full sm:sticky sm:top-0 sm:w-auto">
                <JourneySummaryCard
                  journey={journey}
                  departure={departure}
                  showDepartureDate={showDepartureDate}
                />
              </div>

              <div className="w-full flex-1">
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

                <div className="mt-8 flex items-center justify-end gap-5">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={goPrevious}
                      className="text-sm font-medium text-gray-500 transition hover:text-gray-800"
                    >
                      Previous
                    </button>
                  )}

                  {step < TOTAL_STEPS ? (
                    <button
                      key="nav-next"
                      type="button"
                      onClick={goNext}
                      className="rounded-full bg-[#2D3482] px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78]"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      key="nav-submit"
                      type="submit"
                      className="rounded-full bg-[#2D3482] px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78]"
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
  );
}
