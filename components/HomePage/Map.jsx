"use client";

import React, { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const destinations = [
  {
    title: "Dubai and Abu Dhabi, U.A.E.",
    subtitle: "Browse Journeys",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&q=80",
    position: [25.2048, 55.2708],
    months: ["January"] 
  },
  {
    title: "Patna, Bihar, India", 
    subtitle: "Browse Journeys",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&q=80", 
    position: [25.5941, 85.1376], 
    months: ["February"] 
  },
  {
    title: "Cape Town, South Africa",
    subtitle: "Browse Journeys",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=300&q=80",
    position: [-33.9249, 18.4241],
    months: ["January"] 
  },
  {
    title: "Patagonia, Argentina",
    subtitle: "Browse Journeys",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&q=80",
    position: [-50.9423, -73.4068],
    months: ["January"] 
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

  const filteredDestinations = destinations.filter(item => 
    item.months.includes(selectedMonth)
  );

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "20px 10px" }}>
      
      <div style={{
        border: "1px solid #333333",
        borderRadius: "6px",
        padding: "24px 20px 20px 20px",
        position: "relative",
        background: "#ffffff",
        display: "flex",
        gap: "20px",
        minHeight: "520px"
      }}>
        
        <div style={{
          width: "140px",
          background: "#eef2da", 
          borderRadius: "6px",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          zIndex: 10,
          boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)"
        }}>
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
                  transition: "all 0.2s ease"
                }}
              >
                {month}
              </button>
            );
          })}
        </div>

     
        <div style={{ flex: 1, position: "relative", borderRadius: "4px", overflow: "hidden" }}>
          
          <style jsx global>{`
            .screenshot-exact-tiles {
              filter: invert(0.08) sepia(0.22) saturate(1.3) hue-rotate(335deg) brightness(1.08) contrast(0.96);
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
              zIndex: 0
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

          <div style={{
            position: "absolute",
            bottom: "12px",
            right: "15px",
            zIndex: 1000,
            fontSize: "11px",
            color: "#7e7e7e",
            fontFamily: "sans-serif",
            pointerEvents: "none",
            letterSpacing: "0.2px"
          }}>
            select a month to see the best travel destinations
          </div>
        </div>

      </div>

      <div style={{ borderBottom: "2px solid #8a3ffc", marginTop: "30px", marginBottom: "40px" }}></div>

      <div style={{
        textAlign: "center",
        fontFamily: "'Georgia', cursive, serif",
        fontSize: "26px",
        fontStyle: "italic",
        color: "#1c244b",
        fontWeight: "500",
        letterSpacing: "0.5px"
      }}>
        Hear from those wh have travelled with us
      </div>

    </div>
  );
}