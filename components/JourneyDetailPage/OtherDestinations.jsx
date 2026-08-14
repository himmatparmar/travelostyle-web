"use client";
import JourneysWeLove from "../HomePage/JourneysWeLove";

export default function OtherDestinations() {
  return (
    <div className="mt-[4vw] flex items-center justify-center gap-[1.3vw]">
      <section className="w-full text-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 max-w-xl mx-auto leading-tight">
          Other Destinations We Know You&apos;ll Love
        </h2>
        <JourneysWeLove />
      </section>
    </div>
  );
}
