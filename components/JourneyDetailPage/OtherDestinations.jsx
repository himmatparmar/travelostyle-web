"use client";

import Image from "next/image";
import { useRef } from "react";
import { CirclePlus, Clock3, Info, MapPin } from "lucide-react";

const OTHER_TRIPS = [
  {
    title: "The Golden Triangle",
    image: "/GoldenTriange.svg",
    tags: ["Group Journey", "Private Journey"],
    desc: "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
    days: "13 Days | 12 Nights",
    destinations: "10 Destinations",
    price: "$5000",
    offer: "Early Bird Offer available for September departure",
  },
  {
    title: "The Golden Triangle",
    image: "/GoldenTriange.svg",
    tags: ["Group Journey"],
    desc: "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
    days: "13 Days | 12 Nights",
    destinations: "10 Destinations",
    price: "$5000",
    offer: "Early Bird Offer available for September departure",
  },
  {
    title: "The Golden Triangle",
    image: "/GoldenTriange.svg",
    tags: ["Private Journey"],
    desc: "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
    days: "13 Days | 12 Nights",
    destinations: "10 Destinations",
    price: "$5000",
    offer: "Early Bird Offer available for September departure",
  },
  {
    title: "Kenya & South Africa",
    image: "/Kenya.svg",
    tags: ["Group Journey"],
    desc: "Two countries. One continent that will ask something of you — and give back considerably more.",
    days: "15 Days | 14 Nights",
    destinations: "8 Destinations",
    price: "$8000",
    offer: "Luxury Safari Upgrade Included",
  },
  {
    title: "Morocco",
    image: "/Morocco.svg",
    tags: ["Private Journey", "Tailormade Journey"],
    desc: "From imperial cities to Saharan silence — a journey through Morocco's contrasts.",
    days: "13 Days | 12 Nights",
    destinations: "10 Destinations",
    price: "$7000",
    offer: "Complimentary Desert Camp Experience",
  },
];

export default function OtherDestinations() {
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  return (
    <section className="bg-[#FAFAFA] py-[3.5vw]">
      <h2 className="mb-[2.2vw] text-center text-[2vw] font-semibold text-[#1A1A1A]">
        Other Destinations We Know
        <br />
        You&apos;ll Love
      </h2>

      <div className="flex items-center justify-center gap-[1.3vw]">
        <button onClick={scrollLeft} className="shrink-0">
          <Image src="/LeftArrow.svg" alt="Previous" height={24} width={56} />
        </button>

        <div
          ref={scrollRef}
          className="flex w-[62vw] gap-[1.4vw] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {OTHER_TRIPS.map((trip, i) => (
            <div
              key={i}
              className="relative flex h-[31.8vw] min-w-[18.7vw] flex-col overflow-hidden rounded-[0.7vw] border border-[#E8E8E8] bg-white px-[0.8vw] pb-[1vw] pt-[0.8vw]"
            >
              {/* Tags */}
              <div className="mb-[0.8vw] flex flex-wrap gap-[0.45vw]">
                {trip.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-[0.3vw] px-[0.75vw] py-[0.3vw] text-[0.63vw] font-medium
                    ${
                      tag === "Private Journey" || tag === "Tailormade Journey"
                        ? "bg-[#F5DFC9] text-[#6A5B4E]"
                        : "bg-[#EAEBCB] text-[#63634E]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image */}
              <div className="relative h-[10vw] w-full overflow-hidden rounded-[0.15vw]">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col pt-[1vw]">
                <h3 className="text-[1.1vw] font-semibold leading-[1.3] text-[#232323]">
                  {trip.title}
                </h3>

                <p className="mt-[0.6vw] text-[0.76vw] leading-[1.55] text-[#666666]">
                  {trip.desc}
                </p>

                <div className="mt-[0.9vw] flex items-center gap-[1vw] text-[0.58vw] text-[#717171]">
                  <div className="flex items-center gap-[0.28vw]">
                    <Clock3 size={12} strokeWidth={1.8} />
                    {trip.days}
                  </div>
                  <div className="flex items-center gap-[0.28vw]">
                    <MapPin size={12} strokeWidth={1.8} />
                    {trip.destinations}
                  </div>
                </div>

                <div className="mt-[1vw] flex items-end justify-between">
                  <div>
                    <p className="text-[0.62vw] lowercase text-[#787878]">from</p>
                    <div className="flex items-end gap-[0.2vw]">
                      <h4 className="text-[1.45vw] font-semibold leading-none text-[#1D1D1D]">
                        {trip.price}
                      </h4>
                      <span className="mb-[0.12vw] text-[0.52vw] leading-[1.15] text-[#7B7B7B]">
                        */person
                        <br />
                        double occupancy*
                      </span>
                    </div>
                  </div>

                  <button className="flex h-[2vw] w-[6.2vw] items-center justify-center rounded-full bg-[#2D3482] text-[0.78vw] font-semibold text-white transition hover:bg-[#252B73]">
                    View Trip
                  </button>
                </div>

                <div className="mt-[1vw] flex items-center gap-[0.4vw] rounded-[0.35vw] bg-[#F4E5DA] px-[0.65vw] py-[0.55vw] text-[0.58vw] text-[#65574D]">
                  <Info size={11} />
                  <span>{trip.offer}</span>
                </div>

                <div className="mt-[1vw] border-t border-dashed border-[#D7D7D7]" />

                <button className="mt-[0.9vw] flex items-center gap-[0.4vw] text-[0.78vw] text-[#4E4E4E]">
                  <CirclePlus size={14} strokeWidth={1.8} />
                  Add to Compare
                </button>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-[-0.38vw] left-0 flex w-full justify-between px-[0.42vw]">
                {Array.from({ length: 14 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-[0.8vw] w-[0.8vw] rounded-full bg-[#F5F5F3]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="shrink-0">
          <Image src="/RightArrow.svg" alt="Next" height={24} width={56} />
        </button>
      </div>
    </section>
  );
}
