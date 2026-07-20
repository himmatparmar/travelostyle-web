import React from "react";
import TravelJourneyCard from "../TravelJourneyCard";

export default function ChoosePopularGroupJourney() {
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
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80", // Taj Mahal / Humayun's Tomb representation
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
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80", // Safari/Lion representation
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
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80", // Morocco architecture
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
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80", // Vietnam boats / waterscape
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
    <div className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="text-center mb-12">
        <p className="font-serif italic text-2xl text-neutral-600 lowercase tracking-wide">
          choose from our popular group journeys
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mt-1 tracking-tight">
          Where are you headed to next?
        </h2>
      </div>

      <TravelJourneyCard journeys={journeys} />
    </div>
  );
}
