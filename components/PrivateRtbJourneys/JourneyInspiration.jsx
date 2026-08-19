"use client";
import React from "react";
import { useEffect, useState } from "react";
import TravelJourneyCard from "../TravelJourneyCard";
import { getJourneyCards, filterByType } from "@/lib/journeyCard";



export default function JourneyInspiration() {
  const [journeys, setJourneys] = useState([]);
  const [selectedTrips, setSelectedTrips] = useState([]);
  useEffect(() => {
  const compareTrips = JSON.parse(
    localStorage.getItem("compareTrips") || "[]"
  );


  setSelectedTrips(compareTrips.map((trip) => trip.id));
}, []);
const handleCompareSelection = (trip) => {
  const existingTrips = JSON.parse(
    localStorage.getItem("compareTrips") || "[]"
  );

  const alreadyExists = existingTrips.some(
    (item) => item.id === trip.id
  );

  if (alreadyExists) return;

  const compareTrip = {
    id: trip.id,
    title: trip.title,
    image: trip.image,
    duration: trip.duration,
    destinations: trip.destinations,
    offer: trip.earlyBird,
    price: `$${Number(trip.price).toLocaleString()}`,
    itinerary: [],
    stays: "-",
    region: trip.region,
    travelMode: "-",
  };

  localStorage.setItem(
    "compareTrips",
    JSON.stringify([...existingTrips, compareTrip])
  );

  setSelectedTrips((prev) => [...prev, trip.id]);
  localStorage.setItem(
      "compareSourcePage",
      window.location.pathname + window.location.search,
    );

    sessionStorage.setItem(
      "comparisonReturnPage",
      window.location.pathname + window.location.search,
    );

  window.location.href = "/comparison";
};


 

 
  useEffect(() => {
    async function loadJourneys() {
      try {
        const drupalJourneys = await getJourneyCards();
        setJourneys(filterByType(drupalJourneys, "Private Journey"));
      } catch (err) {
        console.error(err);
      }
    }

    loadJourneys();
  }, []);

  return (
    <div className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="text-center mb-12">
        <p className="font-serif italic text-2xl text-neutral-600 lowercase tracking-wide">
          choose from our popular group journeys
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-1 tracking-tight">
          Where are you headed to next?
        </h2>
      </div>

{/* <div className="grid grid-cols-4 gap-6"> */}
 <TravelJourneyCard
  journeys={journeys}
  selectedTrips={selectedTrips}
  onCompare={handleCompareSelection}
/>
{/* </div>    */}
  <div className="flex justify-center mt-8">
        <button
          className="bg-[#1C355E] hover:bg-[#12233F] text-white text-xs font-semibold  px-6 py-2 p-6 rounded-full shadow transition-all duration-200"
        >
         Explore All Private Journeys
        </button>
      </div>
    </div>
  );
}
