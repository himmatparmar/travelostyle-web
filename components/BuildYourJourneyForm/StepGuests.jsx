import { DURATION_OPTIONS } from "./constants";

function NumberStepper({ label, value, onChange, min = 0 }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 text-[14px] font-[400] tracking-[0.03em] text-[#1A1A1A]">
        {label}
      </span>
      <div className="flex items-center rounded-[6px] border border-[#2C3078] bg-white overflow-hidden shadow-sm">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-[28px] w-[28px] items-center justify-center bg-[#2C3078] text-[16px] font-semibold text-white transition hover:opacity-90 cursor-pointer"
        >
          -
        </button>
        <span className="flex h-[28px] w-[32px] items-center justify-center text-[14px] font-[500] text-[#1A1A1A]">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-[28px] w-[28px] items-center justify-center bg-[#2C3078] text-[16px] font-semibold text-white transition hover:opacity-90 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default function StepGuests({ formData, updateGuests, toggleDuration }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-[18px] font-[600] leading-[21px] tracking-[0.05em] text-[#1A1A1A]">
        Who&apos;s joining in on the fun?
      </h3>

      <div className="mt-8">
        <label className="block text-[16px] font-[500] leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
          No.of Guests
        </label>
        
        <div className="mt-2 flex flex-wrap items-center gap-8 sm:gap-10">
          <NumberStepper
            label="Adults"
            value={formData.guests?.adults ?? 0}
            onChange={(val) => updateGuests("adults", val)}
          />
          <NumberStepper
            label="Children"
            value={formData.guests?.children ?? 0}
            onChange={(val) => updateGuests("children", val)}
          />
        </div>
      </div>

      <div className="mt-8">
        <label className="block text-[16px] font-[500] leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
          For how long do you want to travel?
        </label>

        <div className="mt-3.5 flex flex-col gap-y-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          {DURATION_OPTIONS.map((option) => {
            const isChecked = formData.duration?.includes(option);
            return (
              <label
                key={option}
                className="inline-flex items-center gap-2.5 cursor-pointer select-none group"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleDuration(option)}
                  className="h-[18px] w-[18px] shrink-0 rounded-[4px] border-[1.5px] border-[#1A1A1A] accent-[#2C3078] cursor-pointer"
                />
                <span className="text-[14px] font-[400] leading-[21px] tracking-[0.05em] text-[#1A1A1A] group-hover:text-[#000000] whitespace-nowrap">
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}