import { TRIP_REASONS } from "./constants";
import { RadioPill } from "./FormControls";

export default function StepTwo({ formData, updateField }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Why are you taking this trip?
      </h3>

      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
        {TRIP_REASONS.map((reason) => (
          <RadioPill
            key={reason}
            name="tripReason"
            value={reason}
            label={reason}
            checked={formData.tripReason === reason}
            onChange={(e) => updateField("tripReason", e.target.value)}
          />
        ))}
      </div>

      <div className="mt-8">
        <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
          What&apos;s something you would like our expert to know?
        </label>

        <textarea
          rows={4}
          value={formData.expertNote}
          onChange={(e) => updateField("expertNote", e.target.value)}
          placeholder="Do you have questions? Quirks? Preferences? or special considerations that you would like us to keep in mind? Tell us everything! The more we know, the better we can help."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#2D3482]"
        />
      </div>
    </div>
  );
}
