import Navbar from "../../components/AboutUs/Navbar";
import Hero from "../../components/AboutUs/Hero";
import OriginStory from "../../components/AboutUs/OriginStory";
import TravelForm from "../../components/HomePage/FindYourJourney/TravelForm";
import TravelBetter from "../../components/AboutUs/TravelBetter";
import TravelExperience from "../../components/AboutUs/TravelExperience";
import GuestReview from "../../components/AboutUs/GuestReview";
import LetsFindOut from "../../components/AboutUs/LetsFindOut";
import Footer from "../../components/Footer";
export default function AboutUs() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />
      <TravelForm />
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