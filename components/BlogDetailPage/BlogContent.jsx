import Image from "next/image";
import Link from "next/link";
import RecommendedBlogs from "./RecommendedBlogs";

export default function BlogContent({
  blog,
  categories,
  bannerImage,
  galleryImages = [],
  previousPost,
  nextPost,
}) {
  return (
    <section className="px-5 md:px-8 overflow-x-hidden lg:px-[60px] pb-[60px] lg:pb-[80px]">
      <div className="mt-8 lg:mt-[44px] flex flex-col lg:flex-row items-start gap-10 lg:gap-[48px]">
        {/* LEFT SIDE */}
        <div className="min-w-0 flex-1 min-w-0 lg:max-w-[1008px]">
          {blog.attributes.field_introduction?.processed && (
            <div
              className="min-w-0 max-w-full overflow-hidden text-[16px] leading-[30px] tracking-[0.02em] text-ink"
              dangerouslySetInnerHTML={{
                __html: blog.attributes.field_introduction.processed,
              }}
            />
          )}
          {bannerImage && (
            <Image
              src={bannerImage}
              alt="Golden Triangle"
              width={1008}
              height={410}
              className="mt-8 w-[337px] h-[138px] lg:w-[1008px] lg:h-[410px] max-w-full flex-shrink-0 object-cover"
            />
          )}

          {blog.attributes.field_body?.processed && (
            <div
              className="min-w-0 max-w-full overflow-hidden mt-[16px] text-[16px] leading-[30px] tracking-[0.02em] text-ink"
              dangerouslySetInnerHTML={{
                __html: blog.attributes.field_body.processed,
              }}
            />
          )}

          {galleryImages.length > 0 && (
            <div className="mt-10 flex flex-wrap items-start gap-6 lg:gap-[24px]">
              {galleryImages.map(
                (image, index) =>
                  image?.attributes?.uri?.url && (
                    <Image
                      key={image.id || index}
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.attributes.uri.url}`}
                      alt={blog.attributes.title || "Blog image"}
                      width={408}
                      height={536}
                      className="w-[333px] h-[438px] lg:w-[408px] lg:h-[536px] flex-shrink-0 object-cover object-center"
                    />
                  )
              )}
            </div>
          )}

          {/* Previous / Next */}
          {(previousPost || nextPost) && (
            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
              {previousPost ? (
                <Link
                  href={`/blog/${previousPost.slug}`}
                  className="flex items-center gap-[12px] text-[14px] font-medium text-ink self-start sm:self-auto"
                >
                  <Image src="/ArrowLeft.svg" alt="Previous" width={24} height={24} />
                  <span>Previous Post Name</span>
                </Link>
              ) : (
                <span />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="flex items-center gap-[12px] text-[14px] font-medium text-ink self-end sm:self-auto"
                >
                  <span>Next Post Name</span>
                  <Image src="/ArrowUpRight.svg" alt="Next" width={24} height={24} />
                </Link>
              ) : (
                <span />
              )}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="min-w-0 w-full lg:w-[360px] lg:flex-shrink-0">
          <div className="mb-[24px] border-b border-ink lg:hidden" />

          <h3 className="text-[20px] font-semibold leading-[30px] tracking-[0.02em] text-ink">
            Categories
          </h3>

          <div className="mt-[16px] flex flex-wrap gap-[10px]">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex h-[31px] items-center justify-center px-[16px] text-[16px] leading-none rounded-full border border-ink font-normal text-ink"
              >
                {category.attributes.name}
              </button>
            ))}
          </div>

          <div className="mt-[28px] border-b border-ink" />

          <h3 className="mt-[28px] text-[20px] font-semibold leading-[30px] text-ink">
            Recommended Blogs
          </h3>
          <RecommendedBlogs currentBlogId={blog.id} />

          <div className="mt-[24px] border-b border-ink" />

          {/* Subscribe */}
          <div className="mt-[28px]">
            <h3 className="text-[20px] font-semibold leading-[30px] text-ink">
              Subscribe To Our Newsletter
            </h3>

            <div className="mt-[24px]">
              <label className="block text-[14px] text-ink">
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="mt-[8px] w-full border-b border-ink pb-[10px] text-[14px] outline-none placeholder:text-[#B5B5B5]"
              />
            </div>

            <div className="mt-[22px]">
              <label className="block text-[14px] text-ink">
                Email ID<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email ID"
                className="mt-[8px] w-full border-b border-ink pb-[10px] text-[14px] outline-none placeholder:text-[#B5B5B5]"
              />
            </div>

            <div className="mt-[22px] flex items-start gap-[12px]">
              <input
                type="checkbox"
                className="mt-[2px] h-[18px] w-[18px] accent-[#2C3078]"
              />
              <p className="text-[13px] leading-[20px] text-ink">
                I agree to receive news, updates and more from TravelOStyle
              </p>
            </div>

            <button className="mt-6 w-auto h-[42px] rounded-full bg-[#2C3078] px-6 text-[14px] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}