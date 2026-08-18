import Image from "next/image";
import { getBlock, resolveRefs } from "@/lib/blockContent";

const INCLUDE = "field_cards";

const FALLBACK_EXPERIENCE_TRAVEL = {
  heading: "Experience travel the way it should be with TravelOStyle",
  paragraph1:
    "Our team comes bearing 30+ years of experience within the travel industry — across budgets, travel styles, and expectations. We have fulfilled journeys by land, air and cruise, for travellers from all spheres of life.",
  paragraph2:
    "Our recommendations come from knowledge, and a thirst to explore the world and journey beyond what we've always known.",
  cards: [
    {
      title: "Destination\nKnowledge",
      desc: "We help you understand what suits your season, pace, budget and purpose of travel",
      stars: 1,
    },
    {
      title: "Operational\nCare",
      desc: "Good travel is felt in the absence of friction. We think ahead, organize clearly, and communicate openly.",
      stars: 2,
    },
    {
      title: "Response\nSpeed",
      desc: "When something matters to you, it matters to us. You can always reach out to us for anything.",
      stars: 3,
    },
    {
      title: "On-Ground\nSupport",
      desc: "If plans change, we won't leave it to you to figure it out alone. We're in this together.",
      stars: 4,
    },
  ],
};

async function getExperienceTravelContent() {
  const result = await getBlock("experience_travel", INCLUDE);
  if (!result?.block) return null;

  const { block, included } = result;

  const heading = block.attributes?.field_heading || "";
  const description = block.attributes?.field_description?.value || "";
  const [paragraph1 = "", paragraph2 = ""] = description.split(/\n\s*\n/);

  const cards = resolveRefs(block, included, "field_cards").map((card) => ({
    title: card.attributes?.field_card_title || "",
    desc: card.attributes?.field_card_description?.value || "",
    stars: card.attributes?.field_star_count || 0,
  }));

  if (!heading || cards.length === 0) return null;

  return { heading, paragraph1, paragraph2, cards };
}

export default async function ExperienceTravelSection() {
  const content =
    (await getExperienceTravelContent()) || FALLBACK_EXPERIENCE_TRAVEL;
  const { heading, paragraph1, paragraph2, cards } = content;

  return (
    <section className="w-full bg-[#f4f4f4] max-md:bg-[#fcfcfc] px-6 py-16 md:px-14 max-md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 max-md:max-w-[390px] max-md:gap-8">
        
        <div className="max-w-[500px]">
          <h2
            className="mb-6 font-taprom text-[2.4vw] text-ink max-md:text-[28px] max-md:leading-[36px] max-md:mb-5"
            style={{ letterSpacing: "var(--ls-heading-taprom-md)" }}
          >
            {heading}
          </h2>

          <p
            className="mb-4 text-ink max-md:text-[13px] max-md:leading-[22px] max-md:text-[#4a4a4a]"
            style={{
              fontSize: "var(--fs-body-nohemi-light)",
              fontWeight: "var(--fw-body-nohemi-light)",
              letterSpacing: "var(--ls-body-nohemi-light)",
            }}
          >
            {paragraph1}
          </p>

          <p
            className="text-ink max-md:text-[13px] max-md:leading-[22px] max-md:text-[#4a4a4a]"
            style={{
              fontSize: "var(--fs-body-nohemi-light)",
              fontWeight: "var(--fw-body-nohemi-light)",
              letterSpacing: "var(--ls-body-nohemi-light)",
            }}
          >
            {paragraph2}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-md:flex max-md:flex-col max-md:gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[4px] max-md:rounded-[6px] border border-[#5b5fae] max-md:border-[#7175c0]/60 bg-[#e8edc9] max-md:bg-[#eef3d4] p-6 max-md:p-5 flex flex-col"
            >
            
              <div className="mb-5 max-md:mb-3 flex items-center gap-0.5">
                {[...Array(card.stars)].map((_, i) => (
                  <Image
                    key={i}
                    src="/ConcaveStar.svg"
                    alt="star"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] max-md:w-[18px] max-md:h-[18px]"
                  />
                ))}
              </div>
              <h3 className="mb-2 whitespace-pre-line text-[1.2vw] font-semibold leading-[1.2] text-ink max-md:text-[16px] max-md:leading-[20px] max-md:font-bold max-md:whitespace-normal">
                {card.title}
              </h3>
              <p className="text-[0.8vw] leading-6 text-ink max-md:text-[13px] max-md:leading-[20px] max-md:text-[#333333]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}