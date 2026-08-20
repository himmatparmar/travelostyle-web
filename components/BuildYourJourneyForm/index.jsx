"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { STEPS, TOTAL_STEPS, initialFormData } from "./constants";
import StepOne from "./StepOne";
import StepGuests from "./StepGuests";
import StepTailor from "./StepTailor";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import SuccessStep from "./SuccessStep";

export default function BuildYourJourneyForm({ isOpen, onClose, onSubmit }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  if (!isOpen) return null;

  const updateField = (name, value) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const toggleArrayValue = (field, value) =>
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));

  const toggleExperience = (value) => toggleArrayValue("experiences", value);
  const toggleDuration = (value) => toggleArrayValue("duration", value);
  const toggleTailorTopic = (value) => toggleArrayValue("tailorTopics", value);

  const updateGuests = (key, value) =>
    setFormData((prev) => ({
      ...prev,
      guests: { ...prev.guests, [key]: value },
    }));

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
    onSubmit?.(formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-6 overflow-y-auto antialiased">
      <div className="relative my-auto w-full max-w-[1200px] flex flex-col rounded-[10px] border-2 border-[#1A1A1A] bg-[#FAFAFA] shadow-[5px_10px_24px_rgba(26,26,26,0.1)] overflow-hidden">
       
        <div className="relative flex shrink-0 items-center justify-between px-6 sm:px-[60px] pt-[26px] pb-2">
          <h2 className="text-[18px] sm:text-[21px] font-[500] leading-[35px] tracking-[0.05em] text-[#1A1A1A]">
            Build Your Journey With Us
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="absolute right-6 sm:right-[36px] top-6 sm:top-[26px] flex items-center justify-center cursor-pointer text-[#1A1A1A] transition-opacity hover:opacity-60 focus:outline-none"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className=" px-6 sm:px-[60px] pt-2 pb-[24px] border-b-2 border-[#1A1A1A]">
          <div className="flex items-center justify-between rounded-[8px] bg-[#F2E5DE] px-6 sm:px-6 py-3.5 gap-2">
            {STEPS.map((s, index) => (
              <div key={s.id} className="flex items-center gap-3 sm:gap-4 flex-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-[18px] sm:text-[20px] font-[600] leading-none text-[#000000]">
                    {s.id}
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-[400] leading-[16px] sm:leading-[18px] tracking-[0.03em] text-[#000000] max-w-[180px]">
                    {s.label}
                  </span>
                </div>

                {index < STEPS.length - 1 && (
                  <span className="mx-auto text-[22px] font-[600] font-light text-[#000000]/60 select-none">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={step === TOTAL_STEPS ? handleSubmit : (e) => e.preventDefault()}
          className="px-6 sm:px-[60px] py-7"
        >
          {submitted ? (
            <SuccessStep onExplore={handleClose} />
          ) : (
            <>
              {step === 1 && (
                <StepOne
                  formData={formData}
                  updateField={updateField}
                  toggleExperience={toggleExperience}
                />
              )}
              {step === 2 && (
                <StepGuests
                  formData={formData}
                  updateGuests={updateGuests}
                  toggleDuration={toggleDuration}
                />
              )}
              {step === 3 && (
                <StepTailor
                  formData={formData}
                  toggleTailorTopic={toggleTailorTopic}
                />
              )}
              {step === 4 && (
                <StepTwo formData={formData} updateField={updateField} />
              )}
              {step === 5 && (
                <StepThree formData={formData} updateField={updateField} />
              )}
              {step === 6 && (
                <StepFour formData={formData} updateField={updateField} />
              )}

              <div className="mt-8 flex items-center gap-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="h-[37px]  text-[15px] font-medium text-[#555555] transition hover:text-[#000000] cursor-pointer"
                  >
                    Previous
                  </button>
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    key="nav-next"
                    type="button"
                    onClick={goNext}
                    className="flex h-[37px] w-[130px] items-center justify-center rounded-[30px] bg-[#2C3078] text-[15px] font-semibold tracking-[0.05em] text-[#FAFAFA] transition hover:opacity-90 cursor-pointer shadow-sm"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    key="nav-submit"
                    type="submit"
                    className="flex h-[37px] px-8 items-center justify-center rounded-[30px] bg-[#2C3078] text-[15px] font-semibold tracking-[0.05em] text-[#FAFAFA] transition hover:opacity-90 cursor-pointer shadow-sm"
                  >
                    Submit Inquiry
                  </button>
                )}
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}