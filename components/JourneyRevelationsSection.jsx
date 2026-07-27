import React from "react";

export default function JourneyRevelationsSection({
  badgeText,
  titleText,
  features = [],
  topIntroText = "",
  matrixRows = [],
  footerText = "",
  theme,
}) {
  const cardBgStyle = theme.cardBg || "bg-[#eff3cf]";
  const labelBgStyle = theme.labelBg || "bg-[#e5eba7]/20";
  const borderStyle = theme.borderColor || "border-neutral-400";

  return (
    <div className="hidden md:flex w-full min-h-screen bg-white font-sans antialiased select-none flex flex-col items-center justify-center py-10">
      <section
        className={`w-full max-w-[1100px] mx-4 my-8 rounded-xl border ${borderStyle} overflow-hidden flex flex-col z-20 shadow-sm ${!cardBgStyle.startsWith("#") ? cardBgStyle : ""}`}
        style={{
          backgroundColor: cardBgStyle.startsWith("#")
            ? cardBgStyle
            : undefined,
        }}
      >
        <div className={`p-6 md:p-8 border-b ${borderStyle}`}>
          {badgeText && (
            <h4
              className="font-taprom text-xl md:text-2xl text-[#3c3c3c] tracking-wide mb-2"
            >
              {badgeText}
            </h4>
          )}
          {titleText && (
            <h2 className="text-2xl md:text-[32px] font-bold text-[#111111] leading-[1.25] tracking-tight max-w-4xl">
              {titleText}
            </h2>
          )}
        </div>
        <div className="flex flex-col md:flex-row flex-1">
          <div
            className={`w-full md:w-[36%] p-5 md:p-6 flex flex-col gap-6 border-b md:border-b-0 md:border-r ${borderStyle} items-center md:items-start shrink-0`}
          >
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 max-w-[300px]">
                <div
                  className={`relative rounded-xl overflow-hidden border ${borderStyle} shadow-sm bg-stone-100 shrink-0`}
                  style={{ width: "300px", height: "185px" }}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.description}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[13px] text-[#2c2c2c] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[64%] flex flex-col justify-between">
            {topIntroText && (
              <div
                className={`p-5 md:p-6 border-b ${borderStyle} flex items-center min-h-[85px]`}
              >
                <p className="text-sm md:text-[14px] text-[#222222] font-normal leading-relaxed tracking-wide">
                  {topIntroText}
                </p>
              </div>
            )}
            {matrixRows.map((row, index) => {
              const isLast = index === matrixRows.length - 1;
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row ${!isLast || footerText ? `border-b ${borderStyle}` : ""} flex-1 min-h-[110px]`}
                >
                  <div
                    className={`w-full sm:w-[25%] p-4 flex items-center justify-start sm:justify-center border-b sm:border-b-0 sm:border-r ${borderStyle} ${!labelBgStyle.startsWith("#") ? labelBgStyle : ""}`}
                  >
                    <span className="text-[11px] font-bold text-[#111111] tracking-widest text-center whitespace-nowrap">
                      {row.label.toUpperCase()}
                    </span>
                  </div>
                  <div className="w-full sm:w-[75%] p-5 flex items-center">
                    <p className="text-[12.5px] md:text-[13px] text-[#3a3a3a] leading-relaxed font-normal tracking-wide">
                      {row.text}
                    </p>
                  </div>
                </div>
              );
            })}
            {footerText && (
              <div className="p-5 md:p-6 flex items-center min-h-[85px]">
                <p className="text-[12.5px] md:text-[13.5px] text-[#111111] font-semibold leading-relaxed">
                  {footerText}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
