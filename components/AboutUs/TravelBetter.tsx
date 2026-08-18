import Image from "next/image";

export default function TravelBetter() {
  const cardClass =
    "rounded-[10px] border-[2px] border-[#4E4DAA] p-[16px] w-full max-w-[337px] h-[209px] mx-auto lg:max-w-none lg:h-[209px]";

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
        <p className="font-taprom text-[36px] md:text-[48px] leading-[56px] md:leading-[64px] tracking-[0.05em]">
          ways we like to travel
        </p>

        <h2 className="mt-3 text-[36px] md:text-[48px] font-semibold leading-[56px] md:leading-[80px] tracking-[0.05em]">
          Travel better with us
        </h2>

        <p className="mt-8 text-[16px] md:text-[18px] font-normal leading-[32px] md:leading-[36px] tracking-[0.05em] text-[#4A4A4A] max-w-[830px]">
          We offer a curated collection of ready-to-book journeys across the
          world across travel styles, budget points, and modes of travel.
          Alongside that, we personalise journeys for those who want something
          that's truly, specifically theirs.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-[40px] md:mt-[70px]">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-x-[24px] lg:gap-y-[24px]">
          <div className={`${cardClass} bg-[#E7ECC7]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Group Journeys</h3>
            <p className="mt-2 text-[12px]">
              Curated journeys with shared departures.
            </p>
          </div>

          <div className={`${cardClass} bg-[#CFE5F8]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Private Journeys</h3>
            <p className="mt-2 text-[12px]">
              Pre-planned journeys customized for you
            </p>
          </div>

          <div className={`${cardClass} bg-[#F5D6B9]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Tailormade Journeys</h3>
            <p className="mt-2 text-[12px]">
              Start from scratch &amp; take a trip that's entirely yours
            </p>
          </div>

          <div className={`${cardClass} bg-[#EFE2DC]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Cruises</h3>
            <p className="mt-2 text-[12px]">
              Sea and river journeys with changing views
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-x-[24px] lg:gap-y-[24px] items-center">
          <div className={`${cardClass} bg-[#FFFFFF]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Land &amp; Rail Journeys</h3>
            <p className="mt-2 text-[12px]">
              Scenic routes that can be experienced with a group or privately
            </p>
          </div>

          <div className={`${cardClass} bg-[#E7ECC7]`}>
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Private Jet Journeys</h3>
            <p className="mt-2 text-[12px]">
              Luxurious air travel so you can move freely through the world
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-2 pt-2">
            <p className="font-taprom font-normal text-[26px] md:text-[32px] lg:text-[34px] leading-[48px] md:leading-[58px] lg:leading-[46px] lg:tracking-[0.05em] text-[#000000]">
              Our range is wide{" "}
              <span className="bg-[#F2E2DA] px-1 py-0 box-decoration-clone">
                because we don't believe in a one-size-fits all
              </span>{" "}
              approach to the world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}