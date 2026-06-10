import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="h-6 bg-[#312783] text-white text-[12px] flex items-center justify-between px-8">
        <span>
          Speak to our travel advisor (773) 093-8067 | Open 10am-7pm CST
        </span>

        <div className="flex gap-4">
          <span>FAQs</span>
          <span>Contact Us</span>
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

        <ul
          className="flex gap-10 text-[18px] font-normal tracking-[0.05em] text-[#1A1A1A]"
          style={{ fontFamily: "Nohemi" }}
        >
          <li>About</li>
          <li>Group Journeys</li>
          <li>Private Journeys</li>
          <li>Tailor-made Journeys</li>
          <li>Destinations</li>
          <li>Offers</li>
        </ul>
      </div>
    </>
  );
}