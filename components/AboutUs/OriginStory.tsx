import Image from "next/image";

export default function OriginStory() {
  return (
    <section className="px-4 md:px-[60px] lg:px-[113px] py-[60px] pt-0">
      <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-[40px]">

        {/* Left Images — clean grid on mobile */}
        <div className="grid lg:hidden grid-cols-4 gap-2 w-full mb-[30px]">
          <Image src="/Rectangle920.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle911.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle914.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle917.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle912.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle915.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle918.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle913.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
          <Image src="/Rectangle916.svg" alt="" width={264} height={264} className="rounded-[8px] w-full aspect-square object-cover" />
        </div>

        {/* Left Images — 3 staggered columns (desktop) */}
        <div className="hidden lg:flex gap-3 md:gap-4 flex-shrink-0 w-full lg:w-auto mb-[50px]">

          {/* Column 1 — 4 images, starts at top */}
          <div className="flex flex-col gap-3 md:gap-4 bg-[#EFF3CF] flex-1 lg:flex-none rounded-lg">
            <Image src="/Rectangle920.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
            <Image src="/Rectangle911.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
            <Image src="/Rectangle914.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
            <Image src="/Rectangle917.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
          </div>

          {/* Column 2 — 3 images, offset down */}
          <div className="flex flex-col h-[400px] gap-3 md:gap-4 bg-[#F2E2DA] mt-15 md:mt-25 lg:mt-37.5 flex-1 lg:flex-none rounded-lg">
            <Image src="/Rectangle912.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
            <Image src="/Rectangle915.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
            <Image src="/Rectangle918.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
          </div>

          {/* Column 3 — 2 images, offset even more */}
          <div className="flex flex-col h-[300px] gap-3 md:gap-4 bg-[#F2D09F] mt-30 md:mt-50 lg:mt-50 flex-1 lg:flex-none rounded-lg">
            <Image src="/Rectangle913.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
            <Image src="/Rectangle916.svg" alt="" width={264} height={264} className="rounded-[12px] w-full lg:w-[160px] aspect-square object-cover" />
          </div>

        </div>

        {/* Right Content */}
        <div className="flex-1 pt-0 lg:pt-[95px]">
          <p className="font-taprom text-[20px] md:text-[28px] leading-none text-center lg:text-left">
            our origin story
          </p>

          <h2 className="mt-2 mx-auto max-w-[338px] font-[Nohemi] text-[32px] md:text-[48px] font-semibold leading-[40px] md:leading-[52px] tracking-[0.05em] md:tracking-normal text-black text-center lg:text-left lg:mx-0 lg:max-w-none">
            How TravelOStyle began
          </h2>

          <div className="mt-10 space-y-8 text-[16px] md:text-[18px] leading-[32px] text-[#4A4A4A]">
            <p>
              We started from a simple observation: travel should be a respite.
              But for most people, planning it is anything but.
            </p>

            <p>
              We believe the way someone travels reflects how they live, or how
              they wish to live. Every traveller, regardless of budget or
              experience level, deserves to experience the version of a journey
              that genuinely fits them. Not a compromised version.
            </p>

            <p>
              With 30+ years of combined experience across land, air, and cruises,
              and across very different travel budgets and expectations, we&apos;ve
              taken everything we know about systems, logistics, on-ground
              operations and high-expectations, to build a travel company that
              leads with honesty. We&apos;re here to meet you where you are and then
              expand on what&apos;s possible.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
