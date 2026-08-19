"use client";
import React from "react";
import TravelJourneyCard from "../TravelJourneyCard";
import { useEffect, useState } from "react";
import { getJourneyCards, filterByType } from "@/lib/journeyCard";
import PrivateInquiryForm from "@/components/PrivateInquiryForm";

export default function NotSureWhereToBegin() {
   const [journeys, setJourneys] = useState([]);
    const [selectedTrips, setSelectedTrips] = useState([]);
    const [isPrivateFormOpen, setIsPrivateFormOpen] = useState(false);
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
          setJourneys(filterByType(drupalJourneys, "Tailormade Journey"));
        } catch (err) {
          console.error(err);
        }
      }

      loadJourneys();
    }, []);

  // This page only lists tailor-made journeys, so the summary card just
  // picks one of them — there's no single journey the user has clicked
  // into yet. Prefer one that actually has an upcoming departure so the
  // card can show a real date; fall back to the first journey otherwise.
  const cardSource =
    journeys.find((j) => j.nearestDeparture) || journeys[0] || null;
  const cardJourney = cardSource
    ? {
        title: cardSource.title,
        image: cardSource.image,
        days: cardSource.duration,
        destinations: cardSource.destinations,
        offerPrice: cardSource.price,
      }
    : null;
  const cardDeparture = cardSource?.nearestDeparture || null;

  return (
    <div className="min-h-screen py-16 px-3 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight mb-5">
          Not sure where to begin? Start here
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-1xl mx-auto font-normal">
          Explore our collection of inspirational itineraries – journey ideas
          across regions and travel styles that work as a starting point. Think
          of them as conversation starters. We’ll take it from there.
        </p>
      </div>

      <TravelJourneyCard journeys={journeys}
       selectedTrips={selectedTrips}
        onCompare={handleCompareSelection}
      /> 
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsPrivateFormOpen(true)}
          className="bg-[#1C355E] hover:bg-[#12233F] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-200"
        >
          Explore All Curated Journeys
        </button>
      </div>

      <PrivateInquiryForm
        isOpen={isPrivateFormOpen}
        onClose={() => setIsPrivateFormOpen(false)}
        onSubmit={(data) => console.log("Curated journey inquiry submitted:", data)}
        journey={cardJourney}
        departure={cardDeparture}
        showDepartureDate
      />
    </div>
  );
}
