import React from "react";

export default function GoodCompaneyJourney() {
  const polaroids = [
    {
      id: 1,
      imgUrl: "/Kampus.svg",
      rotation: "-rotate-[7deg]",       
      imgRotation: "rotate-[-7deg]",    
      translateY: "translate-y-16 md:translate-y-20",
      borderColor: "border-slate-800/60",
      zIndex: "z-10",
    },
    {
      id: 2,
      imgUrl: "/Trecmanfreemind.svg",
      rotation: "-rotate-[3deg]",
      imgRotation: "rotate-[11deg]",
      translateY: "translate-y-16 md:translate-y-20",
      borderColor: "border-slate-800/60",
      zIndex: "z-20",
    },
    {
      id: 3,
      imgUrl: "/ChadWitbooi.svg",
      rotation: "-rotate-[8deg]",
      imgRotation: "rotate-[-1deg]",
      translateY: "translate-y-3 md:translate-y-4",
      borderColor: "border-blue-900/50",
      zIndex: "z-30", 
    },
    {
      id: 4,
      imgUrl: "/Minanl.svg",
      rotation: "rotate-[3deg]",
      imgRotation: "rotate-[5deg]",
      translateY: "translate-y-6 md:translate-y-8",
      borderColor: "border-blue-900/40",
      zIndex: "z-20",
    },
    {
      id: 5,
      imgUrl: "/CottonBro.svg",
      rotation: "rotate-[3deg]",
      imgRotation: "rotate-[-9deg]",
      translateY: "translate-y-14 md:translate-y-16",
      borderColor: "border-blue-900/50",
      hasButton: true,
      zIndex: "z-10",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white px-4 py-16 md:py-24 overflow-hidden flex flex-col items-center select-none border-t-[2px] border-[#3f4284]">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 645,225 
               C 740,140 960,15 1180,45 
               C 1280,60 1350,150 1230,200
               C 1140,230 1195,50 1300,40"
            stroke="#1d2d5f"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
          <path
            d="M 560,345 C 490,420 420,500 280,630"
            stroke="#1d2d5f"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
          <path
            d="M -20,740 L 80,725"
            stroke="#1d2d5f"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
          />
        </svg>
      </div>
      <div className="relative max-w-4xl w-full text-center z-10 flex flex-col items-center mt-6">
        <h2 className="font-taprom text-[58px] leading-[0.9] tracking-[-0.02em] text-[#222] text-center bg-[#F3E4DC] px-4 py-1">
          Journeys that get better in good
        </h2>

        <div className="inline-block mt-4 bg-[#F3E4DC] px-5 h-[48px] flex items-center justify-center">
          <h2 className="font-taprom text-[56px] leading-none tracking-[-0.02em] text-[#222]">
            company
          </h2>
        </div>

        <p className="mt-8 text-[21px] md:text-[14px] text-[#333333] max-w-[780px] leading-[1.7] tracking-normal px-4 font-normal">
          TravelOStyle group journeys are made to explore a destination beyond
          its postcard alongside like-minded people. Bonus?{" "}
          <span className="inline">
            There&apos;s no chaos of co-ordinating it yourself. The routes are
            planned, the price is fixed, the dates are set, the logistics are
            sorted and your group is waiting. All you have to do is decide
            whether you want to come along!
          </span>
        </p>
      </div>
      <div className="relative w-full max-w-[1250px] mt-12 md:mt-24 flex flex-wrap md:flex-nowrap justify-center items-start gap-8 md:gap-0 px-6 z-10">
        {polaroids.map((photo) => (
          <div
            key={photo.id}
            className={`
              relative bg-white p-[11px] pb-14 shadow-[0_12px_32px_rgba(0,0,0,0.11)] 
              border-[1.5px] ${photo.borderColor} rounded-[2px] 
              w-[230px] sm:w-[250px] md:w-[19.8%] shrink-0 transform 
              transition-all duration-300 hover:scale-110 hover:!z-50
              ${photo.rotation} ${photo.translateY} ${photo.zIndex}
              md:-mx-[15px]
            `}
          >
            <div className={`relative ${photo.imgRotation} w-full overflow-hidden`}>
              <img
                src={photo.imgUrl}
                alt={`Travel group snapshot ${photo.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {photo.hasButton && (
              <button className="absolute top-[46%] right-[-45px] transform -translate-y-1/2 bg-[#212b68] text-white font-semibold text-[10.5px] py-1.5 px-3.5 rounded-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.3)] tracking-wide hover:bg-[#151c47] transition-colors z-50 whitespace-nowrap border border-white/15">
                Compare Trips
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}