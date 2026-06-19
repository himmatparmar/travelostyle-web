"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Info, X, ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_STAYS = [
  {
    name: "Kaan Casablanca",
    desc: "A city hotel in the heart of Casablanca",
    image: "/Morocco.svg",
  },
  {
    name: "Riad Salam Fes",
    desc: "A boutique riad in the heart of Fez with traditional courtyard that makes you want to linger",
    image: "/Morocco.svg",
  },
  {
    name: "Kasbah Hotel Xaluca Arfoud",
    desc: "A comfortable lodge in Erfoud — The last proper town before the dunes begin.",
    image: "/Kenya.svg",
  },
  {
    name: "Auberge du Sud, Erg Chébbi",
    desc: "A tented camp at the heart of the Moroccan Sahara between tradition and modernity.",
    image: "/Kenya.svg",
  },
  {
    name: "Le Berbere Palace, Ouarzazate",
    desc: "A kasbah-style hotel on the edge of the city — bungalow complex with easy access to the sites.",
    image: "/Morocco.svg",
  },
  {
    name: "Riad Melhoun & Spa, Marrakech",
    desc: "A boutique riad with 8 rooms in the heart of Marrakech, tranquil and perfect right after the Atlas.",
    image: "/Kenya.svg",
  },
];

function Lightbox({ images, name, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-[2vw] py-[1.2vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white text-[0.9vw] font-semibold">{name}</p>
        <div className="flex items-center gap-[1.5vw]">
          <span className="text-white/60 text-[0.8vw]">
            {current + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Image */}
      <div
        className="relative w-[70vw] h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt={`${name} — image ${current + 1}`}
          fill
          className="object-contain"
          sizes="70vw"
        />
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-[1.5vw] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-[0.6vw] transition-colors"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-[1.5vw] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-[0.6vw] transition-colors"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          className="absolute bottom-[1.5vw] flex gap-[0.5vw]"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-[0.5vw] h-[0.5vw] rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HotelCard({ hotel, onGalleryOpen }) {
  return (
    <div className="border-2 border-[#1A1A1A] rounded-[0.6vw] overflow-hidden flex flex-col">
      <div className="relative h-[15vw] w-full">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 px-[0.8vw] pt-[0.7vw] pb-0">
        <p className="text-[0.82vw] font-semibold text-[#1A1A1A]">
          {hotel.name}
        </p>
        <p className="mt-[0.3vw] text-[0.7vw] leading-[1.5] text-[#555]">
          {hotel.desc}
        </p>
      </div>

      <div className="mt-[0.8vw] border-t-2 border-[#1A1A1A]">
        <button
          onClick={onGalleryOpen}
          className="w-full py-[0.6vw] text-[0.75vw] font-medium text-[#1A1A1A] text-center hover:bg-[#f8f8f8] transition-colors"
        >
          View Gallery
        </button>
      </div>
    </div>
  );
}

export default function StaysSection({ stays = DEFAULT_STAYS, drupalData }) {
  const hotels = (drupalData && drupalData.length > 0) ? drupalData : stays;
  const [lightbox, setLightbox] = useState(null); // { images, name }

  return (
    <div className="px-[5.5vw] py-[3vw]">
      <div className="grid grid-cols-4 gap-[1.2vw]">
        {hotels.map((hotel, i) => {
          const images = hotel.images?.length ? hotel.images : [hotel.image];
          return (
            <HotelCard
              key={i}
              hotel={hotel}
              onGalleryOpen={() => setLightbox({ images, name: hotel.name })}
            />
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="mt-[1.5vw] flex items-start gap-[0.5vw] rounded-[0.4vw] bg-[#FDF4EC] border border-[#EDD9C4] px-[1vw] py-[0.8vw]">
        <Info size={14} className="text-[#C08050] shrink-0 mt-[0.1vw]" />
        <p className="text-[0.7vw] text-[#555] leading-[1.6]">
          In case these accommodations are not available, you will be hosted at
          an accommodation of same level or category. You travel adviser will
          confirm with you at the time of booking.
        </p>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          name={lightbox.name}
          startIndex={0}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
