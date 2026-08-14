"use client";
import FindJourneyMobile from "@/components/HomePage/FindYourJourney/FindYourJourneyMobile";
import { useState } from "react";
import SearchHeader from "../SearchHeader";

export default function SearchBar({
  showAllJourneys = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFindJourneyMobile, setShowFindJourneyMobile] = useState(false);

  return (
    <section className="w-full overflow-hidden">
      <SearchHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setShowFindJourneyMobile={setShowFindJourneyMobile}
        showAllJourneys={showAllJourneys}
      />

      {showFindJourneyMobile && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
          <FindJourneyMobile
            onClose={() => setShowFindJourneyMobile(false)}
          />
        </div>
      )}
    </section>
  );
}
