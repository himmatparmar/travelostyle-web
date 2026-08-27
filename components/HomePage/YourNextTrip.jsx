"use client";

import { useState } from "react";
import JourneysWeLove from "./JourneysWeLove";

export default function YourNextTrip({ initialJourneys = null }) {

  const [activeTab, setActiveTab] = useState("journeys");

  return (
    <section className="overflow-hidden py-8 md:py-[5vw]">
      <div className="mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-nohemi text-[32px] leading-[40px] font-semibold tracking-[0.05em] text-ink md:text-[3vw] md:leading-[1.25] md:tracking-[-0.08vw]">
            Take your next trip with TravelOStyle
          </h2>

          <p className="mt-2 max-w-[500px] font-nohemi text-[16px] font-light leading-[24px] tracking-[0.05em] text-[#1A1A1A] md:mt-3 md:max-w-[43vw] md:text-[0.92vw] md:font-normal md:leading-[1.8] md:tracking-normal md:text-[#6D6D6D]">
            The journeys we know well, believe in genuinely, and can deliver on — <br className="hidden md:inline" />
            every single time.
          </p>
        </div>

        <div className="mt-6 md:mt-[4vw]">

  <div className="mx-auto max-w-[1200px] overflow-x-auto border-b border-[#D8D8D8] px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-x-visible md:px-0">
    <div className="flex w-max items-center justify-start gap-10 whitespace-nowrap text-[21px] leading-[32px] tracking-[0.05em] md:w-full md:min-w-0 md:justify-center md:gap-[5vw] md:text-[1vw] md:leading-normal md:tracking-normal md:px-0">
              <button
                onClick={() => setActiveTab("journeys")}
                className={`relative shrink-0 pb-3 transition-all duration-300 md:pb-[1vw] ${
                  activeTab === "journeys"
                    ? "font-semibold text-ink"
                    : "font-normal text-[#707070]"
                }`}
              >
                Journeys We Love
                {activeTab === "journeys" && (
                  <span className="absolute -bottom-px left-0 h-[3px] w-full bg-ink md:h-[1.5px]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("destinations")}
                className={`relative shrink-0 pb-3 transition-all duration-300 md:pb-[1vw] ${
                  activeTab === "destinations"
                    ? "font-semibold text-ink"
                    : "font-normal text-[#707070]"
                }`}
              >
                Popular Destinations
                {activeTab === "destinations" && (
                  <span className="absolute -bottom-px left-0 h-[3px] w-full bg-ink md:h-[1.5px]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("deals")}
                className={`relative shrink-0 pb-3 transition-all duration-300 md:pb-[1vw] ${
                  activeTab === "deals"
                    ? "font-semibold text-ink"
                    : "font-normal text-[#707070]"
                }`}
              >
                Exclusive Deals
                {activeTab === "deals" && (
                  <span className="absolute -bottom-px left-0 h-[3px] w-full bg-ink md:h-[1.5px]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {activeTab === "journeys" && (
      <JourneysWeLove initialJourneys={initialJourneys} />
        )}
        {activeTab === "destinations" &&  <JourneysWeLove onlyPopular/>}
        {activeTab === "deals" &&  <JourneysWeLove onlyWithOffer/>}
      </div>
    </section>
  );
}
