"use client";

import Image from "next/image";
import { Clock3, MapPin, Info } from "lucide-react";
import MobileNavigationMenu from "./MobileNavigationMenu";
import { useState } from "react";

// Each tag has its own bg/text color matching the screenshot
const CATEGORY_TAGS = [
  { label: "Early Bird Offer", bg: "#F5DFC9", text: "#6A5B4E" },
  { label: "Culture & Heritage", bg: "#D8E8F8", text: "#1B4F72" },
  { label: "Leisure", bg: "#D8E8F8", text: "#1B4F72" },
  { label: "Group Journey", bg: "#D8E8F8", text: "#1B4F72" },
  { label: "Private Journey", bg: "#D8E8F8", text: "#1B4F72" },
];
export default function HeroSection({
  journey,
  departures,
  inclusions,
  exclusions
}) {
  const [activeView, setActiveView] = useState("menu");
  return (
    <>
      <section className="w-full bg-white hidden md:block">
        <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-white px-[3vw] py-[0.55vw]">

          <div className="flex items-center gap-[0.45vw]">
            {CATEGORY_TAGS.map((tag) => (
              <span
                key={tag.label}
                className="cursor-pointer rounded-full px-[0.85vw] py-[0.28vw] text-[0.63vw] font-medium"
                style={{ backgroundColor: tag.bg, color: tag.text }}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-[0.3vw] text-[0.63vw] text-[#888]">
            <span className="cursor-pointer hover:underline">Home</span>
            <span className="text-[#BBB]">&gt;</span>
            <span className="cursor-pointer hover:underline">All Journeys</span>
            <span className="text-[#BBB]">&gt;</span>
            <span className="text-[#1A1A1A]">{journey.title}</span>
          </div>
        </div>

        <div className="relative w-full overflow-hidden  " style={{ height: "40vw" }}>
          <Image
            src={journey.image || "/Morocco.svg"}
            alt={journey.title || "Journey"}
            fill
            unoptimized
            className="object-cover"
            priority
          />

          <div
            className="absolute left-[3vw] top-[5vw] z-10 w-[18vw] rounded-[0.35vw] border-2 border-[#2f2d89] bg-white shadow-[0_6px_28px_rgba(0,0,0,0.22)]"
            style={{ padding: "1.3vw" }}
          >
            <h1 className="text-[1.2vw] font-bold leading-[1.28] text-[#1A1A1A]">
              {journey.title}
            </h1>
            <p className="mt-[0.5vw] text-[0.63vw] leading-[1.6] text-[#444]">
              {journey.desc}
            </p>
            <div className="mt-[0.75vw] flex items-center gap-[1vw] text-[0.6vw] text-[#333]">
              <div className="flex items-center gap-[0.28vw]">
                <Clock3 size={11} strokeWidth={1.8} />
                <span>{journey.days || "13 Days | 12 Nights"}</span>
              </div>
              <div className="flex items-center gap-[0.28vw]">
                <MapPin size={11} strokeWidth={1.8} />
                <span>{journey.destinations || "10 Destinations"}</span>
              </div>
            </div>

            <div className="my-[0.7vw] border-t border-[#EBEBEB]" />

            <div className="flex flex-col gap-[0.3vw] text-[0.63vw]">
              <div>
                <span className="font-bold text-[#1A1A1A]">Starts In: </span>
                <span className="text-[#444]">{journey.startCity || "Casablanca"}</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1A1A]">Ends In: </span>
                <span className="text-[#444]">{journey.endCity || "Marrakech"}</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1A1A]">Best Seasons: </span>
                <span className="text-[#444]">{journey.bestSeason || "Jan–March, July–Sep"}</span>
              </div>
              <div>
                <span className="font-bold text-[#1A1A1A]">Pace: </span>
                <span className="text-[#444]">{journey.pace}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-[0.7vw] border-t border-[#EBEBEB]" />

            <div className="flex items-start gap-[0.7vw]">
              <div className="shrink-0">
                <p className="text-[0.52vw] text-[#787878]">from</p>
                <p className="text-[1.55vw] font-bold leading-none text-[#1D1D1D]">
                  {journey.price || "$5000"}
                  <span className="text-[0.75vw]">*</span>
                </p>
                <p className="mt-[0.1vw] text-[0.46vw] leading-[1.3] text-[#777]">
                  /person
                  <br />
                  double occupancy*
                </p>
              </div>

              <div className="flex flex-1 items-start gap-[0.3vw] rounded-[0.3vw] border border-[#D8D8D8] bg-[#F5DFC9] px-[0.5vw] py-[0.45vw]">
                <Info
                  size={10}
                  className="mt-[0.1vw] shrink-0 text-[#555]"
                />
                <p className="text-[0.5vw] leading-[1.4] text-[#555]">
                  {journey.offer ||
                    "Black Friday offer available for August & September departure/s"}
                </p>
              </div>
            </div>

            <button className="mt-[0.8vw] h-[2vw] w-full rounded-full bg-[#2D3482] text-[0.7vw] font-semibold text-white transition hover:bg-[#252b78]">
              Request a Private Journey
            </button>

            <div className="mt-[0.65vw] text-[0.57vw] text-[#555]">
              Want to make this itinerary entirely your own?
              <br />
              <button className="mt-[0.1vw] font-bold text-[#1A1A1A] underline underline-offset-[2px]">
                Tailor This Journey For You
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOBILE DESIGN ================= */}
      <div className="block md:hidden   ">
        <div className="px-4 py-3 text-[11px] text-[#666]">
          Home &gt; All Journeys &gt;
          <span className="font-medium text-[#222]"> {journey.title}</span>
        </div>

        {activeView === "menu" && <div className="relative">
          <div className="relative h-[580px] w-full">
            <Image
              src={journey.image || "/Morocco.svg"}
              alt={journey.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute left-4 right-4 top-3 rounded-md border-2 border-[#3A3A3A] bg-white p-4 shadow-lg">
              <h1 className="text-[28px] font-bold leading-[34px] text-[#1A1A1A]">
                {journey.title}
              </h1>

              <p className="mt-2 text-[15px] leading-[24px] text-[#555]">
                {journey.desc}
              </p>

              <div className="mt-4 flex items-center gap-6 text-[15px] text-[#444]">
                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <span>{journey.days || "13 Days | 12 Nights"}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{journey.destinations || "10 Destinations"}</span>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-[16px]">
                <div>
                  <span className="font-bold">Best Seasons:</span>{" "}
                  {journey.bestSeason || "Jan–March, July–Sep"}
                </div>

                <div>
                  <span className="font-bold">Pace:</span>{" "}
                  {journey.pace || "Moderate"}
                </div>

                <div>
                  <span className="font-bold">Group Size:</span> upto 18 guests
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded bg-[#DDEDFB] px-4 py-2 text-[14px] font-medium">
                  Culture & Heritage
                </span>

                <span className="rounded bg-[#DDEDFB] px-4 py-2 text-[14px] font-medium">
                  Leisure
                </span>

                <span className="rounded bg-[#E8EBCF] px-4 py-2 text-[14px] font-medium">
                  Group Journey
                </span>

                <span className="rounded bg-[#E8EBCF] px-4 py-2 text-[14px] font-medium">
                  Private Journey
                </span>
              </div>
            </div>
          </div>

          <div className="-mt-2 overflow-hidden rounded-t-[20px] border-2 border-[#333] bg-white">
            <div className="flex border-b">
              <div className="flex-1 p-4">
                <p className="text-[12px] text-[#666]">from</p>

                <div className="flex items-end">
                  <span className="text-[42px] font-bold">
                    {journey.price || "$5000"}
                  </span>
                  <span className="mb-1 ml-1 text-[16px]">/person</span>
                </div>

                <p className="text-[14px] text-[#777] line-through">
                  was $6500
                </p>
              </div>

              <div className="w-[52%] bg-[#F6EEE8] p-4">
                <div className="flex gap-2">
                  <Info size={20} />
                  <p className="text-[15px] leading-[24px]">
                    Early Bird Offers available for August & September
                    Departures
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 border-t border-[#2E2E2E] bg-white px-4 py-3">
              <button className="rounded-full bg-[#2B2D82] px-6 py-2 text-[15px] font-semibold text-white">
                Check Dates
              </button>

              <span className="text-[15px] text-[#333]">OR</span>

              <button className="text-[15px] font-semibold text-[#1A1A1A] underline underline-offset-2">
                Request a Private Journey
              </button>
            </div>
          </div>
        </div>}
      </div>
      <MobileNavigationMenu
        journey={journey}
        departures={departures}
        activeView={activeView}
        inclusions={inclusions}
        exclusions={exclusions}
        setActiveView={setActiveView}
      />

    </>
  );
}
