"use client";

import Image from "next/image";
import React, { useState } from "react";
interface AccordionItem {
  id: string;
  title: string;
}

export default function MobileAdditionalInformation({
  onBack,
}: {
  onBack: () => void;
}) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const beforeYouBookItems: AccordionItem[] = [
    { id: "best-season", title: "Best Season" },
    { id: "visa-req", title: "Visa Requirements" },
    { id: "cancellation", title: "Cancellation Policy" },
    { id: "insurance", title: "Travel Insurance" },
  ];

  const beforeYouTravelItems: AccordionItem[] = [
    { id: "country-details", title: "Country Details & Travel Advisory" },
    { id: "ground-sharing", title: "On-Ground Sharing" },
    { id: "documents", title: "Travel Documents" },
    { id: "safety", title: "Safety & Security" },
  ];

  const renderAccordionSection = (items: AccordionItem[]) => {
    return (
      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = !!openItems[item.id];
          return (
            <div
              key={item.id}
              className="border border-neutral-800 rounded-xl bg-[#fcfcfc] overflow-hidden transition-all duration-200 shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors"
              >
                <span>{item.title}</span>
                <div className="w-6 h-6 rounded-full bg-[#fceae6] flex items-center justify-center text-[#e07a5f] relative">
                  <span className="absolute w-3 h-[2px] bg-orange-900/70 block"></span>
                  <span
                    className={`absolute w-[2px] h-3 bg-orange-900/70 block transition-transform duration-200 ${
                      isOpen ? "rotate-90 scale-y-0" : ""
                    }`}
                  ></span>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 border-t border-neutral-100" : "max-h-0"
                }`}
              >
                <div className="p-4 text-sm text-neutral-600 bg-white">
                  Placeholder content for {item.title}. You can replace this
                  with your actual dynamic data.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#fafafa] p-6 font-sans">
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
      <div className="mb-8">
        <h2 className="text-md font-bold text-neutral-800 mb-4">
          Things to Know Before You Book
        </h2>
        {renderAccordionSection(beforeYouBookItems)}
      </div>
      <div className="mb-6">
        <h2 className="text-md font-bold text-neutral-800 mb-4">
          Things to Know Before You Travel
        </h2>
        {renderAccordionSection(beforeYouTravelItems)}
      </div>
    </div>
  );
}
