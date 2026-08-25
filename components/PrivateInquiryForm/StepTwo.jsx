import { CUSTOMIZATION_OPTIONS } from "./constants";

export default function StepTwo({
  formData,
  toggleCustomization,
  options = CUSTOMIZATION_OPTIONS,
}) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        How would you like to customize this journey?
      </h3>
      <p className="mt-1 text-[12px] text-[#757575]">
        Choose all that applies to you
      </p>

      <div className="mt-5 flex flex-col gap-4">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-start gap-2.5"
          >
            <input
              type="checkbox"
              checked={(formData.customizations || []).includes(option)}
              onChange={() => toggleCustomization(option)}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border-gray-400 accent-[#2D3482]"
            />
            <span className="text-[13px] leading-5 text-[#1A1A1A]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
