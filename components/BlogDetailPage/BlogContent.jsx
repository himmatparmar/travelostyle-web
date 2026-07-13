import Image from "next/image";
import RecommendedBlogs from "./RecommendedBlogs";

export default function BlogContent() {
  return (
    <section className="px-[60px] pb-[80px]">
      <div className="mt-[44px] flex justify-between gap-[76px]">
        {/* LEFT SIDE */}
        <div className="w-[1008px]">
          <p className="text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            There are some journeys that feel less like a holiday and more like
            an introduction to an entire world. India’s Golden Triangle is one
            of them.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            Connecting Delhi, Agra, and Jaipur, this iconic route offers a rich,
            colourful, and deeply memorable experience of North India. It is
            called the Golden Triangle because of the triangular shape these
            three cities form on the map, but the name also feels fitting for
            another reason: every stop on this journey reveals something
            precious.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            From grand forts and Mughal monuments to bustling bazaars, royal
            palaces, sacred spaces, and unforgettable food, the Golden Triangle
            is one of the best ways to experience the beauty, contrast, and
            energy of India.
          </p>

          <Image
            src="/golden-triangle.svg"
            alt="Golden Triangle"
            width={1008}
            height={410}
            className="mt-[36px] w-[1008px] h-[410px] object-cover"
          />

          <h2 className="mt-[40px] text-[24px] font-semibold leading-[40px] tracking-[0.05em] text-[#1A1A1A]">
            Delhi: Where the Journey Begins
          </h2>

          <p className="mt-[24px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            The trip usually begins in Delhi, a city that immediately makes you
            feel the pulse of India. It is fast, layered, historic, and modern
            all at once. One moment, you are walking through the narrow lanes of
            Old Delhi, surrounded by the aroma of street food, spice shops, and
            sweet stalls. The next, you are standing before wide boulevards,
            colonial-era buildings, and peaceful gardens.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            Delhi is a city of contrasts, and that is what makes it so
            fascinating. The Red Fort, Jama Masjid, India Gate, Humayun’s Tomb,
            Qutub Minar, and Lotus Temple each show a different side of the
            capital. Every monument carries a story, and every street feels
            alive with movement.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            For first-time visitors, Delhi is the perfect opening chapter. It
            introduces you to India’s history, diversity, food, and rhythm in a
            way that is impossible to forget.
          </p>
          <div className="mt-[48px] flex gap-[32px]">
            <Image
              src="/agra-left.svg"
              alt="Agra"
              width={408}
              height={536}
              className="w-[408px] h-[536px] object-cover object-center"
            />

            <Image
              src="/agra-right.svg"
              alt="Taj Mahal"
              width={408}
              height={536}
              className="w-[408px] h-[536px] object-cover object-center"
            />
          </div>

          <h2 className="mt-[40px] text-[24px] font-semibold leading-[40px] tracking-[0.05em] text-[#1A1A1A]">
            Agra: The Magic of the Taj Mahal
          </h2>

          <p className="mt-[24px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            From Delhi, the journey continues to Agra, home to one of the most
            admired monuments in the world: the Taj Mahal.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            No photograph truly prepares you for seeing it in person. The first
            glimpse of its white marble dome feels almost unreal. Whether seen
            at sunrise, when the light is soft and golden, or later in the day,
            when the marble glows against the sky, the Taj Mahal has a quiet
            beauty that stays with you.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            But Agra is more than just the Taj Mahal. Agra Fort is another
            incredible highlight, with its red sandstone walls, courtyards, and
            views across the Yamuna River. The city also offers glimpses of
            Mughal craftsmanship, marble inlay work, local markets, and
            traditional sweets like petha.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            Agra brings a sense of romance and wonder to the Golden Triangle. It
            is the part of the journey where history feels emotional, personal,
            and grand.
          </p>

          <Image
            src="/taj-full.svg"
            alt="Taj Mahal"
            width={982}
            height={473}
            className="mt-[40px] w-[982px] h-[473px] object-cover"
          />

          {/* Jaipur Section */}

          <h2 className="mt-[72px] text-[24px] font-semibold leading-[40px] tracking-[0.05em] text-[#1A1A1A]">
            Jaipur: The Royal Pink City
          </h2>

          <p className="mt-[24px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            The final stop is Jaipur, Rajasthan's famous Pink City. If Delhi is
            energetic and Agra is poetic, Jaipur is royal, colourful, and full
            of character.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            The city is known for its magnificent forts, palaces, textiles,
            jewellery, and vibrant markets. Amber Fort is one of the most
            striking experiences of the trip, rising beautifully against the
            hills. The City Palace gives a glimpse into royal life, while Hawa
            Mahal, with its delicate honeycomb-like façade, is one of Jaipur's
            most photographed landmarks.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            Jaipur is also a paradise for shopping and design lovers. From
            block-printed fabrics and blue pottery to gemstones, traditional
            juttis, and handcrafted souvenirs, the city is full of artistry.
            Even the streets feel visually rich, with their pink-toned
            buildings, decorated doors, and busy bazaars. There is a warmth to
            Jaipur that makes it a wonderful final chapter of the journey. It
            leaves you with colour, craft, and a sense of regal charm.
          </p>

          <Image
            src="/jaipur-image.svg"
            alt="Jaipur"
            width={982}
            height={473}
            className="mt-[40px] w-[982px] h-[473px] object-cover"
          />
          {/* Why the Golden Triangle */}

          <h2 className="mt-[56px] text-[24px] font-semibold leading-[40px] tracking-[0.05em] text-[#1A1A1A]">
            Why the Golden Triangle Is Such a Great Experience
          </h2>

          <p className="mt-[24px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            What makes the Golden Triangle so special is the variety it offers
            in a short period of time. In one trip, you experience three very
            different cities, each with its own personality.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            Delhi gives you history, culture, and the excitement of a capital
            city. Agra gives you one of the world's most beautiful monuments and
            a powerful sense of Mughal heritage. Jaipur gives you royal
            architecture, colour, craft, and the charm of Rajasthan.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            Together, they create a complete and deeply satisfying travel
            experience.
          </p>

          <p className="mt-[28px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]">
            The route is also very convenient, especially for first-time
            visitors to India. The distances between the cities are manageable,
            the road and rail connections are well established, and the
            itinerary can be comfortably completed in around five to seven days.
            For travellers who want a strong first impression of India without
            feeling overwhelmed by too much distance, the Golden Triangle is
            ideal.
          </p>

          {/* Previous / Next */}

          <div className="mt-[72px] flex items-center justify-between">
            <button className="flex items-center gap-[12px] text-[14px] font-medium text-[#1A1A1A]">
              <Image
                src="/ArrowLeft.svg"
                alt="Previous"
                width={24}
                height={24}
              />
              <span>Previous Post Name</span>
            </button>

            <button className="flex items-center gap-[12px] text-[14px] font-medium text-[#1A1A1A]">
              <span>Next Post Name</span>
              <Image
                src="/ArrowUpRight.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[552px]">
          <h3 className="text-[24px] font-semibold leading-[40px] tracking-[0.05em] text-[#1A1A1A]">
            Categories
          </h3>

          <div className="mt-[20px]">
            {/* First Row */}
            <div className="flex gap-[12px]">
              <button className="w-[134px] h-[31px] rounded-full border border-[#1A1A1A] text-[16px] font-normal text-[#1A1A1A]">
                Experiences
              </button>

              <button className="w-[169px] h-[31px] rounded-full border border-[#1A1A1A] text-[16px] font-normal text-[#1A1A1A]">
                News & Updates
              </button>

              <button className="w-[157px] h-[31px] rounded-full border border-[#1A1A1A] text-[16px] font-normal text-[#1A1A1A]">
                Tips & Planning
              </button>
            </div>

            {/* Second Row */}
            <div className="mt-[16px]">
              <button className="w-[135px] h-[31px] rounded-full border border-[#1A1A1A] text-[16px] font-normal text-[#1A1A1A]">
                Destinations
              </button>
            </div>
          </div>

          <div className="mt-[36px] border-b border-[#1A1A1A]" />

          <h3 className="mt-[34px] text-[24px] font-semibold leading-[40px] text-[#1A1A1A]">
            Recommended Blogs
          </h3>
          <RecommendedBlogs />
          {/* Divider */}
          <div className="mt-[28px] border-b border-[#1A1A1A]" />

          {/* Subscribe */}
          <div className="mt-[32px]">
            <h3 className="text-[24px] font-semibold leading-[40px] text-[#1A1A1A]">
              Subscribe To Our Newsletter
            </h3>

            {/* Name */}
            <div className="mt-[30px]">
              <label className="block text-[16px] text-[#1A1A1A]">
                Your Name<span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Your first name"
                className="mt-[8px] w-full border-b border-[#1A1A1A] pb-[10px] text-[14px] outline-none placeholder:text-[#B5B5B5]"
              />
            </div>

            {/* Email */}
            <div className="mt-[28px]">
              <label className="block text-[16px] text-[#1A1A1A]">
                Email ID<span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Your Email ID"
                className="mt-[8px] w-full border-b border-[#1A1A1A] pb-[10px] text-[14px] outline-none placeholder:text-[#B5B5B5]"
              />
            </div>

            {/* Checkbox */}
            <div className="mt-[28px] flex items-start gap-[14px]">
              <input
                type="checkbox"
                className="mt-[2px] h-[22px] w-[22px] accent-[#2C3078]"
              />

              <p className="text-[15px] leading-[24px] text-[#1A1A1A]">
                I agree to receive news, updates and more from TravelOStyle
              </p>
            </div>

            {/* Button */}
            <button className="mt-[24px] h-[45px] rounded-[100px] bg-[#2C3078] px-[21px] text-[16px] font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
