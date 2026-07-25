import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";
import Destination from "../../components/Destination/Destination";
import Footer from "../../components/Footer";
import ExploreAllJourneys from "../../components/Destination/ExploreAllJourneys";


export default function Page() {
    return( 
    <>
    <SearchBar/>
    <ExploreAllJourneys/>
    <Destination/>
      <Footer />
    </>
  );
}
