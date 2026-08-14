import Image from "next/image";

export default function LetsFindOut() {
  return (
    <>
    {/* MOBILE */}
    <section className="lg:hidden bg-white overflow-hidden px-5 py-16">
      <h2 className="text-[26px] font-semibold leading-[36px] text-[#1A1A2E]">
        Curious about what&apos;s possible?
        <br />
        Let&apos;s find out together
      </h2>

      <div className="relative w-full max-w-[320px] h-[300px] mt-10 mx-auto">
        <div className="absolute top-0 right-0 w-[190px] h-[220px] rotate-[9.87deg] border-2 border-[#2C3078] bg-white shadow-[0_15px_25px_rgba(26,26,26,0.12)] p-2">
          <Image
            src="/Dubai.svg"
            alt=""
            width={180}
            height={180}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-[210px] h-[240px] rotate-[-6.48deg] border-2 border-[#2C3078] bg-white shadow-[0_15px_25px_rgba(26,26,26,0.12)] p-2 z-10">
          <Image
            src="/Dubai.svg"
            alt=""
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="mt-10 text-[15px] leading-[26px] text-[#4A4A4A]">
        Whether you know exactly where you want to go or you&apos;re still at
        the &apos;somewhere warm, sometime soon&apos; stage – TravelOStyle is
        here. Start a conversation, browse the journeys, or just tell us how
        you like to travel. That&apos;s usually enough to begin.
      </p>

      <button className="mt-8 w-full h-[44px] rounded-[100px] bg-[#2C3078] text-white text-[16px] font-medium">
        Talk to a Travel Advisor
      </button>
    </section>

    {/* DESKTOP */}
    <section className="hidden lg:block bg-white overflow-hidden px-[70px] py-[100px]">
      <div className="flex items-center justify-between pb-[70px]">

        {/* Left Content */}
        <div className="max-w-[700px]">
          <h2 className="text-[40px] font-semibold leading-[56px] text-[#1A1A2E]">
            Curious about what's possible?
            <br />
            Let's find out together
          </h2>

          <p className="mt-6 text-[18px] leading-[32px] text-[#4A4A4A]">
            Whether you know exactly where you want to go or you're still at
            the 'somewhere warm, sometime soon' stage – TravelOStyle is here.
            Start a conversation, browse the journeys, or just tell us how you
            like to travel. That's usually enough to begin.
          </p>

          <button className="mt-10 w-[269px] h-[44px] rounded-[100px] bg-[#2C3078] text-white text-[16px] font-medium">
            Talk to a Travel Advisor
          </button>
        </div>

        {/* Right — overlapping polaroid photos */}
        <div className="relative  w-[600px] h-[600px]">

          {/* Back photo: upper-right, tilted clockwise */}
          <div className="absolute top-0 right-0 w-[413px] h-[470px] rotate-[9.87deg] border-2 border-[#2C3078] bg-white shadow-[0_15px_25px_rgba(26,26,26,0.12)] p-4">
            <Image
              src="/Dubai.svg"
              alt=""
              width={373}
              height={320}
              className="w-[370px] h-[370px] object-cover"
            />
          </div>

          {/* Front photo: lower-left, tilted counter-clockwise */}
          <div className="absolute bottom-[-41px] left-[-65px] w-[464px] h-[529px] rotate-[-6.48deg] border-2 border-[#2C3078] bg-white shadow-[0_15px_25px_rgba(26,26,26,0.12)] p-4 z-10">
            <Image
              src="/Dubai.svg"
              alt=""
              width={424}
              height={370}
              className="w-[415x] h-[415px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
