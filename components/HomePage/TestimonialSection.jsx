
"use client";

import { useState } from "react";
import Image from "next/image";
import { API_BASE_URL } from "@/lib/config";

function capitalizeFirst(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function TestimonialSection({ testimonialData }) {
  const testimonials = (testimonialData?.data || []).map((item) => {
    const included = testimonialData?.included || [];

    // IMAGE
    const imageId =
      item.relationships?.field_testimonial_image?.data?.id;

    const media = included.find(
      (inc) =>
        inc.type === "media--image" &&
        inc.id === imageId
    );

    const fileId =
      media?.relationships?.field_media_image?.data?.id;

    const file = included.find(
      (inc) =>
        inc.type === "file--file" &&
        inc.id === fileId
    );

    const imageUrl = file?.attributes?.uri?.url
      ? `${API_BASE_URL}${file.attributes.uri.url}`
      : "/Morocco.svg";

    // NAME
    const name =
      item.attributes?.field_testimonial_name ||
      item.attributes?.title ||
      "";

    // QUOTE
    const attributes = item.attributes || {};

    let quote = "";

    const possibleFields = [
      "field_testimonial_description",
      "field_testimonial_content",
      "field_description",
      "field_content",
      "body",
    ];

    for (const field of possibleFields) {
      const value = attributes[field];

      if (!value) continue;

      if (typeof value === "string") {
        quote = value;
        break;
      }

      if (value.processed) {
        quote = value.processed;
        break;
      }

      if (value.value) {
        quote = value.value;
        break;
      }
    }

    quote = quote
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\u00a0/g, " ")
      .trim();

    return {
      id: item.id,
      name: capitalizeFirst(name),
      image: imageUrl,
      quote: capitalizeFirst(quote),
    };
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials.length) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const current = testimonials[currentIndex];




  return (
    <section className="py-16 md:py-20 select-none overflow-hidden bg-[#fbfbfb]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 md:mb-24 text-center font-serif italic text-[32px] md:text-[38px] text-[#1d3557] md:text-[#2d2d2d] tracking-wide font-taprom max-md:max-w-[280px] max-md:mx-auto max-md:leading-[42px]">
          Hear from those who&apos;ve travelled with us
        </h2>

     
        <div className="hidden md:flex items-center justify-between gap-4 max-w-5xl mx-auto">
          <button
            onClick={handlePrev}
            className="cursor-pointer transition active:scale-95 shrink-0"
          >
            <Image src="/LeftArrow.svg" alt="Previous" height={24} width={56} />
          </button>

          <div className="flex flex-row items-center gap-12 max-w-3xl w-full mx-6">
            <div className="border border-[#4c4b75] bg-white p-[10px] shadow-[3px_3px_10px_rgba(0,0,0,0.06)] shrink-0">
              <div className="relative w-[16.5vw] h-[16.5vw] min-w-[150px] min-h-[150px]">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-[13px] font-bold text-[#111111] tracking-tight">
                {current.name}
              </p>
            </div>

            <div className="relative flex-1 py-4 px-10">
              <span className="absolute -left-5 top-[-8px]">
                <div className="relative w-[2.9vw] h-[2.05vw] min-w-[25px] min-h-[18px]">
                  <Image src="/RightQuote.svg" alt="Quote Start" fill className="object-cover" />
                </div>
              </span>

              <p className="text-[#2b2b2b] leading-[1.6] min-h-[60px] text-[16px]">
                {current.quote}
              </p>

              <span className="absolute -right-4 bottom-0">
                <div className="relative w-[2.9vw] h-[2.05vw] min-w-[25px] min-h-[18px]">
                  <Image src="/LeftQuote.svg" alt="Quote End" fill className="object-cover" />
                </div>
              </span>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="cursor-pointer transition active:scale-95 shrink-0"
          >
            <Image src="/RightArrow.svg" alt="Next" height={24} width={56} />
          </button>
        </div>


        <div className="md:hidden flex flex-col items-center relative w-full max-w-[320px] mx-auto">
          <div className="flex items-center justify-between w-full relative min-h-[240px]">

            <button
              onClick={handlePrev}
              className="absolute left-[-15px] z-20 cursor-pointer active:scale-95 transition"
            >
              <Image src="/LeftArrow.svg" alt="Previous" height={24} width={48} className="w-[48px] h-auto" />
            </button>

            <div className="mx-auto border border-[#4c4b75] bg-white p-2.5 shadow-[2px_2px_10px_rgba(0,0,0,0.05)] w-[200px] shrink-0 z-10">
              <div className="relative w-full h-[180px]">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2.5 text-[13px] font-bold text-[#111111] text-left">
                {current.name}
              </p>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-[-15px] z-20 cursor-pointer active:scale-95 transition"
            >
              <Image src="/RightArrow.svg" alt="Next" height={24} width={48} className="w-[48px] h-auto" />
            </button>
          </div>

          <div className="relative w-full mt-8 px-6 min-h-[80px]">
            <span className="absolute left-0 top-[-6px]">
              <div className="relative w-[20px] h-[15px]">
                <Image src="/RightQuote.svg" alt="Quote Start" fill className="object-contain opacity-40" />
              </div>
            </span>

            <p className="text-[13px] leading-[20px] text-[#4a4a4a] text-center max-w-[210px] mx-auto font-medium">
              {current.quote}
            </p>

            <span className="absolute right-2 bottom-[-10px]">
              <div className="relative w-[20px] h-[15px]">
                <Image src="/LeftQuote.svg" alt="Quote End" fill className="object-contain opacity-40" />
              </div>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}