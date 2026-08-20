import { getBlock, resolveMediaImage } from "@/lib/blockContent";
import CraftJourneyButton from "../CraftJourneyButton";

const PLACEHOLDER_IMAGE = "/placeholder-image.svg";

function stripHtml(html) {
  return (html || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .trim();
}

async function getTailorMadeHero() {
  const result = await getBlock("page_hero", "field_image.field_media_image", {
    filter: { field_page_key: "tailormade" },
    revalidate: 60,
  });
  if (!result?.block) return null;
  const { block, included } = result;
  return {
    heading: block.attributes?.field_heading || "",
    description: stripHtml(block.attributes?.field_description?.value || ""),
    image: resolveMediaImage(block, included, "field_image"),
  };
}

export default async function WhollyJourneyHero() {
  const hero = await getTailorMadeHero();
  const heading = hero?.heading || "Coming Soon";
  const description = hero?.description || "";
  const image = hero?.image || PLACEHOLDER_IMAGE;

  return (
    <section className="relative w-full h-[600px] md:h-[680px] lg:h-[520px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Safari Journey Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/25" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-[45px] font-bold leading-[1.1] mb-6 tracking-normal drop-shadow-md">
            {heading}
          </h1>

          <div className="flex flex-col gap-y-5 text-base lg:text-[18px] text-white/95 font-normal leading-snug drop-shadow">
            <p>{description}</p>
          </div>
          <div className="mt-8 sm:mt-10">
              <CraftJourneyButton />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-6 z-10">
        <span className="text-[11px] sm:text-xs text-white/80 tracking-wide font-light drop-shadow-sm">
          Images are only for representation purposes
        </span>
      </div>
    </section>
  );
}
