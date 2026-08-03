import { notFound } from "next/navigation";
import SearchBar from "@/components/JourneyDetailPage/SearchBar";
import JourneyDetailClient from "@/components/JourneyDetailPage/JourneyDetailClient";
import Footer from "@/components/Footer";
import JourneyPricing from "@/components/JourneyDetailPage/DatePricing";
import { API_BASE_URL } from "@/lib/config";
import InclusionExclusion from "@/components/JourneyDetailPage/Inclusionexclusion";
import MobileInclusionsExclusions from "@/components/JourneyDetailPage/MobileInclusionsExclusions";
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
const INCLUDE = [
  "field_journey_image.field_media_image",
  "field_journey_tag",
  "field_month",
  "field_starts_in",
  "field_ends_in",
  "field_best_seasons",
  "field_pace",
  "field_journey_tabs_section.field_section_tabs.field_inclusions",
  "field_journey_tabs_section.field_section_tabs.field_exclusions",

  "field_journey_tabs_section.field_section_tabs.field_inclusions.field_field_journey_inclusions",
  "field_journey_tabs_section.field_section_tabs.field_exclusions.field_exclusion",

  "field_journey_tabs_section",
  "field_journey_tabs_section.field_section_tabs",

  "field_journey_tabs_section.field_section_tabs.field_highlight_cards",
  "field_journey_tabs_section.field_section_tabs.field_days",
  "field_journey_tabs_section.field_section_tabs.field_hotels",
  "field_journey_tabs_section.field_section_tabs.field_inclusions.field_field_journey_inclusions.field_icon.field_media_image",
  "field_journey_tabs_section.field_section_tabs.field_exclusions.field_exclusion.field_icon.field_media_image",

  "field_journey_tabs_section.field_section_tabs.field_days.field_stay",
  "field_journey_tabs_section.field_section_tabs.field_hotels.field_featured_image.field_media_image",
  "field_journey_tabs_section.field_section_tabs.field_hotels.field_gallery.field_media_image",
  "field_journey_tabs_section.field_section_tabs.field_inclusions.field_field_journey_inclusions.field_icon",
  "field_journey_tabs_section.field_section_tabs.field_exclusions.field_exclusion.field_icon",
  "field_journey_tabs_section.field_section_tabs.field_inclusions.field_field_journey_inclusions.field_icon.field_media_image",
  "field_journey_tabs_section.field_section_tabs.field_exclusions.field_exclusion.field_icon.field_media_image",

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
  const journeyRes = await fetch(
    `${API_BASE_URL}/api/journey/${id}?include=${INCLUDE}`,
    {
      cache: "no-store",
    }
  );

  if (!journeyRes.ok) {
    notFound();
  }


  const journeyData = await journeyRes.json();
  console.log(
    JSON.stringify(
      journeyData.included.filter(
        (x: any) => x.type === "paragraph--inclusion_exclusion_item"
      ),
      null,
      2
    )
  );

  const included = journeyData.included || [];
  console.log(
    "ICON MEDIA OBJECT",
    included.find(
      (item: any) =>
        item.id === "a5ccd2bc-d9e8-42c5-8892-b983e32b7dbb"
    )
  );
  console.log(
    JSON.stringify(
      included.find(
        (i: any) =>
          i.type === "paragraph--inclusion_exclusion_item"
      ),
      null,
      2
    )
  );
  console.log(
    "ALL INCLUDED TYPES:",
    included.map((item: any) => item.type)
  );


  // ADD YOUR CODE HERE
  const inclusions: any[] = [];
  const exclusions: any[] = [];


  const inclusionItems = included.filter(
    (item: any) =>
      item.type === "paragraph--inclusion_exclusion_item"
  );


  console.log("INCLUSION ITEMS", inclusionItems);


  inclusionItems.forEach((item: any) => {


    const inclusionRefs =
      item.relationships
        ?.field_field_journey_inclusions
        ?.data || [];


    inclusionRefs.forEach((ref: any) => {

      const term = included.find(
        (inc: any) => inc.id === ref.id
      );


      if (term) {

        const iconMediaId =
          term.relationships?.field_icon?.data?.id;


        const iconMedia = included.find(
          (media: any) =>
            media.id === iconMediaId &&
            media.type === "media--image"
        );


        const iconFileId =
          iconMedia?.relationships?.field_media_image?.data?.id;


        const iconFile = included.find(
          (file: any) =>
            file.id === iconFileId &&
            file.type === "file--file"
        );


        inclusions.push({
          title: term.attributes.name,
          description:
            stripHtml(term.attributes.description?.value || ""),

          icon:
            iconFile?.attributes?.uri?.url
              ? `${API_BASE_URL}${iconFile.attributes.uri.url}`
              : ""
        });


      }

    });



    const exclusionRefs =
      item.relationships
        ?.field_exclusion
        ?.data || [];


    exclusionRefs.forEach((ref: any) => {

      const term = included.find(
        (inc: any) => inc.id === ref.id
      );


      if (term) {

        const iconMediaId =
          term.relationships?.field_icon?.data?.id;


        const iconMedia = included.find(
          (media: any) =>
            media.id === iconMediaId &&
            media.type === "media--image"
        );


        const iconFileId =
          iconMedia?.relationships?.field_media_image?.data?.id;


        const iconFile = included.find(
          (file: any) =>
            file.id === iconFileId &&
            file.type === "file--file"
        );


        exclusions.push({
          title: term.attributes.name,
          description:
            stripHtml(term.attributes.description?.value || ""),

          icon:
            iconFile?.attributes?.uri?.url
              ? `${API_BASE_URL}${iconFile.attributes.uri.url}`
              : ""
        });

      }
    });


  });


  console.log("FINAL INCLUSIONS", inclusions);
  console.log("FINAL EXCLUSIONS", exclusions);



  // Example (adjust based on actual response shape)
  const journeyId = journeyData.data.id;

  // Fetch departures linked to this journey
  const departureRes = await fetch(
    `${API_BASE_URL}/jsonapi/node/book_your_journey`,
    { cache: "no-store" }
  );

  const departureData = await departureRes.json();

  const departures = departureData.data.filter(
    (departure: any) =>
      departure.relationships?.field_journey?.data?.id === journeyId
  );

  console.log("All Departures:", departures);
  console.log("Journey ID:", journeyId);
  console.log("Filtered Departures:", departures);


  return (

    <>
      <SearchBar />
      <JourneyDetailClient
        initialData={initialData}
        departures={departures}
        journeyId={journeyId}
        inclusions={inclusions}
        exclusions={exclusions}
      />

      <Footer />
    </>
  );
}
