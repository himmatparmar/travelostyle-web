import Image from "next/image";

export default function TravelBetter() {
  const cardClass =
    "rounded-[10px] border-[2px] border-[#2C3078] p-[24px] lg:p-[16px] w-full max-w-[337px] h-[209px] mx-auto flex flex-col lg:max-w-none lg:h-[209px]";

  return (
    <section className="relative px-4 md:px-[60px] lg:px-[113px] pt-[60px] md:pt-[100px] lg:pt-[140px] pb-[60px] lg:pb-[120px] overflow-hidden">
      {/* Curve Line — desktop */}
      <Image
        src="/Vector 222.svg"
        alt=""
        width={1400}
        height={900}
        className="hidden lg:block absolute left-0 top-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Curve Line — mobile */}
      <img
        src="/about-travelbetter-dots-mobile.svg"
        alt=""
        aria-hidden="true"
        className="lg:hidden pointer-events-none absolute right-[-20px] top-[-5px] w-[280px] h-auto z-0"
      />

      <div className="relative z-10 max-w-[520px]">
        <p className="font-taprom text-[21px] font-normal leading-[32px] lg:leading-[64px] tracking-[0.05em] text-black [text-box-trim:cap] [text-box-edge:cap_alphabetic]">
          ways we like to travel
        </p>

        <h2 className="mt-3 text-[32px] font-bold leading-[40px] tracking-[0.05em] text-black [text-box-trim:cap] [text-box-edge:cap_alphabetic]">
          Travel better with us
        </h2>

        <p className="mt-8 max-w-[830px]  text-[16px] font-normal leading-[28px] tracking-[0.05em] text-black [text-box-trim:cap] [text-box-edge:cap_alphabetic]">
          TravelOStyle offers a curated collection of ready-to-book journeys
          across the world &ndash; across travel styles, budget points, and modes of
          travel. Alongside that, we personalise journeys for those who want
          something that&rsquo;s truly, specifically theirs.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-[40px] md:mt-[70px]">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-x-[24px] lg:gap-y-[24px]">
          <div className={`${cardClass} bg-[#EFF3CF]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-4 text-[18px] font-semibold leading-[28px] tracking-[0.05em]">Group Journeys</h3>
            <p className="mt-3 text-[16px] leading-[24px] tracking-[0.05em]">
              Curated journeys with shared departures.
            </p>
          </div>

          <div className={`${cardClass} bg-[#C2E5FF]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-4 text-[18px] font-semibold leading-[28px] tracking-[0.05em]">Private Journeys</h3>
            <p className="mt-3 text-[16px] leading-[24px] tracking-[0.05em]">
              Pre-planned journeys customized for you
            </p>
          </div>

          <div className={`${cardClass} bg-[#FFDDBD]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-4 text-[18px] font-semibold leading-[28px] tracking-[0.05em]">Tailormade Journeys</h3>
            <p className="mt-3 text-[16px] leading-[24px] tracking-[0.05em]">
              Start from scratch &amp; take a trip that's entirely yours
            </p>
          </div>

          <div className={`${cardClass} bg-[#F2E2DA]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-4 text-[18px] font-semibold leading-[28px] tracking-[0.05em]">Cruises</h3>
            <p className="mt-3 text-[16px] leading-[24px] tracking-[0.05em]">
              Sea and river journeys with changing views
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-x-[24px] lg:gap-y-[24px] items-center">
          <div className={`${cardClass} bg-[#FAFAFA]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-4 text-[18px] font-semibold leading-[28px] tracking-[0.05em]">Land &amp; Rail Journeys</h3>
            <p className="mt-3 text-[16px] leading-[24px] tracking-[0.05em]">
              Scenic routes that can be experienced with a group or privately
            </p>
          </div>

          <div className={`${cardClass} bg-[#EFF3CF]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-4 text-[18px] font-semibold leading-[28px] tracking-[0.05em]">Private Jet Journeys</h3>
            <p className="mt-3 text-[16px] leading-[24px] tracking-[0.05em]">
              Luxurious air travel so you can move freely through the world
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-2 pt-6 lg:pt-2">
            <p className="font-taprom font-normal text-[40px] md:text-[32px] lg:text-[34px] leading-[48px] md:leading-[58px] lg:leading-[46px] tracking-[0.05em] text-[#000000]">
              Our range is wide{" "}
              <span className="bg-[#F2E2DA] box-decoration-slice leading-[1.9] [-webkit-box-decoration-break:slice] [box-decoration-break:slice]">
                because we don&apos;t believe in a one-size-fits all
              </span>{" "}
              approach to the world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}