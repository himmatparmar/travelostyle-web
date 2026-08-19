import { Search } from "lucide-react";
const ROW_1 = [
  "Adventure",
  "Nature & Wildlife",
  "Safaris",
  "Camping",
  "Culture & History",
  "Festivals",
  "Culinary (Food & Drink)",
];

const ROW_2 = [
  "Beaches",
  "Coastal",
  "City Life",
  "Luxury Escapes",
  "Family-focused",
  "Cruises",
  "Private Jet Journeys",
];

const ROW_3 = ["Rail Journeys"];

export default function StepOne({ formData, updateField, toggleExperience }) {
  const renderCheckbox = (experience) => {
    const isChecked = formData.experiences?.includes(experience);
    return (
      <label
        key={experience}
        className="inline-flex items-center gap-2 cursor-pointer select-none group"
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleExperience(experience)}
          className="h-[18px] w-[18px] shrink-0 rounded-[4px] border-[1.5px] border-[#1A1A1A] accent-[#2C3078] cursor-pointer"
        />
        <span className="text-[14px] font-[400] leading-[21px] tracking-[0.05em] text-[#1A1A1A] group-hover:text-[#000000] whitespace-nowrap">
          {experience}
        </span>
      </label>
    );
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-[18px] font-[600] leading-[21px] tracking-[0.05em] text-[#1A1A1A]">
        What about the world are you ready to explore?
      </h3>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-8">
        <div className="w-full sm:max-w-[360px]">
          <label className="block text-[16px] font-[500] leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
            Where do you want to go?
          </label>

          <div className="flex items-center gap-2 border-b-[1.5px] border-[#1A1A1A] pb-1 pt-1">
            <Search size={16} strokeWidth={1.5} className="shrink-0 text-[#757575]" />
            <input
              type="text"
              value={formData.destination || ""}
              onChange={(e) => updateField("destination", e.target.value)}
              placeholder="Search your destination"
              className="w-full bg-transparent text-[14px] leading-tight tracking-[0.05em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
            />
          </div>
        </div>

        <p className="text-[13px] font-[400] leading-[21px] tracking-[0.05em] text-[#757575] sm:pb-0.5">
          Simply select a place you like, if there&apos;s a better option out
          there, we&apos;ll recommend it to you.
        </p>
      </div>
      <div className="mt-9">
        <label className="block text-[16px] font-[500] leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
          What kind of experiences are you looking for?
        </label>

        <div className="mt-4 flex flex-col gap-y-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {ROW_1.map(renderCheckbox)}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {ROW_2.map(renderCheckbox)}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {ROW_3.map(renderCheckbox)}
          </div>
        </div>
      </div>
    </div>
  );
}