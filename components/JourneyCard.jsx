"use client";

import { CalendarDays, CirclePlus, Info, MapPinned } from "lucide-react";
import JourneyCardImage from "@/components/JourneyCardImage";

const TAG_COLORS = {
  "group journey": "bg-[#E1EEDB] text-[#1A1A1A]",
  "private journey": "bg-[#FFDDBD] text-[#1A1A1A]",
  "tailormade journey": "bg-[#FFDDBD] text-[#1A1A1A]",
};
const DEFAULT_TAG_COLOR = "bg-[#EAEBCB] text-[#1A1A1A]";

function getTagColor(tag) {
  return TAG_COLORS[tag?.toLowerCase().trim()] || DEFAULT_TAG_COLOR;
}

function addTripToCompare(trip) {
  const existingTrips = JSON.parse(localStorage.getItem("compareTrips") || "[]");
  const isAddingTrip = localStorage.getItem("isAddingTrip") === "true";
  const alreadyExists = existingTrips.some((item) => item.id === trip.id);

  if (alreadyExists) {
    localStorage.removeItem("isAddingTrip");
    window.location.assign("/comparison");
    return;
  }

  if (existingTrips.length >= 3) {
    alert("You can compare up to 3 trips only.");
    return;
  }

  const compareTrip = {
    id: trip.id,
    title: trip.title,
    image: trip.image,
    days: trip.days,
    duration: trip.days,
    destinations: trip.destinations,
    offer: trip.offer,
    price: `$${Number(trip.price).toLocaleString()}`,
    viewTripUrl: trip.viewTripUrl,
    itinerary: [],
    stays: [],
    region: "",
    travelMode: "-",
  };

  localStorage.setItem("compareTrips", JSON.stringify([...existingTrips, compareTrip]));

  if (isAddingTrip) {
    localStorage.removeItem("isAddingTrip");
  }

  window.location.assign("/comparison");
}

// Single journey card used across the site (home carousel, journey-type
// listing grids, "other destinations" rail). `variant` only changes the
// outer sizing/background so it drops into either a horizontal scroller
// or a CSS grid — the content markup is identical everywhere so a fix here
// fixes it everywhere.
export default function JourneyCard({ trip, variant = "carousel", onCompare }) {
  const handleAddToCompare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (onCompare) {
        onCompare(trip);
      } else {
        addTripToCompare(trip);
      }
    } catch (error) {
      console.error("Failed to add trip to comparison:", error);
    }
  };

  return (
    <div
      className={
        variant === "carousel"
          ? "relative flex w-[85vw] min-w-[85vw] shrink-0 cursor-pointer flex-col px-8 pt-4 pb-12 max-md:snap-center md:w-[390px] md:min-w-[390px] h-[590px] md:h-[585px] md:pt-3 md:pb-11"
          : "relative flex w-[85vw] min-w-[85vw] shrink-0 cursor-pointer flex-col px-4 pt-4 pb-5 max-md:snap-center md:w-full md:min-w-0 md:max-w-[390px] h-[586px] md:h-[585px] md:px-6 md:pt-3 md:pb-11"
      }
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/Union-it.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="mb-3 flex min-h-[1.5rem] flex-wrap gap-2 md:mb-3 md:min-h-[28px] md:gap-2">
        {trip.tags?.map((tag) => (
          <span
            key={tag}
            className={`rounded-[2px] px-2 py-[2px] text-[10px] leading-[16px] tracking-[0.05em] font-normal md:rounded-[5px] md:px-3 md:py-1 md:text-[14px] md:font-medium ${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-[213px] md:w-full md:rounded-[3px]">
        <JourneyCardImage src={trip.image} alt={trip.title} />
      </div>

      <div className="flex flex-1 flex-col pt-3 md:pt-4">
        <h3 className="line-clamp-2 min-h-[2.6em] text-lg font-semibold leading-[1.3] text-[#232323] md:text-[21px]">
          {trip.title}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-[3.1em] text-sm leading-[1.55] text-[#666666] md:text-[11px]">
          {trip.desc}
        </p>
        <div className="mt-3 flex items-center gap-4 text-xs text-[#717171] md:mt-3 md:gap-4 md:text-[8px]">
          <div className="flex items-center gap-1 md:gap-1">
            <CalendarDays size={12} strokeWidth={1.8} />
            {trip.days}
          </div>

          <div className="flex items-center gap-1 md:gap-1">
            <MapPinned size={12} strokeWidth={1.8} />
            {trip.destinations}
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between md:mt-4">
          <div className="flex items-end gap-1 md:gap-1">
            <div className="flex flex-col">
              <span className="text-[11px] leading-[1.15] text-[#7B7B7B] md:text-[9px]">
                from
              </span>
              <h4 className="text-2xl font-semibold leading-none text-[#1D1D1D] md:text-[20px]">
                ${Number(trip.price).toLocaleString()}*
              </h4>
            </div>

            <span className="mb-1 text-[10px] leading-[1.15] text-[#7B7B7B] md:mb-[2px] md:text-[8px]">
              /person
              <br />
              double occupancy*
            </span>
          </div>

          <a
            href={trip.viewTripUrl}
            onClick={(e) => e.stopPropagation()}
            className="flex h-10 items-center justify-center rounded-full bg-[#2D3482] px-2 md:px-5 text-sm font-semibold text-white w-auto md:h-[29px] md:w-[93px] md:px-0 md:text-[11px]"
          >
            {trip.viewTripText || "View Trip"}
          </a>
        </div>

        <div className="mt-4 min-h-9 md:mt-4 md:min-h-8">
          {trip.offer && (
            <div className="flex items-center gap-2 rounded-md bg-[#F4E5DA] px-3 py-2 text-xs text-[#65574D] md:gap-1.5 md:rounded-[5px] md:px-2.5 md:py-2 md:text-[8px]">
              <Info size={11} className="shrink-0" />
              <span className="line-clamp-1">{trip.offer}</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCompare}
          className="mt-4 flex items-center gap-2 text-sm text-[#4E4E4E] md:mt-4 md:gap-1.5 md:text-[11px]"
        >
          <CirclePlus size={14} strokeWidth={1.8} />
          <span>Add to Compare</span>
        </button>
      </div>
    </div>
  );
}
