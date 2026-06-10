import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[180px] overflow-hidden">

      {/* Main curve */}
      <Image
        src="/Vector221.svg"
        alt="curve"
        width={1276}
        height={434}
        className="absolute top-[26px] left-[-260px]"
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

    </section>
  );
}