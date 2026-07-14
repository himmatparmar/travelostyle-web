"use client";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
function getLocation(id, included) {
  const node = included.find(
    (i) =>
      i.type === "node--location" &&
      i.id === id
  );

  return node?.attributes?.title || "";
}
function getStartCity(journey, included) {
  const id =
    journey.relationships?.field_starts_in?.data?.id;

  return getLocation(id, included);
}
function getEndCity(journey, included) {
  const id =
    journey.relationships?.field_ends_in?.data?.id;

  return getLocation(id, included);
}
function getItinerary(journey, included) {
  const containerId =
    journey.relationships?.field_journey_tabs_section
      ?.data?.[0]?.id;

  const container = included.find(
    (i) => i.id === containerId
  );

  const tabRefs =
    container?.relationships?.field_section_tabs
      ?.data || [];

  const itineraryTab = tabRefs
    .map((r) =>
      included.find((i) => i.id === r.id)
    )
    .find(
      (t) =>
        t?.type ===
        "paragraph--itinerary_tab"
    );

  if (!itineraryTab) return [];

  const dayRefs =
    itineraryTab.relationships?.field_days
      ?.data || [];

  return dayRefs
    .map((d) =>
      included.find((i) => i.id === d.id)
    )
    .filter(Boolean)
    .map((day) => ({
      day: day.attributes?.field_day_number,
      title:
        day.attributes?.field_day_title || "",
    }));
}
function getStays(journey, included) {
  const containerId =
    journey.relationships?.field_journey_tabs_section
      ?.data?.[0]?.id;

  const container = included.find(
    (i) => i.id === containerId
  );

  const tabRefs =
    container?.relationships?.field_section_tabs
      ?.data || [];

  const staysTab = tabRefs
    .map((r) =>
      included.find((i) => i.id === r.id)
    )
    .find(
      (t) =>
        t?.type ===
        "paragraph--stays_tab"
    );

  if (!staysTab) return [];

  const hotelRefs =
    staysTab.relationships?.field_hotels
      ?.data || [];

  return hotelRefs
    .map((h) =>
      included.find((i) => i.id === h.id)
    )
    .filter(Boolean)
    .map((hotel) => ({
      name:
        hotel.attributes?.title || "",
    }));
}
export default function TripComparison() {
  const [trips, setTrips] = useState([]);
  const router = useRouter();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
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

 useEffect(() => {
  async function loadComparisonTrips() {
    const storedTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]"
    );

    if (!storedTrips.length) {
      setTrips([]);
      return;
    }

    try {
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

        if (!journey) return trip;

        return {
          ...trip,

          startCity: getStartCity(journey, included),
          endCity: getEndCity(journey, included),

          tabItinerary: getItinerary(
            journey,
            included
          ),

          tabStays: getStays(
            journey,
            included
          ),
        };
      });

      setTrips(enrichedTrips);
    } catch (err) {
      console.error(err);
      setTrips(storedTrips);
    }
  }

  loadComparisonTrips();
}, []);
  const scrollRef = useRef(null);
  const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -320,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({
    left: 320,
    behavior: "smooth",
  });
};
const removeTrip = (tripId) => {
  const updatedTrips = trips.filter(
    (trip) => trip.id !== tripId
  );

  setTrips(updatedTrips);

  localStorage.setItem(
    "compareTrips",
    JSON.stringify(updatedTrips)
  );
};
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

  return () => {
    container.removeEventListener("scroll", updateArrows);
  };
}, [trips]);


  const handleAddToCompare = (trip) => {
    const existingTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]"
    );

    const updatedTrips = [...existingTrips, trip];

    localStorage.setItem(
      "compareTrips",
      JSON.stringify(updatedTrips)
    );
  };

  return (<div className="mb-8 font-nohemi">
    <h1 className="text-2xl font-bold mb-4 pt-8 px-6">
      Compare Trips </h1>
    <div className="w-full max-w-[92%] border-2 border-gray-300 rounded-[10px] bg-white shadow-sm mb-6 mx-auto">
      <div className="pt-[27px] px-6"> <h2 className="text-[20px] font-semibold text-gray-800">
        Selected Trips </h2>
        <p className="text-sm text-gray-500 mt-1">

          Choose up to 3 Trips to Compare </p>
      </div>
      <hr className="mt-3 border-gray-600" />
      {/* <div className="grid gap-4 mt-6 px-6 pb-6" style={{ gridTemplateColumns: "140px repeat(3, minmax(0, 1fr))", }} >  */}
      {/* Labels */}
<div className="flex gap-4 mt-6 w-full overflow-hidden">
          <div className="hidden md:block pt-[300px] pl-12">
          <div className="h-[40px]flex items-center text-[13px] font-bold">Duration</div>

          <div className="mt-[60px] h-[5px] flex items-center text-[13px] font-bold">Destinations</div>
        <div className="pt-[20px] flex items-start text-[13px] font-bold">
  Itinerary
</div>
          <div className="h-[190px] flex items-center text-[13px] font-bold">Stays</div>

          <div className="h-[20px] flex items-center text-[13px] font-bold">Region</div>

          <div className="h-[90px] flex items-center text-[13px] font-bold">Offer</div>

          <div className="h-[70px] flex items-center text-[13px] font-bold">
            Price
          </div>

          <div className="h-[150px] flex items-center text-[13px] font-bold">
            Way to Travel
          </div>
        </div>
        <div className="flex items-center flex-1 mt-0 gap-3">

  {showLeftArrow && (
  <Image
    src="/LeftArrow.svg"
    alt="Previous"
    width={56}
    height={24}
    onClick={scrollLeft}
    className="cursor-pointer shrink-0"
  />
)}
<div className="relative flex-1 overflow-hidden max-w-[850px]">
  
            <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth
               [-ms-overflow-style:none]
               [scrollbar-width:none]
               [&::-webkit-scrollbar]:hidden"
          >
            {/* Trip Cards */}
            {trips.map((trip, index) => (
              
              <div
                key={trip.id}
                className={`relative
  w-[85vw] md:w-[260px]
  min-w-[85vw] md:min-w-[320px]
  h-[950px]
    rounded-[10px] p-4 bg-white
    ${index === 0
                    ? "border border-gray-200"
                    : "border border-gray-300"
                  }`}
              >
                <button
  onClick={() => removeTrip(trip.id)}
  className="absolute top-0 right-0 z-20
    w-8 h-8 rounded-full
    bg-red-500 text-black"
>
  ×
</button>
                <div className="relative h-[213px] rounded-lg overflow-hidden">

                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <h3 className="text-center font-semibold mt-4 mb-8">
                  {trip.title}
                </h3>

               
                 <div>
  {trip.days}
</div>

                  <div className="h-[60px] pt-[45px]">
  {trip.destinations}
</div>
                 <div className="h-[120px] pt-[15px] overflow-hidden">
  {trip.tabItinerary?.map((day) => (
    <div key={day.day}>
      Day {day.day}: {day.title}
    </div>
  ))}
</div>
<div className="h-[90px]">
  {trip.tabStays?.map((stay) => (
    <div key={stay.name}>
      {stay.name}
    </div>
  ))}
</div>
     <div className="flex items-center">
                {trip.startCity} → {trip.endCity}
           </div>
                <div className="pt-[20px]">Offer price {trip.price}</div>
                  <div>{trip.offerprice}</div>
                  <div className="bg-[#FFF3E8] rounded-lg p-2 mt-[20px] flex justify-between items-center">
          <div className="text-left"> 
          <div className="text-sm text-gray-600"> From </div>
         <div className="font-bold text-xl leading-tight"> {trip.price} / Person </div>
        <div className="text-xs text-gray-600 mt-1"> Double Occupancy </div>
            </div>
<button className="bg-[#2C3078] hover:bg-blue-700 
text-white font-medium px-5 py-2 rounded-lg transition-colors">
                      View Trip
                    </button>
                  </div>
                  
                  <div>
                    <div>{trip.travelMode}</div>
                    <hr className="my-2 pt-[30px] border-gray-300" />
<div className="flex items-center gap-2 ">
                        <span className="font-medium whitespace-nowrap">
                        Group Journey
                      </span>

                      <a
                        href={`/trips/${trip.id}/availability`}
                        className="font-bold underline text-sm whitespace-nowrap"
                      >
                        Check Availability
                      </a>
                    </div>
                    <hr className="border-gray-300" />
<div className="flex items-center gap-2 py-2">
                      <span className="font-medium whitespace-nowrap">
                        Private Journey
                      </span>

                      <a
                        href={`/trips/${trip.id}/private`}
                        className="font-bold underline text-sm whitespace-nowrap"
                      >
                        Request Private Journey
                      </a>
                    </div>
               
                </div>
                  </div>))}
                  {trips.length < 30 && (
          <div
            onClick={() => {
              localStorage.setItem("isAddingTrip", "true");
              router.push("/");
            }}
           className={`relative
  w-full md:w-[260px]
  min-w-full md:min-w-[320px]
  h-[950px]
  border-2 border-dashed border-gray-400
  rounded-lg
  flex items-center justify-center
  cursor-pointer`}
          >
            <p className="font-semibold text-lg text-center">
              + Add trip to compare
            </p>
          </div>
          
        )}
  </div>
        </div>
        {showRightArrow && (
  <Image
    src="/RightArrow.svg"
    alt="Next"
    width={56}
    height={24}
    onClick={scrollRight}
    className="cursor-pointer shrink-0"
  />
)}
          </div>
      </div>
    </div>


</div>
  )
        {/* Add Trip */}
  ;
}