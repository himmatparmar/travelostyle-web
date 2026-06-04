"use client";

import {
  MessageSquareText,
  Heart,
  PenTool,
} from "lucide-react";

const promises = [
  {
    icon: MessageSquareText,
    title: "Transparent from the\nfirst conversation",
    bg: "#EFE5DE",
  },
  {
    icon: Heart,
    title: "Thoughtful with every\nrecommendation",
    bg: "#E8EBCF",
  },
  {
    icon: PenTool,
    title: "Present long after the\nbooking is done",
    bg: "#F3DFC9",
  },
];

export default function TravelOStylePromise() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <h2 className="text-[48px] font-medium text-[#2C2C2C]">
            The TravelOStyle Promise
          </h2>

          <p className="mx-auto mt-5 max-w-[920px] text-[13px] leading-[1.8] text-[#7B7B7B]">
            No hidden costs. No overselling a journey we can not deliver on.
            No disappearing once the bookings confirmed. Just thoughtful,
            fulfilling travel, done with integrity. We truly believe that the
            right journey, for the right person, at the right time, is genuinely
            life-changing.
          </p>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {promises.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex h-[145px] w-[290px] flex-col items-center justify-center rounded-[6px] border border-[#6A67B5]"
                style={{ backgroundColor: item.bg }}
              >
                <Icon
                  size={34}
                  strokeWidth={1.7}
                  className="mb-5 text-[#2C2C2C]"
                />

                <p className="whitespace-pre-line text-center text-[18px] font-semibold leading-[1.25] text-[#2C2C2C]">
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