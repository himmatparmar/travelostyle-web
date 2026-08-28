import Image from "next/image";
import React from "react";

export default function CustomFromGroundUp() {
  return (
    <>
      <section className="relative bg-white py-8 sm:py-10 overflow-hidden" style={{ paddingInline: "clamp(16px, 3.6vw, 69px)" }}>
        <div className="gap-8 items-start relative max-w-[1704px] mx-auto">
          <div className="md:col-span-7 space-y-6 md:pr-8 relative">
          
            <div className="block md:hidden relative pt-14">
              <div className="absolute -top-12 right-0 w-[180px] h-[150px] z-0 pointer-events-none">
                <Image
                  src="/CustomFormLine.svg"
                  alt="Dashed Swirl Line"
                  fill
                  className="object-contain object-top-right"
                  priority
                />
              </div>
              <div className="relative z-10 flex flex-col gap-1 mb-12">
                <div className="inline-block w-fit bg-[#F3E3DC] px-1.5 py-[2px]">
                  <h2 className="font-taprom text-[34px] leading-[0.92] font-normal text-[#111111]">
                    Custom, from
                  </h2>
                </div>

                <div className="inline-block w-fit bg-[#F3E3DC] px-1.5 py-[2px]">
                  <h2 className="font-taprom text-[34px] leading-[0.92] font-normal text-[#111111]">
                    the ground up
                  </h2>
                </div>
              </div>

              <div className="absolute left-[-32px] bottom-[-55px] z-0">
                <Image
                  src="/ResLine2Journey.svg"
                  alt="Journey Line"
                  width={80}
                  height={80}
                  className="w-[80px] h-auto"
                  priority
                />
              </div>
            </div>
            <div className="hidden md:inline-block relative w-fit my-0">
              <span className="absolute inset-x-0 top-[0.18em] bottom-[0.16em] bg-[#F3E3DC] rounded-xs" />
              <h2 className="relative z-10 font-taprom text-4xl sm:text-5xl md:text-[44px] text-[#111111] leading-[1.15] px-2 tracking-wide font-normal">
                Custom, from the ground up
              </h2>
            </div>

            <div className="space-y-5 mt-4 text-black text-xs sm:text-sm md:text-[21px] leading-[1.85] max-w-[min(1052px,calc(100%-360px))] relative z-10">
              <p>
                We start where you are, not where we like you to be or where the
                average itinerary tends to go. We begin with your reality — your
                time, your budget, your energy, your hopes, your habits — and
                from there, we show you how far that can take you.
              </p>

              <p>
                If a destination is more beautiful in a different season, we’ll
                tell you. If there’s a better-value option that delivers the
                same experience, we’ll offer it. If something genuinely won’t
                work for your group, we’ll let you know. And we’ll suggest what
                will.
              </p>

              <p>
                Tailor-made journeys aren’t simply about the itinerary document.
                TravelOStyle advisors are available throughout the process —
                during planning, before departure, and on the ground if you need
                us.
              </p>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-5 justify-end items-start  md:absolute md:right-0 md:top-10 lg:-top-32 lg:right-0 2xl:-right-[125px] z-10">
            <Image
              src="/ground-up.png"
              alt="Dashed Swirl Line Journey Vector"
              width={450}
              height={200}
              className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[min(914px,48vw)] h-auto object-contain translate-x-0 md:-translate-x-4"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
