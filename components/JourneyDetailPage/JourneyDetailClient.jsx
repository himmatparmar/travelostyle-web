"use client";

import TestimonialSection from "@/components/HomePage/TestimonialSection";
import TravelOStylePromise from "@/components/HomePage/TravelOStylePromise";
import { buildFileUrl } from "@/lib/config";
import DetailTabs from "./DetailTabs";
import HeroSection from "./HeroSection";
import OtherDestinations from "./OtherDestinations";
import TrustBar from "./TrustBar";

const MOCK_JOURNEY = {
  title: "The Moroccan Getaway",
  tags: ["Culture & Heritage", "Culture"],
  desc: "From imperial cities to Saharan silence — a journey through Morocco's most celebrated contrasts.",
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
  return buildFileUrl(raw) || "/Morocco.svg";
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

function stripHtml(html) {
  return (html || "").replace(/<[^>]*>/g, "").trim();
}

function resolveTabSections(item, included) {
  // Level 1: journey_tabs_section container
  const containerRefs = item.relationships?.field_journey_tabs_section?.data;
  if (!Array.isArray(containerRefs) || containerRefs.length === 0) return {};

  const container = included.find((inc) => inc.id === containerRefs[0].id);
  if (!container) return {};

  // Level 2: individual tab paragraphs inside field_section_tabs
  const tabRefs = container.relationships?.field_section_tabs?.data;
  if (!Array.isArray(tabRefs) || tabRefs.length === 0) return {};

  const tabs = {};

  tabRefs.forEach((ref) => {
    const para = included.find((inc) => inc.id === ref.id);
    if (!para) return;

    switch (para.type) {
      // ── HIGHLIGHTS ─────────────────────────────────────────────────────
      case "paragraph--highlights_tab": {
        const cardRefs = para.relationships?.field_highlight_cards?.data || [];
        tabs.highlights = cardRefs
          .map((r) => {
            const card = included.find((inc) => inc.id === r.id);
            if (!card) return null;
            return {
              type: "text",
              text: stripHtml(card.attributes?.field_card_content?.processed),
            };
          })
          .filter(Boolean);
        break;
      }

      // ── ITINERARY ──────────────────────────────────────────────────────
      case "paragraph--itinerary_tab": {
        const dayRefs = para.relationships?.field_days?.data || [];
        tabs.itinerary = dayRefs
          .map((r) => {
            const day = included.find((inc) => inc.id === r.id);
            if (!day) return null;
            const a = day.attributes || {};
            const hotelId = day.relationships?.field_stay?.data?.id;
            const hotel = hotelId ? included.find((inc) => inc.id === hotelId) : null;
            return {
              day: a.field_day_number,
              title: a.field_day_title || "",
              stay: hotel?.attributes?.title || "",
              description: stripHtml(a.field_description?.processed),
            };
          })
          .filter(Boolean);
        break;
      }

      // ── STAYS ──────────────────────────────────────────────────────────
      case "paragraph--stays_tab": {
        const hotelRefs = para.relationships?.field_hotels?.data || [];
        tabs.stays = hotelRefs
          .map((r) => {
            const hotel = included.find((inc) => inc.id === r.id);
            if (!hotel) return null;
            const a = hotel.attributes || {};

            // Featured image (card thumbnail)
            const featuredMediaId = hotel.relationships?.field_featured_image?.data?.id;
            const featuredMedia = featuredMediaId ? included.find((inc) => inc.id === featuredMediaId) : null;
            const featuredFileId = featuredMedia?.relationships?.field_media_image?.data?.id;
            const featuredFile = featuredFileId ? included.find((inc) => inc.id === featuredFileId) : null;
            const featuredRaw = featuredFile?.attributes?.uri?.url;
            const image = buildFileUrl(featuredRaw) || "/Morocco.svg";

            // Gallery images (all media--image in field_gallery)
            const galleryRefs = hotel.relationships?.field_gallery?.data || [];
            const images = galleryRefs
              .map((gr) => {
                const gMedia = included.find((inc) => inc.id === gr.id);
                const gFileId = gMedia?.relationships?.field_media_image?.data?.id;
                const gFile = gFileId ? included.find((inc) => inc.id === gFileId) : null;
                const gRaw = gFile?.attributes?.uri?.url;
                return buildFileUrl(gRaw);
              })
              .filter(Boolean);

            return {
              name: a.title || "",
              desc: a.field_description || "",
              image,
              images: [image, ...images],
            };
          })
          .filter(Boolean);
        break;
      }
    }
  });

  return tabs;
}

function transformItem(item, included) {
  const tabSections = resolveTabSections(item, included);

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
    // Tab section data from field_journey_tabs_section paragraphs
    tabHighlights: tabSections.highlights || null,
    tabItinerary: tabSections.itinerary || null,
    tabStays: tabSections.stays || null,
  };
}

export default function JourneyDetailClient({ initialData,departures,journeyId, }) {
  const journey =
    initialData?.data
      ? transformItem(initialData.data, initialData.included || [])
      : MOCK_JOURNEY;

  return (
    <main>
     <HeroSection
  journey={journey}
  departures={departures}
  rawItem={initialData?.data}
  included={initialData?.included || []}
/>
      <TrustBar />
<DetailTabs
  journey={journey}
  departures={departures}
   journeyId={journeyId}
/>      <OtherDestinations />
      <TestimonialSection />
      <TravelOStylePromise />
    </main>
  );
}
