import SearchBar from "../components/HomePage/FindYourJourney/SearchBar"
import Index from "../components/HomePage/GroupJourneys";
import JourneySection from "../components/HomePage/JourneySection";
import YourNextTrip from "../components/HomePage/YourNextTrip";
import ContactInquiry from "../components/HomePage/ContactInquiry";
import ExperienceTravelSection from "../components/HomePage/ExperienceTravelSection";
import Map from "../components/HomePage/Map";
import TimingSection from "../components/HomePage/TimingSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import TravelOStylePromise from "../components/HomePage/TravelOStylePromise";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div >
     <SearchBar/>
     <JourneySection/>
     <YourNextTrip/>
     <Index/>
     <ContactInquiry/>
     <ExperienceTravelSection/>
     <TimingSection/>
     <Map/>
     <TestimonialSection/>
     <TravelOStylePromise/>
     <Footer />
    </div>
  );
}
