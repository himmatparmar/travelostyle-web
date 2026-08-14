import { getBlock, resolveMediaImage, resolveRefs } from "@/lib/blockContent";
import Index from "./Index";

const MATRIX_INCLUDE = "field_features.field_image,field_matrix_rows";
const WHY_INCLUDE = "field_features";
const STEPS_INCLUDE = "field_steps";

const FALLBACK_FEATURE_IMAGES = ["/TeresaWang.svg", "/ManuPrasad.svg", "/GoupPeople.svg"];

function mapMatrix(result) {
  if (!result?.block) return null;
  const { block, included } = result;

  const features = resolveRefs(block, included, "field_features").map((f, i) => ({
    imgUrl:
      resolveMediaImage(f, included, "field_image") ||
      FALLBACK_FEATURE_IMAGES[i % FALLBACK_FEATURE_IMAGES.length],
    description: f.attributes?.field_description?.value || "",
  }));

  const matrixRows = resolveRefs(block, included, "field_matrix_rows").map((r) => ({
    label: r.attributes?.field_label || "",
    text: r.attributes?.field_text?.value || "",
  }));

  return {
    badgeText: block.attributes?.field_badge_text || "",
    titleText: block.attributes?.field_title_text?.value || "",
    topIntroText: block.attributes?.field_top_intro_text?.value || "",
    footerText: block.attributes?.field_footer_text?.value || "",
    features,
    matrixRows,
  };
}

function mapWhyTake(result) {
  if (!result?.block) return null;
  const { block, included } = result;

  const features = resolveRefs(block, included, "field_features").map((f) => ({
    title: f.attributes?.field_item_title || "",
    description: f.attributes?.field_description?.value || "",
  }));

  return {
    heading: block.attributes?.field_heading || "",
    ctaTitle: block.attributes?.field_cta_title || "",
    ctaSubtitle: block.attributes?.field_cta_subtitle || "",
    ctaButtonText: block.attributes?.field_cta_button_text || "",
    features,
  };
}

function mapBookingSteps(result) {
  if (!result?.block) return null;
  const { block, included } = result;

  const steps = resolveRefs(block, included, "field_steps").map((s) => ({
    number: s.attributes?.field_step_number || "",
    title: s.attributes?.field_step_title || "",
    description: s.attributes?.field_step_description?.value || "",
    bgColor: s.attributes?.field_bg_color ? `bg-[${s.attributes.field_bg_color}]` : "bg-white",
  }));

  return {
    subheading: block.attributes?.field_subheading || "",
    mainHeading: block.attributes?.field_heading || "",
    steps,
  };
}

export default async function GroupJourneyContent() {
  const [matrixResult, whyResult, stepsResult, heroResult] = await Promise.all([
    getBlock("journey_type_matrix", MATRIX_INCLUDE, {
      filter: { info: "Journey Type Matrix - Group Journeys" },
    }),
    getBlock("why_take_journey", WHY_INCLUDE, {
      filter: { info: "Why Take Journey - Group" },
    }),
    getBlock("booking_steps", STEPS_INCLUDE, {
      filter: { info: "Booking Steps - Group" },
    }),
    getBlock("page_hero", undefined, { filter: { field_page_key: "group" } }),
  ]);

  return (
    <Index
      matrixContent={mapMatrix(matrixResult)}
      whyTakeContent={mapWhyTake(whyResult)}
      bookingStepsContent={mapBookingSteps(stepsResult)}
      heroDescription={heroResult?.block?.attributes?.field_description?.value}
    />
  );
}
