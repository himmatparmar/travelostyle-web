"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  TOTAL_STEPS,
  initialFormData,
  CUSTOMIZATION_OPTIONS,
  STOPOVER_OPTIONS,
  INSPIRATIONAL_CUSTOMIZATION_OPTIONS,
  INSPIRATIONAL_STOPOVER_OPTIONS,
  INSPIRATIONAL_TRIP_REASONS,
} from "./constants";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");
    setFormData(initialFormData);
  };

  // Submits to Drupal's webform_rest endpoint, same pattern as the
  // ContactInquiry ("contact_inquiry") form: fetch a CSRF token, basic-auth
  // with the service account, then POST the mapped field values.
  // true when the form is opened without a specific departure (the
  // generic "Inspirational Itineraries" flow) — false for the
  // departure-specific "Request A Private Journey" flow.
  const isInspirational = !showDepartureDate;

  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const csrfRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/session/token`
      );

      if (!csrfRes.ok) {
        throw new Error("Failed to fetch CSRF token");
      }

      const csrfToken = await csrfRes.text();

      const credentials = btoa(
        `${process.env.NEXT_PUBLIC_DRUPAL_USER}:${process.env.NEXT_PUBLIC_DRUPAL_PASS}`
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/webform_rest/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Basic ${credentials}`,
            "X-CSRF-Token": csrfToken,
          },
          // Same modal/component powers both the departure-specific "Request
          // A Private Journey" flow and the generic "Inspirational
          // Itineraries" flow (see the `showDepartureDate`/`label` props) —
          // each submits to a different Drupal webform with slightly
          // different field names, so the payload is branched here.
          body: JSON.stringify(
            isInspirational
              ? {
                  webform_id: "inspirational_itineraries_form",
                  journey_id: journey?.id || journeyId || "",
                  journey_departure_id: departure?.id || departureId || "",
                  journey_title: journey?.title || "",
                  // NOTE: assumed shape — Drupal only specifies this as a
                  // JSON-encoded string, not the exact keys it should
                  // contain. Adjust if the real webform expects different
                  // nested fields.
                  journey_data: JSON.stringify({
                    route: journey?.route || "",
                    base_price: journey?.offerPrice ?? journey?.basePrice ?? 0,
                  }),
                  guests: Number(formData.guests) || 0,
                  traveling_with_children: formData.travelingWithChildren,
                  flight_assistance: formData.flightAssistance,
                  travel_year: formData.travelYear,
                  travel_month: formData.travelMonth,
                  customizations: formData.customizations,
                  stopovers: formData.stopovers,
                  discuss_custom_stopovers: formData.discussCustomStopovers
                    ? 1
                    : 0,
                  trip_reason: formData.tripReason,
                  travel_info_note: formData.travelInfoNote.trim(),
                  title: formData.title,
                  first_name: formData.firstName.trim(),
                  last_name: formData.lastName.trim(),
                  country_code: formData.countryCode,
                  phone: formData.phone.trim(),
                  email_id: formData.email.trim(),
                  consent: formData.consent ? 1 : 0,
                }
              : {
                  webform_id: "private_journey_inquiry_webform",
                  journey_id: journey?.id || journeyId || "",
                  journey_departure_id: departure?.id || departureId || "",
                  first_name: formData.firstName.trim(),
                  last_name: formData.lastName.trim(),
                  title: formData.title,
                  country_code: formData.countryCode,
                  phone: formData.phone.trim(),
                  email: formData.email.trim(),
                  guests: Number(formData.guests) || 0,
                  traveling_with_children: formData.travelingWithChildren,
                  flight_assistance: formData.flightAssistance,
                  customizations: formData.customizations,
                  stopovers: formData.stopovers,
                  discuss_custom_stopovers: formData.discussCustomStopovers
                    ? 1
                    : 0,
                  trip_reason: formData.tripReason,
                  travel_month: formData.travelMonth,
                  travel_year: formData.travelYear,
                  travel_info_note: formData.travelInfoNote.trim(),
                  consent: formData.consent ? 1 : 0,
                }
          ),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Private journey inquiry submission error:", data);
        setSubmitError(data.message || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      onSubmit?.({ ...formData, journey, departure, response: data });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError("Unable to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                        options={
                          isInspirational
                            ? INSPIRATIONAL_CUSTOMIZATION_OPTIONS
                            : CUSTOMIZATION_OPTIONS
                        }
                      />
                    )}
                    {step === 3 && (
                      <StepThree
                        formData={formData}
                        toggleStopover={toggleStopover}
                        updateField={updateField}
                        options={
                          isInspirational
                            ? INSPIRATIONAL_STOPOVER_OPTIONS
                            : STOPOVER_OPTIONS
                        }
                      />
                    )}
                    {step === 4 && (
                      <StepFour
                        formData={formData}
                        updateField={updateField}
                        reasonOptions={
                          isInspirational ? INSPIRATIONAL_TRIP_REASONS : undefined
                        }
                      />
                    )}
                  </div>

                  {submitError && (
                    <p className="mt-2 text-[11.5px] font-medium text-red-600">
                      {submitError}
                    </p>
                  )}

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
                        disabled={isSubmitting}
                        className="rounded-full bg-[#2B3377] px-7 py-1.5 text-[11.5px] font-bold text-white shadow-sm transition hover:bg-[#202761] disabled:opacity-60"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
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
