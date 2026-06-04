"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

// Fix Leaflet marker icons
delete (L.Icon.Default.prototype )._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  return (
    <MapContainer
      center={[20, 20]}
      zoom={2}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[25.2048, 55.2708]}>
        <Popup>Dubai</Popup>
      </Marker>

      <Marker position={[-33.9249, 18.4241]}>
        <Popup>Cape Town</Popup>
      </Marker>
    </MapContainer>
  );
}