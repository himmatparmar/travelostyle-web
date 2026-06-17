import Image from "next/image";

export default function OriginStory() {
  return (
    <section className="px-[170px] py-[60px]">
      <div className="flex items-start gap-[20px]">

        {/* Left Images */}
<div className="grid grid-cols-3 gap-4">

  {/* Column 1 */}
  <div className="flex flex-col gap-4">
    <Image src="/Rectangle920.svg" alt="" width={170} height={170} className="rounded-[12px]" />
    <Image src="/Rectangle911.svg" alt="" width={170} height={170} className="rounded-[12px]" />
    <Image src="/Rectangle914.svg" alt="" width={170} height={170} className="rounded-[12px]" />
    <Image src="/Rectangle917.svg" alt="" width={170} height={240} className="rounded-[12px]" />
  </div>

  {/* Column 2 */}
  <div className="flex flex-col gap-4 pt-[55px]">
    <Image src="/Rectangle912.svg" alt="" width={170} height={170} className="rounded-[12px]" />
    <Image src="/Rectangle915.svg" alt="" width={170} height={170} className="rounded-[12px]" />
    <Image src="/Rectangle918.svg" alt="" width={170} height={170} className="rounded-[12px]" />
  </div>

  {/* Column 3 */}
  <div className="flex flex-col gap-4 pt-[110px]">
    <Image src="/Rectangle913.svg" alt="" width={170} height={170} className="rounded-[12px]" />
    <Image src="/Rectangle916.svg" alt="" width={170} height={170} className="rounded-[12px]" />
  </div>

</div>

        {/* Right Content */}
        <div className="w-[769px] pt-[95px]">
          <p className="font-taprom text-[28px] leading-none">
            our origin story
          </p>

          <h2 className="mt-2 text-[48px] font-semibold leading-[52px]">
            How TravelOStyle began
          </h2>

          <div className="mt-10 space-y-8 text-[18px] leading-[32px] text-[#4A4A4A]">
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
              and across very different travel budgets and expectations, we've
              taken everything we know about systems, logistics, on-ground
              operations and high-expectations, to build a travel company that
              leads with honesty. We're here to meet you where you are and then
              expand on what's possible.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}