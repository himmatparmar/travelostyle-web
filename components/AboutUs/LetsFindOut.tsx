import Image from "next/image";
import TalkToAdvisorButton from "@/components/GeneralInquiryForm/TalkToAdvisorButton";

export default function LetsFindOut() {
  return (
    <>
    {/* MOBILE */}
    <section className="lg:hidden bg-[#F9F9F9] overflow-hidden px-5 py-16">
      <h2 className="max-w-[336px] text-[32px] font-semibold leading-[40px] tracking-[0.05em] text-[#000000]">
        Curious about what&apos;s possible? Let&apos;s find out together
      </h2>

      <div className="relative -mx-5 mt-10 h-[470px] w-[calc(100%+40px)]">
        {/* Back photo — upper right, tilted counter-clockwise, bleeds off the right edge */}
        <div className="absolute top-0 left-[107px] w-[284px] h-[324px] -rotate-[9.87deg] border-2 border-[#2C3078] bg-[#FAFAFA] shadow-[0_15px_25px_rgba(26,26,26,0.1)] p-[15px]">
          <Image
            src="/Dubai.svg"
            alt=""
            width={254}
            height={254}
            className="w-full h-[254px] object-cover"
          />
        </div>

        {/* Front photo — lower left, tilted clockwise, bleeds off the left edge */}
        <div className="absolute bottom-0 -left-[100px] z-10 w-[319px] h-[363px] rotate-[6.48deg] border-2 border-[#2C3078] bg-[#FAFAFA] shadow-[0_15px_25px_rgba(26,26,26,0.1)] p-[16px]">
          <Image
            src="/Dubai.svg"
            alt=""
            width={286}
            height={286}
            className="w-full h-[286px] object-cover"
          />
        </div>
      </div>

      <p className="mt-10 text-[18px] leading-[32px] tracking-[0.05em] text-[#000000]">
        Whether you know exactly where you want to go or you&apos;re still at
        the &apos;somewhere warm, sometime soon&apos; stage – TravelOStyle is
        here. Start a conversation, browse the journeys, or just tell us how
        you like to travel. That&apos;s usually enough to begin.
      </p>

      <div className="mt-8 flex justify-center">
        <TalkToAdvisorButton className="h-[44px] w-full md:max-w-[269px] rounded-[100px] bg-[#2C3078] px-6 text-[18px] font-semibold tracking-[0.05em] text-[#FAFAFA]" />
      </div>
    </section>

    {/* DESKTOP */}
    <section className="hidden lg:block bg-white overflow-hidden px-[70px] py-[100px]">
      <div className="flex items-center justify-between pb-[70px]">

        {/* Left Content */}
        <div className="max-w-[700px]">
          <h2 className="text-[40px] font-semibold leading-[56px] text-[#1A1A2E]">
            Curious about what&apos;s possible?
            <br />
            Let's find out together
          </h2>

          <p className="mt-6 text-[18px] leading-[32px] text-[#4A4A4A]">
            Whether you know exactly where you want to go or you're still at
            the &apos;somewhere warm, sometime soon&apos; stage – TravelOStyle is here.
            Start a conversation, browse the journeys, or just tell us how you
            like to travel. That&apos;s usually enough to begin.
          </p>

          <TalkToAdvisorButton className="mt-10 w-[269px] h-[44px] rounded-[100px] bg-[#2C3078] text-white text-[16px] font-medium" />
        </div>

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
