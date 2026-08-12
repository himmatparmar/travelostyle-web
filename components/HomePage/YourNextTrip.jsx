"use client";

import { useState } from "react";
import JourneysWeLove from "./JourneysWeLove";

export default function YourNextTrip() {

  const [activeTab, setActiveTab] = useState("journeys");

  return (
    <section className="overflow-hidden py-[5vw]">
      <div className="mx-auto w-full">
        <div className="text-center">
          <h2 className="text-[3vw] font-semibold tracking-[-0.08vw] text-[#1B1B1B]">
            Take your next trip with TravelOStyle
          </h2>

          <p className="mx-auto max-w-[43vw] text-[0.92vw] leading-[1.8] text-[#6D6D6D]">
            The journeys we know well, believe in genuinely, and can deliver on
            — every single time.
          </p>
        </div>

        <div className="mt-[4vw]">

          <div className="border-b border-[#D8D8D8]">
            <div className="flex items-center justify-center gap-[4vw] text-[1vw]">
              <button
                onClick={() => setActiveTab("journeys")}
                className={`relative pb-[1vw] transition-all duration-300 ${
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
                className={`relative pb-[1vw] transition-all duration-300 ${
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
                className={`relative pb-[1vw] transition-all duration-300 ${
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
      <JourneysWeLove/>
        )}
        {activeTab === "destinations" &&  <JourneysWeLove onlyPopular/>}
        {activeTab === "deals" &&  <JourneysWeLove/>}
      </div>
    </section>
  );
}
