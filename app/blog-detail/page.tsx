import SearchBar from "@/components/JourneyDetailPage/SearchBar";
import Hero from "../../components/BlogDetailPage/Hero";
import BlogContent from "@/components/BlogDetailPage/BlogContent";
import Footer from "../../components/Footer";

export default async function BlogDetail() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jsonapi/node/blog_detail?include=field_hero_image.field_media_image,field_banner_image.field_media_image,field_gallery_images.field_media_image,field_categories`,
    {
      cache: "no-store",
    }
  );

  const response = await res.json();

  const blog = response.data[0];

  const categories =
    response.included?.filter(
      (item) => item.type === "taxonomy_term--categories"
    ) || [];

  const bannerMedia = response.included?.find(
  (item) =>
    item.type === "media--image" &&
    item.id === blog.relationships.field_banner_image.data.id
);

const bannerImage = response.included?.find(
  (item) =>
    item.type === "file--file" &&
    item.id === bannerMedia?.relationships.field_media_image.data.id
);

const galleryMedia = response.included?.find(
  (item) =>
    item.type === "media--image" &&
    item.id === blog.relationships.field_gallery_images.data[0]?.id
);

const galleryImage = response.included?.find(
  (item) =>
    item.type === "file--file" &&
    item.id === galleryMedia?.relationships.field_media_image.data.id
);

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
  galleryImage={galleryImage}
/>
      <Footer />
    </div>
  );
}