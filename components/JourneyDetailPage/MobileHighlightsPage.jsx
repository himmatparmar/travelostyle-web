"use client";

import Image from "next/image";

export default function MobileHighlights({ onBack }) {
  const highlights = [
    "Ancient medinas where the call to prayer still echoes off the same walls it always has — and the baker, the craftsman, the spice merchant are all still there.",
    "A Roman mosaic under open sky. A sultan's palace built to rival Versailles. Both within the same afternoon.",
    "Cedar forests, mountain passes, a valley that seems to go on forever — and mint tea waiting for you at the end of it.",
    "You've seen Ait Benhaddou in the films. Nothing prepares you for it in person.",
    "Three days in Marrakech — the souks at dawn, the square at dusk, and a garden so quiet you'll forget where you are.",
  ];

  return (
    <div className="block w-full bg-[#F9F9F9] font-sans text-[#1A1A1A] antialiased md:hidden">
      <main className="px-4 py-4 pb-12">
        <div className="w-full p-2">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
            <button
              onClick={onBack}
              className="flex h-6 w-12 items-center justify-center rounded-full border border-black bg-white transition active:scale-95"
            >
              <Image
                src="/LeftArrow.svg"
                alt="Back"
                width={56}
                height={24}
              />
            </button>

            <h1 className="text-base font-bold tracking-tight text-[#1A1A1A]">
              Highlights
            </h1>

            <div className="w-12" />
          </div>

          {/* Highlight Cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-[8px] border-2 border-[#515589] bg-[#F3F6DD] p-4"
              >
                <p className="text-[14px] leading-[20px] font-medium text-[#2A2522]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}