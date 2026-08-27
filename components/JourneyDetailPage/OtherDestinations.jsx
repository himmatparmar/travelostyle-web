"use client";
import JourneysWeLove from "../HomePage/JourneysWeLove";

export default function OtherDestinations() {
  return (
    <div className=" md:mt-[4vw] md:flex md:items-center md:justify-center md:gap-[1.3vw]">
      <section className="w-full py-10 md:py-12">
        <h2 className="px-[27px] text-[32px] font-semibold leading-[40px] tracking-[0.05em] text-[#1A1A1A] md:mx-auto md:max-w-xl md:px-0 md:text-center md:text-4xl md:font-bold md:leading-tight">
          Other Destinations We Know You&apos;ll Love
        </h2>
        <JourneysWeLove />
      </section>
    </div>
  );
}
