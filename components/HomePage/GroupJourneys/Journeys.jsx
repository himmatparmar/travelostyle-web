import Image from "next/image";

export default function Journey({
  title,
  imageSrc,
  imageQuote,
  description,
  steps,
  btnText,
  bgColor,
}) {
  return (
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
                <p
                  className="mt-2 text-[1.8vw] text-[#111] font-taprom select-none"
                >
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
                  <div
                    key={index}
                    className={`px-5 py-2 border-[#4A4A4A]`}
                  >
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
  );
}