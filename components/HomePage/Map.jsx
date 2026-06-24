"use client";

import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Image from "next/image";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const destinations = [
  {
    title: "Dubai and Abu Dhabi, U.A.E.",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&q=80",
    position: [25.2048, 55.2708],
    months: ["January"],
  },
  {
    title: "Cape Town, South Africa",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&q=80",
    position: [-33.9249, 18.4241],
    months: ["January"],
  },
  {
    title: "Patagonia, Argentina",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&q=80",
    position: [-50.9423, -73.4068],
    months: ["January"],
  },
  {
    title: "Patna, Bihar, India",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&q=80",
    position: [25.5941, 85.1376],
    months: ["February"],
  },
  {
    title: "Jaipur, Rajasthan",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&q=80",
    position: [26.9124, 75.7873],
    months: ["February"],
  },
  {
    title: "Tokyo, Japan",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&q=80",
    position: [35.6762, 139.6503],
    months: ["March"],
  },
  {
    title: "Kyoto, Japan",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&q=80",
    position: [35.0116, 135.7681],
    months: ["March"],
  },
  {
    title: "Amsterdam, Netherlands",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=300&q=80",
    position: [52.3676, 4.9041],
    months: ["April"],
  },
  {
    title: "Santorini, Greece",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&q=80",
    position: [36.3932, 25.4615],
    months: ["May"],
  },
  {
    title: "Iceland",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=300&q=80",
    position: [64.9631, -19.0208],
    months: ["June"],
  },
  {
    title: "France",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&q=80",
    position: [48.8566, 2.3522],
    months: ["July"],
  },
  {
    title: "Iceland",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=300&q=80",
    position: [64.9631, -19.0208],
    months: ["July"],
  },
  {
    title: "Kenya, East Africa",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300&q=80",
    position: [-1.286389, 36.817223],
    months: ["July"],
  },
  {
    title: "Bali, Indonesia",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&q=80",
    position: [-8.3405, 115.092],
    months: ["August"],
  },
  {
    title: "Swiss Alps",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
    position: [46.8182, 8.2275],
    months: ["September"],
  },
  {
    title: "New York, USA",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=300&q=80",
    position: [40.7128, -74.006],
    months: ["October"],
  },
  {
    title: "Rajasthan, India",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=300&q=80",
    position: [26.9124, 75.7873],
    months: ["November"],
  },
  {
    title: "Vietnam",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=300&q=80",
    position: [14.0583, 108.2772],
    months: ["November"],
  },
  {
    title: "Patagonia, Argentina",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&q=80",
    position: [-50.9423, -73.4068],
    months: ["November"],
  },
  {
    title: "Lapland, Finland",
    subtitle: "Browse Journeys",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=300&q=80",
    position: [67.9222, 26.5046],
    months: ["December"],
  },
];

const createMarker = (item) =>
  L.divIcon({
    className: "",
    html: `
      <div style="position:relative; display:flex; align-items:center;">
        <div style="margin-right: -2px; display: flex; align-items: center; background: white; padding: 3px; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#4A4E69"/>
          </svg>
        </div>
        <div style="
          width:125px;
          background:white;
          display:flex;
          align-items:center;
          gap:5px;
          padding:3px;
          border-radius:3px;
          box-shadow:0 2px 6px rgba(0,0,0,.15);
        ">
          <img
            src="${item.image}"
            alt="${item.title}"
            style="
              width:28px;
              height:28px;
              object-fit:cover;
              border-radius:2px;
            "
          />
          <div style="overflow:hidden; font-family: sans-serif;">
            <div style="
              font-size:8px;
              font-weight:600;
              line-height:1.1;
              color:#222;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            ">
              ${item.title}
            </div>
            <div style="
              font-size:7px;
              color:#777;
              margin-top:1px;
            ">
              ${item.subtitle}
            </div>
          </div>
        </div>
      </div>
    `,
    iconSize: [150, 35],
    iconAnchor: [10, 17],
  });

export default function TravelDestinationWidget() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredDestinations = destinations.filter((item) =>
    item.months.includes(selectedMonth),
  );

  useEffect(() => {
    if (isMobile) return;
    const map = mapRef.current;
    if (!map) return;
    if (filteredDestinations.length === 1) {
      map.setView(filteredDestinations[0].position, 6, { animate: true });
    } else if (filteredDestinations.length > 1) {
      const bounds = L.latLngBounds(
        filteredDestinations.map((d) => d.position),
      );
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 4, animate: true });
    } else {
      map.setView([20, 40], 2, { animate: true });
    }
  }, [filteredDestinations, isMobile]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px 16px",
      }}
    >
      {isMobile ? (
      
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {months.map((month) => {
            const isExpanded = month === selectedMonth;
            const monthDestinations = destinations.filter((item) =>
              item.months.includes(month),
            );

            return (
              <div
                key={month}
                style={{
                  border: "1px solid #333333",
                  borderRadius: "6px",
                  background: isExpanded ? "#ebdccb" : "#eef2da",
                  overflow: "hidden",
                  transition: "background-color 0.2s ease",
                }}
              >
          
                <div
                  onClick={() => setSelectedMonth(isExpanded ? "" : month)}
                  style={{
                    padding: "14px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#222222",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {month}
                  </span>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    {isExpanded ? (
                      <Image
                        src="/CircleSub.svg"
                        alt="Next"
                        height={24}
                        width={48}
                        className="w-[32px] h-auto"
                      />
                    ) : (
                      <Image
                        src="/CircleAdd.svg"
                        alt="Next"
                        height={24}
                        width={48}
                        className="w-[32px] h-auto"
                      />
                    )}
                  </div>
                </div>

                {/* Accordion Dropdown Content list */}
                {isExpanded && (
                  <div
                    style={{
                      borderTop: "1px solid #333333",
                      background: "#ebdccb",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {monthDestinations.length > 0 ? (
                      monthDestinations.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 16px",
                            borderBottom:
                              idx !== monthDestinations.length - 1
                                ? "1px solid rgba(51,51,51,0.15)"
                                : "none",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                                borderRadius: "2px",
                              }}
                            />
                            <div style={{ fontFamily: "sans-serif" }}>
                              <div
                                style={{
                                  fontSize: "12px",
                                  fontWeight: "600",
                                  color: "#222",
                                }}
                              >
                                {item.title}
                              </div>
                              <div
                                style={{
                                  fontSize: "10px",
                                  color: "#555",
                                  marginTop: "2px",
                                }}
                              >
                                {item.subtitle}
                              </div>
                            </div>
                          </div>

                          <button className="absolute right-[36px] z-20 cursor-pointer active:scale-95 transition">
                            <Image
                              src="/RightArrow.svg"
                              alt="Next"
                              height={24}
                              width={56}
                              className="w-[48px] h-auto"
                            />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div
                        style={{
                          padding: "16px",
                          fontSize: "12px",
                          color: "#666",
                          fontStyle: "italic",
                          textAlign: "center",
                          fontFamily: "sans-serif",
                        }}
                      >
                        No journeys available for this month.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
      
        <div style={{ position: "relative" }}>
          <div
            style={{
              border: "1px solid #333333",
              borderRadius: "6px",
              padding: "24px 20px 20px 20px",
              background: "#ffffff",
              display: "flex",
              gap: "20px",
              minHeight: "520px",
            }}
          >
            <div
              style={{
                width: "140px",
                background: "#eef2da",
                borderRadius: "6px",
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                zIndex: 10,
                boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)",
              }}
            >
              {months.map((month) => {
                const isSelected = month === selectedMonth;
                return (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "none",
                      borderRadius: isSelected ? "4px" : "0px",
                      background: isSelected ? "#2d3675" : "transparent",
                      color: isSelected ? "#ffffff" : "#444444",
                      fontSize: "11px",
                      fontWeight: isSelected ? "600" : "400",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {month}
                  </button>
                );
              })}
            </div>

            <div
              style={{
                flex: 1,
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <style jsx global>{`
                .screenshot-exact-tiles {
                  filter: invert(0.08) sepia(0.22) saturate(1.3)
                    hue-rotate(335deg) brightness(1.08) contrast(0.96);
                }
              `}</style>

              <MapContainer
                center={[20, 40]}
                zoom={2}
                zoomControl={false}
                attributionControl={false}
                ref={mapRef}
                style={{
                  height: "100%",
                  width: "100%",
                  background: "#fdfbf7",
                  zIndex: 0,
                }}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  className="screenshot-exact-tiles"
                />
                {filteredDestinations.map((item, index) => (
                  <Marker
                    key={index}
                    position={item.position}
                    icon={createMarker(item)}
                  />
                ))}
              </MapContainer>

              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "15px",
                  zIndex: 1000,
                  fontSize: "11px",
                  color: "#7e7e7e",
                  fontFamily: "sans-serif",
                  pointerEvents: "none",
                  letterSpacing: "0.2px",
                }}
              >
                select a month to see the best travel destinations
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
