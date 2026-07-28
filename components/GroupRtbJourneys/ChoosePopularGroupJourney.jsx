"use client";
import React from "react";
import TravelJourneyCard from "../TravelJourneyCard";
import { useEffect, useState } from "react";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";

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
        const res = await fetch(
          `${API_BASE_URL}/jsonapi/node/journey?include=field_journey_image.field_media_image,
          field_journey_tag`,
        );

        const json = await res.json();
        
        const included = json.included || [];

        const drupalJourneys = (json.data || []).map((item) => {
          const mediaId = item.relationships?.field_journey_image?.data?.id;

          const mediaEntity = included.find(
            (inc) => inc.type === "media--image" && inc.id === mediaId,
          );

          const fileId =
            mediaEntity?.relationships?.field_media_image?.data?.id;

          const fileEntity = included.find(
            (inc) => inc.type === "file--file" && inc.id === fileId,
          );

          const imageUrl =
            buildFileUrl(fileEntity?.attributes?.uri?.url) ||
            "/GoldenTriange.svg";

          const tagData = item.relationships?.field_journey_tag?.data;

          const tagArray = Array.isArray(tagData)
            ? tagData
            : tagData
              ? [tagData]
              : [];

          const tagNames = tagArray
            .map((tag) => {
              const tagEntity = included.find(
                (inc) =>
                  inc.type === "taxonomy_term--tags" && inc.id === tag.id,
              );

              return tagEntity?.attributes?.name;
            })
            .filter(Boolean);
<<<<<<< HEAD
=======
          const cta = item.attributes?.field_cta;

          const alias = item.attributes?.path?.alias || "";
          const aliasSlug = alias.replace(/^\/journey\//, "");

          const titleSlug = aliasSlug || slugify(item.attributes?.title || "");

          let viewTripUrl = `/journeys/${titleSlug}`;

          if (cta?.uri && !cta.uri.startsWith("entity:")) {
            viewTripUrl = cta.uri;
          }
>>>>>>> 79673c8dc04115d46e527a2841ab0cce24987d46

          return {
            id: item.id,
            title: item.attributes?.title || "",
            description: item.attributes?.field_short_description || "",
            duration: `${item.attributes?.field_duration_days || 0} Days | ${
              item.attributes?.field_duration_nights || 0
            } Nights`,
            destinations: `${
              item.attributes?.field_destinations_count || 0
            } Destinations`,
            price: Number(item.attributes?.field_offer_price) || 0,
            earlyBird: item.attributes?.field_offer_message || null,
            image: imageUrl,
            types: tagNames,
<<<<<<< HEAD
=======
            viewTripUrl,
            viewTripText: cta?.title || "View Trip",
>>>>>>> 79673c8dc04115d46e527a2841ab0cce24987d46
          };
        });

        const groupJourneys = drupalJourneys.filter((journey) =>
          journey.types?.includes("Group Journey"),
        );
        console.log("All journeys:", drupalJourneys.length);
        console.log("Group journeys:", groupJourneys.length);
        console.log(groupJourneys);

        setJourneys(groupJourneys);
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
