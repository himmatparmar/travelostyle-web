import { TAILOR_TOPICS } from "./constants";

export default function StepTailor({ formData, toggleTailorTopic }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-[18px] font-[600] leading-[21px] tracking-[0.05em] text-[#1A1A1A]">
        Let&apos;s tailor the trip to you. What would you like to talk about?
      </h3>
      
      <p className="mt-1 text-[13px] font-[400] leading-[21px] tracking-[0.03em] text-[#757575]">
        Choose all that applies to you
      </p>

      <div className="mt-6 flex flex-col gap-y-3.5 sm:gap-y-4">
        {TAILOR_TOPICS.map((topic) => {
          const isChecked = formData.tailorTopics?.includes(topic);
          return (
            <label
              key={topic}
              className="inline-flex items-center gap-3 cursor-pointer select-none group"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleTailorTopic(topic)}
                className="h-[18px] w-[18px] shrink-0 rounded-[4px] border-[1.5px] border-[#1A1A1A] accent-[#2C3078] cursor-pointer"
              />
              <span className="text-[14px] font-[400] leading-[21px] tracking-[0.03em] text-[#1A1A1A] group-hover:text-[#000000]">
                {topic}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}