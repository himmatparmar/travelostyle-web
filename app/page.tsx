import SearchBar from "../components/HomePage/FindYourJourney/SearchBar"
import Index from "../components/HomePage/GroupJourneys";
import JourneySection from "../components/HomePage/JourneySection";
import YourNextTrip from "../components/HomePage/YourNextTrip";
import ContactInquiry from "../components/HomePage/ContactInquiry";
import ExperienceTravelSection from "../components/HomePage/ExperienceTravelSection";
// import TravelMap from "../components/HomePage/TravelMap";
// import TestimonialSection from "../components/HomePage/TestimonialSection";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-[#fafafa] w-[96vw] h-[54.15vw]">
     <SearchBar/>
     <JourneySection/>
     <YourNextTrip/>
     <Index/>
     <ContactInquiry/>
     <ExperienceTravelSection/>
     {/* <TravelMap/>
     <TestimonialSection/> */}
    </div>
  );
}
