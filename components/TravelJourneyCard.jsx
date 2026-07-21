import React from 'react'

export default function TravelJourneyCard({journeys}) {
  return (
     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
        {journeys.map((journey) => (
          <div
            key={journey.id}
            className="relative bg-white rounded-t-lg shadow-sm  flex flex-col justify-between overflow-hidden pb-8 min-h-[580px]"
          >
            <div>
              <div className="flex gap-2 p-4 pb-2">
                {journey.types.includes('Group Journey') && (
                  <span className="text-[10px] font-semibold bg-[#EFF6E0] text-[#59832A] px-2.5 py-1 rounded">
                    Group Journey
                  </span>
                )}
                {journey.types.includes('Private Journey') && (
                  <span className="text-[10px] font-semibold bg-[#FEFAE0] text-[#B58A32] px-2.5 py-1 rounded">
                    Private Journey
                  </span>
                )}
              </div>
              <div className="px-4">
                <div className="overflow-hidden rounded-md h-[180px] w-full relative">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <div className="px-5 pt-4">
                <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                  {journey.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed line-clamp-3">
                  {journey.description}
                </p>

                <div className="flex items-center gap-4 mt-4 text-[11px] text-neutral-500 font-medium">
            
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{journey.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{journey.destinations}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between px-5 mb-4">
                <div>
                  <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">from</span>
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-neutral-900">${journey.price}*</span>
                    <span className="text-[10px] text-neutral-500 ml-1">/ person</span>
                  </div>
                  <span className="text-[9px] text-neutral-400 block -mt-1">double occupancy*</span>
                </div>
                
                <button className="bg-[#1C355E] hover:bg-[#12233F] text-white text-xs font-semibold px-4 py-2 rounded-full shadow transition-all duration-200">
                  View Trip
                </button>
              </div>

              {journey.earlyBird ? (
                <div className="mx-4 mb-4 bg-[#FDF0EA] text-[#A65B32] py-2 px-3 rounded flex items-center gap-1.5 text-[10px] font-medium border border-[#FBE3D5]">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Early Bird Offer available for {journey.earlyBird}</span>
                </div>
              ) : (
                <div className="h-9 mb-4" />
              )}
              <div className="border-t border-dashed border-neutral-200/80 mx-5 my-2"></div>
              <div className="px-5 pt-1">
                <button className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-800 text-[11px] font-medium transition-colors">
                  <svg className="w-4.5 h-4.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Add to Compare
                </button>
              </div>
            </div>
            <div className="absolute -bottom-1.5 left-0 right-0 h-3 bg-[radial-gradient(circle_at_center,_#F6F8F9_5px,_transparent_6px)] bg-[length:14px_12px] bg-repeat-x z-10 pointer-events-none"></div>
          </div>
        ))}
      </div>
  )
}
