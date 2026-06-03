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
    <section className="w-full bg-[#f4f4f4] px-6 py-16 md:px-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="max-w-[500px]">
          <h2 className="mb-6 font-taprom text-[2.4vw] leading-[1.4] text-[#1A1A1A]">
            Experience travel the way it <br />
            should be with TravelOStyle
          </h2>

          <p className="mb-4 text-[0.9vw] leading-7 text-[#1A1A1A]">
            Our team comes bearing 30+ years of experience within the travel
            industry — across budgets, travel styles, and expectations. We have
            fulfilled journeys by land, air and cruise, for travellers from all
            spheres of life.
          </p>

          <p className="text-[14px] leading-7 text-[#1A1A1A]">
            Our recommendations come from knowledge, and a thirst to explore the
            world and journey beyond what we ve always known.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-[4px] border border-[#5b5fae] bg-[#e8edc9] p-6"
            >
     
              <div className="mb-5 flex items-center">
                {[...Array(card.stars)].map((_, i) => (
                  <Image
                    key={i}
                    src="/ConcaveStar.svg"
                    alt="star"
                    width={30}
                    height={30}
                  />
                ))}
              </div>

              <h3 className="mb-2 whitespace-pre-line text-[1.2vw] font-semibold leading-[1.2] text-[#1A1A1A]">
                {card.title}
              </h3>

              <p className="text-[0.8vw] leading-6 text-[#1A1A1A]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}