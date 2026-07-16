"use client";

import Image from "next/image";
import React, { useState } from "react";
const itineraryData = [
  {
    day: 1,
    title: "Casablanca Calling",
    stay: "Kaan Casablanca",
    description:
      "The road north takes you first to Rabat, Morocco's quiet, elegant capital. The Royal Palace, the Hassan Tower (an unfinished minaret from the 12th century that somehow feels complete as a ruin), and the Oudayas Kasbah — a blue-and-white walled quarter overlooking the river — make for a morning worth taking slowly.\n\nAfter lunch, the drive continues through Morocco's fertile plains toward Fez. Arrive as the evening settles over the medina and check into your riad — dinner in the courtyard, if the mood takes you.",
  },
  {
    day: 2,
    title: "Royal Roads to Fez",
    stay: "Riad Salam Fes",
    description:
      "Explore the scenic paths, ancient fortified walls, and deep heritage on the way into the old imperial capital. Witness the transition from coastal plains to the historic heart of Moroccan culture.",
  },
  {
    day: 3,
    title: "The Labyrinth of Fes",
    stay: "Riad Salam Fes",
    description:
      "Get lost in the vibrant, sprawling alleys of the world's largest car-free urban area. Discover bustling souks, historic tanneries, and hidden madrasas that have stood for centuries.",
  },
  {
    day: 4,
    title: "Echoes of Empire",
    stay: "Riad Salam Fes",
    description:
      "Discover Roman ruins at Volubilis and imperial history surrounding the ancient cultural capital of Meknes, exploring the layers of civilizations that shaped the region.",
  },
  {
    day: 5,
    title: "Into the Atlas",
    stay: "Riad Salam Fes",
    description:
      "Journey into the breathtaking landscapes, alpine towns like Ifrane, and dense cedar forests of the Middle Atlas mountains, meeting local communities along the way.",
  },
  {
    day: 6,
    title: "Sand of Time",
    stay: "Riad Salam Fes",
    description:
      "Experience the edge of the desert, watching the terrain shift into majestic golden dunes, and transition into a timeless landscape under the vast desert sky.",
  },
  {
    day: 7,
    title: "Through the Valley",
    stay: "Riad Salam Fes",
    description:
      "Travel through striking gorges, deep valleys, lush palm oases, and stunning geological formations that define Morocco's rugged and beautiful interior.",
  },
  {
    day: 8,
    title: "Kasbah Chronicles",
    stay: "Riad Salam Fes",
    description:
      "Tour the famous fortified earthen cities, including iconic UNESCO World Heritage sites like Aït Benhaddou, and explore film-famous desert heritage structures.",
  },
  {
    day: 9,
    title: "Crossing the High Atlas",
    stay: "Riad Salam Fes",
    description:
      "Wind through the dramatic mountain passes and high-altitude panoramic views back toward Marrakech, closing an unforgettable loop of discovery.",
  },
];

export default function MobileItinerary({ onBack,itineraryRecord }) {
  const [openDay, setOpenDay] = useState(1);
  const itinerary =
    Array.isArray(itineraryRecord) && itineraryRecord.length > 0
      ? itineraryRecord
      : itineraryData;
  const toggleDay = (dayNum) => {
    setOpenDay(openDay === dayNum ? null : dayNum);
  };

  return (
    <div className="w-full max-w-[390px] mx-auto bg-[#F9F9F9] min-h-screen font-sans p-4 antialiased selection:bg-gray-200">
      <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
        <button
          onClick={onBack}
          className="flex h-6 w-12 items-center justify-center rounded-full bg-white transition active:scale-95"
        >
          <Image src="/LeftArrow.svg" alt="Back" width={56} height={24} />
        </button>

        <h1 className="text-base font-bold tracking-tight text-[#1A1A1A]">
          Itinerary
        </h1>

        <div className="w-12" />
      </div>
      <h2 className="text-sm font-bold text-neutral-800 mb-3 tracking-tight">
        Learn How Your Days Unfold
      </h2>

      <div className="w-full h-52 bg-white border-2 border-neutral-800 rounded-xl flex items-center justify-center mb-4 shadow-[1px_1px_0px_rgba(0,0,0,1)]">
        <span className="text-xs font-semibold text-neutral-700 tracking-wide">
          Map
        </span>
      </div>
      <div className="space-y-3 pb-8">
        {itinerary.map((item) => {
          const isOpen = openDay === item.day;

          return (
            <div
              key={item.day}
              className="bg-white border-2 border-neutral-800 rounded-xl overflow-hidden shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-all"
            >
              <button
                onClick={() => toggleDay(item.day)}
                className="w-full text-left p-4 flex justify-between items-start focus:outline-none"
              >
                <div className="space-y-0.5">
                  <span className="block text-[11px] font-black uppercase tracking-wider text-neutral-900">
                    DAY {item.day}
                  </span>
                  <h3 className="text-[15px] font-extrabold text-neutral-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600">
                    <span className="font-bold text-neutral-900">Stay:</span>{" "}
                    {item.stay}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-2 w-6 h-6 rounded-full bg-[#F3EBE6] border border-neutral-400 flex items-center justify-center font-mono font-bold text-neutral-700 text-sm select-none">
                  {isOpen ? "−" : "+"}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-[500px] border-t-2 border-neutral-100"
                    : "max-h-0"
                }`}
              >
                <div className="p-4 pt-2 text-[12.5px] text-neutral-800 leading-relaxed font-normal whitespace-pre-line">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
