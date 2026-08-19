import { BUDGET_RANGES } from "./constants";

export default function StepThree({ formData, updateField }) {
  const renderRadioOption = (name, value, label, isSelected) => (
    <label
      key={value}
      className="inline-flex items-center gap-2.5 cursor-pointer select-none group"
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={isSelected}
        onChange={(e) => updateField(name, e.target.value)}
        className="sr-only"
      />
      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#1A1A1A] bg-transparent">
        {isSelected && (
          <span className="h-[8px] w-[8px] rounded-full bg-[#1A1A1A]" />
        )}
      </span>
      <span className="text-[13.5px] sm:text-[12px] font-[400] leading-tight tracking-[0.03em] text-[#1A1A1A] group-hover:text-[#000000]">
        {label}
      </span>
    </label>
  );

  return (
    <div className="flex flex-col">
      <h3 className="text-[18px] font-[600] leading-[21px] tracking-[0.05em] text-[#1A1A1A]">
        Let&apos;s make it a reality!
      </h3>

      <div className="mt-8 grid grid-cols-1 gap-x-14 gap-y-9 sm:grid-cols-2">
        
      
        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            What&apos;s your budget for the trip? (/person)
          </label>
          <input
            type="text"
            value={formData.budgetAmount || ""}
            onChange={(e) => updateField("budgetAmount", e.target.value)}
            placeholder="Specify Budget Amount in USD."
            className="mt-3 w-full border-b border-[#1A1A1A] bg-transparent pb-1.5 text-[13px] sm:text-[14px] tracking-[0.03em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
          />

          <p className="mt-4 mb-2.5 text-[12px] sm:text-[13px] font-[500] tracking-[0.03em] text-[#1A1A1A]">
            <span className="font-bold">OR</span> select a range
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
            {BUDGET_RANGES.map((range) =>
              renderRadioOption(
                "budgetRange",
                range,
                range,
                formData.budgetRange === range
              )
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            Does this budget include flight tickets?
          </label>
          <div className="mt-4 flex items-center gap-6">
            {["Yes", "No"].map((option) =>
              renderRadioOption(
                "includesFlights",
                option,
                option,
                formData.includesFlights === option
              )
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            Do you require assistance with flight bookings?
          </label>
          <div className="mt-4 flex items-center gap-6">
            {["Yes", "No"].map((option) =>
              renderRadioOption(
                "flightAssistance",
                option,
                option,
                formData.flightAssistance === option
              )
            )}
          </div>
        </div>

   
        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            What feels right?
          </label>
          <div className="mt-4 flex flex-col gap-y-3 sm:flex-row sm:items-start sm:gap-x-6">
            <div className="sm:max-w-[210px]">
              {renderRadioOption(
                "budgetPreference",
                "best-within-budget",
                "I want to experience the best I can within my budget",
                formData.budgetPreference === "best-within-budget"
              )}
            </div>
            <div className="sm:max-w-[230px]">
              {renderRadioOption(
                "budgetPreference",
                "open-to-increase",
                "I am open to increasing my budget for the right set of experiences",
                formData.budgetPreference === "open-to-increase"
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}