import { TAILOR_TOPICS } from "./constants";
import { CheckboxPill } from "./FormControls";

export default function StepTailor({ formData, toggleTailorTopic }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Let&apos;s tailor the trip to you. What would you like to talk about?
      </h3>
      <p className="mt-1 text-[12px] text-gray-500">
        Choose all that applies to you
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {TAILOR_TOPICS.map((topic) => (
          <CheckboxPill
            key={topic}
            label={topic}
            checked={formData.tailorTopics.includes(topic)}
            onChange={() => toggleTailorTopic(topic)}
          />
        ))}
      </div>
    </div>
  );
}
