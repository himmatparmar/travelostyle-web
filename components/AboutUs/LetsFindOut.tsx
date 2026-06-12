import Image from "next/image";

export default function LetsFindOut() {
  return (
    <section className="px-[170px] py-[140px]">
      <div className="flex items-center justify-between gap-[20px]">

        {/* Left Content */}
        <div className="w-[520px]">
          <h2 className="w-[852px] text-[48px] font-semibold leading-[56px]">
            Curious about what's possible?
            <br />
            Let's find out together
          </h2>

          <p className="mt-6 w-[520px] text-[18px] leading-[32px] text-[#4A4A4A]">
            Whether you know exactly where you want to go or you're still at
            the ‘somewhere warm, sometime soon’ stage – TravelOStyle is here.
            Start a conversation, browse the journeys, or just tell us how you
            like to travel. That's usually enough to begin.
          </p>

          <button className="mt-10 w-[269px] h-[37px] rounded-[100px] bg-[#2C3078] text-white text-[16px] font-medium">
            Talk to a Travel Advisor
          </button>
        </div>

        {/* Right Images */}
        <div className="relative w-[600px] h-[520px] -ml-[40px]">

          {/* Back Photo */}
          <div className="absolute top-[10px] right-[60px] w-[413px] h-[471px] rotate-[9.87deg] border-2 border-[#2C3078] bg-white shadow-[0_15px_25px_rgba(26,26,26,0.10)] p-5">
              alt=""
              width={373}
              height={320}
              className="w-full h-auto"
            
          </div>

          {/* Front Photo */}
          <div className="absolute bottom-[10px] left-[20px] w-[464px] h-[529px] rotate-[-6.48deg] border-2 border-[#2C3078] bg-white shadow-[0_15px_25px_rgba(26,26,26,0.10)] p-5 z-10">
            <Image
              src="/LetsFindOut1.svg"
              alt=""
              width={424}
              height={370}
              className="w-full h-auto"
            />
          </div>
        </div>
        </div>
        

    
    </section>
  );
}