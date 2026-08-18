import { Search } from "lucide-react";
import { EXPERIENCES } from "./constants";
import { CheckboxPill } from "./FormControls";

export default function StepOne({ formData, updateField, toggleExperience }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        What about the world are you ready to explore?
      </h3>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-[280px]">
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Where do you want to go?
          </label>

          <div className="flex items-center gap-2 border-b border-gray-400 pb-2">
            <Search size={15} className="shrink-0 text-gray-500" />
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => updateField("destination", e.target.value)}
              placeholder="Search your destination"
              className="w-full bg-transparent text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <p className="max-w-[280px] text-[12px] leading-5 text-gray-500">
          Simply select a place you like, if there&apos;s a better option out
          there, we&apos;ll recommend it to you.
        </p>
      </div>

      <div className="mt-8">
        <label className="mb-4 block text-[13px] font-medium text-[#1A1A1A]">
          What kind of experiences are you looking for?
        </label>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {EXPERIENCES.map((experience) => (
            <CheckboxPill
              key={experience}
              label={experience}
              checked={formData.experiences.includes(experience)}
              onChange={() => toggleExperience(experience)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
