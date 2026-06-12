import Navbar from "../../components/AboutUs/Navbar";
import SearchBar from "../../components/AboutUs/SearchBar";
import Hero from "../../components/AboutUs/Hero";
import TravelForm from "../../components/HomePage/FindYourJourney/TravelForm";
export default function AboutUs() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />
      <TravelForm />
      <Hero />
    </div>
  );
}