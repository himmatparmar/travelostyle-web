"use client";

import Image from "next/image";

export default function TimingSection() {
  return (
    <section className="relative w-full bg-[#fbfbfb] py-40 overflow-hidden select-none">
      <div className="absolute inset-8 z-0 pointer-events-none w-[104.35vw] h-[26.6vw]">
        <Image
          src="/LongLine.svg"
          alt="Dashed Wave Pattern"
          fill
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="max-w-3xl">
          <h2 className="mt-15 text-[2.8vw] font-semibold leading-[1.2]">
            Be at the right place, at exactly the
            <br />
            right time
          </h2>

          <p className="text-[0.9vw] mt-4">
            Timing isn&apos;t everything — but it is a lot. Browse our
            TravelOStyle calendar; a collection of journeys by month, so
            you&apos;re travelling alongside the grain of a place. Trust us,
            arriving somewhere in its best season is a rare kind of magic.
          </p>
        </div>
      </div>
    </section>
  );
}
