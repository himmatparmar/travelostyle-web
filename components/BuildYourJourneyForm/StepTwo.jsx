import { TRIP_REASONS } from "./constants";

export default function StepTwo({ formData, updateField }) {
  const renderRadio = (reason, keyId) => {
    const isSelected = formData.tripReason === reason;
    return (
      <label
        key={`${reason}-${keyId}`}
        className="inline-flex items-center gap-2.5 cursor-pointer select-none group"
      >
        <input
          type="radio"
          name="tripReason"
          value={reason}
          checked={isSelected}
          onChange={(e) => updateField("tripReason", e.target.value)}
          className="sr-only"
        />

        {/* Custom Figma-Style Circular Radio Button */}
        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#1A1A1A] bg-transparent">
          {isSelected && (
            <span className="h-[8px] w-[8px] rounded-full bg-[#1A1A1A]" />
          )}
        </span>

        <span className="text-[14px] font-[400] leading-[21px] tracking-[0.03em] text-[#1A1A1A] group-hover:text-[#000000] whitespace-nowrap">
          {reason}
        </span>
      </label>
    );
  };

  return (
    <div className="flex flex-col">
      {/* Step Heading */}
      <h3 className="text-[18px] font-[600] leading-[21px] tracking-[0.05em] text-[#1A1A1A]">
        Why are you taking this trip?
      </h3>

     
      <div className="mt-8 flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
          {TRIP_REASONS.map((reason, idx) => renderRadio(reason, `r-${idx}`))}
        </div>
      </div>
      <div className="mt-6 sm:mt-9">
        <label className="block text-[14px] sm:text-[16px] font-[600] leading-[20px] sm:leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
          What&apos;s something you would like our expert to know?
        </label>

        <textarea
          rows={6}
          value={formData.expertNote || ""}
          onChange={(e) => updateField("expertNote", e.target.value)}
          placeholder="Do you have questions? Quirks? Preferences? or special considerations that you would like us to keep in mind?&#10;Tell us everything! The more we know, the better we can help."
          className="mt-2.5 w-full max-w-[780px] resize-none rounded-[6px] border border-[#1A1A1A] bg-transparent p-4 text-[13px] sm:text-[14px] leading-[22px] tracking-[0.02em] sm:tracking-[0.03em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
        />
      </div>
    </div>
  );
}
