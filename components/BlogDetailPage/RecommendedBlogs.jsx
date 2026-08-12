import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

export default async function RecommendedBlogs({ currentBlogId }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jsonapi/node/blog_detail?include=field_banner_image,field_banner_image.field_media_image,field_categories`,
    {
      cache: "no-store",
    }
  );

  const { data, included } = await res.json();

  const filteredBlogs = data.filter((item) => item.id !== currentBlogId);

  return (
    <>
      {filteredBlogs.slice(0, 3).map((blog) => {
        const mediaId = blog.relationships.field_banner_image.data?.id;

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

        const categoryId = blog.relationships.field_categories.data[0]?.id;

        const category = included.find(
          (item) =>
            item.type === "taxonomy_term--categories" &&
            item.id === categoryId
        );

        const categoryName = category?.attributes?.name || "Experiences";

        const alias = (blog.attributes?.path?.alias || "").replace(
          /^\/+/,
          ""
        );
        const slug = alias || slugify(blog.attributes.title || "");

        return (
          <div
            key={blog.id}
            className="mt-5 flex flex-col overflow-hidden rounded-[10px] border-2 border-[#1A1A1A] bg-[#FAFAFA]"
          >
            {/* Top */}
            <div className="flex items-center justify-between px-[14px] py-[12px]">
              <p className="text-[11px] font-semibold text-[#1A1A1A]">
                {new Date(blog.attributes.created).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </p>

              <button className="flex h-[26px] items-center justify-center rounded-full border border-[#1A1A1A] bg-white px-[12px] text-[11px] text-[#1A1A1A]">
                {categoryName}
              </button>
            </div>

            {/* Image */}
            <div className="px-[14px]">
              <div className="relative w-full aspect-[524/296]">
                <Image
                  src={imageUrl}
                  alt="Recommended Blog"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title */}
                <div className="min-h-[105px] px-[12px] pt-[12px]">
  <h4 className="text-[14px] font-semibold leading-[20px] tracking-[0.02em] text-[#1A1A1A]">
    {blog.attributes.title}
  </h4>
</div>

{/* Bottom */}
<div className="mt-[10px] px-[14px] pb-[12px]">
  <div className="border-t border-[#1A1A1A]" />
  <Link
    href={`/blog-detail/${slug}`}
    className="mt-[10px] flex items-center justify-between"
  >
    <span className="text-[11px] font-semibold tracking-[0.06em] text-[#1A1A1A]">
      READ MORE
    </span>
    <Image src="/ArrowUpRight.svg" alt="Arrow" width={16} height={16} />
  </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}