import Image from "next/image";

export default function TravelBetter() {
  return (
    <section className="relative px-[170px] pt-[140px] pb-[120px] overflow-hidden">

      {/* Curve Line */}
      <Image
        src="/Vector 222.svg"
        alt=""
        width={900}
        height={650}
        className="absolute right-[20px] top-[130px] z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-[520px]">
       <p className="font-taprom text-[48px] leading-[64px] tracking-[0.05em] whitespace-nowrap">
          ways we like to travel
        </p>

        <h2 className="mt-3 w-[525px] text-[48px] font-semibold leading-[80px] tracking-[0.05em] whitespace-nowrap">
          Travel better with us
        </h2>

       <p className="mt-8 w-[830px] text-[18px] font-normal leading-[36px] tracking-[0.05em] text-[#4A4A4A]">
          We offer a curated collection of ready-to-book journeys across the
          world — across travel styles, budget points, and modes of travel.
          Alongside that, we personalise journeys for those who want something
          that's truly, specifically theirs.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 mt-[70px] flex items-end gap-[50px]">

        <div className="grid grid-cols-2 gap-4">

          <div className="w-[220px] h-[140px] rounded-[8px] border border-[#4E4DAA] bg-[#E7ECC7] p-5">
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Group Journeys</h3>
            <p className="mt-2 text-[12px]">
              Curated journeys with shared departures.
            </p>
          </div>

          <div className="w-[220px] h-[140px] rounded-[8px] border border-[#4E4DAA] bg-[#CFE5F8] p-5">
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Private Journeys</h3>
            <p className="mt-2 text-[12px]">
              Pre-planned journeys customized for you
            </p>
          </div>

          <div className="w-[220px] h-[140px] rounded-[8px] border border-[#4E4DAA] bg-[#FFFFFF] p-5">
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Land & Rail Journeys</h3>
            <p className="mt-2 text-[12px]">
              Scenic routes that can be experienced privately.
            </p>
          </div>

          <div className="w-[220px] h-[140px] rounded-[8px] border border-[#4E4DAA] bg-[#E7ECC7] p-5">
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Private Jet Journeys</h3>
            <p className="mt-2 text-[12px]">
              Luxurious air travel so you can move freely.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="w-[220px] h-[140px] rounded-[8px] border border-[#4E4DAA] bg-[#F5D6B9] p-5">
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Tailormade Journeys</h3>
            <p className="mt-2 text-[12px]">
              Start from scratch & take a trip that's entirely yours
            </p>
          </div>

          <div className="w-[220px] h-[140px] rounded-[8px] border border-[#4E4DAA] bg-[#EFE2DC] p-5">
            <p className="text-[20px]">✦</p>
            <h3 className="mt-2 font-semibold">Cruises</h3>
            <p className="mt-2 text-[12px]">
              Sea and river journeys with changing views
            </p>
          </div>
        </div>

        {/* Right Quote */}
        <div className="relative z-20 w-[420px] pt-[90px] -ml-[30px]">
          <p className="font-taprom text-[32px] leading-[58px] max-w-[500px]">
            Our range is wide because we don't
            <span className="bg-[#F2E2DA] px-1">
              {" "}believe in a one-size-fits-all{" "}
            </span>
            approach to the world
          </p>
        </div>

      </div>
    </section>
  );
}