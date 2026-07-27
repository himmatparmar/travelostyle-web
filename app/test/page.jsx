import SearchBar from "@/components/JourneyDetailPage/SearchBar";
import Comparison from "../../components/Comparison/Comparison";
import Footer from "../../components/Footer";
import TravelOStylePromise from "@/components/HomePage/TravelOStylePromise";


export default function Page() {
    return( 
    <>
    <SearchBar/>
    <Comparison/>
      {/* <TravelOStylePromise /> */}
      <Footer />
    </>
  );
}
