import { getBlock, resolveMediaImage, resolveRefs } from "@/lib/blockContent";
import Index from "./index";

const MATRIX_INCLUDE = "field_features.field_image.field_media_image,field_matrix_rows";
const WHY_INCLUDE = "field_features";
const STEPS_INCLUDE = "field_steps";
const PLACEHOLDER_IMAGE = "/placeholder-image.svg";

function mapMatrix(result) {
  if (!result?.block) return null;
  const { block, included } = result;

  const features = resolveRefs(block, included, "field_features").map((f) => ({
    imgUrl: resolveMediaImage(f, included, "field_image") || PLACEHOLDER_IMAGE,
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
function stripHtml(html) {
  return (html || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .trim();
}


function mapWhyTake(result) {
  if (!result?.block) return null;
  const { block, included } = result;

  const features = resolveRefs(block, included, "field_features").map((f) => ({
    title: f.attributes?.field_item_title || "",
    description: stripHtml(
        f.attributes?.field_description?.value || ""
      ),
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
    bgColor: s.attributes?.field_bg_color || "#ffffff",
  }));

  return {
    subheading: block.attributes?.field_subheading || "",
    mainHeading: block.attributes?.field_heading || "",
    steps,
  };
}

function mapAdvisorCallout(result) {
  if (!result?.block) return null;
  const { block } = result;

  const heading = block.attributes?.field_heading || "";
  const paragraph1 = stripHtml(block.attributes?.field_paragraph_1?.value || "");
  const paragraph2 = stripHtml(block.attributes?.field_paragraph_2?.value || "");
  const buttonText = block.attributes?.field_button_text || "";

  if (!heading) return null;

  return { heading, paragraph1, paragraph2, buttonText };
}

export default async function PrivateJourneyContent() {
  const [matrixResult, whyResult, stepsResult, advisorResult] = await Promise.all([
    getBlock("journey_type_matrix", MATRIX_INCLUDE, {
      filter: { info: "Journey Type Matrix - Private Journeys" },
    }),
    getBlock("why_take_journey", WHY_INCLUDE, {
      filter: { info: "Why Take Journey - Private" },
    }),
    getBlock("booking_steps", STEPS_INCLUDE, {
      filter: { info: "Booking Steps - Private" },
    }),
    getBlock("advisor_callout", undefined, {
      filter: { info: "Advisor Callout - Private" },
      revalidate: 60,
    }),
  ]);

  return (
    <Index
      matrixContent={mapMatrix(matrixResult)}
      whyTakeContent={mapWhyTake(whyResult)}
      bookingStepsContent={mapBookingSteps(stepsResult)}
      advisorCalloutContent={mapAdvisorCallout(advisorResult)}
    />
  );
}
