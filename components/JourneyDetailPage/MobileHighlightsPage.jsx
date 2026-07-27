"use client";

import Image from "next/image";

export default function MobileHighlights({ onBack, highlightsRecord }) {
 const highlights = highlightsRecord?.length > 0 ? highlightsRecord : [];

  return (
    <div className="block w-full font-sans text-[#1A1A1A] antialiased md:hidden">
      <main className="px-4 py-4 pb-12">
        <div className="w-full p-2">
          <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
            <button
              onClick={onBack}
              className="flex h-6 w-12 items-center justify-center rounded-full bg-white transition active:scale-95"
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
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-[8px] border-2 border-[#515589] bg-[#F3F6DD] p-4"
              >
                <p className="text-[14px] leading-[20px] font-medium text-[#2A2522]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}