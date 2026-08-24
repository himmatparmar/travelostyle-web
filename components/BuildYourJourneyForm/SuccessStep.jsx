"use client";

import { useRouter } from "next/navigation";

export default function SuccessStep({ onExplore }) {
  const router = useRouter();

  // "Explore More Journeys" closes the modal (onExplore, same as before)
  // and sends the user to the unfiltered itinerary listing — same pattern
  // as PrivateInquiryForm's SuccessStep. Previously this button only
  // closed the modal and left the user on whatever page they started
  // the form from, without navigating anywhere.
  const handleExplore = () => {
    onExplore?.();
    router.push("/itinerary");
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-[18px] font-[600] leading-[21px] tracking-[0.05em] text-[#1A1A1A]">
        Inquiry Submitted!
      </h3>


      <p className="mt-3 text-[13px] sm:text-[14px] font-[400] leading-[22px] tracking-[0.03em] text-[#757575]">
        Your inquiry has been received by team TravelOStyle. We typically respond within 48hrs.
        <br />
        Your details are never shared with third parties.
      </p>

      <div className="mt-8">
        <button
          type="button"
          onClick={handleExplore}
          className="flex h-[37px] items-center justify-center rounded-[30px] bg-[#2C3078] px-7 text-[15px] font-semibold tracking-[0.05em] text-[#FAFAFA] transition hover:opacity-90 cursor-pointer shadow-sm"
        >
          Explore More Journeys
        </button>
      </div>
    </div>
  );
}