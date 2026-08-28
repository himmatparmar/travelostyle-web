import React from "react";
function stripHtml(html) {
  return (html || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .trim();
}


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
  const isHexBorder = borderStyle.startsWith("#");
  const borderClass = isHexBorder ? "" : borderStyle;
  const borderColorStyle = isHexBorder ? { borderColor: borderStyle } : {};

  return (
    <div className="hidden md:flex w-full min-h-screen bg-white font-sans antialiased select-none flex flex-col items-center justify-center py-10">
      <section
        className={`w-full max-w-[1100px] mx-4 my-8 rounded-[10px] border-2 overflow-hidden flex flex-col z-20 shadow-sm ${!cardBgStyle.startsWith("#") ? cardBgStyle : ""}`}
        style={{
          backgroundColor: cardBgStyle.startsWith("#")
            ? cardBgStyle
            : undefined,
          borderColor: "#1A1A1A",
        }}
      >
        <div className={`p-6 md:p-8 border-b ${borderClass}`} style={borderColorStyle}>
          {badgeText && (
            <h4
              className="font-taprom font-normal text-xl md:text-2xl text-[#1A1A1A] tracking-wide mb-2"
            >
              {badgeText}
            </h4>
          )}
          {titleText && (
            <h2 className="font-nohemi text-2xl md:text-[32px] font-semibold text-[#000000] leading-[1.25] tracking-tight max-w-4xl">
{stripHtml(titleText)}            </h2>
          )}
        </div>
        <div className="flex flex-col md:flex-row flex-1">
          <div
            className={`w-full md:w-[36%] p-5 md:p-6 flex flex-col gap-6 border-b md:border-b-0 md:border-r ${borderClass} items-center md:items-start shrink-0`}
            style={borderColorStyle}
          >
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 max-w-[300px]">
                <div
                  className={`relative rounded-xl overflow-hidden border ${borderClass} shadow-sm bg-stone-100 shrink-0`}
                  style={{ width: "300px", height: "185px", ...borderColorStyle }}
                >
                  <img
                    src={item.imgUrl}
                    alt={item.description}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-nohemi text-[13px] text-[#000000] leading-relaxed font-normal">
{stripHtml(item.description)}                </p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[64%] flex flex-col justify-between">
            {topIntroText && (
              <div
                className={`p-5 md:p-6 border-b ${borderClass} flex items-center min-h-[85px]`}
                style={borderColorStyle}
              >
                <p className="font-nohemi text-sm md:text-[14px] text-[#000000] font-normal leading-relaxed tracking-wide">
{stripHtml(topIntroText)}                </p>
              </div>
            )}
            {matrixRows.map((row, index) => {
              const isLast = index === matrixRows.length - 1;
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row ${!isLast || footerText ? `border-b ${borderClass}` : ""} flex-1 min-h-[110px]`}
                  style={!isLast || footerText ? borderColorStyle : {}}
                >
                  <div
                    className={`w-full sm:w-[25%] p-4 flex items-center justify-start sm:justify-center border-b sm:border-b-0 sm:border-r ${borderClass} ${!labelBgStyle.startsWith("#") ? "" : ""}`}
                    style={borderColorStyle}
                  >
                    <span className="font-nohemi text-[11px] font-semibold text-[#000000] tracking-widest text-center whitespace-nowrap">
                      {row.label.toUpperCase()}
                    </span>
                  </div>
                  <div className="w-full sm:w-[75%] p-5 flex items-center">
                    <p className="font-nohemi text-[12.5px] md:text-[13px] text-[#000000] leading-relaxed font-normal tracking-wide">
{stripHtml(row.text)}                    </p>
                  </div>
                </div>
              );
            })}
            {footerText && (
              <div className="p-5 md:p-6 flex items-center min-h-[80px]">
                <p className="font-nohemi text-[11.5px] md:text-[16.5px] text-[#000000] font-semibold leading-relaxed">
{stripHtml(footerText)}                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
