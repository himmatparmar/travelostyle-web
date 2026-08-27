"use client";
import { useRouter } from "next/navigation";

const trustItems = [
  "Trusted local partners",
  "24/7 on-ground support",
  "Transparent inclusions",
];

// Inspirational (tailor-made) journeys have no dates/pricing to compare
// against other departures, so "Compare Trips" doesn't apply there — the
// fourth slot instead reads "Advisor-led planning" as plain text, same
// as the other three items. Group/Private journeys keep the "Compare
// Trips" button as before.
export default function TrustBar({ isInspirational = false }) {
  const router = useRouter();
  const mobileItems = isInspirational
    ? [...trustItems, "Advisor-led planning"]
    : trustItems;

  return (
    <>
      {/* ================= MOBILE ================= */}
      {/* Figma: 390x64 band at y=794, #F2E2DA, items 18px/600 starting at
          x=27 with the second item at x=288 — i.e. wider than the viewport,
          so the row scrolls horizontally instead of wrapping. */}
      <div className="block h-[64px] w-full border-y-2 border-[#1A1A1A] bg-[#F2E2DA] md:hidden">
        <div className="md:flex md:h-full items-center gap-[24px] overflow-x-auto px-[27px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {mobileItems.map((label, i) => (
            <div key={i} className="flex shrink-0 items-center gap-[24px]">
              {i > 0 && (
                <span className="text-[12px] font-bold text-[#1A1A1A]">✦</span>
              )}
              <span className="whitespace-nowrap text-[18px] font-semibold leading-[24px] tracking-[0.05em] text-[#1A1A1A]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      {/* justify-between over the full width (not justify-center with a
          fixed gap) so the row actually spreads edge-to-edge — centering
          it bunched everything into the middle of the bar instead of
          spreading across the whole width like the reference design. */}
      <div className="hidden w-full border-y border-[#EAE0D8] bg-[#F2E2DA] md:block">
        {/* Stars are their own flex items (siblings of the labels), not
            glued to the label before them — that way justify-between
            spreads every slot, star included, evenly across the row, so
            each star lands centered in the gap between the two items on
            either side of it instead of sitting right next to one of them. */}
        <div className="flex items-center justify-between px-[3vw] py-[1.15vw]">
          {trustItems?.map((label) => (
            <span
              key={label}
              className="text-[18px] font-semibold text-ink whitespace-nowrap"
            >
              {label}
            </span>
          )).reduce((acc, node, i) => {
            if (i > 0) {
              acc.push(
                <span
                  key={`star-${i}`}
                  className="flex items-center justify-center leading-none text-[0.9vw] font-bold text-ink"
                >
                  ✦
                </span>,
              );
            }
            acc.push(node);
            return acc;
          }, [])}

          <span className="flex items-center justify-center leading-none text-[0.9vw] font-bold text-ink">
            ✦
          </span>

          {isInspirational ? (
            <span className="text-[18px] font-semibold text-ink whitespace-nowrap">
              Advisor-led planning
            </span>
          ) : (
            <button
              onClick={() => router.push("/comparison")}
              className="flex items-center justify-center h-[36px] px-5 rounded-[6px] bg-[#2E2787] text-white text-[14px] font-semibold border border-white hover:bg-[#3B33A0] transition-colors"
            >
              Compare Trips
            </button>
          )}
        </div>
      </div>
    </>
  );
}
