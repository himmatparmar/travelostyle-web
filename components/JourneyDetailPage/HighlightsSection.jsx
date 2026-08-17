import Image from "next/image";


function HighlightCard({ card, tall = false }) {
  const height = tall ? "17vw" : "13vw";

  if (card.type === "image") {
    return (
      <div
        className="relative overflow-hidden rounded-[0.5vw]"
        style={{ height }}
      >
        <Image
          src={card.image}
          alt={card.alt || ""}
          fill
          unoptimized
          className="object-cover"
        />
        {card.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-[1vw] pb-[0.8vw] pt-[2vw]">
            <p className="text-[0.72vw] font-medium text-white">
              {card.caption}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col justify-center rounded-[0.5vw] border border-[#C8CE90] bg-[#EAEDC9] px-[1.2vw] py-[1.4vw]"
      style={{ height }}
    >
      <p className="text-[0.78vw] leading-[1.65] text-ink">{card.text}</p>
    </div>
  );
}

export default function HighlightsSection({ drupalData }) {
  // No Drupal data → show Coming Soon
  if (!drupalData || drupalData.length === 0) {
    return (
          <div className="flex w-full justify-center">

      <div className="mt-10 mb-10 flex min-h-[20px] w-[75%] items-center justify-center rounded-[0.5vw] border ">
        <p className="text-[24px] font-medium text-ink">
          Coming Soon
        </p>
      </div>
      </div>
    );
  }

  const cards = drupalData;
  const firstRow = cards.slice(0, 4);
  const secondRow = cards.slice(4);

  return (
    <div className="px-[5.5vw] py-[2.5vw]">
      {/* Row 1 — 4 equal columns */}
      <div className="grid grid-cols-4 gap-[1vw]">
        {firstRow.map((card, i) => (
          <HighlightCard key={i} card={card} />
        ))}
      </div>

      {/* Row 2 — 2 columns, each spanning 2 of the 4 */}
      {secondRow.length > 0 && (
        <div className="mt-[1vw] grid grid-cols-2 gap-[1vw]">
          {secondRow.map((card, i) => (
            <HighlightCard key={i + 4} card={card} tall />
          ))}
        </div>
      )}

    </div>
  );
}
