import Image from "next/image";

export default async function RecommendedBlogs({
  currentBlogId,
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jsonapi/node/blog_detail?include=field_banner_image,field_banner_image.field_media_image,field_categories`,
    {
      cache: "no-store",
    }
  );

  const { data, included } = await res.json();

  const filteredBlogs = data.filter(
    (item) => item.id !== currentBlogId
  );

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

        const categoryId =
          blog.relationships.field_categories.data[0]?.id;

        const category = included.find(
          (item) =>
            item.type === "taxonomy_term--categories" &&
            item.id === categoryId
        );

        const categoryName = category?.attributes?.name || "Experiences";

        return (
          <div
            key={blog.id}
            className="mt-[20px] flex h-[640px] flex-col overflow-hidden rounded-[10px] border-2 border-[#1A1A1A] bg-[#FAFAFA]"
          >
            {/* Top */}
            <div className="flex items-center justify-between px-[16px] py-[14px]">
              <p className="text-[12px] font-semibold text-[#1A1A1A]">
                {new Date(blog.attributes.created).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
              </p>

              <button className="flex h-[31px] items-center justify-center rounded-full border border-[#1A1A1A] bg-white px-[16px] text-[12px] text-[#1A1A1A]">
                {categoryName}
              </button>
            </div>

            {/* Image */}
            <div className="px-[16px]">
              <Image
                src={imageUrl}
                alt="Recommended Blog"
                width={524}
                height={296}
                className="h-[296px] w-[524px] object-cover"
              />
            </div>

            {/* Title */}
            <div className="min-h-[170px] px-[16px] pt-[16px]">
              <h4 className="text-[18px] font-semibold leading-[32px] tracking-[0.05em] text-[#1A1A1A]">
                {blog.attributes.title}
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
        );
      })}
    </>
  );
}