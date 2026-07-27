import Image from "next/image";

export const DEFAULT_HIGHLIGHTS = [
  {
    type: "text",
    text: "Ancient Medinas where the call to prayer still echoes off the same walls of always-narrow alleyways, where the spice merchant and silk traders are still there.",
  },
  {
    type: "image",
    image: "/Morocco.svg",
    alt: "Roman ruins in Morocco",
  },
  {
    type: "text",
    text: "Cedar Forests, mountain passes, a valley that seems to go on forever — this is the Morocco that changes you. All of it.",
  },
  {
    type: "text",
    text: "You've seen Ait Benhaddou in the films. Nothing prepares you for it in person.",
  },
  {
    type: "text",
    text: "Three days in Marrakech — the souks at dawn, the square at dusk, and a garden you won't forget where you are.",
  },
  {
    type: "image",
    image: "/Kenya.svg",
    alt: "Marrakech",
    caption: "Marrakech — Show Me It Is If Necessary",
  },
];

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
      <p className="text-[0.78vw] leading-[1.65] text-[#1A1A1A]">{card.text}</p>
    </div>
  );
}

export default function HighlightsSection({ highlights = DEFAULT_HIGHLIGHTS, drupalData }) {
  const cards = (drupalData && drupalData.length > 0) ? drupalData : highlights;
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
