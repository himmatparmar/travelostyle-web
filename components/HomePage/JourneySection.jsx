import Image from "next/image";

export default function JourneySection() {
  return (
    <>
     <section className="hidden md:block relative overflow-hidden py-[6vw] bg-[#f6f6f6] w-[99vw] h-[48.15vw]">
        <div className="absolute right-[-1vw] top-[-3vw] z-20 w-[70vw] rotate-[0deg] pointer-events-none">
          <Image
            src="/Line.svg"
            alt="line"
            width={1243}
            height={398}
            className="h-auto w-full"
          />
        </div>
        <div className="absolute bottom-[2vw] left-[-6vw] z-[1] w-[22vw] rotate-[8deg]">
          <Image
            src="/SmallLine.svg"
            alt="small-line"
            width={500}
            height={300}
            className="h-auto w-full"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-[4vw]">
          <div className="max-w-[48vw] mt-[5vw]">
            <div className="inline-block bg-[#F0E4DC] px-[1px]">
              <h2
                className="whitespace-nowrap text-[clamp(36px,2.8125vw,54px)] font-taprom font-normal text-ink"
                style={{
                  lineHeight: "var(--lh-heading-taprom-lg)",
                  letterSpacing: "var(--ls-heading-taprom-lg)",
                }}
              >
                Journeys made for you, by you & with you.
              </h2>
            </div>
            <p
              className="mt-[8px] max-w-[46vw] text-[clamp(15px,0.9375vw,18px)] text-ink"
              style={{
                lineHeight: "var(--lh-body-nohemi-regular-lg)",
                letterSpacing: "var(--ls-body-nohemi-regular-lg)",
              }}
            >
              Make travel feel calmer, clearer, and more worth it with
              TravelOstyle. Our journeys are designed around real people — your
              budgets, your rhythms, your hopes and the realities you are
              working with. We promise you honest guidance, thoughtful planning,
              and a travel experience that feels looked after from the get-go.
            </p>
          </div>

          <div className="relative z-10 h-[39vw] w-[30vw]">
            <div className="absolute left-[-1vw] top-[15vw] text-[#2E2F8F]">
              <Image
                src="/star.svg"
                alt="small-line"
                width={58}
                height={58}
                className="h-auto w-full"
              />

              <Image src="/star.svg" alt="small-line" width={42} height={42} />
            </div>

            <div className="absolute right-[5vw] top-[21vw] text-[1.5vw] text-[#2E2F8F]">
              <Image src="/star.svg" alt="small-line" width={40} height={40} />
            </div>
            <div className="absolute right-[7vw] top-[3vw] z-10 h-[18vw] w-[15.8vw] rotate-[-8deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/Tree.svg"
                alt="tree"
                width={100}
                height={100}
                className="h-auto w-[15.8vw] object-cover rotate-[10deg]"
              />
            </div>
            <div className="absolute left-[3vw] top-[17vw] z-10 h-[20.2vw] w-[17.7vw] rotate-[5deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <Image
                src="/Road.svg"
                alt="road"
                width={100}
                height={100}
                className="h-auto w-[17.7vw] object-cover rotate-[-6deg]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="block md:hidden relative overflow-hidden bg-[#F8F7F5] pt-6 pb-10 px-5 w-full flex flex-col">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    
          <div className="absolute top-[-20px] right-[47px] w-[170px] opacity-100">
         
          </div>
          <div className="absolute top-[217px] left-[-5px]   opacity-100">
            <Image
              src="/ResLine2Journey.svg"
              alt=""
              width={170}
              height={80}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-[283px] opacity-100 width-[180px]">
            <Image
              src="/ResLine3Journey.svg"
              alt=""
              width={180}
              height={100}
              className="w-full h-auto"
            />
          </div>
        </div>

      <div className="absolute top-[-7vw] right-[35px] w-[170px] z-0 pointer-events-none">
    <Image
      src="/ResLine1Journey.svg"
      alt=""
      width={170}
      height={80}
      className="w-full h-auto"
    />
  </div>

  <div className=" relative z-10 w-full pt-[35px]">
   <h2
  className="
    font-taprom
    font-normal
    text-[11vw]
    leading-[27px]
    tracking-[0.01em]
    text-[#2A2522]
  "
>
  <span className="inline-block bg-[#F1E3D8] px-[3px] py-[1px]">
    Journeys made
  </span>

  <br />

  <span className="inline-block bg-[#F1E3D8] px-[3px] py-[1px]">
    for you, by you &
  </span>

  <br />

  <span className="inline-block bg-[#F1E3D8] px-[3px] py-[1px]">
    with you.
  </span>
</h2>
    <p className="mt-4 max-w-[285px] text-[14px] leading-[24px] text-[#3E3E3E] font-sans">
      Make travel feel calmer, clearer, and more worth it with TravelOstyle.
    </p>
  </div>

        <div className="relative mt-8 h-[355px] w-full z-10">
          <div className="absolute left-[123px] top-[58px] z-30 text-[#4043A8]">
            <Image src="/star.svg" alt="star" width={18} height={18} />
          </div>

          <div className="absolute right-[140px] bottom-[45px] z-30 text-[#4043A8]">
            <Image src="/star.svg" alt="star" width={20} height={20} />
          </div>
          <div className="absolute right-[155px] bottom-[32px] z-30 text-[#4043A8]">
            <Image src="/star.svg" alt="star" width={30} height={30} />
          </div>

          <div className="absolute right-[-20px] top-0 rotate-[-6deg] bg-white border-[2px] border-[#4043A8] p-[2px] pb-5 shadow-md z-10">
            <Image
              src="/Tree.svg"
              alt="Palm Tree Horizon"
              width={190}
              height={190}
              className="w-[180px] h-[190px] object-cover rotate-[8deg]"
            />
          </div>

          <div className="absolute left-[-16px] top-[84px] rotate-[8deg] bg-white border-[2px] border-[#4043A8] p-[8px] pb-5 shadow-lg z-20">
            <Image
              src="/Road.svg"
              alt="Scenic Mountain Road"
              width={190}
              height={190}
              className="w-[180px] h-[190px] object-cover rotate-[-6deg]"
            />
          </div>
        </div>

        <p className="relative z-10 mx-auto max-w-[300px] text-center text-[14px] leading-[24px] text-[#3E3E3E] font-sans">
          Our journeys are designed around real people — your budgets, your
          rhythms, your hopes and the realities you are working with. We promise
          you honest guidance, thoughtful planning, and a travel experience that
          feels looked after from the get-go.
        </p>
        <div className="w-full h-[2px] bg-[#4A4A4A] mt-8" />
      </section>
    </>
  );
}
