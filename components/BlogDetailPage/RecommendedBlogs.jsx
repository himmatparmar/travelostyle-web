import Image from "next/image";

export default function RecommendedBlogs() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="mt-[20px] flex h-[640px] flex-col overflow-hidden rounded-[10px] border-2 border-[#1A1A1A] bg-[#FAFAFA]"
        >
          {/* Top */}
          <div className="flex items-center justify-between px-[16px] py-[14px]">
            <p className="text-[12px] font-semibold text-[#1A1A1A]">
              March 12, 2026
            </p>

            <button className="flex h-[31px] items-center justify-center rounded-full border border-[#1A1A1A] bg-white px-[16px] text-[12px] text-[#1A1A1A]">
              Experiences
            </button>
          </div>

          {/* Image */}
          <div className="px-[16px]">
            <Image
              src="/recommended-blog.svg"
              alt="Recommended Blog"
              width={524}
              height={296}
              className="h-[296px] w-[524px] object-cover"
            />
          </div>

          {/* Title */}
          <div className="min-h-[170px] px-[16px] pt-[16px]">
            <h4 className="text-[18px] font-semibold leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
              The Golden Triangle: India's Most Unforgettable First Journey
            </h4>
          </div>

          {/* Bottom */}
          <div className="mt-auto px-[16px] pt-[20px] pb-[14px]">
            <div className="border-t border-[#1A1A1A]" />

            <div className="mt-[14px] flex items-center justify-between">
              <span className="text-[12px] font-semibold tracking-[0.08em] text-[#1A1A1A]">
                READ MORE
              </span>

              <Image
                src="/ArrowUpRight.svg"
                alt="Arrow"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}