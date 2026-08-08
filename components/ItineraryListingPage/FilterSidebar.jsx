"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  

  return (
    

    <div className="border-b border-[#E8E8E8] py-[1.2vw]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between"
      >
        <span className="text-[0.85vw] font-semibold text-[#1a1a1a] uppercase tracking-[0.06em]">
          {title}
        </span>

        <span className="text-[1vw] text-[#888]">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="mt-[0.8vw]">{children}</div>}
    </div>
  );
};

const CheckboxItem = ({ label, checked, onChange, count = 0 }) => {
  return (
    <label className="flex items-center justify-between py-[0.3vw] cursor-pointer">
      <div className="flex items-center gap-[0.5vw]">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="accent-[#2f2d89]"
        />

        <span className="text-[0.78vw] text-[#444]">{label}</span>
      </div>

      <span className="text-[0.72vw] text-[#888]">({count})</span>
    </label>
  );
};

const MonthPill = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-[0.7vw] py-[0.25vw] text-[0.72vw]
      ${
        active ? "bg-[#2f2d89] text-white border-[#2f2d89]" : "border-[#d0d0d0] text-[#444]"
      }`}
    >
      {label}
    </button>
  );
};
export default function FilterSidebar({
  filters,
  setFilters,
  filterOptions,
  journeys = [],
}) {

  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();

 useEffect(() => {
  const regionParam = searchParams.get("region");

  if (regionParam) {
    setFilters((prev) => ({
      ...prev,
      region: [regionParam],
    }));
  }
}, [searchParams, setFilters]);

  // ================= CLEAR =================
  const clearAll = () => {
    setFilters({
      displayAllOffers: true,
      region: [],
      style: [],
      offer: [],
      category: [],
      month: [],
      pricing: [], // ✅ added
      duration: [], // ✅ added
    });
  };

  // ================= TOGGLE =================
  const toggleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };
  const getCount = (key, value) => {
    return journeys.filter((item) => {
      switch (key) {
        case "region":
          return item.region === value;

        case "style":
          return item.tags?.includes(value);

        case "offer":
          return item.offer === value;

        case "category":
          return item.category === value;

        case "month":
          return item.month === value;

        case "pricing":
          if (value === "$3000 under") {
            return item.price < 3000;
          }

          if (value === "$3,000-$8,000") {
            return item.price >= 3000 && item.price <= 8000;
          }

          if (value === "$10,000+") {
            return item.price >= 10000;
          }

          return false;

        case "duration": {
          const days = parseInt(item.days?.split(" ")[0] || 0);

          if (value === "5–8 Days") {
            return days >= 5 && days <= 8;
          }

          if (value === "8–15 Days") {
            return days >= 8 && days <= 15;
          }

          if (value === "15–25 Days") {
            return days >= 15 && days <= 25;
          }

          if (value === "25+ Days") {
            return days >= 25;
          }

          return false;
        }

        default:
          return false;
      }
    }).length;
  };
 const filteredJourneys = journeys.filter((item) => {
  const journeyRegion =
    typeof item.region === "string"
      ? item.region.trim().toLowerCase()
      : item.region?.name?.trim().toLowerCase();

  const selectedRegions = filters.region.map((region) =>
    region.trim().toLowerCase()
  );

  const regionMatch =
    selectedRegions.length === 0 ||
    selectedRegions.includes(journeyRegion);

  return regionMatch;
});
  return (
    <aside className="w-[220px] shrink-0">
      {/* HEADER */}
      <div className="flex items-center justify-between pb-[1vw] border-b border-[#E8E8E8]">
        <span className="text-[0.85vw] font-semibold">Filters</span>

        <button onClick={clearAll} className="text-[0.75vw] text-[#2f2d89]">
          Clear All
        </button>
      </div>

      {/* DISPLAY ALL OFFERS */}
      <div className="py-[1vw] mb-[1vw]">
        <label className="flex cursor-pointer items-center gap-[0.6vw] rounded-[0.4vw] border border-[#2f2d89] px-[0.7vw] py-[0.45vw]">
          <input
            type="checkbox"
            checked={filters.displayAllOffers}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                displayAllOffers: e.target.checked,
              }))
            }
            className="h-[0.85vw] w-[0.85vw] cursor-pointer accent-[#2f2d89]"
          />

          <span className="text-[0.78vw] font-medium text-[#2f2d89]">
            Display All Offers
          </span>
        </label>
      </div>

      {/* MAIN FILTER WRAPPER */}
      <div className="rounded-[0.4vw] border border-[#000] px-[0.7vw] py-[0.45vw]">
        {/* REGION (Drupal: country) */}
        <FilterSection title="Region">
          {(filterOptions.region || []).map((item) => (
            <CheckboxItem
              key={item}
              label={item}
              count={getCount("region", item)}
              checked={filters.region.includes(item)}
              onChange={() => toggleFilter("region", item)}
            />
          ))}
        </FilterSection>

        {/* TRAVEL STYLE (Drupal: tags) */}
        <FilterSection title="Travel Style">
          {(filterOptions.style || []).map((item) => (
            <CheckboxItem
              key={item}
              label={item}
              count={getCount("style", item)}
              checked={filters.style.includes(item)}
              onChange={() => toggleFilter("style", item)}
            />
          ))}
        </FilterSection>

        {/* PRICING */}
        <FilterSection title="Pricing">
          {["$3000 under", "$3,000-$8,000", "$10,000+"].map((item) => (
            <CheckboxItem
              key={item}
              label={item}
              count={getCount("pricing", item)}
              checked={filters.pricing.includes(item)}
              onChange={() => toggleFilter("pricing", item)}
            />
          ))}
        </FilterSection>

        {/* DURATION */}
        <FilterSection title="Duration">
          {["5–8 Days", "8–15 Days", "15–25 Days", "25+ Days"].map((item) => (
            <CheckboxItem
              key={item}
              label={item}
              count={getCount("duration", item)}
              checked={filters.duration.includes(item)}
              onChange={() => toggleFilter("duration", item)}
            />
          ))}
        </FilterSection>

        {/* OFFERS */}
        <FilterSection title="Offers">
          {(filterOptions.offer || []).map((item) => (
            <CheckboxItem
              key={item}
              label={item}
              count={getCount("offer", item)}
              checked={filters.offer.includes(item)}
              onChange={() => toggleFilter("offer", item)}
            />
          ))}
        </FilterSection>

        {/* CATEGORY */}
        <FilterSection title="Category">
          {(showMoreCategories
            ? filterOptions.category || []
            : (filterOptions.category || []).slice(0, 7)
          ).map((item) => (
            <CheckboxItem
              key={item}
              label={item}
              count={getCount("category", item)}
              checked={filters.category.includes(item)}
              onChange={() => toggleFilter("category", item)}
            />
          ))}

          {(filterOptions.category || []).length > 7 && (
            <button
              onClick={() => setShowMoreCategories((prev) => !prev)}
              className="text-[0.75vw] text-[#1a1a1a] mt-2 flex items-center gap-[0.3vw]"
            >
              {showMoreCategories
                ? "See Less ▲"
                : `See ${(filterOptions.category || []).length - 7} more ▼`}
            </button>
          )}
        </FilterSection>

        {/* MONTH */}
        <FilterSection title="Month">
          <div className="flex flex-wrap gap-[0.4vw]">
            {(filterOptions.month || []).map((month) => (
              <MonthPill
                key={month}
                label={month}
                active={filters.month.includes(month)}
                onClick={() => toggleFilter("month", month)}
              />
            ))}
          </div>
        </FilterSection>
      </div>
    </aside>
  );
}