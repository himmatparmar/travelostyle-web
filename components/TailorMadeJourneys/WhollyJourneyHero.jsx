import { getBlock } from "@/lib/blockContent";

const FALLBACK_HEADING = "What if your next journey aligned with you wholly?";
const FALLBACK_DESCRIPTION =
  "A journey that starts from who you are, how you like to travel, what you would like to experience – and expands outward from there. That's what TravelOStyle tailor-made journeys look like.";

async function getTailorMadeHero() {
  const result = await getBlock("page_hero", undefined, {
    filter: { field_page_key: "tailormade" },
  });
  if (!result?.block) return null;
  return {
    heading: result.block.attributes?.field_heading || "",
    description: result.block.attributes?.field_description?.value || "",
  };
}

export default async function WhollyJourneyHero() {
  const hero = await getTailorMadeHero();
  const heading = hero?.heading || FALLBACK_HEADING;
  const description = hero?.description || FALLBACK_DESCRIPTION;

  return (
    <section className="relative w-full h-[600px] md:h-[680px] lg:h-[520px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/Wildlife.jpg"
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
            <button className="bg-white hover:bg-gray-100 text-[#1C355E] text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-95">
              Craft Your Journey
            </button>
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
