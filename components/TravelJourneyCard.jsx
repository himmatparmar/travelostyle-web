"use client";
import React from "react";
import { CirclePlus, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function TravelJourneyCard({
  journeys = [],
  selectedTrips = [],
  onCompare,
}) {
  return (
    <div className="w-full max-w-7xl mx-auto pt-6 pb-12 overflow-hidden">
      <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 scroll-smooth pt-2 pb-6 pl-4 pr-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-0">
        {journeys.map((journey) => (
          <div
            key={journey.id}
            className="relative bg-white rounded-xl border border-neutral-200/90 shadow-[0px_10px_15px_0px_#0000001A] flex flex-col justify-between overflow-hidden pb-8 min-h-[560px] shrink-0 w-[75vw] max-w-[290px] snap-start md:w-full md:max-w-[390px] md:min-h-[640px] md:shrink"
          >
            <div className="pointer-events-none absolute -left-3 top-[220px] z-20 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-neutral-200 bg-white" />
            <div className="pointer-events-none absolute -right-3 top-[220px] z-20 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-neutral-200 bg-white" />
            <div>
              <div className="flex gap-2 p-4 pb-2">
                {journey.types?.includes("Group Journey") && (
                  <span className="text-[10px] font-semibold bg-[#EFF6E0] text-[#59832A] px-2.5 py-1 rounded whitespace-nowrap">
                    Group Journey
                  </span>
                )}
                {journey.types?.includes("Private Journey") && (
                  <span className="text-[10px] font-semibold bg-[#FEFAE0] text-[#B58A32] px-2.5 py-1 rounded whitespace-nowrap">
                    Private Journey
                  </span>
                )}
              </div>
              <div className="px-4 md:px-5">
                <div className="overflow-hidden rounded-md h-[170px] w-full relative md:h-[213px]">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <div className="px-4 pt-1">
                <h3 className="text-base font-bold text-neutral-900 leading-snug line-clamp-2">
                  {journey.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed line-clamp-3">
                  {journey.description}
                </p>
                <div className="flex items-center gap-3 mt-3 text-[11px] text-neutral-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/CalenderIcon.svg"
                      alt="Calendar"
                      width={16}
                      height={16}
                      className="md:h-[1.1vw] md:w-[1.1vw]"
                    />
                    <span className="whitespace-nowrap">
                      {journey.duration}sss
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                     <Image
                    src="/Destination.svg"
                    alt="Destination"
                    width={16}
                    height={16}
                    className="md:h-[1.1vw] md:w-[1.1vw]"
                  />
                    <span className="whitespace-nowrap">
                      {journey.destinations}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between px-4 mb-3">
                <div>
                  <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">
                    from
                  </span>
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold text-neutral-900">
                      ${journey.price}*
                    </span>
                    <span className="text-[10px] text-neutral-500 ml-0.5">
                      /person
                    </span>
                  </div>
                  <span className="text-[9px] text-neutral-400 block -mt-1">
                    double occupancy*
                  </span>
                </div>

                <a
                  href={journey.viewTripUrl}
                  className="flex items-center justify-center whitespace-nowrap shrink-0 rounded-full bg-[#2D3482] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#202254] md:px-[1.1vw] md:py-[0.45vw] md:text-[0.78vw]"
                >
                  {journey.viewTripText || "View Trip"}
                </a>
              </div>
              {journey.earlyBird ? (
                <div className="mx-3 mb-3 bg-[#FDF0EA] text-[#A65B32] py-1.5 px-2.5 rounded flex items-center gap-1.5 text-[10px] font-medium border border-[#FBE3D5]">
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="line-clamp-1">
                    Early Bird Offer available for {journey.earlyBird}
                  </span>
                </div>
              ) : (
                <div className="h-8 mb-3" />
              )}

              <div className="px-4 pt-0.5">
                <button
                  onClick={() => {
                    if (selectedTrips?.includes(journey.id)) {
                      toast("Trip already added to comparison");
                      return;
                    }
                    onCompare(journey);
                  }}
                  className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-800 text-[11px] font-medium transition-colors"
                >
                  {selectedTrips?.includes(journey.id) ? (
                    <>
                      <CheckCircle2 size={15} className="text-green-600" />
                      <span>Added to Compare</span>
                    </>
                  ) : (
                    <>
                      <CirclePlus size={15} />
                      <span>Add to Compare</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 z-10 flex w-full translate-y-1/2 justify-center gap-1 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="h-5 w-5 rounded-full border-2 border-neutral-200 bg-white shrink-0" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
