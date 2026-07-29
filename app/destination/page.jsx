import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";
import Destination from "../../components/Destination/Destination";
import Footer from "../../components/Footer";
import ExploreAllJourneys from "../../components/Destination/ExploreAllJourneys";
import Form from '../../components/Destination/Form';
import Region from "../../components/Destination/Region";


export default function Page() {
    return( 
    <>
    <SearchBar/>
    <ExploreAllJourneys/>
    <Region/>
    <Destination/>
    <Form/>
      <Footer />
    </>
  );
}
