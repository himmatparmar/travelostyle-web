import SearchBar from "@/components/JourneyDetailPage/SearchBar";
import Hero from "../../components/BlogDetailPage/Hero";
import BlogContent from "@/components/BlogDetailPage/BlogContent";
import Footer from "../../components/Footer";
import { slugify } from "@/lib/slugify";

export default async function BlogDetail() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jsonapi/node/blog_detail?include=field_hero_image.field_media_image,field_banner_image.field_media_image,field_gallery_images.field_media_image,field_categories`,
    {
      cache: "no-store",
    }
  );

  const response = await res.json();

  const blog = response.data?.[0];

  if (!blog) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen">
        <SearchBar />

        <div className="flex flex-col items-center justify-center py-24 text-center">
          <h2 className="font-[Nohemi] text-[28px] font-semibold tracking-[0.05em] text-[#1A1A1A]">
            Coming Soon
          </h2>
          <p className="mt-3 max-w-[420px] text-[14px] text-[#4A4A4A]">
            We&apos;re working on new stories for The TOS Travel Journal.
            Check back soon.
          </p>
        </div>

        <Footer />
      </div>
    );
  }

  const categories =
    response.included?.filter(
      (item: any) => item.type === "taxonomy_term--categories"
    ) || [];

  const bannerMedia = response.included?.find(
    (item: any) =>
      item.type === "media--image" &&
      item.id === blog.relationships.field_banner_image.data.id
  );

  const bannerImage = response.included?.find(
    (item: any) =>
      item.type === "file--file" &&
      item.id === bannerMedia?.relationships.field_media_image.data.id
  );

  const galleryRefs = blog.relationships?.field_gallery_images?.data || [];

  const galleryImages = galleryRefs
    .map((ref: any) => {
      const media = response.included?.find(
        (item: any) => item.type === "media--image" && item.id === ref.id
      );
      return response.included?.find(
        (item: any) =>
          item.type === "file--file" &&
          item.id === media?.relationships?.field_media_image?.data?.id
      );
    })
    .filter(Boolean);

  const getSlug = (item: any) => {
    const alias = (item.attributes?.path?.alias || "").replace(/^\/+/, "");
    return alias || slugify(item.attributes?.title || "");
  };

  // Order blogs oldest -> newest so Previous/Next follow Drupal's
  // publish order (based on the "created" date).
  const sortedBlogs = [...(response.data || [])].sort(
    (a: any, b: any) =>
      new Date(a.attributes.created).getTime() -
      new Date(b.attributes.created).getTime()
  );

  const currentIndex = sortedBlogs.findIndex((item: any) => item.id === blog.id);

  const previousBlog =
    currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null;
  const nextBlog =
    currentIndex >= 0 && currentIndex < sortedBlogs.length - 1
      ? sortedBlogs[currentIndex + 1]
      : null;

  const previousPost = previousBlog
    ? { title: previousBlog.attributes.title, slug: getSlug(previousBlog) }
    : null;

  const nextPost = nextBlog
    ? { title: nextBlog.attributes.title, slug: getSlug(nextBlog) }
    : null;

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <SearchBar />

      <Hero
        blog={blog}
        categories={categories}
      />

      <BlogContent
        blog={blog}
        categories={categories}
        bannerImage={bannerImage}
        galleryImages={galleryImages}
        previousPost={previousPost}
        nextPost={nextPost}
      />

      <Footer />
    </div>
  );
}