import { TRIP_REASONS } from "./constants";

export default function StepFour({ formData, updateField }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Travel Information
      </h3>
      <p className="mt-1 text-[12px] text-gray-500">
        This helps us recommend experiences, sights and activities that align
        with your ideal trip
      </p>

      <div className="mt-5">
        <p className="mb-3 text-[13px] font-medium text-[#1A1A1A]">
          Why are you taking this trip?
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {TRIP_REASONS.map((reason) => (
            <label
              key={reason}
              className="flex cursor-pointer items-center gap-1.5"
            >
              <input
                type="radio"
                name="tripReason"
                value={reason}
                checked={formData.tripReason === reason}
                onChange={(e) => updateField("tripReason", e.target.value)}
                className="h-3.5 w-3.5 cursor-pointer accent-[#2D3482]"
              />
              <span className="text-[13px] text-[#1A1A1A]">{reason}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
          What&apos;s something you would like our travel advisor to know?
        </label>
        <textarea
          rows={4}
          value={formData.travelInfoNote}
          onChange={(e) => updateField("travelInfoNote", e.target.value)}
          placeholder="Do you have questions? Quirks? Preferences? or special considerations that you would like us to keep in mind? Tell us everything! The more we know, the better we can help."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#2D3482]"
        />
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-2.5">
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => updateField("consent", e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border-gray-400 accent-[#2D3482]"
        />
        <span className="text-[13px] text-[#1A1A1A]">
          I agree to be contacted by TravelOStyle regarding my inquiry.
        </span>
      </label>
    </div>
  );
}
