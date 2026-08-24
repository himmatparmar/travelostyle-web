"use client";

import { useState } from "react";
import JourneysWeLove from "./JourneysWeLove";

export default function YourNextTrip({ initialJourneys = null }) {

  const [activeTab, setActiveTab] = useState("journeys");

  return (
    <section className="overflow-hidden py-8 md:py-[5vw]">
      <div className="mx-auto w-full">
        <div className="text-center px-4 md:px-0">
          <h2 className="text-[26px] leading-[1.25] font-semibold tracking-[-0.02em] text-[#1B1B1B] md:text-[3vw] md:tracking-[-0.08vw]">
            Take your next trip with TravelOStyle
          </h2>

          <p className="mx-auto mt-2 max-w-[340px] text-[14px] leading-[1.6] text-[#6D6D6D] md:mt-0 md:max-w-[43vw] md:text-[0.92vw] md:leading-[1.8]">
            The journeys we know well, believe in genuinely, and can deliver on
            — every single time.
          </p>
        </div>

        <div className="mt-6 md:mt-[4vw]">

          <div className="border-b border-[#D8D8D8] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-x-visible">
            <div className="flex w-max min-w-full items-center justify-center gap-6 whitespace-nowrap text-[13px] px-4 md:w-auto md:min-w-0 md:gap-[4vw] md:text-[1vw] md:px-0">
              <button
                onClick={() => setActiveTab("journeys")}
                className={`relative shrink-0 pb-3 transition-all duration-300 md:pb-[1vw] ${
                  activeTab === "journeys"
                    ? "font-medium text-black"
                    : "text-[#707070]"
                }`}
              >
                Journeys We Love
                {activeTab === "journeys" && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("destinations")}
                className={`relative shrink-0 pb-3 transition-all duration-300 md:pb-[1vw] ${
                  activeTab === "destinations"
                    ? "font-medium text-black"
                    : "text-[#707070]"
                }`}
              >
                Popular Destinations
                {activeTab === "destinations" && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("deals")}
                className={`relative shrink-0 pb-3 transition-all duration-300 md:pb-[1vw] ${
                  activeTab === "deals"
                    ? "font-medium text-black"
                    : "text-[#707070]"
                }`}
              >
                Exclusive Deals
                {activeTab === "deals" && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
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
