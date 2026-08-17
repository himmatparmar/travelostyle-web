"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Plus, Minus, ChevronDown, ChevronUp, Check } from "lucide-react";

const FilterSection = ({ title, children, defaultOpen = true, mobile = false }) => {
  const [open, setOpen] = useState(defaultOpen);


  return (


    <div className={mobile ? "border-b border-[#E5E5E5] py-4" : "border-b border-[#E5E5E5] py-[1.4vw]"}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between"
      >
        <span className={mobile ? "text-base font-semibold text-ink" : "text-[1.05vw] font-semibold text-ink"}>
          {title}
        </span>

        <div className={mobile ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F2E2DA]" : "flex h-[1.9vw] w-[1.9vw] shrink-0 items-center justify-center rounded-full bg-[#F2E2DA]"}>
          {open ? (
            <Minus size={14} className="text-ink" />
          ) : (
            <Plus size={14} className="text-ink" />
          )}
        </div>
      </button>

      {open && <div className={mobile ? "mt-3" : "mt-[1vw]"}>{children}</div>}
    </div>
  );
};

const CheckboxItem = ({ label, checked, onChange, count = 0, mobile = false }) => {
  if (mobile) {
    return (
      <label className="flex items-center gap-3 py-2 cursor-pointer">
        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center leading-none">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="peer block h-full w-full cursor-pointer appearance-none rounded-none border-[1.5px] border-ink checked:bg-ink"
          />
          <Check
            size={13}
            strokeWidth={3}
            className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100"
          />
        </span>

        <span className="text-sm leading-5 text-[#333]">
          {label} <span className="text-[#999]">({count})</span>
        </span>
      </label>
    );
  }

  return (
    <label className="flex items-center gap-[0.6vw] py-[0.45vw] cursor-pointer">
      <span className="relative flex h-[1.1vw] w-[1.1vw] shrink-0 items-center justify-center leading-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer block h-full w-full cursor-pointer appearance-none rounded-none border-[1.5px] border-ink checked:bg-ink"
        />
        <Check
          size={11}
          strokeWidth={3}
          className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100"
        />
      </span>

      <span className="text-[0.85vw] leading-[1.1vw] text-[#333]">
        {label} <span className="text-[#999]">({count})</span>
      </span>
    </label>
  );
};

const MonthPill = ({ label, active, onClick, mobile = false }) => {
  if (mobile) {
    return (
      <button
        onClick={onClick}
        className={`rounded-full border px-4 py-2 text-sm
        ${
          active
            ? "bg-[#F5DFC9] text-[#6A5B4E] border-[#F5DFC9]"
            : "border-[#D9D9D9] text-[#444]"
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-[0.9vw] py-[0.4vw] text-[0.8vw]
      ${
        active
          ? "bg-[#F5DFC9] text-[#6A5B4E] border-[#F5DFC9]"
          : "border-[#D9D9D9] text-[#444]"
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
  variant = "desktop",
  onClose,
  resultCount,
}) {
  const mobile = variant === "mobile";

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
          return item.category?.includes(value);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sessionFindJourneyData = sessionStorage.getItem("journeyData");

    if (!sessionFindJourneyData) return;

    try {
      const parsedJourneyData = JSON.parse(sessionFindJourneyData);

      setFilters((prev) => {
        const sessionJourneyFilters =
          parsedJourneyData.filters || parsedJourneyData;

        const selectedStyle =
          sessionJourneyFilters.travelType || sessionJourneyFilters.style || "";

        const matchingStyle = filterOptions.style?.find(
          (opt) =>
            opt.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            selectedStyle.toLowerCase().replace(/[^a-z0-9]/g, ""),
        );

        // Month
        const selectedMonths =
          sessionJourneyFilters.months || sessionJourneyFilters.month || [];

        // Region
        const selectedRegion =
          sessionJourneyFilters.region || sessionJourneyFilters.regions || [];

        // Pricing
        const selectedPricing = sessionJourneyFilters.pricing || [];

        // Duration
        const selectedDuration = sessionJourneyFilters.duration || [];

        // Offer
        const selectedOffer = sessionJourneyFilters.offer || [];

        // Category
        const selectedCategory = sessionJourneyFilters.category || [];

        return {
          ...prev,

          // Region
          region: Array.isArray(selectedRegion)
            ? selectedRegion
            : selectedRegion
              ? [selectedRegion]
              : prev.region,

          // Travel Style
          style: matchingStyle
            ? [matchingStyle]
            : Array.isArray(selectedStyle)
              ? selectedStyle
              : prev.style,

          // Month
          month: Array.isArray(selectedMonths)
            ? selectedMonths
            : selectedMonths
              ? [selectedMonths]
              : prev.month,

          // Pricing
          pricing: Array.isArray(selectedPricing)
            ? selectedPricing
            : selectedPricing
              ? [selectedPricing]
              : prev.pricing,

          // Duration
          duration: Array.isArray(selectedDuration)
            ? selectedDuration
            : selectedDuration
              ? [selectedDuration]
              : prev.duration,

          // Offer
          offer: Array.isArray(selectedOffer)
            ? selectedOffer
            : selectedOffer
              ? [selectedOffer]
              : prev.offer,

          // Category
          category: Array.isArray(selectedCategory)
            ? selectedCategory
            : selectedCategory
              ? [selectedCategory]
              : prev.category,
        };
      });
    } catch (error) {
      console.error("Error reading journeyData from sessionStorage:", error);
    }
  }, [filterOptions.style, setFilters]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("journeyData");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const sections = (
    <>
      {/* REGION (Drupal: country) */}
      <FilterSection title="Region" mobile={mobile}>
        {(filterOptions.region || []).map((item) => (
          <CheckboxItem
            key={item}
            label={item}
            count={getCount("region", item)}
            checked={filters.region.includes(item)}
            onChange={() => toggleFilter("region", item)}
            mobile={mobile}
          />
        ))}
      </FilterSection>

      {/* TRAVEL STYLE (Drupal: tags) */}
      <FilterSection title="Travel Style" mobile={mobile}>
        {(filterOptions.style || []).map((item) => (
          <CheckboxItem
            key={item}
            label={item}
            count={getCount("style", item)}
            checked={filters.style.includes(item)}
            onChange={() => toggleFilter("style", item)}
            mobile={mobile}
          />
        ))}
      </FilterSection>

      {/* PRICING */}
      <FilterSection title="Pricing" mobile={mobile}>
        {["$3000 under", "$3,000-$8,000", "$10,000+"].map((item) => (
          <CheckboxItem
            key={item}
            label={item}
            count={getCount("pricing", item)}
            checked={filters.pricing.includes(item)}
            onChange={() => toggleFilter("pricing", item)}
            mobile={mobile}
          />
        ))}
      </FilterSection>

      {/* DURATION */}
      <FilterSection title="Duration" mobile={mobile}>
        {["5–8 Days", "8–15 Days", "15–25 Days", "25+ Days"].map((item) => (
          <CheckboxItem
            key={item}
            label={item}
            count={getCount("duration", item)}
            checked={filters.duration.includes(item)}
            onChange={() => toggleFilter("duration", item)}
            mobile={mobile}
          />
        ))}
      </FilterSection>

      {/* OFFERS */}
      <FilterSection title="Offers" mobile={mobile}>
        {(filterOptions.offer || []).map((item) => (
          <CheckboxItem
            key={item}
            label={item}
            count={getCount("offer", item)}
            checked={filters.offer.includes(item)}
            onChange={() => toggleFilter("offer", item)}
            mobile={mobile}
          />
        ))}
      </FilterSection>

      {/* CATEGORY */}
      <FilterSection title="Category" mobile={mobile}>
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
            mobile={mobile}
          />
        ))}

        {(filterOptions.category || []).length > 7 && (
          <button
            onClick={() => setShowMoreCategories((prev) => !prev)}
            className={mobile ? "mt-2 flex items-center gap-1 text-sm text-ink" : "mt-[0.6vw] flex items-center gap-[0.3vw] text-[0.8vw] text-ink"}
          >
            {showMoreCategories ? (
              <>
                See Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                See {(filterOptions.category || []).length - 7} more{" "}
                <ChevronDown size={14} />
              </>
            )}
          </button>
        )}
      </FilterSection>

      {/* MONTH */}
      <FilterSection title="Month" mobile={mobile}>
        <div className={mobile ? "flex flex-wrap gap-2" : "flex flex-wrap gap-[0.4vw]"}>
          {(filterOptions.month || []).map((month) => (
            <MonthPill
              key={month}
              label={month}
              active={filters.month.includes(month)}
              onClick={() => toggleFilter("month", month)}
              mobile={mobile}
            />
          ))}
        </div>
      </FilterSection>
    </>
  );

  if (mobile) {
    return (
      <div className="flex h-full flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#E8E8E8] px-4 py-3">
          <span className="text-base font-semibold">Filters</span>

          <button onClick={clearAll} className="text-sm text-[#2f2d89]">
            Clear All
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          {/* DISPLAY ALL OFFERS */}
          <div className="py-4">
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#2f2d89] px-3 py-2">
              <input
                type="checkbox"
                checked={filters.displayAllOffers}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    displayAllOffers: e.target.checked,
                  }))
                }
                className="h-4 w-4 cursor-pointer accent-[#2f2d89]"
              />

              <span className="text-sm font-medium text-[#2f2d89]">
                Display All Offers
              </span>
            </label>
          </div>

          {sections}
        </div>

        {/* FOOTER */}
        <div className="border-t border-[#E8E8E8] px-4 py-3">
          <button
            onClick={onClose}
            className="w-full rounded-full bg-[#2f2d89] py-3 text-sm font-semibold text-white"
          >
            Show {typeof resultCount === "number" ? resultCount : ""} Trips
          </button>
        </div>
      </div>
    );
  }

  return (
    <aside className="w-[300px] shrink-0">
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
      <div className="rounded-[1vw] border border-[#000000] px-[1vw] py-[0.3vw]">
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
              className="mt-[0.6vw] flex items-center gap-[0.3vw] text-[0.8vw] text-ink"
            >
              {showMoreCategories ? (
                <>
                  See Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  See {(filterOptions.category || []).length - 7} more{" "}
                  <ChevronDown size={14} />
                </>
              )}
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
