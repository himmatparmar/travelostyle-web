"use client";

import Image from "next/image";
import Itinerary from "./Itinerary";
import MobileHighlightsPage from "./MobileHighlightsPage";
import InclusionsExclusions from "./Inclusionexclusion";
import MobileAdditionalInformation from "./MobileAdditionalInformation";
import MobileStays from "./MobileStays";
import JourneyPricing from "./DatePricing";
import BookYourJourneyMobile from "./BookYourJourneyMobile";
import CtaBanner from "./CtaBanner";

export default function MobileNavigationMenu({
  journey,
  departures,
  activeView,
  inclusions,
  exclusions,
  setActiveView
}){
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
              <span className="text-base font-medium tracking-wide text-ink">
                {item.label}
              </span>

              <div className="transition active:scale-95">
                <Image src="/RightArrow.svg" alt="Next" height={24} width={56} />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6">
          <CtaBanner
            variant="card"
            buttonText="Request A Private Journey"
            formType="private"
            journey={journey}
            showDepartureDate={false}
          />
        </div>
      </div>
    );
 }

  // ── VIEW 2: FULL HIGHLIGHTS PAGE ──────────────────────────────────
if (activeView === "inclusions-exclusions") {
  return (
    <InclusionsExclusions
      inclusions={inclusions}
      exclusions={exclusions}
      onBack={() => setActiveView("menu")}
    />
  );
}
if (activeView === "highlights") {
  return (
    <MobileHighlightsPage
      onBack={() => setActiveView("menu")}
      highlightsRecord={journey.tabHighlights}
      journey={journey}
    />
  );
}
if (activeView === "itinerary") {
  return (
    <Itinerary
      onBack={() => setActiveView("menu")}
      itineraryRecord={journey.tabItinerary}
      mapImage={journey.mapImage}
      journey={journey}
    />
  );
}
if (activeView === "additional-information") {
  return (
    <MobileAdditionalInformation
      onBack={() => setActiveView("menu")}
      drupalData={journey.tabAdditionalInfo}
    />
  );
}

if (activeView === "stays") {
  return (
    <MobileStays
      onBack={() => setActiveView("menu")}
       StaysRecord={journey.tabStays}
    />
  );
}
if (activeView === "dates-pricing") {
  return (
    <JourneyPricing
      journey={journey}
      departures={departures}
      onBack={() => setActiveView("menu")}
    />
  );
}
}
