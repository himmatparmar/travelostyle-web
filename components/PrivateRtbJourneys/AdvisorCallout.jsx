import React from 'react';
import TalkToAdvisorButton from "@/components/GeneralInquiryForm/TalkToAdvisorButton";;

export default function AdvisorCallout() {
  return (
    <section className="bg-white pt-8 pb-20 px-6 md:px-12 lg:px-16 w-full flex items-center justify-center font-sans">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        <div className="flex flex-col space-y-10 items-start">
          <h2 className="text-4xl sm:text-5xl md:text-[50px] font-bold text-black leading-tight tracking-tight">
            Make the Journey<br />entirely yours
          </h2>
          
          <TalkToAdvisorButton className="inline-block bg-[#2E3171] hover:bg-[#1E2254] text-white font-semibold text-[15px] px-7 py-3 rounded-full transition-colors duration-200 shadow-sm whitespace-nowrap" />
        </div>

        <div className="flex flex-col space-y-8 text-black/90 text-base sm:text-lg md:text-[17px] leading-relaxed tracking-normal font-normal">
          <p>
            Private Journeys can be priced per group or individually depending on what’s beneficial to you. 
            This makes them more cost-effective than expected, especially for families or groups of four or more.
          </p>
          <p>
            TravelOStyle will walk you through the numbers honestly. If a group journey makes more sense – 
            we’ll let you know.
          </p>
        </div>

      </div>
    </section>
  );
}