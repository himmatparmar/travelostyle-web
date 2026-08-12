import Image from "next/image";
import heroImage from "./Hero.png";
import BlogGrid from "./BlogGrid";
import { slugify } from "@/lib/slugify";

export default async function Blog() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jsonapi/node/blog_detail?include=field_banner_image,field_banner_image.field_media_image,field_categories`,
    {
      cache: "no-store",
    }
  );

  const { data, included = [] } = await res.json();

  // Pagination (9 per page = 3 columns x 3 rows) is handled client-side
  // inside BlogGrid, so all blogs are resolved here.
  const blogs = data;

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

  const resolvedBlogs = blogs.map((blog) => {
    const mediaId = blog.relationships?.field_banner_image?.data?.id;

    const media = included.find(
      (item) => item.type === "media--image" && item.id === mediaId
    );

    const fileId = media?.relationships?.field_media_image?.data?.id;

    const file = included.find(
      (item) => item.type === "file--file" && item.id === fileId
    );

    const imageUrl = file
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${file.attributes.uri.url}`
      : "/recommended-blog.svg";

    const categoryRefs = blog.relationships?.field_categories?.data || [];

    const categoryNames = categoryRefs
      .map((ref) => {
        const cat = included.find(
          (item) =>
            item.type === "taxonomy_term--categories" && item.id === ref.id
        );
        return cat?.attributes?.name;
      })
      .filter(Boolean);

    const categoryName = categoryNames[0] || "Experiences";

    const dateLabel = new Date(blog.attributes.created).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );

    const alias = (blog.attributes?.path?.alias || "").replace(/^\/+/, "");
    const slug = alias || slugify(blog.attributes.title || "");

    return {
      id: blog.id,
      title: blog.attributes.title,
      imageUrl,
      categoryName,
      categoryNames,
      dateLabel,
      slug,
    };
  });

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

        <BlogGrid blogs={resolvedBlogs} categories={categories} />

      </div>

    </section>
  );
}