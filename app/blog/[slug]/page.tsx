import SearchBar from "@/components/JourneyDetailPage/SearchBar";
import Hero from "@/components/BlogDetailPage/Hero";
import BlogContent from "@/components/BlogDetailPage/BlogContent";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import {
  getAllBlogs,
  findBlogBySlug,
  getAdjacentPosts,
  resolveBlogImage,
  resolveBlogCategories,
} from "@/lib/blog";

export default async function BlogDetailBySlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: blogs, included } = await getAllBlogs();

  if (blogs.length === 0) {
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

  const blog = findBlogBySlug(blogs, slug);

  if (!blog) {
    notFound();
  }

  const { previousPost, nextPost } = getAdjacentPosts(blogs, blog.id);
  const categories = resolveBlogCategories(blog, included);
  const bannerImage = resolveBlogImage(blog, included, "field_banner_image");

  const galleryRefs = blog.relationships?.field_gallery_images?.data || [];
  const galleryImages = galleryRefs
    .map((ref: any) => {
      const media = included.find(
        (item: any) => item.type === "media--image" && item.id === ref.id,
      );
      return included.find(
        (item: any) =>
          item.type === "file--file" &&
          item.id === media?.relationships?.field_media_image?.data?.id,
      );
    })
    .filter(Boolean);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <SearchBar showAllJourneys={true} />

      <Hero blog={blog} categories={categories} />

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
