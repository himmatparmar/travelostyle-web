"use client";
import Image from "next/image";
import { useState } from "react";

export default function Journey({
  title,
  imageSrc,
  imageQuote,
  description,
  steps,
  btnText,
  bgColor,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block">
        <section className="w-full py-5 [webkit-tap-highlight-color:transparent]">
          <div className="mx-auto max-w-[1180px] px-4">
            <div
              className="overflow-hidden rounded-[6px] border border-[#4A4A4A]"
              style={{ backgroundColor: bgColor }}
            >
              <div className="border-b border-[#4A4A4A] py-3 text-center">
                <h2 className="text-[1.2vw] font-bold uppercase tracking-[1px] text-[#1c1c1c]">
                  {title}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">
                <div className="border-b border-[#4A4A4A] p-4 lg:border-b-0 lg:border-r">
                  <Image
                    src={imageSrc}
                    alt="star"
                    width={610}
                    height={300}
                    className="h-[250px]"
                  />

                  <div className="px-4">
                    <p className="mt-2 text-[1.8vw] text-[#111] font-taprom select-none">
                      {imageQuote}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="border-b border-[#4A4A4A] px-6 py-4">
                    <p className="max-w-[95%] text-[#3f3f3f] text-[0.9vw]">
                      {description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {steps.map((item, index) => (
                      <div key={index} className={`px-5 py-2 border-[#4A4A4A]`}>
                        <div className="text-[0.9vw] font-bold font-normal text-[#1A1A1A]">
                          {item.id}
                        </div>

                        <h3 className="mt-5 text-[0.9vw] font-semibold leading-[1.3] text-[#1A1A1A]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[0.8vw] text-[#1A1A1A]">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#4A4A4A] px-[1.2vw] py-[0.8vw]">
                    <button className="rounded-full bg-[#2f3695] px-5 py-2 text-[1.05vw] font-semibold text-white transition duration-300 hover:bg-[#232a7c]">
                      {btnText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="lg:hidden w-full max-w-[320px] mx-auto border border-[#575757] overflow-hidden mt-6"
        style={{ backgroundColor: bgColor }}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between px-4 py-3 border-b border-[#575757] cursor-pointer"
        >
          <h2 className="uppercase font-bold text-[18px] sm:text-[16px] leading-[18px] tracking-[0.4px] text-[#222] max-w-[70%]">
            {title}
          </h2>

          {isOpen ? (
            <Image
              src="/CircleSub.svg"
              alt="Next"
              height={24}
              width={48}
              className="w-[32px] h-auto"
            />
          ) : (
            <Image
              src="/CircleAdd.svg"
              alt="Next"
              height={24}
              width={48}
              className="w-[32px] h-auto"
            />
          )}
        </div>

        <div className="px-4 pt-4 ">
          <Image
            src={imageSrc}
            alt=""
            width={500}
            height={320}
            className="w-full h-auto object-cover"
          />

          <p className="mt-3 mb-2 text-[21px] leading-5 text-[#2f2f2f] font-taprom">
            {imageQuote}
          </p>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[1200px]" : "max-h-0"
          }`}
        >
          <div className="border-t border-[#575757] border-b-[2px] border-[#575757] px-4 py-4">
            <p className="text-[16px] leading-[20px] text-[#444]">
              {description}
            </p>
          </div>

          {steps.map((item, index) => (
            <div key={index} className="px-6 py-4 text-center last:border-b-0">
              <span className="block text-[24px] font-semibold text-[#222]">
                {index + 1}
              </span>
              <h3 className="mt-3 text-[18px] font-bold text-[#222]">
                {item.title}
              </h3>

              <p className="mt-2 text-[16px] leading-[19px] text-[#555] text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="py-5">
          <hr className="border-0 border-t border-[#575757] mb-5" />
          <div className="px-4">
            <button className="w-full rounded-full bg-[#24398D] py-[11px] text-white text-[18px] font-semibold">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
