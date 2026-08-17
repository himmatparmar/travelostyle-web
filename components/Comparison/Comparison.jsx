"use client";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/config";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

/* ---------------- data helpers (unchanged) ---------------- */

function getLocation(id, included) {
  const node = included.find(
    (i) => i.type === "node--location" && i.id === id
  );
  return node?.attributes?.title || "";
}

function getStartCity(journey, included) {
  const id = journey.relationships?.field_starts_in?.data?.id;
  return getLocation(id, included);
}

function getEndCity(journey, included) {
  const id = journey.relationships?.field_ends_in?.data?.id;
  return getLocation(id, included);
}

function getItinerary(journey, included) {
  const containerId =
    journey.relationships?.field_journey_tabs_section?.data?.[0]?.id;
  const container = included.find((i) => i.id === containerId);
  const tabRefs =
    container?.relationships?.field_section_tabs?.data || [];

  const itineraryTab = tabRefs
    .map((r) => included.find((i) => i.id === r.id))
    .find((t) => t?.type === "paragraph--itinerary_tab");

  if (!itineraryTab) return [];

  const dayRefs = itineraryTab.relationships?.field_days?.data || [];

  return dayRefs
    .map((d) => included.find((i) => i.id === d.id))
    .filter(Boolean)
    .map((day) => ({
      day: day.attributes?.field_day_number,
      title: day.attributes?.field_day_title || "",
    }));
}

function getStays(journey, included) {
  const containerId =
    journey.relationships?.field_journey_tabs_section?.data?.[0]?.id;
  const container = included.find((i) => i.id === containerId);
  const tabRefs =
    container?.relationships?.field_section_tabs?.data || [];

  const staysTab = tabRefs
    .map((r) => included.find((i) => i.id === r.id))
    .find((t) => t?.type === "paragraph--stays_tab");

  if (!staysTab) return [];

  const hotelRefs = staysTab.relationships?.field_hotels?.data || [];

  return hotelRefs
    .map((h) => included.find((i) => i.id === h.id))
    .filter(Boolean)
    .map((hotel) => ({
      name: hotel.attributes?.title || "",
    }));
}

/* ---------------- row config ----------------
   One source of truth for row heights. The label column (desktop)
   and every card cell read the SAME height classes, so everything
   stays aligned automatically — no magic pt-[300px] offsets.
   Change a height here and both sides update together.          */

const ROWS = [
  { key: "duration", label: "Duration", h: "h-10 md:h-10" },
  { key: "destinations", label: "No. of Destinations", h: "h-10 md:h-10" },
  { key: "itinerary", label: "Itinerary", h: "h-20 md:h-20" },
  { key: "stays", label: "Stays", h: "h-10 md:h-10" },
  { key: "region", label: "Region", h: "h-10 md:h-10" },
  { key: "offer", label: "Available Offer", h: "h-14 md:h-14" },
  { key: "price", label: "Price", h: "h-32 md:h-20" },
  { key: "travel", label: "Way to Travel", h: "h-44 md:h-44" },
];

/* Height of the card header (image + title) so the desktop
   label column can offset itself by the same amount. */
const CARD_HEADER = "h-[248px] md:h-[288px]";

/* Max trips allowed in comparison. Header copy says "up to 3" —
   badhana ho to yahan change karo aur heading text bhi update karo. */
const MAX_COMPARE_TRIPS = 30;

const INCLUDE = [
  "field_journey_image.field_media_image",
  "field_journey_tag",
  "field_month",
  "field_starts_in",
  "field_ends_in",
  "field_best_seasons",
  "field_pace",
  "field_journey_tabs_section",
  "field_journey_tabs_section.field_section_tabs",
  "field_journey_tabs_section.field_section_tabs.field_days",
  "field_journey_tabs_section.field_section_tabs.field_days.field_stay",
  "field_journey_tabs_section.field_section_tabs.field_hotels",
  "field_journey_tabs_section.field_section_tabs.field_hotels.field_featured_image.field_media_image",
  "field_journey_tabs_section.field_section_tabs.field_hotels.field_gallery.field_media_image",
].join(",");

export default function TripComparison() {
  const [trips, setTrips] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const router = useRouter();
  const scrollRef = useRef(null);

 useEffect(() => {
  let cancelled = false;

  async function loadComparisonTrips() {
    try {
      // Read the latest value from localStorage
      const storedTrips = JSON.parse(
        localStorage.getItem("compareTrips") || "[]"
      );

      console.log(
        "Comparison page - localStorage trips:",
        storedTrips
      );

      if (!storedTrips.length) {
        if (!cancelled) {
          setTrips([]);
        }
        return;
      }

      const res = await fetch(
        `${API_BASE_URL}/jsonapi/node/journey?include=${INCLUDE}`
      );

      const json = await res.json();

      const data = json.data || [];
      const included = json.included || [];

      const enrichedTrips = storedTrips.map((trip) => {
        const journey = data.find(
          (item) => item.id === trip.id
        );

        // If Drupal doesn't return this journey,
        // keep the locally saved trip.
        if (!journey) {
          return trip;
        }

        return {
          ...trip,
          startCity: getStartCity(journey, included),
          endCity: getEndCity(journey, included),
          tabItinerary: getItinerary(journey, included),
          tabStays: getStays(journey, included),
        };
      });

      if (!cancelled) {
        setTrips(enrichedTrips);
      }

      console.log(
        "Comparison page - enriched trips:",
        enrichedTrips
      );
    } catch (err) {
      console.error(
        "Comparison trips loading error:",
        err
      );

      // Important:
      // Even if Drupal API fails, show the trips
      // that were already saved in localStorage.
      const fallbackTrips = JSON.parse(
        localStorage.getItem("compareTrips") || "[]"
      );

      if (!cancelled) {
        setTrips(fallbackTrips);
      }
    }
  }

  loadComparisonTrips();

  return () => {
    cancelled = true;
  };
}, []);
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateArrows = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 5
      );
    };

    updateArrows();
    container.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [trips]);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -340, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 340, behavior: "smooth" });

  const removeTrip = (tripId) => {
    const updatedTrips = trips.filter((trip) => trip.id !== tripId);
    setTrips(updatedTrips);
    localStorage.setItem("compareTrips", JSON.stringify(updatedTrips));
  };

  /* Renders the content of one comparison row for a trip.
     The MOBILE label lives inside the cell (md:hidden), so on
     phones every value is self-explanatory without the side column. */
  const renderRowContent = (trip, key) => {
    switch (key) {
    case "duration":
  return (
    <div
      className="
        text-sm
        md:w-[156px]
        md:h-[13px]
        justify-center
        md:leading-[13px]
        md:overflow-hidden
      "
    >
      {trip.days}
    </div>
  );
    case "destinations":
  return (
    <div
      className="
        text-sm
        md:w-[135px]
        md:h-[13px]
        md:leading-[13px]
        md:overflow-hidden
      "
    >
      {trip.destinations}
    </div>
  );

      case "itinerary":
        return (
          <div className="text-sm space-y-0.5 overflow-y-auto h-full pr-1">
           {trip.tabItinerary?.map((day) => (
  <div
    key={day.day}
    className="truncate text-[18px] leading-[18px] tracking-[0.05em]"
  >
    <span className="font-semibold">
      Day {day.day}:
    </span>{" "}
    <span className="font-nohemi">
      {day.title}
    </span>
  </div>
))}
          </div>
        );

     case "stays":
  return (
    <div className="text-sm space-y-0.5 overflow-y-auto h-full pr-1">
      {trip.tabStays?.map((stay) => (
        <div
          key={stay.name}
          className="
            truncate
            md:w-[224px]
            md:h-[13px]
            md:leading-[13px]
            md:overflow-hidden
          "
        >
          {stay.name}
        </div>
      ))}
    </div>
  );

      case "region":
        return (
          <div className="text-sm">
            {trip.startCity} → {trip.endCity}
          </div>
        );

   case "offer":
  return (
    <div
      className="
        text-sm
        md:w-[298px]
        md:h-[37px]
        md:overflow-hidden
      "
    >
      <div>Offer price {trip.price}</div>
      <div>{trip.offerprice}</div>
    </div>
  );
      case "price":
        return (
<div
  className="
    bg-[#FFF3E8]
    
    px-3 py-3 
    md:p-8
    flex flex-col md:flex-row
    md:justify-between
    md:items-center
    gap-2
    h-full
    md:w-[calc(100%+32px)]
    md:-ml-4
    md:h-[61px]
  "
>            <div className="text-left min-w-0">
              <div className="text-xs text-gray-600">from </div>
              <div className="font-bold text-lg leading-tight truncate">
                ${trip.price}* / Person
              </div>
              <div className="text-xs text-gray-600 mt-1">
                double occupancy*
              </div>
            </div>
            <button className="bg-[#2C3078] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0 self-start md:self-auto">
  View Trip
</button>
          </div>
        );

      case "travel":
        return (
          <div className="text-sm">
            <div>{trip.travelMode}</div>
            <hr className="my-2 border-gray-300" />
           <div className="flex flex-col items-center md:items-start md:flex-row md:flex-wrap gap-1 md:gap-x-2 md:gap-y-1 py-1 text-center md:text-left">
  <span className="font-medium">Group Journey</span>
  <a
    href={`/trips/${trip.id}/availability`}
    className="font-bold underline text-sm"
  >
    Check Availability
  </a>
</div>
            <hr className="border-gray-300" />
          <div className="flex flex-col items-center md:items-center md:flex-row gap-1 md:gap-2 py-1 text-center md:text-left">
  <span className="font-medium whitespace-nowrap">
    Private Journey
  </span>

  <a
    href={`/trips/${trip.id}/private`}
    className="font-bold underline text-sm md:whitespace-nowrap"
  >
    Request Private Journey
  </a>
</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mb-8 font-nohemi">
      <h1 className="text-xl md:text-2xl font-bold mb-4 pt-6 md:pt-8 px-4 md:px-12">
        Compare Trips
      </h1>

      <div className="w-full max-w-[95%] md:max-w-[92%] border-2 border-gray-300 rounded-[10px] bg-white shadow-sm mb-6 mx-auto">
        {/* Header */}
<div className="flex w-full gap-2 md:gap-4 mt-4 md:mt-1 px-2 md:px-4 pb-6">          <h2 className="text-lg md:text-[20px] font-semibold text-gray-800">
            Selected Trips
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose up to 3 Trips to Compare
          </p>
        </div>

        <hr className="mt-3 border-gray-600" />

        <div className="flex gap-2 md:gap-4 mt-4 md:mt-1 px-2 md:px-4 pb-6">
          {/* Desktop label column — same ROWS config as the cards,
              so it can never drift out of alignment */}
          <div className="hidden md:block md:h-[700px] md:w-[150px] w-[130px] shrink-0">
            {/* spacer matching card header (image + title) */}
            <div className={CARD_HEADER} />
            {ROWS.map((row) => (
              <div
                key={row.key}
                className={`${row.h} flex text-[13px] font-bold ${
   row.key === "travel"
      ? "items-start pt-12"
      : "items-start pt-4"
  }`}
>
                {row.label}
              </div>
            ))}
          </div>
<div className="md:hidden w-[90px] min-w-[90px] shrink-0 sticky left-0 z-20 bg-white">
    <div className={CARD_HEADER} />

  {ROWS.map((row) => (
    <div
  key={row.key}
  className={`${row.h} flex items-start ${
    row.key === "travel" ? "pt-14" : "pt-4"
  }`}
>
      <span className="text-[11px] font-bold uppercase tracking-wide text-gray-400">
        {row.label}
      </span>
    </div>
  ))}
</div>

          {/* Scroll area */}
<div className="relative flex-1 min-w-0 w-0 flex items-center gap-2">
              {showLeftArrow && (
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="hidden md:block shrink-0 cursor-pointer z-10
                  absolute left-0 top-1/2 -translate-y-1/2
                  md:static md:translate-y-0"
              >
                <Image
                  src="/LeftArrow.svg"
                  alt=""
                  width={40}
                  height={24}
                />
              </button>
            )}

          <div
  ref={scrollRef}
  style={{ WebkitOverflowScrolling: "touch" }}
  className="w-0 min-w-0 flex-1 flex gap-3 md:gap-4
    overflow-x-auto
    snap-x snap-mandatory md:snap-none
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden"
>
              {/* Trip Cards */}
              {trips.map((trip) => (
                <div
                  key={trip.id}
               className="relative snap-center shrink-0
  w-[55vw] sm:w-[320px] md:w-[320px]
  md:h-[800px]
  rounded-[6px] p-3 md:p-4 bg-white
  border border-gray-300"
                >
                  <button
                    onClick={() => removeTrip(trip.id)}
                    aria-label={`Remove ${trip.title}`}
                    className="absolute top-1 right-1 z-20
                      w-8 h-8 rounded-full
                      bg-red-500 text-white flex items-center justify-center"
                  >
                    ×
                  </button>

                  {/* Card header: image + title, fixed height shared
                      with the label-column spacer */}
                  <div className={`${CARD_HEADER} flex flex-col`}>
                    <div className="relative h-[170px] md:h-[213px] rounded-lg overflow-hidden shrink-0">
                    <div className="relative h-[170px] md:w-[349px] md:h-[213px] overflow-hidden shrink-0 mx-auto">
  <Image
    src={trip.image}
    alt={trip.title}
    fill
    sizes="(max-width: 768px) 82vw, 349px"
    className="object-cover"
    unoptimized
  />
</div>
                    </div>
                    <h3 className="text-center font-semibold mt-2 line-clamp-2">
                      {trip.title}
                    </h3>
                  </div>

                  {/* Comparison rows */}
                  {ROWS.map((row) => (
  <div key={row.key} className={`${row.h} overflow-hidden`}>
    {renderRowContent(trip, row.key)}
  </div>
))}
                </div>
              ))}

              {/* Add trip card */}
              {trips.length < MAX_COMPARE_TRIPS && (
                
                <div
                // for navigating to previous page from compare trips
//                   onClick={() => {
//   localStorage.setItem("isAddingTrip", "true");

//  const returnPage =
//     sessionStorage.getItem("comparisonReturnPage") ||
//     localStorage.getItem("compareSourcePage") ||
//     "/itinerary";
// console.log("comparisonReturnPage:", sessionStorage.getItem("comparisonReturnPage"));
// console.log("compareSourcePage:", localStorage.getItem("compareSourcePage"));
// console.log("returnPage:", returnPage);
//  router.push(returnPage);
// }}
onClick={() => {
  localStorage.setItem("isAddingTrip", "true");
  router.push("/itinerary");
}}
                 className="relative snap-start shrink-0
  w-[82vw] sm:w-[320px] md:w-[300px]
  min-h-[400px] md:h-[800px]
  border-2 border-dashed border-gray-400
  rounded-[10px]
  flex items-center justify-center
  cursor-pointer"
                >
                 
                  <p className="font-semibold text-lg text-center px-4">
                    + Add trip to compare
                  </p>
                </div>
              )}
            </div>

            {showRightArrow && (
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="hidden md:block shrink-0 cursor-pointer z-10
                  absolute right-0 top-1/2 -translate-y-1/2
                  md:static md:translate-y-0"
              >
                <Image
                  src="/RightArrow.svg"
                  alt=""
                  width={40}
                  height={24}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}