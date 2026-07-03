"use client";

import Image from "next/image";
import Itinerary from "./Itinerary";
import MobileHighlightsPage from "./MobileHighlightsPage";
import MobileInclusionsExclusions from "./MobileInclusionsExclusions";

export default function MobileNavigationMenu({ activeView, setActiveView }) {
  const menuItems = [
    { label: "Highlights", id: "highlights" },
    { label: "Itinerary", id: "itinerary" },
    { label: "Stays", id: "stays" },
    { label: "Inclusions & Exclusions", id: "inclusions-exclusions" },
    { label: "Dates & Pricing", id: "dates-pricing" },
    { label: "Additional Information", id: "additional-information" },
  ];

 if (activeView === "menu") {
    return (
      <div className="w-full py-4 block md:hidden bg-white">
        <div className="bg-white">
          {menuItems.map((item, index) => (
            <button
              key={index}
             onClick={() => setActiveView(item.id)}
              className="flex w-full items-center justify-between border-b border-black px-6 py-4 text-left transition active:bg-gray-50"
            >
              <span className="text-base font-medium tracking-wide text-[#1A1A1A]">
                {item.label}
              </span>

              <div className="transition active:scale-95">
                <Image src="/RightArrow.svg" alt="Next" height={24} width={56} />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
 }

  // ── VIEW 2: FULL HIGHLIGHTS PAGE ──────────────────────────────────
if (activeView === "inclusions-exclusions") {
  return (
    <MobileInclusionsExclusions
      onBack={() => setActiveView("menu")}
    />
  );
}
if (activeView === "highlights") {
  return (
    <MobileHighlightsPage
      onBack={() => setActiveView("menu")}
    />
  );
}
if (activeView === "itinerary") {
  return (
    <Itinerary
      onBack={() => setActiveView("menu")}
    />
  );
}
}