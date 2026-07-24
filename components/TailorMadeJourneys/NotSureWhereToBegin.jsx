import React from "react";
import TravelJourneyCard from "../TravelJourneyCard";

export default function NotSureWhereToBegin() {
  const journeys = [
    {
      id: 1,
      title: "The Golden Triangle",
      description:
        "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
      duration: "12 Days | 12 Nights",
      destinations: "10 Destinations",
      price: "5000",
      types: ["Group Journey", "Private Journey"],
      earlyBird: "September departure",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Kenya & South Africa",
      description:
        "Two countries. One continent that will ask something of you — and give back considerably more.",
      duration: "10 Days | 13 Nights",
      destinations: "9 Destinations",
      types: ["Group Journey"],
      price: "8000",
      earlyBird: null,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Morocco",
      description:
        "From Imperial cities to Saharan silence — a journey through Morocco's most extraordinary contrasts.",
      duration: "12 Days | 12 Nights",
      destinations: "10 Destinations",
      types: ["Group Journey", "Private Journey"],
      price: "7000",
      earlyBird: "July departure",
      image:
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Vietnam",
      description:
        "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
      duration: "10 Days | 9 Nights",
      destinations: "9 Destinations",
      types: ["Group Journey", "Private Journey"],
      price: "6000",
      earlyBird: null,
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "The Golden Triangle",
      description:
        "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
      duration: "12 Days | 12 Nights",
      destinations: "10 Destinations",
      types: ["Group Journey", "Private Journey"],
      price: "5000",
      earlyBird: "September departure",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Kenya & South Africa",
      description:
        "Two countries. One continent that will ask something of you — and give back considerably more.",
      duration: "10 Days | 13 Nights",
      destinations: "9 Destinations",
      types: ["Group Journey"],
      price: "8000",
      earlyBird: null,
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      title: "Morocco",
      description:
        "From Imperial cities to Saharan silence — a journey through Morocco's most extraordinary contrasts.",
      duration: "12 Days | 12 Nights",
      destinations: "10 Destinations",
      types: ["Group Journey", "Private Journey"],
      price: "7000",
      earlyBird: "July departure",
      image:
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      title: "Vietnam",
      description:
        "From the Mughal grandeur of Delhi to the Taj at golden hour — and then, quietly, up into the hills.",
      duration: "10 Days | 9 Nights",
      destinations: "9 Destinations",
      types: ["Group Journey", "Private Journey"],
      price: "6000",
      earlyBird: null,
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-3 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight mb-5">
          Not sure where to begin? Start here
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-1xl mx-auto font-normal">
          Explore our collection of inspirational itineraries – journey ideas
          across regions and travel styles that work as a starting point. Think
          of them as conversation starters. We’ll take it from there.
        </p>
      </div>

      <TravelJourneyCard journeys={journeys} />
      <div className="flex justify-center mt-10">
        <button className="bg-[#1C355E] hover:bg-[#12233F] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-200">
          Explore All Private Journeys
        </button>
      </div>
    </div>
  );
}
