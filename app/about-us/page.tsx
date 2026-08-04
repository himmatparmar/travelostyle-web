import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";
import Hero from "../../components/AboutUs/Hero";
import OriginStory from "../../components/AboutUs/OriginStory";
import TravelBetter from "../../components/AboutUs/TravelBetter";
import TravelExperience from "../../components/AboutUs/TravelExperience";
import GuestReview from "../../components/AboutUs/GuestReview";
import LetsFindOut from "../../components/AboutUs/LetsFindOut";
import Footer from "../../components/Footer";
export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      <div className="border-b-2 border-[#2C3078]">
      <SearchBar />
      </div>
      <Hero />
      <OriginStory />
      <TravelBetter />
      <TravelExperience />
      <GuestReview />
      <LetsFindOut />
       <Footer />
    </div>
  );
}