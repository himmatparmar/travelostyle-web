import Image from "next/image";
import RecommendedBlogs from "./RecommendedBlogs";

export default function BlogContent({
  blog,
  categories,
  bannerImage,
  galleryImage,
}) {

  console.log("Banner Image:", bannerImage);
  console.log("Gallery Image:", galleryImage);

  return (
    <section className="px-[60px] pb-[80px]">
      <div className="mt-[44px] flex justify-between gap-[76px]">
        {/* LEFT SIDE */}
        <div className="w-[1008px]">
          <div
            className="text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]"
            dangerouslySetInnerHTML={{
              __html: blog.attributes.field_introduction.processed,
            }}
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${bannerImage.attributes.uri.url}`}
            alt="Golden Triangle"
            width={1008}
            height={410}
            className="mt-[36px] w-[1008px] h-[410px] object-cover"
          />

          <h2 className="mt-[40px] text-[24px] font-semibold leading-[40px] tracking-[0.05em] text-[#1A1A1A]">
            Delhi: Where the Journey Begins
          </h2>

          <div
            className="mt-[24px] text-[18px] leading-[36px] tracking-[0.05em] text-[#1A1A1A]"
            dangerouslySetInnerHTML={{
              __html: blog.attributes.field_body.processed,
            }}
          />
          <div className="mt-[48px] flex gap-[32px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${galleryImage.attributes.uri.url}`}
              alt="Agra"
              width={408}
              height={536}
              className="w-[408px] h-[536px] object-cover object-center"
            />

            <Image
  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${galleryImage.attributes.uri.url}`}
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

          <div className="mt-[20px] flex flex-wrap gap-[12px]">
            {categories.map((category) => (
         <button
             key={category.id}
             className="px-[16px] h-[31px] rounded-full border border-[#1A1A1A] text-[16px] font-normal text-[#1A1A1A]"
           >
             {category.attributes.name}
         </button>
         ))}
         </div>

          <div className="mt-[36px] border-b border-[#1A1A1A]" />

          <h3 className="mt-[34px] text-[24px] font-semibold leading-[40px] text-[#1A1A1A]">
            Recommended Blogs
          </h3>
         <RecommendedBlogs currentBlogId={blog.id} />
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
