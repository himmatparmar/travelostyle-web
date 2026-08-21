
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buildFileUrl } from "@/lib/config";
import ComingSoon from "@/components/ComingSoon";

const PLACEHOLDER_IMAGE = "/placeholder-image.svg";

export default function PopularDestinations({
  journeys,
  included,
  heroHeading,
  heroDescription,
}) {
  const router = useRouter();
  const heading = heroHeading || "Coming Soon";
  const description = heroDescription || "";

  const [currentIndex, setCurrentIndex] = useState(0);

  // Parent se already FILTERED popular journeys aa rahi hain
  const popularJourneys = journeys.map((item) => {
    const mediaId =
      item.relationships?.field_journey_image?.data?.id;

    const mediaEntity = included.find(
      (inc) =>
        inc.type === "media--image" &&
        inc.id === mediaId
    );

    const fileId =
      mediaEntity?.relationships?.field_media_image?.data?.id;

    const fileEntity = included.find(
      (inc) =>
        inc.type === "file--file" &&
        inc.id === fileId
    );

    const rawUrl = fileEntity?.attributes?.uri?.url;

    return {
      ...item,
      image: buildFileUrl(rawUrl) || PLACEHOLDER_IMAGE,
    };
  });

  // Drupal mein koi Popular = Yes nahi hai
  if (!popularJourneys.length) {
    return <ComingSoon label="Popular Destinations" />;
  }

  const currentJourney = popularJourneys[currentIndex];

  return (
    <div className="relative md:h-[700px]">

      {/* MOBILE */}
      <div className="block md:hidden bg-[#F6F6F6]">
        <div className="relative overflow-hidden">

          <img
            src={currentJourney?.image || PLACEHOLDER_IMAGE}
            alt={currentJourney?.attributes?.title || "travel"}
            className="h-[600px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute top-16 left-5 right-5 z-10">
            <h2 className="text-white text-[24px] leading-[30px] font-bold max-w-[220px]">
              Your Next Journey Awaits
            </h2>

            <p className="mt-4 text-white text-[14px] leading-[22px] max-w-[260px]">
              We have mapped the route, sourced the stays, and scaled the
              details — all you have to do is show up.
            </p>

            <p className="mt-4 text-white text-[14px] leading-[22px] max-w-[250px]">
              Live your next story with TravelOStyle.
            </p>

            <button className="mt-5 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#2E2787]">
              View Group Journeys
            </button>
          </div>

          <div className="absolute bottom-12 left-5 right-5 z-10 flex flex-col gap-3">
            <p className="text-[12px] text-white">
              {currentJourney?.attributes?.title}
            </p>

            <div className="h-[1px] w-full bg-white/80" />
          </div>

          <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between">

            <button
              onClick={() => {
                setCurrentIndex((prev) =>
                  prev === 0
                    ? popularJourneys.length - 1
                    : prev - 1
                );
              }}
            >
              <Image
                src="/WhiteLeftArrow.svg"
                alt="Previous"
                width={42}
                height={42}
              />
            </button>

            <button
              onClick={() => {
                setCurrentIndex((prev) =>
                  prev === popularJourneys.length - 1
                    ? 0
                    : prev + 1
                );
              }}
            >
              <Image
                src="/WhiteRightArrow.svg"
                alt="Next"
                width={42}
                height={42}
              />
            </button>

          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block relative h-[720px]">

        <img
          src={currentJourney?.image || PLACEHOLDER_IMAGE}
          alt={currentJourney?.attributes?.title || "travel"}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative h-[700px]">

          <div className="absolute top-[170px] left-[70px] z-10 max-w-[560px]">

            <h1 className="text-white text-[54px] font-semibold leading-[60px]">
              {heading}
            </h1>

            <p className="mt-6 text-white/90 text-[14px] leading-[24px] max-w-[500px]">
              {description}
            </p>

            <button className="mt-8 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#2E2787]">
              Explore Popular Destinations
            </button>

          </div>

          <div className="absolute bottom-[80px] left-[70px] right-[70px] z-10">

            <p className="text-[12px] text-white">
              {currentJourney?.attributes?.title}
            </p>

            <div className="h-[1px] w-full bg-white/70" />

          </div>

          <div className="absolute bottom-[40px] left-[70px] z-10 flex items-center gap-4">

            <button
              onClick={() => {
                setCurrentIndex((prev) =>
                  prev === 0
                    ? popularJourneys.length - 1
                    : prev - 1
                );
              }}
            >
              <Image
                src="/WhiteLeftArrow.svg"
                alt="Previous"
                width={42}
                height={42}
              />
            </button>

            <button
              onClick={() => {
                setCurrentIndex((prev) =>
                  prev === popularJourneys.length - 1
                    ? 0
                    : prev + 1
                );
              }}
            >
              <Image
                src="/WhiteRightArrow.svg"
                alt="Next"
                width={42}
                height={42}
              />
            </button>

          </div>

          <div className="absolute bottom-[-15px] right-[70px] z-10 flex flex-col items-end gap-3">

            <p className="text-[11px] text-white/70">
              Images are only for representation purposes
            </p>
<button
  onClick={() => router.push("/comparison")}
  className="mb-5 hidden md:flex box-border h-[47px] w-[210px] items-center justify-center gap-[10px] rounded-[10px] border-2 border-white bg-[#2E2787] px-[24px] py-[16px] text-white transition-colors hover:bg-[#3B33A0]"
>
  <span className="h-[15px] w-[162px] whitespace-nowrap text-center text-[15px] leading-[15px] font-semibold">
    Compare Trips
  </span>
</button>
          </div>

        </div>
      </div>
    </div>
  );
}
