"use client";

import { useState } from "react";
import { SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import FilterSidebar from "./FilterSidebar";
import { SORT_OPTIONS } from "./SortBar";

export default function MobileFilters({
  filters,
  setFilters,
  filterOptions,
  journeys,
  sort,
  setSort,
  resultCount,
}) {
  const [openSheet, setOpenSheet] = useState(null); // "filters" | "sort" | null

  const activeFilterCount = [
    "region",
    "style",
    "offer",
    "category",
    "month",
    "pricing",
    "duration",
  ].reduce((total, key) => total + (filters[key]?.length || 0), 0);

  const close = () => setOpenSheet(null);

  return (
    <div className="md:hidden">
      {/* FIXED BOTTOM BAR */}
      <div className="fixed bottom-4 left-4 right-4 z-40 flex divide-x divide-[#1A1A1A] overflow-hidden rounded-full border border-[#1A1A1A] bg-white shadow-lg">
        <button
          onClick={() => setOpenSheet("filters")}
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-[#1A1A1A]"
        >
          <SlidersHorizontal size={15} />
          Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}
        </button>

        <button
          onClick={() => setOpenSheet("sort")}
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-[#1A1A1A]"
        >
          <ArrowUpDown size={15} />
          Sort by
        </button>
      </div>

      {/* FILTERS SHEET */}
      {openSheet === "filters" && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={close}
          />
          <div className="absolute bottom-0 left-0 right-0 flex max-h-[85vh] flex-col rounded-t-2xl bg-white">
            <FilterSidebar
              variant="mobile"
              filters={filters}
              setFilters={setFilters}
              filterOptions={filterOptions}
              journeys={journeys}
              onClose={close}
              resultCount={resultCount}
            />
          </div>
        </div>
      )}

      {/* SORT SHEET */}
      {openSheet === "sort" && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={close}
          />
          <div className="absolute bottom-0 left-0 right-0 flex max-h-[85vh] flex-col rounded-t-2xl bg-white">
            <div className="flex items-center justify-between border-b border-[#E8E8E8] px-4 py-3">
              <span className="text-base font-semibold">Sort By</span>
              <button onClick={close}>
                <X size={18} className="text-[#555]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSort(option);
                    close();
                  }}
                  className={`block w-full rounded-lg px-3 py-3 text-left text-sm ${
                    sort === option
                      ? "bg-[#f5f5ff] font-semibold text-[#2f2d89]"
                      : "text-[#444]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
