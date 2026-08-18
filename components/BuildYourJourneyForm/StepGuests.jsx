import { DURATION_OPTIONS } from "./constants";
import { CheckboxPill, NumberStepper } from "./FormControls";

export default function StepGuests({ formData, updateGuests, toggleDuration }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Who&apos;s joining in on the fun?
      </h3>

      <div className="mt-6">
        <label className="mb-3 block text-[13px] font-medium text-[#1A1A1A]">
          No.of Guests
        </label>
        <div className="flex flex-wrap items-center gap-6">
          <NumberStepper
            label="Adults"
            value={formData.guests.adults}
            onChange={(value) => updateGuests("adults", value)}
          />
          <NumberStepper
            label="Children"
            value={formData.guests.children}
            onChange={(value) => updateGuests("children", value)}
          />
        </div>
      </div>

      <div className="mt-8">
        <label className="mb-4 block text-[13px] font-medium text-[#1A1A1A]">
          For how long do you want to travel?
        </label>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {DURATION_OPTIONS.map((option) => (
            <CheckboxPill
              key={option}
              label={option}
              checked={formData.duration.includes(option)}
              onChange={() => toggleDuration(option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
