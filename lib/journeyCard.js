import { API_BASE_URL, buildFileUrl } from "@/lib/config";
import { slugify } from "@/lib/slugify";

const INCLUDE = "field_journey_image.field_media_image,field_journey_tag";

// Fetches every journey node and resolves each into the flat card shape
// used across the journey-type listing sections (Group/Private/Tailor-made/
// Home/Journey-Detail "you'll also love" rails). All of these previously
// duplicated this exact fetch + media/tag resolution independently.
export async function getJourneyCards() {
  const res = await fetch(`${API_BASE_URL}/jsonapi/node/journey?include=${INCLUDE}`);
  const json = await res.json();
  const included = json.included || [];

  return (json.data || []).map((item, index) => {
    const mediaId = item.relationships?.field_journey_image?.data?.id;
    const mediaEntity = included.find(
      (inc) => inc.type === "media--image" && inc.id === mediaId,
    );
    const fileId = mediaEntity?.relationships?.field_media_image?.data?.id;
    const fileEntity = included.find((inc) => inc.type === "file--file" && inc.id === fileId);
    const imageUrl = buildFileUrl(fileEntity?.attributes?.uri?.url) || "/GoldenTriange.svg";

    const tagData = item.relationships?.field_journey_tag?.data;
    const tagArray = Array.isArray(tagData) ? tagData : tagData ? [tagData] : [];
    const tagNames = tagArray
      .map((tag) => {
        const tagEntity = included.find(
          (inc) => inc.type === "taxonomy_term--tags" && inc.id === tag.id,
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
      destinations: `${item.attributes?.field_destinations_count || 0} Destinations`,
      price: Number(item.attributes?.field_offer_price) || 0,
      earlyBird: item.attributes?.field_offer_message || null,
      isPopular: item.attributes?.field_is_popular === true,
      image: imageUrl,
      types: tagNames,
      viewTripUrl,
      viewTripText: cta?.title || "View Trip",
      _index: index,
    };
  });
}

export function filterByType(journeys, typeName) {
  return journeys.filter((journey) => journey.types?.includes(typeName));
}
