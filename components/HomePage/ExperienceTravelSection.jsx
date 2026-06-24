import Image from "next/image";

export default function ExperienceTravelSection() {
  const cards = [
    {
      title: "Destination\nKnowledge",
      desc: "We help you understand what suits your season, pace, budget and purpose of travel",
      stars: 1,
    },
    {
      title: "Operational\nCare",
      desc: "Good travel is felt in the absence of friction. We think ahead, organize clearly, and communicate openly.",
      stars: 2,
    },
    {
      title: "Response\nSpeed",
      desc: "When something matters to you, it matters to us. You can always reach out to us for anything.",
      stars: 3,
    },
    {
      title: "On-Ground\nSupport",
      desc: "If plans change, we won't leave it to you to figure it out alone. We're in this together.",
      stars: 4,
    },
  ];

  return (
    <section className="w-full bg-[#f4f4f4] max-md:bg-[#fcfcfc] px-6 py-16 md:px-14 max-md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 max-md:max-w-[390px] max-md:gap-8">
        
        <div className="max-w-[500px]">
          <h2 className="mb-6 font-taprom text-[2.4vw] leading-[1.4] text-[#1A1A1A] max-md:text-[28px] max-md:leading-[36px] max-md:mb-5">
            Experience travel the <br className="max-md:hidden" /> way it <br className="md:hidden" /> should be <br />
            with TravelOStyle
          </h2>

          <p className="mb-4 text-[0.9vw] leading-7 text-[#1A1A1A] max-md:text-[13px] max-md:leading-[22px] max-md:text-[#4a4a4a]">
            Our team comes bearing 30+ years of experience within the travel
            industry — across budgets, travel styles, and expectations. We have
            fulfilled journeys by land, air and cruise, for travellers from all
            spheres of life.
          </p>

          <p className="text-[14px] leading-7 text-[#1A1A1A] max-md:text-[13px] max-md:leading-[22px] max-md:text-[#4a4a4a]">
            Our recommendations come from knowledge, and a thirst to explore the
            world and journey beyond what we&apos;ve always known.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-md:flex max-md:flex-col max-md:gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[4px] max-md:rounded-[6px] border border-[#5b5fae] max-md:border-[#7175c0]/60 bg-[#e8edc9] max-md:bg-[#eef3d4] p-6 max-md:p-5 flex flex-col"
            >
            
              <div className="mb-5 max-md:mb-3 flex items-center gap-0.5">
                {[...Array(card.stars)].map((_, i) => (
                  <Image
                    key={i}
                    src="/ConcaveStar.svg"
                    alt="star"
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] max-md:w-[18px] max-md:h-[18px]"
                  />
                ))}
              </div>
              <h3 className="mb-2 whitespace-pre-line text-[1.2vw] font-semibold leading-[1.2] text-[#1A1A1A] max-md:text-[16px] max-md:leading-[20px] max-md:font-bold max-md:whitespace-normal">
                {card.title}
              </h3>
              <p className="text-[0.8vw] leading-6 text-[#1A1A1A] max-md:text-[13px] max-md:leading-[20px] max-md:text-[#333333]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}