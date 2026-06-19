"use client";

import Image from "next/image";
import { Clock3, MapPin, Info } from "lucide-react";

// Each tag has its own bg/text color matching the screenshot
const CATEGORY_TAGS = [
  { label: "Early Bird Offer",    bg: "#F5DFC9", text: "#6A5B4E" },
  { label: "Culture & Heritage",  bg: "#D8E8F8", text: "#1B4F72" },
  { label: "Leisure",             bg: "#D8E8F8", text: "#1B4F72" },
  { label: "Group Journey",       bg: "#D8E8F8", text: "#1B4F72" },
  { label: "Private Journey",     bg: "#D8E8F8", text: "#1B4F72" },
];

export default function HeroSection({ journey }) {
  return (
    <section className="w-full bg-white">
      {/* ── Category Tags Bar ── */}
      <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-white px-[3vw] py-[0.55vw]">
        {/* Filled pill tags — each with its own colour */}
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

        {/* Breadcrumb */}
        <div className="flex items-center gap-[0.3vw] text-[0.63vw] text-[#888]">
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="text-[#BBB]">&gt;</span>
          <span className="cursor-pointer hover:underline">All Journeys</span>
          <span className="text-[#BBB]">&gt;</span>
          <span className="text-[#1A1A1A]">{journey.title}</span>
        </div>
      </div>

      {/* ── Hero: Full-width image + floating card ── */}
      <div className="relative w-full overflow-hidden  " style={{ height: "40vw" }}>
        {/* Background image fills entire hero */}
        <Image
          src={journey.image || "/Morocco.svg"}
          alt={journey.title || "Journey"}
          fill
          className="object-cover"
          priority
        />

        {/* Floating white card — top-left over the image */}
        <div
          className="absolute left-[3vw] top-[5vw] z-10 w-[18vw] rounded-[0.35vw] border-2 border-[#2f2d89] bg-white shadow-[0_6px_28px_rgba(0,0,0,0.22)]"
          style={{ padding: "1.3vw" }}
        >
          {/* Title */}
          <h1 className="text-[1.2vw] font-bold leading-[1.28] text-[#1A1A1A]">
            {journey.title}
          </h1>

          {/* Description */}
          <p className="mt-[0.5vw] text-[0.63vw] leading-[1.6] text-[#444]">
            {journey.desc}
          </p>

          {/* Days + Destinations row */}
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

          {/* Divider */}
          <div className="my-[0.7vw] border-t border-[#EBEBEB]" />

          {/* Stats: bold label + value inline */}
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
              <span className="text-[#444]">{journey.pace || "Moderate"}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-[0.7vw] border-t border-[#EBEBEB]" />

          {/* Price + Offer box — SIDE BY SIDE */}
          <div className="flex items-start gap-[0.7vw]">
            {/* Price (left) */}
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

            {/* Offer info box (right) */}
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

          {/* CTA Button */}
          <button className="mt-[0.8vw] h-[2vw] w-full rounded-full bg-[#2D3482] text-[0.7vw] font-semibold text-white transition hover:bg-[#252b78]">
            Request a Private Journey
          </button>

          {/* Tailor link */}
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
  );
}
