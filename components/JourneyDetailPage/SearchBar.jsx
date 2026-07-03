"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import FindJourneyMobile from "@/components/HomePage/FindYourJourney/FindYourJourneyMobile";
import SearchHeader from "../SearchHeader";

function ListingSearchForm() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  const toggle = (key) =>
    setActiveDropdown((prev) => (prev === key ? null : key));

  const toggleDest = (d) =>
    setSelectedDestinations((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );

  const toggleMonth = (m) =>
    setSelectedMonths((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m],
    );

  const destLabel = selectedDestinations.length
    ? selectedDestinations.slice(0, 2).join(", ") +
      (selectedDestinations.length > 2
        ? ` +${selectedDestinations.length - 2}`
        : "")
    : "Where do you want to go?";

  const whenLabel = selectedMonths.length
    ? selectedMonths.slice(0, 2).join(", ") +
      (selectedMonths.length > 2 ? ` +${selectedMonths.length - 2}` : "")
    : "When do you want to travel?";

  const budgetLabel = selectedBudget || "How much do you want to spend?";

  return (
    <div className="border-2 border-[#1A1A1A] rounded-xl px-6 py-4 my-6 bg-white">
      <div className="flex gap-4">
        {/* WHERE */}
        <button
          onClick={() => toggle("dest")}
          className="flex h-[2.4vw] flex-1 items-center justify-between rounded border border-gray-300 bg-white px-4"
        >
          <span
            className={`text-[0.75vw] truncate ${!selectedDestinations.length ? "text-gray-400" : "text-[#1a1a1a]"}`}
          >
            {destLabel}
          </span>
          {activeDropdown === "dest" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {/* WHEN */}
        <button
          onClick={() => toggle("when")}
          className="flex h-[2.4vw] flex-1 items-center justify-between rounded border border-gray-300 bg-white px-4"
        >
          <span
            className={`text-[0.75vw] truncate ${!selectedMonths.length ? "text-gray-400" : "text-[#1a1a1a]"}`}
          >
            {whenLabel}
          </span>
          {activeDropdown === "when" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {/* BUDGET */}
        <button
          onClick={() => toggle("budget")}
          className="flex h-[2.4vw] flex-1 items-center justify-between rounded border border-gray-300 bg-white px-4"
        >
          <span
            className={`text-[0.75vw] truncate ${!selectedBudget ? "text-gray-400" : "text-[#1a1a1a]"}`}
          >
            {budgetLabel}
          </span>
          {activeDropdown === "budget" ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </button>

        {/* CTA */}
        <button className="h-[2.4vw] min-w-[10.5vw] rounded-full bg-[#2E348D] text-[0.85vw] text-white transition hover:bg-[#252b78] shrink-0">
          Find Your Journey
        </button>
      </div>

      {/* WHERE DROPDOWN */}
      {activeDropdown === "dest" && (
        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
          <h3 className="mb-3 text-[0.85vw] font-semibold">
            Popular Destinations
          </h3>
          <div className="flex flex-wrap gap-2">
            {destinations.map((d) => (
              <button
                key={d}
                onClick={() => toggleDest(d)}
                className={`rounded-full border px-4 py-1 text-[0.72vw] transition-all ${
                  selectedDestinations.includes(d)
                    ? "border-[#2E348D] bg-[#F5EFE8] text-[#2E348D]"
                    : "border-gray-300 bg-white text-[#444]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* WHEN DROPDOWN */}
      {activeDropdown === "when" && (
        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
          <h3 className="mb-3 text-[0.85vw] font-semibold">
            Pick Month of Travel
          </h3>
          <div className="flex flex-wrap gap-2">
            {months.map((m) => (
              <button
                key={m}
                onClick={() => toggleMonth(m)}
                className={`rounded-full border px-4 py-1 text-[0.72vw] transition-all ${
                  selectedMonths.includes(m)
                    ? "border-[#2E348D] bg-[#F5EFE8] text-[#2E348D]"
                    : "border-gray-300 bg-white text-[#444]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* BUDGET DROPDOWN */}
      {activeDropdown === "budget" && (
        <div className="mt-3 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
          <h3 className="mb-3 text-[0.85vw] font-semibold">
            Select Budget Range
          </h3>
          <div className="flex flex-wrap gap-2">
            {budgets.map((b) => (
              <button
                key={b}
                onClick={() => {
                  setSelectedBudget(b);
                  setActiveDropdown(null);
                }}
                className={`rounded-full border px-4 py-1 text-[0.72vw] transition-all ${
                  selectedBudget === b
                    ? "border-[#2E348D] bg-[#F5EFE8] text-[#2E348D]"
                    : "border-gray-300 bg-white text-[#444]"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFindJourneyMobile, setShowFindJourneyMobile] = useState(false);

  return (
    <section className="w-full overflow-hidden">
      {/* Top Bar */}
      <SearchHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setShowFindJourneyMobile={setShowFindJourneyMobile}
      />

      {showFindJourneyMobile && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
          <FindJourneyMobile onClose={() => setShowFindJourneyMobile(false)} />
        </div>
      )}
    </section>
  );
}
