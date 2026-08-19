import Image from "next/image";
import TalkToAdvisorButton from "@/components/GeneralInquiryForm/TalkToAdvisorButton";

export default function PrivateJourneysLuxury() {
  return (
    <section className="py-16">
      <div className="relative h-[330px] md:h-[450px] lg:h-[520px] w-full overflow-hidden rounded-1xl">
        <Image
          src="/Ship.svg"
          alt="Private Journey"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[700px] ml-[6vw] md:ml-[10vw] lg:ml-[8vw]">
            <span className="text-white text-[30px] md:text-[46px] font-semibold leading-tight">
              Private Journeys aren&apos;t meant to be luxury
              concepts.
            </span>
              <p className="max-w-[300px] mt-6 text-white/90 text-sm md:text-lg ">
              At TravelOStyle, we make them
              available at more price points than
              most expect.
            </p>

            <TalkToAdvisorButton className="mt-8 bg-white text-[#283593] font-semibold rounded-full px-7 py-3 shadow-lg hover:scale-105 transition duration-300" />
          </div>
          
        </div>

      </div>
    </section>
  );
}