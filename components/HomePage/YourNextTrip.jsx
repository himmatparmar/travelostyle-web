"use client";

import { CirclePlus, Clock3, Info, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import JourneysWeLove from "./JourneysWeLove";

const trips = [
  {
    title: "The Golden Triangle",
    image: "/GoldenTriange.svg",
    tags: ["Group Journey", "Private Journey"],
    desc: "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
    days: "13 Days | 12 Nights",
    destinations: "10 Destinations",
    price: "$5000",
    offer: "Early Bird Offer available for September departure",
    active: true,
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

  // extra cards for scroll
  {
    title: "Italy Escape",
    image: "/GoldenTriange.svg",
    tags: ["Group Journey"],
    desc: "Explore Italy with luxury stays and hidden local experiences.",
    days: "9 Days | 8 Nights",
    destinations: "5 Destinations",
    price: "$6500",
    offer: "Free Venice Tour",
  },

  {
    title: "Japan Journey",
    image: "/Kenya.svg",
    tags: ["Private Journey"],
    desc: "Tokyo lights, Kyoto temples and unforgettable food trails.",
    days: "12 Days | 11 Nights",
    destinations: "7 Destinations",
    price: "$9200",
    offer: "Cherry Blossom Special",
  },
];

export default function YourNextTrip() {
  const scrollRef = useRef(null);

  const [activeTab, setActiveTab] = useState("journeys");

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden py-[5vw]">
      <div className="mx-auto w-[100%]">
        <div className="text-center">
          <h2 className="text-[3vw] font-semibold tracking-[-0.08vw] text-[#1B1B1B]">
            Take your next trip with TravelOStyle
          </h2>

          <p className="mx-auto max-w-[43vw] text-[0.92vw] leading-[1.8] text-[#6D6D6D]">
            The journeys we know well, believe in genuinely, and can deliver on
            — every single time.
          </p>
        </div>

        <div className="mt-[4vw]">

          <div className="border-b border-[#D8D8D8]">
            <div className="flex items-center justify-center gap-[4vw] text-[1vw]">
              <button
                onClick={() => setActiveTab("journeys")}
                className={`relative pb-[1vw] transition-all duration-300 ${
                  activeTab === "journeys"
                    ? "font-medium text-black"
                    : "text-[#707070]"
                }`}
              >
                Journeys We Love
                {activeTab === "journeys" && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("destinations")}
                className={`relative pb-[1vw] transition-all duration-300 ${
                  activeTab === "destinations"
                    ? "font-medium text-black"
                    : "text-[#707070]"
                }`}
              >
                Popular Destinations
                {activeTab === "destinations" && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("deals")}
                className={`relative pb-[1vw] transition-all duration-300 ${
                  activeTab === "deals"
                    ? "font-medium text-black"
                    : "text-[#707070]"
                }`}
              >
                Exclusive Deals
                {activeTab === "deals" && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
                )}
              </button>
            </div>
          </div>
        </div>

        {activeTab === "journeys" && (
      <JourneysWeLove/>
        )}
        {activeTab === "destinations" && <span>destination</span>}
        {activeTab === "deals" && <span>deals</span>}
      </div>
    </section>
  );
}
