"use client";

import { useState } from "react";
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

export default function DetailTabs({
  journey,
  departures,
  journeyId,
  inclusions,
  exclusions,
}) {
  
  const [activeTab, setActiveTab] = useState("Highlights");
 console.log("DETAIL TABS INCLUSIONS", inclusions);
  console.log("DETAIL TABS EXCLUSIONS", exclusions);

  return (
    <>
    <div className="bg-white hidden md:block">
      <div className="sticky top-0 z-20 bg-white border-b border-[#E5E5E5] px-[5.5vw]">
        <div className="flex items-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-[1.75vw] py-[1.1vw] whitespace-nowrap text-[21px] leading-[32px] tracking-[0.05em] transition-colors ${
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
            <CtaBanner />
          </>
        )}

        {activeTab === "Itinerary" && (
          <ItinerarySection
            itinerary={journey?.itinerary}
            drupalData={journey?.tabItinerary}
          />
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
    

{activeTab === "Dates & Pricing" && (
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
}
