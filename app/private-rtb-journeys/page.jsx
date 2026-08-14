import Footer from "../../components/Footer";
import PrivateJourneyContent from "../../components/PrivateRtbJourneys/PrivateJourneyContent";
import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";

export default function Page() {
  return (
    <>
       <SearchBar/>
       <PrivateJourneyContent/>
      <Footer />
    </>
  );
}
