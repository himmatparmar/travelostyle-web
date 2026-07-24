import React from "react";
import PopularRegionCard from "../PopularRegionCard";

export default function PopularRegions() {
  const regions = [
    {
      id: 1,
      title: "Africa",
      subtitle: "Kenya, Cape Town, Morocco and more",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Europe",
      subtitle: "France, Italy, Spain and more",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Far-East Asia",
      subtitle: "China, Japan, South Korea and more",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "North America",
      subtitle: "USA, Canada, Mexico and more",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Central America",
      subtitle: "Costa Rica, Panama, Honduras and more",
      image:
        "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "South America",
      subtitle: "Peru, Brazil, Argentina and more",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <div className="bg-white px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {" "}
      <h3 className="text-gray-900 font-bold text-sm sm:text-base tracking-tight mb-6 sm:mb-8">
        Explore some of our popular regions!
      </h3>
      <PopularRegionCard regions={regions} />
    </div>
  );
}
