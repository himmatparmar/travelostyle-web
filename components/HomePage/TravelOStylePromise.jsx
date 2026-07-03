"use client";

import Image from "next/image";
export default function TravelOStylePromise() {
  const promises = [
  {
    icon: "/copy.svg",
    title: "Transparent from the\nfirst conversation",
    bg: "#EFE5DE",
  },
  {
    icon: "/HeartIcon.svg",
    title: "Thoughtful with every\nrecommendation",
    bg: "#E8EBCF",
  },
  {
    icon: "/Handshake.svg",
    title: "Present long after the\nbooking is done",
    bg: "#F3DFC9",
  },
];
  return (
    <section className="py-16 md:py-20 bg-[#fbfbfb] select-none">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-left md:text-center max-w-[340px] md:max-w-[920px] mx-auto">
          <h2 className="text-[30px] md:text-[48px] font-bold md:font-medium text-[#2C2C2C] leading-[36px] md:leading-tight">
            The TravelOStyle <br className="md:hidden" /> Promise
          </h2>
          <p className="hidden md:block mx-auto mt-5 text-[13px] leading-[1.8] text-[#7B7B7B]">
            No hidden costs. No overselling a journey we can not deliver on. No
            disappearing once the bookings confirmed. Just thoughtful,
            fulfilling travel, done with integrity. We truly believe that the
            right journey, for the right person, at the right time, is genuinely
            life-changing.
          </p>

          <div className="md:hidden mt-6 flex flex-col gap-6 text-[13px] leading-[22px] text-[#4A4A4A]">
            <p>
              No hidden costs. No overselling a journey we can&apos;t deliver on. No disappearing once the booking&apos;s confirmed. Just thoughtful, fulfilling travel, done with integrity.
            </p>
            <p>
              We truly believe that the right journey, for the right person, at the right time, is genuinely life-changing.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 md:gap-8 max-w-[340px] md:max-w-none mx-auto">
          {promises.map((item, index) => {
            return (
              <div
                key={index}
                className="flex h-[150px] md:h-[145px] w-full md:w-[290px] flex-col items-center justify-center rounded-[6px] border border-[#6A67B5]/70 md:border-[#6A67B5] gap-3 p-5"
                style={{ backgroundColor: item.bg }}
              >
                <div className="relative w-[36px] h-[36px] md:w-[40px] md:h-[40px] flex items-center justify-center">
                  <Image 
                    src={item.icon} 
                    alt="Promise Icon" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>

                <p className="whitespace-pre-line max-md:whitespace-normal text-center text-[15px] md:text-[18px] font-bold md:font-semibold leading-[20px] md:leading-[1.25] text-[#2C2C2C]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}