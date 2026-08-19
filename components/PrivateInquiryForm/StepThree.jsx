import Image from "next/image";
import { STOPOVER_OPTIONS } from "./constants";

export default function StepThree({
  formData,
  toggleStopover,
  updateField,
}) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Take your journey a little further
      </h3>
      <p className="mt-1 text-[12px] text-gray-500">
        Stopover journeys are optional. Choose one if you&apos;d like to add
        another destination to your trip or simply click &apos;Next&apos; to
        complete your inquiry
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {STOPOVER_OPTIONS.map((option) => {
          const checked = (formData.stopovers || []).includes(option.id);
          return (
            <label
              key={option.id}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 transition ${
                checked
                  ? "border-[#2D3482] bg-[#F2E5DE]/40"
                  : "border-gray-200"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleStopover(option.id)}
                className="h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border-gray-400 accent-[#2D3482]"
              />

              <div className="relative h-[48px] w-[60px] shrink-0 overflow-hidden rounded-md">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-[13px] font-semibold text-[#1A1A1A]">
                  {option.title}
                </p>
                <p className="text-[11px] text-gray-500">{option.duration}</p>
                <p className="text-[10px] text-gray-400">from</p>
                <p className="text-[12px] font-semibold text-[#1A1A1A]">
                  ${option.price.toLocaleString()}
                  <span className="text-[10px] font-normal text-gray-500">
                    /person
                  </span>
                </p>
              </div>
            </label>
          );
        })}
      </div>

      <label className="mt-4 flex cursor-pointer items-center gap-2.5">
        <input
          type="checkbox"
          checked={formData.discussCustomStopovers}
          onChange={(e) =>
            updateField("discussCustomStopovers", e.target.checked)
          }
          className="h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border-gray-400 accent-[#2D3482]"
        />
        <span className="text-[13px] text-[#1A1A1A]">
          I would like to discuss custom stopover options
        </span>
      </label>
    </div>
  );
}
