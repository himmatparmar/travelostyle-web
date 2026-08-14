import Footer from "../../components/Footer";
import TailorMadeJourneyContent from "../../components/TailorMadeJourneys/TailorMadeJourneyContent";
import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";

export default function Page() {
  return (
    <>
       <SearchBar/>
       <TailorMadeJourneyContent/>
      <Footer />
    </>
  );
}
