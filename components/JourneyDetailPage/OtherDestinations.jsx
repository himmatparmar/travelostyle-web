
"use client";
// import { toast } from "sonner";
import Image from "next/image";
import HeroSection from "./HeroSection";
import { useEffect, useRef, useState } from "react";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";
import JourneyList from "../../components/JourneyList/JourneyList"
import { slugify } from "@/lib/slugify";
import JourneysWeLove from "../HomePage/JourneysWeLove";

export default function OtherDestinations() {
  const [trips, setTrips] = useState([]);
  // const [selectedTrips, setSelectedTrips] = useState([]);
//   useEffect(() => {
//   const compareTrips = JSON.parse(
//     localStorage.getItem("compareTrips") || "[]"
//   );

//   setSelectedTrips(compareTrips.map((trip) => trip.id));
// }, []);

  useEffect(() => {
    async function loadJourneys() {
      try {
        const res = await fetch(
          `${API_BASE_URL}/jsonapi/node/journey?include=
          field_journey_image.field_media_image,field_journey_tag,field_month`,
        );
        const json = await res.json();
        const included = json.included || [];

        const drupalJourneys = (json.data || []).map((item, index) => {
          const mediaId = item.relationships?.field_journey_image?.data?.id;

          const mediaEntity = included.find(
            (inc) => inc.type === "media--image" && inc.id === mediaId,
          );

          const fileId =
            mediaEntity?.relationships?.field_media_image?.data?.id;

          const fileEntity = included.find(
            (inc) => inc.type === "file--file" && inc.id === fileId,
          );

          const rawUrl = fileEntity?.attributes?.uri?.url;

          const imageUrl = buildFileUrl(rawUrl) || "/GoldenTriange.svg";

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
            desc: item.attributes?.field_short_description || "",
            days: `${item.attributes?.field_duration_days || 0} Days | ${
              item.attributes?.field_duration_nights || 0
            } Nights`,
            destinations: `${
              item.attributes?.field_destinations_count || 0
            } Destinations`,
            price: Number(item.attributes?.field_offer_price) || 0,
            offer: item.attributes?.field_offer_message || "",
            image: imageUrl,
            tags: tagNames,
            viewTripUrl,
            viewTripText: cta?.title || "View Trip",
            active: index === 0,
          };
        });

        setTrips(drupalJourneys);
      } catch (err) {
        console.error("FETCH ERROR", err);
      }
    }

    loadJourneys();
  }, []);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };
const handleCompareSelection = (trip) => {
  const isAddingTrip =
    localStorage.getItem("isAddingTrip") === "true";

  if (isAddingTrip) {
    const existingTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]"
    );

    const alreadyExists = existingTrips.some(
      (t) => t.id === trip.id
    );
    if (alreadyExists) {
  toast("Trip already added to comparison");
  return;
}

    if (!alreadyExists) {
      existingTrips.push(trip);
    }

    localStorage.setItem(
      "compareTrips",
      JSON.stringify(existingTrips)
    );

    localStorage.removeItem("isAddingTrip");

   sessionStorage.setItem(
  "comparisonReturnPage",
  window.location.pathname + window.location.search
);

const returnPage =
  sessionStorage.getItem("comparisonReturnPage") ||
  "/comparison";
  console.log(
  "comparisonReturnPage:",
  sessionStorage.getItem("comparisonReturnPage")
);

window.location.href = returnPage;
  } else {
    // NEW comparison starts here
    localStorage.setItem(
      "compareTrips",
      JSON.stringify([trip])
    );

    window.location.href = "/comparison";
  }
};
  return (
    <div className="mt-[4vw] flex items-center justify-center gap-[1.3vw]">
      <section className="w-full text-center py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 max-w-xl mx-auto leading-tight">
        Other Destinations We Know You&apos;ll Love
      </h2>
    <JourneysWeLove/>
    </section>
      </div>

    )}

  