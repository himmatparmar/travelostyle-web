"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import Image from "next/image";
import destinations from "@/lib/travelostyle_destinations_FRONTEND.json";

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

const createMarker = (item) =>
  L.divIcon({
    className: "map-marker-icon",
    html: `
      <div style="position:relative; width:24px; height:24px;">
        <div style="display:flex; align-items:center; justify-content:center; width:24px; height:24px; box-sizing:border-box; background:white; padding:3px; border-radius:50%; box-shadow:0 2px 5px rgba(0,0,0,0.2);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#4A4E69"/>
          </svg>
        </div>
        <div class="map-marker-card" style="
          position:absolute;
          top:50%;
          left:28px;
          transform:translateY(-50%);
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
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

function MapZoomController({ destinations }) {
  const map = useMap();

  useEffect(() => {
    if (destinations.length === 1) {
      map.setView(destinations[0].position, 2, { animate: true });
    } else if (destinations.length > 1) {
      const bounds = L.latLngBounds(destinations.map((d) => d.position));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 2, animate: true });
    } else {
      map.setView([20, 40], 2, { animate: true });
    }
  }, [map, destinations]);

  return null;
}

export default function TravelDestinationWidget() {
  const router = useRouter();
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [isMobile, setIsMobile] = useState(false);

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
                .map-marker-icon {
                  overflow: visible !important;
                  cursor: pointer;
                }
                .map-marker-card {
                  opacity: 0;
                  visibility: hidden;
                  pointer-events: none;
                  transition: opacity 0.15s ease;
                }
                .map-marker-icon:hover {
                  z-index: 10000 !important;
                }
                .map-marker-icon:hover .map-marker-card {
                  opacity: 1;
                  visibility: visible;
                  pointer-events: auto;
                }
              `}</style>

              <MapContainer
                center={[20, 40]}
                zoom={2}
                zoomControl={false}
                attributionControl={false}
                style={{
                  height: "100%",
                  width: "100%",
                  background: "#fdfbf7",
                  zIndex: 0,
                }}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                  className="screenshot-exact-tiles"
                />
                <MapZoomController destinations={filteredDestinations} />
                {filteredDestinations.map((item, index) => (
                  <Marker
                    key={index}
                    position={item.position}
                    icon={createMarker(item)}
                    eventHandlers={{
                      click: () => {
                        if (item.countryCode) {
                          router.push(`/itinerary?country=${item.countryCode}`);
                        }
                      },
                    }}
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
