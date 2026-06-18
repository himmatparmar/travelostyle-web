"use client";

import { useState } from "react";
import HighlightsSection from "./HighlightsSection";
import CtaBanner from "./CtaBanner";

const TABS = [
  "Highlights",
  "Itinerary",
  "Q&A",
  "Inclusions & Exclusions",
  "Additional Information",
];

export default function DetailTabs({ journey }) {
  const [activeTab, setActiveTab] = useState("Highlights");

  return (
    <div className="bg-white">
      {/* Tab Navigation */}
      <div className="border-b border-[#E5E5E5] px-[5.5vw]">
        <div className="flex items-center gap-[2vw]">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative py-[1.1vw] text-[0.82vw] font-medium transition-colors ${
                activeTab === tab
                  ? "text-[#2D3482]"
                  : "text-[#666] hover:text-[#1A1A1A]"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#2D3482]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Highlights" && (
          <>
            <HighlightsSection highlights={journey?.highlights} />
            <CtaBanner />
          </>
        )}

        {activeTab === "Itinerary" && (
          <div className="px-[5.5vw] py-[3vw] text-[0.85vw] text-[#666]">
            Detailed day-by-day itinerary coming soon.
          </div>
        )}

        {activeTab === "Q&A" && (
          <div className="px-[5.5vw] py-[3vw] text-[0.85vw] text-[#666]">
            Frequently asked questions coming soon.
          </div>
        )}

        {activeTab === "Inclusions & Exclusions" && (
          <div className="px-[5.5vw] py-[3vw] text-[0.85vw] text-[#666]">
            What&apos;s included and excluded coming soon.
          </div>
        )}

        {activeTab === "Additional Information" && (
          <div className="px-[5.5vw] py-[3vw] text-[0.85vw] text-[#666]">
            Additional information coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
