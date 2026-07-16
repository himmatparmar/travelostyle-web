import React from 'react';

export default function TravelLandingPage() {
  const features = [
    {
      imgUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600',
      description: 'Temples that open up their inner courtyards to small groups.',
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600',
      description: 'Dinners, Stories and Memories that are shared over a campfire.',
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600',
      description: 'Guides who take you somewhere not on the map because they know the group is generally curious.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased select-none flex flex-col items-center">
      <section className="w-full max-w-[950px] mx-4 my-20 bg-[#edf2d0] rounded-xl border border-neutral-400 overflow-hidden flex flex-col z-20 shadow-sm">
        <div className="p-6 md:p-8 border-b border-neutral-400">
          <h4 
            className="text-lg md:text-xl text-[#3c3c3c] italic tracking-wide mb-2"
            style={{ fontFamily: "'Caveat', 'Georgia', cursive, sans-serif" }}
          >
            What&apos;s so special about group journeys?
          </h4>
          <h2 className="text-xl md:text-[28px] font-bold text-[#111111] leading-[1.25] tracking-tight max-w-3xl">
            Some places reveal themselves differently when you arrive as a group
          </h2>
        </div>
        <div className="flex flex-col md:flex-row flex-1">
          
          <div className="w-full md:w-[28%] p-5 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-neutral-400 items-center md:items-start">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 max-w-[210px]">
                <div 
                  className="relative rounded-lg overflow-hidden border border-neutral-400 shadow-sm bg-stone-100 shrink-0"
                  style={{ width: '210px', height: '130px' }}
                >
                  <img 
                    src={item.imgUrl} 
                    alt={item.description} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11.5px] text-[#2c2c2c] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-[72%] flex flex-col">
            <div className="p-5 md:p-6 border-b border-neutral-400 min-h-[90px] flex items-center">
              <p className="text-xs md:text-[13px] text-[#222222] font-normal leading-relaxed tracking-wide">
                These are moments that don&apos;t make it into the solo traveller&apos;s itinerary – and they&apos;re the ones people talk about long after the trip is done.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row border-b border-neutral-400 flex-1 min-h-[90px]">
              <div className="w-full sm:w-[25%] p-4 flex items-center justify-start sm:justify-center border-b sm:border-b-0 sm:border-r border-neutral-400 bg-[#e5eba7]/20">
                <span className="text-[10px] font-bold text-[#111111] tracking-widest text-center whitespace-nowrap">
                  WHAT IS IT?
                </span>
              </div>
              <div className="w-full sm:w-[75%] p-5 flex items-center">
                <p className="text-[11.5px] md:text-[12.5px] text-[#3a3a3a] leading-relaxed font-normal tracking-wide">
                  A TravelOStyle group journey is a small group of people – strangers at the start, rarely by the end – moving through a destination together. The route is perfected, departures are set, and the experience is one that opens up precisely because you&apos;re not navigating it alone.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row border-b border-neutral-400 flex-1 min-h-[120px]">
              <div className="w-full sm:w-[25%] p-4 flex items-center justify-start sm:justify-center border-b sm:border-b-0 sm:border-r border-neutral-400 bg-[#e5eba7]/20">
                <span className="text-[10px] font-bold text-[#111111] tracking-widest text-center whitespace-nowrap">
                  WHO IS IT FOR?
                </span>
              </div>
              <div className="w-full sm:w-[75%] p-5 flex items-center">
                <p className="text-[11.5px] md:text-[12.5px] text-[#3a3a3a] leading-relaxed font-normal tracking-wide">
                  It&apos;s for the solo traveller who wants company, the family who&apos;d rather share the wonder of a place and anyone who&apos;s ever had a conversation over a meal in an unfamiliar city and thought: this is exactly why I travel.
                </p>
              </div>
            </div>
            <div className="p-5 md:p-6 bg-[#e5eba7]/10 flex items-center">
              <p className="text-[11.5px] md:text-[12.5px] text-[#111111] font-semibold leading-relaxed">
                TravelOStyle keeps group sizes intentionally small. Enough people to feel like a journey but not so many that the magic gets diluted.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}