"use client";
import React from "react";
import TravelJourneyCard from "../TravelJourneyCard";
import { useEffect, useState } from "react";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";

export default function NotSureWhereToBegin() {
  // const journeys = [
  //   {
  //     id: 1,
  //     title: "The Golden Triangle",
  //     description:
  //       "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
  //     duration: "12 Days | 12 Nights",
  //     destinations: "10 Destinations",
  //     price: "5000",
  //     types: ["Group Journey", "Private Journey"],
  //     earlyBird: "September departure",
  //     image:
  //       "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     id: 2,
  //     title: "Kenya & South Africa",
  //     description:
  //       "Two countries. One continent that will ask something of you — and give back considerably more.",
  //     duration: "10 Days | 13 Nights",
  //     destinations: "9 Destinations",
  //     types: ["Group Journey"],
  //     price: "8000",
  //     earlyBird: null,
  //     image:
  //       "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     id: 3,
  //     title: "Morocco",
  //     description:
  //       "From Imperial cities to Saharan silence — a journey through Morocco's most extraordinary contrasts.",
  //     duration: "12 Days | 12 Nights",
  //     destinations: "10 Destinations",
  //     types: ["Group Journey", "Private Journey"],
  //     price: "7000",
  //     earlyBird: "July departure",
  //     image:
  //       "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     id: 4,
  //     title: "Vietnam",
  //     description:
  //       "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
  //     duration: "10 Days | 9 Nights",
  //     destinations: "9 Destinations",
  //     types: ["Group Journey", "Private Journey"],
  //     price: "6000",
  //     earlyBird: null,
  //     image:
  //       "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     id: 5,
  //     title: "The Golden Triangle",
  //     description:
  //       "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
  //     duration: "12 Days | 12 Nights",
  //     destinations: "10 Destinations",
  //     types: ["Group Journey", "Private Journey"],
  //     price: "5000",
  //     earlyBird: "September departure",
  //     image:
  //       "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     id: 6,
  //     title: "Kenya & South Africa",
  //     description:
  //       "Two countries. One continent that will ask something of you — and give back considerably more.",
  //     duration: "10 Days | 13 Nights",
  //     destinations: "9 Destinations",
  //     types: ["Group Journey"],
  //     price: "8000",
  //     earlyBird: null,
  //     image:
  //       "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     id: 7,
  //     title: "Morocco",
  //     description:
  //       "From Imperial cities to Saharan silence — a journey through Morocco's most extraordinary contrasts.",
  //     duration: "12 Days | 12 Nights",
  //     destinations: "10 Destinations",
  //     types: ["Group Journey", "Private Journey"],
  //     price: "7000",
  //     earlyBird: "July departure",
  //     image:
  //       "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80",
  //   },
  //   {
  //     id: 8,
  //     title: "Vietnam",
  //     description:
  //       "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
  //     duration: "10 Days | 9 Nights",
  //     destinations: "9 Destinations",
  //     types: ["Group Journey", "Private Journey"],
  //     price: "6000",
  //     earlyBird: null,
  //     image:
  //       "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
  //   },
  // ];
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
                const cta = item.attributes?.field_cta;

          const alias = item.attributes?.path?.alias || "";
          let viewTripUrl = alias || `/journey/${slugify(item.attributes?.title || "")}`;

          if (cta?.uri && !cta.uri.startsWith("entity:")) {
            viewTripUrl = cta.uri;
          }
  
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
               viewTripUrl,
            viewTripText: cta?.title || "View Trip",
            };
          });
  
          const tailormadeJourneys = drupalJourneys.filter((journey) =>
            journey.types?.includes("Tailormade Journey"),
          );
          console.log("All journeys:", drupalJourneys.length);
          console.log("Tailor journeys:", tailormadeJourneys.length);
          console.log(tailormadeJourneys);
  
          setJourneys(tailormadeJourneys);
          
        } catch (err) {
          console.error(err);
        }
      }
  
      loadJourneys();
    }, []);

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
        <button className="bg-[#1C355E] hover:bg-[#12233F] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-200">
          Explore All Private Journeys
        </button>
      </div>
    </div>
  );
}
