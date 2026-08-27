"use client";

import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import HighlightsSection from "./HighlightsSection";
import ItinerarySection from "./ItinerarySection";
import StaysSection from "./StaysSection";
import CtaBanner from "./CtaBanner";
import InclusionsExclusions from "./Inclusionexclusion";
import JourneyPricing from "./DatePricing";
import AdditionalInformationSection from "./AdditionalInformationSection";
const TABS = [
  "Highlights",
  "Itinerary",
  "Stays",
  "Inclusions & Exclusions",
  "Dates & Pricing",
  "Additional Information",
];

const DetailTabs = forwardRef(function DetailTabs(
  { journey, departures, journeyId, inclusions, exclusions },
  ref,
) {
  const [activeTab, setActiveTab] = useState("Highlights");
  const containerRef = useRef(null);
 console.log("DETAIL TABS INCLUSIONS", inclusions);
  console.log("DETAIL TABS EXCLUSIONS", exclusions);

  // Inspirational journeys have no bookable departures, so the Dates &
  // Pricing tab doesn't apply to them at all — it's dropped from the tab
  // list entirely rather than just disabled.
  const tabs = journey?.isInspirational
    ? TABS.filter((tab) => tab !== "Dates & Pricing")
    : TABS;

  // Exposed to JourneyDetailClient so the hero card's "Check Dates &
  // Availability" button (Group journeys only) can jump straight to this
  // tab without lifting `activeTab` state out of this component.
  useImperativeHandle(ref, () => ({
    showDatesPricing: () => {
      if (journey?.isInspirational) return;
      setActiveTab("Dates & Pricing");
      requestAnimationFrame(() => {
        containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
  }));

  return (
    <>
    <div ref={containerRef} className="bg-white hidden md:block">
      <div className="sticky top-0 z-20 bg-white border-b border-[#E5E5E5] shadow-[0_6px_16px_-6px_rgba(0,0,0,0.15)] h-[80px] flex items-center px-[5.5vw]">
        <div className="flex items-center justify-center w-full max-w-[1548px] h-[47px] mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative ${
                journey?.isInspirational ? "px-[4.6vw]" : "px-[1.75vw]"
              } py-[1.1vw] whitespace-nowrap font-[Nohemi] text-[21px] leading-[32px] tracking-[0.05em] transition-colors ${
                activeTab === tab
                  ? "font-bold text-black"
                  : "font-light text-black/50 hover:text-black/80"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Highlights" && (
          <>
            <HighlightsSection
              highlights={journey?.highlights}
              drupalData={journey?.tabHighlights}
            />
            <CtaBanner
              formType="private"
              journey={journey}
              showDepartureDate={false}
            />
          </>
        )}

        {activeTab === "Itinerary" && (
          <>
            <ItinerarySection
              itinerary={journey?.itinerary}
              drupalData={journey?.tabItinerary}
              mapImage={journey.mapImage}
            />
            <CtaBanner
              buttonText="Request A Private Journey"
              formType="private"
              journey={journey}
              showDepartureDate={false}
            />
          </>
        )}


        {activeTab === "Stays" && (
  <StaysSection
    stays={journey?.stays}
    drupalData={journey?.tabStays}
  />
)}


{activeTab === "Inclusions & Exclusions" && (
  <InclusionsExclusions
    inclusions={inclusions}
    exclusions={exclusions}
  />
)}
    

{activeTab === "Dates & Pricing" && !journey?.isInspirational && (
 <JourneyPricing
  journey={journey}
  departures={departures}
   journeyId={journeyId}
 

/>
)}

        {activeTab === "Additional Information" && (
          <AdditionalInformationSection
            drupalData={journey?.tabAdditionalInfo}
          />
        )}
      </div>

    </div>

    </>
  );
});

export default DetailTabs;
