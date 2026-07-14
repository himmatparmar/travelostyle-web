import Navbar from "../../components/AboutUs/Navbar";
import SearchBar from "../../components/AboutUs/SearchBar";
import Comparison from "../../components/Comparison/Comparison";
import Footer from "../../components/Footer";
import TravelOStylePromise from "@/components/HomePage/TravelOStylePromise";

export default function Page() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Comparison />
      <TravelOStylePromise />
      <Footer />
    </>
  );
}
