"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { STEPS, initialFormData } from "./constants";
import StepOne from "./StepOne";
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

  const toggleExperience = (value) =>
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.includes(value)
        ? prev.experiences.filter((item) => item !== value)
        : [...prev.experiences, value],
    }));

  const goNext = () => setStep((prev) => Math.min(prev + 1, STEPS.length));
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-[820px] overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 sm:px-8">
          <h2 className="text-lg font-semibold text-[#1A1A1A] sm:text-xl">
            Build Your Journey With Us
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

        <div className="px-6 pt-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-y-3 rounded-xl bg-[#F2E5DE] px-4 py-3 sm:flex-nowrap sm:justify-between">
            {STEPS.map((s, index) => (
              <div key={s.id} className="flex items-center">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                      step === s.id
                        ? "bg-[#2D3482] text-white"
                        : "border border-[#2D3482]/40 bg-white text-[#2D3482]"
                    }`}
                  >
                    {s.id}
                  </span>
                  <span className="hidden max-w-[135px] text-[11px] leading-tight text-[#4A4A4A] md:block">
                    {s.label}
                  </span>
                </div>

                {index < STEPS.length - 1 && (
                  <span className="mx-3 hidden text-[#B9A79A] sm:inline">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={step === STEPS.length ? handleSubmit : (e) => e.preventDefault()}
          className="px-6 py-6 sm:px-8"
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
                <StepTwo formData={formData} updateField={updateField} />
              )}
              {step === 3 && (
                <StepThree formData={formData} updateField={updateField} />
              )}
              {step === 4 && (
                <StepFour formData={formData} updateField={updateField} />
              )}

              <div className="mt-8 flex items-center gap-5">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="text-sm font-medium text-gray-500 transition hover:text-gray-800"
                  >
                    Previous
                  </button>
                )}

                {step < STEPS.length ? (
                  <button
                    key="nav-next"
                    type="button"
                    onClick={goNext}
                    className="rounded-full bg-[#2D3482] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78]"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    key="nav-submit"
                    type="submit"
                    className="rounded-full bg-[#2D3482] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78]"
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
