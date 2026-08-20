"use client";

import { useRouter } from "next/navigation";

export default function SuccessStep({ onExplore }) {
  const router = useRouter();

  const handleExplore = () => {
    onExplore?.();
    router.push("/itinerary");
  };

  return (
    <div className="flex w-full flex-col justify-center py-6 font-sans">

      <h3 className="text-[13px] font-bold text-[#1A1A1A]">
        Inquiry Submitted!
      </h3>

      <div className="mt-1.5 max-w-[460px] space-y-0.5 text-[10.5px] leading-relaxed text-[#7A7A7A]">
        <p>Your inquiry has been received by team TravelOStyle. We typically respond within 48hrs.</p>
        <p>Your details are never shared with third parties.</p>
      </div>

   
      <div className="mt-4">
        <button
          type="button"
          onClick={handleExplore}
          className="rounded-full bg-[#2B3377] px-6 py-2 text-[11.5px] font-bold text-white shadow-sm transition hover:bg-[#202761]"
        >
          Explore More Journeys
        </button>
      </div>
    </div>
  );
}