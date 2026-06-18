"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { slugify } from "@/lib/slugify";
import HeroSection from "./HeroSection";
import TrustBar from "./TrustBar";
import DetailTabs from "./DetailTabs";
import OtherDestinations from "./OtherDestinations";
import TestimonialSection from "@/components/HomePage/TestimonialSection";
import TravelOStylePromise from "@/components/HomePage/TravelOStylePromise";

const BASE = "http://travelostyle-drupal-backend.ddev.site";

const INCLUDE =
  "field_journey_image.field_media_image,field_journey_tag,field_month,field_starts_in,field_ends_in,field_best_seasons,field_pace";

const MOCK_JOURNEY = {
  title: "The Moroccan Getaway",
  tags: ["Culture & Heritage", "Culture"],
  desc: "From imperial cities to Saharan silence — a journey through Morocco's most celebrated contrasts. Medinas that feel unchanged for centuries, cedar forests that cool the air, and a desert that redefines perspective.",
  image: "/Morocco.svg",
  days: "13 Days | 12 Nights",
  destinations: "10 Destinations",
  price: "$5000",
  startCity: "Casablanca",
  endCity: "Marrakech",
  bestSeason: "Jan–March, July–Sep",
  pace: "Moderate",
  offer: "Black Friday offer available for August & September departure/s",
  highlights: [
    {
      type: "text",
      text: "Ancient Medinas where the call to prayer still echoes off the same walls of always-narrow alleyways, where the spice merchant and silk traders are still there.",
    },
    { type: "image", image: "/Morocco.svg", alt: "Morocco Medina" },
    {
      type: "text",
      text: "Cedar Forests, mountain passes, a valley that seems to go on forever — this is the Morocco that changes you. All of it.",
    },
    {
      type: "text",
      text: "You've seen Ait Benhaddou in the films. Nothing prepares you for it in person.",
    },
    {
      type: "text",
      text: "Three days in Marrakech — the souks at dawn, the square at dusk, and a garden you won't forget where you are.",
    },
    {
      type: "image",
      image: "/Kenya.svg",
      alt: "Marrakech",
      caption: "Marrakech — Show Me It Is If Necessary",
    },
  ],
};

function resolveImage(item, included) {
  const mediaId = item.relationships?.field_journey_image?.data?.id;
  const media = included.find((i) => i.type === "media--image" && i.id === mediaId);
  const fileId = media?.relationships?.field_media_image?.data?.id;
  const file = included.find((i) => i.type === "file--file" && i.id === fileId);
  const raw = file?.attributes?.uri?.url;
  return raw ? `${BASE}${decodeURIComponent(raw)}` : "/Morocco.svg";
}

function resolveTags(item, included) {
  const data = item.relationships?.field_journey_tag?.data;
  const arr = Array.isArray(data) ? data : data ? [data] : [];
  return arr
    .map((t) => {
      const e = included.find((i) => i.type === "taxonomy_term--tags" && i.id === t.id);
      return e?.attributes?.name;
    })
    .filter(Boolean);
}

function resolveLocation(rel, included) {
  const id = rel?.data?.id;
  if (!id) return "";
  const node = included.find((i) => i.type === "node--location" && i.id === id);
  return node?.attributes?.title || "";
}

function resolveBestSeasons(item, included) {
  const data = item.relationships?.field_best_seasons?.data || [];
  return data
    .map((s) => {
      const e = included.find(
        (i) => i.type === "taxonomy_term--best_seasons" && i.id === s.id,
      );
      return e?.attributes?.name;
    })
    .filter(Boolean)
    .join(", ");
}

function resolvePace(item, included) {
  const id = item.relationships?.field_pace?.data?.id;
  if (!id) return "";
  const e = included.find((i) => i.id === id);
  return e?.attributes?.name || "";
}

function transformItem(item, included) {
  return {
    ...MOCK_JOURNEY,
    title: item.attributes.title || MOCK_JOURNEY.title,
    desc: item.attributes.field_short_description || MOCK_JOURNEY.desc,
    image: resolveImage(item, included),
    days: `${item.attributes.field_duration_days || 13} Days | ${item.attributes.field_duration_nights || 12} Nights`,
    destinations: `${item.attributes.field_destinations_count || 10} Destinations`,
    price: `$${Number(item.attributes.field_offer_price) || 5000}`,
    offer: item.attributes.field_offer_message || MOCK_JOURNEY.offer,
    tags: resolveTags(item, included),
    startCity: resolveLocation(item.relationships?.field_starts_in, included) || MOCK_JOURNEY.startCity,
    endCity: resolveLocation(item.relationships?.field_ends_in, included) || MOCK_JOURNEY.endCity,
    bestSeason: resolveBestSeasons(item, included) || MOCK_JOURNEY.bestSeason,
    pace: resolvePace(item, included) || MOCK_JOURNEY.pace,
  };
}

export default function JourneyDetailClient() {
  const { id: slug } = useParams();   // param is named [id] in folder but holds a slug
  const [journey, setJourney] = useState(MOCK_JOURNEY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    async function loadJourney() {
      try {
        // Fetch all journeys with full includes, then match by slugified title
        const res = await fetch(
          `${BASE}/jsonapi/node/journey?include=${INCLUDE}`,
        );
        const json = await res.json();
        const included = json.included || [];

        const item = (json.data || []).find(
          (d) => slugify(d.attributes.title || "") === slug,
        );

        if (item) {
          setJourney(transformItem(item, included));
        }
      } catch {
        /* Drupal dev server not running — keep mock data */
      } finally {
        setLoading(false);
      }
    }

    loadJourney();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-[0.9vw] text-[#666]">
        Loading journey...
      </div>
    );
  }

  return (
    <main>
      <HeroSection journey={journey} />
      <TrustBar />
      <DetailTabs journey={journey} />
      <OtherDestinations />
      <TestimonialSection />
      <TravelOStylePromise />
    </main>
  );
}
