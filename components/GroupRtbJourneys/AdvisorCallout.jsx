import React from 'react';

export default function AdvisorCallout() {
  return (
    <section className="bg-white py-15 mb-22 px-6 md:px-12 lg:px-16 w-full flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <div className="flex flex-col space-y-10 items-start">
          <h2 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-black leading-tight tracking-tight">
            Not sure yet?<br />
            That&apos;s okay!
          </h2>
          
          <button className="inline-block bg-[#2E3171] hover:bg-[#1E2254] text-white font-semibold text-[15px] px-7 py-3 rounded-full transition-colors duration-200 shadow-sm whitespace-nowrap">
            Talk to a Travel Advisor
          </button>
        </div>

        <div className="flex flex-col space-y-8 text-black/90 text-base sm:text-lg md:text-[17px] leading-relaxed tracking-normal font-normal">
          <p>
            Group journeys work beautifully for some travelers and less well for others. 
            At TravelOStyle, we would rather have that conversation upfront than send you 
            on a trip that doesn&apos;t suit how you travel.
          </p>
          <p>
            Tell us how you like to move through the world. We&apos;ll help you figure out 
            whether a group journey, a private option or something tailor-made is a better 
            fit for you.
          </p>
        </div>

      </div>
    </section>
  );
}