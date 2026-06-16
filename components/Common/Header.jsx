import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#F6F6F6] px-14 py-2">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
     
          <h1 className="text-[42px] font-light tracking-[2px] text-[#1A1A1A] font-taprom">
            TRAVEL<span className="italic">O</span>STYLE
          </h1>
          <div className="flex items-center gap-9 text-[14px] font-medium text-[#1E1E1E]">
            <button>About</button>
            <Link href="/itinerary">
  <button >
    Group Journeys
  </button>
</Link>
            <button>Private Journeys</button>
            <button>Tailor-made Journeys</button>
            <button>Destinations</button>
            <button>Offers</button>
          </div>
        </div>
        
       
      </div>
  );
}

