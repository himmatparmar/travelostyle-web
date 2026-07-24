"use client";
import React, { useEffect, useState } from "react";
import TravelJourneyCard from "../TravelJourneyCard";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";
import Line from './Line';
export default function Destination() {
    
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
              };
            });
           setJourneys(drupalJourneys);
      } catch (err) {
        console.error(err);
      }
    }
    loadJourneys();
  }, []);

  return (
      
     <section className="flex flex-col items-center text-center px-4">
        <div className="flex flex-col items-center text-center">
<h2 className="mt-5 text-[48px] leading-[56px] font-semibold">
      The Destinations TravelOStyle Knows Best
</h2>

<p className="w-full max-w-[1100px] font-[Nohemi] text-[18px] leading-[32px] tracking-[0.05em] text-black">
  Choose from the locations that consistently deliver. These are places we know
  <br />
  well enough to recommend without reservation, and that our travelers reliably come home
  <br />
  grateful they chose!
</p>
</div>
 <div className="mt-12">
      <TravelJourneyCard
        journeys={journeys.slice(0, 8)}
        selectedTrips={selectedTrips}
        onCompare={handleCompareSelection}
      />
    </div>
</section>


  )
}