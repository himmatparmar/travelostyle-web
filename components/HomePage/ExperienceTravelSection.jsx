import Image from "next/image";
import { getBlock, resolveRefs } from "@/lib/blockContent";
import ComingSoon from "@/components/ComingSoon";

const INCLUDE = "field_cards";

function stripHtml(html) {
  return (html || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .trim();
}

async function getExperienceTravelContent() {
  const result = await getBlock("experience_travel", INCLUDE, { revalidate: 60 });
  if (!result?.block) return null;

  const { block, included } = result;

  const heading = block.attributes?.field_heading || "";
  const description = block.attributes?.field_description?.value || "";
  const [paragraph1 = "", paragraph2 = ""] = description
    .split(/<\/p>\s*<p[^>]*>/i)
    .map(stripHtml);

  const cards = resolveRefs(block, included, "field_cards").map((card) => ({
    title: card.attributes?.field_card_title || "",
    desc: stripHtml(card.attributes?.field_card_description?.value || ""),
    stars: card.attributes?.field_star_count || 0,
  }));

  if (!heading || cards.length === 0) return null;

  return { heading, paragraph1, paragraph2, cards };
}

// The Figma design only highlights the first clause of the heading — the
// "with <brand>" tail stays plain. The brand name is data-driven, so split
// on " with " rather than hardcoding "TravelOStyle".
function splitHeading(heading) {
  const match = heading.match(/^(.*?)(\s+with\s+.+)$/i);
  return match ? [match[1], match[2]] : [heading, ""];
}


export default async function ExperienceTravelSection() {
  const content = await getExperienceTravelContent();
  if (!content) return <ComingSoon label="Experience Travel" />;
  const { heading, paragraph1, paragraph2, cards } = content;
  const [highlightedHeading, plainHeading] = splitHeading(heading);

  return (
    <section className="w-full bg-[#f4f4f4] max-md:bg-[#fcfcfc] px-6 py-16 md:px-14 max-md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 max-md:max-w-[390px] max-md:gap-8">
        
        <div className="max-w-[500px]">
          <h2
            className="mb-6 font-taprom text-[2.4vw] leading-[1.4] text-ink max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[0.05em] max-md:mb-8"
            style={{ letterSpacing: "var(--ls-heading-taprom-md)" }}
          >
            <span className="bg-[#F1E3D8] px-[3px] py-[1px] mb-5">
              Experience travel the
            </span>
            <span className="bg-[#F1E3D8] px-[3px] py-[1px] mb-2 inline-block w-fit mt-6">
              way it should be
            </span>
            {plainHeading}
          </h2>

          <p
            className="mb-4 text-ink max-md:text-[16px] max-md:leading-[22px] font-medium text-[#1A1A1A] text-[16px]"
         
          >
            {paragraph1}
          </p>

          <p
            className="mb-4 text-ink max-md:text-[16px] max-md:leading-[22px] font-medium text-[#1A1A1A] text-[16px]"
    
          >
            {paragraph2}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-md:flex max-md:flex-col max-md:items-center max-md:gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[4px] max-md:w-[337px] max-md:h-[264px] max-md:rounded-[5px] border border-[#5b5fae] max-md:border-2 max-md:border-[#2C3078] bg-[#e8edc9] max-md:bg-[#EFF3CF] p-6 max-md:p-5 flex flex-col"
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
              <h3 className="mb-2 whitespace-pre-line text-[1.2vw] font-semibold leading-[1.2] text-ink max-md:text-[21px] max-md:leading-[20px] max-md:font-bold max-md:whitespace-normal">
                {card.title}
              </h3>
              <p className="text-[16px] leading-6 text-ink max-md:text-[16px] max-md:leading-[20px] max-md:text-[#1A1A1A] mt-[10px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}