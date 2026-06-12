import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between bg-[#2E2787] px-14 py-2 text-[11px] text-white">
        <p>
          Speak to our travel advisor (773) 983-8067 | open 10am-7pm CST
        </p>

        <div className="flex items-center gap-6">
          <button>FAQs</button>
          <button>Contact Us</button>
        </div>
      </div>

      <div className="flex items-center justify-between px-14 py-6 border-b border-[#d6d6d6]">
        <Image
          src="/TravelOstyle.png"
          alt="Travel Style"
          width={260}
          height={70}
          priority
        />

         <div className="flex items-center gap-9 text-[14px] font-medium text-[#1E1E1E]">
            <button>About</button>
            <button>Group Journeys</button>
            <button>Private Journeys</button>
            <button>Tailor-made Journeys</button>
            <button>Destinations</button>
            <button>Offers</button>
          </div>
      </div>
    </>
  );
}