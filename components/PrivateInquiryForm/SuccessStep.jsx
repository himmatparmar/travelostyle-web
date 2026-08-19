"use client";

import { useRouter } from "next/navigation";

export default function SuccessStep({ onExplore }) {
  const router = useRouter();

  const handleExplore = () => {
    onExplore?.();
    router.push("/itinerary");
  };

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Inquiry Submitted!
      </h3>
      <p className="mt-3 max-w-[420px] text-[13px] leading-6 text-gray-500">
        Your inquiry has been received by team TravelOStyle. We typically
        respond within 48hrs. Your details are never shared with third
        parties.
      </p>
      <button
        type="button"
        onClick={handleExplore}
        className="mt-6 rounded-full bg-[#2D3482] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252b78]"
      >
        Explore More Journeys
      </button>
    </div>
  );
}
