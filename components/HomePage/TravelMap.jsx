"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const WorldMap = dynamic(
  () => import("../HomePage/Map"),
  { ssr: false }
);

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthlyLocations = {
  January: [
    { id: 1, position: [25.2048, 55.2708], name: "Dubai" },
    { id: 2, position: [25.5941, 85.1376], name: "Patna, Bihar" }
  ],
  February: [
    { id: 1, position: [40.7128, -74.0060], name: "New York" },
    { id: 2, position: [51.5074, -0.1278], name: "London" }
  ],
  March: [
    { id: 1, position: [35.6762, 139.6503], name: "Tokyo" },
    { id: 2, position: [-33.8688, 151.2093], name: "Sydney" }
  ],
  July: [
    { 
      id: 1, 
      position: [64.9631, -19.0208], 
      name: "Iceland",
      description: "Browse Journeys"
    },
    { 
      id: 2, 
      position: [46.2276, 2.2137], 
      name: "France",
      description: "Browse Journeys"
    },
    { 
      id: 3, 
      position: [-1.2921, 36.8219], 
      name: "Kenya, East Africa",
      description: "Browse Journeys"
    }
  ]
};

export default function TravelMap() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const currentMarkers = monthlyLocations[selectedMonth] || [];

  return (
    <section className="w-full rounded border border-[#8e8e8e] bg-[#f7f7f7] p-3">
      <div className="flex gap-8">
        <aside className="w-[100px] overflow-hidden rounded-sm bg-[#d9dfbb]">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`block w-full py-[9px] text-center text-[11px] transition-colors
                ${
                  selectedMonth === month
                    ? "bg-[#2f347d] font-medium text-white"
                    : "text-[#555] hover:bg-[#c9cfab]"
                }`}
            >
              {month}
            </button>
          ))}
        </aside>
      
        <WorldMap key={selectedMonth} markers={currentMarkers} />
      </div>
    </section>
  );
}