import TopBar from "@/components/Common/TopBar";
import Header from "@/components/Common/Header";
import TravelForm from "./TravelForm"
import Link from "next/link";
export default function SearchBar() {
  return (
    <section className="overflow-hidden border border-[#7C4DFF] w-full">
     
      <TopBar />
      <Header />
      <div className="bg-[#F6F6F6] px-14 py-2">
      <TravelForm/>
      </div>
      <div className="relative h-[720px]">
        <img
          src="italy.svg"
          alt="travel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 flex h-full flex-col justify-between px-14 py-14">
          <div className="mt-24 max-w-[750px]">
            <h2 className="text-[58px] font-bold leading-[72px] tracking-[-2px] text-white">
              Experience the world most loved destinations; without the
              guesswork.
            </h2>

            <p className="mt-8 max-w-[520px] text-[16px] leading-[30px] text-white/90">
              From the spice-laced alleyways of Marrakech to the art-rich
              museums of Rome – choose from the journeys that our travellers
              come home raving about.
            </p>

            <button className="mt-8 rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-[#2E2787] transition hover:bg-gray-100">
              Explore Popular Destinations
            </button>
          </div>

   
          <div className="flex items-end justify-between">
            <div>
              <p className="mb-5 text-[11px] tracking-[1px] text-white">
                Greece, Europe
              </p>

              <div className="flex items-center gap-3">
                <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white text-white">
                  ←
                </button>

                <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white text-white">
                  →
                </button>

                <div className="ml-6 h-[1px] w-[520px] bg-white/80" />
              </div>
            </div>

            <div className="text-right">
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