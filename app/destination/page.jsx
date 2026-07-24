import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";
import Destination from "../../components/Destination/Destination";
import Footer from "../../components/Footer";
import Line from "../../components/Destination/Line";


export default function Page() {
    return( 
    <>
    <SearchBar/>
    <Line/>
    <Destination/>
      <Footer />
    </>
  );
}
