import Image from "next/image";

export default function JourneySection() {
  return (
    <section className="relative overflow-hidden py-[6vw] bg-[#f6f6f6]  w-[96vw] h-[48.15vw]">
      <div className="absolute right-[-3vw] top-[-2vw] z-20 w-[55vw] rotate-[2deg]">
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
        
       
        <div className="max-w-[48vw]">
          <div className="inline-block bg-[#F0E4DC]  ">
            <h2 className="font-serif text-[2.7vw] font-taprom text-[#1A1A1A]">
              Journeys made for you, by you & with you.
            </h2>
          </div>

          <p className="mt-[1vw] max-w-[46vw] text-[0.95vw] leading-[1.9vw] text-[#2F2F2F]">
            Make travel feel calmer, clearer, and more worth it with
            TravelOstyle. Our journeys are designed around real people —
            your budgets, your rhythms, your hopes and the realities you are
            working with. We promise you honest guidance, thoughtful planning,
            and a travel experience that feels looked after from the get-go.
          </p>
        </div>

        <div className="relative z-10 h-[32vw] w-[30vw]">
          <div className="absolute left-[4vw] top-[12vw]  text-[#2E2F8F]">
          <Image
          src="/star.svg"
          alt="small-line"
          width={58}
          height={58}
          className="h-auto w-full"
        />
          <Image
          src="/star.svg"
          alt="small-line"
          width={42}
          height={42}
        />
          </div>
          <div className="absolute right-[1vw] top-[25vw] text-[1.5vw] text-[#2E2F8F]">
           <Image
          src="/star.svg"
          alt="small-line"
          width={40}
          height={40}
        />
          </div>

          <div className="absolute right-[2vw] top-[5vw] z-10 rotate-[-8deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] w-[15.8vw] h-[18vw]" >
            <Image
              src="/Tree.svg"
              alt="tree"
              width={100}
              height={100}
              className="h-auto w-[15.8vw] object-cover rotate-[10deg]"
            />
          </div>
          <div className="absolute left-[8vw] top-[16vw] z-10 rotate-[5deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] w-[17.7vw] h-[20.2vw]">
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
  );
}