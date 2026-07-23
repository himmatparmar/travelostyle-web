import { notFound } from "next/navigation";
import SearchBar from "@/components/JourneyDetailPage/SearchBar";
import JourneyDetailClient from "@/components/JourneyDetailPage/JourneyDetailClient";
import Footer from "@/components/Footer";
import { API_BASE_URL } from "@/lib/config";

const INCLUDE = [
  "field_journey_image.field_media_image",
  "field_journey_tag",
  "field_month",
  "field_starts_in",
  "field_ends_in",
  "field_best_seasons",
  "field_pace",
  "field_journey_tabs_section",
  "field_journey_tabs_section.field_section_tabs",
  "field_journey_tabs_section.field_section_tabs.field_highlight_cards",
  "field_journey_tabs_section.field_section_tabs.field_days",
  "field_journey_tabs_section.field_section_tabs.field_days.field_stay",
  "field_journey_tabs_section.field_section_tabs.field_hotels",
  "field_journey_tabs_section.field_section_tabs.field_hotels.field_featured_image.field_media_image",
  "field_journey_tabs_section.field_section_tabs.field_hotels.field_gallery.field_media_image",
].join(",");

export default async function JourneyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Custom Drupal endpoint: resolves the /journey/{slug} alias to its node
  // internally and returns the same JSON:API shape for that node.
  let res: Response | null = null;
  try {
    res = await fetch(`${API_BASE_URL}/api/journey/${id}?include=${INCLUDE}`, {
      cache: "no-store",
    });
  } catch {
    // Connection failure (backend truly unreachable) — fall back to mock
    // data below rather than a hard 404.
  }

  let initialData = null;

  if (res) {
    // The backend answered at all, so any non-2xx here is Drupal genuinely
    // saying this alias doesn't resolve — a real 404. notFound() throws, so
    // it must stay outside the try/catch above or it'd be swallowed as a
    // network failure.
    if (!res.ok) {
      notFound();
    }
    initialData = await res.json();
  }

  return (
    <>
      <SearchBar />
      <JourneyDetailClient initialData={initialData} />
      <Footer />
    </>
  );
}
