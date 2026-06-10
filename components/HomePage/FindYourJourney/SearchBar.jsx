import Image from "next/image";
import TravelForm from "./TravelForm";

export default function SearchBar() {
  return (
    <section className="w-full overflow-hidden border border-[#7C4DFF]">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-[#2E2787] px-4 md:px-14 py-2 text-[10px] md:text-[11px] text-white">
        <p className="truncate">
          Speak to our travel advisor (773) 983-8067 | open 10am-7pm CST
        </p>

        <div className="flex items-center gap-4 md:gap-6">
          <button>FAQs</button>
          <button className="hidden md:block">Contact Us</button>
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#F6F6F6] px-4 md:px-14 py-2">
        <div className="relative flex items-center justify-between border-b border-gray-300 pb-4">
          <Image
            src="/MenuToggle.svg"
            alt="Search"
            width={16}
            height={16}
            className="block md:hidden text-2xl"
          />
          <img
            src="/TravelOStyleBlack.svg"
            alt="TravelOStyle"
            className="h-auto w-[140px] md:w-[309px] md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9 text-[14px] font-medium text-[#1E1E1E]">
            <button>About</button>
            <button>Group Journeys</button>
            <button>Private Journeys</button>
            <button>Tailor-made Journeys</button>
            <button>Destinations</button>
            <button>Offers</button>
          </div>

          {/* Mobile Search */}
          <Image
            src="/Search.svg"
            alt="Search"
            width={16}
            height={16}
            className="block md:hidden"
          />
        </div>

        {/* Desktop Form Only */}
        <div className="hidden md:block">
          <TravelForm />
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[550px] md:h-[720px]">
        <img
          src="italy.svg"
          alt="travel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full flex-col justify-center md:justify-between px-5 md:px-14 py-8 md:py-14">
          <div className="mt-0 md:mt-24 max-w-[750px]">
            <h2 className="text-[32px] md:text-[58px] font-bold leading-[40px] md:leading-[72px] tracking-[-1px] md:tracking-[-2px] text-white">
              Experience the world most loved destinations; without the
              guesswork.
            </h2>

            <p className="mt-5 md:mt-8 max-w-[520px] text-[14px] md:text-[16px] leading-[24px] md:leading-[30px] text-white/90">
              From the spice-laced alleyways of Marrakech to the art-rich
              museums of Rome – choose from the journeys that our travellers
              come home raving about.
            </p>

            <button className="mt-6 md:mt-8 rounded-full bg-white px-5 md:px-7 py-3 text-[13px] md:text-[14px] font-semibold text-[#2E2787] hover:bg-gray-100 transition">
              Explore Popular Destinations
            </button>
          </div>

          {/* Bottom Controls Desktop Only */}
         <div className="flex items-end justify-between">
            {/* Left Controls */}
            <div>
              <p className="mb-4 text-[11px] tracking-[1px] text-white">
                Greece, Europe
              </p>

              <div className="flex items-center gap-3">
                <button>
                  <Image
                    src="/WhiteLeftArrow.svg"
                    alt="Previous"
                    width={50}
                    height={24}
                  />
                </button>

                <button>
                  <Image
                    src="/WhiteRightArrow.svg"
                    alt="Next"
                    width={50}
                    height={24}
                  />
                </button>

                <div className="hidden md:block ml-6 h-[1px] w-[520px] bg-white/80" />
              </div>
            </div>

            {/* Right Side Desktop */}
            <div className="hidden md:block text-right">
              <p className="mb-3 text-[10px] text-white/80">
                Images are only for representation purposes
              </p>

              <button className="rounded-md border border-white bg-[#2E2787] px-8 py-3 text-[14px] font-medium text-white">
                Compare Trips
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
