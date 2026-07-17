import React from 'react';

export default function AdvisorCallout() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 w-full flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        
        <div className="md:col-span-5 flex flex-col items-start space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 leading-[1.15]">
            Not sure yet?<br />
            That&apos;s okay!
          </h2>
          
          <button className="bg-[#2B3172] hover:bg-[#1E2356] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 shadow-sm">
            Talk to a Travel Advisor
          </button>
        </div>
        <div className="md:col-span-7 flex flex-col space-y-6 text-gray-800 text-[15px] md:text-base leading-relaxed">
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