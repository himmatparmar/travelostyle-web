"use client";
import React, { useState } from "react";

export default function GroupRevelationsSectionMobile({
  badgeText,
  titleText,
  features = [],
  topIntroText,
  matrixRows = [],
  footerText,
  theme = {},
}) {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cardBgStyle = theme?.cardBg || "#eff3cf";
  const borderStyle = theme?.borderColor || "border-neutral-700";

  const isHex = (val) => typeof val === "string" && val.startsWith("#");

  return (
    <div className="block md:hidden w-full px-4 py-8 font-sans antialiased select-none">
      <section
        className={`w-full rounded-xl border overflow-hidden flex flex-col shadow-sm ${
          !isHex(borderStyle) ? borderStyle : ""
        } ${!isHex(cardBgStyle) ? cardBgStyle : ""}`}
        style={{
          backgroundColor: isHex(cardBgStyle) ? cardBgStyle : undefined,
          borderColor: isHex(borderStyle) ? borderStyle : undefined,
        }}
      >
        {(badgeText || titleText) && (
          <div
            className={`p-5 border-b ${!isHex(borderStyle) ? borderStyle : ""}`}
            style={{
              borderColor: isHex(borderStyle) ? borderStyle : undefined,
            }}
          >
            {badgeText && (
              <h4 className="font-serif italic text-base text-[#3c3c3c] tracking-wide mb-2">
                {badgeText}
              </h4>
            )}
            {titleText && (
              <h2 className="text-[20px] font-bold text-[#111111] leading-[1.3] tracking-tight">
                {titleText}
              </h2>
            )}
          </div>
        )}
        <div className="p-5 flex flex-col gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col gap-2.5 w-full">
              <div
                className={`relative rounded-xl overflow-hidden border shadow-xs bg-stone-100 shrink-0 w-full h-[185px] ${
                  !isHex(borderStyle) ? borderStyle : ""
                }`}
                style={{
                  borderColor: isHex(borderStyle) ? borderStyle : undefined,
                }}
              >
                <img
                  src={item.imgUrl}
                  alt={item.description || "Feature Image"}
                  className="w-full h-full object-cover"
                />
              </div>
              {item.description && (
                <p className="text-[13px] text-[#2c2c2c] leading-relaxed font-normal">
                  {item.description}
                </p>
              )}
            </div>
          ))}

          {topIntroText && (
            <p className="text-[13px] text-[#222222] font-normal leading-relaxed tracking-wide pt-2">
              {topIntroText}
            </p>
          )}
        </div>
        {matrixRows.map((row, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border-t ${!isHex(borderStyle) ? borderStyle : ""}`}
              style={{
                borderColor: isHex(borderStyle) ? borderStyle : undefined,
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full p-4 flex items-center justify-between transition-colors 
              
              `}
              >
                <span className="text-[13px] font-bold text-[#111111] tracking-wider text-left uppercase">
                  {row.label}
                </span>
                <div className="w-6 h-6 rounded-full border border-neutral-800 flex items-center justify-center shrink-0">
                  {isOpen ? (
                    <svg
                      className="w-3.5 h-3.5 text-neutral-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3.5 h-3.5 text-neutral-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>
              {isOpen && (
                <div
                  className={`p-4 border-t ${!isHex(borderStyle) ? borderStyle : ""}`}
                  style={{
                    borderColor: isHex(borderStyle) ? borderStyle : undefined,
                  }}
                >
                  <p className="font-[Nohemi] text-[16px] font-normal leading-[28px] tracking-[0.05em] text-[#2a2a2a] [text-box-trim:cap] [text-box-edge:cap_alphabetic]">
                    {row.text}
                  </p>
                </div>
              )}
            </div>
          );
        })}
        {footerText && (
          <div
            className={`p-5 border-t ${!isHex(borderStyle) ? borderStyle : ""}`}
            style={{
              borderColor: isHex(borderStyle) ? borderStyle : undefined,
            }}
          >
            <p className="text-[12.5px] text-[#111111] font-bold leading-relaxed">
              {footerText}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}