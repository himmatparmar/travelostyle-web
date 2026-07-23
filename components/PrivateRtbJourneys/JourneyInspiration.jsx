"use client";
import React from "react";
import { useEffect, useState } from "react";
import TravelJourneyCard from "../TravelJourneyCard";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";
import JourneyCard from "../ItineraryListingPage/JourneyCard";
import { slugify } from "@/lib/slugify";
import JourneyList from "../JourneyList/JourneyList";


export default function JourneyInspiration() {
  const [journeys, setJourneys] = useState([]);
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
  //       "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80", // Taj Mahal / Humayun's Tomb representation
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
  //       "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80", // Safari/Lion representation
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
  //       "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80", // Morocco architecture
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
  useEffect(() => {
  async function loadJourneys() {
    try {
      const res = await fetch(
        `${API_BASE_URL}/jsonapi/node/journey?include=field_journey_image.field_media_image,field_journey_tag,field_month`
      );

      const json = await res.json();
      const included = json.included || [];

      const drupalJourneys = (json.data || []).map((item) => {
        const mediaId =
          item.relationships?.field_journey_image?.data?.id;

        const mediaEntity = included.find(
          (inc) =>
            inc.type === "media--image" &&
            inc.id === mediaId
        );

        const fileId =
          mediaEntity?.relationships?.field_media_image?.data?.id;

        const fileEntity = included.find(
          (inc) =>
            inc.type === "file--file" &&
            inc.id === fileId
        );

        const rawUrl = fileEntity?.attributes?.uri?.url;

        const imageUrl =
          buildFileUrl(rawUrl) || "/GoldenTriange.svg";

        const tagData =
          item.relationships?.field_journey_tag?.data;

        const tagArray = Array.isArray(tagData)
          ? tagData
          : tagData
          ? [tagData]
          : [];

        const tagNames = tagArray
          .map((tag) => {
            const tagEntity = included.find(
              (inc) =>
                inc.type === "taxonomy_term--tags" &&
                inc.id === tag.id
            );

            return tagEntity?.attributes?.name;
          })
          .filter(Boolean);

        return {
          id: item.id,
          title: item.attributes?.title || "",
          description:
            item.attributes?.field_short_description || "",
          duration: `${item.attributes?.field_duration_days || 0} Days | ${
            item.attributes?.field_duration_nights || 0
          } Nights`,
          destinations: `${
            item.attributes?.field_destinations_count || 0
          } Destinations`,
          price:
            Number(item.attributes?.field_offer_price) || 0,
          earlyBird:
            item.attributes?.field_offer_message || null,
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
    <div className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="text-center mb-12">
        <p className="font-serif italic text-2xl text-neutral-600 lowercase tracking-wide">
          choose from our popular group journeys
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-1 tracking-tight">
          Where are you headed to next?
        </h2>
      </div>

<div className="grid grid-cols-4 gap-6">
  {journeys.slice(0, 8).map((trip) => (
    <JourneyCard
      key={trip.id}
      trip={trip}
      variant="grid"
    />
  ))}
</div>     <div className="flex justify-center">
        <button className="bg-[#1C355E] hover:bg-[#12233F] text-white text-xs font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
         Explore All Private Journeys
        </button>
      </div>
    </div>
  );
}
