import { BUDGET_RANGES } from "./constants";
import { RadioPill } from "./FormControls";

export default function StepThree({ formData, updateField }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Let&apos;s make it a reality!
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            What&apos;s your budget for the trip? (/person)
          </label>
          <input
            type="text"
            value={formData.budgetAmount}
            onChange={(e) => updateField("budgetAmount", e.target.value)}
            placeholder="Specify Budget Amount in USD."
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />

          <p className="mt-5 mb-2 text-[13px] text-gray-500">OR select a range</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {BUDGET_RANGES.map((range) => (
              <RadioPill
                key={range}
                name="budgetRange"
                value={range}
                label={range}
                checked={formData.budgetRange === range}
                onChange={(e) => updateField("budgetRange", e.target.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Does this budget include flight tickets?
          </label>
          <div className="flex gap-6">
            {["Yes", "No"].map((option) => (
              <RadioPill
                key={option}
                name="includesFlights"
                value={option}
                label={option}
                checked={formData.includesFlights === option}
                onChange={(e) => updateField("includesFlights", e.target.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Do you require assistance with flight bookings?
          </label>
          <div className="flex gap-6">
            {["Yes", "No"].map((option) => (
              <RadioPill
                key={option}
                name="flightAssistance"
                value={option}
                label={option}
                checked={formData.flightAssistance === option}
                onChange={(e) => updateField("flightAssistance", e.target.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            What feels right?
          </label>
          <div className="flex flex-col gap-3">
            <RadioPill
              name="budgetPreference"
              value="best-within-budget"
              label="I want to experience the best I can within my budget"
              checked={formData.budgetPreference === "best-within-budget"}
              onChange={(e) => updateField("budgetPreference", e.target.value)}
            />
            <RadioPill
              name="budgetPreference"
              value="open-to-increase"
              label="I am open to increasing my budget for the right set of experiences"
              checked={formData.budgetPreference === "open-to-increase"}
              onChange={(e) => updateField("budgetPreference", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
