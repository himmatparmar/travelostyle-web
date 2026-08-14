"use client";
import React from "react";
import TravelJourneyCard from "../TravelJourneyCard";
import { useEffect, useState } from "react";
import { getJourneyCards, filterByType } from "@/lib/journeyCard";

export default function ChoosePopularGroupJourney() {
  const [journeys, setJourneys] = useState([]);
  const [selectedTrips, setSelectedTrips] = useState([]);
  useEffect(() => {
    const compareTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]",
    );

    setSelectedTrips(compareTrips.map((trip) => trip.id));
  }, []);
  const handleCompareSelection = (trip) => {
    const existingTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]",
    );

    const alreadyExists = existingTrips.some((item) => item.id === trip.id);

    if (alreadyExists) {
      return;
    }

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
      JSON.stringify([...existingTrips, compareTrip]),
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
        setJourneys(filterByType(drupalJourneys, "Group Journey"));
      } catch (err) {
        console.error(err);
      }
    }

    loadJourneys();
  }, []);
  return (
    <div className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="text-center mb-12">
        <p className="font-serif italic text-2xl text-neutral-600 lowercase tracking-wide">
          choose from our popular group journeys
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-1 tracking-tight">
          Where are you headed to next?
        </h2>
      </div>

      <TravelJourneyCard
        journeys={journeys}
        selectedTrips={selectedTrips}
        onCompare={handleCompareSelection}
      />
      <div className="flex justify-center">
        <button className="bg-[#1C355E] hover:bg-[#12233F] text-white text-xs font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
          Discover All Group Journeys
        </button>
      </div>
    </div>
  );
}
