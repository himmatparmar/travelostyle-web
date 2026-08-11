"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const JourneyMap = dynamic(() => import("./JourneyMap"), { ssr: false });


const DEFAULT_ITINERARY = [
  {
    day: 1,
    title: "Casablanca Calling",
    stay: "Kaan Casablanca",
    description:
      "Arrival at Casablanca. Your journey begins at Casablanca's Mohammed V Airport, where your private TravelOStyle guide will be waiting.",
  },
  {
    day: 2,
    title: "Royal Roads to Fez",
    stay: "Riad Salam Fes",
    description:
      "The road north takes you first to Rabat, Morocco's quiet, elegant capital. The Royal Palace, the Hassan Tower (an unfinished minaret from the 12th century that somehow feels complete as a ruin), and the Oudayas Kasbah.",
  },
  {
    day: 3,
    title: "The Labyrinth of Fez",
    stay: "Riad Salam Fes",
    description:
      "A full day inside one of the world's great medieval cities. The Fez Medina is a UNESCO World Heritage site — and also a living, working, genuinely chaotic place that no amount of preparation quite readies you for.",
  },
  {
    day: 4,
    title: "Fez to the High Atlas",
    stay: "Kasbah Hotel Xaluca Arfoud",
    description:
      "A long drive south through cedar forests and the Middle Atlas — stopping at Ifrane (Morocco's Alpine town), Azrou, and arriving at the desert edge by evening.",
  },
  {
    day: 5,
    title: "Into the Sahara",
    stay: "Auberge du Sud, Erg Chébbi",
    description:
      "The dunes of Erg Chébbi rise to 150 metres at their highest. A camel ride at sunset; a night under extraordinary sky. One of those evenings you won't easily forget.",
  },
  {
    day: 6,
    title: "Draa Valley to Ouarzazate",
    stay: "Le Berbere Palace, Ouarzazate",
    description:
      "The road west follows the Draa Valley — one of the most dramatic drives in North Africa. Kasbahs, palm groves, and the ancient route of trans-Saharan caravans.",
  },
];

function DayAccordion({ item, isOpen, onToggle, onHover, onHoverEnd }) {
  return (
    <div
      className="border-2 border-black rounded-[0.5vw] overflow-hidden"
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between px-[1.2vw] py-[1vw] text-left"
      >
        <div className="flex-1 pr-4">
          <p className="text-[0.65vw] font-medium uppercase tracking-[0.1em] text-[#888] mb-[0.2vw]">
            DAY {item.day}
          </p>
          <p className="text-[0.85vw] font-semibold text-[#1A1A1A]">
            {item.title}
          </p>
          <p className="text-[0.72vw] text-[#666] mt-[0.2vw]">
            Stay: {item.stay}
          </p>
          {isOpen && (
            <p className="text-[0.75vw] text-[#444] leading-[1.6] mt-[0.8vw]">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex h-[2.2vw] w-[2.2vw] shrink-0 items-center justify-center rounded-full bg-[#F2E2DA]">
          {isOpen ? (
            <Minus size={16} className="text-[#1A1A1A]" />
          ) : (
            <Plus size={16} className="text-[#1A1A1A]" />
          )}
        </div>
      </button>
    </div>
  );
}

// A broken location chain for one day (missing stay, missing hotel
// location, or missing/empty geofield) shouldn't crash the map — it just
// can't contribute a route point, so it's skipped here.
function buildJourneyMarkers(days) {
  const markers = [];
  days.forEach((d) => {
    if (typeof d.lat !== "number" || typeof d.lon !== "number") return;

    const last = markers[markers.length - 1];
    const isSameLocation =
      last &&
      Math.abs(last.lat - d.lat) < 1e-6 &&
      Math.abs(last.lon - d.lon) < 1e-6;

    if (isSameLocation) {
      last.days.push({ day: d.day, title: d.title });
    } else {
      markers.push({
        id: `${d.lat},${d.lon}`,
        lat: d.lat,
        lon: d.lon,
        stayName: d.stay,
        days: [{ day: d.day, title: d.title }],
      });
    }
  });
  return markers;
}

export default function ItinerarySection({ itinerary = DEFAULT_ITINERARY, drupalData ,mapImage, }) {
  const days = (drupalData && drupalData.length > 0) ? drupalData : itinerary;
  const [openDay, setOpenDay] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

  const toggle = (day) => setOpenDay((prev) => (prev === day ? null : day));

  const journeyMarkers = useMemo(() => buildJourneyMarkers(days), [days]);
  const hasInteractiveMap = journeyMarkers.length >= 2;
  const activeDay = hoveredDay ?? openDay;

  return (
    <div className="px-[5.5vw] py-[3vw]">
      <h2 className="text-center text-[1.4vw] font-semibold text-[#1A1A1A] mb-[2.5vw]">
        Here&apos;s How Your Days Unfold
      </h2>

      <div className="grid grid-cols-[2fr_3fr] gap-[2vw]">
        {/* Left: Journey map */}
      <div className="border border-[#D9D9D9] rounded-[0.4vw] overflow-hidden min-h-[30vw] sticky top-[1vw] self-start relative">
  {hasInteractiveMap ? (
    <div className="absolute inset-0">
      <JourneyMap markers={journeyMarkers} activeDay={activeDay} />
    </div>
  ) : mapImage ? (
    <Image
      src={mapImage}
      alt="Journey Map"
      fill
      className="object-cover"
    />
  ) : (
    <div className="flex items-center justify-center h-full">
      No map available
    </div>
  )}
</div>
        {/* Right: Day accordion */}
        <div className="flex flex-col gap-[0.7vw]">
          {days.map((item) => (
            <DayAccordion
              key={item.day}
              item={item}
              isOpen={openDay === item.day}
              onToggle={() => toggle(item.day)}
              onHover={() => setHoveredDay(item.day)}
              onHoverEnd={() => setHoveredDay(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
