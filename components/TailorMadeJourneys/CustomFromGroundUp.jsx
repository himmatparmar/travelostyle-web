import Image from "next/image";
import React from "react";

export default function CustomFromGroundUp() {
  return (
    <>
      <section className="relative bg-white py-8 sm:py-16 pl-6 sm:pl-12 lg:pl-20 pr-0 overflow-hidden min-h-[480px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          <div className="md:col-span-7 space-y-6 pr-4 sm:pr-8">
            <div className="relative inline-block my-2">
              <span className="absolute inset-y-1 inset-x-0 bg-[#f2e2da] -z-0 rounded-xs transform scale-y-75 sm:scale-y-80" />
              <h2 className="relative z-10 font-taprom text-4xl sm:text-5xl md:text-[52px] text-[#111111] leading-none px-2 tracking-wide font-normal">
                Custom, from the ground up
              </h2>
            </div>
            <div className="space-y-6 mt-5 text-[#555555] text-xs sm:text-sm md:text-[15px] leading-relaxed">
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

          <div className="md:col-span-5 flex justify-end items-start md:absolute md:right-0 md:top-2 lg:-top-6 z-10">
            <Image
              src="/DashedSwirlLine.svg"
              alt="Dashed Swirl Line Journey Vector"
              width={450}
              height={200}
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] h-auto object-contain translate-x-4 md:translate-x-8"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
