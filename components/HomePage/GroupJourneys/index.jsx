import { API_BASE_URL, buildFileUrl } from "@/lib/config";
import Journey from "./Journeys";

const INCLUDE = "field_journey_image.field_media_image,field_steps";

// Local fallbacks for the three journey-type images until each journey_type
// node gets a real field_journey_image uploaded in Drupal's media library.
const FALLBACK_IMAGES = {
  "GROUP JOURNEYS": "/GroupJourneys.svg",
  "PRIVATE JOURNEYS": "/PrivateJouneys.svg",
  "TAILOR-MADE JOURNEYS": "/TailorJourneys.svg",
};

async function getJourneyTypes() {
  const res = await fetch(
    `${API_BASE_URL}/jsonapi/node/journey_type?include=${INCLUDE}&sort=field_sort_weight`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch journey types");
    return { data: [], included: [] };
  }

  return res.json();
}

function resolveImage(item, included, title) {
  const mediaId = item.relationships?.field_journey_image?.data?.id;
  const media = included.find((i) => i.type === "media--image" && i.id === mediaId);
  const fileId = media?.relationships?.field_media_image?.data?.id;
  const file = included.find((i) => i.type === "file--file" && i.id === fileId);
  const raw = file?.attributes?.uri?.url;

  return buildFileUrl(raw) || FALLBACK_IMAGES[title] || "/GroupJourneys.svg";
}

function resolveSteps(item, included) {
  const stepRefs = item.relationships?.field_steps?.data || [];

  return stepRefs
    .map((ref, index) => {
      const step = included.find((i) => i.id === ref.id);
      if (!step) return null;

      return {
        id: index + 1,
        title: step.attributes?.field_step_title || "",
        desc: step.attributes?.field_step_description?.value || "",
      };
    })
    .filter(Boolean);
}

export default async function Index() {
  const { data, included = [] } = await getJourneyTypes();

  const journeyTypes = data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    imageSrc: resolveImage(item, included, item.attributes.title),
    imageQuote: item.attributes.field_image_quote || "",
    description: item.attributes.field_description?.value || "",
    steps: resolveSteps(item, included),
    btnText: item.attributes.field_button_text || "",
    bgColor: item.attributes.field_bg_color || "#F2E2DA",
    href: item.attributes.field_href?.uri?.replace(/^internal:/, "") || "",
  }));

  return (
    <div>
      <section className="w-full px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-[300px] md:max-w-none">
            <h2 className="text-[36px] md:text-[2.8vw] font-bold text-[#222] leading-tight text-left md:text-center">
              Find Your Fit
            </h2>

            <p className="mt-4 text-[16px] md:text-[1.05vw] leading-[26px] text-[#4A4A4A] text-left md:text-center">
              Whether you want to join a group, take a proven route and make it
              your own, or build something entirely from scratch, there&apos;s a
              way of travelling with us that fits exactly how you like to do it.
            </p>
          </div>
        </div>
      </section>

      {journeyTypes.map((journey) => (
        <Journey
          key={journey.id}
          title={journey.title}
          imageSrc={journey.imageSrc}
          imageQuote={journey.imageQuote}
          description={journey.description}
          steps={journey.steps}
          btnText={journey.btnText}
          bgColor={journey.bgColor}
          href={journey.href}
        />
      ))}
    </div>
  );
}
