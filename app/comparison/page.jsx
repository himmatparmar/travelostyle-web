import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";
import Comparison from "../../components/Comparison/Comparison";
import Footer from "../../components/Footer";
import TravelOStylePromise from "@/components/HomePage/TravelOStylePromise";


export default function Page() {
    return( 
    <>
    <div className="border-b-2 border-[black]">
    <SearchBar/>
    </div>
    <Comparison/>
      <TravelOStylePromise />
      <Footer />
    </>
  );
}
