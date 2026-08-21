"use client";

import { Clock3, MapPin, Info } from "lucide-react";
import MobileNavigationMenu from "./MobileNavigationMenu";
import PrivateInquiryForm from "@/components/PrivateInquiryForm";
import JourneyCardImage from "@/components/JourneyCardImage";
import { useState } from "react";

// Fixed badge colors matching the design (Figma) reference:
// Early Bird / offer = peach, tags (field_journey_tag, e.g. Group/Private
// Journey) = green, categories (field_category, e.g. Culture & Heritage,
// Leisure) = blue. All badge text is black, font-semibold, rounded-[5px].

// field_category is an entity reference to the "Category" taxonomy
// vocabulary (unlimited cardinality) on the journey node. We resolve it
// right here from the raw JSON:API item + included data (rather than in
// JourneyDetailClient) so all category-related logic stays in one place.
// Matching by id only (not resource type) since ids are unique across the
// whole `included` array.
function resolveCategories(item, included) {
  const data = item?.relationships?.field_category?.data;
  const arr = Array.isArray(data) ? data : data ? [data] : [];
  return arr
    .map((c) => {
      const e = included.find((i) => i.id === c.id);
      return e?.attributes?.name;
    })
    .filter(Boolean);
}

const MOCK_CATEGORIES = ["Culture & Heritage", "Leisure"];

export default function HeroSection({
  journey,
  departures,
  inclusions,
  exclusions,
  rawItem,
  included = [],
}) {
  const [activeView, setActiveView] = useState("menu");
  const [isPrivateFormOpen, setIsPrivateFormOpen] = useState(false);
  const categories = rawItem ? resolveCategories(rawItem, included) : MOCK_CATEGORIES;
  return (
    <>
    <section className="w-full bg-white hidden md:block">
      <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-white px-[3vw] py-[0.55vw]">

<div className="flex items-center gap-[10px] flex-wrap">
  {journey?.earlyBird && (
    <span
      className="cursor-pointer rounded-[5px] px-[12px] py-[8px] text-[0.63vw] font-semibold tracking-[0.05em]"
      style={{
        backgroundColor: "#F2E2DA",
        color: "#000000",
      }}
    >
      Early Bird
    </span>
  )}

  

  {categories?.map((category) => (
    <span
      key={category}
      className="cursor-pointer rounded-[5px] px-[12px] py-[8px] text-[0.63vw] font-semibold tracking-[0.05em]"
      style={{
        backgroundColor: "#C2E5FF",
        color: "#000000",
      }}
    >
      {category}
    </span>
  ))}
   {journey?.tags?.map((tag) => (
    <span
      key={tag}
      className="cursor-pointer rounded-[5px] px-[12px] py-[8px] text-[0.63vw] font-semibold tracking-[0.05em]"
      style={{
        backgroundColor: "#EFF3CF",
        color: "#000000",
      }}
    >
      {tag}
    </span>
  ))}
</div>
        <div className="flex items-center gap-[0.3vw] text-[0.63vw] text-[#888]">
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="text-[#BBB]">&gt;</span>
          <span className="cursor-pointer hover:underline">All Journeys</span>
          <span className="text-[#BBB]">&gt;</span>
          <span className="text-ink">{journey.title}</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden  " style={{ height: "40vw" }}>
        <JourneyCardImage
          src={journey.image}
          alt={journey.title || "Journey"}
        />

        <div
          className="absolute left-[3vw] top-[5vw] z-10 w-[18vw] rounded-[0.35vw] border-2 border-[#2f2d89] bg-white shadow-[0_6px_28px_rgba(0,0,0,0.22)]"
          style={{ padding: "1.3vw" }}
        >
          <h1 className="text-[1.2vw] font-bold leading-[1.28] text-ink">
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
              <span className="font-bold text-ink">Starts In: </span>
              <span className="text-[#444]">{journey.startCity || "Casablanca"}</span>
            </div>
            <div>
              <span className="font-bold text-ink">Ends In: </span>
              <span className="text-[#444]">{journey.endCity || "Marrakech"}</span>
            </div>
            <div>
              <span className="font-bold text-ink">Best Seasons: </span>
              <span className="text-[#444]">{journey.bestSeason || "Jan–March, July–Sep"}</span>
            </div>
            <div>
              <span className="font-bold text-ink">Pace: </span>
              <span className="text-[#444]">{journey.pace }</span>
            </div>
          </div>

          {/* Divider */}
         <div className="flex items-start gap-[0.7vw]">
  <div className="shrink-0">

    {/* From */}
    <p className="text-[0.52vw] text-[#787878]">
      from
    </p>

    {/* Offer Price */}
    <p className="text-[1.15vw] font-bold leading-none text-[#1D1D1D]">
      ${Number(journey.offerPrice).toLocaleString()}
      <span className="text-[0.55vw]">*</span>
    </p>

    {/* Original Price */}
    {journey.originalPrice && (
      <p className="mt-[0.25vw] text-[0.7vw] font-medium text-[#777]">
        was{" "}
        <span className="line-through">
          ${Number(journey.originalPrice).toLocaleString()}
        </span>
      </p>
    )}

    {/* Per person */}
    <p className="mt-[0.12vw] text-[0.46vw] leading-[1.3] text-[#777]">
      /person
      <br />
      double occupancy*
    </p>

  </div>

          {journey?.offer && (
  <span
    className="cursor-pointer rounded-[5px] px-[12px] py-[8px] text-[0.63vw] font-semibold tracking-[0.05em]"
    style={{
      backgroundColor: "#F2E2DA",
      color: "#000000",
    }}
  >
    {journey.offer}
  </span>
)}
          </div>

          <button
            onClick={() => setIsPrivateFormOpen(true)}
            className="mt-[0.8vw] h-[20px] w-[150px] rounded-full bg-[#2D3482] text-[0.7vw] font-semibold text-white transition hover:bg-[#252b78]"
          >
            Request a Private Journey
          </button>

          <div className="mt-[0.65vw] text-[0.57vw] text-[#555]">
            Want to make this itinerary entirely your own?
            <br />
            <button
              onClick={() => setIsPrivateFormOpen(true)}
              className="mt-[0.1vw] font-bold text-ink underline underline-offset-[2px]"
            >
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
          
       {activeView === "menu"&&<div className="relative">
          <div className="relative h-[580px] w-full">
            <JourneyCardImage
              src={journey.image}
              alt={journey.title}
            />
            <div className="absolute left-4 right-4 top-3 rounded-md border-2 border-[#3A3A3A] bg-white p-4 shadow-lg">
              <h1 className="text-[28px] font-bold leading-[34px] text-ink">
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
              <div className="mt-5 flex flex-wrap gap-[10px]">
               {journey?.offer && (
  <div className="flex flex-1 items-start gap-[0.3vw] rounded-[0.3vw] border border-[#D8D8D8] bg-[#F5DFC9] px-[0.5vw] py-[0.45vw]">
    <Info size={10} className="mt-[0.1vw] shrink-0 text-[#555]" />
    <p className="text-[0.5vw] leading-[1.4] text-[#555]">
      {journey.offer}
    </p>
  </div>
)}

                {categories?.map((category) => (
                  <span
                    key={category}
                    className="rounded-[5px] px-3 py-2 text-[14px] font-semibold tracking-[0.05em]"
                    style={{ backgroundColor: "#C2E5FF", color: "#000000" }}
                  >
                    {category}
                  </span>
                ))}

                {journey?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[5px] px-3 py-2 text-[14px] font-semibold tracking-[0.05em]"
                    style={{ backgroundColor: "#EFF3CF", color: "#000000" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="-mt-2 overflow-hidden rounded-t-[20px] border-2 border-[#333] bg-white">
            <div className="flex border-b">
           <div className="flex-1 p-4">

  {/* From */}
  <p className="text-[12px] text-[#666]">
    from
  </p>

  {/* Offer Price */}
  <div className="flex items-end">
    <span className="text-[36px] font-bold leading-none">
      ${Number(journey.offerPrice).toLocaleString()}
    </span>

    <span className="mb-1 ml-1 text-[16px]">
      /person
    </span>
  </div>


  {/* Original Price */}
  {journey.originalPrice && (
    <p className="text-[14px] text-[#777]">
      was{" "}
      <span className="line-through">
        {journey.originalPrice}
      </span>
    </p>
  )}
</div>
{journey?.earlyBird && (
<div className="w-[52%] bg-[#F6EEE8] p-4">
  <div className="flex gap-2">
    <Info size={20} />
    <p className="text-[15px] leading-[24px]">
      Early Bird
    </p>
  </div>
</div>
)}
            </div>
            <div className="flex items-center justify-center gap-3 border-t border-[#2E2E2E] bg-white px-4 py-3">
              <button className="rounded-full bg-[#2B2D82] px-6 py-2 text-[15px] font-semibold text-white">
                Check Dates
              </button>

              <span className="text-[15px] text-[#333]">OR</span>

              <button
                onClick={() => setIsPrivateFormOpen(true)}
                className="text-[15px] font-semibold text-ink underline underline-offset-2"
              >
                Request a Private Journey
              </button>
            </div>

            <div className="border-t border-[#2E2E2E] bg-white px-4 py-3 text-center text-[13px] text-[#555]">
              Want to make this itinerary entirely your own?
              <br />
              <button
                onClick={() => setIsPrivateFormOpen(true)}
                className="mt-1 font-bold text-ink underline underline-offset-2"
              >
                Tailor This Journey For You
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
      <PrivateInquiryForm
        isOpen={isPrivateFormOpen}
        onClose={() => setIsPrivateFormOpen(false)}
        onSubmit={(data) => console.log("Private journey inquiry submitted:", data)}
        journey={journey}
        showDepartureDate={false}
        label="Inspirational Itineraries Form"
      />
    </>
  );
}
