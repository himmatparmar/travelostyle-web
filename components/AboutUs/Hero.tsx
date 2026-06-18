import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] mt-5">

      {/* Main curve */}
      <Image
        src="/Vector221.svg"
        alt="curve"
        width={1276}
        height={434}
        className="absolute top-[6px] left-[-257px]"
      />

      {/* Bottom curve */}
      <Image
        src="/Vector220.svg"
        alt="bottom curve"
        width={580}
        height={464}
        className="absolute right-[0px] top-[200px]"
      />

      {/* Heading */}
      <div className="absolute top-[140px] w-full flex justify-center z-10">
        <div className="relative inline-block">
          <div className="absolute left-0 right-0 bottom-[6px] h-[18px] bg-[#F2E2DA]" />

          <h1
            className="
              relative
              font-taprom
              text-[46px]
              leading-none
              text-black
              whitespace-nowrap
              px-4
            "
          >
            Making travel feel like it was always supposed to
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="absolute top-[240px] left-1/2 -translate-x-1/2 z-10 text-center">
        <p className="w-[1070px] text-[17px] font-light leading-[36px] tracking-[0.05em] text-[#4A4A4A]">
          Travel, at its best, is a chance to reconnect with what matters to you. An opportunity to see the
          <br />
          world differently, or simply provide relief, or even come home with a story you actually want to tell.
        </p>

        <p className="mt-[18px] w-[1070px] text-[17px] font-light leading-[36px] tracking-[0.05em] text-[#4A4A4A]">
          Not a logistics puzzle. Not a source of pre-departure dread. Not something
          <br />
          that costs you more energy than it gives back.
        </p>
      </div>

    </section>
  );
}