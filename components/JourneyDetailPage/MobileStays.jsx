import Image from "next/image";
import React, { useState } from "react";
import GalleryMobileView from "./GalleryMobileView";

export default function MobileStays({ onBack }) {
  const staysData = [
    {
      id: 1,
      name: "Kaan Casablanca",
      description: "A city hotel in the heart of Casablanca",
      image: "/Casablanca.svg",
    },
    {
      id: 2,
      name: "Riad Salam Fez",
      description: "A boutique riad in the heart of Fez",
      image: "/RiadSalamFez.svg"
    },
    {
      id: 3,
      name: "Kasbah Hotel Xaluca Arfoud",
      description: "A city hotel in the heart of Casablanca",
      image:
        "/XalucaArfoud.svg",
    },
    {
      id: 4,
      name: "Auberge du Sud, Erg Chebbi",
      description: "A tented camp at the heart of the Moroccan Sahara",
      image:
        "/Auberge.svg",
    },
  ];

  const [selectedStay, setSelectedStay] = useState(null);

  if (selectedStay) {
    return (
      <GalleryMobileView
        selectedStay={selectedStay}
        onBack={() => setSelectedStay(null)}
      />
    );
  }
  return (
    <div className="w-full max-w-md p-6 flex flex-col">
      <div className="mb-4 flex items-center justify-between pb-3">
        <button
          onClick={onBack}
          className="flex h-6 w-12 items-center justify-center rounded-full bg-white transition active:scale-95"
        >
          <Image src="/LeftArrow.svg" alt="Back" width={56} height={24} />
        </button>

        <h1 className="text-base font-bold tracking-tight text-[#1A1A1A]">
          Additional Information
        </h1>

        <div className="w-12" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {staysData.map((stay) => (
          <div
            key={stay.id}
            className="bg-white border-2 border-neutral-800 rounded-lg overflow-hidden shadow-sm"
          >
            {/* Image Container */}
            <div className="h-28 w-full relative overflow-hidden border-b-2 border-neutral-800">
              <img
                src={stay.image}
                alt={stay.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <div>
                <h2 className="font-bold text-[13px] leading-tight text-neutral-950 mb-1 line-clamp-2">
                  {stay.name}
                </h2>
                <p className="text-[10px] text-neutral-500 leading-snug line-clamp-3">
                  {stay.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedStay(stay)}
              className="w-full py-2 bg-white border-t-2 border-neutral-800 text-[11px] font-bold text-neutral-900 underline underline-offset-2 hover:bg-neutral-50 transition-colors"
            >
              View Gallery
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
