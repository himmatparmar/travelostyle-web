"use client";

import { useState } from "react";
import ActiveFilters from "./ActiveFilters";

const SORT_OPTIONS = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
];

export default function SortBar({
  resultCount,
  selected,
  setSelected,
  filters,
  setFilters,
}) {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="flex items-center justify-between pb-[0.8vw]">

      <div className="flex items-center gap-[1vw] flex-wrap">
        <span className="text-[0.75vw] text-[#888] shrink-0">
          {resultCount} trips found
        </span>

        <ActiveFilters
          filters={filters}
          setFilters={setFilters}
        />
      </div>

      <div className="relative flex items-center gap-[0.4vw]">
        <span className="text-[0.75vw] text-[#555]">
          Sort By:
        </span>

        <button
          onClick={() => setSortOpen(!sortOpen)}
          className="flex items-center gap-[0.3vw] text-[0.75vw] font-medium text-[#1a1a1a]"
        >
          {selected}

          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {sortOpen && (
          <div className="absolute right-0 top-[1.5vw] z-50 min-w-[12vw] rounded-[0.4vw] border border-[#E8E8E8] bg-white shadow-lg py-[0.4vw]">

            {SORT_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setSortOpen(false);
                }}
                className={`w-full px-[0.8vw] py-[0.5vw] text-left text-[0.75vw]
                ${
                  selected === option
                    ? "bg-[#f5f5ff] text-[#2f2d89] font-semibold"
                    : "text-[#444]"
                }`}
              >
                {option}
              </button>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}