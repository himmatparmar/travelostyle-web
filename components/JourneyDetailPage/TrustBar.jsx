"use client";
import { useRouter } from "next/navigation";

const trustItems = [
  "Trusted local partners",
  "24/7 on-ground support",
  "Transparent inclusions",
];

export default function TrustBar() {
  const router = useRouter();
  return (
    <>
      {/* ================= MOBILE ================= */}
      {/* Figma: 390x64 band at y=794, #F2E2DA, items 18px/600 starting at
          x=27 with the second item at x=288 — i.e. wider than the viewport,
          so the row scrolls horizontally instead of wrapping. */}
      <div className="block h-[64px] w-full border-y-2 border-[#1A1A1A] bg-[#F2E2DA] md:hidden">
        <div className="md:flex md:h-full items-center gap-[24px] overflow-x-auto px-[27px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {trustItems.map((label, i) => (
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
      <div className="hidden w-full border-y border-[#EAE0D8] bg-[#F2E2DA] md:block">
        <div className="flex items-center justify-around py-[1.15vw]">
          <div className="flex items-center justify-around py-[1.15vw]">
            {trustItems?.map((label, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <span className="mx-[2.8vw] text-[0.9vw] font-bold text-ink">
                    ✦
                  </span>
                )}

                <span className="text-[18px] font-semibold text-ink">
                  {label}
                </span>
              </div>
            ))}

            <span className="mx-[2.8vw] text-[0.9vw] font-bold text-ink">✦</span>

            <button
              onClick={() => router.push("/comparison")}
              className="hidden md:flex items-center justify-center h-[36px] px-5 rounded-[6px] bg-[#2E2787] text-white text-[14px] font-semibold border border-white hover:bg-[#3B33A0] transition-colors"
            >
              Compare Trips
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
