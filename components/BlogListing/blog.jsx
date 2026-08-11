import Image from "next/image";
import Link from "next/link";
import heroImage from "./Hero.png";

export default async function Blog() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jsonapi/node/blog_detail?include=field_banner_image,field_banner_image.field_media_image,field_categories`,
    {
      cache: "no-store",
    }
  );

  const { data, included = [] } = await res.json();

  // Show first 9 blogs = 3 columns x 3 rows
  const blogs = data.slice(0, 9);

  const categoryRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jsonapi/taxonomy_term/categories`,
    {
      cache: "no-store",
    }
  );

  const { data: categoryData = [] } = await categoryRes.json();

  const categories = [
    "All",
    ...categoryData.map((cat) => cat.attributes.name),
  ];

  return (
    <section className="w-full bg-white">

    {/* =====================================================
    HERO
===================================================== */}

{/* HERO */}

<section className="relative w-full overflow-hidden">

  <div
    className="
      relative
      mx-auto
      h-[500px]
      w-full
      max-w-[1704px]
    "
  >

    {/* DOTTED CURVE */}
  <svg
  className="
    pointer-events-none
    absolute
    left-[-10px]
    top-[15px]
    h-[430px]
    w-[940px]
   max-md:hidden

  "
  viewBox="0 0 940 430"
  fill="none"
>
 <path
  d="
    M -10 365

    C 55 350, 105 320, 160 288

    C 215 255, 270 240, 310 205

    C 345 175, 365 145, 360 120

    C 355 98, 368 78, 392 66

    C 418 53, 448 57, 458 90

    C 460 89, 458 108, 440 118

    C 421 128, 398 124, 392 109

    C 386 95, 397 77, 420 64

    C 455 44, 505 40, 560 47

    C 625 56, 690 69, 755 60
    

    C 820 51, 875 39, 925 40
  "
  stroke="#292D73"
  strokeWidth="1.5"
  strokeDasharray="5 5"
  strokeLinecap="round"
  strokeLinejoin="round"
/>
</svg>
    {/* TITLE */}
   <div
  className="
    absolute
    left-[70px]
    top-[270px]
    z-10
     
  "
>
      <h1
        className="
          inline-block
          bg-[#F3E5DC]
          px-[5px]
          py-[2px]
          font-serif
          text-[30px]
          italic
          leading-none
          text-[#171717]
        "
      >
        The TOS Travel Journal
      </h1>
    </div>
    {/* MOBILE JOURNAL TITLE */}



    {/* HERO IMAGE */}

  {/* HERO IMAGE */}
<div
  className="
    absolute
    right-4
    top-5
    h-[500px]
    w-[600px]
    max-md:top-[90px]
    overflow-hidden
  "
>
  <Image
    src={heroImage}
    alt="Travel Journal"
    priority
    fill
    className="object-cover"
  />

</div>
</div>

</section>
<div className="h-[80px]" />
<div className="h-[55px]" />
      {/* =====================================================
          BLOG CONTENT
      ===================================================== */}
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-12 sm:px-8 lg:px-12">

        {/* Categories */}
        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-[11px] font-medium text-[#222] sm:text-[13px]">
            Categories
          </h2>

          <div className="flex flex-wrap justify-end gap-1.5 sm:gap-2">

            {categories.map((category, index) => (
              <button
                key={category}
                className={`
                  rounded-full
                  border
                  px-2.5
                  py-[4px]
                  text-[6px]
                  leading-none
                  sm:px-3
                  sm:py-[5px]
                  sm:text-[8px]

                  ${
                    index === 0
                      ? "border-[#292D73] bg-[#292D73] text-white"
                      : "border-[#9B9B9B] bg-white text-[#333]"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

<div className="mb-5 w-full h-[2px] bg-[#1A1A1A]" />
        {/* =====================================================
            BLOG GRID
        ===================================================== */}

<div
  className="
    grid
    grid-cols-1
    gap-5
    sm:grid-cols-2
    lg:grid-cols-3
    lg:[grid-template-columns:repeat(3,524px)]
  "
>
          {blogs.map((blog) => {

            /* ===============================================
               IMAGE RESOLUTION
            =============================================== */

            const mediaId =
              blog.relationships?.field_banner_image?.data?.id;

            const media = included.find(
              (item) =>
                item.type === "media--image" &&
                item.id === mediaId
            );

            const fileId =
              media?.relationships?.field_media_image?.data?.id;

            const file = included.find(
              (item) =>
                item.type === "file--file" &&
                item.id === fileId
            );

            const imageUrl = file
              ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${file.attributes.uri.url}`
              : "/recommended-blog.svg";


            /* ===============================================
               CATEGORY RESOLUTION
            =============================================== */

            const categoryId =
              blog.relationships?.field_categories?.data?.[0]?.id;

            const category = included.find(
              (item) =>
                item.type === "taxonomy_term--categories" &&
                item.id === categoryId
            );

            const categoryName =
              category?.attributes?.name || "Experiences";


            /* ===============================================
               CARD
            =============================================== */

            return (
             <div
  key={blog.id}
  className="
    flex
    w-[524px]
    max-w-full
    flex-col
    overflow-hidden
    rounded-[10px]
    border-2
    border-[#1A1A1A]
    bg-[#FAFAFA]
  "
>

                {/* TOP */}
                <div className="flex items-center justify-between px-[12px] py-[10px]">

                  <p className="text-[9px] font-semibold text-[#1A1A1A]">
                    {new Date(
                      blog.attributes.created
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>

                  <button
                    className="
                      flex
                      h-[25px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#1A1A1A]
                      bg-white
                      px-[10px]
                      text-[8px]
                      text-[#1A1A1A]
                    "
                  >
                    {categoryName}
                  </button>

                </div>


                {/* IMAGE */}
               {/* IMAGE */}

 {/* IMAGE */}
<div className="px-[12px]">

  <Image
    src={imageUrl}
    alt={blog.attributes.title || "Blog"}
    width={524}
    height={296}
    className="
      block
      h-[296px]
      w-full
      object-cover
    "
  />

</div>   


                {/* TITLE */}
                <div className="min-h-[105px] px-[12px] pt-[12px]">

                  <h4
                    className="
                      text-[11px]
                      font-semibold
                      leading-[18px]
                      tracking-[0.02em]
                      text-[#1A1A1A]
                    "
                  >
                    {blog.attributes.title}
                  </h4>

                </div>


                {/* BOTTOM */}
                <div className="mt-auto px-[12px] pb-[10px]">

                  <div className="border-t border-[#1A1A1A]" />

                  <Link
                    href={`/blog/${blog.id}`}
                    className="mt-[10px] flex items-center justify-between"
                  >

                    <span
                      className="
                        text-[8px]
                        font-semibold
                        tracking-[0.08em]
                        text-[#1A1A1A]
                      "
                    >
                      READ MORE
                    </span>

                    <Image
                      src="/ArrowUpRight.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                    />

                  </Link>

                </div>

              </div>
            );
          })}

        </div>


        {/* =====================================================
            PAGINATION
        ===================================================== */}

        <div className="flex items-center justify-center gap-4 pt-8">

          <button className="text-[9px] text-[#777]">
            ←
          </button>

          <button className="text-[9px] font-semibold text-[#292D73]">
            1
          </button>

          <button className="text-[9px] text-[#999]">
            2
          </button>

          <button className="text-[9px] text-[#999]">
            3
          </button>

          <button className="text-[9px] text-[#777]">
            →
          </button>

        </div>

      </div>

    </section>
  );
}