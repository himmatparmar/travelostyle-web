import Navbar from "../../components/AboutUs/Navbar";
import Hero from "../../components/BlogDetailPage/Hero";
import BlogContent from "@/components/BlogDetailPage/BlogContent";
import Footer from "../../components/Footer";
export default function BlogDetail() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Navbar />
      <Hero />
      <BlogContent />
       <Footer />
    </div>
  );
}